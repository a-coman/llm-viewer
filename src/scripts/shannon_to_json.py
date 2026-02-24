import json
import math
import os
import re
from typing import Any, Dict, List, Optional, Tuple


def split_sections_by_heading(text: str, pattern: str) -> List[Tuple[str, str]]:
    """
    Split text by markdown headings matched by pattern.
    Returns a list of (heading_name, section_body).
    """
    regex = re.compile(pattern, re.MULTILINE)
    matches = list(regex.finditer(text))
    sections: List[Tuple[str, str]] = []

    for i, match in enumerate(matches):
        name = match.group(1).strip()
        start = match.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        sections.append((name, text[start:end]))

    return sections


def parse_number(value: str) -> Optional[float]:
    """Parse numeric values from markdown cell text."""
    cleaned = value.strip().replace(",", "")
    try:
        return float(cleaned)
    except ValueError:
        return None


def normalize_cell_text(text: str) -> str:
    """Remove markdown bold wrappers and trim."""
    value = text.strip()
    value = re.sub(r"^\*\*(.*?)\*\*$", r"\1", value)
    return value.strip()


def extract_markdown_table_blocks(text: str) -> List[List[str]]:
    """
    Extract contiguous markdown table line blocks.
    Each block is returned as list of raw lines.
    """
    lines = text.splitlines()
    blocks: List[List[str]] = []
    current: List[str] = []

    for line in lines:
        if line.lstrip().startswith("|"):
            current.append(line)
            continue

        if current:
            blocks.append(current)
            current = []

    if current:
        blocks.append(current)

    return blocks


def parse_table_block(block_lines: List[str]) -> Optional[Dict[str, Any]]:
    """
    Parse a markdown table block into header and rows.
    Returns None if block is not a valid table.
    """
    if len(block_lines) < 2:
        return None

    rows: List[List[str]] = []
    for raw in block_lines:
        line = raw.strip()
        if not line.startswith("|"):
            continue

        parts = [p.strip() for p in line.strip("|").split("|")]
        if all(re.fullmatch(r"-+", p.replace(" ", "")) for p in parts):
            continue
        rows.append(parts)

    if len(rows) < 2:
        return None

    header = [normalize_cell_text(c) for c in rows[0]]
    data_rows = [[normalize_cell_text(c) for c in r] for r in rows[1:]]
    return {"header": header, "rows": data_rows}


def to_compact_number(value: float) -> Any:
    """Convert float to int when it is mathematically integral."""
    if abs(value - round(value)) < 1e-9:
        return int(round(value))
    return round(value, 4)


def compute_mean_std(values: List[float], decimals: int = 4) -> Dict[str, float]:
    """Compute population mean/std with configurable rounding."""
    if not values:
        return {"mean": 0.0, "std": 0.0}

    mean = sum(values) / len(values)
    variance = sum((v - mean) ** 2 for v in values) / len(values)
    std = math.sqrt(variance)
    return {"mean": round(mean, decimals), "std": round(std, decimals)}


def compute_shannon_summary(
    specific_entries: List[Dict[str, Any]],
) -> Dict[str, Dict[str, float]]:
    """
    Build the {eveness_active_groups, eveness_all_groups} mean/std summary
    from specific entries.
    """
    active_values = [
        float(s.get("shannon", {}).get("eveness_active_groups", 0.0))
        for s in specific_entries
    ]
    all_values = [
        float(s.get("shannon", {}).get("eveness_all_groups", 0.0))
        for s in specific_entries
    ]

    return {
        "eveness_active_groups": compute_mean_std(active_values),
        "eveness_all_groups": compute_mean_std(all_values),
    }


def parse_specific_entries(text: str) -> List[Dict[str, Any]]:
    """
    Parse repeated [values table + entropy table] pairs in a block.
    Returns list of specific Shannon entries.
    """
    raw_blocks = extract_markdown_table_blocks(text)
    tables = []
    for block in raw_blocks:
        parsed = parse_table_block(block)
        if parsed:
            tables.append(parsed)

    specifics: List[Dict[str, Any]] = []
    i = 0
    while i < len(tables):
        current = tables[i]
        header_name = current["header"][0].lower() if current.get("header") else ""

        if header_name == "entropy":
            i += 1
            continue

        if i + 1 >= len(tables):
            break

        next_table = tables[i + 1]
        next_header = (
            next_table["header"][0].lower() if next_table.get("header") else ""
        )
        if next_header != "entropy":
            i += 1
            continue

        metric_name = current["header"][0]

        values_map: Dict[str, Any] = {}
        for row in current["rows"]:
            if len(row) < 2:
                continue
            key = row[0]
            value = parse_number(row[1])
            if value is not None:
                values_map[key] = to_compact_number(value)

        entropy_map: Dict[str, float] = {}
        for row in next_table["rows"]:
            if len(row) < 2:
                continue
            key = row[0].lower()
            value = parse_number(row[1])
            if value is None:
                continue
            entropy_map[key] = float(value)

        eveness_active = entropy_map.get("evenness (active groups)", 0.0)
        eveness_all = entropy_map.get("evenness (all groups)", 0.0)

        specifics.append(
            {
                "name": metric_name,
                "values": values_map,
                "shannon": {
                    "eveness_active_groups": round(eveness_active, 4),
                    "eveness_all_groups": round(eveness_all, 4),
                },
            }
        )

        i += 2

    return specifics


def get_model_block(
    loaded_data: Dict[str, Any], model_id: str
) -> Optional[Dict[str, Any]]:
    """Fetch a model block from logs.json payload."""
    for block in loaded_data.get("experiments", []):
        if str(block.get("id", "")).lower() == model_id.lower():
            return block
    return None


def get_latest_experiment_for_domain(
    loaded_data: Dict[str, Any], model_id: str, exp_type: str, domain_name: str
) -> Optional[Dict[str, Any]]:
    """
    Select the latest matching experiment for model/type/domain from logs.json.
    """
    model_block = get_model_block(loaded_data, model_id)
    if not model_block:
        return None

    candidates = []
    for exp in model_block.get(exp_type, {}).get("experiments", []):
        if str(exp.get("domain_name", "")).lower() == domain_name.lower():
            candidates.append(exp)

    if not candidates:
        return None

    def sort_key(exp: Dict[str, Any]) -> Tuple[str, str, str]:
        return (
            str(exp.get("date", "")),
            str(exp.get("time", "")),
            str(exp.get("id", "")),
        )

    candidates.sort(key=sort_key)
    return candidates[-1]


def get_attempt_id(
    experiment_data: Optional[Dict[str, Any]],
    gen_id: str,
    category_name: Optional[str] = None,
) -> str:
    """Find successful attempt id for a generation (and category for CoT)."""
    if not experiment_data:
        return "1"

    for gen in experiment_data.get("generations", []):
        if str(gen.get("id")) != str(gen_id):
            continue

        if category_name is not None:
            normalized = category_name.strip().lower()
            for cat in gen.get("categories", []):
                if str(cat.get("name", "")).lower() != normalized:
                    continue
                attempts = cat.get("IListInstantiator", {}).get("attempts", [])
                if attempts:
                    return str(attempts[-1].get("id", "1"))
                return "1"
            return "1"

        attempts = gen.get("attempts", [])
        for attempt in attempts:
            if attempt.get("status") == "success":
                return str(attempt.get("id", "1"))
        if attempts:
            return str(attempts[-1].get("id", "1"))
        return "1"

    return "1"


def split_all_gen_block(text: str) -> Tuple[str, str]:
    """Split a domain block into body_before_all_gen, all_gen_body."""
    match = re.search(r"^###\s+ALL Gen\s*$", text, re.MULTILINE)
    if not match:
        return text, ""
    return text[: match.start()], text[match.end() :]


def parse_simple_domain_block(
    domain_name: str,
    domain_body: str,
    experiment_data: Optional[Dict[str, Any]],
    fallback_experiment_id: str,
) -> Dict[str, Any]:
    body_without_all, all_gen_body = split_all_gen_block(domain_body)
    generation_sections = split_sections_by_heading(
        body_without_all, r"^###\s+gen(\d+)\s*$"
    )

    generations: List[Dict[str, Any]] = []
    for gen_id, gen_body in generation_sections:
        specific = parse_specific_entries(gen_body)
        generations.append(
            {
                "generation_id": str(gen_id),
                "attempt_id": get_attempt_id(experiment_data, str(gen_id)),
                "specific": specific,
            }
        )

    all_gen_specific = parse_specific_entries(all_gen_body)
    if not all_gen_specific:
        all_gen_specific = []
        for gen in generations:
            all_gen_specific.extend(gen.get("specific", []))

    experiment_id = (
        str(experiment_data.get("id"))
        if experiment_data and experiment_data.get("id")
        else fallback_experiment_id
    )

    return {
        "experiment_id": experiment_id,
        "specific": all_gen_specific,
        "generations": generations,
    }


def parse_cot_domain_block(
    domain_name: str,
    domain_body: str,
    experiment_data: Optional[Dict[str, Any]],
    fallback_experiment_id: str,
) -> Dict[str, Any]:
    body_without_all, all_gen_body = split_all_gen_block(domain_body)
    generation_sections = split_sections_by_heading(
        body_without_all, r"^###\s+gen(\d+)\s*$"
    )

    generations: List[Dict[str, Any]] = []
    for gen_id, gen_body in generation_sections:
        category_sections = split_sections_by_heading(gen_body, r"^####\s+(.+?)\s*$")
        categories: List[Dict[str, Any]] = []
        generation_all_categories_specific: List[Dict[str, Any]] = []

        for category_raw, category_body in category_sections:
            category_name = category_raw.strip().lower()
            if category_name == "all categories":
                generation_all_categories_specific = parse_specific_entries(
                    category_body
                )
                continue

            categories.append(
                {
                    "name": category_name,
                    "attempt_id": get_attempt_id(
                        experiment_data, str(gen_id), category_name
                    ),
                    "specific": parse_specific_entries(category_body),
                }
            )

        generations.append(
            {
                "generation_id": str(gen_id),
                "specific": generation_all_categories_specific,
                "categories": categories,
            }
        )

    all_gen_specific = parse_specific_entries(all_gen_body)
    if not all_gen_specific:
        all_gen_specific = []
        for gen in generations:
            for cat in gen.get("categories", []):
                all_gen_specific.extend(cat.get("specific", []))

    experiment_id = (
        str(experiment_data.get("id"))
        if experiment_data and experiment_data.get("id")
        else fallback_experiment_id
    )

    return {
        "experiment_id": experiment_id,
        "specific": all_gen_specific,
        "generations": generations,
    }


def parse_shannon_markdown(
    shannon_path: str, loaded_logs_data: Dict[str, Any]
) -> Dict[str, Any]:
    """
    Parse a simpleShannon.md or cotShannon.md file into a structure ready
    to merge into final shannon.json output.
    """
    with open(shannon_path, "r", encoding="utf-8") as f:
        content = f.read()

    path_parts = shannon_path.split(os.sep)
    try:
        dataset_idx = path_parts.index("dataset")
        model_id = path_parts[dataset_idx + 1].lower()
        exp_type = path_parts[dataset_idx + 2].lower()
    except Exception:
        model_id = "unknown"
        exp_type = "simple" if "simple" in shannon_path.lower() else "cot"

    domain_sections = split_sections_by_heading(content, r"^##\s+(.+?)\s*$")

    experiments: List[Dict[str, Any]] = []
    for domain_name_raw, domain_body in domain_sections:
        domain_name = domain_name_raw.strip().lower()
        if not domain_name:
            continue

        matched_experiment = get_latest_experiment_for_domain(
            loaded_logs_data, model_id, exp_type, domain_name
        )
        fallback_experiment_id = f"{exp_type}-{domain_name}-unknown"

        if exp_type == "cot":
            parsed_experiment = parse_cot_domain_block(
                domain_name, domain_body, matched_experiment, fallback_experiment_id
            )
        else:
            parsed_experiment = parse_simple_domain_block(
                domain_name, domain_body, matched_experiment, fallback_experiment_id
            )

        experiments.append(parsed_experiment)

    return {"model_id": model_id, "exp_type": exp_type, "experiments": experiments}


def ensure_model_bucket(output_by_model: Dict[str, Any], model_id: str) -> None:
    if model_id in output_by_model:
        return

    output_by_model[model_id] = {
        "simple": {
            "shannon": {
                "eveness_active_groups": {"mean": 0.0, "std": 0.0},
                "eveness_all_groups": {"mean": 0.0, "std": 0.0},
            },
            "number_experiments": 0,
            "experiments": [],
        },
        "cot": {
            "shannon": {
                "eveness_active_groups": {"mean": 0.0, "std": 0.0},
                "eveness_all_groups": {"mean": 0.0, "std": 0.0},
            },
            "number_experiments": 0,
            "experiments": [],
        },
        "simple_active_values": [],
        "simple_all_values": [],
        "cot_active_values": [],
        "cot_all_values": [],
    }


if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.abspath(os.path.join(script_dir, "..", ".."))

    logs_json_path = os.path.join(project_root, "public", "logs.json")
    loaded_logs_data: Dict[str, Any] = {}
    if os.path.exists(logs_json_path):
        with open(logs_json_path, "r", encoding="utf-8") as f:
            loaded_logs_data = json.load(f)

    dataset_root = os.path.join(project_root, "public", "data", "dataset")
    shannon_files: List[str] = []
    if os.path.isdir(dataset_root):
        for root, _, filenames in os.walk(dataset_root):
            for filename in filenames:
                lowered = filename.lower()
                if lowered in {"simpleshannon.md", "cotshannon.md"}:
                    shannon_files.append(os.path.join(root, filename))

    shannon_files.sort()
    output_by_model: Dict[str, Any] = {}

    for shannon_path in shannon_files:
        try:
            parsed = parse_shannon_markdown(shannon_path, loaded_logs_data)
            model_id = parsed["model_id"]
            exp_type = parsed["exp_type"]
            experiments = parsed["experiments"]

            ensure_model_bucket(output_by_model, model_id)

            for exp in experiments:
                output_by_model[model_id][exp_type]["experiments"].append(exp)
                output_by_model[model_id][exp_type]["number_experiments"] += 1

                specific_entries = exp.get("specific", [])
                active_values = [
                    float(s.get("shannon", {}).get("eveness_active_groups", 0.0))
                    for s in specific_entries
                ]
                all_values = [
                    float(s.get("shannon", {}).get("eveness_all_groups", 0.0))
                    for s in specific_entries
                ]

                if exp_type == "simple":
                    output_by_model[model_id]["simple_active_values"].extend(
                        active_values
                    )
                    output_by_model[model_id]["simple_all_values"].extend(all_values)
                else:
                    output_by_model[model_id]["cot_active_values"].extend(active_values)
                    output_by_model[model_id]["cot_all_values"].extend(all_values)

            print(f"Processed Shannon for: {shannon_path}")
            print(f"  - Model: {model_id}")
            print(f"  - Type: {exp_type}")
            print(f"  - Experiments parsed: {len(experiments)}")

        except Exception as e:
            print(f"Error processing Shannon file {shannon_path}: {e}")
            import traceback

            traceback.print_exc()

    experiments_output = []
    for model_id in sorted(output_by_model.keys()):
        model_data = output_by_model[model_id]

        simple_active = compute_mean_std(model_data["simple_active_values"])
        simple_all = compute_mean_std(model_data["simple_all_values"])
        cot_active = compute_mean_std(model_data["cot_active_values"])
        cot_all = compute_mean_std(model_data["cot_all_values"])

        model_data["simple"]["shannon"]["eveness_active_groups"] = simple_active
        model_data["simple"]["shannon"]["eveness_all_groups"] = simple_all
        model_data["cot"]["shannon"]["eveness_active_groups"] = cot_active
        model_data["cot"]["shannon"]["eveness_all_groups"] = cot_all

        experiments_output.append(
            {
                "id": model_id,
                "simple": model_data["simple"],
                "cot": model_data["cot"],
            }
        )

    final_output = {"experiments": experiments_output}

    output_path = os.path.join(project_root, "public", "shannon.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(final_output, f, indent=2)

    print(f"\nOutput written to: {output_path}")
    for model_id in sorted(output_by_model.keys()):
        print(f"Model {model_id}")
        print(
            f"  Simple experiments: {output_by_model[model_id]['simple']['number_experiments']}"
        )
        print(
            "    Simple Active Mean/Std: "
            f"{output_by_model[model_id]['simple']['shannon']['eveness_active_groups']['mean']:.4f} / "
            f"{output_by_model[model_id]['simple']['shannon']['eveness_active_groups']['std']:.4f}"
        )
        print(
            "    Simple All Mean/Std: "
            f"{output_by_model[model_id]['simple']['shannon']['eveness_all_groups']['mean']:.4f} / "
            f"{output_by_model[model_id]['simple']['shannon']['eveness_all_groups']['std']:.4f}"
        )
        print(
            f"  CoT experiments: {output_by_model[model_id]['cot']['number_experiments']}"
        )
        print(
            "    CoT Active Mean/Std: "
            f"{output_by_model[model_id]['cot']['shannon']['eveness_active_groups']['mean']:.4f} / "
            f"{output_by_model[model_id]['cot']['shannon']['eveness_active_groups']['std']:.4f}"
        )
        print(
            "    CoT All Mean/Std: "
            f"{output_by_model[model_id]['cot']['shannon']['eveness_all_groups']['mean']:.4f} / "
            f"{output_by_model[model_id]['cot']['shannon']['eveness_all_groups']['std']:.4f}"
        )
