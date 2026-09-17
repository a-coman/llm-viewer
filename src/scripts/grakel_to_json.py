import json
import math
import os
import re
from typing import Any

from ged_to_json import get_attempt_id, get_experiment_info

Matrix = list[list[float | None]]


def normalize_table_label(label: str) -> str:
    """Convert GraKeL labels to the compact labels used by the GED heatmap."""
    normalized = label.strip().strip("*").lower()
    match = re.fullmatch(r"gen(\d+)/([^/]+)", normalized)
    if match:
        generation_id, output_name = match.groups()
        return f"{output_name}{generation_id}"
    return normalized


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


def kernel_to_dissimilarity(kernel_matrix: Matrix) -> Matrix:
    """Derive the normalized GraKeL dissimilarity used by newer reports."""
    return [
        [
            round(math.sqrt(max(0.0, 1.0 - value)), 6) if value is not None else None
            for value in row
        ]
        for row in kernel_matrix
    ]


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


def extract_matrix_values(matrix: Matrix, labels: list[str]) -> dict[str, Any]:
    values = [
        [round(value, 6) if value is not None else None for value in row]
        for row in matrix
    ]
    return {"rowLabels": labels, "columnLabels": labels, "values": values}


def parse_graph_data(text: str, labels: list[str]) -> dict[str, dict[str, str]]:
    """Parse graph inputs, supporting both current and legacy report labels."""
    section_match = re.search(r"# Adj, edge, label\s*\n```\n(.*?)```", text, re.DOTALL)
    if not section_match:
        return {}

    section = section_match.group(1)
    patterns = {
        "adjacency": re.compile(
            r"^Adj(\d+)(?:-([a-zA-Z]+)\.soil)?:\s*(\[\[.*?\]\])",
            re.MULTILINE,
        ),
        "labels": re.compile(
            r"^Labels(\d+)(?:-([a-zA-Z]+)\.soil)?:\s*(\{.*?\})",
            re.MULTILINE,
        ),
        "edges": re.compile(
            r"^Edges(\d+)(?:-([a-zA-Z]+)\.soil)?:\s*(\[.*?\])",
            re.MULTILINE,
        ),
    }

    result: dict[str, dict[str, str]] = {}
    for field, pattern in patterns.items():
        for number, category, value in pattern.findall(section):
            ordinal = int(number) - 1
            if category:
                key = f"{category.lower()}{number}"
            elif 0 <= ordinal < len(labels):
                key = labels[ordinal]
            else:
                key = f"output{number}"
            result.setdefault(key, {})[field] = value

    return result


def extract_experiment_metadata(grakel_path: str) -> tuple[str, str, str]:
    path_parts = grakel_path.split(os.sep)
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
                    "grakel": graph_payload,
                }
            )
        else:
            by_generation[generation_id] = {
                "generation_id": generation_id,
                "attempt_id": get_attempt_id(generations_data, generation_id),
                "grakel": graph_payload,
            }

    return list(by_generation.values())


def parse_grakel_markdown(
    grakel_path: str, loaded_experiments_data: dict
) -> dict[str, Any]:
    with open(grakel_path, "r", encoding="utf-8") as file:
        content = file.read()

    model_id, path_experiment_type, experiment_id = extract_experiment_metadata(
        grakel_path
    )
    experiment_type, generations_data = get_experiment_info(
        loaded_experiments_data, experiment_id
    )
    experiment_type = experiment_type or path_experiment_type

    raw_labels, labels, matrix = parse_markdown_matrix(
        content, "Normalized dissimilarity 2D table"
    )
    if not matrix:
        raw_labels, labels, kernel_matrix = parse_markdown_matrix(
            content, "Kernel 2D table"
        )
        matrix = kernel_to_dissimilarity(kernel_matrix)

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
        "grakel": extract_matrix_values(matrix, labels),
        "grakel_stats": stats,
    }


def aggregate_model_stats(model_data: dict[str, Any], mode: str) -> None:
    means = model_data[f"{mode}_means"]
    if not means:
        return

    mean = sum(means) / len(means)
    variance = sum((value - mean) ** 2 for value in means) / len(means)
    model_data[mode]["grakel"] = {
        "mean": round(mean, 6),
        "std": round(math.sqrt(variance), 6),
    }


def main() -> None:
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.abspath(os.path.join(script_dir, "..", ".."))

    logs_path = os.path.join(project_root, "public", "logs.json")
    loaded_data = {}
    if os.path.exists(logs_path):
        with open(logs_path, "r", encoding="utf-8") as file:
            loaded_data = json.load(file)

    dataset_root = os.path.join(project_root, "public", "data", "dataset")
    grakel_files = [
        os.path.join(root, "grakel.md")
        for root, _, filenames in os.walk(dataset_root)
        if "grakel.md" in filenames
    ]

    output_by_model: dict[str, dict[str, Any]] = {}
    for grakel_path in sorted(grakel_files):
        try:
            result = parse_grakel_markdown(grakel_path, loaded_data)
        except (OSError, ValueError, IndexError, KeyError) as error:
            print(f"Error processing GraKeL {grakel_path}: {error}")
            continue

        mode = "cot" if result["experiment_type"] == "cot" else "simple"
        model_id = result["model_id"] or "unknown"
        model_data = output_by_model.setdefault(
            model_id,
            {
                "simple": {
                    "grakel": {"mean": 0.0, "std": 0.0},
                    "number_experiments": 0,
                    "experiments": [],
                },
                "cot": {
                    "grakel": {"mean": 0.0, "std": 0.0},
                    "number_experiments": 0,
                    "experiments": [],
                },
                "simple_means": [],
                "cot_means": [],
            },
        )

        stats = result["grakel_stats"]
        experiment_entry = {
            "experiment_id": result["experiment_id"],
            "generations": result["generations"],
            "grakel": {
                **result["grakel"],
                "mean": stats["mean"],
                "std": stats["std"],
            },
        }
        model_data[mode]["experiments"].append(experiment_entry)
        model_data[mode]["number_experiments"] += 1
        model_data[f"{mode}_means"].append(stats["mean"])
        print(
            f"Processed GraKeL for {result['experiment_id']}: "
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

    output_path = os.path.join(project_root, "public", "grakel.json")
    with open(output_path, "w", encoding="utf-8") as file:
        json.dump({"experiments": experiments_output}, file, indent=2)

    print(f"\nOutput written to: {output_path}")
    for model in experiments_output:
        print(f"Model {model['id']}")
        for mode in ("simple", "cot"):
            stats = model[mode]["grakel"]
            print(
                f"  {mode.title()}: {model[mode]['number_experiments']} experiments, "
                f"{stats['mean']:.6f} ± {stats['std']:.6f}"
            )


if __name__ == "__main__":
    main()
