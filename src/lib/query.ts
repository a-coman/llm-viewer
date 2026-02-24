import {
  QUERY_MODES,
  QUERY_CATEGORIES,
  QUERY_AGENTS,
  QUERY_VIEWS,
  QUERY_KEYS,
} from "./constants";

export type ViewerMode = (typeof QUERY_MODES)[keyof typeof QUERY_MODES];
export type ViewerCategory = (typeof QUERY_CATEGORIES)[keyof typeof QUERY_CATEGORIES];
export type ViewerAgent = (typeof QUERY_AGENTS)[keyof typeof QUERY_AGENTS];
export type ViewerView =
  | (typeof QUERY_VIEWS)[keyof typeof QUERY_VIEWS]
  | string;

export interface ViewerState {
  mode: ViewerMode;
  category: ViewerCategory | string;
  agent: ViewerAgent | string;
  view: ViewerView;
}

export const QUERY_DEFAULTS: ViewerState = {
  mode: QUERY_MODES.simple,
  category: QUERY_CATEGORIES.baseline,
  agent: QUERY_AGENTS.modelAnalyzer,
  view: QUERY_VIEWS.instanceDiagram,
};

function normalizeMode(mode: string | null | undefined): ViewerMode {
  return mode === QUERY_MODES.cot ? QUERY_MODES.cot : QUERY_MODES.simple;
}

export function getViewerState(search: string | URLSearchParams): ViewerState {
  const params =
    typeof search === "string"
      ? new URLSearchParams(search.startsWith("?") ? search.slice(1) : search)
      : search;

  return {
    mode: normalizeMode(params.get(QUERY_KEYS.mode)),
    category: params.get(QUERY_KEYS.category) || QUERY_DEFAULTS.category,
    agent: params.get(QUERY_KEYS.agent) || QUERY_DEFAULTS.agent,
    view: params.get(QUERY_KEYS.view) || QUERY_DEFAULTS.view,
  };
}

export function toViewerQuery(
  overrides: Partial<ViewerState> = {},
): URLSearchParams {
  const next = { ...QUERY_DEFAULTS, ...overrides };
  const params = new URLSearchParams();

  if (next.mode === QUERY_MODES.cot) {
    params.set(QUERY_KEYS.mode, QUERY_MODES.cot);
    if (next.category !== QUERY_DEFAULTS.category) {
      params.set(QUERY_KEYS.category, next.category);
    }
    if (next.agent !== QUERY_DEFAULTS.agent) {
      params.set(QUERY_KEYS.agent, next.agent);
    }
  }

  if (next.view !== QUERY_DEFAULTS.view) {
    params.set(QUERY_KEYS.view, next.view);
  }

  return params;
}

export function applyViewerQueryToUrl(
  url: URL,
  overrides: Partial<ViewerState> = {},
): URL {
  const state = { ...getViewerState(url.searchParams), ...overrides };
  const nextParams = toViewerQuery(state);

  url.search = nextParams.toString();
  return url;
}

export function withViewerQuery(
  path: string,
  overrides: Partial<ViewerState> = {},
): string {
  const params = toViewerQuery(overrides);
  const query = params.toString();
  return query ? `${path}?${query}` : path;
}
