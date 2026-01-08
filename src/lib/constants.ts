// Shared constants and helpers

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

// Helper functions
export function getColor(value: number, invert = false): string {
  if (isNaN(value) || value === undefined || value === null) return "";
  let score = invert ? 1 - value : value;
  score = Math.max(0, Math.min(1, score));
  const hue = score <= 0.5 ? 0 : (score - 0.5) * 2 * 120;
  return `background-color: hsl(${hue}, 80%, 92%);`;
}

export function formatPercent(value: number | undefined | null): string {
  if (value === undefined || value === null || isNaN(value)) return "—";
  return `${(value * 100).toFixed(1)}%`;
}

export function formatCurrency(value: number | undefined | null): string {
  if (value === undefined || value === null || isNaN(value)) return "—";
  return `$${value.toFixed(2)}`;
}

export function getModelName(modelSlug: string): string {
  return MODELS.find((m) => m.toLowerCase() === modelSlug) || modelSlug;
}
