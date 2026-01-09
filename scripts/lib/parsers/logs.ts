/**
 * Parser for logs.md files (per-model)
 * Extracts token counts (input/output) for each generation
 *
 * Simple Format:
 * # Input ISimple : gen1
 * ... (prompt content) ...
 * |Response|
 * |---|
 * Finish Reason: STOP
 * Input Tokens: 670
 * Output Tokens: 592
 *
 * CoT Format:
 * # Input ICoT_<category> : gen1
 * ... (prompt content) ...
 * |Response|
 * |---|
 * Finish Reason: STOP
 * Input Tokens: 670
 * Output Tokens: 592
 */

import type { TokenCounts, ParsedSimpleLogs, ParsedCotLogs } from "../types.js";
import { parseIntOrNull, createNullTokenCounts } from "../utils.js";

const VALID_COT_CATEGORIES = [
  "baseline",
  "boundary",
  "complex",
  "edge",
  "invalid",
];

/**
 * Parse Simple logs.md - extracts token counts per generation
 */
export function parseSimpleLogs(content: string): ParsedSimpleLogs {
  const result: ParsedSimpleLogs = {};
  const lines = content.split("\n");

  let currentGen: string | null = null;
  let inResponseSection = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Generation header: # Input ISimple : gen1
    if (trimmed.match(/^# Input\s+ISimple\s*:\s*gen(\d+)/i)) {
      const match = trimmed.match(/gen(\d+)/i);
      if (match) {
        currentGen = `gen${match[1]}`;
        if (!result[currentGen]) {
          result[currentGen] = createNullTokenCounts();
        }
        inResponseSection = false;
      }
      continue;
    }

    // Also handle # Output ISimple : genX (reset for next section)
    if (trimmed.match(/^# Output\s+ISimple\s*:\s*gen(\d+)/i)) {
      // Same generation, continue accumulating
      continue;
    }

    // Response section marker
    if (trimmed === "|Response|") {
      inResponseSection = true;
      continue;
    }

    // Next input section resets state
    if (trimmed.startsWith("# Input")) {
      inResponseSection = false;
    }

    // Parse token counts in response section
    if (inResponseSection && currentGen) {
      if (trimmed.startsWith("Input Tokens:")) {
        const value = trimmed.replace("Input Tokens:", "").trim();
        result[currentGen].input = parseIntOrNull(value);
        continue;
      }
      if (trimmed.startsWith("Output Tokens:")) {
        const value = trimmed.replace("Output Tokens:", "").trim();
        result[currentGen].output = parseIntOrNull(value);
        // After getting output tokens, we're done with this gen's response
        inResponseSection = false;
        continue;
      }
    }
  }

  return result;
}

/**
 * Parse CoT logs.md - extracts token counts per generation per category
 */
export function parseCotLogs(content: string): ParsedCotLogs {
  const result: ParsedCotLogs = {};
  const lines = content.split("\n");

  let currentGen: string | null = null;
  let currentCategory: string | null = null;
  let inResponseSection = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // CoT generation header: # Input ICoT_baseline : gen1
    const inputMatch = trimmed.match(/^# Input\s+ICoT_(\w+)\s*:\s*gen(\d+)/i);
    if (inputMatch) {
      const category = inputMatch[1].toLowerCase();
      const genNum = inputMatch[2];

      if (VALID_COT_CATEGORIES.includes(category)) {
        currentGen = `gen${genNum}`;
        currentCategory = category;

        if (!result[currentGen]) {
          result[currentGen] = {};
        }
        if (!result[currentGen][currentCategory]) {
          result[currentGen][currentCategory] = createNullTokenCounts();
        }
        inResponseSection = false;
      }
      continue;
    }

    // Response section marker
    if (trimmed === "|Response|") {
      inResponseSection = true;
      continue;
    }

    // Next input section resets state
    if (trimmed.startsWith("# Input")) {
      inResponseSection = false;
    }

    // Parse token counts in response section
    if (inResponseSection && currentGen && currentCategory) {
      if (trimmed.startsWith("Input Tokens:")) {
        const value = trimmed.replace("Input Tokens:", "").trim();
        result[currentGen][currentCategory].input = parseIntOrNull(value);
        continue;
      }
      if (trimmed.startsWith("Output Tokens:")) {
        const value = trimmed.replace("Output Tokens:", "").trim();
        result[currentGen][currentCategory].output = parseIntOrNull(value);
        // After getting output tokens, we're done with this category's response
        inResponseSection = false;
        continue;
      }
    }
  }

  return result;
}

/**
 * Get total tokens across all generations (Simple)
 */
export function getTotalTokensSimple(logs: ParsedSimpleLogs): TokenCounts {
  let totalInput = 0;
  let totalOutput = 0;
  let hasAnyInput = false;
  let hasAnyOutput = false;

  for (const gen of Object.values(logs)) {
    if (gen.input !== null) {
      totalInput += gen.input;
      hasAnyInput = true;
    }
    if (gen.output !== null) {
      totalOutput += gen.output;
      hasAnyOutput = true;
    }
  }

  return {
    input: hasAnyInput ? totalInput : null,
    output: hasAnyOutput ? totalOutput : null,
  };
}

/**
 * Get total tokens across all generations and categories (CoT)
 */
export function getTotalTokensCot(logs: ParsedCotLogs): TokenCounts {
  let totalInput = 0;
  let totalOutput = 0;
  let hasAnyInput = false;
  let hasAnyOutput = false;

  for (const gen of Object.values(logs)) {
    for (const cat of Object.values(gen)) {
      if (cat.input !== null) {
        totalInput += cat.input;
        hasAnyInput = true;
      }
      if (cat.output !== null) {
        totalOutput += cat.output;
        hasAnyOutput = true;
      }
    }
  }

  return {
    input: hasAnyInput ? totalInput : null,
    output: hasAnyOutput ? totalOutput : null,
  };
}

/**
 * Get tokens per generation (CoT - sum all categories for each gen)
 */
export function getTokensPerGenCot(
  logs: ParsedCotLogs
): Record<string, TokenCounts> {
  const result: Record<string, TokenCounts> = {};

  for (const [genId, categories] of Object.entries(logs)) {
    let totalInput = 0;
    let totalOutput = 0;
    let hasAnyInput = false;
    let hasAnyOutput = false;

    for (const cat of Object.values(categories)) {
      if (cat.input !== null) {
        totalInput += cat.input;
        hasAnyInput = true;
      }
      if (cat.output !== null) {
        totalOutput += cat.output;
        hasAnyOutput = true;
      }
    }

    result[genId] = {
      input: hasAnyInput ? totalInput : null,
      output: hasAnyOutput ? totalOutput : null,
    };
  }

  return result;
}
