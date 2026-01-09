/**
 * Parser for price.md files
 * Extracts price and token information per model for Simple and CoT modes
 *
 * Format:
 * # Simple
 * ## ModelName
 * precio: 5.12$
 * token-input: 12000
 * token-output: 4800
 * ## All Systems
 * ...
 * # CoT
 * ## ModelName
 * ...
 */

import type { ParsedPrices, PriceInfo } from "../types.js";
import {
  parseFloatOrNull,
  parseIntOrNull,
  createNullPriceInfo,
} from "../utils.js";

/**
 * Parse price.md content
 * @param content - Raw markdown content
 * @returns Parsed prices keyed by model name
 */
export function parsePrice(content: string): ParsedPrices {
  const result: ParsedPrices = {};
  const lines = content.split("\n");

  let currentType: "simple" | "cot" | null = null;
  let currentModel: string | null = null;

  for (const line of lines) {
    const trimmed = line.trim();

    // Mode headers
    if (trimmed === "# Simple" || trimmed.startsWith("# Simple")) {
      currentType = "simple";
      currentModel = null;
      continue;
    }
    if (trimmed === "# CoT" || trimmed.startsWith("# CoT")) {
      currentType = "cot";
      currentModel = null;
      continue;
    }

    // Model headers
    if (trimmed.startsWith("## ") && currentType) {
      const modelName = trimmed.replace("## ", "").trim();

      // Skip special entries
      if (
        modelName === "All Systems" ||
        modelName === "..." ||
        modelName.includes("...")
      ) {
        currentModel = null;
        continue;
      }

      currentModel = modelName;
      if (!result[currentModel]) {
        result[currentModel] = { simple: null, cot: null };
      }
      continue;
    }

    // Parse price/token lines for current model
    if (currentModel && currentType) {
      if (!result[currentModel][currentType]) {
        result[currentModel][currentType] = createNullPriceInfo();
      }

      const priceInfo = result[currentModel][currentType] as PriceInfo;

      if (trimmed.startsWith("precio:")) {
        const value = trimmed.replace("precio:", "").replace("$", "").trim();
        priceInfo.price = parseFloatOrNull(value);
      } else if (trimmed.startsWith("token-input:")) {
        const value = trimmed.replace("token-input:", "").trim();
        priceInfo.tokenInput = parseIntOrNull(value);
      } else if (trimmed.startsWith("token-output:")) {
        const value = trimmed.replace("token-output:", "").trim();
        priceInfo.tokenOutput = parseIntOrNull(value);
      }
    }
  }

  return result;
}

/**
 * Extract total prices from "All Systems" section
 * @param content - Raw markdown content
 * @returns Total price info for Simple and CoT
 */
export function parseTotalPrices(content: string): {
  simple: PriceInfo;
  cot: PriceInfo;
} {
  const result = {
    simple: createNullPriceInfo(),
    cot: createNullPriceInfo(),
  };

  const lines = content.split("\n");
  let currentType: "simple" | "cot" | null = null;
  let inAllSystems = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === "# Simple" || trimmed.startsWith("# Simple")) {
      currentType = "simple";
      inAllSystems = false;
      continue;
    }
    if (trimmed === "# CoT" || trimmed.startsWith("# CoT")) {
      currentType = "cot";
      inAllSystems = false;
      continue;
    }

    if (trimmed === "## All Systems") {
      inAllSystems = true;
      continue;
    }
    if (trimmed.startsWith("## ") && trimmed !== "## All Systems") {
      inAllSystems = false;
      continue;
    }

    if (inAllSystems && currentType) {
      const target = result[currentType];

      if (trimmed.startsWith("precio:")) {
        const value = trimmed.replace("precio:", "").replace("$", "").trim();
        target.price = parseFloatOrNull(value);
      } else if (trimmed.startsWith("token-input:")) {
        const value = trimmed.replace("token-input:", "").trim();
        target.tokenInput = parseIntOrNull(value);
      } else if (trimmed.startsWith("token-output:")) {
        const value = trimmed.replace("token-output:", "").trim();
        target.tokenOutput = parseIntOrNull(value);
      }
    }
  }

  return result;
}
