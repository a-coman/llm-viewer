// Types for the LLM Viewer application

export interface ModelMetrics {
  syntax: number;
  multiplicities: number;
  invariants: number;
  coverage: {
    classes: number;
    attributes: number;
    relationships: number;
  };
  instantiation: {
    classes: number;
    attributes: number;
    relationships: number;
  };
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

export interface GenerationMetrics extends ModelMetrics {
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
    diversity: DiversityMetrics;
    judge: JudgeResult;
    grakel?: GrakelMatrix;
    shannon: ShannonEntry[];
    generations: SimpleGeneration[];
  };
  cot: {
    price: PriceInfo;
    metrics: ModelMetrics;
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
      diversity: DiversityMetrics;
      judge: JudgeResult;
    };
    cot: {
      price: PriceInfo;
      metrics: ModelMetrics;
      diversity: DiversityMetrics;
      judge: JudgeResult;
    };
  };
  models: {
    name: string;
    simple: {
      price: number;
      syntax: number;
      coverage: number;
      realism: number;
    };
    cot: {
      price: number;
      syntax: number;
      coverage: number;
      realism: number;
    };
  }[];
}

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

export const COT_CATEGORIES = [
  "baseline",
  "boundary",
  "complex",
  "edge",
  "invalid",
] as const;
export type CoTCategory = (typeof COT_CATEGORIES)[number];
