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
