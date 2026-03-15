import re
import json
import os
import sys


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
    all_entries = []
    system_prompt = None  # System prompt is the same for all generations

    def get_next_section_end(matches, index, content):
        return matches[index + 1].start() if index + 1 < len(matches) else len(content)

    if exp_type == "cot":
        # Supported CoT formats:
        #   # Input IJudge : category : genX
        #   # Input IJudge : domain : genX : category
        pattern = r"^# Input IJudge : (.+)$"
        matches = list(re.finditer(pattern, content, re.MULTILINE))

        for i, match in enumerate(matches):
            header_parts = [part.strip() for part in match.group(1).split(":")]

            domain_name = None
            category = None
            gen_id = None

            if len(header_parts) == 2 and re.fullmatch(r"gen\d+", header_parts[1]):
                category = header_parts[0].lower()
                gen_id = header_parts[1][3:]
            elif len(header_parts) == 3 and re.fullmatch(r"gen\d+", header_parts[1]):
                domain_name = header_parts[0].lower()
                gen_id = header_parts[1][3:]
                category = header_parts[2].lower()
            else:
                continue

            # Get the content between this match and the next
            start_pos = match.end()
            end_pos = get_next_section_end(matches, i, content)
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

            all_entries.append(
                {
                    "exp_type": "cot",
                    "domain_name": domain_name,
                    "gen_id": gen_id,
                    "category": category,
                    "user_prompt": user_prompt,
                    "model": model_name,
                }
            )

            if domain_name is None:
                if gen_id not in result:
                    result[gen_id] = {}
                result[gen_id][category] = {
                    "user_prompt": user_prompt,
                    "model": model_name,
                }
            else:
                if domain_name not in result:
                    result[domain_name] = {}
                if gen_id not in result[domain_name]:
                    result[domain_name][gen_id] = {}
                result[domain_name][gen_id][category] = {
                    "user_prompt": user_prompt,
                    "model": model_name,
                }
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

            all_entries.append(
                {
                    "exp_type": "simple",
                    "domain_name": None,
                    "gen_id": gen_id,
                    "category": None,
                    "user_prompt": user_prompt,
                    "model": model_name,
                }
            )

            result[gen_id] = {"user_prompt": user_prompt, "model": model_name}

    result["__all_entries__"] = all_entries
    return result, system_prompt


def extract_object_model_block(text):
    """Extract the raw object model body from a full judge prompt."""
    if not text:
        return ""

    match = re.search(r"<object_model>\s*(.*?)\s*</object_model>", text, re.DOTALL)
    if not match:
        return ""

    return match.group(1).strip()


def normalize_text_for_match(text):
    """Normalize text for robust matching across minor formatting differences."""
    if not text:
        return ""

    normalized = text.replace("\r\n", "\n").replace("\r", "\n").strip()
    return re.sub(r"\s+", " ", normalized).strip().lower()


def get_simple_generation_last_response(generations_data, gen_id):
    """Get the last attempt response for a Simple generation."""
    for generation in generations_data:
        if str(generation.get("id")) != str(gen_id):
            continue

        attempts = generation.get("attempts", [])
        if not attempts:
            return ""

        return (attempts[-1].get("response") or "").strip()

    return ""


def get_cot_generation_last_response(generations_data, gen_id, category):
    """Get the last attempt response for a CoT generation/category."""
    for generation in generations_data:
        if str(generation.get("id")) != str(gen_id):
            continue

        for cat in generation.get("categories", []):
            if (cat.get("name") or "").lower() != (category or "").lower():
                continue

            attempts = cat.get("IListInstantiator", {}).get("attempts", [])
            if not attempts:
                return ""

            return (attempts[-1].get("response") or "").strip()

    return ""


def find_prompt_by_object_model(
    logs_data,
    exp_type,
    gen_id,
    expected_object_model,
    category=None,
    domain_name=None,
):
    """
    Resolve the correct judge input prompt by matching its <object_model> body
    against the generation's last attempt response from logs.json.
    """
    all_entries = logs_data.get("__all_entries__", [])
    if not all_entries or not expected_object_model:
        return ""

    expected_norm = normalize_text_for_match(expected_object_model)
    matches = []

    for entry in all_entries:
        if entry.get("exp_type") != exp_type:
            continue
        if str(entry.get("gen_id")) != str(gen_id):
            continue

        if exp_type == "cot":
            if (entry.get("category") or "").lower() != (category or "").lower():
                continue

            # If domain is provided in header, keep it as additional guard.
            if (
                domain_name
                and entry.get("domain_name")
                and (entry.get("domain_name") or "").lower() != domain_name.lower()
            ):
                continue

        prompt_object_model = extract_object_model_block(entry.get("user_prompt", ""))
        if not prompt_object_model:
            continue

        if normalize_text_for_match(prompt_object_model) == expected_norm:
            matches.append(entry)

    if len(matches) == 1:
        return matches[0].get("user_prompt", "")

    return ""


def parse_judge_output_stats(logs_path, exp_type, responses_data=None):
    """
    Parse judge-logs.md to extract output stats from # Output IJudge sections.
    Returns:
            - per_domain_stats:
                Simple: {domain: {gen_id: {"input_tokens": N, "output_tokens": N, "total_tokens": N, "time_seconds": N}}}
                CoT: {domain: {gen_id: {category: {...}}}}
            - summary_stats: {"input_tokens": N, "output_tokens": N, "total_tokens": N, "time_seconds": N}
    """
    with open(logs_path, "r", encoding="utf-8") as f:
        content = f.read()

    per_domain_stats = {}
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

    def normalize_text_for_match(text):
        if not text:
            return ""
        return re.sub(r"\s+", " ", text).strip().lower()

    def extract_response_and_why(block):
        content_block = block.strip()
        fenced_match = re.search(r"```(?:\w+)?\n?(.*?)```", content_block, re.DOTALL)
        if fenced_match:
            content_block = fenced_match.group(1).strip()

        response_match = re.search(
            r"^\*\*Response\*\*:\s*(.+)$", content_block, re.MULTILINE
        )
        response_text = response_match.group(1).strip() if response_match else ""

        why_match = re.search(r"\*\*Why\*\*:\s*", content_block)
        why_text = content_block[why_match.end() :].strip() if why_match else ""

        return response_text, why_text

    def get_simple_domain_by_response(gen_id, response_text, why_text, responses_data):
        if not responses_data:
            return None

        normalized_response = normalize_text_for_match(response_text)
        normalized_why = normalize_text_for_match(why_text)
        matches = []

        for domain_name, domain_gens in responses_data.items():
            if gen_id not in domain_gens:
                continue

            candidate = domain_gens[gen_id]
            candidate_response = normalize_text_for_match(candidate.get("response", ""))
            candidate_why = normalize_text_for_match(candidate.get("why", ""))

            if candidate_response != normalized_response:
                continue

            if candidate_why != normalized_why:
                continue

            matches.append(domain_name)

        if len(matches) == 1:
            return matches[0]

        return None

    def get_cot_domain_by_response(
        gen_id, category, response_text, why_text, responses_data, preferred_domain=None
    ):
        if not responses_data:
            return None

        normalized_response = normalize_text_for_match(response_text)
        normalized_why = normalize_text_for_match(why_text)
        matches = []

        domain_items = responses_data.items()
        if preferred_domain is not None:
            preferred = responses_data.get(preferred_domain)
            domain_items = (
                [(preferred_domain, preferred)] if preferred is not None else []
            )

        for domain_name, domain_gens in domain_items:
            if gen_id not in domain_gens:
                continue
            if category not in domain_gens[gen_id]:
                continue

            candidate = domain_gens[gen_id][category]
            candidate_response = normalize_text_for_match(candidate.get("response", ""))
            candidate_why = normalize_text_for_match(candidate.get("why", ""))

            if candidate_response != normalized_response:
                continue

            if candidate_why != normalized_why:
                continue

            matches.append(domain_name)

        if len(matches) == 1:
            return matches[0]

        return None

    # Parse per-generation stats
    if exp_type == "cot":
        # Supported CoT formats:
        #   # Output IJudge : category : genX
        #   # Output IJudge : domain : genX : category
        pattern = r"^# Output IJudge : (.+)$"
        matches = list(re.finditer(pattern, content, re.MULTILINE))

        for i, match in enumerate(matches):
            header_parts = [part.strip() for part in match.group(1).split(":")]

            domain_name = None
            category = None
            gen_id = None

            if len(header_parts) == 2 and re.fullmatch(r"gen\d+", header_parts[1]):
                category = header_parts[0].lower()
                gen_id = header_parts[1][3:]
            elif len(header_parts) == 3 and re.fullmatch(r"gen\d+", header_parts[1]):
                domain_name = header_parts[0].lower()
                gen_id = header_parts[1][3:]
                category = header_parts[2].lower()
            else:
                continue

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

            response_text, why_text = extract_response_and_why(block)

            matched_domain_name = get_cot_domain_by_response(
                gen_id,
                category,
                response_text,
                why_text,
                responses_data,
                preferred_domain=domain_name,
            )

            if matched_domain_name is None:
                print(
                    "  Error: Could not uniquely match CoT output "
                    f"for gen{gen_id}/{category if domain_name is None else domain_name} in {logs_path}",
                    file=sys.stderr,
                )
                continue

            if matched_domain_name not in per_domain_stats:
                per_domain_stats[matched_domain_name] = {}
            if gen_id not in per_domain_stats[matched_domain_name]:
                per_domain_stats[matched_domain_name][gen_id] = {}

            per_domain_stats[matched_domain_name][gen_id][category] = stats
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

            stats = {
                "input_tokens": int(input_match.group(1)) if input_match else 0,
                "output_tokens": int(output_match.group(1)) if output_match else 0,
                "total_tokens": int(total_match.group(1)) if total_match else 0,
                "time_seconds": float(time_match.group(1)) if time_match else 0,
            }

            response_text, why_text = extract_response_and_why(block)

            domain_name = get_simple_domain_by_response(
                gen_id, response_text, why_text, responses_data
            )

            if domain_name is None:
                print(
                    "  Error: Could not uniquely match Simple output "
                    f"for gen{gen_id} in {logs_path}",
                    file=sys.stderr,
                )
                continue

            if domain_name not in per_domain_stats:
                per_domain_stats[domain_name] = {}
            per_domain_stats[domain_name][gen_id] = stats

    return per_domain_stats, summary_stats


def parse_judge_responses(responses_path, exp_type):
    """
    Parse judge-responses.md to extract verdicts and reasoning.
    Returns dict: {domain: {gen_id: {"response": ..., "why": ...}}}
    For CoT: {domain: {gen_id: {category: {"response": ..., "why": ...}}}}
    """
    with open(responses_path, "r", encoding="utf-8") as f:
        content = f.read()

    result = {}

    def extract_response_and_why(block):
        response_match = re.search(r"^\*\*Response\*\*:\s*(.+)$", block, re.MULTILINE)
        response_text = response_match.group(1).strip() if response_match else "Unknown"

        why_match = re.search(r"\*\*Why\*\*:\s*", block)
        why_text = block[why_match.end() :].strip() if why_match else ""

        return response_text, why_text

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
                response, why = extract_response_and_why(gen_block)

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
                response, why = extract_response_and_why(gen_block)

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

    def get_cot_log_entry(logs_data, domain_name, gen_id, cat_name):
        domain_logs = logs_data.get(domain_name.lower())
        if isinstance(domain_logs, dict):
            gen_logs = domain_logs.get(gen_id, {})
            if isinstance(gen_logs, dict):
                return gen_logs.get(cat_name, {})

        gen_logs = logs_data.get(gen_id, {})
        if isinstance(gen_logs, dict):
            return gen_logs.get(cat_name, {})

        return {}

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
                expected_object_model = get_cot_generation_last_response(
                    generations_data, gen_id, cat_name
                )
                judge_prompt = find_prompt_by_object_model(
                    logs_data,
                    exp_type="cot",
                    gen_id=gen_id,
                    expected_object_model=expected_object_model,
                    category=cat_name,
                    domain_name=domain_name,
                )

                if not judge_prompt:
                    # Fallback for legacy/partial bundles where matching is unavailable.
                    log_entry = get_cot_log_entry(
                        logs_data, domain_name, gen_id, cat_name
                    )
                    if log_entry:
                        judge_prompt = log_entry.get("user_prompt", "")

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
            expected_object_model = get_simple_generation_last_response(
                generations_data, gen_id
            )
            judge_prompt = find_prompt_by_object_model(
                logs_data,
                exp_type="simple",
                gen_id=gen_id,
                expected_object_model=expected_object_model,
            )

            if not judge_prompt and gen_id in logs_data:
                # Fallback for legacy/partial bundles where matching is unavailable.
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
        output_stats_by_domain, summary_stats = parse_judge_output_stats(
            bundle["logs"], exp_type, responses_data
        )

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
                output_stats_by_domain.get(domain_name, {}),
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
