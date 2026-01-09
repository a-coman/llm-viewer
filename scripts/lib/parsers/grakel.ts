/**
 * Parser for grakel.md files (per-model)
 * Extracts graph data (adjacency matrices, labels, edges) and kernel similarity matrix
 *
 * Format:
 * # Adj, edge, label
 * ```
 * Adj1: [[0, 1, ...], ...]
 * Labels1: {0: 'Bank', 1: 'Account', ...}
 * Edges1: [(0, 1), (0, 2), ...]
 * ...
 * ```
 * # Kernel 2D table:
 * |       | gen1 | gen2 | ... |
 * |-------|------|------|-----|
 * | **gen1** | 1.0 | 0.5 | ... |
 * | **gen2** |     | 1.0 | ... |
 * ...
 */

import type { GrakelData, GrakelMatrix, GraphData } from "../types.js";
import { parseFloatOrNull, removeBoldMarkers } from "../utils.js";

/**
 * Parse a Python-like 2D array string into a number[][]
 * e.g., "[[0, 1, 1], [1, 0, 0]]" => [[0, 1, 1], [1, 0, 0]]
 */
function parseAdjacencyMatrix(matrixStr: string): number[][] {
  try {
    // Simple JSON parse after cleanup
    const cleaned = matrixStr.trim();
    return JSON.parse(cleaned);
  } catch {
    return [];
  }
}

/**
 * Parse a Python-like dict string into a Record<number, string>
 * e.g., "{0: 'Bank', 1: 'Account'}" => {0: 'Bank', 1: 'Account'}
 */
function parseLabels(labelsStr: string): Record<number, string> {
  const result: Record<number, string> = {};
  try {
    // Match patterns like: 0: 'Bank' or 1: "Account"
    const matches = labelsStr.matchAll(/(\d+)\s*:\s*['"]([^'"]+)['"]/g);
    for (const match of matches) {
      result[parseInt(match[1], 10)] = match[2];
    }
  } catch {
    // Return empty on error
  }
  return result;
}

/**
 * Parse a Python-like list of tuples into [number, number][]
 * e.g., "[(0, 1), (0, 2)]" => [[0, 1], [0, 2]]
 */
function parseEdges(edgesStr: string): [number, number][] {
  const result: [number, number][] = [];
  try {
    // Match patterns like: (0, 1)
    const matches = edgesStr.matchAll(/\((\d+),\s*(\d+)\)/g);
    for (const match of matches) {
      result.push([parseInt(match[1], 10), parseInt(match[2], 10)]);
    }
  } catch {
    // Return empty on error
  }
  return result;
}

/**
 * Parse grakel.md content to extract graph data and kernel matrix
 */
export function parseGrakel(content: string): GrakelData {
  const result: GrakelData = {
    graphs: [],
    kernel: null,
  };

  const lines = content.split("\n");
  let inGraphSection = false;
  let inKernelSection = false;
  let graphSectionContent = "";

  // Temporary storage for parsed graphs by index
  const adjMatrices: Record<number, number[][]> = {};
  const labelMaps: Record<number, Record<number, string>> = {};
  const edgeLists: Record<number, [number, number][]> = {};

  // Kernel matrix data
  const kernelLabels: string[] = [];
  const kernelRows: number[][] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Detect section headers
    if (trimmed === "# Adj, edge, label") {
      inGraphSection = true;
      inKernelSection = false;
      continue;
    }

    if (trimmed === "# Kernel 2D table:") {
      inGraphSection = false;
      inKernelSection = true;
      continue;
    }

    // Skip code fence markers but track content
    if (trimmed.startsWith("```")) {
      if (inGraphSection && graphSectionContent) {
        // Parse accumulated graph content
        parseGraphContent(
          graphSectionContent,
          adjMatrices,
          labelMaps,
          edgeLists
        );
        graphSectionContent = "";
      }
      continue;
    }

    // Accumulate graph section content
    if (inGraphSection) {
      graphSectionContent += line + "\n";
    }

    // Parse kernel matrix table
    if (inKernelSection) {
      // Header row: |       | gen1 | gen2 | ... |
      if (
        trimmed.startsWith("|") &&
        trimmed.includes("gen") &&
        !trimmed.includes("**")
      ) {
        const cells = trimmed
          .split("|")
          .map((c) => c.trim())
          .filter((c) => c !== "");
        // First cell is empty or label, rest are generation labels
        for (const cell of cells) {
          if (cell.startsWith("gen")) {
            kernelLabels.push(cell);
          }
        }
        continue;
      }

      // Skip separator row
      if (trimmed.match(/^\|[\s-|]+\|$/)) {
        continue;
      }

      // Data rows: | **gen1** | 1.0 | 0.5 | ... |
      if (trimmed.startsWith("|") && trimmed.includes("**gen")) {
        const cells = trimmed
          .split("|")
          .map((c) => c.trim())
          .filter((c) => c !== "");
        if (cells.length > 0) {
          // First cell is the row label (e.g., **gen1**)
          const rowLabel = removeBoldMarkers(cells[0]);
          const rowIndex = parseInt(rowLabel.replace("gen", ""), 10) - 1;

          // Rest are values
          const rowValues: number[] = [];
          for (let j = 1; j < cells.length; j++) {
            const val = parseFloatOrNull(cells[j]);
            rowValues.push(val ?? 0);
          }

          // Ensure array is large enough
          while (kernelRows.length <= rowIndex) {
            kernelRows.push([]);
          }
          kernelRows[rowIndex] = rowValues;
        }
      }
    }
  }

  // Parse any remaining graph content
  if (graphSectionContent) {
    parseGraphContent(graphSectionContent, adjMatrices, labelMaps, edgeLists);
  }

  // Build graphs array in order
  const maxIndex = Math.max(
    ...Object.keys(adjMatrices).map(Number),
    ...Object.keys(labelMaps).map(Number),
    ...Object.keys(edgeLists).map(Number),
    0
  );

  for (let idx = 1; idx <= maxIndex; idx++) {
    result.graphs.push({
      adj: adjMatrices[idx] || [],
      labels: labelMaps[idx] || {},
      edges: edgeLists[idx] || [],
    });
  }

  // Build kernel matrix if we have data
  if (kernelLabels.length > 0 && kernelRows.length > 0) {
    // Fill in the symmetric matrix (upper triangular to full)
    const size = kernelLabels.length;
    const fullMatrix: number[][] = [];

    for (let row = 0; row < size; row++) {
      fullMatrix[row] = [];
      for (let col = 0; col < size; col++) {
        if (col >= row) {
          // Upper triangular (including diagonal)
          const rowData = kernelRows[row] || [];
          // Column index in sparse data: col - row (since lower columns are empty)
          const sparseCol = col - row;
          fullMatrix[row][col] = rowData[sparseCol] ?? 0;
        } else {
          // Lower triangular: mirror from upper
          fullMatrix[row][col] = fullMatrix[col][row] ?? 0;
        }
      }
    }

    result.kernel = {
      labels: kernelLabels,
      values: fullMatrix,
    };
  }

  return result;
}

/**
 * Parse the graph section content line by line
 */
function parseGraphContent(
  content: string,
  adjMatrices: Record<number, number[][]>,
  labelMaps: Record<number, Record<number, string>>,
  edgeLists: Record<number, [number, number][]>
): void {
  const lines = content.split("\n");

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Adjacency matrix: Adj1: [[...]]
    const adjMatch = trimmed.match(/^Adj(\d+):\s*(.+)$/);
    if (adjMatch) {
      const idx = parseInt(adjMatch[1], 10);
      adjMatrices[idx] = parseAdjacencyMatrix(adjMatch[2]);
      continue;
    }

    // Labels: Labels1: {...}
    const labelsMatch = trimmed.match(/^Labels(\d+):\s*(.+)$/);
    if (labelsMatch) {
      const idx = parseInt(labelsMatch[1], 10);
      labelMaps[idx] = parseLabels(labelsMatch[2]);
      continue;
    }

    // Edges: Edges1: [(...), ...]
    const edgesMatch = trimmed.match(/^Edges(\d+):\s*(.+)$/);
    if (edgesMatch) {
      const idx = parseInt(edgesMatch[1], 10);
      edgeLists[idx] = parseEdges(edgesMatch[2]);
      continue;
    }
  }
}

/**
 * Extract just the kernel matrix (for heatmap visualization)
 */
export function parseGrakelKernel(content: string): GrakelMatrix | null {
  const result = parseGrakel(content);
  return result.kernel;
}

/**
 * Extract just the graph data (for structural analysis)
 */
export function parseGrakelGraphs(content: string): GraphData[] {
  const result = parseGrakel(content);
  return result.graphs;
}
