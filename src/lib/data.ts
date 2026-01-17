import fs from "node:fs";
import path from "node:path";
import { MODELS, prices } from "./constants";
import { getModelName, calculateRate, calculatePrice } from "./utils";
import type {
  ModelData,
  CoverageMetrics,
  CoverageItem,
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
} from "./types";

const DATA_DIR = path.join(process.cwd(), "public");
const METRICS_FILE = path.join(DATA_DIR, "metrics.json");
const LOGS_FILE = path.join(DATA_DIR, "logs.json");

// Cache data in memory - now stores the full file with all experiments
let cachedMetricsFile: MetricsFileRoot | null = null;
let cachedLogsFile: LogsFileRoot | null = null;

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
} {
  loadData();

  const logExp = experimentId
    ? cachedLogsFile?.experiments.find((e) => e.id === experimentId)
    : cachedLogsFile?.experiments[0];

  const metricExp = experimentId
    ? cachedMetricsFile?.experiments.find((e) => e.id === experimentId)
    : cachedMetricsFile?.experiments[0];

  return {
    logs: logExp
      ? { simple: logExp.simple, cot: logExp.cot }
      : { simple: { ...EMPTY_MODE_LOGS }, cot: { ...EMPTY_MODE_LOGS } },
    metrics: metricExp
      ? { simple: metricExp.simple, cot: metricExp.cot }
      : { simple: { ...EMPTY_MODE_METRICS }, cot: { ...EMPTY_MODE_METRICS } },
  };
}

const EMPTY_COVERAGE: CoverageItem = {
  classes: 0,
  attributes: 0,
  relationships: 0,
};
const EMPTY_COVERAGE_METRICS: CoverageMetrics = {
  coverage: { ...EMPTY_COVERAGE },
  instantiation: { ...EMPTY_COVERAGE },
};

function sumTokens(attempts: Attempt[] = []) {
  return attempts.reduce(
    (acc, att) => ({
      input: acc.input + (att.input_tokens || 0),
      output: acc.output + (att.output_tokens || 0),
    }),
    { input: 0, output: 0 },
  );
}

export function getModelData(
  modelSlug: string,
  experimentId?: string,
): ModelData | null {
  const { logs: cachedLogs, metrics: cachedMetrics } =
    getExperimentData(experimentId);
  const modelName = getModelName(modelSlug);
  const domainLower = modelName.toLowerCase();

  const getSimples = () => {
    const logExps =
      cachedLogs?.simple?.experiments.filter(
        (e) => e.domain_name.toLowerCase() === domainLower,
      ) || [];
    const metricExps = cachedMetrics?.simple?.experiments || [];
    const generations: SimpleGeneration[] = [];

    const logExp = logExps[0];
    const mExp = logExp
      ? metricExps.find((m) => m.experiment_id === logExp.id)
      : null;

    if (logExp && mExp) {
      const dateTime = `${logExp.date
        .split("-")
        .reverse()
        .join("-")}--${logExp.time.replace(/:/g, "-")}`;
      const domainFolder = getModelName(logExp.domain_name);

      logExp.generations.forEach((gen) => {
        const mGen = mExp.generations.find((g) => g.generation_id === gen.id);
        const attempt = gen.attempts?.[gen.attempts.length - 1];
        const tokens = sumTokens(gen.attempts);

        if (mGen && attempt) {
          const genMetrics: any = {
            syntax: mGen.metrics.syntax,
            multiplicities: mGen.metrics.multiplicities,
            invariants: mGen.metrics.invariants,
            coverage: { ...EMPTY_COVERAGE_METRICS },
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
          };

          const instanceName = attempt.instance_name || "output";
          const pdfUrl = `/data/dataset/${experimentId}/Simple/${domainFolder}/${dateTime}/gen${gen.id}/${instanceName}.pdf`;

          generations.push({
            id: `gen${gen.id}`,
            pdfAvailable: true,
            pdfUrl,
            metrics: genMetrics,
            judge: gen.judge as SimpleGeneration["judge"],
          });
        }
      });

      return {
        metrics: {
          syntax: calculateRate(mExp.metrics.syntax),
          multiplicities: calculateRate(mExp.metrics.multiplicities),
          invariants: calculateRate(mExp.metrics.invariants),
        },
        coverage: { ...EMPTY_COVERAGE_METRICS },
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
        diversity: { numeric: 0, stringEquals: 0, stringLv: 0 },
        judge: { realistic: 0, unrealistic: 0, unknown: 0, successRate: 0 },
        shannon: [],
        grakel: undefined,
      };
    }

    return {
      metrics: { syntax: 0, multiplicities: 0, invariants: 0 },
      coverage: { ...EMPTY_COVERAGE_METRICS },
      generations: [],
      price: { price: 0, tokenInput: 0, tokenOutput: 0 },
      diversity: { numeric: 0, stringEquals: 0, stringLv: 0 },
      judge: { realistic: 0, unrealistic: 0, unknown: 0, successRate: 0 },
      shannon: [],
      grakel: undefined,
    };
  };

  const getCoTs = () => {
    const logExps =
      cachedLogs?.cot?.experiments.filter(
        (e) => e.domain_name.toLowerCase() === domainLower,
      ) || [];
    const metricExps = cachedMetrics?.cot?.experiments || [];
    const generations: CoTGeneration[] = [];

    const logExp = logExps[0];
    const mExp = logExp
      ? metricExps.find((m) => m.experiment_id === logExp.id)
      : null;

    if (logExp && mExp) {
      const dateTime = `${logExp.date
        .split("-")
        .reverse()
        .join("-")}--${logExp.time.replace(/:/g, "-")}`;
      const domainFolder = getModelName(logExp.domain_name);

      logExp.generations.forEach((gen) => {
        const mGen = mExp.generations.find((g) => g.generation_id === gen.id);
        if (!mGen) return;

        const catMetricsList: any[] = gen.categories.map((catLog) => {
          const catMetric = mGen.categories.find((c) => c.name === catLog.name);
          const attempts =
            catLog.IListInstantiator?.attempts || catLog.attempts || [];
          const attempt = attempts?.[attempts.length - 1];

          // Sum tokens from both Creator and Instantiator if available
          const creatorTokens = sumTokens(catLog.IListCreator?.attempts);
          const instantiatorTokens = sumTokens(attempts);
          const totalIn = creatorTokens.input + instantiatorTokens.input;
          const totalOut = creatorTokens.output + instantiatorTokens.output;

          return {
            category: catLog.name,
            syntax: catMetric?.metrics?.syntax || { ...EMPTY_METRIC_STAT },
            multiplicities: catMetric?.metrics?.multiplicities || {
              ...EMPTY_METRIC_STAT,
            },
            invariants: catMetric?.metrics?.invariants || {
              ...EMPTY_METRIC_STAT,
            },
            coverage: { ...EMPTY_COVERAGE_METRICS },
            code: attempt?.response || "",
            pdfUrl: `/data/dataset/${experimentId}/CoT/${domainFolder}/${dateTime}/gen${gen.id}/${catLog.name}.pdf`,
            price: {
              price: calculatePrice(logExp.model.name, totalIn, totalOut),
              tokenInput: totalIn,
              tokenOutput: totalOut,
            },
          };
        });

        generations.push({
          id: `gen${gen.id}`,
          pdfAvailable: true,
          pdfUrl: catMetricsList[0]?.pdfUrl,
          categories: catMetricsList,
          metrics: {
            syntax: mGen.metrics.syntax,
            multiplicities: mGen.metrics.multiplicities,
            invariants: mGen.metrics.invariants,
            coverage: { ...EMPTY_COVERAGE_METRICS },
          },
          judge: gen.judge as CoTGeneration["judge"],
        });
      });

      return {
        metrics: {
          syntax: calculateRate(mExp.metrics.syntax),
          multiplicities: calculateRate(mExp.metrics.multiplicities),
          invariants: calculateRate(mExp.metrics.invariants),
        },
        coverage: { ...EMPTY_COVERAGE_METRICS },
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
        diversity: { numeric: 0, stringEquals: 0, stringLv: 0 },
        judge: { realistic: 0, unrealistic: 0, unknown: 0, successRate: 0 },
        shannon: [],
        grakel: undefined,
      };
    }

    return {
      metrics: { syntax: 0, multiplicities: 0, invariants: 0 },
      coverage: { ...EMPTY_COVERAGE_METRICS },
      generations: [],
      price: { price: 0, tokenInput: 0, tokenOutput: 0 },
      diversity: { numeric: 0, stringEquals: 0, stringLv: 0 },
      judge: { realistic: 0, unrealistic: 0, unknown: 0, successRate: 0 },
      shannon: [],
      grakel: undefined,
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
    diagramPdf: `/data/prompts/${domainLower}/diagram.pdf`,
    diagramUse: `/data/prompts/${domainLower}/diagram.use`,
    diagramUseCode,
    simple: simpleData,
    cot: cotData,
  };
}

export function getDashboardData(experimentId?: string): DashboardData {
  const { logs: cachedLogs, metrics: cachedMetrics } =
    getExperimentData(experimentId);
  const modelsList: DashboardData["models"] = MODELS.map((modelName) => {
    const data = getModelData(modelName, experimentId);
    if (!data) return null;

    return {
      name: modelName as string,
      simple: {
        price: data.simple.price.price,
        syntax: data.simple.metrics.syntax as number,
        multiplicities: data.simple.metrics.multiplicities as number,
        invariants: data.simple.metrics.invariants as number,
        coverage: data.simple.coverage.coverage.classes,
        realism: data.simple.judge.successRate,
      },
      cot: {
        price: data.cot.price.price,
        syntax: data.cot.metrics.syntax as number,
        multiplicities: data.cot.metrics.multiplicities as number,
        invariants: data.cot.metrics.invariants as number,
        coverage: data.cot.coverage.coverage.classes,
        realism: data.cot.judge.successRate,
      },
    };
  }).filter((m): m is NonNullable<typeof m> => m !== null);

  const getModeTotals = (mode: "simple" | "cot") => {
    const logs = cachedLogs?.[mode];
    const metrics = cachedMetrics?.[mode]?.metrics;

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
      metrics: {
        syntax: calculateRate(metrics?.syntax),
        multiplicities: calculateRate(metrics?.multiplicities),
        invariants: calculateRate(metrics?.invariants),
      },
      coverage: { ...EMPTY_COVERAGE_METRICS },
      diversity: { numeric: 0, stringEquals: 0, stringLv: 0 },
      judge: { realistic: 0, unrealistic: 0, unknown: 0, successRate: 0 },
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
