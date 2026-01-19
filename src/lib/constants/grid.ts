/**
 * Unified Grid System
 *
 * Single source of truth for all grid-related dimensions.
 * All node, port, and edge positioning should align to this grid.
 *
 * Design principle:
 * - Base grid unit: 10px
 * - Port spacing: 2 grid units (20px) - works for both even and odd port counts
 * - Node dimensions: multiples of grid unit
 * - Edges route along grid lines
 */

/** Base grid unit in pixels */
export const GRID_SIZE = 10;

/** Grid calculation helpers */
export const G = {
	/** Base unit in pixels */
	unit: GRID_SIZE,
	/** 2 grid units - standard port spacing */
	x2: GRID_SIZE * 2,
	/** 3 grid units */
	x3: GRID_SIZE * 3,
	/** 4 grid units */
	x4: GRID_SIZE * 4,
	/** 5 grid units */
	x5: GRID_SIZE * 5,
	/** 10 grid units - standard node width */
	x10: GRID_SIZE * 10,
	/** Convert grid units to pixels */
	px: (units: number) => units * GRID_SIZE,
	/** Snap a pixel value to nearest grid point */
	snap: (value: number) => Math.round(value / GRID_SIZE) * GRID_SIZE,
	/** Check if a value is on grid */
	isAligned: (value: number) => value % GRID_SIZE === 0,
} as const;

/** SvelteFlow snap grid configuration [x, y] */
export const SNAP_GRID: [number, number] = [GRID_SIZE, GRID_SIZE];

/** Background dot/grid spacing (2G for visual clarity) */
export const BACKGROUND_GAP = G.x2;
