/**
 * Dimension constants for nodes, handles, and events
 * Single source of truth - used by both live canvas (CSS) and SVG export
 *
 * All dimensions are designed to align with the grid system defined in grid.ts
 */

import { GRID_SIZE, G } from './grid';

/** Node dimension constants (grid-aligned) */
export const NODE = {
	/** Base width: 8 grid units = 80px */
	baseWidth: G.px(8),
	/** Base height: 4 grid units = 40px */
	baseHeight: G.x4,
	/** Spacing between ports: 2 grid units = 20px */
	portSpacing: G.x2,
	/** Border width in pixels */
	borderWidth: 1
} as const;

/** Handle (port connector) dimensions */
export const HANDLE = {
	/** Width of horizontal handles (rotation 0, 2): 1 grid unit */
	width: GRID_SIZE,
	/** Height of horizontal handles (rotation 0, 2) */
	height: 8,
	/** Inset from outer to inner path for hollow effect */
	hollowInset: 1.5
} as const;

/** Event node dimensions (grid-aligned) */
export const EVENT = {
	/** Total bounding box size: 8 grid units = 80px */
	size: G.px(8),
	/** Diamond shape size (rotated square) */
	diamondSize: 56,
	/** Diamond offset from center (diamondSize / 2) */
	diamondOffset: 28
} as const;

/** Export padding: 4 grid units = 40px */
export const EXPORT_PADDING = G.x4;

/**
 * Round up to next 2G (20px) boundary.
 * This ensures nodes expand by 1G in each direction (symmetric from center).
 */
export function snapTo2G(value: number): number {
	return Math.ceil(value / G.x2) * G.x2;
}

/**
 * Calculate port offset from center in pixels.
 * Used for SVG rendering and numeric calculations.
 *
 * @param index - Port index (0-based)
 * @param total - Total number of ports on this edge
 * @returns Offset in pixels from center (negative = before center, positive = after)
 */
export function getPortOffset(index: number, total: number): number {
	if (total <= 0 || total === 1) {
		return 0; // Single port at center
	}
	// For N ports with spacing S: span = (N-1)*S, offset from center = -span/2 + i*S
	const span = (total - 1) * NODE.portSpacing;
	return -span / 2 + index * NODE.portSpacing;
}

/**
 * Calculate port position as CSS calc() expression.
 * Uses offset from center to ensure grid alignment regardless of node size,
 * since the node center is always at a grid-aligned position.
 *
 * @param index - Port index (0-based)
 * @param total - Total number of ports on this edge
 * @returns CSS position value (e.g., "50%" or "calc(50% + 10px)")
 */
export function getPortPositionCalc(index: number, total: number): string {
	const offset = getPortOffset(index, total);
	if (offset === 0) {
		return '50%';
	}
	return `calc(50% + ${offset}px)`;
}

/** Baseline text height for comparing math rendering (approximate) */
const BASELINE_TEXT_HEIGHT = 14;

/** Icon-mode block content size (name above icon) */
const ICON_CONTENT_WIDTH = G.px(7); // 70
const ICON_CONTENT_HEIGHT = G.px(6); // 60

/**
 * Calculate node dimensions from node data.
 * Used by both SvelteFlow (for bounds) and BaseNode (for CSS).
 *
 * Port labels render outside the block (no dimension impact), so the
 * label-toggle no longer enters this calculation.
 *
 * @param measuredName - Optional measured dimensions for math-rendered names
 */
export function calculateNodeDimensions(
	name: string,
	inputCount: number,
	outputCount: number,
	pinnedParamCount: number,
	rotation: number,
	typeName?: string,
	measuredName?: { width: number; height: number } | null,
	showIcon?: boolean
): { width: number; height: number } {
	const isVertical = rotation === 1 || rotation === 3;
	const maxPortsOnSide = Math.max(inputCount, outputCount);
	const minPortDimension = Math.max(1, maxPortsOnSide) * NODE.portSpacing;

	// Pinned params dimensions
	const pinnedParamsHeight = pinnedParamCount > 0 ? 7 + 24 * pinnedParamCount : 0;
	const pinnedParamsWidth = pinnedParamCount > 0 ? 160 : 0;

	// Type label width estimate (8px font, ~5px per char)
	const typeWidth = typeName ? typeName.length * 5 + 20 : 0;

	// Name width: use measured if available, otherwise estimate.
	// Standard mode: 10px font, ~6px per char + 24px padding.
	// Icon mode: 9px font weight 500, ~5px per char.
	const charWidth = showIcon ? 5 : 6;
	const namePadding = showIcon ? 14 : 20;
	const nameWidth = measuredName
		? snapTo2G(measuredName.width + 24)
		: name.length * charWidth + namePadding;

	// Content width (without port labels) — type label is replaced by the
	// icon in icon-mode, so it must not contribute to the block width.
	let contentWidth = snapTo2G(Math.max(
		NODE.baseWidth,
		nameWidth,
		showIcon ? 0 : typeWidth,
		pinnedParamsWidth,
		showIcon ? ICON_CONTENT_WIDTH : 0,
		isVertical ? minPortDimension : 0
	));

	// Content height: check if math is significantly taller than baseline text
	let contentHeight: number;
	if (showIcon) {
		// Icon mode: name above icon, fixed content height
		contentHeight = ICON_CONTENT_HEIGHT + pinnedParamsHeight;
	} else if (measuredName && measuredName.height > BASELINE_TEXT_HEIGHT * 1.2) {
		// Math is tall (e.g., \displaystyle fractions) - use measured height + type label + padding
		contentHeight = measuredName.height + 24 + pinnedParamsHeight;
	} else {
		// Normal text height
		contentHeight = NODE.baseHeight + pinnedParamsHeight;
	}

	const width = contentWidth;
	const height = isVertical
		? snapTo2G(contentHeight)
		: snapTo2G(Math.max(contentHeight, minPortDimension));

	return { width, height };
}
