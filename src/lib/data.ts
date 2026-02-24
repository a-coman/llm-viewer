import fs from "node:fs";
import path from "node:path";
import { MODELS_VALUES, prices } from "./constants";
import { getModelName, calculateRate, calculatePrice } from "./utils";
import type {
  ModelData,
  CoverageMetrics,
  CoverageItem,
  InstantiationItem,
  InstantiationValueItem,
  SimpleGeneration,
  CoTGeneration,
  LogDataRoot,
  MetricsDataRoot,
  GenerationMetrics,
  CategoryMetrics,
  DashboardData,
  Attempt,
  LogsFileRoot,
  MetricsFileRoot,
  ExperimentLogEntry,
  ExperimentMetricsEntry,
  CoverageFileRoot,
  CoverageModeData,
  RawCoverageData,
  RawInstantiationData,
  DifferenceFileRoot,
  DifferenceModeData,
  RawDifferenceData,
  DiversityMetrics,
  GedFileRoot,
  GedModeData,
  GedSummary,
  GedExperimentMatrix,
  ShannonFileRoot,
  ShannonModeData,
  ShannonSpecificEntry,
  JudgeFileRoot,
  JudgeModeData,
  RealismCounts,
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

// Cache data in memory - now stores the full file with all experiments
let cachedMetricsFile: MetricsFileRoot | null = null;
let cachedLogsFile: LogsFileRoot | null = null;
let cachedCoverageFile: CoverageFileRoot | null = null;
let cachedDifferenceFile: DifferenceFileRoot | null = null;
let cachedGedFile: GedFileRoot | null = null;
let cachedShannonFile: ShannonFileRoot | null = null;
let cachedJudgeFile: JudgeFileRoot | null = null;

const EMPTY_METRIC_STAT = { errors: 0, total: 0, str: [] };
const EMPTY_METRICS_CONTENT = {
  syntax: { ...EMPTY_METRIC_STAT },
  multiplicities: { ...EMPTY_METRIC_STAT },
  invariants: { ...EMPTY_METRIC_STAT },
};

const EMPTY_MODE_LOGS = {
  input_tokens: 0,
  output_tokens: 0,
  total_tokens: 0,
  time_seconds: 0,
  number_experiments: 0,
  experiments: [],
};

const EMPTY_MODE_METRICS = {
  number_experiments: 0,
  metrics: { ...EMPTY_METRICS_CONTENT },
  experiments: [],
};

function normalizeKey(value?: string): string {
  return (value || "").trim().toLowerCase();
}

function sameKey(left?: string, right?: string): boolean {
  return normalizeKey(left) === normalizeKey(right);
}

function findById<T extends { id: string }>(
  items: T[] | undefined,
  id: string,
): T | undefined {
  return items?.find((item) => sameKey(item.id, id));
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
  } catch {
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
  } catch {
    return fallback;
  }
}

function loadData() {
  if (!cachedMetricsFile) {
    try {
      const metricsContent = fs.readFileSync(METRICS_FILE, "utf-8");
      cachedMetricsFile = JSON.parse(metricsContent);
    } catch (error) {
      console.error("Error loading metrics.json:", error);
      cachedMetricsFile = { experiments: [] };
    }
  }
  if (!cachedLogsFile) {
    try {
      const logsContent = fs.readFileSync(LOGS_FILE, "utf-8");
      cachedLogsFile = JSON.parse(logsContent);
    } catch (error) {
      console.error("Error loading logs.json:", error);
      cachedLogsFile = { experiments: [] };
    }
  }
  if (!cachedCoverageFile) {
    try {
      const coverageContent = fs.readFileSync(COVERAGE_FILE, "utf-8");
      cachedCoverageFile = JSON.parse(coverageContent);
    } catch (error) {
      console.error("Error loading coverage.json:", error);
      cachedCoverageFile = { experiments: [] };
    }
  }
  if (!cachedDifferenceFile) {
    try {
      const differenceContent = fs.readFileSync(DIFFERENCE_FILE, "utf-8");
      cachedDifferenceFile = JSON.parse(differenceContent);
    } catch (error) {
      console.error("Error loading difference.json:", error);
      cachedDifferenceFile = { experiments: [] };
    }
  }
  if (!cachedGedFile) {
    try {
      const gedContent = fs.readFileSync(GED_FILE, "utf-8");
      cachedGedFile = JSON.parse(gedContent);
    } catch (error) {
      console.error("Error loading ged.json:", error);
      cachedGedFile = { experiments: [] };
    }
  }
  if (!cachedJudgeFile) {
    try {
      const judgeContent = fs.readFileSync(JUDGE_FILE, "utf-8");
      cachedJudgeFile = JSON.parse(judgeContent);
    } catch (error) {
      console.error("Error loading judge.json:", error);
      cachedJudgeFile = { experiments: [] };
    }
  }
  if (!cachedShannonFile) {
    try {
      const shannonContent = fs.readFileSync(SHANNON_FILE, "utf-8");
      cachedShannonFile = JSON.parse(shannonContent);
    } catch (error) {
      console.error("Error loading shannon.json:", error);
      cachedShannonFile = { experiments: [] };
    }
  }
}

// Get list of all experiment IDs
export function getExperimentIds(): string[] {
  loadData();
  return cachedLogsFile?.experiments.map((exp) => exp.id) || [];
}

// Get experiment data by ID (or first if not specified)
function getExperimentData(experimentId?: string): {
  logs: LogDataRoot;
  metrics: MetricsDataRoot;
  coverage: { simple: CoverageModeData; cot: CoverageModeData } | null;
  difference: { simple: DifferenceModeData; cot: DifferenceModeData } | null;
  ged: { simple: GedModeData; cot: GedModeData } | null;
  shannon: { simple: ShannonModeData; cot: ShannonModeData } | null;
  judge: { simple: JudgeModeData; cot: JudgeModeData } | null;
} {
  loadData();

  const logExp = experimentId
    ? findById(cachedLogsFile?.experiments, experimentId)
    : cachedLogsFile?.experiments[0];

  const metricExp = experimentId
    ? findById(cachedMetricsFile?.experiments, experimentId)
    : cachedMetricsFile?.experiments[0];

  const coverageExp = experimentId
    ? findById(cachedCoverageFile?.experiments, experimentId)
    : cachedCoverageFile?.experiments[0];

  const differenceExp = experimentId
    ? findById(cachedDifferenceFile?.experiments, experimentId)
    : cachedDifferenceFile?.experiments[0];

  const gedExp = experimentId
    ? findById(cachedGedFile?.experiments, experimentId)
    : cachedGedFile?.experiments[0];

  const judgeExp = experimentId
    ? findById(cachedJudgeFile?.experiments, experimentId)
    : cachedJudgeFile?.experiments[0];

  const shannonExp = experimentId
    ? findById(cachedShannonFile?.experiments, experimentId)
    : cachedShannonFile?.experiments[0];

  return {
    logs: logExp
      ? { simple: logExp.simple, cot: logExp.cot }
      : { simple: { ...EMPTY_MODE_LOGS }, cot: { ...EMPTY_MODE_LOGS } },
    metrics: metricExp
      ? { simple: metricExp.simple, cot: metricExp.cot }
      : { simple: { ...EMPTY_MODE_METRICS }, cot: { ...EMPTY_MODE_METRICS } },
    coverage: coverageExp
      ? { simple: coverageExp.simple, cot: coverageExp.cot }
      : null,
    difference: differenceExp
      ? { simple: differenceExp.simple, cot: differenceExp.cot }
      : null,
    ged: gedExp ? { simple: gedExp.simple, cot: gedExp.cot } : null,
    shannon: shannonExp
      ? { simple: shannonExp.simple, cot: shannonExp.cot }
      : null,
    judge: judgeExp ? { simple: judgeExp.simple, cot: judgeExp.cot } : null,
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

const EMPTY_COVERAGE_METRICS: CoverageMetrics = {
  coverage: { ...EMPTY_COVERAGE },
  instantiation: { ...EMPTY_INSTANTIATION },
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
  };
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

function findShannonExperiment(
  experiments: { experiment_id: string }[] | undefined,
  logExperimentId: string | undefined,
  mode: "simple" | "cot",
  domainLower: string,
) {
  if (!experiments || experiments.length === 0) return undefined;

  const byId = logExperimentId
    ? findByExperimentId(
        experiments as Array<{ experiment_id: string }>,
        logExperimentId,
      )
    : undefined;
  if (byId) return byId;

  const prefix = `${mode}-${domainLower}-`;
  const fallbackMatches = experiments.filter((entry) =>
    normalizeKey(entry.experiment_id).startsWith(prefix),
  );
  if (fallbackMatches.length === 0) return undefined;

  return fallbackMatches[0];
}

export function getModelData(
  modelSlug: string,
  experimentId?: string,
): ModelData | null {
  const {
    logs: cachedLogs,
    metrics: cachedMetrics,
    coverage: cachedCoverage,
    difference: cachedDifference,
    ged: cachedGed,
    shannon: cachedShannon,
    judge: cachedJudge,
  } = getExperimentData(experimentId);
  const datasetExperimentDir = getDatasetExperimentDirName(experimentId);
  const modelName = getModelName(modelSlug);
  const domainLower = modelName.toLowerCase();

  const getSimples = () => {
    const logExps =
      cachedLogs?.simple?.experiments.filter(
        (e) => e.domain_name.toLowerCase() === domainLower,
      ) || [];
    const metricExps = cachedMetrics?.simple?.experiments || [];
    const coverageExps = cachedCoverage?.simple?.experiments || [];
    const differenceExps = cachedDifference?.simple?.experiments || [];
    const gedExps = cachedGed?.simple?.experiments || [];
    const shannonExps = cachedShannon?.simple?.experiments || [];
    const judgeExps = cachedJudge?.simple?.experiments || [];
    const generations: SimpleGeneration[] = [];

    const logExp = logExps[0];
    const mExp = logExp ? findByExperimentId(metricExps, logExp.id) : null;
    const covExp = logExp ? findByExperimentId(coverageExps, logExp.id) : null;
    const diffExp = logExp
      ? findByExperimentId(differenceExps, logExp.id)
      : null;
    const gedExp = logExp ? findByExperimentId(gedExps, logExp.id) : null;
    const shannonExp = findShannonExperiment(
      shannonExps,
      logExp?.id,
      "simple",
      domainLower,
    );
    const judgeExp = logExp ? findByExperimentId(judgeExps, logExp.id) : null;

    if (logExp && mExp) {
      const dateTime = `${logExp.date
        .split("-")
        .reverse()
        .join("-")}--${logExp.time.replace(/:/g, "-")}`;
      const simpleModeDir = getChildDirNameIgnoreCase(
        path.join(DATASET_DIR, datasetExperimentDir),
        "Simple",
      );
      const domainFolder = getChildDirNameIgnoreCase(
        path.join(DATASET_DIR, datasetExperimentDir, simpleModeDir),
        getModelName(logExp.domain_name),
      );
      const timestampDir = getChildDirNameIgnoreCase(
        path.join(
          DATASET_DIR,
          datasetExperimentDir,
          simpleModeDir,
          domainFolder,
        ),
        dateTime,
      );

      logExp.generations.forEach((gen) => {
        const mGen = findByGenerationId(mExp.generations, gen.id);
        const covGen = findByGenerationId(covExp?.generations, gen.id);
        const diffGen = findByGenerationId(
          diffExp?.generations as
            | Array<{ generation_id: string; difference: RawDifferenceData }>
            | undefined,
          gen.id,
        );
        const shannonGen = findByGenerationId(
          shannonExp?.generations as
            | Array<{
                generation_id: string;
                specific: ShannonSpecificEntry[];
              }>
            | undefined,
          gen.id,
        ) as
          | {
              generation_id: string;
              specific: ShannonSpecificEntry[];
            }
          | undefined;
        // Find judge generation data - cast to SimpleJudgeGeneration type
        const judgeGen = findByGenerationId(judgeExp?.generations, gen.id) as
          | {
              generation_id: string;
              realism?: { response_type: string; reasoning: string };
            }
          | undefined;
        const attempt = gen.attempts?.[gen.attempts.length - 1];
        const tokens = sumTokens(gen.attempts);
        const elapsedSeconds = sumTimeSeconds(gen.attempts);

        const shannonGenSummary = getShannonMeanFromSpecific(
          shannonGen?.specific,
        );

        if (mGen && attempt) {
          const genMetrics: any = {
            syntax: mGen.metrics.syntax,
            multiplicities: mGen.metrics.multiplicities,
            invariants: mGen.metrics.invariants,
            coverage: getCoverageMetrics(covGen),
            diversity: rawDifferenceToDisplay(diffGen?.difference),
            code: attempt.response,
            price: {
              price: calculatePrice(
                logExp.model.name,
                tokens.input,
                tokens.output,
              ),
              tokenInput: tokens.input,
              tokenOutput: tokens.output,
            },
            elapsedSeconds,
          };

          genMetrics.diversity = {
            ...(genMetrics.diversity || {}),
            shannonActive: shannonGenSummary.active,
            shannonAll: shannonGenSummary.all,
            shannonActiveStd: shannonGenSummary.activeStd,
            shannonAllStd: shannonGenSummary.allStd,
          };

          const instanceName = attempt.instance_name || "output";
          const pdfUrl = `data/dataset/${datasetExperimentDir}/${simpleModeDir}/${domainFolder}/${timestampDir}/gen${gen.id}/${instanceName}.pdf`;

          // Build judge response from judge data or fallback to logs
          const judgeResponse = judgeGen?.realism
            ? {
                response: (judgeGen.realism.response_type
                  .charAt(0)
                  .toUpperCase() + judgeGen.realism.response_type.slice(1)) as
                  | "Realistic"
                  | "Unrealistic"
                  | "Unknown",
                why: judgeGen.realism.reasoning,
              }
            : (gen.judge as SimpleGeneration["judge"]);

          generations.push({
            id: `gen${gen.id}`,
            pdfAvailable: true,
            pdfUrl,
            metrics: genMetrics,
            shannon: shannonGen?.specific || [],
            judge: judgeResponse,
            systemPrompt: logExp.system_prompt,
            userPrompt: attempt.prompt,
          });
        }
      });

      const shannonSummary = getShannonMeanFromSpecific(shannonExp?.specific);

      return {
        metrics: {
          syntax: calculateRate(mExp.metrics.syntax),
          multiplicities: calculateRate(mExp.metrics.multiplicities),
          invariants: calculateRate(mExp.metrics.invariants),
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
          ged: cachedGed?.simple?.ged,
          shannonActive: shannonSummary.active,
          shannonAll: shannonSummary.all,
          shannonActiveStd: shannonSummary.activeStd,
          shannonAllStd: shannonSummary.allStd,
        },
        judge: getJudgeResultWithStats(
          judgeExp?.realism || cachedJudge?.simple?.realism,
          judgeExp?.stats || cachedJudge?.simple?.stats,
          cachedJudge?.simple?.model?.name || logExp.model.name,
        ),
        shannon: shannonExp?.specific || [],
        grakel: undefined,
        gedHeatmap: gedExp?.ged,
      };
    }

    return {
      metrics: { syntax: 0, multiplicities: 0, invariants: 0 },
      coverage: { ...EMPTY_COVERAGE_METRICS },
      generations: [],
      price: { price: 0, tokenInput: 0, tokenOutput: 0 },
      elapsedSeconds: 0,
      diversity: { ...EMPTY_DIVERSITY },
      judge: { realistic: 0, unrealistic: 0, unknown: 0, successRate: 0 },
      shannon: [],
      grakel: undefined,
      gedHeatmap: undefined,
    };
  };

  const getCoTs = () => {
    const logExps =
      cachedLogs?.cot?.experiments.filter(
        (e) => e.domain_name.toLowerCase() === domainLower,
      ) || [];
    const metricExps = cachedMetrics?.cot?.experiments || [];
    const coverageExps = cachedCoverage?.cot?.experiments || [];
    const differenceExps = cachedDifference?.cot?.experiments || [];
    const gedExps = cachedGed?.cot?.experiments || [];
    const shannonExps = cachedShannon?.cot?.experiments || [];
    const judgeExps = cachedJudge?.cot?.experiments || [];
    const generations: CoTGeneration[] = [];

    const logExp = logExps[0];
    const mExp = logExp ? findByExperimentId(metricExps, logExp.id) : null;
    const covExp = logExp ? findByExperimentId(coverageExps, logExp.id) : null;
    const diffExp = logExp
      ? findByExperimentId(differenceExps, logExp.id)
      : null;
    const gedExp = logExp ? findByExperimentId(gedExps, logExp.id) : null;
    const shannonExp = findShannonExperiment(
      shannonExps,
      logExp?.id,
      "cot",
      domainLower,
    );
    const judgeExp = logExp ? findByExperimentId(judgeExps, logExp.id) : null;

    if (logExp && mExp) {
      const dateTime = `${logExp.date
        .split("-")
        .reverse()
        .join("-")}--${logExp.time.replace(/:/g, "-")}`;
      const cotModeDir = getChildDirNameIgnoreCase(
        path.join(DATASET_DIR, datasetExperimentDir),
        "CoT",
      );
      const domainFolder = getChildDirNameIgnoreCase(
        path.join(DATASET_DIR, datasetExperimentDir, cotModeDir),
        getModelName(logExp.domain_name),
      );
      const timestampDir = getChildDirNameIgnoreCase(
        path.join(DATASET_DIR, datasetExperimentDir, cotModeDir, domainFolder),
        dateTime,
      );

      logExp.generations.forEach((gen) => {
        const mGen = findByGenerationId(mExp.generations, gen.id);
        // Find coverage generation - it may have categories
        const covGen = findByGenerationId(covExp?.generations, gen.id) as
          | {
              generation_id: string;
              categories?: Array<{
                name: string;
                coverage: RawCoverageData;
                instantiation: RawInstantiationData;
              }>;
              coverage: RawCoverageData;
              instantiation: RawInstantiationData;
            }
          | undefined;
        // Find difference generation - it may have categories
        const diffGen = findByGenerationId(
          diffExp?.generations as
            | Array<{
                generation_id: string;
                categories?: Array<{
                  name: string;
                  difference: RawDifferenceData;
                }>;
                difference: RawDifferenceData;
              }>
            | undefined,
          gen.id,
        ) as
          | {
              generation_id: string;
              categories?: Array<{
                name: string;
                difference: RawDifferenceData;
              }>;
              difference: RawDifferenceData;
            }
          | undefined;

        const shannonGen = findByGenerationId(
          shannonExp?.generations as
            | Array<{
                generation_id: string;
                specific?: ShannonSpecificEntry[];
                categories?: Array<{
                  name: string;
                  specific: ShannonSpecificEntry[];
                }>;
              }>
            | undefined,
          gen.id,
        ) as
          | {
              generation_id: string;
              specific?: ShannonSpecificEntry[];
              categories?: Array<{
                name: string;
                specific: ShannonSpecificEntry[];
              }>;
            }
          | undefined;

        if (!mGen) return;

        // Find judge generation data for CoT
        const judgeGen = findByGenerationId(judgeExp?.generations, gen.id) as
          | {
              generation_id: string;
              realism?: {
                realistic: number;
                unrealistic: number;
                doubtful: number;
              };
              categories?: {
                name: string;
                realism?: {
                  response_type: string;
                  reasoning: string;
                };
              }[];
            }
          | undefined;

        const catMetricsList: any[] = gen.categories.map((catLog) => {
          const catMetric = findByName(mGen.categories, catLog.name);
          const judgeCat = findByName(judgeGen?.categories, catLog.name);

          const covCat = findByName(covGen?.categories, catLog.name);
          const diffCat = findByName(diffGen?.categories, catLog.name);
          const shannonCat = findByName(shannonGen?.categories, catLog.name) as
            | { specific?: ShannonSpecificEntry[] }
            | undefined;
          const attempts =
            catLog.IListInstantiator?.attempts || catLog.attempts || [];
          const attempt = attempts?.[attempts.length - 1];

          // Sum tokens from both Creator and Instantiator if available
          const creatorTokens = sumTokens(catLog.IListCreator?.attempts);
          const instantiatorTokens = sumTokens(attempts);
          const totalIn = creatorTokens.input + instantiatorTokens.input;
          const totalOut = creatorTokens.output + instantiatorTokens.output;
          const creatorTime = sumTimeSeconds(catLog.IListCreator?.attempts);
          const instantiatorTime = sumTimeSeconds(attempts);
          const elapsedSeconds = creatorTime + instantiatorTime;

          const shannonCatSummary = getShannonMeanFromSpecific(
            shannonCat?.specific,
          );

          // Extract prompts from all 3 agents
          const creatorAttempts = catLog.IListCreator?.attempts || [];
          const creatorLastAttempt =
            creatorAttempts[creatorAttempts.length - 1];
          const instantiatorLastAttempt = attempt;

          const prompts = {
            IModelAnalyzer: {
              systemPrompt: logExp.IModelAnalyzer?.system_prompt || "",
              userPrompt: logExp.IModelAnalyzer?.prompt || "",
            },
            IListCreator: {
              systemPrompt: catLog.IListCreator?.system_prompt || "",
              userPrompt: creatorLastAttempt?.prompt || "",
            },
            IListInstantiator: {
              systemPrompt: catLog.IListInstantiator?.system_prompt || "",
              userPrompt: instantiatorLastAttempt?.prompt || "",
            },
          };

          const categoryData: any = {
            category: catLog.name,
            syntax: catMetric?.metrics?.syntax || { ...EMPTY_METRIC_STAT },
            multiplicities: catMetric?.metrics?.multiplicities || {
              ...EMPTY_METRIC_STAT,
            },
            invariants: catMetric?.metrics?.invariants || {
              ...EMPTY_METRIC_STAT,
            },
            coverage: getCoverageMetrics(covCat),
            diversity: rawDifferenceToDisplay(diffCat?.difference),
            code: attempt?.response || "",
            pdfUrl: `data/dataset/${datasetExperimentDir}/${cotModeDir}/${domainFolder}/${timestampDir}/gen${gen.id}/${catLog.name}.pdf`,
            price: {
              price: calculatePrice(logExp.model.name, totalIn, totalOut),
              tokenInput: totalIn,
              tokenOutput: totalOut,
            },
            elapsedSeconds,
            shannon: shannonCat?.specific || [],
            prompts,
            judge: judgeCat
              ? {
                  response: judgeCat.realism?.response_type || "Unknown",
                  why: judgeCat.realism?.reasoning || "",
                }
              : undefined,
            realism: judgeCat?.realism,
          };

          categoryData.diversity = {
            ...(categoryData.diversity || {}),
            shannonActive: shannonCatSummary.active,
            shannonAll: shannonCatSummary.all,
            shannonActiveStd: shannonCatSummary.activeStd,
            shannonAllStd: shannonCatSummary.allStd,
          };

          return categoryData;
        });

        const shannonGenSummary = getShannonMeanFromSpecific(
          shannonGen?.specific,
        );

        // Build judge response - for CoT we calculate based on realism counts
        let judgeResponse: CoTGeneration["judge"] =
          gen.judge as CoTGeneration["judge"];
        if (judgeGen?.realism) {
          const counts = judgeGen.realism;
          const total = counts.realistic + counts.unrealistic + counts.doubtful;
          let responseType: "Realistic" | "Unrealistic" | "Unknown" = "Unknown";
          if (
            counts.realistic > counts.unrealistic &&
            counts.realistic > counts.doubtful
          ) {
            responseType = "Realistic";
          } else if (
            counts.unrealistic > counts.realistic &&
            counts.unrealistic > counts.doubtful
          ) {
            responseType = "Unrealistic";
          }
          judgeResponse = {
            response: responseType,
            why: `${counts.realistic} realistic, ${counts.unrealistic} unrealistic, ${counts.doubtful} doubtful`,
          };
        }

        generations.push({
          id: `gen${gen.id}`,
          pdfAvailable: true,
          pdfUrl: catMetricsList[0]?.pdfUrl,
          shannon: shannonGen?.specific || [],
          categories: catMetricsList,
          metrics: {
            syntax: mGen.metrics.syntax,
            multiplicities: mGen.metrics.multiplicities,
            invariants: mGen.metrics.invariants,
            coverage: getCoverageMetrics(covGen),
            diversity: {
              ...rawDifferenceToDisplay(diffGen?.difference),
              shannonActive: shannonGenSummary.active,
              shannonAll: shannonGenSummary.all,
              shannonActiveStd: shannonGenSummary.activeStd,
              shannonAllStd: shannonGenSummary.allStd,
            },
          },
          judge: judgeResponse,
          realism: judgeGen?.realism,
        });
      });

      const shannonSummary = getShannonMeanFromSpecific(shannonExp?.specific);

      return {
        metrics: {
          syntax: calculateRate(mExp.metrics.syntax),
          multiplicities: calculateRate(mExp.metrics.multiplicities),
          invariants: calculateRate(mExp.metrics.invariants),
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
          ged: cachedGed?.cot?.ged,
          shannonActive: shannonSummary.active,
          shannonAll: shannonSummary.all,
          shannonActiveStd: shannonSummary.activeStd,
          shannonAllStd: shannonSummary.allStd,
        },
        judge: getJudgeResultWithStats(
          judgeExp?.realism || cachedJudge?.cot?.realism,
          judgeExp?.stats || cachedJudge?.cot?.stats,
          cachedJudge?.cot?.model?.name || logExp.model.name,
        ),
        shannon: shannonExp?.specific || [],
        grakel: undefined,
        gedHeatmap: gedExp?.ged,
      };
    }

    return {
      metrics: { syntax: 0, multiplicities: 0, invariants: 0 },
      coverage: { ...EMPTY_COVERAGE_METRICS },
      generations: [],
      price: { price: 0, tokenInput: 0, tokenOutput: 0 },
      elapsedSeconds: 0,
      diversity: { ...EMPTY_DIVERSITY },
      judge: { realistic: 0, unrealistic: 0, unknown: 0, successRate: 0 },
      shannon: [],
      grakel: undefined,
      gedHeatmap: undefined,
    };
  };

  const simpleData = getSimples();
  const cotData = getCoTs();

  if (simpleData.generations.length === 0 && cotData.generations.length === 0) {
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
  } catch (e) {
    // File may not exist for some models
  }

  return {
    name: modelName,
    diagramPdf: `data/prompts/${domainLower}/diagram.pdf`,
    diagramUse: `data/prompts/${domainLower}/diagram.use`,
    diagramUseCode,
    simple: simpleData,
    cot: cotData,
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
    const totalPrice = experiments.reduce((sum, exp) => {
      return (
        sum +
        calculatePrice(exp.model.name, exp.input_tokens, exp.output_tokens)
      );
    }, 0);

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

  return {
    totals: {
      simple: getModeTotals("simple"),
      cot: getModeTotals("cot"),
    },
    models: modelsList,
  };
}
