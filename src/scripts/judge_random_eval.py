#!/usr/bin/env python3
# /// script
# dependencies = [
#   "openpyxl>=3.1,<4",
# ]
# ///

# Judge evaluation sheet: 100 instances, gpt_5_2 only (600-row universe → 100).
# - gpt_5_2 / simple / realistic: 25
# - gpt_5_2 / simple / unrealistic: 25
# - gpt_5_2 / cot / realistic: 25
# - gpt_5_2 / cot / unrealistic: 25
# Per domain: 10 rows total → 5 simple + 5 cot (realistic/unrealistic split as balanced as data allows).
# Excludes: gpt_4o and cot category "invalid".
# Pins rows from random_eval_1.xlsx (gpt_5_2, non-invalid) first; fills the remainder with seed sampling.

from __future__ import annotations

import argparse
import importlib
import random
import sys
from pathlib import Path

_SCRIPT_DIR = Path(__file__).resolve().parent
if str(_SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPT_DIR))

import random_eval as rv

Candidate = rv.Candidate
TARGET_MODES = rv.TARGET_MODES
TARGET_REALISMS = rv.TARGET_REALISMS
collect_simple_candidates = rv.collect_simple_candidates
collect_cot_candidates = rv.collect_cot_candidates
load_json = rv.load_json
sort_candidates = rv.sort_candidates
solve_weighted_sum = rv.solve_weighted_sum
count_by_key = rv.count_by_key

JUDGE_MODEL = "gpt_5_2"
EXCLUDED_COT_CATEGORY = "invalid"
TOTAL_TARGET = 100
PER_BUCKET = 25
DOMAIN_PAIR_CAP = 5
DEFAULT_SEED = rv.DEFAULT_SEED
DEFAULT_BASE_URL = rv.DEFAULT_BASE_URL
DEFAULT_REVIEWERS = ("Lola", "Dominik", "Manuel", "Andrei")
DEFAULT_PIN_XLSX = _SCRIPT_DIR / "random_eval_1.xlsx"
DEFAULT_OUTPUT = _SCRIPT_DIR / "judge_random_eval.xlsx"
GEMINI_COLUMN = "Gemini 3.1 Pro (judge_response)"


def parse_args() -> argparse.Namespace:
    repo_root = Path(__file__).resolve().parents[2]
    parser = argparse.ArgumentParser(
        description=(
            "Build a single-sheet judge evaluation XLSX: 100 balanced gpt_5_2 instances, "
            "optionally pinned from random_eval_1.xlsx."
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
        "--base-url",
        default=DEFAULT_BASE_URL,
        help="Base viewer URL used in hyperlinks",
    )
    parser.add_argument(
        "--seed",
        type=int,
        default=DEFAULT_SEED,
        help="Random seed for sampling rows not covered by --pin-xlsx",
    )
    parser.add_argument(
        "--pin-xlsx",
        type=Path,
        default=DEFAULT_PIN_XLSX,
        help=(
            "XLSX (e.g. random_eval_1.xlsx) whose gpt_5_2 instance_id rows are copied first; "
            "remainder is sampled to reach 100."
        ),
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=DEFAULT_OUTPUT,
        help="Output spreadsheet path",
    )
    parser.add_argument(
        "--skip-pin",
        action="store_true",
        help="Ignore --pin-xlsx and sample all 100 rows from seed only",
    )
    return parser.parse_args()


def filter_judge_candidates(candidates: list[Candidate]) -> list[Candidate]:
    out: list[Candidate] = []
    for c in candidates:
        if c.model_id != JUDGE_MODEL:
            continue
        if c.mode == "cot" and c.category == EXCLUDED_COT_CATEGORY:
            continue
        out.append(c)
    return out


def candidate_by_instance_id(candidates: list[Candidate]) -> dict[str, Candidate]:
    m: dict[str, Candidate] = {}
    for c in candidates:
        iid = c.instance_id
        if iid in m and m[iid] != c:
            raise ValueError(f"Duplicate instance_id in pool: {iid}")
        m[iid] = c
    return m


def read_pinned_instance_ids(path: Path) -> list[str]:
    if not path.is_file():
        return []

    wb_mod = importlib.import_module("openpyxl")
    workbook = wb_mod.load_workbook(path, read_only=True, data_only=True)
    ordered: list[str] = []
    seen: set[str] = set()
    try:
        for sheet in workbook.worksheets:
            for row in sheet.iter_rows(min_col=1, max_col=1, values_only=True):
                value = row[0]
                if not isinstance(value, str):
                    continue
                text = value.strip()
                if not text.startswith(f"{JUDGE_MODEL} /"):
                    continue
                if text in seen:
                    continue
                seen.add(text)
                ordered.append(text)
    finally:
        workbook.close()
    return ordered


def allocate_one_mode(
    mode: str,
    bucket_domain_pool: dict[tuple[str, str, str], dict[str, list[Candidate]]],
    domains: list[str],
    realistic_target: int,
    unrealistic_target: int,
    per_domain_pair_totals: dict[str, int],
) -> dict[tuple[str, str, str], dict[str, int]]:
    if realistic_target + unrealistic_target != sum(per_domain_pair_totals.values()):
        raise ValueError(
            f"Mode {mode}: realistic + unrealistic must equal sum of domain pair totals."
        )

    allocation: dict[tuple[str, str, str], dict[str, int]] = {
        (JUDGE_MODEL, mode, realism): {domain: 0 for domain in domains}
        for realism in TARGET_REALISMS
    }

    pool_by_realism = {
        "realistic": {
            domain: bucket_domain_pool[(JUDGE_MODEL, mode, "realistic")][domain]
            for domain in domains
        },
        "unrealistic": {
            domain: bucket_domain_pool[(JUDGE_MODEL, mode, "unrealistic")][domain]
            for domain in domains
        },
    }

    options_by_domain: dict[str, list[tuple[int, int]]] = {}
    for domain in domains:
        pair_total = per_domain_pair_totals[domain]
        realistic_available = len(pool_by_realism["realistic"][domain])
        unrealistic_available = len(pool_by_realism["unrealistic"][domain])
        if realistic_available + unrealistic_available < pair_total:
            raise ValueError(
                f"Not enough candidates for {mode} / {domain}: need {pair_total}, "
                f"have {realistic_available + unrealistic_available}."
            )

        low = max(0, pair_total - unrealistic_available)
        high = min(pair_total, realistic_available)
        if low > high:
            raise ValueError(
                f"No feasible realistic/unrealistic split for {mode} / {domain}."
            )

        domain_options: list[tuple[int, int]] = []
        for realistic_count in range(low, high + 1):
            imbalance_cost = abs((2 * realistic_count) - pair_total)
            domain_options.append((realistic_count, imbalance_cost))
        options_by_domain[domain] = domain_options

    realistic_counts = solve_weighted_sum(
        options_by_domain, target_sum=realistic_target
    )
    for domain, realistic_count in realistic_counts.items():
        pair_total = per_domain_pair_totals[domain]
        allocation[(JUDGE_MODEL, mode, "realistic")][domain] = realistic_count
        allocation[(JUDGE_MODEL, mode, "unrealistic")][domain] = (
            pair_total - realistic_count
        )

    return allocation


def build_bucket_domain_pool(
    candidates: list[Candidate], domains: list[str]
) -> dict[tuple[str, str, str], dict[str, list[Candidate]]]:
    buckets = [
        (JUDGE_MODEL, mode, realism)
        for mode in TARGET_MODES
        for realism in TARGET_REALISMS
    ]
    pool: dict[tuple[str, str, str], dict[str, list[Candidate]]] = {
        bucket: {domain: [] for domain in domains} for bucket in buckets
    }
    for c in sort_candidates(candidates):
        pool[c.bucket][c.domain].append(c)
    return pool


def sample_from_allocation(
    allocation: dict[tuple[str, str, str], dict[str, int]],
    bucket_domain_pool: dict[tuple[str, str, str], dict[str, list[Candidate]]],
    randomizer: random.Random,
    exclude: set[Candidate],
) -> list[Candidate]:
    selected: list[Candidate] = []
    for bucket in sorted(allocation.keys(), key=lambda b: (b[1], b[2])):
        for domain in sorted(allocation[bucket].keys()):
            need = allocation[bucket][domain]
            if need <= 0:
                continue
            pool = [
                c
                for c in sort_candidates(bucket_domain_pool[bucket][domain])
                if c not in exclude
            ]
            if need > len(pool):
                raise ValueError(
                    f"Pool short for {bucket} / {domain}: need {need}, available {len(pool)}."
                )
            picked = randomizer.sample(pool, need)
            selected.extend(sort_candidates(picked))
    return selected


def count_by_bucket_domain(
    candidates: list[Candidate],
) -> dict[tuple[str, str, str], dict[str, int]]:
    out: dict[tuple[str, str, str], dict[str, int]] = {}
    for c in candidates:
        out.setdefault(c.bucket, {}).setdefault(c.domain, 0)
        out[c.bucket][c.domain] += 1
    return out


def print_bucket_domain_table(candidates: list[Candidate], label: str) -> None:
    domains = sorted({c.domain for c in candidates})
    if not domains:
        print(f"{label} bucket x domain counts: <no data>")
        return

    bucket_domain_counts = count_by_bucket_domain(candidates)
    header = "bucket".ljust(40) + " | " + " | ".join(domains)
    print(f"{label} bucket x domain counts:")
    print(header)
    print("-" * len(header))

    for mode in TARGET_MODES:
        for realism in TARGET_REALISMS:
            bucket = (JUDGE_MODEL, mode, realism)
            row_label = f"{JUDGE_MODEL}/{mode}/{realism}".ljust(40)
            domain_values = [
                str(bucket_domain_counts.get(bucket, {}).get(domain, 0))
                for domain in domains
            ]
            print(f"{row_label} | " + " | ".join(domain_values))


def print_summary(
    selected: list[Candidate], availability: dict[tuple[str, str, str], int]
) -> None:
    print(
        f"Selected {len(selected)} instances ({JUDGE_MODEL} only, cot '{EXCLUDED_COT_CATEGORY}' excluded)."
    )
    print(f"Per bucket target: {PER_BUCKET}")
    for mode in TARGET_MODES:
        for realism in TARGET_REALISMS:
            bucket = (JUDGE_MODEL, mode, realism)
            selected_count = sum(1 for item in selected if item.bucket == bucket)
            available_count = availability.get(bucket, 0)
            print(
                f"- {JUDGE_MODEL} / {mode} / {realism}: "
                f"selected {selected_count}, available {available_count}"
            )
    print(
        f"- Domain counts (global): {dict(sorted(count_by_key(selected, 'domain').items()))}"
    )
    print_bucket_domain_table(selected, label="Global")


def build_full_sample(
    pool: list[Candidate],
    seed: int,
) -> tuple[list[Candidate], dict[tuple[str, str, str], int]]:
    """Sample 100 rows with global/domain balance (no pins)."""
    domains = sorted({c.domain for c in pool})
    if len(domains) * DOMAIN_PAIR_CAP * len(TARGET_MODES) != TOTAL_TARGET:
        raise ValueError("Domain layout does not sum to TOTAL_TARGET.")

    bucket_map: dict[tuple[str, str, str], list[Candidate]] = {}
    for c in sort_candidates(pool):
        bucket_map.setdefault(c.bucket, []).append(c)

    availability = {bucket: len(items) for bucket, items in bucket_map.items()}
    for mode in TARGET_MODES:
        for realism in TARGET_REALISMS:
            bucket = (JUDGE_MODEL, mode, realism)
            if len(bucket_map.get(bucket, [])) < PER_BUCKET:
                raise ValueError(
                    f"{bucket}: required {PER_BUCKET}, available {len(bucket_map.get(bucket, []))}."
                )

    bucket_domain_pool = build_bucket_domain_pool(pool, domains)

    allocation: dict[tuple[str, str, str], dict[str, int]] = {}
    for mode in TARGET_MODES:
        per_domain = {domain: DOMAIN_PAIR_CAP for domain in domains}
        part = allocate_one_mode(
            mode,
            bucket_domain_pool,
            domains,
            realistic_target=PER_BUCKET,
            unrealistic_target=PER_BUCKET,
            per_domain_pair_totals=per_domain,
        )
        allocation.update(part)

    randomizer = random.Random(seed)
    selected = sample_from_allocation(
        allocation, bucket_domain_pool, randomizer, exclude=set()
    )
    randomizer.shuffle(selected)
    return selected, availability


def resolve_pins(
    pin_ids: list[str],
    by_id: dict[str, Candidate],
) -> tuple[list[Candidate], list[str]]:
    pinned: list[Candidate] = []
    missing: list[str] = []
    seen: set[str] = set()
    for iid in pin_ids:
        if iid in seen:
            continue
        seen.add(iid)
        if f" / {EXCLUDED_COT_CATEGORY}" in iid and " / cot / " in iid:
            missing.append(f"{iid} (excluded cot category)")
            continue
        c = by_id.get(iid)
        if c is None:
            missing.append(iid)
            continue
        pinned.append(c)
    return pinned, missing


def build_pinned_then_fill(
    pool: list[Candidate],
    pinned: list[Candidate],
    seed: int,
) -> tuple[list[Candidate], dict[tuple[str, str, str], int]]:
    domains = sorted({c.domain for c in pool})
    pin_set = set(pinned)
    if not pin_set.issubset(set(pool)):
        raise ValueError("Pinned candidates must come from the pool.")

    bucket_map: dict[tuple[str, str, str], list[Candidate]] = {}
    for c in sort_candidates(pool):
        bucket_map.setdefault(c.bucket, []).append(c)

    availability = {bucket: len(items) for bucket, items in bucket_map.items()}
    remaining = [c for c in pool if c not in pin_set]
    bucket_domain_pool = build_bucket_domain_pool(remaining, domains)

    need_bucket: dict[tuple[str, str, str], int] = {}
    need_mode_domain: dict[tuple[str, str], int] = {}
    for mode in TARGET_MODES:
        for domain in domains:
            need_mode_domain[(mode, domain)] = DOMAIN_PAIR_CAP
    for mode in TARGET_MODES:
        for realism in TARGET_REALISMS:
            need_bucket[(JUDGE_MODEL, mode, realism)] = PER_BUCKET

    for c in pinned:
        need_bucket[c.bucket] -= 1
        need_mode_domain[(c.mode, c.domain)] -= 1

    for bucket, need in need_bucket.items():
        if need < 0:
            raise ValueError(
                f"Too many pinned rows for bucket {bucket}: over by {-need}."
            )
    for key, need in need_mode_domain.items():
        if need < 0:
            raise ValueError(f"Too many pinned rows for {key}: over by {-need}.")

    fill_allocation: dict[tuple[str, str, str], dict[str, int]] = {}
    for mode in TARGET_MODES:
        realistic_target = need_bucket[(JUDGE_MODEL, mode, "realistic")]
        unrealistic_target = need_bucket[(JUDGE_MODEL, mode, "unrealistic")]
        per_domain = {domain: need_mode_domain[(mode, domain)] for domain in domains}
        part = allocate_one_mode(
            mode,
            bucket_domain_pool,
            domains,
            realistic_target=realistic_target,
            unrealistic_target=unrealistic_target,
            per_domain_pair_totals=per_domain,
        )
        fill_allocation.update(part)

    randomizer = random.Random(seed)
    fill = sample_from_allocation(
        fill_allocation, bucket_domain_pool, randomizer, exclude=set()
    )

    ordered = list(pinned) + fill
    if len(ordered) != TOTAL_TARGET:
        raise ValueError(f"Expected {TOTAL_TARGET} rows, got {len(ordered)}.")

    return ordered, availability


def write_judge_xlsx(
    output_path: Path,
    candidates: list[Candidate],
    reviewers: tuple[str, str, str, str],
) -> None:
    wb_mod = importlib.import_module("openpyxl")
    styles_mod = importlib.import_module("openpyxl.styles")
    workbook = wb_mod.Workbook()
    font_factory = styles_mod.Font
    alignment_factory = styles_mod.Alignment

    sheet = workbook.active
    assert sheet is not None
    sheet.title = "Judge eval"

    r1, r2, r3, r4 = reviewers
    headers = ("instance_id", r1, r2, r3, r4, GEMINI_COLUMN)
    sheet.append(headers)
    for cell in sheet[1]:
        cell.font = font_factory(bold=True)

    for c in candidates:
        sheet.append([c.instance_id, "", "", "", "", c.judge_response])

    for row_index in range(2, len(candidates) + 2):
        cell = sheet[f"A{row_index}"]
        cell.hyperlink = candidates[row_index - 2].url
        cell.style = "Hyperlink"

    sheet.freeze_panes = "A2"
    sheet.column_dimensions["A"].width = 60
    sheet.column_dimensions["B"].width = 14
    sheet.column_dimensions["C"].width = 14
    sheet.column_dimensions["D"].width = 14
    sheet.column_dimensions["E"].width = 14
    sheet.column_dimensions["F"].width = 64

    for row in sheet.iter_rows(
        min_row=2, max_row=len(candidates) + 1, min_col=2, max_col=5
    ):
        for cell in row:
            cell.alignment = alignment_factory(vertical="top")

    output_path.parent.mkdir(parents=True, exist_ok=True)
    workbook.save(output_path)


def main() -> int:
    args = parse_args()
    logs_root = load_json(args.logs)
    judge_root = load_json(args.judge)

    combined = collect_simple_candidates(logs_root, judge_root, args.base_url)
    combined.extend(collect_cot_candidates(logs_root, judge_root, args.base_url))
    pool = filter_judge_candidates(combined)
    by_id = candidate_by_instance_id(pool)

    pin_ids: list[str] = []
    if not args.skip_pin:
        pin_ids = read_pinned_instance_ids(args.pin_xlsx)

    pinned, missing = resolve_pins(pin_ids, by_id)
    if missing and not args.skip_pin:
        print("Warning: could not resolve some pinned instance_id values (skipped):")
        for line in missing[:20]:
            print(f"  - {line}")
        if len(missing) > 20:
            print(f"  ... and {len(missing) - 20} more")

    reviewers = DEFAULT_REVIEWERS

    if not pinned or args.skip_pin:
        selected, availability = build_full_sample(pool, args.seed)
        if pin_ids and not args.skip_pin:
            print("Note: no usable pins; sampled all rows from seed.")
    else:
        selected, availability = build_pinned_then_fill(pool, pinned, args.seed)
        print(
            f"Pinned {len(pinned)} rows from {args.pin_xlsx}; "
            f"filled {len(selected) - len(pinned)} to reach {len(selected)}."
        )

    write_judge_xlsx(args.output, selected, reviewers)
    print_summary(selected, availability)
    print(f"Wrote: {args.output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
