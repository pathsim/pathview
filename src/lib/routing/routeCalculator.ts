/**
 * Simple orthogonal route calculator
 */

import PF from 'pathfinding';
import type { Position } from '$lib/types/common';
import type { RoutingContext, RouteResult, Direction } from './types';
import { DIRECTION_VECTORS } from './types';
import { buildGrid, getGridOffset, worldToGrid } from './gridBuilder';
import { findPathWithTurnPenalty } from './pathfinder';
import { simplifyPath, snapToGrid } from './pathOptimizer';
import { SOURCE_CLEARANCE, TARGET_CLEARANCE, GRID_SIZE } from './constants';

/** Number of cells to skip at path start for shared source port overlap */
const SHARED_SOURCE_CELLS = 2;

/**
 * Calculate stub endpoint (grid-aligned point where stub ends)
 */
function getStubEnd(portPos: Position, direction: Direction, clearance: number): Position {
	const vec = DIRECTION_VECTORS[direction];
	const point = {
		x: portPos.x + vec.x * clearance,
		y: portPos.y + vec.y * clearance
	};
	return snapToGrid(point);
}

/** Cached grid and offset for batch routing */
let cachedGrid: { grid: PF.Grid; offset: Position; walkable: Set<string> } | null = null;

/**
 * Build and cache grid for batch routing (call before calculateRoute batch)
 */
export function prepareRoutingGrid(context: RoutingContext): void {
	const grid = buildGrid(context);
	const offset = getGridOffset(context);

	// Pre-build walkable set once
	const walkable = new Set<string>();
	for (let y = 0; y < grid.height; y++) {
		for (let x = 0; x < grid.width; x++) {
			if (grid.isWalkableAt(x, y)) {
				walkable.add(`${x},${y}`);
			}
		}
	}

	cachedGrid = { grid, offset, walkable };
}

/**
 * Clear cached grid after batch routing
 */
export function clearRoutingGrid(): void {
	cachedGrid = null;
}

/**
 * Calculate route between two ports
 * @param usedCells - Optional map of cells to directions used by other paths
 */
export function calculateRoute(
	sourcePos: Position,
	targetPos: Position,
	sourceDir: Direction,
	targetDir: Direction,
	context: RoutingContext,
	usedCells?: Map<string, Set<Direction>>
): RouteResult {
	// Calculate stub endpoints (grid-aligned virtual ports for A*)
	const sourceStubEnd = getStubEnd(sourcePos, sourceDir, SOURCE_CLEARANCE);
	const targetStubEnd = getStubEnd(targetPos, targetDir, TARGET_CLEARANCE);

	// Use cached grid if available, otherwise build fresh
	let grid: PF.Grid;
	let offset: Position;
	let walkable: Set<string> | undefined;

	if (cachedGrid) {
		grid = cachedGrid.grid;
		offset = cachedGrid.offset;
		walkable = cachedGrid.walkable;
	} else {
		grid = buildGrid(context);
		offset = getGridOffset(context);
	}

	// Find path from source stub end to target stub end
	const rawPath = findPathWithTurnPenalty(sourceStubEnd, targetStubEnd, grid, offset, sourceDir, usedCells, walkable);
	const simplified = simplifyPath(rawPath);

	// Path is: [sourceStubEnd, ...intermediates..., targetStubEnd]
	// simplifyPath already includes start and end
	const path = simplified;

	return { path, waypoints: [] };
}

/**
 * Simple L-shaped route (no pathfinding)
 */
export function calculateSimpleRoute(
	sourcePos: Position,
	targetPos: Position,
	sourceDir: Direction = 'right',
	targetDir: Direction = 'left'
): RouteResult {
	const sourceStubEnd = getStubEnd(sourcePos, sourceDir, SOURCE_CLEARANCE);
	const targetStubEnd = getStubEnd(targetPos, targetDir, TARGET_CLEARANCE);

	// Simple L-shape: go in source direction, then turn toward target
	const path: Position[] = [sourceStubEnd];

	// Add corner if not aligned
	if (sourceStubEnd.x !== targetStubEnd.x && sourceStubEnd.y !== targetStubEnd.y) {
		if (sourceDir === 'right' || sourceDir === 'left') {
			// Horizontal first, then vertical
			path.push(snapToGrid({ x: targetStubEnd.x, y: sourceStubEnd.y }));
		} else {
			// Vertical first, then horizontal
			path.push(snapToGrid({ x: sourceStubEnd.x, y: targetStubEnd.y }));
		}
	}

	path.push(targetStubEnd);

	return { path, waypoints: [] };
}

/**
 * Extract grid cells used by a path with direction info (for overlap/crossing avoidance)
 * @param path - Path positions in world coordinates
 * @param skipStart - Number of cells to skip at start (for shared source ports)
 * @returns Map of cell key to set of directions traveled through that cell
 */
export function getPathCells(path: Position[], skipStart = 2): Map<string, Set<Direction>> {
	const cells = new Map<string, Set<Direction>>();
	let cellCount = 0;

	for (let i = 0; i < path.length - 1; i++) {
		const start = path[i];
		const end = path[i + 1];

		const dx = end.x - start.x;
		const dy = end.y - start.y;
		const dist = Math.max(Math.abs(dx), Math.abs(dy));

		// Determine direction of this segment
		let dir: Direction;
		if (Math.abs(dx) > Math.abs(dy)) {
			dir = dx > 0 ? 'right' : 'left';
		} else {
			dir = dy > 0 ? 'down' : 'up';
		}

		if (dist < 1) {
			cellCount++;
			if (cellCount > skipStart) {
				const key = `${worldToGrid(start.x)},${worldToGrid(start.y)}`;
				if (!cells.has(key)) cells.set(key, new Set());
				cells.get(key)!.add(dir);
			}
			continue;
		}

		const steps = Math.ceil(dist / GRID_SIZE);
		for (let s = 0; s <= steps; s++) {
			cellCount++;
			if (cellCount > skipStart) {
				const t = s / steps;
				const x = start.x + dx * t;
				const y = start.y + dy * t;
				const key = `${worldToGrid(x)},${worldToGrid(y)}`;
				if (!cells.has(key)) cells.set(key, new Set());
				cells.get(key)!.add(dir);
			}
		}
	}

	return cells;
}
