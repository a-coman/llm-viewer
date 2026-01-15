// Shared constants
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

export const MODELS_LOWER = MODELS.map((m) => m.toLowerCase());

export const COT_CATEGORIES = [
  "baseline",
  "boundary",
  "complex",
  "edge",
  "invalid",
] as const;

export const SIMPLE_GEN_COUNT = 30;
export const COT_GEN_COUNT = 6;

export const prices = {
  GPT_4O: {
    input: 2.5,
    output: 10,
  },
  GPT_5_2: {
    input: 1.75,
    output: 14,
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
