/**
 * Type definitions for the preprocessing pipeline
 * These types represent the raw parsed data and final output structures
 */

// ============================================================================
// Base Types
// ============================================================================

/** Price/token information for a model */
export interface PriceInfo {
  price: number | null;
  tokenInput: number | null;
  tokenOutput: number | null;
}

/** Coverage metrics (classes, attributes, relationships) */
export interface CoverageMetrics {
  classes: number | null;
  attributes: number | null;
  relationships: number | null;
}

/** Diversity metrics from difference files */
export interface DiversityMetrics {
  numeric: number | null;
  stringEquals: number | null;
  stringLv: number | null;
}

/** Validation error counts */
export interface ValidationErrors {
  syntaxErrors: number | null;
  syntaxTotal: number | null;
  multiplicitiesErrors: number | null;
  multiplicitiesTotal: number | null;
  invariantsErrors: number | null;
  invariantsTotal: number | null;
}

/** Overconstraints detection (only for CoT invalid category) */
export interface Overconstraints {
  multiplicitiesErrors: number | null;
  multiplicitiesTotal: number | null;
  invariantsErrors: number | null;
  invariantsTotal: number | null;
}

/** Token counts extracted from logs */
export interface TokenCounts {
  input: number | null;
  output: number | null;
}

// ============================================================================
// Shannon Entropy Types
// ============================================================================

/** Distribution of enum values */
export interface EnumDistribution {
  name: string;
  count: number;
}

/** Entropy metrics for an enum attribute */
export interface EntropyMetrics {
  entropy: number | null;
  maxEntropyActive: number | null;
  evennessActive: number | null;
  maxEntropyAll: number | null;
  evennessAll: number | null;
}

/** Shannon entry for a single attribute/enum */
export interface ShannonEntry {
  attribute: string;
  distribution: EnumDistribution[];
  entropy: EntropyMetrics;
}

// ============================================================================
// Grakel Graph Types
// ============================================================================

/** Raw graph data (adjacency, labels, edges) */
export interface GraphData {
  adj: number[][];
  labels: Record<number, string>;
  edges: [number, number][];
}

/** Grakel kernel similarity matrix */
export interface GrakelMatrix {
  labels: string[];
  values: number[][];
}

/** Complete grakel data including raw graphs and kernel matrix */
export interface GrakelData {
  graphs: GraphData[];
  kernel: GrakelMatrix | null;
}

// ============================================================================
// Judge Types
// ============================================================================

/** Judge verdict counts */
export interface JudgeResult {
  realistic: number | null;
  unrealistic: number | null;
  unknown: number | null;
  successRate: number | null;
}

/** Judge response for a generation */
export interface JudgeResponse {
  response: "Realistic" | "Unrealistic" | "Unknown" | null;
  why: string | null;
}

// ============================================================================
// Domain-Specific Validation Types
// ============================================================================

/** Domain-specific validation entry (e.g., IBAN, Phone, Email) */
export interface DomainValidationEntry {
  name: string;
  invalid: number;
  total: number;
  failureRate: number;
  failedItems: string[];
}

/** All domain validations for a generation */
export type DomainValidation = DomainValidationEntry[];

// ============================================================================
// Coverage Extra Data (CoT specific)
// ============================================================================

/** Uncovered elements from coverage */
export interface UncoveredData {
  uncovered: string[];
  hallucinations: string[];
}

// ============================================================================
// Generation Types
// ============================================================================

/** Complete metrics for a Simple generation */
export interface SimpleGenerationMetrics {
  errors: ValidationErrors;
  coverage: CoverageMetrics;
  instantiation: CoverageMetrics;
  diversity: DiversityMetrics;
  domainValidation: DomainValidation | null;
}

/** Complete metrics for a CoT category within a generation */
export interface CotCategoryMetrics {
  errors: ValidationErrors;
  coverage: CoverageMetrics;
  instantiation: CoverageMetrics;
  uncovered: UncoveredData | null;
  overconstraints: Overconstraints | null; // Only for 'invalid' category
}

/** CoT category diversity (from cotDifference per-category breakdown) */
export interface CotCategoryDiversity {
  category: string;
  diversity: DiversityMetrics;
}

/** Simple generation data */
export interface SimpleGeneration {
  id: string;
  metrics: SimpleGenerationMetrics;
  shannon: ShannonEntry[] | null;
  judge: JudgeResponse | null;
  tokenCounts: TokenCounts | null;
  pdfAvailable: boolean;
  pdfUrl: string | null;
  code: string | null;
}

/** CoT category data */
export interface CotCategory {
  category: "baseline" | "boundary" | "complex" | "edge" | "invalid";
  metrics: CotCategoryMetrics;
  shannon: ShannonEntry[] | null;
  pdfAvailable: boolean;
  pdfUrl: string | null;
  code: string | null;
}

/** CoT generation data */
export interface CotGeneration {
  id: string;
  categories: CotCategory[];
  diversity: CotCategoryDiversity[] | null; // Per-category diversity
  allCategoriesDiversity: DiversityMetrics | null; // "ALL Categories" summary
  tokenCounts: TokenCounts | null;
  judge: JudgeResponse | null;
}

// ============================================================================
// Model Data Types
// ============================================================================

/** Model summary for dashboard */
export interface ModelSummary {
  price: PriceInfo;
  syntax: number | null; // Success rate (0-1)
  multiplicities: number | null;
  invariants: number | null;
  coverage: CoverageMetrics;
  instantiation: CoverageMetrics;
  diversity: DiversityMetrics;
  realism: number | null;
  avgEvennessAll: number | null; // Average shannon evennessAll
}

/** Complete model data */
export interface ModelData {
  name: string;
  diagramPdf: string | null;
  simple: {
    summary: ModelSummary;
    grakel: GrakelData | null;
    judge: JudgeResult | null;
    generations: SimpleGeneration[];
  };
  cot: {
    summary: ModelSummary;
    grakel: GrakelData | null;
    judge: JudgeResult | null;
    generations: CotGeneration[];
  };
}

// ============================================================================
// Dashboard Types
// ============================================================================

/** Dashboard totals */
export interface DashboardTotals {
  price: PriceInfo;
  syntax: number | null;
  multiplicities: number | null;
  invariants: number | null;
  coverage: CoverageMetrics;
  instantiation: CoverageMetrics;
  diversity: DiversityMetrics;
  realism: number | null;
  avgEvennessAll: number | null;
}

/** Dashboard model entry */
export interface DashboardModel {
  name: string;
  simple: ModelSummary;
  cot: ModelSummary;
}

/** Complete dashboard data */
export interface DashboardData {
  totals: {
    simple: DashboardTotals;
    cot: DashboardTotals;
  };
  combinedDiversity: Record<string, DiversityMetrics> | null;
  models: DashboardModel[];
}

// ============================================================================
// Parser Output Types (Raw parsed data before processing)
// ============================================================================

/** Price parser output */
export type ParsedPrices = Record<
  string,
  { simple: PriceInfo | null; cot: PriceInfo | null }
>;

/** Simple coverage parser output: model -> gen -> coverage */
export type ParsedSimpleCoverage = Record<
  string,
  Record<string, CoverageMetrics>
>;

/** Simple instantiation parser output: model -> gen -> instantiation counts */
export type ParsedSimpleInstantiation = Record<
  string,
  Record<string, CoverageMetrics>
>;

/** CoT coverage parser output: model -> gen -> category -> data */
export interface CotCoverageCategoryData {
  coverage: CoverageMetrics;
  instantiation: CoverageMetrics;
  uncovered: UncoveredData | null;
}
export type ParsedCotCoverage = Record<
  string,
  Record<string, Record<string, CotCoverageCategoryData>>
>;

/** Simple difference parser output (summary): model -> diversity */
export type ParsedSimpleDifference = Record<string, DiversityMetrics>;

/** Simple difference per-gen parser output: model -> gen -> diversity */
export type ParsedSimpleDifferencePerGen = Record<
  string,
  Record<string, DiversityMetrics>
>;

/** CoT difference parser output: model -> gen -> category -> diversity + allCategories */
export interface CotDifferenceGenData {
  categories: Record<string, DiversityMetrics>;
  allCategories: DiversityMetrics | null;
}
export type ParsedCotDifference = Record<
  string,
  Record<string, CotDifferenceGenData>
>;

/** CoT difference summary: model -> allGenerations diversity */
export type ParsedCotDifferenceSummary = Record<string, DiversityMetrics>;

/** Shannon parser output: model -> gen -> (category?) -> entries */
export type ParsedSimpleShannon = Record<
  string,
  Record<string, ShannonEntry[]>
>;
export type ParsedCotShannon = Record<
  string,
  Record<string, Record<string, ShannonEntry[]>>
>;

/** Combined difference parser output */
export type ParsedCombinedDifference = Record<string, DiversityMetrics>;

/** Metrics parser output (Simple): gen -> errors + domainValidation */
export interface ParsedSimpleMetricsGen {
  errors: ValidationErrors;
  domainValidation: DomainValidation | null;
}
export type ParsedSimpleMetrics = Record<string, ParsedSimpleMetricsGen>;

/** Metrics parser output (CoT): gen -> category -> errors + overconstraints */
export interface ParsedCotMetricsCat {
  errors: ValidationErrors;
  overconstraints: Overconstraints | null;
}
export type ParsedCotMetrics = Record<
  string,
  Record<string, ParsedCotMetricsCat>
>;

/** Judge results parser output */
export type ParsedJudgeResults = JudgeResult;

/** Judge responses parser output: gen -> response */
export type ParsedJudgeResponses = Record<string, JudgeResponse>;

/** Logs parser output: gen -> (category?) -> tokenCounts */
export type ParsedSimpleLogs = Record<string, TokenCounts>;
export type ParsedCotLogs = Record<string, Record<string, TokenCounts>>;

// ============================================================================
// Configuration
// ============================================================================

export const COT_CATEGORIES = [
  "baseline",
  "boundary",
  "complex",
  "edge",
  "invalid",
] as const;
export type CotCategoryName = (typeof COT_CATEGORIES)[number];

export const MODELS = [
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
] as const;
export type ModelName = (typeof MODELS)[number];

export const SIMPLE_GEN_COUNT = 30;
export const COT_GEN_COUNT = 6;
