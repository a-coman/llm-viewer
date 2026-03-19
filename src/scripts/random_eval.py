#!/usr/bin/env python3
# /// script
# dependencies = [
#   "openpyxl>=3.1,<4",
# ]
# ///

# # Globalmente (si combinaramos ambos archivos):
# Seleccionamos 120 instancias de 1200.
# Fijamos 120/8 = 15 instancias para cada model / strategy / realism.
# - gpt_4o / simple / realistic: selected 15
# - gpt_4o / simple / unrealistic: selected 15
# - gpt_4o / cot / realistic: selected 15
# - gpt_4o / cot / unrealistic: selected 15
# - gpt_5_2 / simple / realistic: selected 15
# - gpt_5_2 / simple / unrealistic: selected 15
# - gpt_5_2 / cot / realistic: selected 15
# - gpt_5_2 / cot / unrealistic: selected 15
# Como hay 10 dominios (addressbook, bank, ...), eso da 120/10 = 12 instancias por dominio en total.
# Luego, para el dominio bank, el total global debe ser 12.
# Esas 12 de bank se reparten como 12/4 = 3 para cada model / strategy:
# gpt_4o / simple / bank = 3
# gpt_4o / cot / bank = 3
# gpt_5_2 / simple / bank = 3
# gpt_5_2 / cot / bank = 3

# Dentro de cada model / strategy / domain:
# No forzamos realistic y unrealistic exactos por dominio.
# Los repartimos lo más equilibradamente posible según lo que exista en los datos.

# Si gpt_5_2 / simple / bank = 3, usamos la combinación factible más equilibrada posible, intentamos algo como 2 realistic + 1 unrealistic o 1 realistic + 2 unrealistic.

# Por tanto, globalmente:
# - Siempre habra 15 realistic y 15 unrealistic por model y strategy
# - Siempre habra 3 instancias por cada model strategy y dominio
# - Es posible que algunos dominios tengan mas o menos realistics/unrealistics dependiendo de la disponibilidad de datos

# # Por archivo (random_eval_1 / random_eval_2):
# Cada archivo tiene 60 instancias.
# Y por tanto 60/10 = 6 instancias por dominio.
# (60/8 = 7.5) por tanto los buckets por archivo quedan así:
# Archivo 1: gpt_4o/* = 8 por bucket, gpt_5_2/* = 7 por bucket
# Archivo 2: gpt_4o/* = 7 por bucket, gpt_5_2/* = 8 por bucket

# Por ejemplo:
# Para bank, en cada archivo hay 6 instancias totales.
# Esas 6 se reparten entre los 4 grupos model / strategy lo más uniforme posible.
# Como 6 / 4 = 1.5, el reparto factible es una mezcla de 2 y 1.

# Archivo 1 para bank:
# gpt_4o / simple / bank = 2
# gpt_4o / cot / bank = 2
# gpt_5_2 / simple / bank = 1
# gpt_5_2 / cot / bank = 1

# Archivo 2 usa el complemento:
# 1, 1, 2, 2

# Por tanto, por archivo:
# - Siempre habra 7/8 realistics y 7/8 unrealistics por model y strategy
# - Siempre habra 1/2 instancias por cada model strategy y dominio
# - Es posible que algunos dominios tengan mas o menos realistics/unrealistics dependiendo de la disponibilidad de datos


from __future__ import annotations

import argparse
import importlib
import json
import random
from collections import deque
from dataclasses import dataclass
from pathlib import Path
from typing import Any, cast
from urllib.parse import urlencode

DEFAULT_SEED = 5764515283675  # chosen with current system.nanotime()
TARGET_MODELS = ("gpt_4o", "gpt_5_2")
TARGET_MODES = ("simple", "cot")
TARGET_REALISMS = ("realistic", "unrealistic") # There's no "doubtful" realism in the current judge.json
DEFAULT_PER_BUCKET = 15
DEFAULT_BASE_URL = "https://a-coman.github.io/llm-viewer"
DEFAULT_REVIEWERS = ("Lola", "Dominik", "Manuel")
DEFAULT_DOMAIN_BUCKET_CAP = 3
PAGE_COUNT = 3
OUTPUT_FILE_COUNT = 2
WORKSHEET_GUIDE_RICH_LINES = (
    (("Assessing Instances Realism", True),),
    (
        ("0. ", True),
        (
            "Review the judge prompts to understand the criteria used during realism evaluation.",
            False,
        ),
    ),
    (
        (
            "Judge System Prompt: https://a-coman.github.io/llm-viewer/gpt_4o/bank/gen1/?view=system-judge-prompt",
            False,
        ),
    ),
    (
        (
            "Judge User Prompt: https://a-coman.github.io/llm-viewer/gpt_4o/bank/gen1/?view=user-judge-prompt",
            False,
        ),
    ),
    (
        ("1. ", True),
        (
            "Understand the model (diagram/code) and review the instance (diagram/code) from the hyperlink in the first column.",
            False,
        ),
    ),
    (
        ("2. ", True),
        ("In your corresponding reviewer excel, page and column, write ", False),
        ("'R'", True),
        (" (realistic), ", False),
        ("'U'", True),
        (" (unrealistic), or ", False),
        ("'D'", True),
        (" (doubtful).", False),
    ),
    (
        ("3. ", True),
        ("Add a short explanation, for example: ", False),
        ("'R: We are no verifying real IBANs/BICs.'", True),
    ),
    (
        ("Another valid example: ", False),
        (
            "'U: It is implausible to make an omelet without eggs.'",
            True,
        ),
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
        default=DEFAULT_SEED,
        help="Random seed for reproducible sampling",
    )
    parser.add_argument(
        "--per-bucket",
        type=int,
        default=DEFAULT_PER_BUCKET,
        help=(
            "Number of instances to sample for each model/mode/realism bucket. "
            "Default 15 creates 120 rows total (10%), split into two 60-row files (5% each)."
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
    parser.add_argument(
        "--domain-bucket-cap",
        type=int,
        default=DEFAULT_DOMAIN_BUCKET_CAP,
        help=(
            "Hard cap for how many times a single domain can appear in one bucket "
            "(model/mode/realism). Default 3."
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


@dataclass
class _FlowEdge:
    to: int
    rev: int
    cap: int
    cost: int


def _add_flow_edge(
    graph: list[list[_FlowEdge]], fr: int, to: int, cap: int, cost: int
) -> int:
    forward_index = len(graph[fr])
    graph[fr].append(_FlowEdge(to=to, rev=len(graph[to]), cap=cap, cost=cost))
    graph[to].append(_FlowEdge(to=fr, rev=forward_index, cap=0, cost=-cost))
    return forward_index


def compute_min_cost_max_flow(
    graph: list[list[_FlowEdge]], source: int, sink: int, required_flow: int
) -> tuple[int, int]:
    node_count = len(graph)
    flow = 0
    total_cost = 0

    while flow < required_flow:
        inf = 10**18
        dist = [inf] * node_count
        in_queue = [False] * node_count
        prev_node = [-1] * node_count
        prev_edge = [-1] * node_count

        dist[source] = 0
        queue: deque[int] = deque([source])
        in_queue[source] = True

        while queue:
            current = queue.popleft()
            in_queue[current] = False

            for edge_index, edge in enumerate(graph[current]):
                if edge.cap <= 0:
                    continue
                next_node = edge.to
                next_cost = dist[current] + edge.cost
                if next_cost >= dist[next_node]:
                    continue

                dist[next_node] = next_cost
                prev_node[next_node] = current
                prev_edge[next_node] = edge_index

                if not in_queue[next_node]:
                    queue.append(next_node)
                    in_queue[next_node] = True

        if dist[sink] == inf:
            break

        add_flow = required_flow - flow
        node = sink
        while node != source:
            previous = prev_node[node]
            edge_index = prev_edge[node]
            if previous < 0 or edge_index < 0:
                add_flow = 0
                break
            add_flow = min(add_flow, graph[previous][edge_index].cap)
            node = previous

        if add_flow <= 0:
            break

        node = sink
        while node != source:
            previous = prev_node[node]
            edge_index = prev_edge[node]
            edge = graph[previous][edge_index]
            edge.cap -= add_flow
            reverse_edge = graph[node][edge.rev]
            reverse_edge.cap += add_flow
            node = previous

        flow += add_flow
        total_cost += add_flow * dist[sink]

    return flow, total_cost


def compute_max_flow(
    graph: list[list[_FlowEdge]], source: int, sink: int, required_flow: int
) -> int:
    flow, _ = compute_min_cost_max_flow(graph, source, sink, required_flow)
    return flow


def solve_binary_matrix(
    row_targets: dict[str, int],
    column_targets: dict[str, int],
    allowed_edges: dict[str, set[str]],
) -> dict[tuple[str, str], int]:
    node_ids: dict[str, int] = {}

    def get_node_id(name: str) -> int:
        if name not in node_ids:
            node_ids[name] = len(node_ids)
        return node_ids[name]

    source_id = get_node_id("source")
    sink_id = get_node_id("sink")

    row_node_ids = {
        row_key: get_node_id(f"row::{row_key}") for row_key in sorted(row_targets)
    }
    column_node_ids = {
        column_key: get_node_id(f"column::{column_key}")
        for column_key in sorted(column_targets)
    }

    graph: list[list[_FlowEdge]] = [[] for _ in range(len(node_ids))]
    edge_refs: dict[tuple[str, str], tuple[int, int]] = {}

    for row_key, target in row_targets.items():
        _add_flow_edge(graph, source_id, row_node_ids[row_key], target, 0)

    for column_key, target in column_targets.items():
        _add_flow_edge(graph, column_node_ids[column_key], sink_id, target, 0)

    for row_key, columns in allowed_edges.items():
        row_node_id = row_node_ids[row_key]
        for column_key in sorted(columns):
            edge_index = _add_flow_edge(
                graph,
                row_node_id,
                column_node_ids[column_key],
                1,
                0,
            )
            edge_refs[(row_key, column_key)] = (row_node_id, edge_index)

    required_flow = sum(row_targets.values())
    if required_flow != sum(column_targets.values()):
        raise ValueError(
            "Matrix allocation targets are inconsistent: "
            f"rows sum to {required_flow}, columns sum to {sum(column_targets.values())}."
        )

    flow_value = compute_max_flow(graph, source_id, sink_id, required_flow)
    if flow_value != required_flow:
        raise ValueError(
            "Unable to satisfy the requested balanced matrix allocation with current data."
        )

    allocation: dict[tuple[str, str], int] = {}
    for key, (row_node_id, edge_index) in edge_refs.items():
        allocation[key] = 1 if graph[row_node_id][edge_index].cap == 0 else 0
    return allocation


def solve_weighted_sum(
    options_by_key: dict[str, list[tuple[int, int]]], target_sum: int
) -> dict[str, int]:
    ordered_keys = sorted(options_by_key)
    dp: list[dict[int, tuple[int, int | None, int | None]]] = [{0: (0, None, None)}]

    for key in ordered_keys:
        next_layer: dict[int, tuple[int, int | None, int | None]] = {}
        for current_sum, (current_cost, _, _) in dp[-1].items():
            for value, extra_cost in options_by_key[key]:
                next_sum = current_sum + value
                next_cost = current_cost + extra_cost
                previous = next_layer.get(next_sum)
                if previous is None or next_cost < previous[0]:
                    next_layer[next_sum] = (next_cost, current_sum, value)
        dp.append(next_layer)

    if target_sum not in dp[-1]:
        raise ValueError(f"Unable to reach weighted target sum {target_sum}.")

    result: dict[str, int] = {}
    remaining = target_sum
    for index in range(len(ordered_keys), 0, -1):
        _, previous_sum, chosen_value = dp[index][remaining]
        assert previous_sum is not None
        assert chosen_value is not None
        result[ordered_keys[index - 1]] = chosen_value
        remaining = previous_sum

    return result


def get_group_order() -> list[tuple[str, str]]:
    return [
        (model_id, mode)
        for model_id in TARGET_MODELS
        for mode in TARGET_MODES
    ]


def allocate_global_counts_by_group_domain(
    bucket_domain_pool: dict[tuple[str, str, str], dict[str, list[Candidate]]],
    domains: list[str],
    per_bucket: int,
) -> dict[tuple[str, str, str], dict[str, int]]:
    if per_bucket * len(TARGET_REALISMS) != len(domains) * 3:
        raise ValueError(
            "This allocation strategy expects each model/mode group to distribute "
            f"{per_bucket * len(TARGET_REALISMS)} rows across {len(domains)} domains as 3 each."
        )

    allocation: dict[tuple[str, str, str], dict[str, int]] = {
        (model_id, mode, realism): {domain: 0 for domain in domains}
        for model_id, mode in get_group_order()
        for realism in TARGET_REALISMS
    }

    for model_id, mode in get_group_order():
        options_by_domain: dict[str, list[tuple[int, int]]] = {}
        for domain in domains:
            realistic_available = len(
                bucket_domain_pool[(model_id, mode, "realistic")][domain]
            )
            unrealistic_available = len(
                bucket_domain_pool[(model_id, mode, "unrealistic")][domain]
            )
            if realistic_available + unrealistic_available < 3:
                raise ValueError(
                    "Not enough total candidates to allocate 3 instances for "
                    f"{model_id} / {mode} / {domain}: available "
                    f"{realistic_available + unrealistic_available}."
                )

            low = max(0, 3 - unrealistic_available)
            high = min(3, realistic_available)
            if low > high:
                raise ValueError(
                    "No feasible realistic/unrealistic split for "
                    f"{model_id} / {mode} / {domain}."
                )

            domain_options: list[tuple[int, int]] = []
            for realistic_count in range(low, high + 1):
                # Prefer 1/2 or 2/1 splits over 0/3 or 3/0 when availability allows it.
                imbalance_cost = abs((2 * realistic_count) - 3)
                domain_options.append((realistic_count, imbalance_cost))
            options_by_domain[domain] = domain_options

        realistic_counts = solve_weighted_sum(options_by_domain, target_sum=per_bucket)
        for domain, realistic_count in realistic_counts.items():
            allocation[(model_id, mode, "realistic")][domain] = realistic_count
            allocation[(model_id, mode, "unrealistic")][domain] = 3 - realistic_count

    return allocation


def allocate_file1_group_domain_extras(
    domains: list[str], file_bucket_targets: list[dict[tuple[str, str, str], int]]
) -> dict[tuple[str, str], dict[str, int]]:
    file1_group_totals: dict[tuple[str, str], int] = {}
    for model_id, mode in get_group_order():
        file1_group_totals[(model_id, mode)] = sum(
            file_bucket_targets[0][(model_id, mode, realism)]
            for realism in TARGET_REALISMS
        )

    base_per_cell = 1
    row_targets = {
        f"{model_id}::{mode}": total - (len(domains) * base_per_cell)
        for (model_id, mode), total in file1_group_totals.items()
    }
    column_targets = {domain: 2 for domain in domains}
    allowed_edges = {
        f"{model_id}::{mode}": set(domains) for model_id, mode in get_group_order()
    }
    extras = solve_binary_matrix(row_targets, column_targets, allowed_edges)

    allocation: dict[tuple[str, str], dict[str, int]] = {
        (model_id, mode): {domain: 1 for domain in domains}
        for model_id, mode in get_group_order()
    }
    for model_id, mode in get_group_order():
        key = f"{model_id}::{mode}"
        for domain in domains:
            allocation[(model_id, mode)][domain] += extras.get((key, domain), 0)
    return allocation


def allocate_file1_realistic_counts(
    selected_pool: dict[tuple[str, str, str], dict[str, list[Candidate]]],
    domains: list[str],
    file_bucket_targets: list[dict[tuple[str, str, str], int]],
    file1_group_domain_totals: dict[tuple[str, str], dict[str, int]],
) -> dict[tuple[str, str, str], dict[str, int]]:
    allocation: dict[tuple[str, str, str], dict[str, int]] = {
        (model_id, mode, realism): {domain: 0 for domain in domains}
        for model_id, mode in get_group_order()
        for realism in TARGET_REALISMS
    }

    for model_id, mode in get_group_order():
        realistic_target = file_bucket_targets[0][(model_id, mode, "realistic")]
        options_by_domain: dict[str, list[tuple[int, int]]] = {}

        for domain in domains:
            total_for_file1 = file1_group_domain_totals[(model_id, mode)][domain]
            realistic_total = len(selected_pool[(model_id, mode, "realistic")][domain])
            unrealistic_total = len(
                selected_pool[(model_id, mode, "unrealistic")][domain]
            )

            low = max(0, total_for_file1 - unrealistic_total)
            high = min(total_for_file1, realistic_total)
            if low > high:
                raise ValueError(
                    "No feasible per-file realistic split for "
                    f"{model_id} / {mode} / {domain}."
                )

            domain_options: list[tuple[int, int]] = []
            for realistic_count in range(low, high + 1):
                # Prefer preserving the global realism ratio within the file split.
                proportional_cost = abs((3 * realistic_count) - (realistic_total * total_for_file1))
                domain_options.append((realistic_count, proportional_cost))
            options_by_domain[domain] = domain_options

        realistic_counts = solve_weighted_sum(options_by_domain, realistic_target)
        for domain, realistic_count in realistic_counts.items():
            total_for_file1 = file1_group_domain_totals[(model_id, mode)][domain]
            allocation[(model_id, mode, "realistic")][domain] = realistic_count
            allocation[(model_id, mode, "unrealistic")][domain] = (
                total_for_file1 - realistic_count
            )

    return allocation


def sample_candidates(
    candidates: list[Candidate], seed: int, per_bucket: int, domain_bucket_cap: int
) -> tuple[list[Candidate], dict[tuple[str, str, str], int]]:
    if domain_bucket_cap <= 0:
        raise ValueError("Domain bucket cap must be greater than zero.")

    bucket_map: dict[tuple[str, str, str], list[Candidate]] = {}
    for candidate in sort_candidates(candidates):
        bucket_map.setdefault(candidate.bucket, []).append(candidate)

    availability = {bucket: len(items) for bucket, items in bucket_map.items()}
    missing_buckets: list[str] = []

    bucket_order = [
        (model_id, mode, realism)
        for model_id in TARGET_MODELS
        for mode in TARGET_MODES
        for realism in TARGET_REALISMS
    ]

    for model_id, mode, realism in bucket_order:
        bucket = (model_id, mode, realism)
        pool = bucket_map.get(bucket, [])
        if len(pool) < per_bucket:
            missing_buckets.append(
                f"{model_id} / {mode} / {realism}: required {per_bucket}, available {len(pool)}"
            )

    if missing_buckets:
        details = "\n".join(missing_buckets)
        raise ValueError(
            f"Not enough candidates to satisfy requested sample:\n{details}"
        )

    domains = sorted({candidate.domain for candidate in candidates})
    if not domains:
        raise ValueError("No domains found while sampling candidates.")

    total_selected = len(bucket_order) * per_bucket
    if total_selected % len(domains) != 0:
        raise ValueError(
            "Cannot balance domains globally: "
            f"selected total {total_selected} is not divisible by domain count {len(domains)}."
        )
    per_domain_target = total_selected // len(domains)

    domain_availability: dict[str, int] = {domain: 0 for domain in domains}
    bucket_domain_pool: dict[tuple[str, str, str], dict[str, list[Candidate]]] = {}
    for bucket in bucket_order:
        by_domain: dict[str, list[Candidate]] = {domain: [] for domain in domains}
        for candidate in bucket_map.get(bucket, []):
            by_domain[candidate.domain].append(candidate)
            domain_availability[candidate.domain] += 1
        bucket_domain_pool[bucket] = by_domain

    missing_domains = [
        f"{domain}: required {per_domain_target}, available {domain_availability.get(domain, 0)}"
        for domain in domains
        if domain_availability.get(domain, 0) < per_domain_target
    ]
    if missing_domains:
        details = "\n".join(missing_domains)
        raise ValueError(
            f"Not enough candidates to satisfy global domain balancing:\n{details}"
        )

    allocation = allocate_global_counts_by_group_domain(
        bucket_domain_pool=bucket_domain_pool,
        domains=domains,
        per_bucket=per_bucket,
    )

    selected: list[Candidate] = []
    randomizer = random.Random(seed)
    for bucket in bucket_order:
        for domain in domains:
            allocated = allocation[bucket][domain]
            if allocated <= 0:
                continue

            pool = sort_candidates(bucket_domain_pool[bucket][domain])
            if allocated > len(pool):
                model_id, mode, realism = bucket
                raise ValueError(
                    "Internal allocation exceeded pool size for "
                    f"{model_id} / {mode} / {realism} / {domain}: "
                    f"allocated {allocated}, available {len(pool)}."
                )
            if allocated > domain_bucket_cap:
                model_id, mode, realism = bucket
                raise ValueError(
                    "Balanced bucket/domain allocation exceeded the configured cap for "
                    f"{model_id} / {mode} / {realism} / {domain}: "
                    f"allocated {allocated}, cap {domain_bucket_cap}."
                )

            sampled = randomizer.sample(pool, allocated)
            selected.extend(sort_candidates(sampled))

    randomized = sort_candidates(selected)
    randomizer.shuffle(randomized)
    return randomized, availability


def build_file_bucket_targets(
    per_bucket: int, file_count: int
) -> list[dict[tuple[str, str, str], int]]:
    if file_count != OUTPUT_FILE_COUNT:
        raise ValueError(f"Expected {OUTPUT_FILE_COUNT} output files, got {file_count}.")

    base = per_bucket // file_count
    remainder = per_bucket % file_count
    targets: list[dict[tuple[str, str, str], int]] = [{} for _ in range(file_count)]

    for model_index, model_id in enumerate(TARGET_MODELS):
        extra_file_index = model_index % file_count
        for mode in TARGET_MODES:
            for realism in TARGET_REALISMS:
                bucket = (model_id, mode, realism)
                for file_index in range(file_count):
                    extra = 1 if file_index == extra_file_index and remainder > 0 else 0
                    targets[file_index][bucket] = base + extra

    return targets


def build_output_paths(prefix: Path, file_count: int) -> list[Path]:
    base_name = prefix.stem if prefix.suffix else prefix.name
    return [
        prefix.parent / f"{base_name}_{index}.xlsx"
        for index in range(1, file_count + 1)
    ]


def split_candidates_into_files(
    candidates: list[Candidate], seed: int, file_count: int, per_bucket: int
) -> list[list[Candidate]]:
    if file_count <= 0:
        raise ValueError("File count must be greater than zero.")

    if not candidates:
        raise ValueError("No candidates selected for file splitting.")

    total_rows = len(candidates)
    if total_rows % file_count != 0:
        raise ValueError(
            f"Total selected rows {total_rows} is not divisible by file count {file_count}."
        )

    domains = sorted({candidate.domain for candidate in candidates})
    if not domains:
        raise ValueError("No domains found while splitting files.")

    per_file_rows = total_rows // file_count
    if per_file_rows % PAGE_COUNT != 0:
        raise ValueError(
            f"Rows per file {per_file_rows} must be divisible by page count {PAGE_COUNT}."
        )

    if per_file_rows % len(domains) != 0:
        raise ValueError(
            f"Rows per file {per_file_rows} must be divisible by domain count {len(domains)}."
        )

    file_bucket_targets = build_file_bucket_targets(per_bucket, file_count)
    per_file_domain_target = per_file_rows // len(domains)
    candidate_pool: dict[tuple[tuple[str, str, str], str], list[Candidate]] = {
        (bucket, domain): []
        for bucket in [
            (model_id, mode, realism)
            for model_id in TARGET_MODELS
            for mode in TARGET_MODES
            for realism in TARGET_REALISMS
        ]
        for domain in domains
    }
    for candidate in sort_candidates(candidates):
        candidate_pool[(candidate.bucket, candidate.domain)].append(candidate)

    selected_pool: dict[tuple[str, str, str], dict[str, list[Candidate]]] = {
        bucket: {domain: [] for domain in domains}
        for bucket in [
            (model_id, mode, realism)
            for model_id in TARGET_MODELS
            for mode in TARGET_MODES
            for realism in TARGET_REALISMS
        ]
    }
    for (bucket, domain), pool in candidate_pool.items():
        selected_pool[bucket][domain] = pool

    file1_group_domain_totals = allocate_file1_group_domain_extras(
        domains=domains,
        file_bucket_targets=file_bucket_targets,
    )
    file1_bucket_domain_counts = allocate_file1_realistic_counts(
        selected_pool=selected_pool,
        domains=domains,
        file_bucket_targets=file_bucket_targets,
        file1_group_domain_totals=file1_group_domain_totals,
    )

    file_candidates: list[list[Candidate]] = [[] for _ in range(file_count)]
    randomizer = random.Random(seed + 97)

    for key, pool in candidate_pool.items():
        bucket, domain = key
        primary_count = file1_bucket_domain_counts[bucket][domain]
        if primary_count > len(pool):
            raise ValueError(
                "Internal file split exceeded pool size for "
                f"{bucket[0]} / {bucket[1]} / {bucket[2]} / {domain}: "
                f"allocated {primary_count}, available {len(pool)}."
            )

        sampled_pool = list(pool)
        randomizer.shuffle(sampled_pool)
        file_candidates[0].extend(sort_candidates(sampled_pool[:primary_count]))
        file_candidates[1].extend(sort_candidates(sampled_pool[primary_count:]))

    for file_index, expected_targets in enumerate(file_bucket_targets):
        actual_rows = len(file_candidates[file_index])
        if actual_rows != per_file_rows:
            raise ValueError(
                f"File {file_index + 1} expected {per_file_rows} rows, got {actual_rows}."
            )

        actual_bucket_counts = count_by_bucket(file_candidates[file_index])
        for bucket, expected in expected_targets.items():
            actual = actual_bucket_counts.get(bucket, 0)
            if actual != expected:
                raise ValueError(
                    "File split did not preserve bucket target for "
                    f"file {file_index + 1}, {bucket[0]} / {bucket[1]} / {bucket[2]}: "
                    f"expected {expected}, got {actual}."
                )

        actual_domain_counts = count_by_domain(file_candidates[file_index])
        for domain in domains:
            actual = actual_domain_counts.get(domain, 0)
            if actual != per_file_domain_target:
                raise ValueError(
                    f"File {file_index + 1} domain {domain} expected "
                    f"{per_file_domain_target}, got {actual}."
                )

        randomizer.shuffle(file_candidates[file_index])

    return file_candidates


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


def count_by_domain(candidates: list[Candidate]) -> dict[str, int]:
    return count_by_key(candidates, "domain")


def print_bucket_domain_table(candidates: list[Candidate], label: str) -> None:
    domains = sorted({candidate.domain for candidate in candidates})
    if not domains:
        print(f"{label} bucket x domain counts: <no data>")
        return

    bucket_domain_counts: dict[tuple[str, str, str], dict[str, int]] = {}
    for candidate in candidates:
        bucket_domain_counts.setdefault(candidate.bucket, {}).setdefault(
            candidate.domain, 0
        )
        bucket_domain_counts[candidate.bucket][candidate.domain] += 1

    header = "bucket".ljust(33) + " | " + " | ".join(domains)
    print(f"{label} bucket x domain counts:")
    print(header)
    print("-" * len(header))

    for model_id in TARGET_MODELS:
        for mode in TARGET_MODES:
            for realism in TARGET_REALISMS:
                bucket = (model_id, mode, realism)
                row_label = f"{model_id}/{mode}/{realism}".ljust(33)
                domain_values = [
                    str(bucket_domain_counts.get(bucket, {}).get(domain, 0))
                    for domain in domains
                ]
                print(f"{row_label} | " + " | ".join(domain_values))


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
        print(f"  domains: {count_by_domain(candidates)}")
        print_bucket_domain_table(candidates, label=f"File {index}")
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
    print(f"- Domain counts (global): {count_by_domain(selected)}")
    print_bucket_domain_table(selected, label="Global")


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
        domain_bucket_cap=args.domain_bucket_cap,
    )
    split_files = split_candidates_into_files(
        selected,
        seed=args.seed,
        file_count=OUTPUT_FILE_COUNT,
        per_bucket=args.per_bucket,
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
