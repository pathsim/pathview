/**
 * Routing constants
 */

import { G } from '$lib/constants/grid';

/** Margin around nodes for routing (1G = 10px) */
export const ROUTING_MARGIN = G.unit;

/** Minimum distance from source port before first turn (0 - handle provides clearance) */
export const SOURCE_CLEARANCE = 0;

/** Minimum distance from target port before first turn (1G = 10px) */
export const TARGET_CLEARANCE = G.unit;

/** Grid resolution for pathfinding (matches base grid = 10px) */
export const GRID_SIZE = G.unit;

/** Handle tip offset from block edge (0.5 grid units = 5px) */
export const HANDLE_OFFSET = G.unit / 2;

/** Arrow head length - stub should start within arrowhead (0.25 grid units = 2.5px) */
export const ARROW_INSET = G.unit / 4;

/** How many routes to recompute synchronously before yielding to the browser. */
export const ASYNC_BATCH_SIZE = 8;

/** Merge user waypoints closer than this many pixels. */
export const WAYPOINT_MERGE_THRESHOLD = 15;

/** Treat three waypoints as collinear if the middle one is within this many pixels of the line. */
export const WAYPOINT_COLLINEAR_THRESHOLD = 5;

/** Default routing-context padding around node bounds (in pixels). */
export const ROUTING_CONTEXT_PADDING = 100;

/**
 * Sub-pixel offsets that pull the visible edge endpoint slightly out of the
 * handle hitbox so the rounded corner geometry doesn't overlap the port.
 */
export const EDGE_SOURCE_OFFSET = 0.5;
export const EDGE_TARGET_OFFSET = 4.5;

/** Rounded-corner radius for orthogonal edges (in pixels). */
export const EDGE_CORNER_RADIUS = 5;
