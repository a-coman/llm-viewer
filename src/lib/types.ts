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

// --- Application Domain Types (Derived/Processed) ---
// These are used by the UI components (e.g. pages/models/[model].astro).
// We transform Raw types into these.

export interface CoverageItem {
  classes: number;
  attributes: number;
  relationships: number;
}

export interface CoverageMetrics {
  coverage: CoverageItem;
  instantiation: CoverageItem;
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
  domainErrors?: Record<
    string,
    { invalid: number; total: number; failureRate: number }
  >;
  code?: string;
}

export interface CategoryMetrics extends GenerationMetrics {
  category: "baseline" | "boundary" | "complex" | "edge" | "invalid";
  pdfUrl?: string;
}

export interface SimpleGeneration {
  id: string;
  metrics: GenerationMetrics;
  judge?: JudgeResponse;
  pdfAvailable: boolean;
  pdfUrl?: string;
}

export interface CoTGeneration {
  id: string;
  categories: CategoryMetrics[];
  judge?: JudgeResponse;
  pdfAvailable: boolean;
  pdfUrl?: string;
}

export interface ModelData {
  name: string;
  diagramPdf: string;
  simple: {
    price: PriceInfo;
    metrics: ModelMetrics;
    coverage: CoverageMetrics;
    diversity: DiversityMetrics;
    judge: JudgeResult;
    grakel?: GrakelMatrix;
    shannon: ShannonEntry[];
    generations: SimpleGeneration[];
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
      coverage: number;
      realism: number;
    };
    cot: {
      price: number;
      syntax: number;
      multiplicities: number;
      invariants: number;
      coverage: number;
      realism: number;
    };
  }[];
}

export type ModelName = (typeof MODELS)[number];
export type CoTCategory = (typeof COT_CATEGORIES)[number];
