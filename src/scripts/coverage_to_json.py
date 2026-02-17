import json
import re
import os


def parse_table(lines, start_idx):
    """Parses a markdown table starting at start_idx."""
    data = {}
    i = start_idx

    # Header
    if i < len(lines):
        i += 2  # Skip separator |---|---|

    while i < len(lines) and "|" in lines[i]:
        row = [r.strip().replace("**", "") for r in lines[i].split("|") if r.strip()]
        if row:
            row_key = row[0]
            row_values = row[1:]
            data[row_key] = row_values
        i += 1
    return data, i


def parse_uncovered(line):
    """Parses the Uncovered: [...] line."""
    match = re.search(r"Uncovered:\s*\[(.*)\]", line)
    if match:
        items = match.group(1).split(",")
        return [item.strip() for item in items if item.strip()]
    return []


def parse_coverage_markdown(file_path):
    if not os.path.exists(file_path):
        return None, None, None

    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    domains = {}
    global_coverage = None
    global_instantiation = None

    current_domain = None
    current_gen = None
    current_category = None

    i = 0
    while i < len(lines):
        line = lines[i].strip()

        # Domain
        if line.startswith("## "):
            domain_name = line[3:].strip().lower()
            current_domain = {"generations": [], "coverage": {}, "instantiation": {}}
            domains[domain_name] = current_domain
            current_gen = None
            current_category = None

        # Generation
        elif line.startswith("### gen"):
            gen_id = line[7:].strip()
            current_gen = {
                "id": gen_id,
                "categories": [],
                "coverage": {},
                "instantiation": {},
            }
            current_domain["generations"].append(current_gen)
            current_category = None

        # ALL Gen (domain total)
        elif line.startswith("### ALL Gen"):
            current_gen = current_domain
            current_category = None

        # Category
        elif line.startswith("#### "):
            cat_name = line[5:].strip()
            if cat_name.lower().startswith("all categories"):
                current_category = None  # Totals go to current_gen
            else:
                current_category = {
                    "name": cat_name,
                    "coverage": {},
                    "instantiation": {},
                }
                if current_gen is not None:
                    current_gen["categories"].append(current_category)

        # Tables
        elif "| Model Coverage |" in line:
            table_data, next_i = parse_table(lines, i)
            target = current_category if current_category else current_gen
            if target:
                target["coverage"] = {
                    k: {
                        "instantiated": float(v[0]) if v[0] != "Infinity" else 0,
                        "defined": float(v[1]) if v[1] != "Infinity" else 0,
                        "uncovered": [],
                    }
                    for k, v in table_data.items()
                }
                # Ensure all three standard keys exist
                for key in ["classes", "attributes", "relationships"]:
                    if key not in target["coverage"]:
                        target["coverage"][key] = {
                            "instantiated": 0,
                            "defined": 0,
                            "uncovered": [],
                        }
            i = next_i - 1

        elif "| Instantiation Stats |" in line:
            table_data, next_i = parse_table(lines, i)
            target = current_category if current_category else current_gen
            if target:
                target["instantiation"] = {
                    k: {
                        "total_instantiated": float(v[0]) if v[0] != "Infinity" else 0,
                        "total_defined": float(v[1]) if v[1] != "Infinity" else 0,
                    }
                    for k, v in table_data.items()
                }
            i = next_i - 1

        # Uncovered
        elif line.startswith("Uncovered:"):
            uncovered = parse_uncovered(line)
            target = current_category if current_category else current_gen
            if target and "coverage" in target:
                target["coverage"]["classes"]["uncovered"] = sorted(
                    list(
                        set(
                            [
                                item.replace("Class:", "").strip()
                                for item in uncovered
                                if item.startswith("Class:")
                            ]
                        )
                    )
                )
                target["coverage"]["attributes"]["uncovered"] = sorted(
                    list(
                        set(
                            [
                                item.replace("Attribute:", "").strip()
                                for item in uncovered
                                if item.startswith("Attribute:")
                            ]
                        )
                    )
                )
                target["coverage"]["relationships"]["uncovered"] = sorted(
                    list(
                        set(
                            [
                                item.replace("Relationship:", "").strip()
                                for item in uncovered
                                if item.startswith("Relationship:")
                            ]
                        )
                    )
                )

        # Global Coverage at the end
        elif line.startswith("# Coverage"):
            # Skip until Model Coverage table
            while i < len(lines) and "| Model Coverage |" not in lines[i]:
                i += 1
            if i < len(lines):
                global_coverage_data, next_i = parse_table(lines, i)
                global_coverage = {
                    k: {
                        "instantiated": float(v[0]) if v[0] != "Infinity" else 0,
                        "defined": float(v[1]) if v[1] != "Infinity" else 0,
                        "uncovered": [],
                    }
                    for k, v in global_coverage_data.items()
                }
                for key in ["classes", "attributes", "relationships"]:
                    if key not in global_coverage:
                        global_coverage[key] = {
                            "instantiated": 0,
                            "defined": 0,
                            "uncovered": [],
                        }
                i = next_i - 1

            # Skip until Instantiation Stats table
            while i < len(lines) and "| Instantiation Stats |" not in lines[i]:
                i += 1
            if i < len(lines):
                global_instantiation_data, next_i = parse_table(lines, i)
                global_instantiation = {
                    k: {
                        "total_instantiated": float(v[0]) if v[0] != "Infinity" else 0,
                        "total_defined": float(v[1]) if v[1] != "Infinity" else 0,
                    }
                    for k, v in global_instantiation_data.items()
                }
                i = next_i - 1

            # Search for global Uncovered: line until end of file
            while i < len(lines):
                if lines[i].strip().startswith("Uncovered:"):
                    uncovered = parse_uncovered(lines[i].strip())
                    if global_coverage:  # Ensure global_coverage was initialized
                        global_coverage["classes"]["uncovered"] = sorted(
                            list(
                                set(
                                    [
                                        item.replace("Class:", "").strip()
                                        for item in uncovered
                                        if item.startswith("Class:")
                                    ]
                                )
                            )
                        )
                        global_coverage["attributes"]["uncovered"] = sorted(
                            list(
                                set(
                                    [
                                        item.replace("Attribute:", "").strip()
                                        for item in uncovered
                                        if item.startswith("Attribute:")
                                    ]
                                )
                            )
                        )
                        global_coverage["relationships"]["uncovered"] = sorted(
                            list(
                                set(
                                    [
                                        item.replace("Relationship:", "").strip()
                                        for item in uncovered
                                        if item.startswith("Relationship:")
                                    ]
                                )
                            )
                        )
                    break
                i += 1

        i += 1

    return domains, global_coverage, global_instantiation


def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.abspath(os.path.join(script_dir, "..", ".."))
    dataset_root = os.path.join(project_root, "public", "data", "dataset")

    # Load logs.json
    with open(
        os.path.join(project_root, "public", "logs.json"), "r", encoding="utf-8"
    ) as f:
        logs_data = json.load(f)

    # Map domain names to experiment data
    experiments_map = {}
    for exp_group in logs_data.get("experiments", []):
        exp_id = (exp_group.get("id") or "unknown").lower()
        experiments_map[exp_id] = {"simple": {}, "cot": {}}

        for simple_exp in exp_group.get("simple", {}).get("experiments", []):
            domain = (simple_exp.get("domain_name") or "").lower()
            experiments_map[exp_id]["simple"][domain] = {
                "id": (simple_exp.get("id") or "unknown").lower(),
                "gens": {
                    g["id"]: str(len(g.get("attempts", [])))
                    for g in simple_exp.get("generations", [])
                },
            }

        for cot_exp in exp_group.get("cot", {}).get("experiments", []):
            domain = (cot_exp.get("domain_name") or "").lower()
            cat_attempts = {}
            for g in cot_exp.get("generations", []):
                gen_id = g["id"]
                cat_attempts[gen_id] = {}
                for cat in g.get("categories", []):
                    cat_name = (cat.get("name") or "").lower()
                    creator_att = cat.get("IListCreator", {}).get("attempts", [])
                    inst_att = cat.get("IListInstantiator", {}).get("attempts", [])
                    count = len(creator_att) + len(inst_att)
                    cat_attempts[gen_id][cat_name] = str(count) if count > 0 else "1"

            experiments_map[exp_id]["cot"][domain] = {
                "id": (cot_exp.get("id") or "unknown").lower(),
                "gens": cat_attempts,
            }
    final_output = {"experiments": []}

    for model_id in sorted(experiments_map.keys()):
        simple_cov_path = os.path.join(
            dataset_root, model_id.upper(), "Simple", "simpleCoverage.md"
        )
        if not os.path.exists(simple_cov_path):
            simple_cov_path = os.path.join(
                dataset_root, model_id, "simple", "simplecoverage.md"
            )

        cot_cov_path = os.path.join(
            dataset_root, model_id.upper(), "CoT", "cotCoverage.md"
        )
        if not os.path.exists(cot_cov_path):
            cot_cov_path = os.path.join(dataset_root, model_id, "cot", "cotcoverage.md")

        simple_domains, simple_global_cov, simple_global_inst = parse_coverage_markdown(
            simple_cov_path
        )
        cot_domains, cot_global_cov, cot_global_inst = parse_coverage_markdown(
            cot_cov_path
        )

        model_block = {
            "id": model_id,
            "simple": {
                "coverage": simple_global_cov if simple_global_cov else {},
                "instantiation": simple_global_inst if simple_global_inst else {},
                "experiments": [],
            },
            "cot": {
                "coverage": cot_global_cov if cot_global_cov else {},
                "instantiation": cot_global_inst if cot_global_inst else {},
                "experiments": [],
            },
        }

        if simple_domains:
            for domain, data in simple_domains.items():
                exp_info = experiments_map[model_id]["simple"].get(domain)
                if not exp_info:
                    continue

                exp_id_val = exp_info["id"]
                gens_info = exp_info["gens"]

                experiment_output = {
                    "experiment_id": exp_id_val,
                    "generations": [],
                    "coverage": data["coverage"],
                    "instantiation": data["instantiation"],
                }

                for gen in data["generations"]:
                    experiment_output["generations"].append(
                        {
                            "generation_id": gen["id"],
                            "attempt_id": gens_info.get(gen["id"], "1"),
                            "coverage": gen["coverage"],
                            "instantiation": gen["instantiation"],
                        }
                    )

                model_block["simple"]["experiments"].append(experiment_output)

        if cot_domains:
            for domain, data in cot_domains.items():
                exp_info = experiments_map[model_id]["cot"].get(domain)
                if not exp_info:
                    continue

                exp_id_val = exp_info["id"]
                gens_info = exp_info["gens"]

                experiment_output = {
                    "experiment_id": exp_id_val,
                    "generations": [],
                    "coverage": data["coverage"],
                    "instantiation": data["instantiation"],
                }

                for gen in data["generations"]:
                    gen_id_val = gen["id"]
                    gen_cat_info = gens_info.get(gen_id_val, {})

                    for cat in gen["categories"]:
                        cat_name = (cat.get("name") or "").lower()
                        cat["name"] = cat_name
                        cat["attempt_id"] = gen_cat_info.get(cat_name, "1")

                    experiment_output["generations"].append(
                        {
                            "generation_id": gen_id_val,
                            "categories": gen["categories"],
                            "coverage": gen["coverage"],
                            "instantiation": gen["instantiation"],
                        }
                    )

                model_block["cot"]["experiments"].append(experiment_output)

        final_output["experiments"].append(model_block)

    # Output to file
    output_path = os.path.join(project_root, "public", "coverage.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(final_output, f, indent=2)

    print(f"Successfully created {output_path}")


if __name__ == "__main__":
    main()
