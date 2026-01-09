/**
 * Parser for judge files (per-model or global)
 * Extracts judge verdict counts and per-generation responses
 *
 * Per-model judge-results.md Format:
 * | Metric | Value |
 * |--------|-------|
 * | Realistic        | **20** |
 * | Unrealistic      | 10     |
 * | Unknown          | 0      |
 * | Success Rate     | 66.67% |
 *
 * Global judge-results.md Format:
 * | Model | Realistic | Unrealistic | Unknown | Success Rate |
 * |-------|-----------|-------------|---------|--------------|
 * | **Bank** | 20 | 10 | 0 | 66.67 |
 *
 * judge-responses.md Format:
 * # model
 * ## gen1
 * **Response**: Realistic
 * **Why**: The instance correctly represents...
 */

import type {
  JudgeResult,
  JudgeResponse,
  ParsedJudgeResults,
  ParsedJudgeResponses,
} from "../types.js";
import {
  parseIntOrNull,
  parseFloatOrNull,
  createNullJudgeResult,
  removeBoldMarkers,
} from "../utils.js";

/**
 * Parse judge-results.md - extracts verdict counts and success rate
 */
export function parseJudgeResults(content: string): ParsedJudgeResults {
  const result = createNullJudgeResult();
  const lines = content.split("\n");

  for (const line of lines) {
    const trimmed = line.trim();

    // Parse "| Realistic | **20** |" or "| Realistic | 20 |"
    if (trimmed.includes("Realistic") && !trimmed.includes("Unrealistic")) {
      // Extract number, removing bold markers
      const match = trimmed.match(
        /\|\s*Realistic\s*\|\s*\*?\*?(\d+)\*?\*?\s*\|/i
      );
      if (match) {
        result.realistic = parseIntOrNull(match[1]);
      } else {
        // Fallback: find any number in the line
        const numMatch = trimmed.match(/\*?\*?(\d+)\*?\*?/);
        if (numMatch) {
          result.realistic = parseIntOrNull(numMatch[1]);
        }
      }
      continue;
    }

    // Parse "| Unrealistic | 10 |"
    if (trimmed.includes("Unrealistic")) {
      const match = trimmed.match(
        /\|\s*Unrealistic\s*\|\s*\*?\*?(\d+)\*?\*?\s*\|/i
      );
      if (match) {
        result.unrealistic = parseIntOrNull(match[1]);
      } else {
        const numMatch = trimmed.match(/(\d+)/);
        if (numMatch) {
          result.unrealistic = parseIntOrNull(numMatch[1]);
        }
      }
      continue;
    }

    // Parse "| Unknown | 0 |"
    if (trimmed.includes("Unknown")) {
      const match = trimmed.match(
        /\|\s*Unknown\s*\|\s*\*?\*?(\d+)\*?\*?\s*\|/i
      );
      if (match) {
        result.unknown = parseIntOrNull(match[1]);
      } else {
        const numMatch = trimmed.match(/(\d+)/);
        if (numMatch) {
          result.unknown = parseIntOrNull(numMatch[1]);
        }
      }
      continue;
    }

    // Parse "| Success Rate | 66.67% |"
    if (trimmed.includes("Success Rate")) {
      const match = trimmed.match(
        /\|\s*Success Rate\s*\|\s*\*?\*?([\d.]+)%?\*?\*?\s*\|/i
      );
      if (match) {
        const rate = parseFloatOrNull(match[1]);
        result.successRate = rate !== null ? rate / 100 : null;
      } else {
        const numMatch = trimmed.match(/([\d.]+)%?/);
        if (numMatch) {
          const rate = parseFloatOrNull(numMatch[1]);
          result.successRate = rate !== null ? rate / 100 : null;
        }
      }
      continue;
    }
  }

  return result;
}

/**
 * Parse judge-responses.md - extracts response and why for each generation
 *
 * Format: Sequential "# output.soil" entries (gen1, gen2, ..., gen30)
 * OR: "# gen1", "# gen2", etc.
 */
export function parseJudgeResponses(content: string): ParsedJudgeResponses {
  const result: ParsedJudgeResponses = {};
  const lines = content.split("\n");

  let currentGenNum = 0;
  let currentResponse: "Realistic" | "Unrealistic" | "Unknown" | null = null;
  let currentWhy = "";
  let inWhy = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // New entry: # output.soil or # genX
    if (trimmed.startsWith("# output.soil") || trimmed.match(/^# gen\d+/i)) {
      // Save previous entry
      if (currentGenNum > 0) {
        result[`gen${currentGenNum}`] = {
          response: currentResponse,
          why: currentWhy.trim() || null,
        };
      }
      currentGenNum++;
      currentResponse = null;
      currentWhy = "";
      inWhy = false;
      continue;
    }

    // Response line: **Response**: Realistic
    if (trimmed.includes("**Response**")) {
      const match = trimmed.match(/\*\*Response\*\*:?\s*(\w+)/i);
      if (match) {
        const resp = match[1].trim();
        if (resp.toLowerCase() === "realistic") {
          currentResponse = "Realistic";
        } else if (resp.toLowerCase() === "unrealistic") {
          currentResponse = "Unrealistic";
        } else {
          currentResponse = "Unknown";
        }
      }
      inWhy = false;
      continue;
    }

    // Why line: **Why**: The instance...
    if (trimmed.includes("**Why**")) {
      const match = trimmed.match(/\*\*Why\*\*:?\s*(.*)/i);
      if (match) {
        currentWhy = match[1].trim();
        inWhy = true;
      }
      continue;
    }

    // Continue why on next lines (but not if it's a new section or response)
    if (
      inWhy &&
      trimmed &&
      !trimmed.startsWith("#") &&
      !trimmed.includes("**Response**")
    ) {
      currentWhy += " " + trimmed;
    }
  }

  // Save last entry
  if (currentGenNum > 0) {
    result[`gen${currentGenNum}`] = {
      response: currentResponse,
      why: currentWhy.trim() || null,
    };
  }

  return result;
}

/**
 * Calculate judge result from responses (if results file is missing)
 */
export function calculateJudgeResultFromResponses(
  responses: ParsedJudgeResponses
): JudgeResult {
  let realistic = 0;
  let unrealistic = 0;
  let unknown = 0;

  for (const resp of Object.values(responses)) {
    if (resp.response === "Realistic") realistic++;
    else if (resp.response === "Unrealistic") unrealistic++;
    else unknown++;
  }

  const total = realistic + unrealistic + unknown;
  const successRate = total > 0 ? realistic / total : null;

  return { realistic, unrealistic, unknown, successRate };
}

// ============================================================================
// Global Judge File Parsers (all models in one file)
// ============================================================================

/**
 * Parse global judge-results.md - extracts verdict counts per model
 *
 * Format:
 * | Model | Realistic | Unrealistic | Unknown | Success Rate |
 * |-------|-----------|-------------|---------|--------------|
 * | **Bank** | 20 | 10 | 0 | 66.67 |
 * | **Total** | ... |
 */
export function parseGlobalJudgeResults(
  content: string
): Record<string, JudgeResult> {
  const result: Record<string, JudgeResult> = {};
  const lines = content.split("\n");

  for (const line of lines) {
    const trimmed = line.trim();

    // Skip headers and separators
    if (
      !trimmed.startsWith("|") ||
      trimmed.includes("---") ||
      trimmed.includes("Realistic")
    ) {
      continue;
    }

    const cells = trimmed
      .split("|")
      .map((c) => c.trim())
      .filter((c) => c !== "");
    if (cells.length < 5) continue;

    // First cell is model name (may be bold)
    const modelName = removeBoldMarkers(cells[0]);
    if (modelName.toLowerCase() === "total") continue;

    // Parse values
    const realistic = parseFloatOrNull(cells[1]);
    const unrealistic = parseFloatOrNull(cells[2]);
    const unknown = parseFloatOrNull(cells[3]);
    const successRate = parseFloatOrNull(cells[4]);

    // Capitalize first letter for model name
    const normalizedName =
      modelName.charAt(0).toUpperCase() + modelName.slice(1).toLowerCase();

    result[normalizedName] = {
      realistic: realistic !== null ? Math.round(realistic) : null,
      unrealistic: unrealistic !== null ? Math.round(unrealistic) : null,
      unknown: unknown !== null ? Math.round(unknown) : null,
      successRate: successRate !== null ? successRate / 100 : null,
    };
  }

  return result;
}

/**
 * Parse global judge-responses.md - extracts responses per model per generation
 *
 * Format:
 * # model
 * ## gen1
 * **Response**: Realistic
 * **Why**: ...
 */
export function parseGlobalJudgeResponses(
  content: string
): Record<string, ParsedJudgeResponses> {
  const result: Record<string, ParsedJudgeResponses> = {};
  const lines = content.split("\n");

  let currentModel: string | null = null;
  let currentGen: string | null = null;
  let currentResponse: "Realistic" | "Unrealistic" | "Unknown" | null = null;
  let currentWhy = "";
  let inWhy = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Model header: # model (but not ## gen)
    if (
      line.match(/^# [^#]/) &&
      !line.includes("GPT") &&
      !line.includes("Simple") &&
      !line.includes("CoT")
    ) {
      // Save previous gen if exists
      if (currentModel && currentGen) {
        if (!result[currentModel]) result[currentModel] = {};
        result[currentModel][currentGen] = {
          response: currentResponse,
          why: currentWhy.trim() || null,
        };
      }

      currentModel = removeBoldMarkers(line.replace(/^#\s*/, "").trim());
      // Capitalize model name
      currentModel =
        currentModel.charAt(0).toUpperCase() +
        currentModel.slice(1).toLowerCase();
      currentGen = null;
      currentResponse = null;
      currentWhy = "";
      inWhy = false;
      continue;
    }

    // Generation header: ## gen1
    if (line.match(/^## gen\d+/i)) {
      // Save previous gen if exists
      if (currentModel && currentGen) {
        if (!result[currentModel]) result[currentModel] = {};
        result[currentModel][currentGen] = {
          response: currentResponse,
          why: currentWhy.trim() || null,
        };
      }

      const match = line.match(/gen(\d+)/i);
      if (match) {
        currentGen = `gen${match[1]}`;
        currentResponse = null;
        currentWhy = "";
        inWhy = false;
      }
      continue;
    }

    if (!currentModel || !currentGen) continue;

    // Response line
    if (trimmed.includes("**Response**")) {
      const match = trimmed.match(/\*\*Response\*\*:?\s*(\w+)/i);
      if (match) {
        const resp = match[1].trim();
        if (resp.toLowerCase() === "realistic") {
          currentResponse = "Realistic";
        } else if (resp.toLowerCase() === "unrealistic") {
          currentResponse = "Unrealistic";
        } else {
          currentResponse = "Unknown";
        }
      }
      inWhy = false;
      continue;
    }

    // Why line
    if (trimmed.includes("**Why**")) {
      const match = trimmed.match(/\*\*Why\*\*:?\s*(.*)/i);
      if (match) {
        currentWhy = match[1].trim();
        inWhy = true;
      }
      continue;
    }

    // Continue why on next lines
    if (
      inWhy &&
      trimmed &&
      !trimmed.startsWith("#") &&
      !trimmed.includes("**Response**")
    ) {
      currentWhy += " " + trimmed;
    }
  }

  // Save last entry
  if (currentModel && currentGen) {
    if (!result[currentModel]) result[currentModel] = {};
    result[currentModel][currentGen] = {
      response: currentResponse,
      why: currentWhy.trim() || null,
    };
  }

  return result;
}
