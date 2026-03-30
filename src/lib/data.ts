import fs from "node:fs";
import path from "node:path";
import { MODELS_VALUES, DATASETS } from "./constants";
import { getModelName, calculateRate, calculatePrice } from "./utils";
import type {
  ModelData,
  ExperimentModes,
  CoverageMetrics,
  CoverageItem,
  InstantiationItem,
  InstantiationValueItem,
  SimpleGeneration,
  CoTGeneration,
  DashboardData,
  DashboardModeTotals,
  Attempt,
  LogsFileRoot,
  LogsModeData,
  MetricsFileRoot,
  MetricsModeData,
  MetricsContent,
  MetricStat,
  SimpleExperimentMetric,
  CoTExperimentMetric,
  SimpleLogExperiment,
  CoTLogExperiment,
  CoverageFileRoot,
  CoverageModeData,
  CoverageCategoryEntry,
  RawCoverageData,
  RawInstantiationData,
  DifferenceFileRoot,
  DifferenceModeData,
  CoTDifferenceCategory,
  RawDifferenceData,
  DiversityMetrics,
  GedFileRoot,
  GedModeData,
  ShannonFileRoot,
  ShannonModeData,
  ShannonCoTCategoryEntry,
  ShannonSpecificEntry,
  JudgeFileRoot,
  JudgeModeData,
  SimpleJudgeGeneration,
  CoTJudgeGeneration,
  RealismCounts,
  CoTCategoryLog,
} from "./types";

const DATA_DIR = path.join(process.cwd(), "public");
const METRICS_FILE = path.join(DATA_DIR, "metrics.json");
const LOGS_FILE = path.join(DATA_DIR, "logs.json");
const COVERAGE_FILE = path.join(DATA_DIR, "coverage.json");
const DIFFERENCE_FILE = path.join(DATA_DIR, "difference.json");
const GED_FILE = path.join(DATA_DIR, "ged.json");
const SHANNON_FILE = path.join(DATA_DIR, "shannon.json");
const JUDGE_FILE = path.join(DATA_DIR, "judge.json");
const DATASET_DIR = path.join(DATA_DIR, "data", "dataset");

type LogsExperimentRoot = LogsFileRoot["experiments"][number];
type MetricsExperimentRoot = MetricsFileRoot["experiments"][number];
type CoverageExperimentRoot = CoverageFileRoot["experiments"][number];
type DifferenceExperimentRoot = DifferenceFileRoot["experiments"][number];
type GedExperimentRoot = GedFileRoot["experiments"][number];
type ShannonExperimentRoot = ShannonFileRoot["experiments"][number];
type JudgeExperimentRoot = JudgeFileRoot["experiments"][number];

type CachedFiles = {
  metrics: Map<string, MetricsExperimentRoot>;
  logs: Map<string, LogsExperimentRoot>;
  coverage: Map<string, CoverageExperimentRoot>;
  difference: Map<string, DifferenceExperimentRoot>;
  ged: Map<string, GedExperimentRoot>;
  shannon: Map<string, ShannonExperimentRoot>;
  judge: Map<string, JudgeExperimentRoot>;
};

type ExperimentData = {
  logs: ExperimentModes<LogsModeData>;
  metrics: ExperimentModes<
    MetricsModeData<SimpleExperimentMetric>,
    MetricsModeData<CoTExperimentMetric>
  >;
  coverage: ExperimentModes<CoverageModeData> | null;
  difference: ExperimentModes<DifferenceModeData> | null;
  ged: ExperimentModes<GedModeData> | null;
  shannon: ExperimentModes<ShannonModeData> | null;
  judge: ExperimentModes<JudgeModeData> | null;
};

// Cache data in memory - indexed by experiment ID for O(1) lookups
const cachedFiles: CachedFiles = {
  metrics: new Map<string, MetricsExperimentRoot>(),
  logs: new Map<string, LogsExperimentRoot>(),
  coverage: new Map<string, CoverageExperimentRoot>(),
  difference: new Map<string, DifferenceExperimentRoot>(),
  ged: new Map<string, GedExperimentRoot>(),
  shannon: new Map<string, ShannonExperimentRoot>(),
  judge: new Map<string, JudgeExperimentRoot>(),
};

// Tracking which files are loaded
let isDataLoaded = false;

const warnedKeys = new Set<string>();

function warnOnce(key: string, message: string, error?: unknown) {
  if (warnedKeys.has(key)) {
    return;
  }
  warnedKeys.add(key);
  console.warn(`[data] ${message}`);
  if (error) {
    console.warn(error);
  }
}

function createEmptyMetricStat(): MetricStat {
  return { errors: 0, total: 0, str: [] };
}

function createEmptyMetricsContent(): MetricsContent {
  return {
    syntax: createEmptyMetricStat(),
    multiplicities: createEmptyMetricStat(),
    invariants: createEmptyMetricStat(),
  };
}

const EMPTY_MODE_LOGS: LogsModeData = {
  input_tokens: 0,
  output_tokens: 0,
  total_tokens: 0,
  time_seconds: 0,
  number_experiments: 0,
  experiments: [],
};

const EMPTY_SIMPLE_MODE_METRICS: MetricsModeData<SimpleExperimentMetric> = {
  number_experiments: 0,
  metrics: createEmptyMetricsContent(),
  experiments: [],
};

const EMPTY_COT_MODE_METRICS: MetricsModeData<CoTExperimentMetric> = {
  number_experiments: 0,
  metrics: createEmptyMetricsContent(),
  experiments: [],
};

function normalizeKey(value?: string): string {
  return (value || "").trim().toLowerCase();
}

function sameKey(left?: string, right?: string): boolean {
  return normalizeKey(left) === normalizeKey(right);
}

function findByExperimentId<T extends { experiment_id: string }>(
  items: T[] | undefined,
  experimentId: string,
): T | undefined {
  return items?.find((item) => sameKey(item.experiment_id, experimentId));
}

function findByGenerationId<T extends { generation_id: string }>(
  items: T[] | undefined,
  generationId: string,
): T | undefined {
  return items?.find((item) => sameKey(item.generation_id, generationId));
}

function findByName<T extends { name: string }>(
  items: T[] | undefined,
  name: string,
): T | undefined {
  return items?.find((item) => sameKey(item.name, name));
}

function getDatasetExperimentDirName(experimentId?: string): string {
  const fallback = experimentId || "";
  if (!experimentId) return fallback;
  try {
    const datasetEntries = fs.readdirSync(DATASET_DIR, { withFileTypes: true });
    const matched = datasetEntries.find(
      (entry) => entry.isDirectory() && sameKey(entry.name, experimentId),
    );
    return matched?.name || fallback;
  } catch (error) {
    warnOnce(
      `dataset-dir-${experimentId}`,
      `Could not resolve dataset experiment directory for '${experimentId}', using fallback.`,
      error,
    );
    return fallback;
  }
}

function getChildDirNameIgnoreCase(
  parentDir: string,
  childDir: string,
): string {
  const fallback = childDir;
  if (!childDir) return fallback;
  try {
    const entries = fs.readdirSync(parentDir, { withFileTypes: true });
    const matched = entries.find(
      (entry) => entry.isDirectory() && sameKey(entry.name, childDir),
    );
    return matched?.name || fallback;
  } catch (error) {
    warnOnce(
      `child-dir-${parentDir}-${childDir}`,
      `Could not resolve child directory '${childDir}' under '${parentDir}', using fallback.`,
      error,
    );
    return fallback;
  }
}

function loadData() {
  if (isDataLoaded) return;

  const files: Array<{
    path: string;
    key: keyof CachedFiles;
  }> = [
    { path: METRICS_FILE, key: "metrics" },
    { path: LOGS_FILE, key: "logs" },
    { path: COVERAGE_FILE, key: "coverage" },
    { path: DIFFERENCE_FILE, key: "difference" },
    { path: GED_FILE, key: "ged" },
    { path: JUDGE_FILE, key: "judge" },
    { path: SHANNON_FILE, key: "shannon" },
  ] as const;

  for (const { path, key } of files) {
    try {
      if (!fs.existsSync(path)) {
        warnOnce(`missing-file-${path}`, `Data file not found: ${path}`);
        continue;
      }

      const content = fs.readFileSync(path, "utf-8");
      const parsed = JSON.parse(content) as {
        experiments?: Array<{ id: string }>;
      };
      const experiments = parsed.experiments || [];

      for (const exp of experiments) {
        if (!exp?.id) {
          continue;
        }
        cachedFiles[key].set(normalizeKey(exp.id), exp as never);
      }
    } catch (error) {
      warnOnce(`load-file-${path}`, `Failed to load data file: ${path}`, error);
    }
  }

  isDataLoaded = true;
}

// Get list of all experiment IDs
export function getExperimentIds(): string[] {
  loadData();
  return Array.from(cachedFiles.logs.keys()).filter((id) => DATASETS.has(id));
}

// Get experiment data by ID (or first if not specified)
function getExperimentData(experimentId?: string): ExperimentData {
  loadData();
  const id = normalizeKey(experimentId || getExperimentIds()[0]);

  const logsRecord = cachedFiles.logs.get(id);
  const metricsRecord = cachedFiles.metrics.get(id);
  const coverageRecord = cachedFiles.coverage.get(id);
  const differenceRecord = cachedFiles.difference.get(id);
  const gedRecord = cachedFiles.ged.get(id);
  const shannonRecord = cachedFiles.shannon.get(id);
  const judgeRecord = cachedFiles.judge.get(id);

  return {
    logs: logsRecord
      ? { simple: logsRecord.simple, cot: logsRecord.cot }
      : {
          simple: { ...EMPTY_MODE_LOGS },
          cot: { ...EMPTY_MODE_LOGS },
        },
    metrics: metricsRecord
      ? { simple: metricsRecord.simple, cot: metricsRecord.cot }
      : {
          simple: { ...EMPTY_SIMPLE_MODE_METRICS },
          cot: { ...EMPTY_COT_MODE_METRICS },
        },
    coverage: coverageRecord
      ? { simple: coverageRecord.simple, cot: coverageRecord.cot }
      : null,
    difference: differenceRecord
      ? { simple: differenceRecord.simple, cot: differenceRecord.cot }
      : null,
    ged: gedRecord ? { simple: gedRecord.simple, cot: gedRecord.cot } : null,
    shannon: shannonRecord
      ? { simple: shannonRecord.simple, cot: shannonRecord.cot }
      : null,
    judge: judgeRecord
      ? { simple: judgeRecord.simple, cot: judgeRecord.cot }
      : null,
  };
}

const EMPTY_COVERAGE: CoverageItem = {
  classes: 0,
  attributes: 0,
  relationships: 0,
};

const EMPTY_INSTANTIATION_VALUE: InstantiationValueItem = {
  value: 0,
  total: null,
};

const EMPTY_INSTANTIATION: InstantiationItem = {
  classes: { ...EMPTY_INSTANTIATION_VALUE },
  attributes: { ...EMPTY_INSTANTIATION_VALUE },
  relationships: { ...EMPTY_INSTANTIATION_VALUE },
};

const EMPTY_COVERAGE_UNCOVERED = {
  classes: [] as string[],
  attributes: [] as string[],
  relationships: [] as string[],
};

const EMPTY_COVERAGE_METRICS: CoverageMetrics = {
  coverage: { ...EMPTY_COVERAGE },
  instantiation: { ...EMPTY_INSTANTIATION },
  uncovered: { ...EMPTY_COVERAGE_UNCOVERED },
};

// Helper functions to transform raw coverage data to display format
function rawCoverageToDisplay(
  raw?: Partial<RawCoverageData> | null,
): CoverageItem {
  const classesDefined = raw?.classes?.defined ?? 0;
  const classesInstantiated = raw?.classes?.instantiated ?? 0;
  const attributesDefined = raw?.attributes?.defined ?? 0;
  const attributesInstantiated = raw?.attributes?.instantiated ?? 0;
  const relationshipsDefined = raw?.relationships?.defined ?? 0;
  const relationshipsInstantiated = raw?.relationships?.instantiated ?? 0;

  return {
    classes: classesDefined > 0 ? classesInstantiated / classesDefined : 1,
    attributes:
      attributesDefined > 0 ? attributesInstantiated / attributesDefined : 1,
    relationships:
      relationshipsDefined > 0
        ? relationshipsInstantiated / relationshipsDefined
        : 1,
  };
}

function rawInstantiationToDisplay(
  raw?: Partial<RawInstantiationData> | null,
): InstantiationItem {
  const classesTotalInstantiated = raw?.classes?.total_instantiated ?? 0;
  const classesTotalDefined = raw?.classes?.total_defined ?? 0;
  const attributesTotalInstantiated = raw?.attributes?.total_instantiated ?? 0;
  const attributesTotalDefined = raw?.attributes?.total_defined ?? 0;
  const relationshipsTotalInstantiated =
    raw?.relationships?.total_instantiated ?? 0;
  const relationshipsTotalDefined = raw?.relationships?.total_defined ?? 0;

  return {
    classes: {
      value: classesTotalInstantiated,
      total: classesTotalDefined === 0 ? null : classesTotalDefined,
    },
    attributes: {
      value: attributesTotalInstantiated,
      total: attributesTotalDefined === 0 ? null : attributesTotalDefined,
    },
    relationships: {
      value: relationshipsTotalInstantiated,
      total: relationshipsTotalDefined === 0 ? null : relationshipsTotalDefined,
    },
  };
}

function rawCoverageUncoveredToDisplay(raw?: Partial<RawCoverageData> | null) {
  return {
    classes: raw?.classes?.uncovered || [],
    attributes: raw?.attributes?.uncovered || [],
    relationships: raw?.relationships?.uncovered || [],
  };
}

function getCoverageMetrics(
  raw:
    | {
        coverage?: Partial<RawCoverageData>;
        instantiation?: Partial<RawInstantiationData>;
      }
    | null
    | undefined,
): CoverageMetrics {
  if (!raw || (!raw.coverage && !raw.instantiation)) {
    return { ...EMPTY_COVERAGE_METRICS };
  }
  return {
    coverage: rawCoverageToDisplay(raw.coverage),
    instantiation: rawInstantiationToDisplay(raw.instantiation),
    uncovered: rawCoverageUncoveredToDisplay(raw.coverage),
  };
}

function clampScore(value: number | undefined | null): number {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return 0;
  }
  return Math.max(0, Math.min(100, value));
}

function average(values: Array<number | undefined | null>): number {
  const valid = values.filter(
    (value): value is number =>
      typeof value === "number" && Number.isFinite(value),
  );
  if (valid.length === 0) {
    return 0;
  }
  return valid.reduce((sum, value) => sum + value, 0) / valid.length;
}

const EMPTY_DIVERSITY: DiversityMetrics = {
  numeric: 0,
  stringEquals: 0,
  stringLv: 0,
};

// Helper function to calculate realism success rate from counts
function calculateRealismSuccessRate(
  counts: RealismCounts | null | undefined,
): number {
  if (!counts) return 0;
  const total = counts.realistic + counts.unrealistic + counts.doubtful;
  if (total === 0) return 0;
  return counts.realistic / total;
}

// Helper function to get JudgeResult from RealismCounts
function getJudgeResult(counts: RealismCounts | null | undefined): {
  realistic: number;
  unrealistic: number;
  unknown: number;
  successRate: number;
} {
  if (!counts)
    return { realistic: 0, unrealistic: 0, unknown: 0, successRate: 0 };
  return {
    realistic: counts.realistic,
    unrealistic: counts.unrealistic,
    unknown: counts.doubtful,
    successRate: calculateRealismSuccessRate(counts),
  };
}

function getJudgeResultWithStats(
  counts: RealismCounts | null | undefined,
  judgeStats:
    | {
        input_tokens: number;
        output_tokens: number;
        total_tokens: number;
        time_seconds: number;
      }
    | null
    | undefined,
  judgeModelName: string | undefined,
): {
  realistic: number;
  unrealistic: number;
  unknown: number;
  successRate: number;
  price?: { price: number; tokenInput: number; tokenOutput: number };
  elapsedSeconds?: number;
} {
  const base = getJudgeResult(counts);
  if (!judgeStats || !judgeModelName) return base;

  return {
    ...base,
    price: {
      price: calculatePrice(
        judgeModelName,
        judgeStats.input_tokens,
        judgeStats.output_tokens,
      ),
      tokenInput: judgeStats.input_tokens,
      tokenOutput: judgeStats.output_tokens,
    },
    elapsedSeconds: judgeStats.time_seconds,
  };
}

// Helper function to transform raw difference data to display format
function rawDifferenceToDisplay(
  raw: RawDifferenceData | null | undefined,
): DiversityMetrics {
  if (!raw) return { ...EMPTY_DIVERSITY };
  return {
    numeric: raw.numeric,
    stringEquals: raw.string_equals,
    stringLv: raw.string_lv,
  };
}

function sumTokens(attempts: Attempt[] = []) {
  return attempts.reduce(
    (acc, att) => ({
      input: acc.input + (att.input_tokens || 0),
      output: acc.output + (att.output_tokens || 0),
    }),
    { input: 0, output: 0 },
  );
}

function sumTimeSeconds(attempts: Attempt[] = []) {
  return attempts.reduce((sum, att) => sum + (att.time_seconds || 0), 0);
}

function getAttemptPrompts(attempts: Attempt[] = []): string[] {
  return attempts
    .map((att) => att.prompt || "")
    .filter((prompt) => prompt.trim().length > 0);
}

function getShannonMeanFromSpecific(
  specific: ShannonSpecificEntry[] | undefined,
): {
  active?: number;
  all?: number;
  activeStd?: number;
  allStd?: number;
} {
  if (!specific || specific.length === 0) {
    return {};
  }

  const activeValues = specific
    .map((entry) => entry.shannon?.eveness_active_groups)
    .filter(
      (value): value is number =>
        typeof value === "number" && Number.isFinite(value),
    );
  const allValues = specific
    .map((entry) => entry.shannon?.eveness_all_groups)
    .filter(
      (value): value is number =>
        typeof value === "number" && Number.isFinite(value),
    );

  const active =
    activeValues.length > 0
      ? activeValues.reduce((acc, value) => acc + value, 0) /
        activeValues.length
      : undefined;
  const all =
    allValues.length > 0
      ? allValues.reduce((acc, value) => acc + value, 0) / allValues.length
      : undefined;

  const activeStd =
    active !== undefined && activeValues.length > 0
      ? Math.sqrt(
          activeValues.reduce((acc, value) => acc + (value - active) ** 2, 0) /
            activeValues.length,
        )
      : undefined;
  const allStd =
    all !== undefined && allValues.length > 0
      ? Math.sqrt(
          allValues.reduce((acc, value) => acc + (value - all) ** 2, 0) /
            allValues.length,
        )
      : undefined;

  return { active, all, activeStd, allStd };
}

function findShannonExperiment<T extends { experiment_id: string }>(
  experiments: T[] | undefined,
  logExperimentId: string | undefined,
): T | undefined {
  if (!experiments || experiments.length === 0) return undefined;

  if (!logExperimentId) return undefined;
  return findByExperimentId(experiments, logExperimentId);
}

function buildMetricsFallback() {
  return createEmptyMetricsContent();
}

function isSimpleLogExperiment(
  experiment: SimpleLogExperiment | CoTLogExperiment,
): experiment is SimpleLogExperiment {
  return experiment.type === "simple";
}

function isCoTLogExperiment(
  experiment: SimpleLogExperiment | CoTLogExperiment,
): experiment is CoTLogExperiment {
  return experiment.type === "cot";
}

function hasCoverageCategories(
  value: unknown,
): value is { categories: CoverageCategoryEntry[] } {
  return Array.isArray((value as { categories?: unknown })?.categories);
}

function hasDifferenceCategories(
  value: unknown,
): value is { categories: CoTDifferenceCategory[] } {
  return Array.isArray((value as { categories?: unknown })?.categories);
}

function hasShannonCategories(
  value: unknown,
): value is { categories: ShannonCoTCategoryEntry[] } {
  return Array.isArray((value as { categories?: unknown })?.categories);
}

function isSimpleJudgeGeneration(
  value: unknown,
): value is SimpleJudgeGeneration {
  return !Array.isArray((value as { categories?: unknown })?.categories);
}

function isCoTJudgeGeneration(value: unknown): value is CoTJudgeGeneration {
  return Array.isArray((value as { categories?: unknown })?.categories);
}

function isRealismCounts(value: unknown): value is RealismCounts {
  const realism = value as RealismCounts | undefined;
  return !!(
    realism &&
    typeof realism.realistic === "number" &&
    typeof realism.unrealistic === "number" &&
    typeof realism.doubtful === "number"
  );
}

function isJudgeResponseRealism(value: unknown): value is {
  response_type: string;
  reasoning: string;
} {
  const realism = value as { response_type?: unknown; reasoning?: unknown };
  return (
    typeof realism?.response_type === "string" &&
    typeof realism?.reasoning === "string"
  );
}

function resolveModePaths(
  logExp: Pick<
    SimpleLogExperiment | CoTLogExperiment,
    "date" | "time" | "domain_name"
  >,
  mode: "simple" | "cot",
  datasetExperimentDir: string,
) {
  const modeDir = getChildDirNameIgnoreCase(
    path.join(DATASET_DIR, datasetExperimentDir),
    mode === "simple" ? "Simple" : "CoT",
  );
  const domainFolder = getChildDirNameIgnoreCase(
    path.join(DATASET_DIR, datasetExperimentDir, modeDir),
    getModelName(logExp.domain_name),
  );
  const dateTime = `${logExp.date.split("-").reverse().join("-")}--${logExp.time.replace(/:/g, "-")}`;
  const timestampDir = getChildDirNameIgnoreCase(
    path.join(DATASET_DIR, datasetExperimentDir, modeDir, domainFolder),
    dateTime,
  );

  return { modeDir, domainFolder, timestampDir };
}

function getMajorityRealismResponse(
  counts?: RealismCounts,
): "Realistic" | "Unrealistic" | "Unknown" {
  if (!counts) {
    return "Unknown";
  }
  const { realistic, unrealistic, doubtful } = counts;
  if (realistic > unrealistic && realistic > doubtful) {
    return "Realistic";
  }
  if (unrealistic > realistic && unrealistic > doubtful) {
    return "Unrealistic";
  }
  return "Unknown";
}

function toJudgeLabel(
  value: string | undefined,
): "Realistic" | "Unrealistic" | "Unknown" {
  const normalized = normalizeKey(value);
  if (normalized === "realistic") {
    return "Realistic";
  }
  if (normalized === "unrealistic") {
    return "Unrealistic";
  }
  return "Unknown";
}

type ProcessCtx = {
  logs: ExperimentData["logs"];
  metrics: ExperimentData["metrics"];
  coverage: ExperimentData["coverage"];
  difference: ExperimentData["difference"];
  ged: ExperimentData["ged"];
  shannon: ExperimentData["shannon"];
  judge: ExperimentData["judge"];
  domainLower: string;
  datasetExperimentDir: string;
};

type DifferenceGenerationLookup = {
  generation_id: string;
  difference?: RawDifferenceData;
  categories?: CoTDifferenceCategory[];
};

function processSimpleMode(ctx: ProcessCtx): ModelData["simple"] | null {
  const {
    logs,
    metrics,
    coverage,
    difference,
    ged,
    shannon,
    judge: judgeData,
    domainLower,
    datasetExperimentDir,
  } = ctx;

  const modeLogs = logs.simple;
  const modeMetrics = metrics.simple;
  const modeCoverage = coverage?.simple;
  const modeDifference = difference?.simple;
  const modeGed = ged?.simple;
  const modeShannon = shannon?.simple;
  const modeJudge = judgeData?.simple;

  const logExp = modeLogs.experiments
    .filter(isSimpleLogExperiment)
    .find((entry) => normalizeKey(entry.domain_name) === domainLower);
  if (!logExp) return null;

  const mExp = findByExperimentId(modeMetrics.experiments, logExp.id);
  const covExp = findByExperimentId(modeCoverage?.experiments, logExp.id);
  const diffExp = findByExperimentId(modeDifference?.experiments, logExp.id);
  const gedExpData = findByExperimentId(modeGed?.experiments, logExp.id);
  const shannonExp = findShannonExperiment(modeShannon?.experiments, logExp.id);
  const judgeExp = findByExperimentId(modeJudge?.experiments, logExp.id);

  const { modeDir, domainFolder, timestampDir } = resolveModePaths(
    logExp,
    "simple",
    datasetExperimentDir,
  );

  const generations: SimpleGeneration[] = (logExp.generations || []).map(
    (gen) => {
      const mGen = findByGenerationId(mExp?.generations, gen.id);
      const covGen = findByGenerationId(covExp?.generations, gen.id);
      const diffGen = findByGenerationId<DifferenceGenerationLookup>(
        diffExp?.generations as DifferenceGenerationLookup[] | undefined,
        gen.id,
      );
      const shannonGen = findByGenerationId(shannonExp?.generations, gen.id);
      const judgeGen = findByGenerationId(judgeExp?.generations, gen.id);
      const judgeGenSimple = isSimpleJudgeGeneration(judgeGen)
        ? judgeGen
        : undefined;

      const commonStats = {
        tokens: sumTokens(gen.attempts),
        elapsedSeconds: sumTimeSeconds(gen.attempts),
        shannonSummary: getShannonMeanFromSpecific(shannonGen?.specific),
      };

      const lastAttempt = gen.attempts?.[gen.attempts.length - 1];
      const promptAttempts = getAttemptPrompts(gen.attempts);
      const judgePromptAttempts =
        typeof judgeGenSimple?.judge_prompt === "string" &&
        judgeGenSimple.judge_prompt.trim().length > 0
          ? [judgeGenSimple.judge_prompt]
          : [];
      const mGenMetrics = mGen?.metrics || buildMetricsFallback();

      let judgeResponse: SimpleGeneration["judge"] = gen.judge
        ? {
            response: toJudgeLabel(gen.judge.response),
            why: gen.judge.why,
          }
        : undefined;
      if (isJudgeResponseRealism(judgeGenSimple?.realism)) {
        judgeResponse = {
          response: toJudgeLabel(judgeGenSimple.realism.response_type),
          why: judgeGenSimple.realism.reasoning,
        };
      }

      const instanceName = lastAttempt?.instance_name || "output";
      return {
        id: `gen${gen.id}`,
        pdfAvailable: true,
        pdfUrl: `data/dataset/${datasetExperimentDir}/${modeDir}/${domainFolder}/${timestampDir}/gen${gen.id}/${instanceName}.pdf`,
        metrics: {
          ...mGenMetrics,
          coverage: getCoverageMetrics(covGen),
          diversity: {
            ...rawDifferenceToDisplay(diffGen?.difference),
            shannonActive: commonStats.shannonSummary.active,
            shannonAll: commonStats.shannonSummary.all,
            shannonActiveStd: commonStats.shannonSummary.activeStd,
            shannonAllStd: commonStats.shannonSummary.allStd,
          },
          price: {
            price: calculatePrice(
              logExp.model.name,
              commonStats.tokens.input,
              commonStats.tokens.output,
            ),
            tokenInput: commonStats.tokens.input,
            tokenOutput: commonStats.tokens.output,
          },
          elapsedSeconds: commonStats.elapsedSeconds,
          code: lastAttempt?.response || "",
        },
        shannon: shannonGen?.specific || [],
        judge: judgeResponse,
        systemPrompt: logExp.system_prompt,
        userPrompts: promptAttempts,
        judgeSystemPrompt: modeJudge?.judge_system_prompt || "",
        judgeUserPrompts: judgePromptAttempts,
      };
    },
  );

  const shannonSummary = getShannonMeanFromSpecific(shannonExp?.specific);

  return {
    metrics: {
      syntax: calculateRate(mExp?.metrics?.syntax),
      multiplicities: calculateRate(mExp?.metrics?.multiplicities),
      invariants: calculateRate(mExp?.metrics?.invariants),
    },
    coverage: getCoverageMetrics(covExp),
    generations,
    price: {
      price: calculatePrice(
        logExp.model.name,
        logExp.input_tokens,
        logExp.output_tokens,
      ),
      tokenInput: logExp.input_tokens,
      tokenOutput: logExp.output_tokens,
    },
    elapsedSeconds: logExp.time_seconds,
    diversity: {
      ...rawDifferenceToDisplay(diffExp?.difference),
      ged:
        gedExpData?.ged?.mean != null
          ? { mean: gedExpData.ged.mean, std: gedExpData.ged.std ?? 0 }
          : modeGed?.ged,
      shannonActive: shannonSummary.active,
      shannonAll: shannonSummary.all,
      shannonActiveStd: shannonSummary.activeStd,
      shannonAllStd: shannonSummary.allStd,
    },
    judge: getJudgeResultWithStats(
      judgeExp?.realism || modeJudge?.realism,
      judgeExp?.stats || modeJudge?.stats,
      modeJudge?.model?.name || logExp.model.name,
    ),
    shannon: shannonExp?.specific || [],
    gedHeatmap: gedExpData?.ged,
  };
}

function processCotMode(ctx: ProcessCtx): ModelData["cot"] | null {
  const {
    logs,
    metrics,
    coverage,
    difference,
    ged,
    shannon,
    judge: judgeData,
    domainLower,
    datasetExperimentDir,
  } = ctx;

  const modeLogs = logs.cot;
  const modeMetrics = metrics.cot;
  const modeCoverage = coverage?.cot;
  const modeDifference = difference?.cot;
  const modeGed = ged?.cot;
  const modeShannon = shannon?.cot;
  const modeJudge = judgeData?.cot;

  const logExp = modeLogs.experiments
    .filter(isCoTLogExperiment)
    .find((entry) => normalizeKey(entry.domain_name) === domainLower);
  if (!logExp) return null;

  const mExp = findByExperimentId(modeMetrics.experiments, logExp.id);
  const covExp = findByExperimentId(modeCoverage?.experiments, logExp.id);
  const diffExp = findByExperimentId(modeDifference?.experiments, logExp.id);
  const gedExpData = findByExperimentId(modeGed?.experiments, logExp.id);
  const shannonExp = findShannonExperiment(modeShannon?.experiments, logExp.id);
  const judgeExp = findByExperimentId(modeJudge?.experiments, logExp.id);

  const { modeDir, domainFolder, timestampDir } = resolveModePaths(
    logExp,
    "cot",
    datasetExperimentDir,
  );

  const generations: CoTGeneration[] = (logExp.generations || []).map((gen) => {
    const mGen = findByGenerationId(mExp?.generations, gen.id);
    const covGen = findByGenerationId(covExp?.generations, gen.id);
    const diffGen = findByGenerationId<DifferenceGenerationLookup>(
      diffExp?.generations as DifferenceGenerationLookup[] | undefined,
      gen.id,
    );
    const shannonGen = findByGenerationId(shannonExp?.generations, gen.id);
    const judgeGen = findByGenerationId(judgeExp?.generations, gen.id);
    const judgeGenCoT = isCoTJudgeGeneration(judgeGen) ? judgeGen : undefined;

    const commonStats = {
      shannonSummary: getShannonMeanFromSpecific(shannonGen?.specific),
    };

    const categories = (gen.categories || []).map((catLog: CoTCategoryLog) => {
      const catMetric = findByName(mGen?.categories, catLog.name);
      const judgeCat = judgeGenCoT
        ? findByName(judgeGenCoT.categories, catLog.name)
        : undefined;
      const covCat = hasCoverageCategories(covGen)
        ? findByName(covGen.categories, catLog.name)
        : undefined;
      const diffCat = hasDifferenceCategories(diffGen)
        ? findByName(diffGen.categories, catLog.name)
        : undefined;
      const shannonCat = hasShannonCategories(shannonGen)
        ? findByName(shannonGen.categories, catLog.name)
        : undefined;

      const attempts =
        catLog.IListInstantiator?.attempts || catLog.attempts || [];
      const lastAttempt = attempts[attempts.length - 1];
      const creatorPromptAttempts = getAttemptPrompts(
        catLog.IListCreator?.attempts,
      );
      const instantiatorPromptAttempts = getAttemptPrompts(attempts);
      const creatorTokens = sumTokens(catLog.IListCreator?.attempts);
      const instantiatorTokens = sumTokens(attempts);
      const totalIn = creatorTokens.input + instantiatorTokens.input;
      const totalOut = creatorTokens.output + instantiatorTokens.output;

      const shannonCatSummary = getShannonMeanFromSpecific(
        shannonCat?.specific,
      );

      const judgeCatRealism = judgeCat?.realism;
      const categoryJudge = isJudgeResponseRealism(judgeCatRealism)
        ? {
            response: toJudgeLabel(judgeCatRealism.response_type),
            why: judgeCatRealism.reasoning,
          }
        : isRealismCounts(judgeCatRealism)
          ? {
              response: getMajorityRealismResponse(judgeCatRealism),
              why: `${judgeCatRealism.realistic} realistic, ${judgeCatRealism.unrealistic} unrealistic, ${judgeCatRealism.doubtful} doubtful`,
            }
          : undefined;

      return {
        category: catLog.name,
        ...(catMetric?.metrics || buildMetricsFallback()),
        coverage: getCoverageMetrics(covCat),
        diversity: {
          ...rawDifferenceToDisplay(diffCat?.difference),
          shannonActive: shannonCatSummary.active,
          shannonAll: shannonCatSummary.all,
          shannonActiveStd: shannonCatSummary.activeStd,
          shannonAllStd: shannonCatSummary.allStd,
        },
        code: lastAttempt?.response || "",
        pdfUrl: `data/dataset/${datasetExperimentDir}/${modeDir}/${domainFolder}/${timestampDir}/gen${gen.id}/${catLog.name}.pdf`,
        price: {
          price: calculatePrice(logExp.model.name, totalIn, totalOut),
          tokenInput: totalIn,
          tokenOutput: totalOut,
        },
        elapsedSeconds:
          sumTimeSeconds(catLog.IListCreator?.attempts) +
          sumTimeSeconds(attempts),
        shannon: shannonCat?.specific || [],
        prompts: {
          IModelAnalyzer: {
            systemPrompt: logExp.IModelAnalyzer?.system_prompt || "",
            userPrompts: logExp.IModelAnalyzer?.prompt
              ? [logExp.IModelAnalyzer.prompt]
              : [],
          },
          IListCreator: {
            systemPrompt: catLog.IListCreator?.system_prompt || "",
            userPrompts: creatorPromptAttempts,
          },
          IListInstantiator: {
            systemPrompt: catLog.IListInstantiator?.system_prompt || "",
            userPrompts: instantiatorPromptAttempts,
          },
          Judge: {
            systemPrompt: modeJudge?.judge_system_prompt || "",
            userPrompts:
              typeof judgeCat?.judge_prompt === "string" &&
              judgeCat.judge_prompt.trim().length > 0
                ? [judgeCat.judge_prompt]
                : [],
          },
        },
        judge: categoryJudge,
        realism: isRealismCounts(judgeCatRealism) ? judgeCatRealism : undefined,
      };
    });

    let judgeResponse: CoTGeneration["judge"] = gen.judge
      ? {
          response: toJudgeLabel(gen.judge.response),
          why: gen.judge.why,
        }
      : undefined;
    if (isRealismCounts(judgeGenCoT?.realism)) {
      const { realistic, unrealistic, doubtful } = judgeGenCoT.realism;
      judgeResponse = {
        response: getMajorityRealismResponse(judgeGenCoT.realism),
        why: `${realistic} realistic, ${unrealistic} unrealistic, ${doubtful} doubtful`,
      };
    }

    return {
      id: `gen${gen.id}`,
      pdfAvailable: true,
      pdfUrl: categories[0]?.pdfUrl || "",
      shannon: shannonGen?.specific || [],
      categories,
      metrics: {
        ...(mGen?.metrics || buildMetricsFallback()),
        coverage: getCoverageMetrics(covGen),
        diversity: {
          ...rawDifferenceToDisplay(diffGen?.difference),
          shannonActive: commonStats.shannonSummary.active,
          shannonAll: commonStats.shannonSummary.all,
          shannonActiveStd: commonStats.shannonSummary.activeStd,
          shannonAllStd: commonStats.shannonSummary.allStd,
        },
      },
      judge: judgeResponse,
      realism: isRealismCounts(judgeGenCoT?.realism)
        ? judgeGenCoT?.realism
        : undefined,
    };
  });

  const shannonSummary = getShannonMeanFromSpecific(shannonExp?.specific);

  return {
    metrics: {
      syntax: calculateRate(mExp?.metrics?.syntax),
      multiplicities: calculateRate(mExp?.metrics?.multiplicities),
      invariants: calculateRate(mExp?.metrics?.invariants),
    },
    coverage: getCoverageMetrics(covExp),
    generations,
    price: {
      price: calculatePrice(
        logExp.model.name,
        logExp.input_tokens,
        logExp.output_tokens,
      ),
      tokenInput: logExp.input_tokens,
      tokenOutput: logExp.output_tokens,
    },
    elapsedSeconds: logExp.time_seconds,
    diversity: {
      ...rawDifferenceToDisplay(diffExp?.difference),
      ged:
        gedExpData?.ged?.mean != null
          ? { mean: gedExpData.ged.mean, std: gedExpData.ged.std ?? 0 }
          : modeGed?.ged,
      shannonActive: shannonSummary.active,
      shannonAll: shannonSummary.all,
      shannonActiveStd: shannonSummary.activeStd,
      shannonAllStd: shannonSummary.allStd,
    },
    judge: getJudgeResultWithStats(
      judgeExp?.realism || modeJudge?.realism,
      judgeExp?.stats || modeJudge?.stats,
      modeJudge?.model?.name || logExp.model.name,
    ),
    shannon: shannonExp?.specific || [],
    gedHeatmap: gedExpData?.ged,
  };
}

export function getModelData(
  modelSlug: string,
  experimentId?: string,
): ModelData | null {
  const cached = getExperimentData(experimentId);
  const datasetExperimentDir = getDatasetExperimentDirName(experimentId);
  const modelName = getModelName(modelSlug);
  const domainLower = modelName.toLowerCase();

  const ctx = {
    ...cached,
    domainLower,
    datasetExperimentDir,
  };

  const simpleData = processSimpleMode(ctx);
  const cotData = processCotMode(ctx);

  if (!simpleData?.generations.length && !cotData?.generations.length) {
    return null;
  }

  // Read the .use file content at build time
  let diagramUseCode = "";
  try {
    const useFilePath = path.join(
      DATA_DIR,
      "data",
      "prompts",
      domainLower,
      "diagram.use",
    );
    diagramUseCode = fs.readFileSync(useFilePath, "utf-8");
  } catch (error) {
    warnOnce(
      `missing-use-${domainLower}`,
      `Could not read diagram.use for domain '${domainLower}', using empty code.`,
      error,
    );
  }

  const defaultSimpleStats: ModelData["simple"] = {
    metrics: { syntax: 0, multiplicities: 0, invariants: 0 },
    coverage: { ...EMPTY_COVERAGE_METRICS },
    generations: [],
    diversity: { ...EMPTY_DIVERSITY },
    judge: { realistic: 0, unrealistic: 0, unknown: 0, successRate: 0 },
    price: { price: 0, tokenInput: 0, tokenOutput: 0 },
    elapsedSeconds: 0,
    shannon: [],
  };

  const defaultCotStats: ModelData["cot"] = {
    metrics: { syntax: 0, multiplicities: 0, invariants: 0 },
    coverage: { ...EMPTY_COVERAGE_METRICS },
    generations: [],
    diversity: { ...EMPTY_DIVERSITY },
    judge: { realistic: 0, unrealistic: 0, unknown: 0, successRate: 0 },
    price: { price: 0, tokenInput: 0, tokenOutput: 0 },
    elapsedSeconds: 0,
    shannon: [],
  };

  return {
    name: modelName,
    diagramPdf: `data/prompts/${domainLower}/diagram.pdf`,
    diagramUse: `data/prompts/${domainLower}/diagram.use`,
    diagramUseCode,
    simple: simpleData || defaultSimpleStats,
    cot: cotData || defaultCotStats,
  };
}

export function getDashboardData(experimentId?: string): DashboardData {
  const {
    logs: cachedLogs,
    metrics: cachedMetrics,
    coverage: cachedCoverage,
    difference: cachedDifference,
    ged: cachedGed,
    shannon: cachedShannon,
    judge: cachedJudge,
  } = getExperimentData(experimentId);
  const modelsList: DashboardData["models"] = MODELS_VALUES.map((modelName) => {
    const data = getModelData(modelName, experimentId);
    if (!data) return null;

    return {
      name: modelName as string,
      simple: {
        price: data.simple.price.price,
        syntax: data.simple.metrics.syntax as number,
        multiplicities: data.simple.metrics.multiplicities as number,
        invariants: data.simple.metrics.invariants as number,
        coverage: data.simple.coverage,
        diversity: data.simple.diversity,
        realism: data.simple.judge.successRate,
      },
      cot: {
        price: data.cot.price.price,
        syntax: data.cot.metrics.syntax as number,
        multiplicities: data.cot.metrics.multiplicities as number,
        invariants: data.cot.metrics.invariants as number,
        coverage: data.cot.coverage,
        diversity: data.cot.diversity,
        realism: data.cot.judge.successRate,
      },
    };
  }).filter((m): m is NonNullable<typeof m> => m !== null);

  const getModeTotals = (mode: "simple" | "cot") => {
    const logs = cachedLogs?.[mode];
    const metrics = cachedMetrics?.[mode]?.metrics;
    const coverageData = cachedCoverage?.[mode];
    const differenceData = cachedDifference?.[mode];
    const gedData = cachedGed?.[mode]?.ged;
    const shannonData = cachedShannon?.[mode]?.shannon;
    const shannonActiveSummary = shannonData?.eveness_active_groups;
    const shannonAllSummary = shannonData?.eveness_all_groups;
    const judgeData = cachedJudge?.[mode];

    const experiments = logs?.experiments || [];
    const totalPrice = experiments.reduce(
      (sum: number, exp: SimpleLogExperiment | CoTLogExperiment) => {
        return (
          sum +
          calculatePrice(exp.model.name, exp.input_tokens, exp.output_tokens)
        );
      },
      0,
    );

    return {
      price: {
        price: totalPrice,
        tokenInput: logs?.input_tokens || 0,
        tokenOutput: logs?.output_tokens || 0,
      },
      elapsedSeconds: logs?.time_seconds || 0,
      metrics: {
        syntax: calculateRate(metrics?.syntax),
        multiplicities: calculateRate(metrics?.multiplicities),
        invariants: calculateRate(metrics?.invariants),
      },
      coverage: getCoverageMetrics(coverageData),
      diversity: {
        ...rawDifferenceToDisplay(differenceData?.difference),
        ged: gedData,
        shannonActive: shannonActiveSummary?.mean,
        shannonAll: shannonAllSummary?.mean,
        shannonActiveStd: shannonActiveSummary?.std,
        shannonAllStd: shannonAllSummary?.std,
      },
      judge: getJudgeResultWithStats(
        judgeData?.realism,
        judgeData?.stats,
        judgeData?.model?.name,
      ),
    };
  };

  const simpleTotals = getModeTotals("simple");
  const cotTotals = getModeTotals("cot");
  const positiveCosts = [
    simpleTotals.price.price,
    cotTotals.price.price,
  ].filter((value) => value > 0);
  const minPositiveCost =
    positiveCosts.length > 0 ? Math.min(...positiveCosts) : 0;

  const buildRadarValues = (totals: DashboardModeTotals) => {
    const totalCost = totals.price.price;
    const costScore =
      totalCost > 0 && minPositiveCost > 0
        ? (minPositiveCost / totalCost) * 100
        : 100;
    const validityScore =
      average([
        totals.metrics.syntax,
        totals.metrics.multiplicities,
        totals.metrics.invariants,
      ]) * 100;
    const coverageScore =
      average([
        totals.coverage.coverage.classes,
        totals.coverage.coverage.attributes,
        totals.coverage.coverage.relationships,
      ]) * 100;
    const shannonScore = (totals.diversity.shannonAll ?? 0) * 100;
    const structuralDiversityScore =
      (1 - (totals.diversity.ged?.mean ?? 1)) * 100;
    const attributeDiversityScore =
      average([
        totals.diversity.numeric,
        totals.diversity.stringLv,
        totals.diversity.stringEquals,
      ]) * 100;

    return [
      clampScore(costScore),
      clampScore(totals.judge.successRate * 100),
      clampScore(validityScore),
      clampScore(average([coverageScore, shannonScore])),
      clampScore(structuralDiversityScore),
      clampScore(attributeDiversityScore),
    ];
  };

  return {
    totals: {
      simple: simpleTotals,
      cot: cotTotals,
    },
    radarComparison: {
      axes: [
        {
          key: "cost",
          label: "Cost",
          description: "min(cost) / cost * 100",
          max: 100,
        },
        {
          key: "realism",
          label: "Realism",
          description: "LLM-as-judge",
          max: 100,
        },
        {
          key: "validity",
          label: "Validity",
          description: "syntax + mult. + inv.",
          max: 100,
        },
        {
          key: "coverageDistribution",
          label: "Coverage + Shannon",
          description: "classes + attrs + rels + shannon (all)",
          max: 100,
        },
        {
          key: "structuralDiversity",
          label: "Structural Diversity",
          description: "1 - GED",
          max: 100,
        },
        {
          key: "attributeDiversity",
          label: "Attribute Diversity",
          description: "numeric + lv + eq",
          max: 100,
        },
      ],
      series: [
        {
          name: "Simple",
          values: buildRadarValues(simpleTotals),
        },
        {
          name: "CoT",
          values: buildRadarValues(cotTotals),
        },
      ],
    },
    models: modelsList,
  };
}
