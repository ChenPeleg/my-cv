// Set up React's act() environment flag for vitest
// @ts-expect-error - IS_REACT_ACT_ENVIRONMENT is a global set for React testing
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
