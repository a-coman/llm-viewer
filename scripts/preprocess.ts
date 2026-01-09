/**
 * Data Preprocessing Script
 *
 * Transforms raw markdown evaluation data into structured JSON for the Astro frontend.
 * Uses modular parsers from ./lib/parsers for clean separation of concerns.
 *
 * Data flow:
 *   src/data/dataset/GPT4O-exp1/ (raw markdown)
 *   → src/data/processed/ (JSON for frontend)
 *
 * Outputs:
 *   - dashboard.json: Summary data for main dashboard
 *   - models/<model>.json: Detailed data per model
 *   - generations/<model>/<type>/<gen>.json: Per-generation details (optional)
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

// Import types and utilities
import {
  type PriceInfo,
  type CoverageMetrics,
  type DiversityMetrics,
  type ValidationErrors,
  type JudgeResult,
  type JudgeResponse,
  type ShannonEntry,
  type GrakelData,
  type TokenCounts,
  type Overconstraints,
  type DomainValidation,
  type UncoveredData,
  type ModelData,
  type ModelSummary,
  type DashboardData,
  type DashboardModel,
  type SimpleGeneration,
  type CotGeneration,
  type CotCategory,
  type CotCategoryName,
  MODELS,
  COT_CATEGORIES,
  SIMPLE_GEN_COUNT,
  COT_GEN_COUNT,
} from "./lib/types.js";

import {
  ensureDir,
  readFileSafe,
  findTimestampFolder,
  writeJsonFile,
  copyFileIfExists,
  fileExists,
  average,
  sum,
  createNullCoverageMetrics,
  createNullDiversityMetrics,
  createNullValidationErrors,
  createNullPriceInfo,
  createNullJudgeResult,
  createNullTokenCounts,
  createNullOverconstraints,
} from "./lib/utils.js";

// Import all parsers
import {
  parsePrice,
  parseTotalPrices,
  parseSimpleCoverage,
  parseSimpleInstantiation,
  parseCotCoverage,
  parseSimpleDifference,
  parseSimpleDifferencePerGen,
  parseCotDifference,
  parseCotDifferenceSummary,
  parseCombinedDifference,
  parseSimpleShannon,
  parseCotShannon,
  parseSimpleMetrics,
  parseCotMetrics,
  parseGrakel,
  parseJudgeResults,
  parseJudgeResponses,
  parseGlobalJudgeResults,
  parseGlobalJudgeResponses,
  parseSimpleLogs,
  parseCotLogs,
  getTotalTokensSimple,
  getTotalTokensCot,
} from "./lib/parsers/index.js";

// ESM __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================================================
// Configuration
// ============================================================================

const DATA_DIR = path.join(__dirname, "../src/data/dataset/GPT4O-exp1");
const OUTPUT_DIR = path.join(__dirname, "../src/data/processed");
const PUBLIC_DATASET_DIR = path.join(
  __dirname,
  "../public/data/dataset/GPT4O-exp1"
);

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Calculate success rate for validation (errors/total → success rate 0-1)
 */
function calculateSuccessRate(
  errors: number | null,
  total: number | null
): number | null {
  if (errors === null || total === null || total === 0) return null;
  return 1 - errors / total;
}

/**
 * Average multiple CoverageMetrics objects
 */
function averageCoverageMetrics(metrics: CoverageMetrics[]): CoverageMetrics {
  if (metrics.length === 0) return createNullCoverageMetrics();
  return {
    classes: average(metrics.map((m) => m.classes)),
    attributes: average(metrics.map((m) => m.attributes)),
    relationships: average(metrics.map((m) => m.relationships)),
  };
}

/**
 * Average multiple DiversityMetrics objects
 */
function averageDiversityMetrics(
  metrics: DiversityMetrics[]
): DiversityMetrics {
  if (metrics.length === 0) return createNullDiversityMetrics();
  return {
    numeric: average(metrics.map((m) => m.numeric)),
    stringEquals: average(metrics.map((m) => m.stringEquals)),
    stringLv: average(metrics.map((m) => m.stringLv)),
  };
}

/**
 * Calculate average validation success rates across multiple errors objects
 */
function calculateAvgValidation(errors: ValidationErrors[]): {
  syntax: number | null;
  multiplicities: number | null;
  invariants: number | null;
} {
  const syntaxRates = errors.map((e) =>
    calculateSuccessRate(e.syntaxErrors, e.syntaxTotal)
  );
  const multRates = errors.map((e) =>
    calculateSuccessRate(e.multiplicitiesErrors, e.multiplicitiesTotal)
  );
  const invRates = errors.map((e) =>
    calculateSuccessRate(e.invariantsErrors, e.invariantsTotal)
  );

  return {
    syntax: average(syntaxRates),
    multiplicities: average(multRates),
    invariants: average(invRates),
  };
}

/**
 * Calculate average evenness from Shannon entries
 */
function calculateAvgEvennessAll(
  shannonEntries: ShannonEntry[][]
): number | null {
  const evennessValues: (number | null)[] = [];
  for (const entries of shannonEntries) {
    for (const entry of entries) {
      if (entry.entropy.evennessAll !== null) {
        evennessValues.push(entry.entropy.evennessAll);
      }
    }
  }
  return average(evennessValues);
}

// ============================================================================
// Main Processing
// ============================================================================

async function preprocess(): Promise<void> {
  console.log("🔄 Starting preprocessing...\n");

  // Ensure output directories exist
  ensureDir(OUTPUT_DIR);
  ensureDir(path.join(OUTPUT_DIR, "models"));
  ensureDir(path.join(OUTPUT_DIR, "generations"));

  // ========================================================================
  // Step 1: Parse Global Files
  // ========================================================================
  console.log("📊 Parsing global files...");

  // Parse price.md
  const priceContent = readFileSafe(path.join(DATA_DIR, "price.md"));
  const prices = priceContent ? parsePrice(priceContent) : {};
  const totalPrices = priceContent
    ? parseTotalPrices(priceContent)
    : { simple: createNullPriceInfo(), cot: createNullPriceInfo() };
  console.log(`  Parsed prices for ${Object.keys(prices).length} models`);

  // Parse Simple global files
  const simpleDir = path.join(DATA_DIR, "Simple");

  const simpleCoverageContent = readFileSafe(
    path.join(DATA_DIR, "simpleCoverage.md")
  );
  const simpleCoverage = simpleCoverageContent
    ? parseSimpleCoverage(simpleCoverageContent)
    : {};
  const simpleInstantiation = simpleCoverageContent
    ? parseSimpleInstantiation(simpleCoverageContent)
    : {};
  console.log(
    `  Simple coverage: ${Object.keys(simpleCoverage).length} models`
  );

  const simpleDiffContent = readFileSafe(
    path.join(DATA_DIR, "simpleDifference.md")
  );
  const simpleDiversity = simpleDiffContent
    ? parseSimpleDifference(simpleDiffContent)
    : {};
  const simpleDiversityPerGen = simpleDiffContent
    ? parseSimpleDifferencePerGen(simpleDiffContent)
    : {};
  console.log(
    `  Simple diversity: ${Object.keys(simpleDiversity).length} models`
  );

  const simpleShannonContent = readFileSafe(
    path.join(DATA_DIR, "simpleShannon.md")
  );
  const simpleShannon = simpleShannonContent
    ? parseSimpleShannon(simpleShannonContent)
    : {};
  console.log(`  Simple shannon: ${Object.keys(simpleShannon).length} models`);

  // Parse CoT global files
  const cotDir = path.join(DATA_DIR, "CoT");

  const cotCoverageContent = readFileSafe(
    path.join(DATA_DIR, "cotCoverage.md")
  );
  const cotCoverage = cotCoverageContent
    ? parseCotCoverage(cotCoverageContent)
    : {};
  console.log(`  CoT coverage: ${Object.keys(cotCoverage).length} models`);

  const cotDiffContent = readFileSafe(path.join(DATA_DIR, "cotDifference.md"));
  const cotDiversity = cotDiffContent ? parseCotDifference(cotDiffContent) : {};
  const cotDiversitySummary = cotDiffContent
    ? parseCotDifferenceSummary(cotDiffContent)
    : {};
  console.log(`  CoT diversity: ${Object.keys(cotDiversity).length} models`);

  const cotShannonContent = readFileSafe(path.join(DATA_DIR, "cotShannon.md"));
  const cotShannon = cotShannonContent
    ? parseCotShannon(cotShannonContent)
    : {};
  console.log(`  CoT shannon: ${Object.keys(cotShannon).length} models`);

  // Parse combined difference (both Simple and CoT together)
  const combinedDiffContent = readFileSafe(
    path.join(DATA_DIR, "combinedDifference.md")
  );
  const combinedDiversity = combinedDiffContent
    ? parseCombinedDifference(combinedDiffContent)
    : {};
  console.log(
    `  Combined diversity: ${Object.keys(combinedDiversity).length} models`
  );

  // Parse global judge files (all models in one file)
  const globalJudgeResultsContent = readFileSafe(
    path.join(simpleDir, "judge-results.md")
  );
  const globalJudgeResults = globalJudgeResultsContent
    ? parseGlobalJudgeResults(globalJudgeResultsContent)
    : {};
  console.log(
    `  Global judge results: ${Object.keys(globalJudgeResults).length} models`
  );

  const globalJudgeResponsesContent = readFileSafe(
    path.join(simpleDir, "judge-responses.md")
  );
  const globalJudgeResponses = globalJudgeResponsesContent
    ? parseGlobalJudgeResponses(globalJudgeResponsesContent)
    : {};
  console.log(
    `  Global judge responses: ${
      Object.keys(globalJudgeResponses).length
    } models`
  );

  // ========================================================================
  // Step 2: Process Each Model
  // ========================================================================
  console.log("\n📁 Processing models...");

  const modelDataList: ModelData[] = [];
  const dashboardModels: DashboardModel[] = [];

  for (const modelName of MODELS) {
    console.log(`\n  Processing ${modelName}...`);

    // Find timestamp folders
    const simpleTimestamp = findTimestampFolder(simpleDir, modelName);
    const cotTimestamp = findTimestampFolder(cotDir, modelName);

    const simpleModelDir = simpleTimestamp
      ? path.join(simpleDir, modelName, simpleTimestamp)
      : null;
    const cotModelDir = cotTimestamp
      ? path.join(cotDir, modelName, cotTimestamp)
      : null;

    // Get price info
    const modelPrices = prices[modelName] || { simple: null, cot: null };

    // ----------------------------------------------------------------------
    // Parse Simple model files
    // ----------------------------------------------------------------------

    // Parse metrics.md for validation errors
    const simpleMetricsContent = simpleModelDir
      ? readFileSafe(path.join(simpleModelDir, "metrics.md"))
      : null;
    const simpleMetrics = simpleMetricsContent
      ? parseSimpleMetrics(simpleMetricsContent)
      : {};

    // Parse grakel.md for graph similarity
    const simpleGrakelContent = simpleModelDir
      ? readFileSafe(path.join(simpleModelDir, "grakel.md"))
      : null;
    const simpleGrakel: GrakelData | null = simpleGrakelContent
      ? parseGrakel(simpleGrakelContent)
      : null;

    // Get judge data from global files (already parsed above)
    const simpleJudgeResult: JudgeResult =
      globalJudgeResults[modelName] ?? createNullJudgeResult();
    const simpleJudgeResponses = globalJudgeResponses[modelName] ?? {};

    // Parse logs.md for token counts
    const simpleLogsContent = simpleModelDir
      ? readFileSafe(path.join(simpleModelDir, "logs.md"))
      : null;
    const simpleLogs = simpleLogsContent
      ? parseSimpleLogs(simpleLogsContent)
      : {};

    // ----------------------------------------------------------------------
    // Parse CoT model files
    // ----------------------------------------------------------------------

    const cotMetricsContent = cotModelDir
      ? readFileSafe(path.join(cotModelDir, "metrics.md"))
      : null;
    const cotMetrics = cotMetricsContent
      ? parseCotMetrics(cotMetricsContent)
      : {};

    const cotGrakelContent = cotModelDir
      ? readFileSafe(path.join(cotModelDir, "grakel.md"))
      : null;
    const cotGrakel: GrakelData | null = cotGrakelContent
      ? parseGrakel(cotGrakelContent)
      : null;

    const cotLogsContent = cotModelDir
      ? readFileSafe(path.join(cotModelDir, "logs.md"))
      : null;
    const cotLogs = cotLogsContent ? parseCotLogs(cotLogsContent) : {};

    // ----------------------------------------------------------------------
    // Build Simple generations
    // ----------------------------------------------------------------------
    const simpleGenerations: SimpleGeneration[] = [];
    const simpleAllErrors: ValidationErrors[] = [];
    const simpleAllCoverage: CoverageMetrics[] = [];
    const simpleAllInstantiation: CoverageMetrics[] = [];
    const simpleAllShannon: ShannonEntry[][] = [];

    for (let i = 1; i <= SIMPLE_GEN_COUNT; i++) {
      const genId = `gen${i}`;

      // Get metrics for this generation
      const genMetrics = simpleMetrics[genId];
      const errors = genMetrics?.errors ?? createNullValidationErrors();
      simpleAllErrors.push(errors);

      // Get coverage/instantiation from global files
      const coverage =
        simpleCoverage[modelName]?.[genId] ?? createNullCoverageMetrics();
      const instantiation =
        simpleInstantiation[modelName]?.[genId] ?? createNullCoverageMetrics();
      simpleAllCoverage.push(coverage);
      simpleAllInstantiation.push(instantiation);

      // Get diversity from global file
      const diversity =
        simpleDiversityPerGen[modelName]?.[genId] ??
        createNullDiversityMetrics();

      // Get shannon for this generation
      const shannon = simpleShannon[modelName]?.[genId] ?? null;
      if (shannon) simpleAllShannon.push(shannon);

      // Get judge response
      const judge = simpleJudgeResponses[genId] ?? null;

      // Get token counts
      const tokenCounts = simpleLogs[genId] ?? null;

      // Check for output files
      const pdfPath = simpleModelDir
        ? path.join(simpleModelDir, genId, "output.pdf")
        : null;
      const pdfExists = pdfPath ? fileExists(pdfPath) : false;
      const pdfUrl =
        simpleTimestamp && pdfExists
          ? `/data/dataset/GPT4O-exp1/Simple/${modelName}/${simpleTimestamp}/${genId}/output.pdf`
          : null;

      const soilPath = simpleModelDir
        ? path.join(simpleModelDir, genId, "output.soil")
        : null;
      const code = soilPath ? readFileSafe(soilPath) : null;

      simpleGenerations.push({
        id: genId,
        metrics: {
          errors,
          coverage,
          instantiation,
          diversity,
          domainValidation: genMetrics?.domainValidation ?? null,
        },
        shannon,
        judge,
        tokenCounts,
        pdfAvailable: pdfExists,
        pdfUrl,
        code,
      });
    }

    // Calculate Simple summary
    const simpleValidation = calculateAvgValidation(simpleAllErrors);
    const simpleSummary: ModelSummary = {
      price: modelPrices.simple ?? createNullPriceInfo(),
      syntax: simpleValidation.syntax,
      multiplicities: simpleValidation.multiplicities,
      invariants: simpleValidation.invariants,
      coverage: averageCoverageMetrics(simpleAllCoverage),
      instantiation: averageCoverageMetrics(simpleAllInstantiation),
      diversity: simpleDiversity[modelName] ?? createNullDiversityMetrics(),
      realism: simpleJudgeResult.successRate,
      avgEvennessAll: calculateAvgEvennessAll(simpleAllShannon),
    };

    // ----------------------------------------------------------------------
    // Build CoT generations
    // ----------------------------------------------------------------------
    const cotGenerations: CotGeneration[] = [];
    const cotAllErrors: ValidationErrors[] = [];
    const cotAllCoverage: CoverageMetrics[] = [];
    const cotAllInstantiation: CoverageMetrics[] = [];
    const cotAllShannon: ShannonEntry[][] = [];

    for (let i = 1; i <= COT_GEN_COUNT; i++) {
      const genId = `gen${i}`;

      // Build categories for this generation
      const categories: CotCategory[] = [];

      for (const cat of COT_CATEGORIES) {
        // Get metrics for this category
        const catMetrics = cotMetrics[genId]?.[cat];
        const errors = catMetrics?.errors ?? createNullValidationErrors();
        cotAllErrors.push(errors);

        // Get coverage/instantiation from global file
        const catCovData = cotCoverage[modelName]?.[genId]?.[cat];
        const coverage = catCovData?.coverage ?? createNullCoverageMetrics();
        const instantiation =
          catCovData?.instantiation ?? createNullCoverageMetrics();
        cotAllCoverage.push(coverage);
        cotAllInstantiation.push(instantiation);

        // Get uncovered/hallucinations
        const uncovered: UncoveredData | null = catCovData?.uncovered ?? null;

        // Get shannon for this category
        const shannon = cotShannon[modelName]?.[genId]?.[cat] ?? null;
        if (shannon) cotAllShannon.push(shannon);

        // Get overconstraints (only for invalid category)
        const overconstraints: Overconstraints | null =
          cat === "invalid" && catMetrics?.overconstraints
            ? catMetrics.overconstraints
            : null;

        // Check for output files
        const pdfPath = cotModelDir
          ? path.join(cotModelDir, genId, `${cat}.pdf`)
          : null;
        const pdfExists = pdfPath ? fileExists(pdfPath) : false;
        const pdfUrl =
          cotTimestamp && pdfExists
            ? `/data/dataset/GPT4O-exp1/CoT/${modelName}/${cotTimestamp}/${genId}/${cat}.pdf`
            : null;

        const soilPath = cotModelDir
          ? path.join(cotModelDir, genId, `${cat}.soil`)
          : null;
        const code = soilPath ? readFileSafe(soilPath) : null;

        categories.push({
          category: cat as CotCategoryName,
          metrics: {
            errors,
            coverage,
            instantiation,
            uncovered,
            overconstraints,
          },
          shannon,
          pdfAvailable: pdfExists,
          pdfUrl,
          code,
        });
      }

      // Get diversity for this generation (per-category + all)
      const genDiversity = cotDiversity[modelName]?.[genId];
      const categoryDiversity = genDiversity
        ? Object.entries(genDiversity.categories).map(([cat, div]) => ({
            category: cat,
            diversity: div,
          }))
        : null;
      const allCategoriesDiversity = genDiversity?.allCategories ?? null;

      // Get token counts for this generation (sum all categories)
      const genTokenCounts = cotLogs[genId]
        ? Object.values(cotLogs[genId]).reduce(
            (acc, tc) => ({
              input: (acc.input ?? 0) + (tc.input ?? 0),
              output: (acc.output ?? 0) + (tc.output ?? 0),
            }),
            createNullTokenCounts()
          )
        : null;

      cotGenerations.push({
        id: genId,
        categories,
        diversity: categoryDiversity,
        allCategoriesDiversity,
        tokenCounts: genTokenCounts,
      });
    }

    // Calculate CoT summary
    const cotValidation = calculateAvgValidation(cotAllErrors);
    const cotSummary: ModelSummary = {
      price: modelPrices.cot ?? createNullPriceInfo(),
      syntax: cotValidation.syntax,
      multiplicities: cotValidation.multiplicities,
      invariants: cotValidation.invariants,
      coverage: averageCoverageMetrics(cotAllCoverage),
      instantiation: averageCoverageMetrics(cotAllInstantiation),
      diversity: cotDiversitySummary[modelName] ?? createNullDiversityMetrics(),
      realism: null, // CoT doesn't have judge evaluation
      avgEvennessAll: calculateAvgEvennessAll(cotAllShannon),
    };

    // ----------------------------------------------------------------------
    // Build model data
    // ----------------------------------------------------------------------

    // Find diagram PDF path (usually in public/data/prompts)
    const diagramPdfPath = path.join(
      __dirname,
      `../public/data/prompts/${modelName.toLowerCase()}/diagram.pdf`
    );
    const diagramPdfExists = fileExists(diagramPdfPath);
    const diagramPdf = diagramPdfExists
      ? `/data/prompts/${modelName.toLowerCase()}/diagram.pdf`
      : null;

    const modelData: ModelData = {
      name: modelName,
      diagramPdf,
      simple: {
        summary: simpleSummary,
        grakel: simpleGrakel,
        judge: simpleJudgeResult,
        generations: simpleGenerations,
      },
      cot: {
        summary: cotSummary,
        grakel: cotGrakel,
        generations: cotGenerations,
      },
    };

    modelDataList.push(modelData);

    // Build dashboard entry
    dashboardModels.push({
      name: modelName,
      simple: simpleSummary,
      cot: cotSummary,
    });

    // Write model JSON
    const modelOutputPath = path.join(
      OUTPUT_DIR,
      "models",
      `${modelName}.json`
    );
    writeJsonFile(modelOutputPath, modelData);
    console.log(`    Written: ${modelOutputPath}`);

    // Write individual generation files (with flat metrics structure for MetricsPanel)
    const genDir = path.join(
      OUTPUT_DIR,
      "generations",
      modelName.toLowerCase()
    );
    ensureDir(genDir);

    // Simple generations
    for (const gen of simpleGenerations) {
      const genFile = {
        id: gen.id,
        metrics: {
          syntaxErrors: gen.metrics.errors.syntaxErrors,
          syntaxTotal: gen.metrics.errors.syntaxTotal,
          multiplicitiesErrors: gen.metrics.errors.multiplicitiesErrors,
          multiplicitiesTotal: gen.metrics.errors.multiplicitiesTotal,
          invariantsErrors: gen.metrics.errors.invariantsErrors,
          invariantsTotal: gen.metrics.errors.invariantsTotal,
          coverage: gen.metrics.coverage,
          instantiation: gen.metrics.instantiation,
          diversity: gen.metrics.diversity,
        },
        judge: gen.judge,
        pdfAvailable: gen.pdfAvailable,
        pdfUrl: gen.pdfUrl,
        code: gen.code,
      };
      writeJsonFile(path.join(genDir, `simple-${gen.id}.json`), genFile);
    }

    // CoT generations
    for (const gen of cotGenerations) {
      const genFile = {
        id: gen.id,
        categories: gen.categories.map((cat: CotCategory) => ({
          category: cat.category,
          metrics: {
            syntaxErrors: cat.metrics.errors.syntaxErrors,
            syntaxTotal: cat.metrics.errors.syntaxTotal,
            multiplicitiesErrors: cat.metrics.errors.multiplicitiesErrors,
            multiplicitiesTotal: cat.metrics.errors.multiplicitiesTotal,
            invariantsErrors: cat.metrics.errors.invariantsErrors,
            invariantsTotal: cat.metrics.errors.invariantsTotal,
            coverage: cat.metrics.coverage,
            instantiation: cat.metrics.instantiation,
            overconstraints: cat.metrics.overconstraints,
          },
          pdfAvailable: cat.pdfAvailable,
          pdfUrl: cat.pdfUrl,
          code: cat.code,
        })),
        diversity: gen.diversity,
        allCategoriesDiversity: gen.allCategoriesDiversity,
      };
      writeJsonFile(path.join(genDir, `cot-${gen.id}.json`), genFile);
    }
  }

  // ========================================================================
  // Step 3: Build Dashboard Data
  // ========================================================================
  console.log("\n📊 Building dashboard...");

  const n = dashboardModels.length;

  // Calculate totals
  const calculateTotalSummary = (key: "simple" | "cot") => ({
    price: key === "simple" ? totalPrices.simple : totalPrices.cot,
    syntax: average(dashboardModels.map((m) => m[key].syntax)),
    multiplicities: average(dashboardModels.map((m) => m[key].multiplicities)),
    invariants: average(dashboardModels.map((m) => m[key].invariants)),
    coverage: averageCoverageMetrics(
      dashboardModels.map((m) => m[key].coverage)
    ),
    instantiation: averageCoverageMetrics(
      dashboardModels.map((m) => m[key].instantiation)
    ),
    diversity: averageDiversityMetrics(
      dashboardModels.map((m) => m[key].diversity)
    ),
    realism: average(dashboardModels.map((m) => m[key].realism)),
    avgEvennessAll: average(dashboardModels.map((m) => m[key].avgEvennessAll)),
  });

  const dashboardData: DashboardData = {
    totals: {
      simple: calculateTotalSummary("simple"),
      cot: calculateTotalSummary("cot"),
    },
    combinedDiversity:
      Object.keys(combinedDiversity).length > 0 ? combinedDiversity : null,
    models: dashboardModels,
  };

  const dashboardPath = path.join(OUTPUT_DIR, "dashboard.json");
  writeJsonFile(dashboardPath, dashboardData);
  console.log(`Written: ${dashboardPath}`);

  // ========================================================================
  // Done
  // ========================================================================
  console.log("\n✅ Preprocessing complete!");
  console.log(`Output written to ${OUTPUT_DIR}`);
}

// Run
preprocess().catch(console.error);
