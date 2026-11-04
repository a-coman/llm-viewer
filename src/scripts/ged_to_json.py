import json
import math
import os
import re
from typing import Any

Matrix = list[list[float | None]]


def get_experiment_info(
    loaded_data: dict, experiment_id: str
) -> tuple[str | None, list]:
    """
    Finds the experiment by ID in the already loaded JSON data.
    Returns (experiment_type, generations_data)
    """
    if not loaded_data or "experiments" not in loaded_data:
        return None, []

    def search_in_block(block_experiments):
        for exp in block_experiments:
            if exp.get("id", "").lower() == experiment_id.lower():
                return exp.get("type", "simple").lower(), exp.get("generations", [])
        return None, None

    outer_experiments = loaded_data.get("experiments", [])

    for outer_exp in outer_experiments:
        # Check Simple in this outer exp
        simple_exps = outer_exp.get("simple", {}).get("experiments", [])
        res_type, res_gen = search_in_block(simple_exps)
        if res_type:
            return res_type, res_gen

        # Check CoT in this outer exp
        cot_exps = outer_exp.get("cot", {}).get("experiments", [])
        res_type, res_gen = search_in_block(cot_exps)
        if res_type:
            return res_type, res_gen

    return None, []


def normalize_table_label(label: str) -> str:
    """Convert report labels to the compact heatmap labels (output1, invalid2)."""
    normalized = label.strip().strip("*").lower()
    normalized = normalized.removesuffix(".soil")
    match = re.fullmatch(r"gen(\d+)/([^/]+)", normalized)
    if match:
        generation_id, output_name = match.groups()
        return f"{output_name}{generation_id}"
    return normalized


def extract_experiment_metadata(report_path: str) -> tuple[str, str, str]:
    path_parts = report_path.split(os.sep)
    dataset_index = path_parts.index("dataset")
    model_id = path_parts[dataset_index + 1].lower()
    experiment_type = path_parts[dataset_index + 2].lower()
    domain_name = path_parts[dataset_index + 3].lower()
    timestamp = next(
        (
            part
            for part in path_parts[dataset_index + 4 :]
            if re.fullmatch(r"\d{2}-\d{2}-\d{4}--\d{2}-\d{2}-\d{2}", part)
        ),
        "unknown",
    )
    return model_id, experiment_type, f"{experiment_type}-{domain_name}-{timestamp}"


def parse_graph_data(text: str, labels: list[str]) -> dict[str, dict[str, str]]:
    """Parse adjacency, labels, and edges from v2 and legacy GED reports."""
    section_match = re.search(
        r"# Adj(?:acency)?, edges?, and labels?\s*\n```(?:text)?\n(.*?)```",
        text,
        re.DOTALL | re.IGNORECASE,
    )
    if not section_match:
        return {}

    section = section_match.group(1)
    v2_patterns = {
        "adjacency": re.compile(
            r"^Adj-gen(\d+)/([a-zA-Z]+)\.soil:\s*(\[\[.*?\]\])", re.MULTILINE
        ),
        "labels": re.compile(
            r"^Labels-gen(\d+)/([a-zA-Z]+)\.soil:\s*(\{.*?\})", re.MULTILINE
        ),
        "edges": re.compile(
            r"^Edges-gen(\d+)/([a-zA-Z]+)\.soil:\s*(\[.*?\])", re.MULTILINE
        ),
    }
    legacy_patterns = {
        "adjacency": re.compile(
            r"^Adj(\d+)(?:-([a-zA-Z]+)\.soil)?:\s*(\[\[.*?\]\])", re.MULTILINE
        ),
        "labels": re.compile(
            r"^Labels(\d+)(?:-([a-zA-Z]+)\.soil)?:\s*(\{.*?\})", re.MULTILINE
        ),
        "edges": re.compile(
            r"^Edges(\d+)(?:-([a-zA-Z]+)\.soil)?:\s*(\[.*?\])", re.MULTILINE
        ),
    }

    result: dict[str, dict[str, str]] = {}

    def add_entry(key: str, field: str, value: str) -> None:
        result.setdefault(key, {})[field] = value

    for field, pattern in v2_patterns.items():
        for generation_id, category, value in pattern.findall(section):
            add_entry(f"{category.lower()}{generation_id}", field, value)

    for field, pattern in legacy_patterns.items():
        for number, category, value in pattern.findall(section):
            if category:
                key = f"{category.lower()}{number}"
            else:
                ordinal = int(number) - 1
                key = (
                    labels[ordinal] if 0 <= ordinal < len(labels) else f"output{number}"
                )
            add_entry(key, field, value)

    return result


def parse_markdown_matrix(
    text: str, heading: str
) -> tuple[list[str], list[str], Matrix]:
    """Parse an upper-triangular markdown matrix and make it symmetric."""
    table_match = re.search(
        rf"^# {re.escape(heading)}:\s*\n(.*?)(?=\n#|\Z)",
        text,
        re.DOTALL | re.MULTILINE,
    )
    if not table_match:
        return [], [], []

    lines = [line for line in table_match.group(1).splitlines() if line.strip()]
    if len(lines) < 3:
        return [], [], []

    header_parts = [part.strip() for part in lines[0].strip().strip("|").split("|")]
    raw_labels = header_parts[1:]
    labels = [normalize_table_label(label) for label in raw_labels]
    size = len(labels)
    matrix: Matrix = [[None for _ in range(size)] for _ in range(size)]

    row_index = 0
    for line in lines[2:]:
        if not line.lstrip().startswith("|") or row_index >= size:
            continue

        parts = [part.strip() for part in line.strip().strip("|").split("|")]
        if len(parts) < 2:
            continue

        cells = parts[1:]
        if len(cells) < size:
            cells.extend([""] * (size - len(cells)))

        for column_index, cell in enumerate(cells[:size]):
            if not cell or cell.lower() == "nan":
                continue
            try:
                value = float(cell)
            except ValueError:
                continue
            if not math.isfinite(value):
                continue
            matrix[row_index][column_index] = value
            matrix[column_index][row_index] = value

        row_index += 1

    return raw_labels, labels, matrix


def similarity_to_dissimilarity_matrix(similarity_matrix: Matrix) -> Matrix:
    """Convert legacy normalized GED similarity to diversity (0=same, 1=different)."""
    return [
        [round(1.0 - value, 6) if value is not None else None for value in row]
        for row in similarity_matrix
    ]


def round_matrix(matrix: Matrix) -> Matrix:
    return [
        [round(value, 6) if value is not None else None for value in row]
        for row in matrix
    ]


def matrix_from_json(raw_matrix: Any) -> Matrix:
    if not isinstance(raw_matrix, list) or not raw_matrix:
        return []

    size = len(raw_matrix)
    matrix: Matrix = [[None for _ in range(size)] for _ in range(size)]
    for row_index, row in enumerate(raw_matrix):
        if not isinstance(row, list):
            continue
        for column_index, cell in enumerate(row[:size]):
            if cell is None:
                continue
            try:
                value = float(cell)
            except (TypeError, ValueError):
                continue
            if not math.isfinite(value):
                continue
            matrix[row_index][column_index] = value
    return round_matrix(matrix)


def compute_mean_std_from_matrix(matrix: Matrix) -> dict[str, float]:
    """Compute population mean/std from finite upper-triangle values."""
    pairwise_values = [
        value
        for row_index, row in enumerate(matrix)
        for column_index, value in enumerate(row)
        if column_index > row_index and value is not None
    ]
    if not pairwise_values:
        return {"mean": 0.0, "std": 0.0}

    mean = sum(pairwise_values) / len(pairwise_values)
    variance = sum((value - mean) ** 2 for value in pairwise_values) / len(
        pairwise_values
    )
    return {"mean": round(mean, 6), "std": round(math.sqrt(variance), 6)}


def extract_ged_table_values(matrix: Matrix, labels: list[str]) -> dict[str, Any]:
    return {
        "rowLabels": labels,
        "columnLabels": labels,
        "values": round_matrix(matrix),
    }


def get_attempt_id(
    generations_data: list, gen_id: str, category_name: str | None = None
) -> str:
    """
    Find the successful attempt ID from logs.json generations data.
    """
    for gen in generations_data:
        if str(gen.get("id")) != str(gen_id):
            continue

        if category_name:
            # CoT: look in categories
            for cat in gen.get("categories", []):
                if (cat.get("name", "").lower()) == (category_name or "").lower():
                    # Get last attempt ID from IListInstantiator
                    attempts = cat.get("IListInstantiator", {}).get("attempts", [])
                    if attempts:
                        return str(attempts[-1].get("id", "1"))
                    return "1"
        else:
            # Simple: look in attempts directly
            attempts = gen.get("attempts", [])
            for att in attempts:
                if att.get("status") == "success":
                    return str(att.get("id", "1"))
            # Fallback to last attempt
            if attempts:
                return str(attempts[-1].get("id", "1"))

    return "1"


def parse_label_identity(
    raw_label: str, normalized_label: str, position: int, experiment_type: str
) -> tuple[str, str | None]:
    path_match = re.fullmatch(r"gen(\d+)/([^/]+)", raw_label.lower())
    if path_match:
        generation_id, category = path_match.groups()
        return generation_id, None if category == "output" else category

    if experiment_type == "cot":
        category_match = re.match(r"([a-zA-Z]+)", normalized_label)
        category = category_match.group(1).lower() if category_match else "unknown"
        return str(position // 5 + 1), category

    generation_match = re.search(r"(\d+)$", normalized_label)
    generation_id = generation_match.group(1) if generation_match else str(position + 1)
    return generation_id, None


def build_generations(
    raw_labels: list[str],
    labels: list[str],
    graph_data: dict[str, dict[str, str]],
    experiment_type: str,
    generations_data: list,
) -> list[dict[str, Any]]:
    by_generation: dict[str, dict[str, Any]] = {}

    for position, (raw_label, label) in enumerate(zip(raw_labels, labels)):
        generation_id, category = parse_label_identity(
            raw_label, label, position, experiment_type
        )
        graph = graph_data.get(label, {})
        graph_payload = {
            "adjacency": graph.get("adjacency", ""),
            "labels": graph.get("labels", ""),
            "edges": graph.get("edges", ""),
        }

        if experiment_type == "cot" and category:
            generation = by_generation.setdefault(
                generation_id,
                {"generation_id": generation_id, "categories": []},
            )
            generation["categories"].append(
                {
                    "name": category,
                    "attempt_id": get_attempt_id(
                        generations_data, generation_id, category
                    ),
                    "ged": graph_payload,
                }
            )
        else:
            by_generation[generation_id] = {
                "generation_id": generation_id,
                "attempt_id": get_attempt_id(generations_data, generation_id),
                "ged": graph_payload,
            }

    return list(by_generation.values())


def labels_from_items(items: list[Any]) -> tuple[list[str], list[str]]:
    raw_labels = []
    labels = []
    for item in items:
        raw = str(item)
        if raw.lower().endswith(".soil"):
            raw = raw[: -len(".soil")]
        raw_labels.append(raw)
        labels.append(normalize_table_label(raw))
    return raw_labels, labels


def parse_ged_v2(json_path: str, loaded_experiments_data: dict) -> dict[str, Any]:
    with open(json_path, encoding="utf-8") as file:
        payload = json.load(file)

    markdown_path = os.path.join(os.path.dirname(json_path), "ged_v2.md")
    markdown = ""
    if os.path.exists(markdown_path):
        with open(markdown_path, encoding="utf-8") as file:
            markdown = file.read()

    model_id, path_experiment_type, experiment_id = extract_experiment_metadata(
        json_path
    )
    experiment_type, generations_data = get_experiment_info(
        loaded_experiments_data, experiment_id
    )
    experiment_type = experiment_type or path_experiment_type

    raw_labels, labels = labels_from_items(payload.get("items", []))
    matrix = matrix_from_json(payload.get("diversity"))
    if not matrix and markdown:
        raw_labels, labels, matrix = parse_markdown_matrix(
            markdown, "Normalized GED diversity table"
        )

    graph_data = parse_graph_data(markdown, labels)
    stats = compute_mean_std_from_matrix(matrix)

    return {
        "model_id": model_id,
        "experiment_id": experiment_id,
        "experiment_type": experiment_type,
        "generations": build_generations(
            raw_labels,
            labels,
            graph_data,
            experiment_type,
            generations_data,
        ),
        "ged": extract_ged_table_values(matrix, labels),
        "ged_stats": stats,
    }


def parse_ged_legacy(md_path: str, loaded_experiments_data: dict) -> dict[str, Any]:
    with open(md_path, encoding="utf-8") as file:
        content = file.read()

    model_id, path_experiment_type, experiment_id = extract_experiment_metadata(md_path)
    experiment_type, generations_data = get_experiment_info(
        loaded_experiments_data, experiment_id
    )
    experiment_type = experiment_type or path_experiment_type

    raw_labels, labels, similarity_matrix = parse_markdown_matrix(
        content, "Normalized GED 2D table"
    )
    matrix = similarity_to_dissimilarity_matrix(similarity_matrix)
    graph_data = parse_graph_data(content, labels)
    stats = compute_mean_std_from_matrix(matrix)

    return {
        "model_id": model_id,
        "experiment_id": experiment_id,
        "experiment_type": experiment_type,
        "generations": build_generations(
            raw_labels,
            labels,
            graph_data,
            experiment_type,
            generations_data,
        ),
        "ged": extract_ged_table_values(matrix, labels),
        "ged_stats": stats,
    }


def discover_ged_reports(dataset_root: str) -> list[tuple[str, str]]:
    reports: list[tuple[str, str]] = []
    if not os.path.isdir(dataset_root):
        return reports

    for root, _, filenames in os.walk(dataset_root):
        if "ged_v2.json" in filenames:
            reports.append(("v2", os.path.join(root, "ged_v2.json")))
        elif "ged_wl.md" in filenames:
            reports.append(("legacy", os.path.join(root, "ged_wl.md")))
    reports.sort(key=lambda item: item[1])
    return reports


def aggregate_model_stats(model_data: dict[str, Any], mode: str) -> None:
    means = model_data[f"{mode}_means"]
    if not means:
        return

    mean = sum(means) / len(means)
    variance = sum((value - mean) ** 2 for value in means) / len(means)
    model_data[mode]["ged"] = {
        "mean": round(mean, 6),
        "std": round(math.sqrt(variance), 6),
    }


def main() -> None:
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.abspath(os.path.join(script_dir, "..", ".."))

    logs_path = os.path.join(project_root, "public", "logs.json")
    loaded_data = {}
    if os.path.exists(logs_path):
        with open(logs_path, encoding="utf-8") as file:
            loaded_data = json.load(file)

    dataset_root = os.path.join(project_root, "public", "data", "dataset")
    output_by_model: dict[str, dict[str, Any]] = {}

    for source, report_path in discover_ged_reports(dataset_root):
        try:
            if source == "v2":
                result = parse_ged_v2(report_path, loaded_data)
            else:
                result = parse_ged_legacy(report_path, loaded_data)
        except (OSError, ValueError, IndexError, KeyError, TypeError) as error:
            print(f"Error processing GED {report_path}: {error}")
            continue

        mode = "cot" if result["experiment_type"] == "cot" else "simple"
        model_id = result["model_id"] or "unknown"
        model_data = output_by_model.setdefault(
            model_id,
            {
                "simple": {
                    "ged": {"mean": 0.0, "std": 0.0},
                    "number_experiments": 0,
                    "experiments": [],
                },
                "cot": {
                    "ged": {"mean": 0.0, "std": 0.0},
                    "number_experiments": 0,
                    "experiments": [],
                },
                "simple_means": [],
                "cot_means": [],
            },
        )

        stats = result["ged_stats"]
        experiment_entry = {
            "experiment_id": result["experiment_id"],
            "generations": result["generations"],
            "ged": {
                **result["ged"],
                "mean": stats["mean"],
                "std": stats["std"],
            },
        }
        model_data[mode]["experiments"].append(experiment_entry)
        model_data[mode]["number_experiments"] += 1
        model_data[f"{mode}_means"].append(stats["mean"])
        print(
            f"Processed GED {source} for {result['experiment_id']}: "
            f"{stats['mean']:.6f} ± {stats['std']:.6f}"
        )

    experiments_output = []
    for model_id in sorted(output_by_model):
        model_data = output_by_model[model_id]
        aggregate_model_stats(model_data, "simple")
        aggregate_model_stats(model_data, "cot")
        experiments_output.append(
            {
                "id": model_id,
                "simple": model_data["simple"],
                "cot": model_data["cot"],
            }
        )

    output_path = os.path.join(project_root, "public", "ged.json")
    with open(output_path, "w", encoding="utf-8") as file:
        json.dump({"experiments": experiments_output}, file, indent=2)

    print(f"\nOutput written to: {output_path}")
    for model in experiments_output:
        print(f"Model {model['id']}")
        for mode in ("simple", "cot"):
            stats = model[mode]["ged"]
            print(
                f"  {mode.title()}: {model[mode]['number_experiments']} experiments, "
                f"{stats['mean']:.6f} ± {stats['std']:.6f}"
            )


if __name__ == "__main__":
    main()
