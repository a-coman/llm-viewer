import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

// ESM __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DATA_DIR = path.join(__dirname, "../src/data/dataset/GPT4O-exp1");
const OUTPUT_DIR = path.join(__dirname, "../src/data/processed");

const MODELS = [
  "Bank",
  "Restaurant",
  "AddressBook",
  "PickupNet",
  "HotelManagement",
  "Football",
  "MyExpenses",
  "VideoClub",
  "VehicleRental",
  "Statemachine",
];

const COT_CATEGORIES = ["baseline", "boundary", "complex", "edge", "invalid"];

// Ensure output directories exist
function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Parse price.md - extracts price/token info per model and type
function parsePriceFile(
  content: string
): Record<string, { simple?: any; cot?: any }> {
  const result: Record<string, { simple?: any; cot?: any }> = {};
  const lines = content.split("\n");

  let currentType: "simple" | "cot" | null = null;
  let currentModel: string | null = null;

  for (const line of lines) {
    if (line.startsWith("# Simple")) {
      currentType = "simple";
      currentModel = null;
    } else if (line.startsWith("# CoT")) {
      currentType = "cot";
      currentModel = null;
    } else if (line.startsWith("## ") && currentType) {
      const modelName = line.replace("## ", "").trim();
      // Skip "All Systems" and "..."
      if (
        modelName !== "All Systems" &&
        modelName !== "..." &&
        !modelName.includes("...")
      ) {
        currentModel = modelName;
        if (!result[currentModel]) result[currentModel] = {};
      } else {
        currentModel = null;
      }
    } else if (currentModel && currentType) {
      if (line.startsWith("precio:")) {
        const price = parseFloat(
          line.replace("precio:", "").replace("$", "").trim()
        );
        if (!result[currentModel][currentType])
          result[currentModel][currentType] = {};
        result[currentModel][currentType].price = price;
      } else if (line.startsWith("token-input:")) {
        const tokens = parseInt(line.replace("token-input:", "").trim());
        if (!result[currentModel][currentType])
          result[currentModel][currentType] = {};
        result[currentModel][currentType].tokenInput = tokens;
      } else if (line.startsWith("token-output:")) {
        const tokens = parseInt(line.replace("token-output:", "").trim());
        if (!result[currentModel][currentType])
          result[currentModel][currentType] = {};
        result[currentModel][currentType].tokenOutput = tokens;
      }
    }
  }

  return result;
}

// Parse simpleCoverage.md - format: ## Model -> ### genX -> tables
// IMPORTANT: Each gen has TWO tables - "Model Coverage" and "Instantiation Stats"
// We only want the first table (Model Coverage), not the second (Instantiation Stats)
// because Instantiation Stats has 0.0000 for classes/relationships (Infinity denominator)
function parseSimpleCoverageFile(
  content: string
): Record<string, Record<string, any>> {
  const result: Record<string, Record<string, any>> = {};
  const lines = content.split("\n");

  let currentModel: string | null = null;
  let currentGen: string | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ") && !line.startsWith("### ")) {
      currentModel = line.replace("## ", "").trim();
      if (!result[currentModel]) result[currentModel] = {};
      currentGen = null;
    } else if (line.startsWith("### gen")) {
      currentGen = line.replace("### ", "").trim();
      if (currentModel && !result[currentModel][currentGen]) {
        result[currentModel][currentGen] = {};
      }
    } else if (
      currentModel &&
      currentGen &&
      line.includes("|") &&
      line.includes("**classes**")
    ) {
      // Only capture if we haven't already captured classes for this gen
      // (first table is Model Coverage, second is Instantiation Stats which has wrong values)
      if (result[currentModel][currentGen].classes === undefined) {
        const parts = line.split("|").map((p) => p.trim().replace(/\*\*/g, ""));
        // Format: | **classes** | instantiated | defined | coverage |
        if (parts.length >= 5) {
          result[currentModel][currentGen].classes = parseFloat(parts[4]) || 0;
        }
      }
    } else if (
      currentModel &&
      currentGen &&
      line.includes("|") &&
      line.includes("**attributes**")
    ) {
      // Only capture if we haven't already captured attributes for this gen
      if (result[currentModel][currentGen].attributes === undefined) {
        const parts = line.split("|").map((p) => p.trim().replace(/\*\*/g, ""));
        if (parts.length >= 5) {
          result[currentModel][currentGen].attributes =
            parseFloat(parts[4]) || 0;
        }
      }
    } else if (
      currentModel &&
      currentGen &&
      line.includes("|") &&
      line.includes("**relationships**")
    ) {
      // Only capture if we haven't already captured relationships for this gen
      if (result[currentModel][currentGen].relationships === undefined) {
        const parts = line.split("|").map((p) => p.trim().replace(/\*\*/g, ""));
        if (parts.length >= 5) {
          result[currentModel][currentGen].relationships =
            parseFloat(parts[4]) || 0;
        }
      }
    }
  }

  return result;
}

// Parse cotCoverage.md - format: ## Model -> ### genX -> #### category -> tables
// Each category has TWO tables - "Model Coverage" and "Instantiation Stats"
// We capture both tables - coverage goes to classes/attributes/relationships
// Instantiation goes to instClasses/instAttributes/instRelationships
function parseCotCoverageFile(
  content: string
): Record<string, Record<string, Record<string, any>>> {
  const result: Record<string, Record<string, Record<string, any>>> = {};
  const lines = content.split("\n");

  let currentModel: string | null = null;
  let currentGen: string | null = null;
  let currentCategory: string | null = null;
  let currentTable: "coverage" | "instantiation" | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ") && !line.startsWith("### ")) {
      currentModel = line.replace("## ", "").trim();
      if (!result[currentModel]) result[currentModel] = {};
      currentGen = null;
      currentCategory = null;
      currentTable = null;
    } else if (line.startsWith("### gen")) {
      currentGen = line.replace("### ", "").trim();
      if (currentModel && !result[currentModel][currentGen]) {
        result[currentModel][currentGen] = {};
      }
      currentCategory = null;
      currentTable = null;
    } else if (line.startsWith("#### ") && !line.includes("ALL")) {
      const cat = line.replace("#### ", "").trim().toLowerCase();
      if (COT_CATEGORIES.includes(cat)) {
        currentCategory = cat;
        if (currentModel && currentGen) {
          if (!result[currentModel][currentGen][currentCategory]) {
            result[currentModel][currentGen][currentCategory] = {};
          }
        }
        currentTable = null;
      }
    } else if (line.includes("| Model Coverage |")) {
      currentTable = "coverage";
    } else if (line.includes("| Instantiation Stats |")) {
      currentTable = "instantiation";
    } else if (
      currentModel &&
      currentGen &&
      currentCategory &&
      currentTable &&
      line.includes("|") &&
      line.includes("**classes**")
    ) {
      const parts = line.split("|").map((p) => p.trim().replace(/\*\*/g, ""));
      if (parts.length >= 3) {
        if (currentTable === "coverage") {
          result[currentModel][currentGen][currentCategory].classes =
            parseFloat(parts[4]) || 0;
        } else {
          result[currentModel][currentGen][currentCategory].instClasses =
            parseInt(parts[2]) || 0;
        }
      }
    } else if (
      currentModel &&
      currentGen &&
      currentCategory &&
      currentTable &&
      line.includes("|") &&
      line.includes("**attributes**")
    ) {
      const parts = line.split("|").map((p) => p.trim().replace(/\*\*/g, ""));
      if (parts.length >= 3) {
        if (currentTable === "coverage") {
          result[currentModel][currentGen][currentCategory].attributes =
            parseFloat(parts[4]) || 0;
        } else {
          result[currentModel][currentGen][currentCategory].instAttributes =
            parseInt(parts[2]) || 0;
        }
      }
    } else if (
      currentModel &&
      currentGen &&
      currentCategory &&
      currentTable &&
      line.includes("|") &&
      line.includes("**relationships**")
    ) {
      const parts = line.split("|").map((p) => p.trim().replace(/\*\*/g, ""));
      if (parts.length >= 3) {
        if (currentTable === "coverage") {
          result[currentModel][currentGen][currentCategory].relationships =
            parseFloat(parts[4]) || 0;
        } else {
          result[currentModel][currentGen][currentCategory].instRelationships =
            parseInt(parts[2]) || 0;
        }
      }
    }
  }

  return result;
}

// Parse difference file (simpleDifference.md, cotDifference.md)
// Format: ## Model -> table with gen rows and "ALL Gen" summary
function parseDifferenceFile(
  content: string
): Record<string, { numeric: number; stringEquals: number; stringLv: number }> {
  const result: Record<
    string,
    { numeric: number; stringEquals: number; stringLv: number }
  > = {};
  const lines = content.split("\n");

  let currentModel: string | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      currentModel = line.replace("## ", "").trim();
    } else if (
      currentModel &&
      (line.includes("| ALL Gen |") || line.includes("| ALL Generations |"))
    ) {
      const parts = line.split("|").map((p) => p.trim());
      // Format: | ALL Gen | numeric | stringEquals | stringLv | or | ALL Generations | values |
      if (parts.length >= 5) {
        result[currentModel] = {
          numeric: parseFloat(parts[2]) || 0,
          stringEquals: parseFloat(parts[3]) || 0,
          stringLv: parseFloat(parts[4]) || 0,
        };
      }
    }
  }

  return result;
}

// Parse per-generation diversity from difference file (simpleDifference.md)
// Format: ## Model -> table with | genX | Numeric | StringEquals | StringLv |
function parseDifferencePerGen(
  content: string
): Record<
  string,
  Record<string, { numeric: number; stringEquals: number; stringLv: number }>
> {
  const result: Record<
    string,
    Record<string, { numeric: number; stringEquals: number; stringLv: number }>
  > = {};
  const lines = content.split("\n");

  let currentModel: string | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      currentModel = line.replace("## ", "").trim();
      if (!result[currentModel]) result[currentModel] = {};
    } else if (currentModel && line.match(/\|\s*gen\d+\s*\|/)) {
      const parts = line.split("|").map((p) => p.trim());
      // Format: | genX | numeric | stringEquals | stringLv |
      if (parts.length >= 5) {
        const genId = parts[1];
        result[currentModel][genId] = {
          numeric: parseFloat(parts[2]) || 0,
          stringEquals: parseFloat(parts[3]) || 0,
          stringLv: parseFloat(parts[4]) || 0,
        };
      }
    }
  }

  return result;
}

// Parse per-generation instantiation stats from coverage file
// Format: ## Model -> ### genX -> Instantiation Stats table (second table)
function parseInstantiationStats(
  content: string
): Record<
  string,
  Record<string, { classes: number; attributes: number; relationships: number }>
> {
  const result: Record<
    string,
    Record<
      string,
      { classes: number; attributes: number; relationships: number }
    >
  > = {};
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
    } else if (line.startsWith("### gen")) {
      currentGen = line.replace("### ", "").trim();
      if (currentModel && !result[currentModel][currentGen]) {
        result[currentModel][currentGen] = {
          classes: 0,
          attributes: 0,
          relationships: 0,
        };
      }
      inInstantiationTable = false;
    } else if (line.includes("Instantiation Stats")) {
      inInstantiationTable = true;
    } else if (line.includes("Model Coverage")) {
      inInstantiationTable = false;
    } else if (
      currentModel &&
      currentGen &&
      inInstantiationTable &&
      line.includes("|") &&
      line.includes("**classes**")
    ) {
      const parts = line.split("|").map((p) => p.trim().replace(/\*\*/g, ""));
      // Format: | classes | total instantiated | total possible | ratio |
      if (parts.length >= 3) {
        result[currentModel][currentGen].classes = parseFloat(parts[2]) || 0;
      }
    } else if (
      currentModel &&
      currentGen &&
      inInstantiationTable &&
      line.includes("|") &&
      line.includes("**attributes**")
    ) {
      const parts = line.split("|").map((p) => p.trim().replace(/\*\*/g, ""));
      if (parts.length >= 3) {
        result[currentModel][currentGen].attributes = parseFloat(parts[2]) || 0;
      }
    } else if (
      currentModel &&
      currentGen &&
      inInstantiationTable &&
      line.includes("|") &&
      line.includes("**relationships**")
    ) {
      const parts = line.split("|").map((p) => p.trim().replace(/\*\*/g, ""));
      if (parts.length >= 3) {
        result[currentModel][currentGen].relationships =
          parseFloat(parts[2]) || 0;
      }
    }
  }

  return result;
}

// Parse grakel matrix from markdown - finds "# Kernel 2D table:" section
function parseGrakelMatrix(
  content: string
): { labels: string[]; values: number[][] } | null {
  const lines = content.split("\n");
  const tableStart = lines.findIndex((l) => l.includes("# Kernel 2D table"));

  if (tableStart === -1) return null;

  let idx = tableStart + 1;
  // Find the header row
  while (idx < lines.length && !lines[idx].includes("|")) idx++;
  if (idx >= lines.length) return null;

  // Parse header for labels: |       | gen1 | gen2 | ... |
  const headerLine = lines[idx];
  const headerParts = headerLine
    .split("|")
    .map((h) => h.trim())
    .filter((h) => h);
  const labels = headerParts.slice(0); // All parts are labels (first is empty column name)

  idx += 2; // Skip separator line

  const values: number[][] = [];
  let rowIdx = 0;
  while (idx < lines.length && lines[idx].includes("|")) {
    const cells = lines[idx]
      .split("|")
      .map((c) => c.trim())
      .filter((c) => c);
    // First cell is row label (e.g., **gen1**), rest are values
    const row: number[] = [];
    for (let i = 1; i < cells.length; i++) {
      const val = parseFloat(cells[i]);
      row.push(isNaN(val) ? 0 : val);
    }
    // Fill empty cells (upper triangular matrix) - values before rowIdx are empty
    while (row.length < labels.length) {
      row.push(0);
    }
    values.push(row);
    rowIdx++;
    idx++;
  }

  // The matrix is upper triangular with empty cells below diagonal
  // Fill in the symmetric values
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < i; j++) {
      if (values[j] && values[j][i]) {
        values[i][j] = values[j][i];
      }
    }
  }

  return { labels, values };
}

// Parse judge-results.md - table with model stats
// Format can vary - either horizontal or vertical table
function parseJudgeResults(content: string): {
  realistic: number;
  unrealistic: number;
  unknown: number;
  successRate: number;
} {
  const result = {
    realistic: 0,
    unrealistic: 0,
    unknown: 0,
    successRate: 0,
  };

  const lines = content.split("\n");

  // Check for vertical format (model-specific file):
  // | Realistic        | **20** |
  // | Unrealistic      | 10     |
  // | Success Rate     | 66.67%  |
  for (const line of lines) {
    if (line.includes("Realistic") && !line.includes("Unrealistic")) {
      const match = line.match(/\*?\*?(\d+)\*?\*?/);
      if (match) result.realistic = parseInt(match[1]) || 0;
    } else if (line.includes("Unrealistic")) {
      const match = line.match(/(\d+)/);
      if (match) result.unrealistic = parseInt(match[1]) || 0;
    } else if (line.includes("Unknown")) {
      const match = line.match(/(\d+)/);
      if (match) result.unknown = parseInt(match[1]) || 0;
    } else if (line.includes("Success Rate")) {
      const match = line.match(/([\d.]+)%?/);
      if (match) result.successRate = parseFloat(match[1]) / 100 || 0;
    }
  }

  return result;
}

// Parse judge-responses.md - structured responses per generation
// Format: sequential "# output.soil" entries (gen1, gen2, ..., gen30)
function parseJudgeResponses(
  content: string
): Record<string, { response: string; why: string }> {
  const result: Record<string, { response: string; why: string }> = {};
  const lines = content.split("\n");

  let currentGenNum = 0;
  let currentResponse = "";
  let currentWhy = "";
  let inWhy = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // New entry: # output.soil
    if (line.startsWith("# output.soil") || line.match(/^# gen\d+/)) {
      // Save previous entry
      if (currentGenNum > 0 && (currentResponse || currentWhy)) {
        result[`gen${currentGenNum}`] = {
          response: currentResponse,
          why: currentWhy.trim(),
        };
      }
      currentGenNum++;
      currentResponse = "";
      currentWhy = "";
      inWhy = false;
    }
    // Response line
    else if (line.includes("**Response**")) {
      const match = line.match(/\*\*Response\*\*:?\s*(.+)/);
      if (match) {
        currentResponse = match[1].trim();
      }
      inWhy = false;
    }
    // Why line
    else if (line.includes("**Why**")) {
      const match = line.match(/\*\*Why\*\*:?\s*(.*)/);
      if (match) {
        currentWhy = match[1].trim();
        inWhy = true;
      }
    }
    // Continue why on next lines (but not if it's a new section)
    else if (
      inWhy &&
      line.trim() &&
      !line.startsWith("#") &&
      !line.startsWith("**Response")
    ) {
      currentWhy += " " + line.trim();
    }
  }

  // Save last entry
  if (currentGenNum > 0 && (currentResponse || currentWhy)) {
    result[`gen${currentGenNum}`] = {
      response: currentResponse,
      why: currentWhy.trim(),
    };
  }

  return result;
}

// Parse metrics.md from a model folder (Simple format)
function parseMetricsFile(content: string): Record<string, any> {
  const result: Record<string, any> = {};
  const lines = content.split("\n");

  let currentGen: string | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Generation header: # Generation 1 or # Generation 2 summary
    if (line.match(/^# Generation \d+/)) {
      const match = line.match(/Generation (\d+)/);
      if (match) {
        currentGen = `gen${match[1]}`;
        if (!result[currentGen]) {
          result[currentGen] = {
            syntaxErrors: 0,
            multiplicitiesErrors: 0,
            invariantsErrors: 0,
          };
        }
      }
    }
    // Error row in summary table
    else if (currentGen && line.includes("| Syntax Errors |")) {
      const parts = line.split("|").map((p) => p.trim());
      // Format: | Syntax Errors | count | total | percentage |
      if (parts.length >= 3) {
        result[currentGen].syntaxErrors = parseInt(parts[2]) || 0;
      }
    } else if (currentGen && line.includes("| Multiplicities Errors |")) {
      const parts = line.split("|").map((p) => p.trim());
      if (parts.length >= 3) {
        result[currentGen].multiplicitiesErrors = parseInt(parts[2]) || 0;
      }
    } else if (currentGen && line.includes("| Invariants Errors |")) {
      const parts = line.split("|").map((p) => p.trim());
      if (parts.length >= 3) {
        result[currentGen].invariantsErrors = parseInt(parts[2]) || 0;
      }
    }
  }

  return result;
}

// Parse CoT metrics.md - format: # Generation N -> ## Category X -> metrics table
// Returns: { gen1: { baseline: { syntax, mult, inv }, ... }, ... }
function parseCotMetricsFile(
  content: string
): Record<string, Record<string, any>> {
  const result: Record<string, Record<string, any>> = {};
  const lines = content.split("\n");

  let currentGen: string | null = null;
  let currentCategory: string | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Generation header: # Generation 1
    if (line.match(/^# Generation \d+/)) {
      const match = line.match(/Generation (\d+)/);
      if (match) {
        currentGen = `gen${match[1]}`;
        if (!result[currentGen]) result[currentGen] = {};
        currentCategory = null;
      }
    }
    // Category header: ## Category baseline
    else if (line.match(/^## Category /i)) {
      const cat = line
        .replace(/^## Category /i, "")
        .trim()
        .toLowerCase();
      if (currentGen && COT_CATEGORIES.includes(cat)) {
        currentCategory = cat;
        if (!result[currentGen][currentCategory]) {
          result[currentGen][currentCategory] = {
            syntaxErrors: 0,
            multiplicitiesErrors: 0,
            invariantsErrors: 0,
          };
        }
      }
    }
    // Metrics rows
    else if (
      currentGen &&
      currentCategory &&
      line.includes("| Syntax Errors |")
    ) {
      const parts = line.split("|").map((p) => p.trim());
      if (parts.length >= 3) {
        result[currentGen][currentCategory].syntaxErrors =
          parseInt(parts[2]) || 0;
      }
    } else if (
      currentGen &&
      currentCategory &&
      line.includes("| Multiplicities Errors |")
    ) {
      const parts = line.split("|").map((p) => p.trim());
      if (parts.length >= 3) {
        result[currentGen][currentCategory].multiplicitiesErrors =
          parseInt(parts[2]) || 0;
      }
    } else if (
      currentGen &&
      currentCategory &&
      line.includes("| Invariants Errors |")
    ) {
      const parts = line.split("|").map((p) => p.trim());
      if (parts.length >= 3) {
        result[currentGen][currentCategory].invariantsErrors =
          parseInt(parts[2]) || 0;
      }
    }
  }

  return result;
}

// Find the timestamp folder for a model (first subfolder)
function findTimestampFolder(
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

// Check if file exists
function fileExists(filePath: string): boolean {
  return fs.existsSync(filePath);
}

// Read file content safely
function readFileSafe(filePath: string): string | null {
  try {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf-8");
    }
  } catch (e) {
    console.error(`Error reading ${filePath}:`, e);
  }
  return null;
}

// Main preprocessing function
async function preprocess() {
  console.log("Starting preprocessing...");
  console.log(`Data directory: ${DATA_DIR}`);

  ensureDir(OUTPUT_DIR);
  ensureDir(path.join(OUTPUT_DIR, "models"));
  ensureDir(path.join(OUTPUT_DIR, "generations"));

  // Read global files
  console.log("Reading global files...");

  const priceContent = readFileSafe(path.join(DATA_DIR, "price.md"));
  const prices = priceContent ? parsePriceFile(priceContent) : {};
  console.log("  Prices parsed for:", Object.keys(prices));

  const simpleCoverageContent = readFileSafe(
    path.join(DATA_DIR, "simpleCoverage.md")
  );
  const simpleCoverage = simpleCoverageContent
    ? parseSimpleCoverageFile(simpleCoverageContent)
    : {};
  console.log("  Simple coverage parsed for:", Object.keys(simpleCoverage));

  const cotCoverageContent = readFileSafe(
    path.join(DATA_DIR, "cotCoverage.md")
  );
  const cotCoverage = cotCoverageContent
    ? parseCotCoverageFile(cotCoverageContent)
    : {};
  console.log("  CoT coverage parsed for:", Object.keys(cotCoverage));

  const simpleDiffContent = readFileSafe(
    path.join(DATA_DIR, "simpleDifference.md")
  );
  const simpleDiff = simpleDiffContent
    ? parseDifferenceFile(simpleDiffContent)
    : {};
  console.log("  Simple difference parsed for:", Object.keys(simpleDiff));

  const cotDiffContent = readFileSafe(path.join(DATA_DIR, "cotDifference.md"));
  const cotDiff = cotDiffContent ? parseDifferenceFile(cotDiffContent) : {};
  console.log("  CoT difference parsed for:", Object.keys(cotDiff));

  // Parse per-generation diversity data
  const simpleDiffPerGen = simpleDiffContent
    ? parseDifferencePerGen(simpleDiffContent)
    : {};
  console.log(
    "  Simple per-gen diversity parsed for:",
    Object.keys(simpleDiffPerGen)
  );

  const cotDiffPerGen = cotDiffContent
    ? parseDifferencePerGen(cotDiffContent)
    : {};
  console.log(
    "  CoT per-gen diversity parsed for:",
    Object.keys(cotDiffPerGen)
  );

  // Parse per-generation instantiation stats
  const simpleInstantiation = simpleCoverageContent
    ? parseInstantiationStats(simpleCoverageContent)
    : {};
  console.log(
    "  Simple instantiation parsed for:",
    Object.keys(simpleInstantiation)
  );

  // Process each model
  const dashboardModels: any[] = [];
  let totalSimplePrice = 0;
  let totalCotPrice = 0;

  for (const modelName of MODELS) {
    console.log(`\nProcessing ${modelName}...`);
    const modelLower = modelName.toLowerCase();

    // Find timestamp folders
    const simpleTimestamp = findTimestampFolder(
      path.join(DATA_DIR, "Simple"),
      modelName
    );
    const cotTimestamp = findTimestampFolder(
      path.join(DATA_DIR, "CoT"),
      modelName
    );

    const simpleDir = simpleTimestamp
      ? path.join(DATA_DIR, "Simple", modelName, simpleTimestamp)
      : null;
    const cotDir = cotTimestamp
      ? path.join(DATA_DIR, "CoT", modelName, cotTimestamp)
      : null;

    console.log(`  Simple dir: ${simpleDir}`);
    console.log(`  CoT dir: ${cotDir}`);

    // Parse metrics from model folders
    let simpleMetrics: Record<string, any> = {};
    if (simpleDir) {
      const metricsContent = readFileSafe(path.join(simpleDir, "metrics.md"));
      if (metricsContent) {
        simpleMetrics = parseMetricsFile(metricsContent);
        console.log(
          `  Simple metrics parsed: ${
            Object.keys(simpleMetrics).length
          } generations`
        );
      }
    }

    let cotMetrics: Record<string, Record<string, any>> = {};
    if (cotDir) {
      const metricsContent = readFileSafe(path.join(cotDir, "metrics.md"));
      if (metricsContent) {
        cotMetrics = parseCotMetricsFile(metricsContent);
        console.log(
          `  CoT metrics parsed: ${Object.keys(cotMetrics).length} generations`
        );
      }
    }

    // Parse grakel matrices
    let simpleGrakel = null;
    if (simpleDir) {
      const grakelContent = readFileSafe(path.join(simpleDir, "grakel.md"));
      if (grakelContent) {
        simpleGrakel = parseGrakelMatrix(grakelContent);
        console.log(
          `  Simple grakel parsed: ${
            simpleGrakel?.labels.length || 0
          } generations`
        );
      }
    }

    let cotGrakel = null;
    if (cotDir) {
      const grakelContent = readFileSafe(path.join(cotDir, "grakel.md"));
      if (grakelContent) {
        cotGrakel = parseGrakelMatrix(grakelContent);
        console.log(
          `  CoT grakel parsed: ${cotGrakel?.labels.length || 0} generations`
        );
      }
    }

    // Get price info
    const modelPrice = prices[modelName] || {
      simple: { price: 0 },
      cot: { price: 0 },
    };
    totalSimplePrice += modelPrice.simple?.price || 0;
    totalCotPrice += modelPrice.cot?.price || 0;

    // Get coverage data
    const simpleCov = simpleCoverage[modelName] || {};
    const cotCov = cotCoverage[modelName] || {};

    // Calculate average coverage for Simple (30 generations)
    let simpleAvgCoverage = { classes: 0, attributes: 0, relationships: 0 };
    const simpleGens = Object.keys(simpleCov).filter((k) =>
      k.startsWith("gen")
    );
    if (simpleGens.length > 0) {
      simpleGens.forEach((gen) => {
        simpleAvgCoverage.classes += simpleCov[gen]?.classes || 0;
        simpleAvgCoverage.attributes += simpleCov[gen]?.attributes || 0;
        simpleAvgCoverage.relationships += simpleCov[gen]?.relationships || 0;
      });
      simpleAvgCoverage.classes /= simpleGens.length;
      simpleAvgCoverage.attributes /= simpleGens.length;
      simpleAvgCoverage.relationships /= simpleGens.length;
    }

    // Calculate average coverage for CoT (6 generations × 5 categories)
    let cotAvgCoverage = { classes: 0, attributes: 0, relationships: 0 };
    const cotGens = Object.keys(cotCov).filter((k) => k.startsWith("gen"));
    let cotCovCount = 0;
    cotGens.forEach((gen) => {
      COT_CATEGORIES.forEach((cat) => {
        if (cotCov[gen]?.[cat]) {
          cotAvgCoverage.classes += cotCov[gen][cat].classes || 0;
          cotAvgCoverage.attributes += cotCov[gen][cat].attributes || 0;
          cotAvgCoverage.relationships += cotCov[gen][cat].relationships || 0;
          cotCovCount++;
        }
      });
    });
    if (cotCovCount > 0) {
      cotAvgCoverage.classes /= cotCovCount;
      cotAvgCoverage.attributes /= cotCovCount;
      cotAvgCoverage.relationships /= cotCovCount;
    }

    // Get diversity metrics
    const simpleDiv = simpleDiff[modelName] || {
      numeric: 0,
      stringEquals: 0,
      stringLv: 0,
    };
    const cotDiv = cotDiff[modelName] || {
      numeric: 0,
      stringEquals: 0,
      stringLv: 0,
    };

    // Parse judge files from model folder
    let judgeResult = {
      realistic: 0,
      unrealistic: 0,
      unknown: 0,
      successRate: 0,
    };
    let judgeResponses: Record<string, { response: string; why: string }> = {};

    if (simpleDir) {
      const judgeResultsContent = readFileSafe(
        path.join(simpleDir, "judge-results.md")
      );
      if (judgeResultsContent) {
        judgeResult = parseJudgeResults(judgeResultsContent);
        console.log(
          `  Judge results parsed: ${judgeResult.realistic} realistic, ${judgeResult.unrealistic} unrealistic`
        );
      }

      const judgeResponsesContent = readFileSafe(
        path.join(simpleDir, "judge-responses.md")
      );
      if (judgeResponsesContent) {
        judgeResponses = parseJudgeResponses(judgeResponsesContent);
        console.log(
          `  Judge responses parsed: ${
            Object.keys(judgeResponses).length
          } generations`
        );
      }
    }

    // Build simple generations data
    const simpleGenerations: any[] = [];
    for (let i = 1; i <= 30; i++) {
      const genId = `gen${i}`;
      const genMetrics = simpleMetrics[genId] || {
        syntaxErrors: 0,
        multiplicitiesErrors: 0,
        invariantsErrors: 0,
      };
      const genCoverage = simpleCov[genId] || {};
      const judgeResp = judgeResponses[genId];

      // Get per-generation diversity
      const genDiversity = simpleDiffPerGen[modelName]?.[genId] || {
        numeric: 0,
        stringEquals: 0,
        stringLv: 0,
      };

      // Get per-generation instantiation stats
      const genInstantiation = simpleInstantiation[modelName]?.[genId] || {
        classes: 0,
        attributes: 0,
        relationships: 0,
      };

      // Check if output files exist
      const pdfExists = simpleDir
        ? fileExists(path.join(simpleDir, genId, "output.pdf"))
        : false;
      const soilPath = simpleDir
        ? path.join(simpleDir, genId, "output.soil")
        : null;
      const soilContent = soilPath ? readFileSafe(soilPath) : null;

      simpleGenerations.push({
        id: genId,
        metrics: {
          syntaxErrors: genMetrics.syntaxErrors || 0,
          multiplicitiesErrors: genMetrics.multiplicitiesErrors || 0,
          invariantsErrors: genMetrics.invariantsErrors || 0,
          coverage: {
            classes: genCoverage.classes || 0,
            attributes: genCoverage.attributes || 0,
            relationships: genCoverage.relationships || 0,
          },
          instantiation: {
            classes: genInstantiation.classes || 0,
            attributes: genInstantiation.attributes || 0,
            relationships: genInstantiation.relationships || 0,
          },
          diversity: {
            numeric: genDiversity.numeric || 0,
            stringEquals: genDiversity.stringEquals || 0,
            stringLv: genDiversity.stringLv || 0,
          },
        },
        judge: judgeResp || null,
        pdfAvailable: pdfExists,
        code: soilContent,
      });
    }

    // Build CoT generations data
    const cotGenerations: any[] = [];
    for (let i = 1; i <= 6; i++) {
      const genId = `gen${i}`;
      const genCov = cotCov[genId] || {};
      const genMetricsCot = cotMetrics[genId] || {};

      const categories = COT_CATEGORIES.map((cat) => {
        const catCov = genCov[cat] || {};
        const catMetrics = genMetricsCot[cat] || {};
        const pdfPath = cotDir ? path.join(cotDir, genId, `${cat}.pdf`) : null;
        const soilPath = cotDir
          ? path.join(cotDir, genId, `${cat}.soil`)
          : null;

        return {
          category: cat,
          metrics: {
            syntaxErrors: catMetrics.syntaxErrors || 0,
            multiplicitiesErrors: catMetrics.multiplicitiesErrors || 0,
            invariantsErrors: catMetrics.invariantsErrors || 0,
            coverage: {
              classes: catCov.classes || 0,
              attributes: catCov.attributes || 0,
              relationships: catCov.relationships || 0,
            },
            instantiation: {
              classes: catCov.instClasses || 0,
              attributes: catCov.instAttributes || 0,
              relationships: catCov.instRelationships || 0,
            },
          },
          pdfAvailable: pdfPath ? fileExists(pdfPath) : false,
          code: soilPath ? readFileSafe(soilPath) : null,
        };
      });

      cotGenerations.push({
        id: genId,
        categories,
      });
    }

    // Calculate syntax success rates
    let simpleSyntaxSuccess = 0;
    let simpleSyntaxCount = 0;
    simpleGenerations.forEach((g) => {
      if (g.metrics.syntaxErrors === 0) simpleSyntaxSuccess++;
      simpleSyntaxCount++;
    });
    const simpleSyntaxRate =
      simpleSyntaxCount > 0 ? simpleSyntaxSuccess / simpleSyntaxCount : 0;

    // Build model data
    const modelData = {
      name: modelName,
      diagramPdf: `/data/prompts/${modelLower}/diagram.pdf`,
      simple: {
        price: modelPrice.simple || { price: 0, tokenInput: 0, tokenOutput: 0 },
        coverage: simpleAvgCoverage,
        diversity: simpleDiv,
        judge: judgeResult,
        grakel: simpleGrakel,
        generations: simpleGenerations,
      },
      cot: {
        price: modelPrice.cot || { price: 0, tokenInput: 0, tokenOutput: 0 },
        coverage: cotAvgCoverage,
        diversity: cotDiv,
        judge: null, // No judge for CoT in current data
        grakel: cotGrakel,
        generations: cotGenerations,
      },
    };

    // Write model file
    const modelOutputPath = path.join(
      OUTPUT_DIR,
      "models",
      `${modelLower}.json`
    );
    fs.writeFileSync(modelOutputPath, JSON.stringify(modelData, null, 2));
    console.log(`  Written: ${modelOutputPath}`);

    // Create generation files
    ensureDir(path.join(OUTPUT_DIR, "generations", modelLower));

    for (const gen of simpleGenerations) {
      const genPath = path.join(
        OUTPUT_DIR,
        "generations",
        modelLower,
        `simple-${gen.id}.json`
      );
      fs.writeFileSync(genPath, JSON.stringify(gen, null, 2));
    }

    for (const gen of cotGenerations) {
      const genPath = path.join(
        OUTPUT_DIR,
        "generations",
        modelLower,
        `cot-${gen.id}.json`
      );
      fs.writeFileSync(genPath, JSON.stringify(gen, null, 2));
    }

    // Add to dashboard
    const avgSimpleCov =
      (simpleAvgCoverage.classes +
        simpleAvgCoverage.attributes +
        simpleAvgCoverage.relationships) /
      3;
    const avgCotCov =
      (cotAvgCoverage.classes +
        cotAvgCoverage.attributes +
        cotAvgCoverage.relationships) /
      3;

    // Calculate syntax/multiplicities/invariants rates for simple generations
    let simpleMultiplicitiesSuccess = 0;
    let simpleInvariantsSuccess = 0;
    simpleGenerations.forEach((g) => {
      if (g.metrics.multiplicitiesErrors === 0) simpleMultiplicitiesSuccess++;
      if (g.metrics.invariantsErrors === 0) simpleInvariantsSuccess++;
    });
    const simpleMultiplicitiesRate =
      simpleSyntaxCount > 0
        ? simpleMultiplicitiesSuccess / simpleSyntaxCount
        : 0;
    const simpleInvariantsRate =
      simpleSyntaxCount > 0 ? simpleInvariantsSuccess / simpleSyntaxCount : 0;

    dashboardModels.push({
      name: modelName,
      simple: {
        price: modelPrice.simple?.price || 0,
        syntax: simpleSyntaxRate,
        multiplicities: simpleMultiplicitiesRate,
        invariants: simpleInvariantsRate,
        coverage: {
          classes: simpleAvgCoverage.classes || 0,
          attributes: simpleAvgCoverage.attributes || 0,
          relationships: simpleAvgCoverage.relationships || 0,
        },
        realism: judgeResult.successRate || 0,
        diversity: {
          numeric: simpleDiv.numeric || 0,
          stringEquals: simpleDiv.stringEquals || 0,
          stringLv: simpleDiv.stringLv || 0,
        },
      },
      cot: {
        price: modelPrice.cot?.price || 0,
        syntax: 0.9, // TODO: calculate from actual data
        multiplicities: 0.9, // TODO: calculate from actual data
        invariants: 0.9, // TODO: calculate from actual data
        coverage: {
          classes: cotAvgCoverage.classes || 0,
          attributes: cotAvgCoverage.attributes || 0,
          relationships: cotAvgCoverage.relationships || 0,
        },
        realism: 0, // No judge for CoT
        diversity: {
          numeric: cotDiv.numeric || 0,
          stringEquals: cotDiv.stringEquals || 0,
          stringLv: cotDiv.stringLv || 0,
        },
      },
    });
  }

  // Write dashboard data
  const n = dashboardModels.length;
  const dashboardData = {
    totals: {
      simple: {
        price: { price: totalSimplePrice, tokenInput: 0, tokenOutput: 0 },
        syntax:
          dashboardModels.reduce((acc, m) => acc + m.simple.syntax, 0) / n,
        multiplicities:
          dashboardModels.reduce((acc, m) => acc + m.simple.multiplicities, 0) /
          n,
        invariants:
          dashboardModels.reduce((acc, m) => acc + m.simple.invariants, 0) / n,
        coverage: {
          classes:
            dashboardModels.reduce(
              (acc, m) => acc + m.simple.coverage.classes,
              0
            ) / n,
          attributes:
            dashboardModels.reduce(
              (acc, m) => acc + m.simple.coverage.attributes,
              0
            ) / n,
          relationships:
            dashboardModels.reduce(
              (acc, m) => acc + m.simple.coverage.relationships,
              0
            ) / n,
        },
        realism:
          dashboardModels.reduce((acc, m) => acc + m.simple.realism, 0) / n,
        diversity: {
          numeric:
            dashboardModels.reduce(
              (acc, m) => acc + m.simple.diversity.numeric,
              0
            ) / n,
          stringEquals:
            dashboardModels.reduce(
              (acc, m) => acc + m.simple.diversity.stringEquals,
              0
            ) / n,
          stringLv:
            dashboardModels.reduce(
              (acc, m) => acc + m.simple.diversity.stringLv,
              0
            ) / n,
        },
      },
      cot: {
        price: { price: totalCotPrice, tokenInput: 0, tokenOutput: 0 },
        syntax: dashboardModels.reduce((acc, m) => acc + m.cot.syntax, 0) / n,
        multiplicities:
          dashboardModels.reduce((acc, m) => acc + m.cot.multiplicities, 0) / n,
        invariants:
          dashboardModels.reduce((acc, m) => acc + m.cot.invariants, 0) / n,
        coverage: {
          classes:
            dashboardModels.reduce(
              (acc, m) => acc + m.cot.coverage.classes,
              0
            ) / n,
          attributes:
            dashboardModels.reduce(
              (acc, m) => acc + m.cot.coverage.attributes,
              0
            ) / n,
          relationships:
            dashboardModels.reduce(
              (acc, m) => acc + m.cot.coverage.relationships,
              0
            ) / n,
        },
        realism: dashboardModels.reduce((acc, m) => acc + m.cot.realism, 0) / n,
        diversity: {
          numeric:
            dashboardModels.reduce(
              (acc, m) => acc + m.cot.diversity.numeric,
              0
            ) / n,
          stringEquals:
            dashboardModels.reduce(
              (acc, m) => acc + m.cot.diversity.stringEquals,
              0
            ) / n,
          stringLv:
            dashboardModels.reduce(
              (acc, m) => acc + m.cot.diversity.stringLv,
              0
            ) / n,
        },
      },
    },
    models: dashboardModels,
  };

  const dashboardPath = path.join(OUTPUT_DIR, "dashboard.json");
  fs.writeFileSync(dashboardPath, JSON.stringify(dashboardData, null, 2));
  console.log(`\nWritten: ${dashboardPath}`);

  console.log("\n✅ Preprocessing complete!");
  console.log(`Output written to ${OUTPUT_DIR}`);
}

preprocess().catch(console.error);
