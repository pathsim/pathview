/**
 * SVG Export Module
 *
 * Pure SVG rendering from graph state - no DOM scraping.
 * Single source of truth for dimensions, handle paths, and theme colors.
 */

export { exportToSVG } from './renderer';
export type { ExportOptions, RenderContext, Bounds } from './types';
export { DEFAULT_OPTIONS } from './types';
