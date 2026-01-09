/**
 * Parser for difference files (simpleDifference.md, cotDifference.md, combinedDifference.md)
 * Extracts diversity metrics (Numeric, StringEquals, StringLv)
 *
 * Simple Format:
 * ## ModelName
 * | Generations | Numeric | StringEquals | StringLv |
 * |---|---|---|---|
 * | gen1 | 1.0000 | 1.0000 | 0.7762 |
 * ...
 * | ALL Gen | 0.9639 | 0.9997 | 0.8372 |
 *
 * CoT Format:
 * ## ModelName
 * | gen1 | Numeric | StringEquals | StringLv |
 * |---|---|---|---|
 * | invalid | 0.9778 | 1.0000 | 0.8343 |
 * | edge | 0.9869 | 1.0000 | 0.8386 |
 * | ALL Categories | 0.9684 | 0.9998 | 0.8722 |
 *
 * | ALL Generations | Numeric | StringEquals | StringLv |
 * |---|---|---|---|
 * | ALL Generations | 0.9790 | 0.9992 | 0.8814 |
 *
 * Combined Format:
 * ## ModelName
 * | Across Systems | Numeric | StringEquals | StringLv |
 * |---|---|---|---|
 * | ALL Generations | 0.9340 | 0.9986 | 0.8432 |
 */

import type {
  ParsedSimpleDifference,
  ParsedSimpleDifferencePerGen,
  ParsedCotDifference,
  ParsedCotDifferenceSummary,
  ParsedCombinedDifference,
  DiversityMetrics,
  CotDifferenceGenData,
} from "../types.js";
import { parseFloatOrNull, createNullDiversityMetrics } from "../utils.js";

const VALID_COT_CATEGORIES = [
  "baseline",
  "boundary",
  "complex",
  "edge",
  "invalid",
];

// ============================================================================
// Simple Difference Parsers
// ============================================================================

/**
 * Parse simpleDifference.md - extracts "ALL Gen" summary per model
 */
export function parseSimpleDifference(content: string): ParsedSimpleDifference {
  const result: ParsedSimpleDifference = {};
  const lines = content.split("\n");

  let currentModel: string | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      currentModel = line.replace("## ", "").trim();
      continue;
    }

    // Match "| ALL Gen |" or "| ALL Generations |" row
    if (
      currentModel &&
      (line.includes("| ALL Gen |") || line.includes("| ALL Generations |"))
    ) {
      const parts = line.split("|").map((p) => p.trim());
      // Format: | ALL Gen | numeric | stringEquals | stringLv |
      if (parts.length >= 5) {
        result[currentModel] = {
          numeric: parseFloatOrNull(parts[2]),
          stringEquals: parseFloatOrNull(parts[3]),
          stringLv: parseFloatOrNull(parts[4]),
        };
      }
    }
  }

  return result;
}

/**
 * Parse simpleDifference.md - extracts per-generation diversity
 */
export function parseSimpleDifferencePerGen(
  content: string
): ParsedSimpleDifferencePerGen {
  const result: ParsedSimpleDifferencePerGen = {};
  const lines = content.split("\n");

  let currentModel: string | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      currentModel = line.replace("## ", "").trim();
      if (!result[currentModel]) result[currentModel] = {};
      continue;
    }

    // Match generation rows: | gen1 | 1.0000 | 1.0000 | 0.7762 |
    if (currentModel && line.match(/\|\s*gen\d+\s*\|/)) {
      const parts = line.split("|").map((p) => p.trim());
      if (parts.length >= 5) {
        const genId = parts[1]; // e.g., "gen1"
        result[currentModel][genId] = {
          numeric: parseFloatOrNull(parts[2]),
          stringEquals: parseFloatOrNull(parts[3]),
          stringLv: parseFloatOrNull(parts[4]),
        };
      }
    }
  }

  return result;
}

// ============================================================================
// CoT Difference Parsers
// ============================================================================

/**
 * Parse cotDifference.md - extracts per-gen per-category diversity + ALL Categories summary
 */
export function parseCotDifference(content: string): ParsedCotDifference {
  const result: ParsedCotDifference = {};
  const lines = content.split("\n");

  let currentModel: string | null = null;
  let currentGen: string | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Model header
    if (line.startsWith("## ")) {
      currentModel = line.replace("## ", "").trim();
      if (!result[currentModel]) result[currentModel] = {};
      currentGen = null;
      continue;
    }

    // Generation table header: | gen1 | Numeric | StringEquals | StringLv |
    const genHeaderMatch = line.match(/\|\s*(gen\d+)\s*\|\s*Numeric\s*\|/i);
    if (genHeaderMatch) {
      currentGen = genHeaderMatch[1].toLowerCase();
      if (currentModel && !result[currentModel][currentGen]) {
        result[currentModel][currentGen] = {
          categories: {},
          allCategories: null,
        };
      }
      continue;
    }

    // ALL Generations table header - reset currentGen
    if (line.includes("| ALL Generations |") && line.includes("Numeric")) {
      currentGen = null;
      continue;
    }

    // Parse category rows within a generation table
    if (currentModel && currentGen && line.includes("|")) {
      const parts = line.split("|").map((p) => p.trim());
      if (parts.length >= 5) {
        const rowLabel = parts[1].toLowerCase();

        // Check if it's a category row
        if (VALID_COT_CATEGORIES.includes(rowLabel)) {
          result[currentModel][currentGen].categories[rowLabel] = {
            numeric: parseFloatOrNull(parts[2]),
            stringEquals: parseFloatOrNull(parts[3]),
            stringLv: parseFloatOrNull(parts[4]),
          };
        }
        // Check if it's ALL Categories summary
        else if (rowLabel === "all categories") {
          result[currentModel][currentGen].allCategories = {
            numeric: parseFloatOrNull(parts[2]),
            stringEquals: parseFloatOrNull(parts[3]),
            stringLv: parseFloatOrNull(parts[4]),
          };
        }
      }
    }
  }

  return result;
}

/**
 * Parse cotDifference.md - extracts "ALL Generations" summary per model
 */
export function parseCotDifferenceSummary(
  content: string
): ParsedCotDifferenceSummary {
  const result: ParsedCotDifferenceSummary = {};
  const lines = content.split("\n");

  let currentModel: string | null = null;
  let inAllGenerationsTable = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      currentModel = line.replace("## ", "").trim();
      inAllGenerationsTable = false;
      continue;
    }

    // Detect ALL Generations table header
    if (line.includes("| ALL Generations |") && line.includes("Numeric")) {
      inAllGenerationsTable = true;
      continue;
    }

    // Detect other table headers (reset)
    if (line.match(/\|\s*gen\d+\s*\|/) && line.includes("Numeric")) {
      inAllGenerationsTable = false;
      continue;
    }

    // Parse ALL Generations data row
    if (
      currentModel &&
      inAllGenerationsTable &&
      line.includes("| ALL Generations |")
    ) {
      const parts = line.split("|").map((p) => p.trim());
      if (parts.length >= 5) {
        result[currentModel] = {
          numeric: parseFloatOrNull(parts[2]),
          stringEquals: parseFloatOrNull(parts[3]),
          stringLv: parseFloatOrNull(parts[4]),
        };
      }
      inAllGenerationsTable = false;
    }
  }

  return result;
}

// ============================================================================
// Combined Difference Parser
// ============================================================================

/**
 * Parse combinedDifference.md - extracts cross-system diversity per model
 */
export function parseCombinedDifference(
  content: string
): ParsedCombinedDifference {
  const result: ParsedCombinedDifference = {};
  const lines = content.split("\n");

  let currentModel: string | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Model header
    if (line.startsWith("## ")) {
      currentModel = line.replace("## ", "").trim();
      continue;
    }

    // Parse ALL Generations row
    if (currentModel && line.includes("| ALL Generations |")) {
      const parts = line.split("|").map((p) => p.trim());
      if (parts.length >= 5) {
        result[currentModel] = {
          numeric: parseFloatOrNull(parts[2]),
          stringEquals: parseFloatOrNull(parts[3]),
          stringLv: parseFloatOrNull(parts[4]),
        };
      }
    }
  }

  return result;
}
