// Shared constants
export const MODELS = {
  bank: "Bank",
  restaurant: "Restaurant",
  addressBook: "AddressBook",
  pickupNet: "PickupNet",
  hotelManagement: "HotelManagement",
  football: "Football",
  myExpenses: "MyExpenses",
  videoClub: "VideoClub",
  vehicleRental: "VehicleRental",
  statemachine: "Statemachine",
} as const;

export const MODELS_VALUES = Object.values(MODELS);
export const MODELS_LOWER = MODELS_VALUES.map((m) => m.toLowerCase());

export const COT_CATEGORIES = {
  baseline: "baseline",
  boundary: "boundary",
  complex: "complex",
  edge: "edge",
  invalid: "invalid",
} as const;

export const COT_CATEGORIES_VALUES = Object.values(COT_CATEGORIES);

export const QUERY_MODES = {
  simple: "simple",
  cot: "cot",
} as const;

export const QUERY_AGENTS = {
  modelAnalyzer: "IModelAnalyzer",
  listCreator: "IListCreator",
  listInstantiator: "IListInstantiator",
} as const;

export const QUERY_VIEWS = {
  instanceDiagram: "instance-diagram",
  shannonGraph: "shannon-graph",
} as const;

export const QUERY_KEYS = {
  mode: "type",
  category: "category",
  agent: "agent",
  view: "view",
} as const;

export const QUERY_CATEGORIES = COT_CATEGORIES;

export const SIMPLE_GEN_COUNT = 30;
export const COT_GEN_COUNT = 6;

export const prices = {
  GPT_4O_OLD: {
    input: 2.5,
    output: 10,
  },
  GPT_4O: {
    input: 2.5,
    output: 10,
  },
  GPT_5_2: {
    input: 1.75,
    output: 14,
  },
  GEMINI_3_PRO: {
    input: 1.4,
    output: 12.0,
  },
} as const;

// Color ranges for getColor(value, green, red)
// Lower green value = greener at lower cost, higher red = redder at higher cost
export const COLOR_RANGES = {
  price: {
    summary: { green: 10, red: 25 }, // Dashboard summary totals
    model: { green: 2, red: 8 }, // Per-model cost
    generation: { green: 1, red: 3 }, // Per-generation cost
  },
  validation: {
    percent: { green: 1, red: 0 }, // 100% = green, 0% = red
  },
} as const;

// Display constants
export const INFINITY_SYMBOL = "∞";

// Metric Explanations
export const METRIC_EXPLANATIONS = {
  cost: {
    title: "Stats",
    description:
      "Breakdown of the total cost and elapsed time for generating the instances.",
    examples: [
      "Elapsed Time = Console Time (ie. Processing Time + API Calls)",
      "Cost = (input tokens * input price) + (output tokens * output price)",
    ],
  },
  validation: {
    title: "Validation",
    description:
      "Measures the correctness of the instantiation using the USE check function.",
    examples: [
      "Syntax = 1 - (Total Number of syntax errors [use check] / Total Number of lines [instance])",
      "Multiplicities = 1 - (Total Number of multiplicities errors [use check] / Total Number of relationships ([instance] !insert))",
      "Invariants = 1 - (Total Number of invariants errors [use check] / Total Number of invariants ([model] constraints))",
    ],
  },
  diversity: {
    title: "Diversity",
    description:
      "Measures the variability of the generated attribute values. It identifies how much the LLM repeats specific values versus generating unique data points across instances (100%: Diverse, 0%: Repetitive). We group all generated attributes into bags (numeric and string) and then perform pairwise comparisons between every element to obtain:",
    examples: [
      "NumericEquals = Total number of numeric attribute pairs with different values / Total number of possible pairs (n * (n - 1) / 2)",
      "StringEquals = Total number of string attribute pairs that are NOT exactly identical / Total number of possible pairs (n * (n - 1) / 2)",
      "StringLv = Sum of (Levenshtein Distance(a, b) / max(length(a), length(b))) for all string pairs / Total number of possible pairs (n * (n - 1) / 2)",
    ],
  },
  coverage: {
    title: "Model Coverage",
    description:
      'Measures the breadth of the instantiation. It answers: "How much of the structural blueprint (the model) was used?"',
    examples: [
      "Classes = Total Unique Classes instantiated (!new) in the .soil / Total Number of classes (class) in the model .use",
      "Attributes = Total Unique Attributes instantiated (!Class.Attribute or !set) in the .soil / Total Number of attributes (attributes) in the model .use",
      "Relationships = Total Unique Relationships instantiated (!insert) in the .soil / Total Number of relationships (association, composition, aggregation) in the model .use",
    ],
  },
  instantiation: {
    title: "Instance Instantiation",
    description:
      "Measures the depth or density of the data. It answers: \"Of the objects the LLM decided to create, how many of their available 'slots' did it fill?\"",
    examples: [
      "Classes = Total Number of classes (!new) in the instance / Total possible that could have been instantiated (infinity)",
      "Attributes = Total Number of attributes (!Class.Attribute or !set) in the instance / Total possible that could have been instantiated (sum(number of classes instantiated of that type * Class.Attributes))",
      "Relationships = Total Number of relationships (!insert) in the instance / Total possible that could have been instantiated (infinity)",
    ],
  },
  realism: {
    title: "Quality",
    description:
      "Measures the realism of the generated instances. It identifies how much the LLM respects real-world logic. Using Gemini 3 Pro as an LLM as a Judge we ask it to rate (realistic, unrealistic, doubtfull) the realism of each instance and explain its decision.",
    examples: [
      'Realism = Total Number of "realistic" instances / Total Number of instances',
    ],
  },

  ged: {
    title: "GED Similarity",
    description:
      "Measures the Graph Edit Distance (GED) similarity between instances",
    examples: [
      "Similarity = 1 - (GED / (0.5 * (GED_to_empty_A + GED_to_empty_B)))",
      "1 = red = identical graphs",
      "<=0.5 = green = different graphs",
      "We consider as edit operations: Nodes, Edges, Node_Labels and Edge_Labels [https://github.com/a-coman/ged]",
    ],
  },
} as const;
