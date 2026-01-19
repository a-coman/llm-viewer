import { MODELS, COT_CATEGORIES } from "./constants";

// --- Logs.json Types (Strict Match) ---

export interface Attempt {
  id: string;
  status: "success" | "failed";
  prompt: string;
  response: string;
  instance_name?: string; // Optional in CoT intermediate?
  input_tokens: number;
  output_tokens: number;
  total_tokens: number;
  finish_reason?: string;
  time_seconds: number;
  error?: string;
  attempts?: Attempt[]; // Recursive attempts in nested structures? Not seen in example
}

export interface GenerationLog {
  id: string;
  attempts: Attempt[];
  input_tokens?: number;
  output_tokens?: number;
  judge?: { response: string; why: string };
}

export interface CoTCategoryLog {
  name: "baseline" | "boundary" | "complex" | "edge" | "invalid";
  IListCreator?: {
    system_prompt: string;
    attempts: Attempt[];
  };
  IListInstantiator?: {
    system_prompt: string;
    attempts: Attempt[];
  };
  // Fallback
  attempts?: Attempt[];
}

export interface CoTGenerationLog {
  id: string;
  categories: CoTCategoryLog[];
  input_tokens?: number;
  output_tokens?: number;
  judge?: { response: string; why: string };
}

export interface LogExperimentBase {
  id: string;
  type: "simple" | "cot";
  date: string;
  time: string;
  model: {
    name: string;
    provider: string;
    version: string;
  };
  domain_name: string;
  system_prompt: string;
  input_tokens: number;
  output_tokens: number;
  total_tokens: number;
  time_seconds: number;
  number_generations: number;
}

export interface SimpleLogExperiment extends LogExperimentBase {
  generations: GenerationLog[];
}

export interface IModelAnalyzer {
  system_prompt: string;
  prompt: string;
  response: string;
  input_tokens: number;
  output_tokens: number;
  total_tokens: number;
  time_seconds: number;
}

export interface CoTLogExperiment extends LogExperimentBase {
  IModelAnalyzer: IModelAnalyzer;
  generations: CoTGenerationLog[];
}

export interface LogDataRoot {
  simple: {
    input_tokens: number;
    output_tokens: number;
    total_tokens: number;
    time_seconds: number;
    number_experiments: number;
    experiments: SimpleLogExperiment[];
  };
  cot: {
    input_tokens: number;
    output_tokens: number;
    total_tokens: number;
    time_seconds: number;
    number_experiments: number;
    experiments: CoTLogExperiment[];
  };
}

// --- Metrics.json Types (Strict Match) ---

export interface MetricStat {
  errors: number;
  total: number;
  str: string[];
}

export interface SpecificMetrics {
  [key: string]: MetricStat;
}

export interface MetricsContent {
  syntax: MetricStat;
  multiplicities: MetricStat;
  invariants: MetricStat;
  specific?: SpecificMetrics;
}

export interface SimpleGenerationMetric {
  generation_id: string;
  attempt_id: string;
  metrics: MetricsContent;
}

export interface CoTCategoryMetric {
  name: "baseline" | "boundary" | "complex" | "edge" | "invalid";
  metrics: MetricsContent;
}

export interface CoTGenerationMetric {
  generation_id: string;
  categories: CoTCategoryMetric[];
  metrics: {
    syntax: MetricStat;
    multiplicities: MetricStat;
    invariants: MetricStat;
    specific?: Record<string, MetricStat>;
    multiplicities_category_invalid?: MetricStat;
    invariants_category_invalid?: MetricStat;
  };
}

export interface SimpleExperimentMetric {
  experiment_id: string;
  generations: SimpleGenerationMetric[];
  metrics: MetricsContent;
}

export interface CoTExperimentMetric {
  experiment_id: string;
  generations: CoTGenerationMetric[];
  metrics: MetricsContent;
}

export interface MetricsDataRoot {
  simple: {
    number_experiments: number;
    metrics: MetricsContent;
    experiments: SimpleExperimentMetric[];
  };
  cot: {
    number_experiments: number;
    metrics: MetricsContent;
    experiments: CoTExperimentMetric[];
  };
}

// --- Multi-Experiment File Root Types ---
// These wrap the original structures in an experiments array with IDs

export interface ExperimentLogEntry {
  id: string;
  simple: LogDataRoot["simple"];
  cot: LogDataRoot["cot"];
}

export interface ExperimentMetricsEntry {
  id: string;
  simple: MetricsDataRoot["simple"];
  cot: MetricsDataRoot["cot"];
}

export interface LogsFileRoot {
  experiments: ExperimentLogEntry[];
}

export interface MetricsFileRoot {
  experiments: ExperimentMetricsEntry[];
}

// --- Coverage.json Types ---

export interface RawCoverageSubItem {
  instantiated: number;
  defined: number;
  uncovered: string[];
}

export interface RawCoverageData {
  classes: RawCoverageSubItem;
  attributes: RawCoverageSubItem;
  relationships: RawCoverageSubItem;
}

export interface RawInstantiationSubItem {
  total_instantiated: number;
  total_defined: number; // 0 means infinity
}

export interface RawInstantiationData {
  classes: RawInstantiationSubItem;
  attributes: RawInstantiationSubItem;
  relationships: RawInstantiationSubItem;
}

export interface CoverageGenerationEntry {
  generation_id: string;
  attempt_id?: string;
  coverage: RawCoverageData;
  instantiation: RawInstantiationData;
}

export interface CoverageCategoryEntry {
  name: "baseline" | "boundary" | "complex" | "edge" | "invalid";
  coverage: RawCoverageData;
  instantiation: RawInstantiationData;
  attempt_id?: string;
}

export interface CoverageCoTGenerationEntry {
  generation_id: string;
  categories: CoverageCategoryEntry[];
  coverage: RawCoverageData;
  instantiation: RawInstantiationData;
}

export interface CoverageModelExperiment {
  experiment_id: string;
  coverage: RawCoverageData;
  instantiation: RawInstantiationData;
  generations: (CoverageGenerationEntry | CoverageCoTGenerationEntry)[];
}

export interface CoverageModeData {
  coverage: RawCoverageData;
  instantiation: RawInstantiationData;
  experiments: CoverageModelExperiment[];
}

export interface CoverageExperimentEntry {
  id: string;
  simple: CoverageModeData;
  cot: CoverageModeData;
}

export interface CoverageFileRoot {
  experiments: CoverageExperimentEntry[];
}

// --- Difference.json Types (Diversity Metrics) ---

export interface RawDifferenceData {
  numeric: number;
  string_equals: number;
  string_lv: number;
}

export interface SimpleDifferenceGeneration {
  generation_id: string;
  attempt_id: string;
  difference: RawDifferenceData;
}

export interface CoTDifferenceCategory {
  name: "baseline" | "boundary" | "complex" | "edge" | "invalid";
  attempt_id: string;
  difference: RawDifferenceData;
}

export interface CoTDifferenceGeneration {
  generation_id: string;
  categories: CoTDifferenceCategory[];
  difference: RawDifferenceData;
}

export interface SimpleDifferenceExperiment {
  experiment_id: string;
  generations: SimpleDifferenceGeneration[];
  difference: RawDifferenceData;
}

export interface CoTDifferenceExperiment {
  experiment_id: string;
  generations: CoTDifferenceGeneration[];
  difference: RawDifferenceData;
}

export interface DifferenceModeData {
  difference: RawDifferenceData;
  number_experiments: number;
  experiments: (SimpleDifferenceExperiment | CoTDifferenceExperiment)[];
}

export interface DifferenceExperimentEntry {
  id: string;
  simple: DifferenceModeData;
  cot: DifferenceModeData;
}

export interface DifferenceFileRoot {
  experiments: DifferenceExperimentEntry[];
}

// --- Application Domain Types (Derived/Processed) ---
// These are used by the UI components (e.g. pages/models/[model].astro).
// We transform Raw types into these.

// Coverage display: percentage 0-1
export interface CoverageItem {
  classes: number;
  attributes: number;
  relationships: number;
}

// Instantiation display: value/total where null total means infinity
export interface InstantiationValueItem {
  value: number;
  total: number | null; // null = infinity
}

export interface InstantiationItem {
  classes: InstantiationValueItem;
  attributes: InstantiationValueItem;
  relationships: InstantiationValueItem;
}

export interface CoverageMetrics {
  coverage: CoverageItem;
  instantiation: InstantiationItem;
}

export interface ModelMetrics {
  syntax: number;
  multiplicities: number;
  invariants: number;
}

export interface DiversityMetrics {
  numeric: number;
  stringEquals: number;
  stringLv: number;
  ged?: GedSummary; // GED mean and std at model level
}

// --- GED (Graph Edit Distance) Types ---

export interface GedSummary {
  mean: number;
  std: number;
}

export interface GedExperimentMatrix {
  labelsx: string[];
  labelsy: string[];
  valuesx: number[];
  valuesy: number[];
}

export interface GedGenerationData {
  generation_id: string;
  attempt_id?: string;
  ged: {
    adjacency: string;
    labels: string;
    edges: string;
  };
}

export interface GedCategoryData {
  name: "baseline" | "boundary" | "complex" | "edge" | "invalid";
  attempt_id: string;
  ged: {
    adjacency: string;
    labels: string;
    edges: string;
  };
}

export interface GedCoTGenerationData {
  generation_id: string;
  categories: GedCategoryData[];
}

export interface GedExperimentEntry {
  experiment_id: string;
  generations: (GedGenerationData | GedCoTGenerationData)[];
  ged: GedExperimentMatrix;
}

export interface GedModeData {
  ged: GedSummary;
  number_experiments: number;
  experiments: GedExperimentEntry[];
}

export interface GedModelEntry {
  id: string;
  simple: GedModeData;
  cot: GedModeData;
}

export interface GedFileRoot {
  experiments: GedModelEntry[];
}

export interface JudgeResult {
  realistic: number;
  unrealistic: number;
  unknown: number;
  successRate: number;
}

export interface JudgeResponse {
  response: "Realistic" | "Unrealistic" | "Unknown";
  why: string;
}

export interface PriceInfo {
  price: number;
  tokenInput: number;
  tokenOutput: number;
}

export interface ShannonEntry {
  attribute: string;
  values: Record<string, number>;
  entropy: number;
  maxEntropyActive: number;
  evennessActive: number;
  maxEntropyAll: number;
  evennessAll: number;
}

export interface GrakelMatrix {
  labels: string[];
  values: number[][];
}

export interface GenerationMetrics {
  syntax: number | MetricStat;
  multiplicities: number | MetricStat;
  invariants: number | MetricStat;
  coverage: CoverageMetrics;
  diversity?: DiversityMetrics;
  domainErrors?: Record<
    string,
    { invalid: number; total: number; failureRate: number }
  >;
  code?: string;
}

// Prompt data for each CoT agent
export interface AgentPrompts {
  systemPrompt: string;
  userPrompt: string;
}

export interface CotPromptsData {
  IModelAnalyzer: AgentPrompts;
  IListCreator: AgentPrompts;
  IListInstantiator: AgentPrompts;
}

export interface CategoryMetrics extends GenerationMetrics {
  category: "baseline" | "boundary" | "complex" | "edge" | "invalid";
  pdfUrl?: string;
  prompts?: CotPromptsData;
}

export interface SimpleGeneration {
  id: string;
  metrics: GenerationMetrics;
  judge?: JudgeResponse;
  pdfAvailable: boolean;
  pdfUrl?: string;
  systemPrompt?: string;
  userPrompt?: string;
}

export interface CoTGeneration {
  id: string;
  categories: CategoryMetrics[];
  metrics?: {
    syntax: MetricStat;
    multiplicities: MetricStat;
    invariants: MetricStat;
    coverage?: CoverageMetrics;
    diversity?: DiversityMetrics;
  };
  judge?: JudgeResponse;
  pdfAvailable: boolean;
  pdfUrl?: string;
}

export interface ModelData {
  name: string;
  diagramPdf: string;
  diagramUse: string;
  diagramUseCode: string;
  simple: {
    price: PriceInfo;
    metrics: ModelMetrics;
    coverage: CoverageMetrics;
    diversity: DiversityMetrics;
    judge: JudgeResult;
    grakel?: GrakelMatrix;
    shannon: ShannonEntry[];
    generations: SimpleGeneration[];
    gedHeatmap?: GedExperimentMatrix;
  };

  cot: {
    price: PriceInfo;
    metrics: ModelMetrics;
    coverage: CoverageMetrics;
    diversity: DiversityMetrics;
    judge: JudgeResult;
    grakel?: GrakelMatrix;
    shannon: ShannonEntry[];
    generations: CoTGeneration[];
    gedHeatmap?: GedExperimentMatrix;
  };
}

export interface DashboardData {
  totals: {
    simple: {
      price: PriceInfo;
      metrics: ModelMetrics;
      coverage: CoverageMetrics;
      diversity: DiversityMetrics;
      judge: JudgeResult;
    };
    cot: {
      price: PriceInfo;
      metrics: ModelMetrics;
      coverage: CoverageMetrics;
      diversity: DiversityMetrics;
      judge: JudgeResult;
    };
  };

  models: {
    name: string;
    simple: {
      price: number;
      syntax: number;
      multiplicities: number;
      invariants: number;
      coverage: CoverageMetrics;
      diversity?: DiversityMetrics;
      realism: number;
    };
    cot: {
      price: number;
      syntax: number;
      multiplicities: number;
      invariants: number;
      coverage: CoverageMetrics;
      diversity?: DiversityMetrics;
      realism: number;
    };
  }[];
}

export type ModelName = (typeof MODELS)[number];
export type CoTCategory = (typeof COT_CATEGORIES)[number];
