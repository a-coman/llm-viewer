/**
 * Parser for Shannon entropy files (simpleShannon.md, cotShannon.md)
 * Extracts enum distribution and entropy metrics per attribute
 *
 * Simple Format:
 * ## ModelName
 * ### gen1
 * | Attribute.enumName | Nº |
 * |---|---|
 * | **Value1** | 1.0000 |
 * | **Value2** | 0.0000 |
 *
 * | Entropy | Value |
 * |---|---|
 * | **Entropy** | 1.5850 |
 * | **Max Entropy (active groups)** | 1.5850 |
 * | **Evenness (active groups)** | 1.0000 |
 * | **Max Entropy (all groups)** | 2.0000 |
 * | **Evenness (all groups)** | 0.7925 |
 *
 * CoT Format adds category level:
 * ### gen1
 * #### invalid
 * | Attribute.enumName | Nº |
 * ...
 */

import type {
  ParsedSimpleShannon,
  ParsedCotShannon,
  ShannonEntry,
  EnumDistribution,
  EntropyMetrics,
} from "../types.js";
import {
  parseFloatOrNull,
  removeBoldMarkers,
  createNullEntropyMetrics,
} from "../utils.js";

const VALID_COT_CATEGORIES = [
  "baseline",
  "boundary",
  "complex",
  "edge",
  "invalid",
];

/**
 * Check if a line is an attribute distribution table header
 * Format: | Attribute.enumName | Nº |
 */
function isDistributionHeader(line: string): string | null {
  // Must have exactly 2 columns, second must be "Nº"
  const match = line.match(
    /\|\s*([A-Za-z_][A-Za-z0-9_]*\.[A-Za-z_][A-Za-z0-9_]*)\s*\|\s*Nº\s*\|/
  );
  return match ? match[1] : null;
}

/**
 * Check if a line is the entropy table header
 */
function isEntropyHeader(line: string): boolean {
  return /\|\s*Entropy\s*\|\s*Value\s*\|/i.test(line);
}

/**
 * Parse a distribution row: | **Value** | 1.0000 |
 */
function parseDistributionRow(line: string): EnumDistribution | null {
  const parts = line.split("|").map((p) => p.trim());
  if (parts.length < 3) return null;

  const name = removeBoldMarkers(parts[1]);
  const count = parseFloatOrNull(parts[2]);

  if (!name || count === null) return null;
  return { name, count };
}

/**
 * Parse entropy rows and return metrics
 */
function parseEntropyTable(
  lines: string[],
  startIndex: number
): { metrics: EntropyMetrics; endIndex: number } {
  const metrics = createNullEntropyMetrics();
  let i = startIndex;

  // Skip header and separator
  while (
    i < lines.length &&
    ((lines[i].includes("Entropy") && lines[i].includes("Value")) ||
      lines[i].includes("---"))
  ) {
    i++;
  }

  // Parse entropy rows
  while (i < lines.length && lines[i].includes("|")) {
    const line = lines[i];
    const parts = line.split("|").map((p) => removeBoldMarkers(p.trim()));

    if (parts.length >= 3) {
      const label = parts[1].toLowerCase();
      const value = parseFloatOrNull(parts[2]);

      if (label === "entropy") {
        metrics.entropy = value;
      } else if (label.includes("max entropy") && label.includes("active")) {
        metrics.maxEntropyActive = value;
      } else if (label.includes("evenness") && label.includes("active")) {
        metrics.evennessActive = value;
      } else if (label.includes("max entropy") && label.includes("all")) {
        metrics.maxEntropyAll = value;
      } else if (label.includes("evenness") && label.includes("all")) {
        metrics.evennessAll = value;
      }
    }

    i++;

    // Stop if we hit an empty line or new section
    if (i < lines.length && lines[i].trim() === "") {
      break;
    }
  }

  return { metrics, endIndex: i };
}

// ============================================================================
// Simple Shannon Parser
// ============================================================================

/**
 * Parse simpleShannon.md - extracts shannon entries per model/generation
 */
export function parseSimpleShannon(content: string): ParsedSimpleShannon {
  const result: ParsedSimpleShannon = {};
  const lines = content.split("\n");

  let currentModel: string | null = null;
  let currentGen: string | null = null;
  let currentAttribute: string | null = null;
  let currentDistribution: EnumDistribution[] = [];
  let inDistributionTable = false;
  let inEntropyTable = false;

  const saveCurrentEntry = () => {
    if (
      currentModel &&
      currentGen &&
      currentAttribute &&
      currentDistribution.length > 0
    ) {
      if (!result[currentModel]) result[currentModel] = {};
      if (!result[currentModel][currentGen])
        result[currentModel][currentGen] = [];

      // Find or create the entry
      let entry = result[currentModel][currentGen].find(
        (e) => e.attribute === currentAttribute
      );
      if (!entry) {
        entry = {
          attribute: currentAttribute,
          distribution: [],
          entropy: createNullEntropyMetrics(),
        };
        result[currentModel][currentGen].push(entry);
      }
      entry.distribution = [...currentDistribution];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Model header
    if (line.startsWith("## ") && !line.startsWith("### ")) {
      saveCurrentEntry();
      currentModel = line.replace("## ", "").trim();
      currentGen = null;
      currentAttribute = null;
      currentDistribution = [];
      inDistributionTable = false;
      inEntropyTable = false;
      continue;
    }

    // Generation header
    if (line.startsWith("### gen")) {
      saveCurrentEntry();
      currentGen = line.replace("### ", "").trim();
      if (currentModel && !result[currentModel]) result[currentModel] = {};
      if (currentModel && !result[currentModel][currentGen])
        result[currentModel][currentGen] = [];
      currentAttribute = null;
      currentDistribution = [];
      inDistributionTable = false;
      inEntropyTable = false;
      continue;
    }

    // Check for distribution table header
    const attrName = isDistributionHeader(trimmed);
    if (attrName) {
      saveCurrentEntry();
      currentAttribute = attrName;
      currentDistribution = [];
      inDistributionTable = true;
      inEntropyTable = false;
      continue;
    }

    // Check for entropy table header
    if (isEntropyHeader(trimmed)) {
      inDistributionTable = false;
      inEntropyTable = true;
      continue;
    }

    // Skip separator lines
    if (trimmed.match(/^\|[-:\s|]+\|$/)) {
      continue;
    }

    // Parse distribution rows
    if (inDistributionTable && currentAttribute && trimmed.includes("|")) {
      const dist = parseDistributionRow(trimmed);
      if (dist) {
        currentDistribution.push(dist);
      }
      continue;
    }

    // Parse entropy rows
    if (
      inEntropyTable &&
      currentModel &&
      currentGen &&
      currentAttribute &&
      trimmed.includes("|")
    ) {
      const parts = trimmed.split("|").map((p) => removeBoldMarkers(p.trim()));

      if (parts.length >= 3) {
        const label = parts[1].toLowerCase();
        const value = parseFloatOrNull(parts[2]);

        // Ensure entry exists
        if (!result[currentModel]) result[currentModel] = {};
        if (!result[currentModel][currentGen])
          result[currentModel][currentGen] = [];

        let entry = result[currentModel][currentGen].find(
          (e) => e.attribute === currentAttribute
        );
        if (!entry) {
          entry = {
            attribute: currentAttribute!,
            distribution: [...currentDistribution],
            entropy: createNullEntropyMetrics(),
          };
          result[currentModel][currentGen].push(entry);
        }

        if (label === "entropy") {
          entry.entropy.entropy = value;
        } else if (label.includes("max entropy") && label.includes("active")) {
          entry.entropy.maxEntropyActive = value;
        } else if (label.includes("evenness") && label.includes("active")) {
          entry.entropy.evennessActive = value;
        } else if (label.includes("max entropy") && label.includes("all")) {
          entry.entropy.maxEntropyAll = value;
        } else if (label.includes("evenness") && label.includes("all")) {
          entry.entropy.evennessAll = value;
        }
      }
      continue;
    }

    // Empty line resets table state
    if (trimmed === "") {
      if (inDistributionTable && currentAttribute) {
        saveCurrentEntry();
      }
      inDistributionTable = false;
      inEntropyTable = false;
    }
  }

  // Save any remaining entry
  saveCurrentEntry();

  return result;
}

// ============================================================================
// CoT Shannon Parser
// ============================================================================

/**
 * Parse cotShannon.md - extracts shannon entries per model/generation/category
 */
export function parseCotShannon(content: string): ParsedCotShannon {
  const result: ParsedCotShannon = {};
  const lines = content.split("\n");

  let currentModel: string | null = null;
  let currentGen: string | null = null;
  let currentCategory: string | null = null;
  let currentAttribute: string | null = null;
  let currentDistribution: EnumDistribution[] = [];
  let inDistributionTable = false;
  let inEntropyTable = false;

  const saveCurrentEntry = () => {
    if (
      currentModel &&
      currentGen &&
      currentCategory &&
      currentAttribute &&
      currentDistribution.length > 0
    ) {
      if (!result[currentModel]) result[currentModel] = {};
      if (!result[currentModel][currentGen])
        result[currentModel][currentGen] = {};
      if (!result[currentModel][currentGen][currentCategory])
        result[currentModel][currentGen][currentCategory] = [];

      let entry = result[currentModel][currentGen][currentCategory].find(
        (e) => e.attribute === currentAttribute
      );
      if (!entry) {
        entry = {
          attribute: currentAttribute,
          distribution: [],
          entropy: createNullEntropyMetrics(),
        };
        result[currentModel][currentGen][currentCategory].push(entry);
      }
      entry.distribution = [...currentDistribution];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Model header
    if (line.startsWith("## ") && !line.startsWith("### ")) {
      saveCurrentEntry();
      currentModel = line.replace("## ", "").trim();
      currentGen = null;
      currentCategory = null;
      currentAttribute = null;
      currentDistribution = [];
      inDistributionTable = false;
      inEntropyTable = false;
      continue;
    }

    // Generation header
    if (line.startsWith("### gen")) {
      saveCurrentEntry();
      currentGen = line.replace("### ", "").trim();
      currentCategory = null;
      currentAttribute = null;
      currentDistribution = [];
      inDistributionTable = false;
      inEntropyTable = false;
      continue;
    }

    // Category header
    if (line.startsWith("#### ") && !line.includes("ALL")) {
      saveCurrentEntry();
      const cat = line.replace("#### ", "").trim().toLowerCase();
      if (VALID_COT_CATEGORIES.includes(cat)) {
        currentCategory = cat;
        if (currentModel && currentGen) {
          if (!result[currentModel]) result[currentModel] = {};
          if (!result[currentModel][currentGen])
            result[currentModel][currentGen] = {};
          if (!result[currentModel][currentGen][currentCategory])
            result[currentModel][currentGen][currentCategory] = [];
        }
      }
      currentAttribute = null;
      currentDistribution = [];
      inDistributionTable = false;
      inEntropyTable = false;
      continue;
    }

    // Check for distribution table header
    const attrName = isDistributionHeader(trimmed);
    if (attrName) {
      saveCurrentEntry();
      currentAttribute = attrName;
      currentDistribution = [];
      inDistributionTable = true;
      inEntropyTable = false;
      continue;
    }

    // Check for entropy table header
    if (isEntropyHeader(trimmed)) {
      inDistributionTable = false;
      inEntropyTable = true;
      continue;
    }

    // Skip separator lines
    if (trimmed.match(/^\|[-:\s|]+\|$/)) {
      continue;
    }

    // Parse distribution rows
    if (inDistributionTable && currentAttribute && trimmed.includes("|")) {
      const dist = parseDistributionRow(trimmed);
      if (dist) {
        currentDistribution.push(dist);
      }
      continue;
    }

    // Parse entropy rows
    if (
      inEntropyTable &&
      currentModel &&
      currentGen &&
      currentCategory &&
      currentAttribute &&
      trimmed.includes("|")
    ) {
      const parts = trimmed.split("|").map((p) => removeBoldMarkers(p.trim()));

      if (parts.length >= 3) {
        const label = parts[1].toLowerCase();
        const value = parseFloatOrNull(parts[2]);

        if (!result[currentModel]) result[currentModel] = {};
        if (!result[currentModel][currentGen])
          result[currentModel][currentGen] = {};
        if (!result[currentModel][currentGen][currentCategory])
          result[currentModel][currentGen][currentCategory] = [];

        let entry = result[currentModel][currentGen][currentCategory].find(
          (e) => e.attribute === currentAttribute
        );
        if (!entry) {
          entry = {
            attribute: currentAttribute!,
            distribution: [...currentDistribution],
            entropy: createNullEntropyMetrics(),
          };
          result[currentModel][currentGen][currentCategory].push(entry);
        }

        if (label === "entropy") {
          entry.entropy.entropy = value;
        } else if (label.includes("max entropy") && label.includes("active")) {
          entry.entropy.maxEntropyActive = value;
        } else if (label.includes("evenness") && label.includes("active")) {
          entry.entropy.evennessActive = value;
        } else if (label.includes("max entropy") && label.includes("all")) {
          entry.entropy.maxEntropyAll = value;
        } else if (label.includes("evenness") && label.includes("all")) {
          entry.entropy.evennessAll = value;
        }
      }
      continue;
    }

    // Empty line resets table state
    if (trimmed === "") {
      if (inDistributionTable && currentAttribute) {
        saveCurrentEntry();
      }
      inDistributionTable = false;
      inEntropyTable = false;
    }
  }

  // Save any remaining entry
  saveCurrentEntry();

  return result;
}
