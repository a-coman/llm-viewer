import { MODELS, COT_CATEGORIES } from "./constants";

// --- Base JSON Generics (Used across all metric files) ---

export interface ModeData<S, E> {
  number_experiments: number;
  experiments: E[];
  stats?: S; // Optional mode-level stats (e.g. Judge stats)
}

export interface TokenSummary {
  input_tokens: number;
  output_tokens: number;
  total_tokens: number;
  time_seconds: number;
}

export interface LogsModeData
  extends
    ModeData<never, SimpleLogExperiment | CoTLogExperiment>,
    TokenSummary {}

export type MetricFileRoot<T> = {
  experiments: (T & { id: string })[];
};

export interface ExperimentModes<S, C = S> {
  simple: S;
  cot: C;
}

// --- Logs.json Types (Strict Match) ---

export interface Attempt {
  id: string;
  status: "success" | "failed";
  prompt: string;
  response: string;
  instance_name?: string;
  input_tokens: number;
  output_tokens: number;
  total_tokens: number;
  finish_reason?: string;
  time_seconds: number;
  error?: string;
  attempts?: Attempt[];
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

export type LogsFileRoot = MetricFileRoot<ExperimentModes<LogsModeData>>;

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
  metrics: MetricsContent & {
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

export interface MetricsModeData<E> extends ModeData<MetricsContent, E> {
  metrics: MetricsContent;
}

export type MetricsFileRoot = MetricFileRoot<
  ExperimentModes<
    MetricsModeData<SimpleExperimentMetric>,
    MetricsModeData<CoTExperimentMetric>
  >
>;

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
  total_defined: number;
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

export type CoverageFileRoot = MetricFileRoot<
  ExperimentModes<CoverageModeData>
>;

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

export type DifferenceFileRoot = MetricFileRoot<
  ExperimentModes<DifferenceModeData>
>;

// --- Application Domain Types (Derived/Processed) ---

export interface CoverageItem {
  classes: InstantiationValueItem;
  attributes: InstantiationValueItem;
  relationships: InstantiationValueItem;
}

export interface CoverageUncovered {
  classes: string[];
  attributes: string[];
  relationships: string[];
}

export interface InstantiationValueItem {
  value: number;
  total: number | null;
}

export interface InstantiationItem {
  classes: InstantiationValueItem;
  attributes: InstantiationValueItem;
  relationships: InstantiationValueItem;
}

export interface CoverageMetrics {
  coverage: CoverageItem;
  instantiation: InstantiationItem;
  uncovered: CoverageUncovered;
}

export interface ModelMetrics {
  syntax: MetricStat;
  multiplicities: MetricStat;
  invariants: MetricStat;
}

export interface DiversityMetrics {
  numeric: number;
  stringEquals: number;
  stringLv: number;
  ged?: GedSummary;
  shannon?: GedSummary;
  shannonActive?: number;
  shannonAll?: number;
  shannonActiveStd?: number;
  shannonAllStd?: number;
}

// --- GED (Graph Edit Distance) Types ---

export interface GedSummary {
  mean: number;
  std: number;
}

export interface GedExperimentMatrix {
  rowLabels: string[];
  columnLabels: string[];
  values: number[][];
  mean?: number;
  std?: number;
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

export type GedFileRoot = MetricFileRoot<ExperimentModes<GedModeData>>;

// --- Shannon Types ---

export interface ShannonSummaryGroups {
  eveness_active_groups: GedSummary;
  eveness_all_groups: GedSummary;
}

export interface ShannonSpecificEntry {
  name: string;
  values: Record<string, number>;
  shannon: {
    eveness_active_groups: number;
    eveness_all_groups: number;
  };
}

export interface ShannonSimpleGenerationEntry {
  generation_id: string;
  attempt_id: string;
  specific: ShannonSpecificEntry[];
}

export interface ShannonCoTCategoryEntry {
  name: "baseline" | "boundary" | "complex" | "edge" | "invalid";
  attempt_id: string;
  specific: ShannonSpecificEntry[];
}

export interface ShannonCoTGenerationEntry {
  generation_id: string;
  specific: ShannonSpecificEntry[];
  categories: ShannonCoTCategoryEntry[];
}

export interface ShannonExperimentEntry {
  experiment_id: string;
  specific: ShannonSpecificEntry[];
  generations: (ShannonSimpleGenerationEntry | ShannonCoTGenerationEntry)[];
}

export interface ShannonModeData {
  shannon: ShannonSummaryGroups;
  number_experiments: number;
  experiments: ShannonExperimentEntry[];
}

export type ShannonFileRoot = MetricFileRoot<ExperimentModes<ShannonModeData>>;

// --- Judge.json Types ---

export interface RealismCounts {
  realistic: number;
  unrealistic: number;
  doubtful: number;
}

export interface JudgeGenerationRealism {
  response_type: "realistic" | "unrealistic" | "doubtful";
  reasoning: string;
}

export interface SimpleJudgeGeneration {
  generation_id: string;
  attempt_id: string;
  judge_prompt?: string;
  judge_response?: string;
  realism: JudgeGenerationRealism;
  stats?: {
    input_tokens: number;
    output_tokens: number;
    total_tokens: number;
    time_seconds: number;
  };
}

export interface CoTJudgeCategory {
  name: "baseline" | "boundary" | "complex" | "edge" | "invalid";
  attempt_id: string;
  judge_prompt?: string;
  judge_response?: string;
  stats?: {
    input_tokens: number;
    output_tokens: number;
    total_tokens: number;
    time_seconds: number;
  };
  realism: RealismCounts | JudgeGenerationRealism;
}

export interface CoTJudgeGeneration {
  generation_id: string;
  realism: RealismCounts;
  categories: CoTJudgeCategory[];
}

export interface JudgeExperimentEntry {
  experiment_id: string;
  stats?: {
    input_tokens: number;
    output_tokens: number;
    total_tokens: number;
    time_seconds: number;
  };
  realism: RealismCounts;
  generations: (SimpleJudgeGeneration | CoTJudgeGeneration)[];
}

export interface JudgeModeData {
  model?: {
    name: string;
    version: string;
    provider: string;
  };
  stats?: {
    input_tokens: number;
    output_tokens: number;
    total_tokens: number;
    time_seconds: number;
  };
  realism: RealismCounts;
  judge_system_prompt?: string;
  number_experiments: number;
  experiments: JudgeExperimentEntry[];
}

export type JudgeFileRoot = MetricFileRoot<ExperimentModes<JudgeModeData>>;

// --- Merged Model Types (Used by Dashboard/UI) ---

export interface PriceInfo {
  price: number;
  tokenInput: number;
  tokenOutput: number;
}

export interface GenerationMetrics {
  syntax: MetricStat;
  multiplicities: MetricStat;
  invariants: MetricStat;
  coverage: CoverageMetrics;
  diversity: DiversityMetrics;
  code: string;
  price: PriceInfo;
  elapsedSeconds: number;
}

export interface AgentPrompts {
  systemPrompt: string;
  userPrompts: string[];
}

export interface CategoryMetrics extends GenerationMetrics {
  category: string;
  pdfUrl: string;
  shannon: ShannonSpecificEntry[];
  prompts?: CotPromptsData;
  judge?: {
    response: string;
    why: string;
  };
  realism?: RealismCounts;
}

export interface SimpleGeneration {
  id: string;
  pdfAvailable: boolean;
  pdfUrl: string;
  metrics: GenerationMetrics;
  shannon: ShannonSpecificEntry[];
  judge?: {
    response: "Realistic" | "Unrealistic" | "Unknown";
    why: string;
  };
  systemPrompt: string;
  userPrompts: string[];
  judgeSystemPrompt?: string;
  judgeUserPrompts?: string[];
}

export interface CoTGeneration {
  id: string;
  pdfAvailable: boolean;
  pdfUrl: string;
  shannon: ShannonSpecificEntry[];
  categories: CategoryMetrics[];
  metrics: {
    syntax: MetricStat;
    multiplicities: MetricStat;
    invariants: MetricStat;
    coverage: CoverageMetrics;
    diversity: DiversityMetrics;
  };
  judge?: {
    response: "Realistic" | "Unrealistic" | "Unknown";
    why: string;
  };
  realism?: RealismCounts;
}

export interface CotPromptsData {
  IModelAnalyzer: AgentPrompts;
  IListCreator: AgentPrompts;
  IListInstantiator: AgentPrompts;
  Judge: AgentPrompts;
}

export interface ModelData {
  name: string;
  diagramPdf: string;
  diagramUse: string;
  diagramUseCode: string;
  simple: {
    metrics: ModelMetrics;
    coverage: CoverageMetrics;
    generations: SimpleGeneration[];
    diversity: DiversityMetrics;
    judge: {
      realistic: number;
      unrealistic: number;
      unknown: number;
      successRate: number;
    };
    price: PriceInfo;
    elapsedSeconds: number;
    shannon: ShannonSpecificEntry[];
    gedHeatmap?: GedExperimentMatrix;
  };
  cot: {
    metrics: ModelMetrics;
    coverage: CoverageMetrics;
    generations: CoTGeneration[];
    diversity: DiversityMetrics;
    judge: {
      realistic: number;
      unrealistic: number;
      unknown: number;
      successRate: number;
    };
    price: PriceInfo;
    elapsedSeconds: number;
    shannon: ShannonSpecificEntry[];
    gedHeatmap?: GedExperimentMatrix;
  };
}

export interface DashboardData {
  totals: {
    simple: DashboardModeTotals;
    cot: DashboardModeTotals;
  };
  radarComparison: DashboardRadarComparison;
  models: {
    name: string;
    simple: {
      price: number;
      syntax: MetricStat;
      multiplicities: MetricStat;
      invariants: MetricStat;
      coverage: CoverageMetrics;
      diversity: DiversityMetrics;
      realism: { realistic: number; unrealistic: number; unknown: number; successRate: number };
    };
    cot: {
      price: number;
      syntax: MetricStat;
      multiplicities: MetricStat;
      invariants: MetricStat;
      coverage: CoverageMetrics;
      diversity: DiversityMetrics;
      realism: { realistic: number; unrealistic: number; unknown: number; successRate: number };
    };
  }[];
}

export interface DashboardModeTotals {
  price: PriceInfo;
  elapsedSeconds: number;
  metrics: ModelMetrics;
  coverage: CoverageMetrics;
  diversity: DiversityMetrics;
  judge: {
    realistic: number;
    unrealistic: number;
    unknown: number;
    successRate: number;
    price?: PriceInfo;
    elapsedSeconds?: number;
  };
}

export interface DashboardRadarAxis {
  key:
    | "cost"
    | "realism"
    | "validity"
    | "coverageDistribution"
    | "structuralDiversity"
    | "attributeDiversity";
  label: string;
  description: string;
  max: number;
}

export interface DashboardRadarSeries {
  name: string;
  values: number[];
}

export interface DashboardRadarComparison {
  axes: DashboardRadarAxis[];
  series: DashboardRadarSeries[];
}

export type ModelName = (typeof MODELS)[keyof typeof MODELS];
export type CoTCategory = (typeof COT_CATEGORIES)[keyof typeof COT_CATEGORIES];
