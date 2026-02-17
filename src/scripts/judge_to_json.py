import re
import json
import os


def get_experiment_info(loaded_data, experiment_id):
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

    if not outer_experiments:
        res_type, res_gen = search_in_block(
            loaded_data.get("simple", {}).get("experiments", [])
        )
        if res_type:
            return res_type, res_gen

        res_type, res_gen = search_in_block(
            loaded_data.get("cot", {}).get("experiments", [])
        )
        if res_type:
            return res_type, res_gen
        return None, []

    for outer_exp in outer_experiments:
        simple_exps = outer_exp.get("simple", {}).get("experiments", [])
        res_type, res_gen = search_in_block(simple_exps)
        if res_type:
            return res_type, res_gen

        cot_exps = outer_exp.get("cot", {}).get("experiments", [])
        res_type, res_gen = search_in_block(cot_exps)
        if res_type:
            return res_type, res_gen

    return None, []


def get_model_id_for_experiment(loaded_data, experiment_id):
    """
    Finds which top-level model group contains the given experiment ID.
    Returns model id (e.g., GPT_4O) or "unknown".
    """
    if not loaded_data or "experiments" not in loaded_data:
        return "unknown"

    for outer_exp in loaded_data.get("experiments", []):
        model_id = outer_exp.get("id", "unknown")
        simple_exps = outer_exp.get("simple", {}).get("experiments", [])
        cot_exps = outer_exp.get("cot", {}).get("experiments", [])

        if any(exp.get("id") == experiment_id for exp in simple_exps):
            return model_id or "unknown"
        if any(exp.get("id") == experiment_id for exp in cot_exps):
            return model_id or "unknown"

    return "unknown"


def normalize_model_id(model_text):
    """Normalize model identifiers for robust case-insensitive matching."""
    if not model_text:
        return ""

    base = model_text.strip()
    base = re.sub(r"-exp\d+$", "", base, flags=re.IGNORECASE)
    return re.sub(r"[^A-Za-z0-9]", "", base).lower()


def extract_model_from_judge_file(file_path):
    """
    Extract source model token from first header like:
    # Simple / GPT4O-exp1 / GEMINI_3_PRO
    """
    if not os.path.exists(file_path):
        return None

    with open(file_path, "r", encoding="utf-8") as f:
        for _ in range(20):
            line = f.readline()
            if not line:
                break
            m = re.match(r"^#\s*(?:Simple|CoT)\s*/\s*([^/]+)\s*/", line.strip())
            if m:
                return m.group(1).strip()

    return None


def parse_judge_logs(logs_path, exp_type):
    """
    Parse judge-logs.md to extract system prompts and user prompts.
    Returns dict: {gen_id: {"system_prompt": ..., "user_prompt": ..., "model": ...}}
    For CoT: {gen_id: {category: {"system_prompt": ..., "user_prompt": ..., "model": ...}}}
    """
    with open(logs_path, "r", encoding="utf-8") as f:
        content = f.read()

    result = {}
    system_prompt = None  # System prompt is the same for all generations

    if exp_type == "cot":
        # CoT format: # Input IJudge : category : genX
        pattern = r"^# Input IJudge : (\w+) : gen(\d+)"
        matches = list(re.finditer(pattern, content, re.MULTILINE))

        for i, match in enumerate(matches):
            category = match.group(1)
            category = category.lower()
            gen_id = match.group(2)

            # Get the content between this match and the next
            start_pos = match.end()
            end_pos = matches[i + 1].start() if i + 1 < len(matches) else len(content)
            block = content[start_pos:end_pos]

            # Extract system message (get first one if not set)
            if system_prompt is None:
                sys_match = re.search(
                    r'SystemMessage \{ text = "(.*?)" \}', block, re.DOTALL
                )
                if sys_match:
                    system_prompt = sys_match.group(1).strip()

            # Extract user message
            user_match = re.search(
                r'UserMessage \{.*?contents = \[TextContent \{ text = "(.*?)" \}\]',
                block,
                re.DOTALL,
            )
            user_prompt = user_match.group(1).strip() if user_match else ""

            # Extract model info
            model_match = re.search(r"Model: ([^\n]+)", block)
            model_name = model_match.group(1).strip() if model_match else "unknown"

            if gen_id not in result:
                result[gen_id] = {}

            result[gen_id][category] = {"user_prompt": user_prompt, "model": model_name}
    else:
        # Simple format: # Input IJudge : genX
        pattern = r"^# Input IJudge : gen(\d+)"
        matches = list(re.finditer(pattern, content, re.MULTILINE))

        for i, match in enumerate(matches):
            gen_id = match.group(1)

            start_pos = match.end()
            end_pos = matches[i + 1].start() if i + 1 < len(matches) else len(content)
            block = content[start_pos:end_pos]

            # Extract system message (get first one if not set)
            if system_prompt is None:
                sys_match = re.search(
                    r'SystemMessage \{ text = "(.*?)" \}', block, re.DOTALL
                )
                if sys_match:
                    system_prompt = sys_match.group(1).strip()

            # Extract user message
            user_match = re.search(
                r'UserMessage \{.*?contents = \[TextContent \{ text = "(.*?)" \}\]',
                block,
                re.DOTALL,
            )
            user_prompt = user_match.group(1).strip() if user_match else ""

            # Extract model info
            model_match = re.search(r"Model: ([^\n]+)", block)
            model_name = model_match.group(1).strip() if model_match else "unknown"

            result[gen_id] = {"user_prompt": user_prompt, "model": model_name}

    return result, system_prompt


def parse_judge_output_stats(logs_path, exp_type):
    """
    Parse judge-logs.md to extract output stats from # Output IJudge sections.
    Returns:
        - per_gen_stats: {gen_id: {"input_tokens": N, "output_tokens": N, "total_tokens": N, "time_seconds": N}}
          For CoT: {gen_id: {category: {...}}}
        - summary_stats: {"input_tokens": N, "output_tokens": N, "total_tokens": N, "time_seconds": N}
    """
    with open(logs_path, "r", encoding="utf-8") as f:
        content = f.read()

    per_gen_stats = {}
    summary_stats = {
        "input_tokens": 0,
        "output_tokens": 0,
        "total_tokens": 0,
        "time_seconds": 0,
    }

    # Parse summary stats
    summary_match = re.search(
        r"# Summary for all generations.*?Generations time \| ([\d.]+) seconds.*?Sum of input tokens \| (\d+).*?Sum of output tokens \| (\d+).*?Sum of total tokens \| (\d+)",
        content,
        re.DOTALL,
    )
    if summary_match:
        summary_stats = {
            "input_tokens": int(summary_match.group(2)),
            "output_tokens": int(summary_match.group(3)),
            "total_tokens": int(summary_match.group(4)),
            "time_seconds": float(summary_match.group(1)),
        }

    # Parse per-generation stats
    if exp_type == "cot":
        # CoT format: # Output IJudge : category : genX
        pattern = r"^# Output IJudge : (\w+) : gen(\d+)"
        matches = list(re.finditer(pattern, content, re.MULTILINE))

        for i, match in enumerate(matches):
            category = match.group(1)
            category = category.lower()
            gen_id = match.group(2)

            # Get the content after this match until next # Output or # Summary
            start_pos = match.end()
            end_pos = len(content)
            for j in range(i + 1, len(matches)):
                end_pos = matches[j].start()
                break
            # Also check for Summary
            summary_pos = content.find("# Summary for all generations", start_pos)
            if summary_pos != -1 and summary_pos < end_pos:
                end_pos = summary_pos

            block = content[start_pos:end_pos]

            # Extract stats from |Response| table
            input_match = re.search(r"Input Tokens: (\d+)", block)
            output_match = re.search(r"Output Tokens: (\d+)", block)
            total_match = re.search(r"Total Tokens: (\d+)", block)
            time_match = re.search(r"Generation Time: ([\d.]+) seconds", block)

            stats = {
                "input_tokens": int(input_match.group(1)) if input_match else 0,
                "output_tokens": int(output_match.group(1)) if output_match else 0,
                "total_tokens": int(total_match.group(1)) if total_match else 0,
                "time_seconds": float(time_match.group(1)) if time_match else 0,
            }

            if gen_id not in per_gen_stats:
                per_gen_stats[gen_id] = {}
            per_gen_stats[gen_id][category] = stats
    else:
        # Simple format: # Output IJudge : genX
        pattern = r"^# Output IJudge : gen(\d+)"
        matches = list(re.finditer(pattern, content, re.MULTILINE))

        for i, match in enumerate(matches):
            gen_id = match.group(1)

            start_pos = match.end()
            end_pos = len(content)
            for j in range(i + 1, len(matches)):
                end_pos = matches[j].start()
                break
            summary_pos = content.find("# Summary for all generations", start_pos)
            if summary_pos != -1 and summary_pos < end_pos:
                end_pos = summary_pos

            block = content[start_pos:end_pos]

            # Extract stats from |Response| table
            input_match = re.search(r"Input Tokens: (\d+)", block)
            output_match = re.search(r"Output Tokens: (\d+)", block)
            total_match = re.search(r"Total Tokens: (\d+)", block)
            time_match = re.search(r"Generation Time: ([\d.]+) seconds", block)

            per_gen_stats[gen_id] = {
                "input_tokens": int(input_match.group(1)) if input_match else 0,
                "output_tokens": int(output_match.group(1)) if output_match else 0,
                "total_tokens": int(total_match.group(1)) if total_match else 0,
                "time_seconds": float(time_match.group(1)) if time_match else 0,
            }

    return per_gen_stats, summary_stats


def parse_judge_responses(responses_path, exp_type):
    """
    Parse judge-responses.md to extract verdicts and reasoning.
    Returns dict: {domain: {gen_id: {"response": ..., "why": ...}}}
    For CoT: {domain: {gen_id: {category: {"response": ..., "why": ...}}}}
    """
    with open(responses_path, "r", encoding="utf-8") as f:
        content = f.read()

    result = {}
    current_domain = None

    # Split by domain headers
    domain_pattern = r"^# ([A-Za-z]+)\s*$"
    domain_matches = list(re.finditer(domain_pattern, content, re.MULTILINE))

    for i, domain_match in enumerate(domain_matches):
        domain_name = domain_match.group(1).strip()

        # Skip the experiment header line
        if domain_name in ["Simple", "CoT"]:
            continue

        start_pos = domain_match.end()
        end_pos = (
            domain_matches[i + 1].start()
            if i + 1 < len(domain_matches)
            else len(content)
        )
        domain_block = content[start_pos:end_pos]

        result[domain_name.lower()] = {}

        if exp_type == "cot":
            # CoT format: ## gen1 / baseline
            gen_pattern = r"^## gen(\d+) / (\w+)"
            gen_matches = list(re.finditer(gen_pattern, domain_block, re.MULTILINE))

            for j, gen_match in enumerate(gen_matches):
                gen_id = gen_match.group(1)
                category = gen_match.group(2)
                category = category.lower()

                gen_start = gen_match.end()
                gen_end = (
                    gen_matches[j + 1].start()
                    if j + 1 < len(gen_matches)
                    else len(domain_block)
                )
                gen_block = domain_block[gen_start:gen_end]

                # Extract response and why
                response_match = re.search(r"\*\*Response\*\*:\s*([^\n]+)", gen_block)
                why_match = re.search(
                    r"\*\*Why\*\*:\s*(.*?)(?=\n\n|\n##|$)", gen_block, re.DOTALL
                )

                response = (
                    response_match.group(1).strip() if response_match else "Unknown"
                )
                why = why_match.group(1).strip() if why_match else ""

                if gen_id not in result[domain_name.lower()]:
                    result[domain_name.lower()][gen_id] = {}

                result[domain_name.lower()][gen_id][category] = {
                    "response": response,
                    "why": why,
                }
        else:
            # Simple format: ## genX
            gen_pattern = r"^## gen(\d+)\s*$"
            gen_matches = list(re.finditer(gen_pattern, domain_block, re.MULTILINE))

            for j, gen_match in enumerate(gen_matches):
                gen_id = gen_match.group(1)

                gen_start = gen_match.end()
                gen_end = (
                    gen_matches[j + 1].start()
                    if j + 1 < len(gen_matches)
                    else len(domain_block)
                )
                gen_block = domain_block[gen_start:gen_end]

                # Extract response and why
                response_match = re.search(r"\*\*Response\*\*:\s*([^\n]+)", gen_block)
                why_match = re.search(
                    r"\*\*Why\*\*:\s*(.*?)(?=\n\n|\n##|$)", gen_block, re.DOTALL
                )

                response = (
                    response_match.group(1).strip() if response_match else "Unknown"
                )
                why = why_match.group(1).strip() if why_match else ""

                result[domain_name.lower()][gen_id] = {"response": response, "why": why}

    return result


def parse_judge_results(results_path):
    """
    Parse judge-results.md to extract aggregate statistics per domain.
    Returns dict: {domain: {"realistic": N, "unrealistic": N, "unknown": N, "success_rate": N}}
    """
    with open(results_path, "r", encoding="utf-8") as f:
        content = f.read()

    result = {}

    # Parse markdown table rows
    table_pattern = r"\|\s*\*\*(\w+)\*\*\s*\|\s*([\d.]+)\s*\|\s*([\d.]+)\s*\|\s*([\d.]+)\s*\|\s*([\d.]+)\s*\|"
    matches = re.finditer(table_pattern, content)

    for match in matches:
        domain = match.group(1).lower()
        realistic = float(match.group(2))
        unrealistic = float(match.group(3))
        unknown = float(match.group(4))
        success_rate = float(match.group(5))

        result[domain] = {
            "realistic": int(realistic),
            "unrealistic": int(unrealistic),
            "unknown": int(unknown),
            "success_rate": success_rate,
        }

    return result


def normalize_response(response):
    """Normalize response to lowercase for JSON output."""
    response_lower = response.lower().strip()
    if response_lower in ["realistic"]:
        return "realistic"
    elif response_lower in ["unrealistic"]:
        return "unrealistic"
    else:
        return "doubtful"


def get_attempt_id_for_generation(generations_data, gen_id, category=None):
    """
    Find the successful attempt ID for a given generation.
    For CoT, looks within the specified category.
    """
    gen_lookup = {str(g["id"]): g for g in generations_data}
    gen_data = gen_lookup.get(gen_id)

    if not gen_data:
        return "1"

    if category:
        # CoT: look in categories
        categories = gen_data.get("categories", [])
        for cat in categories:
            if cat.get("name") == category:
                attempts = cat.get("IListInstantiator", {}).get("attempts", [])
                if attempts:
                    return str(attempts[-1].get("id", "1"))
        return "1"
    else:
        # Simple: look in attempts
        attempts = gen_data.get("attempts", [])
        for att in attempts:
            if att.get("status") == "success":
                return str(att.get("id", "1"))
        if attempts:
            return str(attempts[-1].get("id", "1"))
        return "1"


def build_judge_json(
    logs_data,
    responses_data,
    results_data,
    system_prompt,
    generations_data,
    exp_type,
    domain_name,
    domain_experiment_id,
    output_stats=None,
):
    """
    Build the judge JSON structure for a single experiment.
    output_stats: {gen_id: stats_dict} or {gen_id: {category: stats_dict}} for CoT
    """
    generations_output = []
    total_realistic = 0
    total_unrealistic = 0
    total_doubtful = 0
    total_input_tokens = 0
    total_output_tokens = 0
    total_total_tokens = 0
    total_time_seconds = 0.0

    if output_stats is None:
        output_stats = {}

    domain_responses = responses_data.get(domain_name.lower(), {})

    if exp_type == "cot":
        # CoT: each generation has categories
        for gen_id, categories in sorted(
            domain_responses.items(), key=lambda x: int(x[0])
        ):
            gen_input_tokens = 0
            gen_output_tokens = 0
            gen_total_tokens = 0
            gen_time_seconds = 0.0

            gen_output = {
                "generation_id": gen_id,
                "stats": {
                    "input_tokens": 0,
                    "output_tokens": 0,
                    "total_tokens": 0,
                    "time_seconds": 0,
                },
                "realism": {"realistic": 0, "unrealistic": 0, "doubtful": 0},
                "categories": [],
            }

            for cat_name, cat_data in categories.items():
                response_type = normalize_response(cat_data.get("response", "Unknown"))
                reasoning = cat_data.get("why", "")

                # Get judge prompt from logs if available
                judge_prompt = ""
                if gen_id in logs_data and cat_name in logs_data[gen_id]:
                    judge_prompt = logs_data[gen_id][cat_name].get("user_prompt", "")

                attempt_id = get_attempt_id_for_generation(
                    generations_data, gen_id, cat_name
                )

                # Get stats for this category
                cat_stats = {
                    "input_tokens": 0,
                    "output_tokens": 0,
                    "total_tokens": 0,
                    "time_seconds": 0,
                }
                if gen_id in output_stats and cat_name in output_stats[gen_id]:
                    cat_stats = output_stats[gen_id][cat_name]

                cat_output = {
                    "name": cat_name,
                    "attempt_id": attempt_id,
                    "judge_prompt": judge_prompt,
                    "judge_response": f"**Response**: {cat_data.get('response', 'Unknown')}\n**Why**: {reasoning}",
                    "stats": cat_stats,
                    "realism": {"response_type": response_type, "reasoning": reasoning},
                }

                gen_output["categories"].append(cat_output)

                # Aggregate stats for generation
                gen_input_tokens += cat_stats.get("input_tokens", 0)
                gen_output_tokens += cat_stats.get("output_tokens", 0)
                gen_total_tokens += cat_stats.get("total_tokens", 0)
                gen_time_seconds += cat_stats.get("time_seconds", 0)

                # Aggregate realism counts
                if response_type == "realistic":
                    gen_output["realism"]["realistic"] += 1
                    total_realistic += 1
                elif response_type == "unrealistic":
                    gen_output["realism"]["unrealistic"] += 1
                    total_unrealistic += 1
                else:
                    gen_output["realism"]["doubtful"] += 1
                    total_doubtful += 1

            # Set generation stats
            gen_output["stats"] = {
                "input_tokens": gen_input_tokens,
                "output_tokens": gen_output_tokens,
                "total_tokens": gen_total_tokens,
                "time_seconds": round(gen_time_seconds, 2),
            }

            # Aggregate for experiment totals
            total_input_tokens += gen_input_tokens
            total_output_tokens += gen_output_tokens
            total_total_tokens += gen_total_tokens
            total_time_seconds += gen_time_seconds

            generations_output.append(gen_output)
    else:
        # Simple: each generation is flat
        for gen_id, gen_data in sorted(
            domain_responses.items(), key=lambda x: int(x[0])
        ):
            response_type = normalize_response(gen_data.get("response", "Unknown"))
            reasoning = gen_data.get("why", "")

            # Get judge prompt from logs if available
            judge_prompt = ""
            if gen_id in logs_data:
                judge_prompt = logs_data[gen_id].get("user_prompt", "")

            attempt_id = get_attempt_id_for_generation(generations_data, gen_id)

            # Get stats for this generation
            gen_stats = {
                "input_tokens": 0,
                "output_tokens": 0,
                "total_tokens": 0,
                "time_seconds": 0,
            }
            if gen_id in output_stats:
                gen_stats = output_stats[gen_id]

            gen_output = {
                "generation_id": gen_id,
                "attempt_id": attempt_id,
                "judge_prompt": judge_prompt,
                "judge_response": f"**Response**: {gen_data.get('response', 'Unknown')}\n**Why**: {reasoning}",
                "realism": {"response_type": response_type, "reasoning": reasoning},
                "stats": gen_stats,
            }

            generations_output.append(gen_output)

            # Aggregate stats for experiment totals
            total_input_tokens += gen_stats.get("input_tokens", 0)
            total_output_tokens += gen_stats.get("output_tokens", 0)
            total_total_tokens += gen_stats.get("total_tokens", 0)
            total_time_seconds += gen_stats.get("time_seconds", 0)

            # Aggregate realism counts
            if response_type == "realistic":
                total_realistic += 1
            elif response_type == "unrealistic":
                total_unrealistic += 1
            else:
                total_doubtful += 1

    # Build experiment output
    experiment_output = {
        "experiment_id": domain_experiment_id,
        "stats": {
            "input_tokens": total_input_tokens,
            "output_tokens": total_output_tokens,
            "total_tokens": total_total_tokens,
            "time_seconds": round(total_time_seconds, 2),
        },
        "realism": {
            "realistic": total_realistic,
            "unrealistic": total_unrealistic,
            "doubtful": total_doubtful,
        },
        "generations": generations_output,
    }

    return experiment_output


if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.abspath(os.path.join(script_dir, "..", ".."))
    target_json_source = os.path.join(project_root, "public", "logs.json")

    loaded_data = {}
    if os.path.exists(target_json_source):
        with open(target_json_source, "r", encoding="utf-8") as f:
            loaded_data = json.load(f)

    dataset_root = os.path.join(project_root, "public", "data", "dataset")

    # Discover judge bundles at: dataset/<model_id>/<Simple|CoT>/judge-*.md
    judge_bundles = []
    if os.path.isdir(dataset_root):
        for model_dir_name in os.listdir(dataset_root):
            model_dir = os.path.join(dataset_root, model_dir_name)
            if not os.path.isdir(model_dir):
                continue

            for exp_type_dir_name in os.listdir(model_dir):
                exp_type_dir = os.path.join(model_dir, exp_type_dir_name)
                if not os.path.isdir(exp_type_dir):
                    continue

                exp_type = exp_type_dir_name.lower()
                if exp_type not in ("simple", "cot"):
                    continue

                logs_path = os.path.join(exp_type_dir, "judge-logs.md")
                responses_path = os.path.join(exp_type_dir, "judge-responses.md")
                results_path = os.path.join(exp_type_dir, "judge-results.md")

                if (
                    os.path.exists(logs_path)
                    and os.path.exists(responses_path)
                    and os.path.exists(results_path)
                ):
                    judge_bundles.append(
                        {
                            "model_id": model_dir_name.lower(),
                            "exp_type": exp_type,
                            "logs": logs_path,
                            "responses": responses_path,
                            "results": results_path,
                        }
                    )

    judge_bundles.sort(key=lambda b: (b["model_id"], b["exp_type"]))

    output_by_model = {}

    def init_group():
        return {
            "model": {
                "name": "gemini_3_pro",
                "provider": "openrouter/google",
                "version": "gemini-3-pro-preview",
            },
            "stats": {
                "input_tokens": 0,
                "output_tokens": 0,
                "total_tokens": 0,
                "time_seconds": 0,
            },
            "realism": {"realistic": 0, "unrealistic": 0, "doubtful": 0},
            "judge_system_prompt": "",
            "number_experiments": 0,
            "experiments": [],
        }

    # Process each discovered model/type judge bundle
    for bundle in judge_bundles:
        exp_type = bundle["exp_type"]
        model_id = bundle["model_id"]

        print(f"Processing {exp_type} experiments for model {model_id}...")

        # Parse files
        logs_data, system_prompt = parse_judge_logs(bundle["logs"], exp_type)
        responses_data = parse_judge_responses(bundle["responses"], exp_type)
        results_data = parse_judge_results(bundle["results"])
        output_stats, summary_stats = parse_judge_output_stats(bundle["logs"], exp_type)

        if model_id not in output_by_model:
            output_by_model[model_id] = {
                "simple": init_group(),
                "cot": init_group(),
            }

        if (
            system_prompt
            and not output_by_model[model_id][exp_type]["judge_system_prompt"]
        ):
            output_by_model[model_id][exp_type]["judge_system_prompt"] = system_prompt

        # Use per-file summary for top-level stats (avoid summing same generation stats per domain)
        output_by_model[model_id][exp_type]["stats"] = {
            "input_tokens": summary_stats.get("input_tokens", 0),
            "output_tokens": summary_stats.get("output_tokens", 0),
            "total_tokens": summary_stats.get("total_tokens", 0),
            "time_seconds": summary_stats.get("time_seconds", 0),
        }

        # Find matching model block in logs.json (case-insensitive)
        source_outer = next(
            (
                outer
                for outer in loaded_data.get("experiments", [])
                if (outer.get("id", "") or "").lower() == model_id
            ),
            None,
        )

        if not source_outer:
            print(f"  Warning: No logs.json experiments found for model {model_id}")
            continue

        source_experiments = source_outer.get(exp_type, {}).get("experiments", [])

        for source_exp in source_experiments:
            exp_id = (source_exp.get("id", "unknown") or "unknown").lower()
            domain_name = (source_exp.get("domain_name", "") or "").lower()
            _, generations_data = get_experiment_info(loaded_data, exp_id)

            if domain_name not in responses_data:
                print(
                    f"  Warning: No responses found for domain {domain_name} ({model_id})"
                )
                continue

            experiment = build_judge_json(
                logs_data,
                responses_data,
                results_data,
                system_prompt,
                generations_data,
                exp_type,
                domain_name,
                exp_id,
                output_stats,
            )

            output_by_model[model_id][exp_type]["experiments"].append(experiment)
            output_by_model[model_id][exp_type]["number_experiments"] += 1

            output_by_model[model_id][exp_type]["realism"]["realistic"] += experiment[
                "realism"
            ]["realistic"]
            output_by_model[model_id][exp_type]["realism"]["unrealistic"] += experiment[
                "realism"
            ]["unrealistic"]
            output_by_model[model_id][exp_type]["realism"]["doubtful"] += experiment[
                "realism"
            ]["doubtful"]

            print(
                f"  Processed {domain_name} ({model_id}): {experiment['realism']} stats: {experiment['stats']}"
            )

    experiments_output = []
    for model_id in sorted(output_by_model.keys()):
        for group in ["simple", "cot"]:
            output_by_model[model_id][group]["stats"]["time_seconds"] = round(
                output_by_model[model_id][group]["stats"]["time_seconds"], 2
            )

        experiments_output.append(
            {
                "id": model_id,
                "simple": output_by_model[model_id]["simple"],
                "cot": output_by_model[model_id]["cot"],
            }
        )

    final_output = {"experiments": experiments_output}

    # Write output
    output_path = os.path.join(project_root, "public", "judge.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(final_output, f, indent=2)

    print(f"\nOutput written to {output_path}")
    for model_id in sorted(output_by_model.keys()):
        print(
            f"Model {model_id} | Simple: {output_by_model[model_id]['simple']['realism']}"
        )
        print(f"Model {model_id} | CoT: {output_by_model[model_id]['cot']['realism']}")
