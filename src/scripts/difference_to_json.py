import json
import re
import os


def parse_value(val):
    """Parse a value from the markdown table, handling NaN."""
    val = val.strip()
    if val.lower() == "nan":
        return None
    try:
        return float(val)
    except ValueError:
        return None


def parse_simple_difference(file_path):
    """Parse simpleDifference.md format."""
    if not os.path.exists(file_path):
        return None, None

    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    domains = {}
    global_difference = None

    current_domain = None

    i = 0
    while i < len(lines):
        line = lines[i].strip()

        # Domain header
        if line.startswith("## ") and not line.startswith("## ALL"):
            domain_name = line[3:].strip().lower()
            current_domain = {"generations": [], "difference": {}}
            domains[domain_name] = current_domain

        # ALL Experiments (global)
        elif line.startswith("## ALL Experiments"):
            # Next table contains global difference
            i += 1
            while i < len(lines) and "|" not in lines[i]:
                i += 1
            # Skip header and separator
            if i < len(lines):
                i += 2
            if i < len(lines):
                row = [r.strip() for r in lines[i].split("|") if r.strip()]
                if len(row) >= 4:
                    global_difference = {
                        "numeric": parse_value(row[1]),
                        "string_equals": parse_value(row[2]),
                        "string_lv": parse_value(row[3]),
                    }

        # Generation table
        elif "| Generations |" in line or "| gen" in line.lower():
            # Parse the table
            if "| Generations |" in line:
                # This is a header line, skip separator
                i += 1
            else:
                # This is a data row, we need to go back to find header
                pass

            # Continue reading rows
            i += 1
            while i < len(lines) and "|" in lines[i]:
                row = [r.strip() for r in lines[i].split("|") if r.strip()]
                if len(row) >= 4:
                    gen_name = row[0].strip()
                    if (
                        gen_name.lower().startswith("gen")
                        and "all" not in gen_name.lower()
                    ):
                        # Extract generation number
                        gen_id = gen_name.replace("gen", "").strip()
                        gen_data = {
                            "id": gen_id,
                            "difference": {
                                "numeric": parse_value(row[1]),
                                "string_equals": parse_value(row[2]),
                                "string_lv": parse_value(row[3]),
                            },
                        }
                        if current_domain:
                            current_domain["generations"].append(gen_data)
                    elif "all gen" in gen_name.lower():
                        # Domain total
                        if current_domain:
                            current_domain["difference"] = {
                                "numeric": parse_value(row[1]),
                                "string_equals": parse_value(row[2]),
                                "string_lv": parse_value(row[3]),
                            }
                i += 1
            continue

        i += 1

    return domains, global_difference


def parse_cot_difference(file_path):
    """Parse cotDifference.md format with categories."""
    if not os.path.exists(file_path):
        return None, None

    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    domains = {}
    global_difference = None

    current_domain = None
    current_gen = None

    i = 0
    while i < len(lines):
        line = lines[i].strip()

        # Domain header
        if line.startswith("## ") and not line.startswith("## ALL"):
            domain_name = line[3:].strip().lower()
            current_domain = {"generations": [], "difference": {}}
            domains[domain_name] = current_domain
            current_gen = None

        # Generation table header (e.g., "| gen1 | Numeric | StringEquals | StringLv |")
        elif re.match(r"\|\s*gen\d+\s*\|", line, re.IGNORECASE):
            # Extract gen number from header
            match = re.search(r"gen(\d+)", line, re.IGNORECASE)
            if match:
                gen_id = match.group(1)
                current_gen = {"id": gen_id, "categories": [], "difference": {}}
                if current_domain:
                    current_domain["generations"].append(current_gen)

                # Skip separator
                i += 1
                # Read category rows
                i += 1
                while (
                    i < len(lines)
                    and "|" in lines[i]
                    and not lines[i].strip().startswith("| gen")
                    and not lines[i].strip().startswith("| ALL Generations")
                    and not lines[i].strip().startswith("| ALL Experiments")
                ):
                    row = [r.strip() for r in lines[i].split("|") if r.strip()]
                    if len(row) >= 4:
                        cat_name = row[0].strip()
                        if "all categories" in cat_name.lower():
                            # Generation total
                            current_gen["difference"] = {
                                "numeric": parse_value(row[1]),
                                "string_equals": parse_value(row[2]),
                                "string_lv": parse_value(row[3]),
                            }
                        else:
                            # Category data
                            cat_data = {
                                "name": cat_name.lower(),
                                "difference": {
                                    "numeric": parse_value(row[1]),
                                    "string_equals": parse_value(row[2]),
                                    "string_lv": parse_value(row[3]),
                                },
                            }
                            current_gen["categories"].append(cat_data)
                    i += 1
                continue

        # ALL Generations (domain total)
        elif "| ALL Generations |" in line:
            # Skip separator
            i += 1
            # Read the total row
            i += 1
            if i < len(lines):
                row = [r.strip() for r in lines[i].split("|") if r.strip()]
                if len(row) >= 4 and current_domain:
                    current_domain["difference"] = {
                        "numeric": parse_value(row[1]),
                        "string_equals": parse_value(row[2]),
                        "string_lv": parse_value(row[3]),
                    }

        # ALL Experiments (global) - same as in parse_simple_difference
        elif line.startswith("## ALL Experiments"):
            # Next table contains global difference
            i += 1
            while i < len(lines) and "|" not in lines[i]:
                i += 1
            # Skip header and separator
            if i < len(lines):
                i += 2
            if i < len(lines):
                row = [r.strip() for r in lines[i].split("|") if r.strip()]
                if len(row) >= 4:
                    global_difference = {
                        "numeric": parse_value(row[1]),
                        "string_equals": parse_value(row[2]),
                        "string_lv": parse_value(row[3]),
                    }

        i += 1

    return domains, global_difference


def parse_combined_difference(file_path):
    """Parse combinedDifference.md format (cross-system difference)."""
    if not os.path.exists(file_path):
        return None

    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    domains = {}

    current_domain = None

    i = 0
    while i < len(lines):
        line = lines[i].strip()

        # Domain header
        if line.startswith("## "):
            domain_name = line[3:].strip().lower()
            current_domain = domain_name
            domains[domain_name] = {"difference": {}}

        # Table with data
        elif "| ALL Generations |" in line:
            row = [r.strip() for r in line.split("|") if r.strip()]
            if len(row) >= 4 and current_domain:
                domains[current_domain]["difference"] = {
                    "numeric": parse_value(row[1]),
                    "string_equals": parse_value(row[2]),
                    "string_lv": parse_value(row[3]),
                }

        i += 1

    return domains


def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.abspath(os.path.join(script_dir, "..", ".."))
    dataset_root = os.path.join(project_root, "public", "data", "dataset")

    # Load logs.json
    with open(
        os.path.join(project_root, "public", "logs.json"), "r", encoding="utf-8"
    ) as f:
        logs_data = json.load(f)

    dataset_dirs = {}
    if os.path.isdir(dataset_root):
        for entry in os.listdir(dataset_root):
            entry_path = os.path.join(dataset_root, entry)
            if os.path.isdir(entry_path):
                dataset_dirs[entry.lower()] = entry_path

    # Map domain names to experiment data
    experiments_map = {}
    for exp_group in logs_data.get("experiments", []):
        exp_id = exp_group["id"].lower()
        experiments_map[exp_id] = {"simple": {}, "cot": {}}

        for simple_exp in exp_group.get("simple", {}).get("experiments", []):
            domain = simple_exp["domain_name"].lower()
            experiments_map[exp_id]["simple"][domain] = {
                "id": simple_exp["id"],
                "gens": {
                    str(g["id"]).lower(): str(len(g.get("attempts", [])))
                    for g in simple_exp.get("generations", [])
                },
            }

        for cot_exp in exp_group.get("cot", {}).get("experiments", []):
            domain = cot_exp["domain_name"].lower()
            cat_attempts = {}
            for g in cot_exp.get("generations", []):
                gen_id = str(g["id"]).lower()
                cat_attempts[gen_id] = {}
                for cat in g.get("categories", []):
                    cat_name = cat["name"].lower()
                    creator_att = cat.get("IListCreator", {}).get("attempts", [])
                    inst_att = cat.get("IListInstantiator", {}).get("attempts", [])
                    count = len(creator_att) + len(inst_att)
                    cat_attempts[gen_id][cat_name] = str(count) if count > 0 else "1"

            experiments_map[exp_id]["cot"][domain] = {
                "id": cot_exp["id"],
                "gens": cat_attempts,
            }

    final_output = {"experiments": []}

    for exp_group in logs_data.get("experiments", []):
        main_exp_id = exp_group.get("id", "").lower()
        model_dataset_dir = dataset_dirs.get(main_exp_id)

        simple_file = (
            os.path.join(model_dataset_dir, "Simple", "simpleDifference.md")
            if model_dataset_dir
            else ""
        )
        cot_file = (
            os.path.join(model_dataset_dir, "CoT", "cotDifference.md")
            if model_dataset_dir
            else ""
        )
        combined_file = (
            os.path.join(model_dataset_dir, "combinedDifference.md")
            if model_dataset_dir
            else ""
        )

        simple_domains, simple_global = parse_simple_difference(simple_file)
        cot_domains, cot_global = parse_cot_difference(cot_file)
        combined_domains = parse_combined_difference(combined_file)

        group_output = {
            "id": main_exp_id,
            "simple": {
                "difference": simple_global if simple_global else {},
                "number_experiments": exp_group.get("simple", {}).get(
                    "number_experiments", 0
                ),
                "experiments": [],
            },
            "cot": {
                "difference": cot_global if cot_global else {},
                "number_experiments": exp_group.get("cot", {}).get(
                    "number_experiments", 0
                ),
                "experiments": [],
            },
            "combined": combined_domains if combined_domains else {},
        }

        # Fill simple experiments
        if simple_domains:
            for domain, data in simple_domains.items():
                exp_info = (
                    experiments_map.get(main_exp_id, {})
                    .get("simple", {})
                    .get(domain.lower())
                )
                if exp_info:
                    exp_id_val = exp_info["id"].lower()
                    gens_info = exp_info["gens"]

                    experiment_output = {
                        "experiment_id": exp_id_val,
                        "generations": [],
                        "difference": data["difference"],
                    }

                    for gen in data["generations"]:
                        gen_id = str(gen["id"]).lower()
                        experiment_output["generations"].append(
                            {
                                "generation_id": gen_id,
                                "attempt_id": gens_info.get(gen_id, "1"),
                                "difference": gen["difference"],
                            }
                        )

                    group_output["simple"]["experiments"].append(experiment_output)

        # Fill CoT experiments
        if cot_domains:
            for domain, data in cot_domains.items():
                exp_info = (
                    experiments_map.get(main_exp_id, {})
                    .get("cot", {})
                    .get(domain.lower())
                )
                if exp_info:
                    exp_id_val = exp_info["id"].lower()
                    gens_info = exp_info["gens"]

                    experiment_output = {
                        "experiment_id": exp_id_val,
                        "generations": [],
                        "difference": data["difference"],
                    }

                    for gen in data["generations"]:
                        gen_id_val = str(gen["id"]).lower()
                        gen_cat_info = gens_info.get(gen_id_val, {})

                        # Update categories with attempt_id
                        categories_with_attempts = []
                        for cat in gen["categories"]:
                            cat_copy = dict(cat)
                            cat_name = cat_copy.get("name", "").lower()
                            cat_copy["name"] = cat_name
                            cat_copy["attempt_id"] = gen_cat_info.get(cat_name, "1")
                            categories_with_attempts.append(cat_copy)

                        experiment_output["generations"].append(
                            {
                                "generation_id": gen_id_val,
                                "categories": categories_with_attempts,
                                "difference": gen["difference"],
                            }
                        )

                    group_output["cot"]["experiments"].append(experiment_output)

        final_output["experiments"].append(group_output)

    # Output to file
    with open(
        os.path.join(project_root, "public", "difference.json"), "w", encoding="utf-8"
    ) as f:
        json.dump(final_output, f, indent=2)

    print("Successfully created public/difference.json")


if __name__ == "__main__":
    main()
