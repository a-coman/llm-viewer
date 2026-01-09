/**
 * Parser for metrics.md files (per-model)
 * Extracts validation errors and domain-specific validation data
 *
 * Simple Format:
 * # Generation 1
 * ```code...```
 * ## Generation 1 summary
 * | General | Errors | Total | Failure (%) |
 * |---|---|---|---|
 * | Syntax Errors | 0 | 59 | 0.00% |
 * | Multiplicities Errors | 0 | 16 | 0.00% |
 * | Invariants Errors | 0 | 2 | 0.00% |
 *
 * | Bank | Invalid | Total | Failure (%) |
 * |---|---|---|---|
 * | IBANs | 5 | 5 | 100.00% |
 *
 * | Failed IBANs |
 * |---|
 * ```value1```
 *
 * CoT Format:
 * # Generation 1
 * ## Category baseline
 * ```code...```
 * | General | Errors | Total | Failure (%) |
 * ...
 * ## Category invalid
 * | [Overconstraints Detection] | Errors | Total | Failure (%) |
 * | Multiplicities Errors (Not included on General) | 0 | 9 | 0.00% |
 * ...
 * ## Generation 1 summary
 * | General | Errors | Total | Failure (%) |
 */

import type {
  ParsedSimpleMetrics,
  ParsedSimpleMetricsGen,
  ParsedCotMetrics,
  ParsedCotMetricsCat,
  ValidationErrors,
  Overconstraints,
  DomainValidation,
  DomainValidationEntry,
} from "../types.js";
import {
  parseIntOrNull,
  parseFloatOrNull,
  createNullValidationErrors,
  createNullOverconstraints,
} from "../utils.js";

const VALID_COT_CATEGORIES = [
  "baseline",
  "boundary",
  "complex",
  "edge",
  "invalid",
];

// ============================================================================
// Simple Metrics Parser
// ============================================================================

/**
 * Parse Simple metrics.md - extracts errors and domain validation per generation
 */
export function parseSimpleMetrics(content: string): ParsedSimpleMetrics {
  const result: ParsedSimpleMetrics = {};
  const lines = content.split("\n");

  let currentGen: string | null = null;
  let inDomainTable = false;
  let currentDomainName: string | null = null;
  let inFailedList = false;
  let currentFailedType: string | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Stop parsing when we reach the summary section (aggregate data for all generations)
    if (line.match(/^# Summary for all generations/i)) {
      break;
    }

    // Generation header: # Generation 1
    if (line.match(/^# Generation \d+/)) {
      const match = line.match(/Generation (\d+)/);
      if (match) {
        currentGen = `gen${match[1]}`;
        if (!result[currentGen]) {
          result[currentGen] = {
            errors: createNullValidationErrors(),
            domainValidation: null,
          };
        }
        inDomainTable = false;
        inFailedList = false;
      }
      continue;
    }

    if (!currentGen) continue;

    // Parse General errors table
    if (trimmed.includes("| Syntax Errors |")) {
      const parts = trimmed.split("|").map((p) => p.trim());
      if (parts.length >= 4) {
        result[currentGen].errors.syntaxErrors = parseIntOrNull(parts[2]);
        result[currentGen].errors.syntaxTotal = parseIntOrNull(parts[3]);
      }
      continue;
    }

    if (
      trimmed.includes("| Multiplicities Errors |") &&
      !trimmed.includes("Not included")
    ) {
      const parts = trimmed.split("|").map((p) => p.trim());
      if (parts.length >= 4) {
        result[currentGen].errors.multiplicitiesErrors = parseIntOrNull(
          parts[2]
        );
        result[currentGen].errors.multiplicitiesTotal = parseIntOrNull(
          parts[3]
        );
      }
      continue;
    }

    if (
      trimmed.includes("| Invariants Errors |") &&
      !trimmed.includes("Not included")
    ) {
      const parts = trimmed.split("|").map((p) => p.trim());
      if (parts.length >= 4) {
        result[currentGen].errors.invariantsErrors = parseIntOrNull(parts[2]);
        result[currentGen].errors.invariantsTotal = parseIntOrNull(parts[3]);
      }
      continue;
    }

    // Detect domain-specific validation table header (second table)
    // Format: | Bank | Invalid | Total | Failure (%) |
    // or: | AddressBook | Invalid | Total | Failure (%) |
    if (trimmed.match(/^\|[^|]+\|\s*Invalid\s*\|\s*Total\s*\|\s*Failure/i)) {
      const parts = trimmed.split("|").map((p) => p.trim());
      if (parts.length >= 2) {
        currentDomainName = parts[1];
        inDomainTable = true;
        if (!result[currentGen].domainValidation) {
          result[currentGen].domainValidation = [];
        }
      }
      continue;
    }

    // Parse domain validation rows (e.g., | IBANs | 5 | 5 | 100.00% |)
    if (inDomainTable && trimmed.match(/^\|[^|]+\|\s*\d+/)) {
      const parts = trimmed.split("|").map((p) => p.trim());
      if (parts.length >= 5) {
        const name = parts[1];
        const invalid = parseIntOrNull(parts[2]) ?? 0;
        const total = parseIntOrNull(parts[3]) ?? 0;
        const failureRate = parseFloatOrNull(parts[4]?.replace("%", "")) ?? 0;

        result[currentGen].domainValidation!.push({
          name,
          invalid,
          total,
          failureRate: failureRate / 100, // Convert percentage to decimal
          failedItems: [],
        });
      }
      continue;
    }

    // Detect failed items list header: | Failed IBANs |
    if (trimmed.match(/^\|\s*Failed\s+([^|]+)\s*\|$/)) {
      const match = trimmed.match(/Failed\s+(\w+)/);
      if (match) {
        currentFailedType = match[1];
        inFailedList = true;
        inDomainTable = false;
      }
      continue;
    }

    // Parse failed items (code blocks)
    if (
      inFailedList &&
      currentFailedType &&
      trimmed.startsWith("```") &&
      trimmed.length > 3
    ) {
      // Inline code block: ```value```
      const value = trimmed.replace(/`/g, "").trim();
      const domainVal = result[currentGen].domainValidation;
      if (value && domainVal) {
        // Find the matching validation entry
        const entry = domainVal.find(
          (v) => v.name.toLowerCase() === currentFailedType!.toLowerCase()
        );
        if (entry) {
          entry.failedItems.push(value);
        }
      }
      continue;
    }

    // Reset table states on empty lines or new sections
    if (trimmed === "" || trimmed.startsWith("#")) {
      inDomainTable = false;
      if (trimmed.startsWith("#")) {
        inFailedList = false;
        currentFailedType = null;
      }
    }
  }

  return result;
}

// ============================================================================
// CoT Metrics Parser
// ============================================================================

/**
 * Parse CoT metrics.md - extracts errors per generation/category + overconstraints for invalid
 */
export function parseCotMetrics(content: string): ParsedCotMetrics {
  const result: ParsedCotMetrics = {};
  const lines = content.split("\n");

  let currentGen: string | null = null;
  let currentCategory: string | null = null;
  let inOverconstraintsTable = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Generation header: # Generation 1
    if (line.match(/^# Generation \d+/)) {
      const match = line.match(/Generation (\d+)/);
      if (match) {
        currentGen = `gen${match[1]}`;
        if (!result[currentGen]) result[currentGen] = {};
        currentCategory = null;
        inOverconstraintsTable = false;
      }
      continue;
    }

    // Category header: ## Category baseline
    if (line.match(/^## Category /i)) {
      const cat = line
        .replace(/^## Category /i, "")
        .trim()
        .toLowerCase();
      if (currentGen && VALID_COT_CATEGORIES.includes(cat)) {
        currentCategory = cat;
        if (!result[currentGen][currentCategory]) {
          result[currentGen][currentCategory] = {
            errors: createNullValidationErrors(),
            overconstraints:
              cat === "invalid" ? createNullOverconstraints() : null,
          };
        }
        inOverconstraintsTable = false;
      }
      continue;
    }

    // Skip summary sections
    if (line.match(/^## Generation \d+ summary/i)) {
      currentCategory = null;
      inOverconstraintsTable = false;
      continue;
    }

    if (!currentGen || !currentCategory) continue;

    // Detect overconstraints table (only for invalid category)
    if (trimmed.includes("[Overconstraints Detection]")) {
      inOverconstraintsTable = true;
      continue;
    }

    // Detect General table (resets overconstraints mode)
    if (trimmed.includes("| General |")) {
      inOverconstraintsTable = false;
      continue;
    }

    // Parse overconstraints rows (invalid category only)
    if (inOverconstraintsTable && currentCategory === "invalid") {
      if (
        trimmed.includes("Multiplicities Errors") &&
        trimmed.includes("Not included")
      ) {
        const parts = trimmed.split("|").map((p) => p.trim());
        if (
          parts.length >= 4 &&
          result[currentGen][currentCategory].overconstraints
        ) {
          result[currentGen][
            currentCategory
          ].overconstraints!.multiplicitiesErrors = parseIntOrNull(parts[2]);
          result[currentGen][
            currentCategory
          ].overconstraints!.multiplicitiesTotal = parseIntOrNull(parts[3]);
        }
        continue;
      }
      if (
        trimmed.includes("Invariants Errors") &&
        trimmed.includes("Not included")
      ) {
        const parts = trimmed.split("|").map((p) => p.trim());
        if (
          parts.length >= 4 &&
          result[currentGen][currentCategory].overconstraints
        ) {
          result[currentGen][
            currentCategory
          ].overconstraints!.invariantsErrors = parseIntOrNull(parts[2]);
          result[currentGen][currentCategory].overconstraints!.invariantsTotal =
            parseIntOrNull(parts[3]);
        }
        continue;
      }
    }

    // Parse General errors (not in overconstraints mode)
    if (!inOverconstraintsTable) {
      if (trimmed.includes("| Syntax Errors |")) {
        const parts = trimmed.split("|").map((p) => p.trim());
        if (parts.length >= 4) {
          result[currentGen][currentCategory].errors.syntaxErrors =
            parseIntOrNull(parts[2]);
          result[currentGen][currentCategory].errors.syntaxTotal =
            parseIntOrNull(parts[3]);
        }
        continue;
      }

      if (
        trimmed.includes("| Multiplicities Errors |") &&
        !trimmed.includes("Not included")
      ) {
        const parts = trimmed.split("|").map((p) => p.trim());
        if (parts.length >= 4) {
          result[currentGen][currentCategory].errors.multiplicitiesErrors =
            parseIntOrNull(parts[2]);
          result[currentGen][currentCategory].errors.multiplicitiesTotal =
            parseIntOrNull(parts[3]);
        }
        continue;
      }

      if (
        trimmed.includes("| Invariants Errors |") &&
        !trimmed.includes("Not included")
      ) {
        const parts = trimmed.split("|").map((p) => p.trim());
        if (parts.length >= 4) {
          result[currentGen][currentCategory].errors.invariantsErrors =
            parseIntOrNull(parts[2]);
          result[currentGen][currentCategory].errors.invariantsTotal =
            parseIntOrNull(parts[3]);
        }
        continue;
      }
    }
  }

  return result;
}

/**
 * Parse CoT metrics and also extract domain validation per category
 * (Extended version with full domain validation support)
 */
export function parseCotMetricsWithDomain(
  content: string
): Record<
  string,
  Record<
    string,
    ParsedCotMetricsCat & { domainValidation: DomainValidation | null }
  >
> {
  const result: Record<
    string,
    Record<
      string,
      ParsedCotMetricsCat & { domainValidation: DomainValidation | null }
    >
  > = {};
  const lines = content.split("\n");

  let currentGen: string | null = null;
  let currentCategory: string | null = null;
  let inOverconstraintsTable = false;
  let inDomainTable = false;
  let inFailedList = false;
  let currentFailedType: string | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Generation header
    if (line.match(/^# Generation \d+/)) {
      const match = line.match(/Generation (\d+)/);
      if (match) {
        currentGen = `gen${match[1]}`;
        if (!result[currentGen]) result[currentGen] = {};
        currentCategory = null;
        inOverconstraintsTable = false;
        inDomainTable = false;
        inFailedList = false;
      }
      continue;
    }

    // Category header
    if (line.match(/^## Category /i)) {
      const cat = line
        .replace(/^## Category /i, "")
        .trim()
        .toLowerCase();
      if (currentGen && VALID_COT_CATEGORIES.includes(cat)) {
        currentCategory = cat;
        if (!result[currentGen][currentCategory]) {
          result[currentGen][currentCategory] = {
            errors: createNullValidationErrors(),
            overconstraints:
              cat === "invalid" ? createNullOverconstraints() : null,
            domainValidation: null,
          };
        }
        inOverconstraintsTable = false;
        inDomainTable = false;
        inFailedList = false;
      }
      continue;
    }

    // Skip summary sections
    if (line.match(/^## Generation \d+ summary/i)) {
      currentCategory = null;
      continue;
    }

    if (!currentGen || !currentCategory) continue;

    // Detect tables
    if (trimmed.includes("[Overconstraints Detection]")) {
      inOverconstraintsTable = true;
      inDomainTable = false;
      continue;
    }

    if (trimmed.includes("| General |")) {
      inOverconstraintsTable = false;
      inDomainTable = false;
      continue;
    }

    // Domain validation table header
    if (
      trimmed.match(/^\|[^|]+\|\s*Invalid\s*\|\s*Total\s*\|\s*Failure/i) &&
      !trimmed.includes("General")
    ) {
      inDomainTable = true;
      inOverconstraintsTable = false;
      if (!result[currentGen][currentCategory].domainValidation) {
        result[currentGen][currentCategory].domainValidation = [];
      }
      continue;
    }

    // Parse domain validation rows
    if (inDomainTable && trimmed.match(/^\|[^|]+\|\s*\d+/)) {
      const parts = trimmed.split("|").map((p) => p.trim());
      if (parts.length >= 5) {
        const name = parts[1];
        const invalid = parseIntOrNull(parts[2]) ?? 0;
        const total = parseIntOrNull(parts[3]) ?? 0;
        const failureRate = parseFloatOrNull(parts[4]?.replace("%", "")) ?? 0;

        result[currentGen][currentCategory].domainValidation!.push({
          name,
          invalid,
          total,
          failureRate: failureRate / 100,
          failedItems: [],
        });
      }
      continue;
    }

    // Failed items list header
    if (trimmed.match(/^\|\s*Failed\s+([^|]+)\s*\|$/)) {
      const match = trimmed.match(/Failed\s+(\w+)/);
      if (match) {
        currentFailedType = match[1];
        inFailedList = true;
        inDomainTable = false;
      }
      continue;
    }

    // Parse failed items
    if (
      inFailedList &&
      currentFailedType &&
      trimmed.startsWith("```") &&
      trimmed.length > 3
    ) {
      const value = trimmed.replace(/`/g, "").trim();
      if (value && result[currentGen][currentCategory].domainValidation) {
        const entry = result[currentGen][
          currentCategory
        ].domainValidation!.find(
          (v) => v.name.toLowerCase() === currentFailedType!.toLowerCase()
        );
        if (entry) {
          entry.failedItems.push(value);
        }
      }
      continue;
    }

    // Parse overconstraints
    if (inOverconstraintsTable && currentCategory === "invalid") {
      if (
        trimmed.includes("Multiplicities Errors") &&
        trimmed.includes("Not included")
      ) {
        const parts = trimmed.split("|").map((p) => p.trim());
        if (
          parts.length >= 4 &&
          result[currentGen][currentCategory].overconstraints
        ) {
          result[currentGen][
            currentCategory
          ].overconstraints!.multiplicitiesErrors = parseIntOrNull(parts[2]);
          result[currentGen][
            currentCategory
          ].overconstraints!.multiplicitiesTotal = parseIntOrNull(parts[3]);
        }
        continue;
      }
      if (
        trimmed.includes("Invariants Errors") &&
        trimmed.includes("Not included")
      ) {
        const parts = trimmed.split("|").map((p) => p.trim());
        if (
          parts.length >= 4 &&
          result[currentGen][currentCategory].overconstraints
        ) {
          result[currentGen][
            currentCategory
          ].overconstraints!.invariantsErrors = parseIntOrNull(parts[2]);
          result[currentGen][currentCategory].overconstraints!.invariantsTotal =
            parseIntOrNull(parts[3]);
        }
        continue;
      }
    }

    // Parse General errors
    if (!inOverconstraintsTable && !inDomainTable) {
      if (trimmed.includes("| Syntax Errors |")) {
        const parts = trimmed.split("|").map((p) => p.trim());
        if (parts.length >= 4) {
          result[currentGen][currentCategory].errors.syntaxErrors =
            parseIntOrNull(parts[2]);
          result[currentGen][currentCategory].errors.syntaxTotal =
            parseIntOrNull(parts[3]);
        }
      } else if (
        trimmed.includes("| Multiplicities Errors |") &&
        !trimmed.includes("Not included")
      ) {
        const parts = trimmed.split("|").map((p) => p.trim());
        if (parts.length >= 4) {
          result[currentGen][currentCategory].errors.multiplicitiesErrors =
            parseIntOrNull(parts[2]);
          result[currentGen][currentCategory].errors.multiplicitiesTotal =
            parseIntOrNull(parts[3]);
        }
      } else if (
        trimmed.includes("| Invariants Errors |") &&
        !trimmed.includes("Not included")
      ) {
        const parts = trimmed.split("|").map((p) => p.trim());
        if (parts.length >= 4) {
          result[currentGen][currentCategory].errors.invariantsErrors =
            parseIntOrNull(parts[2]);
          result[currentGen][currentCategory].errors.invariantsTotal =
            parseIntOrNull(parts[3]);
        }
      }
    }
  }

  return result;
}
