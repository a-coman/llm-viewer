import { MODELS, MODELS_LOWER } from "./constants";

// Helper functions
export function getColor(
  value: number | undefined | null,
  greenPos: number,
  redPos: number
): string {
  if (value === undefined || value === null || isNaN(value)) return "";

  // Linear scale: redPos -> 0 (Red), greenPos -> 1 (Green)
  let score = (value - redPos) / (greenPos - redPos);

  // Clamp score between 0 and 1
  score = Math.max(0, Math.min(1, score));

  // Hue 0 is Red, Hue 120 is Green
  const hue = score * 120;

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
  const index = MODELS_LOWER.indexOf(modelSlug.toLowerCase());
  return index !== -1 ? MODELS[index] : modelSlug;
}

export function calculateRate(
  stat: { errors: number; total: number } | undefined
): number {
  if (!stat || !stat.total) return 0;
  return Math.max(0, 1 - stat.errors / stat.total);
}

import { prices } from "./constants";
export function calculatePrice(
  modelName: string,
  inputTokens: number,
  outputTokens: number
): number {
  const priceConfig = (prices as any)[modelName];
  if (!priceConfig) return 0;
  return (
    (inputTokens / 1_000_000) * priceConfig.input +
    (outputTokens / 1_000_000) * priceConfig.output
  );
}
