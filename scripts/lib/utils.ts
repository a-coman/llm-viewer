/**
 * Utility functions for the preprocessing pipeline
 */

import * as fs from "node:fs";
import * as path from "node:path";

// ============================================================================
// File System Utilities
// ============================================================================

/**
 * Ensure a directory exists, creating it recursively if needed
 */
export function ensureDir(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Copy a file if it exists, creating destination directory if needed
 */
export function copyFileIfExists(
  sourcePath: string,
  destinationPath: string
): boolean {
  if (!sourcePath || !destinationPath) return false;
  if (!fs.existsSync(sourcePath)) return false;
  ensureDir(path.dirname(destinationPath));
  fs.copyFileSync(sourcePath, destinationPath);
  return true;
}

/**
 * Check if a file exists
 */
export function fileExists(filePath: string): boolean {
  return fs.existsSync(filePath);
}

/**
 * Read file content safely, returning null if file doesn't exist or on error
 */
export function readFileSafe(filePath: string): string | null {
  try {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf-8");
    }
  } catch (e) {
    console.error(`Error reading ${filePath}:`, e);
  }
  return null;
}

/**
 * Find the first timestamp subfolder for a model
 */
export function findTimestampFolder(
  baseDir: string,
  modelName: string
): string | null {
  const modelDir = path.join(baseDir, modelName);
  if (!fs.existsSync(modelDir)) return null;

  const folders = fs
    .readdirSync(modelDir)
    .filter((f: string) => fs.statSync(path.join(modelDir, f)).isDirectory());

  return folders.length > 0 ? folders[0] : null;
}

/**
 * Write JSON data to a file
 */
export function writeJsonFile(filePath: string, data: unknown): void {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// ============================================================================
// Parsing Utilities
// ============================================================================

/**
 * Parse a float from a string, returning null if invalid
 */
export function parseFloatOrNull(value: string | undefined): number | null {
  if (value === undefined || value === null || value.trim() === "") return null;
  const parsed = parseFloat(value);
  return isNaN(parsed) ? null : parsed;
}

/**
 * Parse an integer from a string, returning null if invalid
 */
export function parseIntOrNull(value: string | undefined): number | null {
  if (value === undefined || value === null || value.trim() === "") return null;
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? null : parsed;
}

/**
 * Remove markdown bold markers (**text**) from a string
 */
export function removeBoldMarkers(text: string): string {
  return text.replace(/\*\*/g, "");
}

/**
 * Split a markdown table row and clean up cells
 */
export function parseTableRow(line: string): string[] {
  return line
    .split("|")
    .map((cell) => cell.trim())
    .filter((cell) => cell !== "");
}

/**
 * Check if a line is a markdown table separator (|---|---|)
 */
export function isTableSeparator(line: string): boolean {
  return /^\|[\s-:|]+\|$/.test(line.trim());
}

/**
 * Extract generation number from a string like "gen1", "gen12", etc.
 */
export function extractGenNumber(genId: string): number | null {
  const match = genId.match(/gen(\d+)/i);
  return match ? parseInt(match[1], 10) : null;
}

// ============================================================================
// Array/Object Utilities
// ============================================================================

/**
 * Calculate average of numeric values, returning null if no valid values
 */
export function average(values: (number | null)[]): number | null {
  const validValues = values.filter((v): v is number => v !== null);
  if (validValues.length === 0) return null;
  return validValues.reduce((sum, v) => sum + v, 0) / validValues.length;
}

/**
 * Calculate sum of numeric values, returning null if no valid values
 */
export function sum(values: (number | null)[]): number | null {
  const validValues = values.filter((v): v is number => v !== null);
  if (validValues.length === 0) return null;
  return validValues.reduce((s, v) => s + v, 0);
}

/**
 * Count values where a condition is true, returning rate as 0-1
 */
export function successRate(values: boolean[]): number | null {
  if (values.length === 0) return null;
  const successes = values.filter((v) => v).length;
  return successes / values.length;
}

// ============================================================================
// Null-safe object creation
// ============================================================================

/**
 * Create a coverage metrics object with null defaults
 */
export function createNullCoverageMetrics() {
  return {
    classes: null as number | null,
    attributes: null as number | null,
    relationships: null as number | null,
  };
}

/**
 * Create a diversity metrics object with null defaults
 */
export function createNullDiversityMetrics() {
  return {
    numeric: null as number | null,
    stringEquals: null as number | null,
    stringLv: null as number | null,
  };
}

/**
 * Create a validation errors object with null defaults
 */
export function createNullValidationErrors() {
  return {
    syntaxErrors: null as number | null,
    syntaxTotal: null as number | null,
    multiplicitiesErrors: null as number | null,
    multiplicitiesTotal: null as number | null,
    invariantsErrors: null as number | null,
    invariantsTotal: null as number | null,
  };
}

/**
 * Create a price info object with null defaults
 */
export function createNullPriceInfo() {
  return {
    price: null as number | null,
    tokenInput: null as number | null,
    tokenOutput: null as number | null,
  };
}

/**
 * Create a judge result object with null defaults
 */
export function createNullJudgeResult() {
  return {
    realistic: null as number | null,
    unrealistic: null as number | null,
    unknown: null as number | null,
    successRate: null as number | null,
  };
}

/**
 * Create an entropy metrics object with null defaults
 */
export function createNullEntropyMetrics() {
  return {
    entropy: null as number | null,
    maxEntropyActive: null as number | null,
    evennessActive: null as number | null,
    maxEntropyAll: null as number | null,
    evennessAll: null as number | null,
  };
}

/**
 * Create a token counts object with null defaults
 */
export function createNullTokenCounts() {
  return {
    input: null as number | null,
    output: null as number | null,
  };
}

/**
 * Create an overconstraints object with null defaults
 */
export function createNullOverconstraints() {
  return {
    multiplicitiesErrors: null as number | null,
    multiplicitiesTotal: null as number | null,
    invariantsErrors: null as number | null,
    invariantsTotal: null as number | null,
  };
}

/**
 * Create an uncovered data object with empty arrays
 */
export function createEmptyUncoveredData() {
  return {
    uncovered: [] as string[],
    hallucinations: [] as string[],
  };
}
