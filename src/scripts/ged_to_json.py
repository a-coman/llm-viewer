import re
import json
import os
import math
from typing import Dict, List, Tuple, Optional, Any


def get_experiment_info(
    loaded_data: Dict, experiment_id: str
) -> Tuple[Optional[str], List]:
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


def normalize_category_name(name: str) -> str:
    """Remove trailing digits from category name: baseline1 -> baseline"""
    return re.sub(r"\d+$", "", name)


def parse_adj_edge_label_section(text: str, exp_type: str) -> Dict[str, Dict]:
    """
    Parse the # Adj, edge, label section.
    Returns a dict mapping output label to {adjacency, labels, edges}

    For Simple: output1, output2, ...
    For CoT: invalid1, edge2, boundary3, baseline4, complex5, ...
    """
    result = {}

    # Find the section between # Adj, edge, label and the next # header
    adj_section_match = re.search(
        r"# Adj, edge, label\s*\n```\n(.*?)```", text, re.DOTALL
    )
    if not adj_section_match:
        return result

    section_content = adj_section_match.group(1)

    # Pattern to match: Adj1-output.soil: [[...]]
    # or: Adj1-invalid.soil: [[...]]
    adj_pattern = re.compile(
        r"^Adj(\d+)-([a-zA-Z]+)\.soil:\s*(\[\[.*?\]\])", re.MULTILINE
    )
    labels_pattern = re.compile(
        r"^Labels(\d+)-([a-zA-Z]+)\.soil:\s*(\{.*?\})", re.MULTILINE
    )
    edges_pattern = re.compile(
        r"^Edges(\d+)-([a-zA-Z]+)\.soil:\s*(\[.*?\])", re.MULTILINE
    )

    # Extract all adjacency matrices
    adj_matches = adj_pattern.findall(section_content)
    labels_matches = labels_pattern.findall(section_content)
    edges_matches = edges_pattern.findall(section_content)

    # Build dict indexed by (number, category)
    data_by_key = {}

    for num, category, adj_str in adj_matches:
        category = category.lower()
        key = (num, category)
        if key not in data_by_key:
            data_by_key[key] = {}
        data_by_key[key]["adjacency"] = adj_str

    for num, category, labels_str in labels_matches:
        category = category.lower()
        key = (num, category)
        if key not in data_by_key:
            data_by_key[key] = {}
        data_by_key[key]["labels"] = labels_str

    for num, category, edges_str in edges_matches:
        category = category.lower()
        key = (num, category)
        if key not in data_by_key:
            data_by_key[key] = {}
        data_by_key[key]["edges"] = edges_str

    # Convert to output format
    for (num, category), data in data_by_key.items():
        # Create label like "output1" or "invalid1"
        label = f"{category}{num}".lower()
        result[label] = {
            "adjacency": data.get("adjacency", ""),
            "labels": data.get("labels", ""),
            "edges": data.get("edges", ""),
        }

    return result


def parse_normalized_ged_table(text: str) -> Tuple[List[str], List[List[float]]]:
    """
    Parse the # Normalized GED 2D table markdown table.
    Returns (labels, symmetric_matrix as 2D list)
    """
    # Find the normalized GED table section
    table_match = re.search(
        r"# Normalized GED 2D table:\s*\n(.*?)(?=\n#|\Z)", text, re.DOTALL
    )
    if not table_match:
        return [], []

    table_text = table_match.group(1).strip()
    lines = table_text.split("\n")

    if len(lines) < 3:
        return [], []

    # First line is header with column labels
    header_line = lines[0]
    # Split by | and clean
    header_parts = [p.strip() for p in header_line.split("|") if p.strip()]
    # The first column in header is empty/whitespace ("|       |"), so it is filtered out by if p.strip()
    # Thus header_parts contains only the labels.
    labels = [h.lower() for h in header_parts]

    n = len(labels)
    matrix = [
        [1.0 for _ in range(n)] for _ in range(n)
    ]  # Initialize with 1s (diagonal)

    # Parse data rows (skip header and separator)
    data_lines = [line for line in lines[2:] if line.strip() and "---" not in line]

    for row_idx, line in enumerate(data_lines):
        if row_idx >= n:
            break

        parts = [p.strip() for p in line.split("|")]
        # Filter out empty parts and row label (first non-empty)
        values = []
        for p in parts:
            if not p or p.startswith("**"):
                continue
            # Try to parse as float
            try:
                values.append(float(p))
            except ValueError:
                values.append(None)  # Empty cell

        # The upper triangle values start at column row_idx
        # In the table, row i has values from column i onwards
        col_idx = row_idx
        for val in values:
            if col_idx < n and val is not None:
                matrix[row_idx][col_idx] = val
                matrix[col_idx][row_idx] = val  # Symmetric
            col_idx += 1

    return labels, matrix


def compute_mean_std_from_matrix(matrix: List[List[float]]) -> Dict[str, float]:
    """
    Compute mean and std from upper triangle of symmetric matrix (excluding diagonal).
    """
    if not matrix:
        return {"mean": 0.0, "std": 0.0}

    n = len(matrix)
    if n < 2:
        return {"mean": 0.0, "std": 0.0}

    # Get upper triangle values (excluding diagonal)
    upper_triangle = []
    for i in range(n):
        for j in range(i + 1, n):
            upper_triangle.append(matrix[i][j])

    if len(upper_triangle) == 0:
        return {"mean": 0.0, "std": 0.0}

    # Compute mean
    mean = sum(upper_triangle) / len(upper_triangle)

    # Compute standard deviation
    variance = sum((x - mean) ** 2 for x in upper_triangle) / len(upper_triangle)
    std = math.sqrt(variance)

    return {"mean": round(mean, 6), "std": round(std, 6)}


def extract_ged_table_values(
    matrix: List[List[float]], labels: List[str]
) -> Dict[str, Any]:
    """
    Extract values for the GED table in the output format.
    Returns rowLabels, columnLabels, and values (2D matrix)
    """
    n = len(labels)

    # Create the 2D matrix with rounded values
    values = []
    for i in range(n):
        row = []
        for j in range(n):
            val = matrix[i][j]
            row.append(round(val, 6) if val is not None else None)
        values.append(row)

    return {"rowLabels": labels, "columnLabels": labels, "values": values}


def get_attempt_id(
    generations_data: List, gen_id: str, category_name: Optional[str] = None
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


def parse_ged_markdown(ged_path: str, loaded_experiments_data: Dict) -> Dict:
    """
    Main parsing function for GED markdown files.
    """
    with open(ged_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract experiment metadata from path
    path_parts = ged_path.split(os.sep)
    try:
        dataset_idx = path_parts.index("dataset")
        type_name = path_parts[dataset_idx + 2].lower()
        domain_name = path_parts[dataset_idx + 3].lower()

        timestamp_dir = "unknown"
        for part in path_parts[dataset_idx + 4 :]:
            if re.match(r"^\d{2}-\d{2}-\d{4}--\d{2}-\d{2}-\d{2}$", part):
                timestamp_dir = part
                break

        experiment_id = f"{type_name}-{domain_name}-{timestamp_dir}".lower()
    except Exception:
        experiment_id = "unknown"

    # Get structure from logs.json
    exp_type, generations_data = get_experiment_info(
        loaded_experiments_data, experiment_id
    )

    if exp_type is None:
        exp_type = "simple" if "/simple/" in ged_path.lower() else "cot"

    # Parse adj/edge/label section
    ged_data = parse_adj_edge_label_section(content, exp_type)

    # Parse normalized GED table
    labels, matrix = parse_normalized_ged_table(content)

    # Compute mean/std
    ged_stats = compute_mean_std_from_matrix(matrix)

    # Build generations structure
    result_generations = []

    if exp_type == "cot":
        # CoT: 6 generations, 5 categories each
        # Labels are: invalid1, edge2, boundary3, baseline4, complex5, invalid6, ...
        category_order = ["invalid", "edge", "boundary", "baseline", "complex"]

        # Determine number of generations from labels
        num_categories = len(category_order)
        num_generations = len(labels) // num_categories if labels else 6

        for gen_idx in range(num_generations):
            gen_id = str(gen_idx + 1)
            categories_list = []

            for cat_idx, cat_name in enumerate(category_order):
                # Label index in the full list
                label_idx = gen_idx * num_categories + cat_idx
                if label_idx < len(labels):
                    output_label = labels[label_idx].lower()
                else:
                    output_label = f"{cat_name}{gen_idx + 1}"

                # Get GED data for this output
                ged_info = ged_data.get(
                    output_label, {"adjacency": "", "labels": "", "edges": ""}
                )
                # Get attempt ID
                attempt_id = get_attempt_id(generations_data, gen_id, cat_name)

                categories_list.append(
                    {
                        "name": cat_name,
                        "attempt_id": attempt_id,
                        "ged": {
                            "adjacency": ged_info.get("adjacency", ""),
                            "labels": ged_info.get("labels", ""),
                            "edges": ged_info.get("edges", ""),
                        },
                    }
                )

            result_generations.append(
                {"generation_id": gen_id, "categories": categories_list}
            )

    else:
        # Simple: 30 generations, each is "outputN"
        for gen_idx, label in enumerate(labels):
            gen_id = str(gen_idx + 1)

            # Get GED data
            ged_info = ged_data.get(
                label.lower(), {"adjacency": "", "labels": "", "edges": ""}
            )

            # Get attempt ID
            attempt_id = get_attempt_id(generations_data, gen_id)

            result_generations.append(
                {
                    "generation_id": gen_id,
                    "attempt_id": attempt_id,
                    "ged": {
                        "adjacency": ged_info.get("adjacency", ""),
                        "labels": ged_info.get("labels", ""),
                        "edges": ged_info.get("edges", ""),
                    },
                }
            )

    # Build experiment-level GED table values
    ged_table = (
        extract_ged_table_values(matrix, labels)
        if len(labels) > 0
        else {"rowLabels": [], "columnLabels": [], "values": []}
    )

    return {
        "experiment_id": experiment_id,
        "generations": result_generations,
        "ged": ged_table,
        "ged_stats": ged_stats,
    }


if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.abspath(os.path.join(script_dir, "..", ".."))
    target_json_source = os.path.join(project_root, "public", "logs.json")

    loaded_data = {}
    if os.path.exists(target_json_source):
        with open(target_json_source, "r", encoding="utf-8") as f:
            loaded_data = json.load(f)

    dataset_root = os.path.join(project_root, "public", "data", "dataset")
    files = []
    if os.path.isdir(dataset_root):
        for root, _, filenames in os.walk(dataset_root):
            if "ged_wl.md" in filenames:
                files.append(os.path.join(root, "ged_wl.md"))

    files.sort()

    output_by_model = {}

    for ged_path in files:
        if os.path.exists(ged_path):
            try:
                result = parse_ged_markdown(ged_path, loaded_data)
                eid = result["experiment_id"]
                group_name = "cot" if eid.lower().startswith("cot") else "simple"

                path_parts = ged_path.split(os.sep)
                try:
                    dataset_idx = path_parts.index("dataset")
                    model_id = path_parts[dataset_idx + 1].lower()
                except Exception:
                    model_id = "unknown"

                if not model_id:
                    model_id = "unknown"

                if model_id not in output_by_model:
                    output_by_model[model_id] = {
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
                    }

                # Build experiment entry
                exp_entry = {
                    "experiment_id": eid,
                    "generations": result["generations"],
                    "ged": result["ged"],
                }

                output_by_model[model_id][group_name]["experiments"].append(exp_entry)
                output_by_model[model_id][group_name]["number_experiments"] += 1

                # Track for global aggregation
                if group_name == "simple":
                    output_by_model[model_id]["simple_means"].append(
                        result["ged_stats"]["mean"]
                    )
                else:
                    output_by_model[model_id]["cot_means"].append(
                        result["ged_stats"]["mean"]
                    )

                print(f"Processed GED for: {ged_path}")
                print(f"  - Experiment: {eid}")
                print(
                    f"  - Mean: {result['ged_stats']['mean']:.6f}, Std: {result['ged_stats']['std']:.6f}"
                )

            except Exception as e:
                print(f"Error processing GED {ged_path}: {e}")
                import traceback

                traceback.print_exc()
        else:
            print(f"GED file not found: {ged_path}")

    # Compute global mean/std per model
    experiments_output = []
    for model_id in sorted(output_by_model.keys()):
        model_data = output_by_model[model_id]

        if model_data["simple_means"]:
            simple_mean = sum(model_data["simple_means"]) / len(
                model_data["simple_means"]
            )
            simple_variance = sum(
                (x - simple_mean) ** 2 for x in model_data["simple_means"]
            ) / len(model_data["simple_means"])
            model_data["simple"]["ged"]["mean"] = round(simple_mean, 6)
            model_data["simple"]["ged"]["std"] = round(math.sqrt(simple_variance), 6)

        if model_data["cot_means"]:
            cot_mean = sum(model_data["cot_means"]) / len(model_data["cot_means"])
            cot_variance = sum(
                (x - cot_mean) ** 2 for x in model_data["cot_means"]
            ) / len(model_data["cot_means"])
            model_data["cot"]["ged"]["mean"] = round(cot_mean, 6)
            model_data["cot"]["ged"]["std"] = round(math.sqrt(cot_variance), 6)

        experiments_output.append(
            {
                "id": model_id,
                "simple": model_data["simple"],
                "cot": model_data["cot"],
            }
        )

    final_output = {"experiments": experiments_output}

    output_path = os.path.join(project_root, "public", "ged.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(final_output, f, indent=2)

    print(f"\nOutput written to: {output_path}")
    for model_id in sorted(output_by_model.keys()):
        print(f"Model {model_id}")
        print(
            f"  Simple experiments: {output_by_model[model_id]['simple']['number_experiments']}"
        )
        print(
            f"    Global Mean: {output_by_model[model_id]['simple']['ged']['mean']:.6f}, Std: {output_by_model[model_id]['simple']['ged']['std']:.6f}"
        )
        print(
            f"  CoT experiments: {output_by_model[model_id]['cot']['number_experiments']}"
        )
        print(
            f"    Global Mean: {output_by_model[model_id]['cot']['ged']['mean']:.6f}, Std: {output_by_model[model_id]['cot']['ged']['std']:.6f}"
        )
