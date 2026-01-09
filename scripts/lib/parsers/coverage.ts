/**
 * Parser for coverage files (simpleCoverage.md, cotCoverage.md)
 * Extracts coverage and instantiation metrics per model/generation/category
 *
 * Simple Format:
 * ## ModelName
 * ### gen1
 * | Model Coverage | instantiated | defined | coverage |
 * |---|---|---|---|
 * | **classes** | 4.0000 | 4.0000 | 1.0000 |
 * ...
 * | Instantiation Stats | total instantiated | total possible | ratio |
 * |---|---|---|---|
 * | **classes** | 14.0000 | Infinity | 0.0000 |
 *
 * CoT Format:
 * ## ModelName
 * ### gen1
 * #### baseline
 * | Model Coverage | ...
 * | Instantiation Stats | ...
 * Uncovered: [Class: X, Attribute: Y.z, ...]
 * Hallucinations: [Relationship: A]
 * #### ALL Categories
 * ...
 */

import type {
  ParsedSimpleCoverage,
  ParsedSimpleInstantiation,
  ParsedCotCoverage,
  CoverageMetrics,
  UncoveredData,
  CotCoverageCategoryData,
  COT_CATEGORIES,
} from "../types.js";
import {
  parseFloatOrNull,
  parseIntOrNull,
  removeBoldMarkers,
  createNullCoverageMetrics,
  createEmptyUncoveredData,
} from "../utils.js";

const VALID_COT_CATEGORIES = [
  "baseline",
  "boundary",
  "complex",
  "edge",
  "invalid",
];

// ============================================================================
// Simple Coverage Parser
// ============================================================================

/**
 * Parse simpleCoverage.md - extracts Model Coverage table (first table per gen)
 */
export function parseSimpleCoverage(content: string): ParsedSimpleCoverage {
  const result: ParsedSimpleCoverage = {};
  const lines = content.split("\n");

  let currentModel: string | null = null;
  let currentGen: string | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Model header: ## ModelName (but not ### genX)
    if (line.startsWith("## ") && !line.startsWith("### ")) {
      currentModel = line.replace("## ", "").trim();
      if (!result[currentModel]) result[currentModel] = {};
      currentGen = null;
      continue;
    }

    // Generation header: ### gen1
    if (line.startsWith("### gen")) {
      currentGen = line.replace("### ", "").trim();
      if (currentModel && !result[currentModel][currentGen]) {
        result[currentModel][currentGen] = createNullCoverageMetrics();
      }
      continue;
    }

    // Parse coverage rows (only first occurrence - Model Coverage table)
    if (currentModel && currentGen && line.includes("|")) {
      const metrics = result[currentModel][currentGen];

      if (line.includes("**classes**") && metrics.classes === null) {
        const parts = line.split("|").map((p) => removeBoldMarkers(p.trim()));
        // Format: | **classes** | instantiated | defined | coverage |
        if (parts.length >= 5) {
          metrics.classes = parseFloatOrNull(parts[4]);
        }
      } else if (
        line.includes("**attributes**") &&
        metrics.attributes === null
      ) {
        const parts = line.split("|").map((p) => removeBoldMarkers(p.trim()));
        if (parts.length >= 5) {
          metrics.attributes = parseFloatOrNull(parts[4]);
        }
      } else if (
        line.includes("**relationships**") &&
        metrics.relationships === null
      ) {
        const parts = line.split("|").map((p) => removeBoldMarkers(p.trim()));
        if (parts.length >= 5) {
          metrics.relationships = parseFloatOrNull(parts[4]);
        }
      }
    }
  }

  return result;
}

/**
 * Parse simpleCoverage.md - extracts Instantiation Stats table (second table per gen)
 */
export function parseSimpleInstantiation(
  content: string
): ParsedSimpleInstantiation {
  const result: ParsedSimpleInstantiation = {};
  const lines = content.split("\n");

  let currentModel: string | null = null;
  let currentGen: string | null = null;
  let inInstantiationTable = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ") && !line.startsWith("### ")) {
      currentModel = line.replace("## ", "").trim();
      if (!result[currentModel]) result[currentModel] = {};
      currentGen = null;
      inInstantiationTable = false;
      continue;
    }

    if (line.startsWith("### gen")) {
      currentGen = line.replace("### ", "").trim();
      if (currentModel && !result[currentModel][currentGen]) {
        result[currentModel][currentGen] = createNullCoverageMetrics();
      }
      inInstantiationTable = false;
      continue;
    }

    // Detect table type
    if (line.includes("Instantiation Stats")) {
      inInstantiationTable = true;
      continue;
    }
    if (line.includes("Model Coverage")) {
      inInstantiationTable = false;
      continue;
    }

    // Parse instantiation rows
    if (
      currentModel &&
      currentGen &&
      inInstantiationTable &&
      line.includes("|")
    ) {
      const metrics = result[currentModel][currentGen];
      const parts = line.split("|").map((p) => removeBoldMarkers(p.trim()));

      // Format: | **classes** | total instantiated | total possible | ratio |
      // We want "total instantiated" (parts[2])
      if (line.includes("**classes**") && parts.length >= 3) {
        metrics.classes = parseFloatOrNull(parts[2]);
      } else if (line.includes("**attributes**") && parts.length >= 3) {
        metrics.attributes = parseFloatOrNull(parts[2]);
      } else if (line.includes("**relationships**") && parts.length >= 3) {
        metrics.relationships = parseFloatOrNull(parts[2]);
      }
    }
  }

  return result;
}

// ============================================================================
// CoT Coverage Parser
// ============================================================================

/**
 * Parse cotCoverage.md - extracts coverage, instantiation, uncovered, hallucinations per category
 */
export function parseCotCoverage(content: string): ParsedCotCoverage {
  const result: ParsedCotCoverage = {};
  const lines = content.split("\n");

  let currentModel: string | null = null;
  let currentGen: string | null = null;
  let currentCategory: string | null = null;
  let currentTable: "coverage" | "instantiation" | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Model header
    if (line.startsWith("## ") && !line.startsWith("### ")) {
      currentModel = line.replace("## ", "").trim();
      if (!result[currentModel]) result[currentModel] = {};
      currentGen = null;
      currentCategory = null;
      currentTable = null;
      continue;
    }

    // Generation header
    if (line.startsWith("### gen")) {
      currentGen = line.replace("### ", "").trim();
      if (currentModel && !result[currentModel][currentGen]) {
        result[currentModel][currentGen] = {};
      }
      currentCategory = null;
      currentTable = null;
      continue;
    }

    // Category header (skip "ALL Categories")
    if (line.startsWith("#### ") && !line.includes("ALL")) {
      const cat = line.replace("#### ", "").trim().toLowerCase();
      if (VALID_COT_CATEGORIES.includes(cat)) {
        currentCategory = cat;
        if (currentModel && currentGen) {
          if (!result[currentModel][currentGen][currentCategory]) {
            result[currentModel][currentGen][currentCategory] = {
              coverage: createNullCoverageMetrics(),
              instantiation: createNullCoverageMetrics(),
              uncovered: null,
            };
          }
        }
        currentTable = null;
      }
      continue;
    }

    // Detect table type
    if (line.includes("| Model Coverage |")) {
      currentTable = "coverage";
      continue;
    }
    if (line.includes("| Instantiation Stats |")) {
      currentTable = "instantiation";
      continue;
    }

    // Parse Uncovered line
    if (
      currentModel &&
      currentGen &&
      currentCategory &&
      trimmed.startsWith("Uncovered:")
    ) {
      const data = result[currentModel][currentGen][currentCategory];
      if (!data.uncovered) {
        data.uncovered = createEmptyUncoveredData();
      }

      // Parse: Uncovered: [Class: X, Attribute: Y.z, Relationship: A-B]
      const match = trimmed.match(/Uncovered:\s*\[(.*?)\]/);
      if (match && match[1]) {
        data.uncovered.uncovered = match[1]
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s.length > 0);
      }
      continue;
    }

    // Parse Hallucinations line
    if (
      currentModel &&
      currentGen &&
      currentCategory &&
      trimmed.startsWith("Hallucinations:")
    ) {
      const data = result[currentModel][currentGen][currentCategory];
      if (!data.uncovered) {
        data.uncovered = createEmptyUncoveredData();
      }

      const match = trimmed.match(/Hallucinations:\s*\[(.*?)\]/);
      if (match && match[1]) {
        data.uncovered.hallucinations = match[1]
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s.length > 0);
      }
      continue;
    }

    // Parse table rows
    if (
      currentModel &&
      currentGen &&
      currentCategory &&
      currentTable &&
      line.includes("|")
    ) {
      const data = result[currentModel][currentGen][currentCategory];
      const parts = line.split("|").map((p) => removeBoldMarkers(p.trim()));

      if (line.includes("**classes**")) {
        if (currentTable === "coverage" && parts.length >= 5) {
          data.coverage.classes = parseFloatOrNull(parts[4]);
        } else if (currentTable === "instantiation" && parts.length >= 3) {
          data.instantiation.classes = parseFloatOrNull(parts[2]);
        }
      } else if (line.includes("**attributes**")) {
        if (currentTable === "coverage" && parts.length >= 5) {
          data.coverage.attributes = parseFloatOrNull(parts[4]);
        } else if (currentTable === "instantiation" && parts.length >= 3) {
          data.instantiation.attributes = parseFloatOrNull(parts[2]);
        }
      } else if (line.includes("**relationships**")) {
        if (currentTable === "coverage" && parts.length >= 5) {
          data.coverage.relationships = parseFloatOrNull(parts[4]);
        } else if (currentTable === "instantiation" && parts.length >= 3) {
          data.instantiation.relationships = parseFloatOrNull(parts[2]);
        }
      }
    }
  }

  return result;
}
