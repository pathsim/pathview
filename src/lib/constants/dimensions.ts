/**
 * Dimension constants for nodes, handles, and events
 * Single source of truth - used by both live canvas (CSS) and SVG export
 *
 * All dimensions are designed to align with the grid system defined in grid.ts
 */

import { GRID_SIZE, G } from './grid';

/** Node dimension constants (grid-aligned) */
export const NODE = {
	/** Base width: 10 grid units = 100px */
	baseWidth: G.x10,
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
	/** Center point (size / 2): 4 grid units = 40px */
	center: G.x4,
	/** Diamond shape size (rotated square) */
	diamondSize: 56,
	/** Diamond offset from center (diamondSize / 2) */
	diamondOffset: 28
} as const;

/** Export padding: 4 grid units = 40px */
export const EXPORT_PADDING = G.x4;

/**
 * Round up to next 2G (20px) boundary for symmetric expansion.
 * This ensures nodes expand evenly from center.
 */
export function snapTo2G(value: number): number {
	return Math.ceil(value / G.x2) * G.x2;
}

/**
 * Calculate node dimensions based on ports, content, and rotation.
 *
 * Design principles:
 * - Node center is the local origin (positioned via CSS transform)
 * - All dimensions are multiples of 2G (20px) for symmetric expansion
 * - Port spacing = 2G (20px)
 * - Ports are centered on their edge
 *
 * @param inputCount - Number of input ports
 * @param outputCount - Number of output ports
 * @param rotation - Node rotation (0, 1, 2, 3)
 * @param contentHeight - Optional extra height for content (pinned params, etc.)
 */
export function calculateNodeDimensions(
	inputCount: number,
	outputCount: number,
	rotation: number,
	contentHeight: number = 0
): { width: number; height: number } {
	const isVertical = rotation === 1 || rotation === 3;
	const maxPorts = Math.max(inputCount, outputCount);

	// Minimum dimension to fit ports with padding
	// For N ports: need (N-1) * spacing + padding on each end
	// Simplified: N * portSpacing gives enough room
	const minPortDimension = Math.max(1, maxPorts) * NODE.portSpacing;

	if (isVertical) {
		// Ports on top/bottom, width accommodates them
		const width = snapTo2G(Math.max(NODE.baseWidth, minPortDimension));
		const height = snapTo2G(Math.max(NODE.baseHeight, NODE.baseHeight + contentHeight));
		return { width, height };
	}

	// Ports on left/right, height accommodates them
	const width = snapTo2G(Math.max(NODE.baseWidth, NODE.baseWidth));
	const height = snapTo2G(Math.max(NODE.baseHeight, minPortDimension, NODE.baseHeight + contentHeight));
	return { width, height };
}

/**
 * Calculate the position of a port along an edge (in pixels).
 * Returns a grid-aligned position.
 *
 * @param index - Port index (0-based)
 * @param total - Total number of ports on this edge
 * @param edgeLength - Length of the edge in pixels
 * @returns Position in pixels from the start of the edge
 */
export function calculatePortPosition(
	index: number,
	total: number,
	edgeLength: number
): number {
	if (total <= 0) return edgeLength / 2;
	if (total === 1) return edgeLength / 2;

	// Calculate span of all ports
	const span = (total - 1) * NODE.portSpacing;
	// Center the ports on the edge
	const startOffset = (edgeLength - span) / 2;
	// Position of this port
	const position = startOffset + index * NODE.portSpacing;

	// Snap to grid for safety (should already be aligned if dimensions are correct)
	return G.snap(position);
}
