#!/usr/bin/env python3
# /// script
# dependencies = [
#   "openpyxl>=3.1,<4",
# ]
# ///

from __future__ import annotations

import argparse
import importlib
import json
import random
from dataclasses import dataclass
from pathlib import Path
from typing import Any, cast
from urllib.parse import urlencode

TARGET_MODELS = ("gpt_4o", "gpt_5_2")
TARGET_MODES = ("simple", "cot")
TARGET_REALISMS = ("realistic", "unrealistic")
DEFAULT_PER_BUCKET = 18
DEFAULT_BASE_URL = "https://a-coman.github.io/llm-viewer"
DEFAULT_REVIEWERS = ("Lola", "Dominik", "Manuel")
PAGE_COUNT = 3
OUTPUT_FILE_COUNT = 2
WORKSHEET_GUIDE_RICH_LINES = (
    (("Assessing Instances Realism", True),),
    (
        ("0. ", True),
        (
            "Review the following prompts to understand the criteria used during realism evaluation.", 
            False
        ),
    ),
    (
        ("System Judge: https://a-coman.github.io/llm-viewer/gpt_4o/bank/gen1/?view=system-judge-prompt", False),
    ),
    (
        ("User Judge: https://a-coman.github.io/llm-viewer/gpt_4o/bank/gen1/?view=user-judge-prompt", False),
    ),
    (
        ("1. ", True),
        ("Open and review the instance from the hyperlink in the first column.", False),
    ),
    (
        ("2. ", True),
        ("In your corresponding reviewer column, write ", False),
        ("'R'", True),
        (" (realistic), ", False),
        ("'U'", True),
        (" (unrealistic), or ", False),
        ("'D'", True),
        (" (doubtful).", False),
    ),
    (
        ("3. ", True),
        ("Add a short explanation only for U or D, for example: ", False),
        ("'U: It is implausible to make an omelet without eggs.'", True),
    ),
    (
        ("Another valid example: ", False),
        (
            "'D: The component name is too generic for this context.'",
            True,
        ),
    ),
)


@dataclass(frozen=True)
class Candidate:
    model_id: str
    mode: str
    domain: str
    generation_id: str
    realism: str
    url: str
    attempt_id: str | None = None
    category: str | None = None

    @property
    def bucket(self) -> tuple[str, str, str]:
        return (self.model_id, self.mode, self.realism)

    @property
    def instance_id(self) -> str:
        parts = [
            self.model_id,
            self.mode,
            self.domain,
            f"gen{self.generation_id}",
        ]
        if self.category:
            parts.append(self.category)
        return " / ".join(parts)


def parse_args() -> argparse.Namespace:
    script_dir = Path(__file__).resolve().parent
    repo_root = Path(__file__).resolve().parents[2]
    parser = argparse.ArgumentParser(
        description=(
            "Create a balanced random evaluation spreadsheet from logs.json and "
            "judge.json."
        )
    )
    parser.add_argument(
        "--logs",
        type=Path,
        default=repo_root / "public" / "logs.json",
        help="Path to logs.json",
    )
    parser.add_argument(
        "--judge",
        type=Path,
        default=repo_root / "public" / "judge.json",
        help="Path to judge.json",
    )
    parser.add_argument(
        "--output-prefix",
        type=Path,
        default=script_dir / "random_eval",
        help=(
            "Output XLSX prefix path. Generates _1.xlsx and _2.xlsx files. "
            "Default writes random_eval_1.xlsx and random_eval_2.xlsx"
        ),
    )
    parser.add_argument(
        "--seed",
        type=int,
        default=5764515283675,  # chosen by system.nanotime
        help="Random seed for reproducible sampling",
    )
    parser.add_argument(
        "--per-bucket",
        type=int,
        default=DEFAULT_PER_BUCKET,
        help=(
            "Number of instances to sample for each model/mode/realism bucket. "
            "Default 18 creates 144 rows total (12%), split into two 72-row files (6% each)."
        ),
    )
    parser.add_argument(
        "--base-url",
        default=DEFAULT_BASE_URL,
        help="Base viewer URL used in hyperlinks",
    )
    parser.add_argument(
        "--reviewers",
        nargs=3,
        default=list(DEFAULT_REVIEWERS),
        metavar=("USER1", "USER2", "USER3"),
        help=(
            "Reviewer names used for the three worksheet permutations. "
            "Default: Lola Dominik Manuel"
        ),
    )
    return parser.parse_args()


def load_json(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def build_model_lookup(root: dict[str, Any]) -> dict[str, dict[str, Any]]:
    return {
        experiment["id"]: experiment
        for experiment in root.get("experiments", [])
        if experiment.get("id") in TARGET_MODELS
    }


def find_success_attempt(
    attempts: list[dict[str, Any]], attempt_id: str | None
) -> bool:
    if attempt_id:
        return any(
            str(attempt.get("id")) == attempt_id and attempt.get("status") == "success"
            for attempt in attempts
        )
    return any(attempt.get("status") == "success" for attempt in attempts)


def as_dict_list(value: Any) -> list[dict[str, Any]]:
    if not isinstance(value, list):
        return []
    items = cast(list[Any], value)
    result: list[dict[str, Any]] = []
    for item in items:
        if isinstance(item, dict):
            result.append(cast(dict[str, Any], item))
    return result


def normalize_realism(realism: Any) -> str | None:
    if not isinstance(realism, dict):
        return None

    realism_dict = cast(dict[str, Any], realism)

    response_type = realism_dict.get("response_type")
    if response_type in TARGET_REALISMS:
        return str(response_type)

    realistic = realism_dict.get("realistic")
    unrealistic = realism_dict.get("unrealistic")
    doubtful = realism_dict.get("doubtful")
    if not all(isinstance(value, int) for value in (realistic, unrealistic, doubtful)):
        return None

    realistic_int = cast(int, realistic)
    unrealistic_int = cast(int, unrealistic)
    doubtful_int = cast(int, doubtful)

    if realistic_int > unrealistic_int and realistic_int > doubtful_int:
        return "realistic"
    if unrealistic_int > realistic_int and unrealistic_int > doubtful_int:
        return "unrealistic"
    return None


def build_simple_url(
    base_url: str, model_id: str, domain: str, generation_id: str
) -> str:
    return f"{base_url.rstrip('/')}/{model_id}/{domain}/gen{generation_id}/"


def build_cot_url(
    base_url: str,
    model_id: str,
    domain: str,
    generation_id: str,
    category: str,
) -> str:
    query = urlencode({"type": "cot", "category": category})
    return f"{base_url.rstrip('/')}/{model_id}/{domain}/gen{generation_id}/?{query}"


def collect_simple_candidates(
    logs_root: dict[str, Any],
    judge_root: dict[str, Any],
    base_url: str,
) -> list[Candidate]:
    candidates: list[Candidate] = []
    logs_by_model = build_model_lookup(logs_root)
    judge_by_model = build_model_lookup(judge_root)

    for model_id in TARGET_MODELS:
        log_mode = logs_by_model.get(model_id, {}).get("simple", {})
        judge_mode = judge_by_model.get(model_id, {}).get("simple", {})
        judge_by_experiment = {
            experiment.get("experiment_id"): experiment
            for experiment in judge_mode.get("experiments", [])
        }

        for log_experiment in log_mode.get("experiments", []):
            domain = log_experiment.get("domain_name")
            judge_experiment = judge_by_experiment.get(log_experiment.get("id"))
            if not domain or not judge_experiment:
                continue

            judge_by_generation = {
                generation.get("generation_id"): generation
                for generation in judge_experiment.get("generations", [])
            }

            for generation in log_experiment.get("generations", []):
                generation_id = str(generation.get("id"))
                judge_generation = judge_by_generation.get(generation_id)
                if not judge_generation:
                    continue

                realism = normalize_realism(judge_generation.get("realism"))
                if realism not in TARGET_REALISMS:
                    continue

                attempt_id = (
                    str(judge_generation.get("attempt_id"))
                    if judge_generation.get("attempt_id") is not None
                    else None
                )
                attempts = as_dict_list(generation.get("attempts", []))
                if not find_success_attempt(attempts, attempt_id):
                    continue

                candidates.append(
                    Candidate(
                        model_id=model_id,
                        mode="simple",
                        domain=str(domain),
                        generation_id=generation_id,
                        realism=realism,
                        attempt_id=attempt_id,
                        url=build_simple_url(
                            base_url, model_id, str(domain), generation_id
                        ),
                    )
                )

    return candidates


def collect_cot_candidates(
    logs_root: dict[str, Any],
    judge_root: dict[str, Any],
    base_url: str,
) -> list[Candidate]:
    candidates: list[Candidate] = []
    logs_by_model = build_model_lookup(logs_root)
    judge_by_model = build_model_lookup(judge_root)

    for model_id in TARGET_MODELS:
        log_mode = logs_by_model.get(model_id, {}).get("cot", {})
        judge_mode = judge_by_model.get(model_id, {}).get("cot", {})
        judge_by_experiment = {
            experiment.get("experiment_id"): experiment
            for experiment in judge_mode.get("experiments", [])
        }

        for log_experiment in log_mode.get("experiments", []):
            domain = log_experiment.get("domain_name")
            judge_experiment = judge_by_experiment.get(log_experiment.get("id"))
            if not domain or not judge_experiment:
                continue

            judge_by_generation = {
                generation.get("generation_id"): generation
                for generation in judge_experiment.get("generations", [])
            }

            for generation in log_experiment.get("generations", []):
                generation_id = str(generation.get("id"))
                judge_generation = judge_by_generation.get(generation_id)
                if not judge_generation:
                    continue

                judge_categories = {
                    category.get("name"): category
                    for category in judge_generation.get("categories", [])
                }

                for category in generation.get("categories", []):
                    category_name = category.get("name")
                    judge_category = judge_categories.get(category_name)
                    if not category_name or not judge_category:
                        continue

                    realism = normalize_realism(judge_category.get("realism"))
                    if realism not in TARGET_REALISMS:
                        continue

                    attempt_id = (
                        str(judge_category.get("attempt_id"))
                        if judge_category.get("attempt_id") is not None
                        else None
                    )
                    attempts = as_dict_list(
                        category.get("IListInstantiator", {}).get("attempts")
                        or category.get("attempts")
                        or []
                    )
                    if not find_success_attempt(attempts, attempt_id):
                        continue

                    candidates.append(
                        Candidate(
                            model_id=model_id,
                            mode="cot",
                            domain=str(domain),
                            generation_id=generation_id,
                            category=str(category_name),
                            realism=realism,
                            attempt_id=attempt_id,
                            url=build_cot_url(
                                base_url,
                                model_id,
                                str(domain),
                                generation_id,
                                str(category_name),
                            ),
                        )
                    )

    return candidates


def sort_candidates(candidates: list[Candidate]) -> list[Candidate]:
    return sorted(
        candidates,
        key=lambda item: (
            item.model_id,
            item.mode,
            item.realism,
            item.domain,
            int(item.generation_id),
            item.category or "",
            item.attempt_id or "",
        ),
    )


def sample_candidates(
    candidates: list[Candidate], seed: int, per_bucket: int
) -> tuple[list[Candidate], dict[tuple[str, str, str], int]]:
    randomizer = random.Random(seed)
    bucket_map: dict[tuple[str, str, str], list[Candidate]] = {}
    for candidate in sort_candidates(candidates):
        bucket_map.setdefault(candidate.bucket, []).append(candidate)

    availability = {bucket: len(items) for bucket, items in bucket_map.items()}
    selected: list[Candidate] = []
    missing: list[str] = []

    for model_id in TARGET_MODELS:
        for mode in TARGET_MODES:
            for realism in TARGET_REALISMS:
                bucket = (model_id, mode, realism)
                pool = bucket_map.get(bucket, [])
                if len(pool) < per_bucket:
                    missing.append(
                        f"{model_id} / {mode} / {realism}: required {per_bucket}, available {len(pool)}"
                    )
                    continue
                sampled = randomizer.sample(pool, per_bucket)
                selected.extend(sort_candidates(sampled))

    if missing:
        details = "\n".join(missing)
        raise ValueError(
            f"Not enough candidates to satisfy requested sample:\n{details}"
        )

    randomized = sort_candidates(selected)
    randomizer.shuffle(randomized)
    return randomized, availability


def build_output_paths(prefix: Path, file_count: int) -> list[Path]:
    base_name = prefix.stem if prefix.suffix else prefix.name
    return [
        prefix.parent / f"{base_name}_{index}.xlsx"
        for index in range(1, file_count + 1)
    ]


def split_candidates_into_files(
    candidates: list[Candidate], seed: int, file_count: int
) -> list[list[Candidate]]:
    if file_count <= 0:
        raise ValueError("File count must be greater than zero.")

    bucket_map: dict[tuple[str, str, str], list[Candidate]] = {}
    for candidate in sort_candidates(candidates):
        bucket_map.setdefault(candidate.bucket, []).append(candidate)

    if not bucket_map:
        raise ValueError("No candidates selected for file splitting.")

    per_bucket = len(next(iter(bucket_map.values())))
    if per_bucket % file_count != 0:
        raise ValueError(
            f"Per-bucket selected count {per_bucket} is not divisible by file count {file_count}."
        )

    per_file_per_bucket = per_bucket // file_count
    files: list[list[Candidate]] = [[] for _ in range(file_count)]

    for model_id in TARGET_MODELS:
        for mode in TARGET_MODES:
            for realism in TARGET_REALISMS:
                bucket = (model_id, mode, realism)
                pool = bucket_map.get(bucket, [])
                if len(pool) != per_bucket:
                    raise ValueError(
                        f"Bucket {model_id} / {mode} / {realism} has {len(pool)} items, expected {per_bucket}."
                    )

                # Derive a stable per-bucket shuffle from the main seed.
                bucket_seed = f"{seed}:{model_id}:{mode}:{realism}"
                bucket_randomizer = random.Random(bucket_seed)
                bucket_items = list(pool)
                bucket_randomizer.shuffle(bucket_items)

                for file_index in range(file_count):
                    start = file_index * per_file_per_bucket
                    end = start + per_file_per_bucket
                    files[file_index].extend(bucket_items[start:end])

    for file_index, file_candidates in enumerate(files, start=1):
        file_randomizer = random.Random(seed + file_index)
        ordered = sort_candidates(file_candidates)
        file_randomizer.shuffle(ordered)
        files[file_index - 1] = ordered

    return files


def get_reviewer_orders(reviewers: tuple[str, str, str]) -> list[tuple[str, str, str]]:
    first, second, third = reviewers
    return [
        (first, second, third),
        (first, third, second),
        (second, third, first),
    ]


def split_candidates_into_pages(
    candidates: list[Candidate], page_count: int = PAGE_COUNT
) -> list[list[Candidate]]:
    if len(candidates) % page_count != 0:
        raise ValueError(
            f"Cannot split {len(candidates)} candidates evenly across {page_count} pages."
        )

    page_size = len(candidates) // page_count
    return [
        candidates[index * page_size : (index + 1) * page_size]
        for index in range(page_count)
    ]


def populate_sheet(
    sheet: Any,
    candidates: list[Candidate],
    reviewers: tuple[str, str, str],
    font_factory: Any,
    alignment_factory: Any,
    cell_rich_text_factory: Any,
    text_block_factory: Any,
    inline_font_factory: Any,
) -> None:
    reviewer_a, reviewer_b, reviewer_c = reviewers

    def build_rich_text(line_parts: tuple[tuple[str, bool], ...]) -> Any:
        parts: list[Any] = []
        for text, is_bold in line_parts:
            if is_bold:
                parts.append(text_block_factory(inline_font_factory(b=True), text))
            else:
                parts.append(text)
        return cell_rich_text_factory(*parts)

    guide_row = 1
    for line_parts in WORKSHEET_GUIDE_RICH_LINES:
        sheet.append(["", "", "", ""])
        sheet.merge_cells(
            start_row=guide_row,
            start_column=1,
            end_row=guide_row,
            end_column=4,
        )
        guide_cell = sheet[f"A{guide_row}"]

        url = None
        for text, _ in line_parts:
            if "http" in text:
                url_start = text.find("http")
                url = text[url_start:].split()[0]
                break

        guide_cell.value = build_rich_text(line_parts)
        if url:
            guide_cell.hyperlink = url
            guide_cell.style = "Hyperlink"

        guide_cell.alignment = alignment_factory(wrap_text=True, vertical="top")
        guide_row += 1

    sheet.append(["", "", "", ""])
    header_row = guide_row + 1
    sheet.freeze_panes = f"A{header_row + 1}"

    headers = ("Instance Id", reviewer_a, reviewer_b, reviewer_c)
    sheet.append(headers)
    for cell in sheet[header_row]:
        cell.font = font_factory(bold=True)

    for candidate in candidates:
        sheet.append([candidate.instance_id, "", "", ""])

    for row_index, candidate in enumerate(candidates, start=header_row + 1):
        cell = sheet[f"A{row_index}"]
        cell.hyperlink = candidate.url
        cell.style = "Hyperlink"

    sheet.column_dimensions["A"].width = 60
    sheet.column_dimensions["B"].width = 16
    sheet.column_dimensions["C"].width = 16
    sheet.column_dimensions["D"].width = 16


def write_xlsx(
    output_path: Path,
    candidates: list[Candidate],
    reviewers: tuple[str, str, str],
) -> None:
    workbook_module = importlib.import_module("openpyxl")
    styles_module = importlib.import_module("openpyxl.styles")
    rich_text_module = importlib.import_module("openpyxl.cell.rich_text")
    cell_text_module = importlib.import_module("openpyxl.cell.text")
    workbook = workbook_module.Workbook()
    font_factory = styles_module.Font
    alignment_factory = styles_module.Alignment
    cell_rich_text_factory = rich_text_module.CellRichText
    text_block_factory = rich_text_module.TextBlock
    inline_font_factory = cell_text_module.InlineFont

    output_path.parent.mkdir(parents=True, exist_ok=True)
    reviewer_orders = get_reviewer_orders(reviewers)
    paged_candidates = split_candidates_into_pages(candidates, len(reviewer_orders))

    first_sheet = workbook.active
    assert first_sheet is not None

    for index, (reviewer_order, page_candidates) in enumerate(
        zip(reviewer_orders, paged_candidates, strict=True), start=1
    ):
        if index == 1:
            sheet = first_sheet
        else:
            sheet = workbook.create_sheet()

        sheet.title = f"Page {index}"
        populate_sheet(
            sheet,
            page_candidates,
            reviewer_order,
            font_factory,
            alignment_factory,
            cell_rich_text_factory,
            text_block_factory,
            inline_font_factory,
        )

    workbook.save(output_path)


def count_by_key(candidates: list[Candidate], key: str) -> dict[str, int]:
    counts: dict[str, int] = {}
    for candidate in candidates:
        value = str(getattr(candidate, key))
        counts[value] = counts.get(value, 0) + 1
    return dict(sorted(counts.items()))


def count_by_bucket(candidates: list[Candidate]) -> dict[tuple[str, str, str], int]:
    counts: dict[tuple[str, str, str], int] = {}
    for candidate in candidates:
        counts[candidate.bucket] = counts.get(candidate.bucket, 0) + 1
    return counts


def print_page_breakdown(
    selected: list[Candidate], reviewers: tuple[str, str, str], label: str
) -> None:
    reviewer_orders = get_reviewer_orders(reviewers)
    paged_candidates = split_candidates_into_pages(selected, len(reviewer_orders))

    print(f"{label} breakdown:")
    print(f"- Total rows in XLSX: {len(selected)}")
    print(f"- Pages: {len(paged_candidates)}")
    print(f"- Rows per page: {len(paged_candidates[0]) if paged_candidates else 0}")

    overall_buckets = count_by_bucket(selected)
    print("- Overall bucket counts:")
    for model_id in TARGET_MODELS:
        for mode in TARGET_MODES:
            for realism in TARGET_REALISMS:
                bucket = (model_id, mode, realism)
                print(
                    f"  {model_id} / {mode} / {realism}: {overall_buckets.get(bucket, 0)}"
                )

    for index, (page_candidates, reviewer_order) in enumerate(
        zip(paged_candidates, reviewer_orders, strict=True), start=1
    ):
        model_counts = count_by_key(page_candidates, "model_id")
        mode_counts = count_by_key(page_candidates, "mode")
        realism_counts = count_by_key(page_candidates, "realism")
        print(
            f"- Page {index}: {len(page_candidates)} rows | reviewers: "
            f"{reviewer_order[0]}, {reviewer_order[1]}, {reviewer_order[2]}"
        )
        print(f"  models: {model_counts}")
        print(f"  modes: {mode_counts}")
        print(f"  realism: {realism_counts}")


def print_file_breakdown(
    output_paths: list[Path],
    file_candidates: list[list[Candidate]],
    reviewers: tuple[str, str, str],
) -> None:
    print("File split summary:")
    for index, (path, candidates) in enumerate(
        zip(output_paths, file_candidates, strict=True), start=1
    ):
        print(f"- File {index}: {path}")
        print(f"  rows: {len(candidates)}")
        bucket_counts = count_by_bucket(candidates)
        for model_id in TARGET_MODELS:
            for mode in TARGET_MODES:
                for realism in TARGET_REALISMS:
                    bucket = (model_id, mode, realism)
                    print(
                        f"  {model_id} / {mode} / {realism}: {bucket_counts.get(bucket, 0)}"
                    )
        print_page_breakdown(candidates, reviewers, label=f"File {index}")


def print_summary(
    selected: list[Candidate],
    availability: dict[tuple[str, str, str], int],
    per_bucket: int,
) -> None:
    print(f"Selected {len(selected)} instances.")
    print(f"Per bucket target: {per_bucket}")
    for model_id in TARGET_MODELS:
        for mode in TARGET_MODES:
            for realism in TARGET_REALISMS:
                bucket = (model_id, mode, realism)
                selected_count = sum(1 for item in selected if item.bucket == bucket)
                available_count = availability.get(bucket, 0)
                print(
                    f"- {model_id} / {mode} / {realism}: "
                    f"selected {selected_count}, available {available_count}"
                )


def main() -> int:
    args = parse_args()
    logs_root = load_json(args.logs)
    judge_root = load_json(args.judge)
    reviewers = tuple(str(name) for name in args.reviewers)

    candidates = collect_simple_candidates(logs_root, judge_root, args.base_url)
    candidates.extend(collect_cot_candidates(logs_root, judge_root, args.base_url))

    selected, availability = sample_candidates(
        candidates=candidates,
        seed=args.seed,
        per_bucket=args.per_bucket,
    )
    split_files = split_candidates_into_files(
        selected, seed=args.seed, file_count=OUTPUT_FILE_COUNT
    )
    output_paths = build_output_paths(args.output_prefix, OUTPUT_FILE_COUNT)
    for path, file_candidates in zip(output_paths, split_files, strict=True):
        write_xlsx(path, file_candidates, cast(tuple[str, str, str], reviewers))

    print_summary(selected, availability, args.per_bucket)
    print_file_breakdown(
        output_paths, split_files, cast(tuple[str, str, str], reviewers)
    )
    print("Wrote spreadsheets to:")
    for path in output_paths:
        print(f"- {path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
