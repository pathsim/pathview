/**
 * SVG Renderer - Main export function
 *
 * Pure rendering from graph state - no DOM scraping required.
 * Uses centralized constants for dimensions, handle paths, and theme colors.
 */

import { get } from 'svelte/store';
import { graphStore } from '$lib/stores/graph';
import { eventStore } from '$lib/stores/events';
import { getThemeColors } from '$lib/constants/theme';
import { EXPORT_PADDING, EVENT } from '$lib/constants/dimensions';
import { renderNode, getNodeDimensions } from './nodes';
import { renderEdge } from './edges';
import { renderEvent } from './events';
import type { ExportOptions, RenderContext, Bounds, DEFAULT_OPTIONS } from './types';
import type { NodeInstance } from '$lib/types/nodes';
import type { EventInstance } from '$lib/types/events';

/** Calculate bounding box for all elements */
function calculateBounds(nodes: NodeInstance[], events: EventInstance[]): Bounds {
	const bounds: Bounds = {
		minX: Infinity,
		minY: Infinity,
		maxX: -Infinity,
		maxY: -Infinity
	};

	for (const node of nodes) {
		const { width, height } = getNodeDimensions(node);
		bounds.minX = Math.min(bounds.minX, node.position.x);
		bounds.minY = Math.min(bounds.minY, node.position.y);
		bounds.maxX = Math.max(bounds.maxX, node.position.x + width);
		bounds.maxY = Math.max(bounds.maxY, node.position.y + height);
	}

	for (const event of events) {
		bounds.minX = Math.min(bounds.minX, event.position.x);
		bounds.minY = Math.min(bounds.minY, event.position.y);
		bounds.maxX = Math.max(bounds.maxX, event.position.x + EVENT.size);
		bounds.maxY = Math.max(bounds.maxY, event.position.y + EVENT.size);
	}

	// Return default bounds if no elements
	if (!isFinite(bounds.minX)) {
		return { minX: 0, minY: 0, maxX: 200, maxY: 200 };
	}

	return bounds;
}

/** Render SVG header */
function renderHeader(bounds: Bounds, padding: number): string {
	const width = bounds.maxX - bounds.minX + padding * 2;
	const height = bounds.maxY - bounds.minY + padding * 2;
	const viewBox = `${bounds.minX - padding} ${bounds.minY - padding} ${width} ${height}`;

	return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${viewBox}">`;
}

/** Render background rectangle */
function renderBackground(bounds: Bounds, padding: number, ctx: RenderContext): string {
	const x = bounds.minX - padding;
	const y = bounds.minY - padding;
	const width = bounds.maxX - bounds.minX + padding * 2;
	const height = bounds.maxY - bounds.minY + padding * 2;

	return `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${ctx.theme.surface}"/>`;
}

/** Default export options */
const DEFAULTS: Required<ExportOptions> = {
	theme: 'auto',
	background: 'transparent',
	padding: EXPORT_PADDING,
	showLabels: true,
	showTypeLabels: true,
	showHandles: true
};

/**
 * Export the current graph as SVG string
 *
 * @param options - Export options
 * @returns SVG string
 */
export function exportToSVG(options: ExportOptions = {}): string {
	// Merge options with defaults
	const opts: Required<ExportOptions> = { ...DEFAULTS, ...options };

	// Resolve theme
	const themeColors = getThemeColors(opts.theme);

	// Create render context
	const ctx: RenderContext = {
		theme: themeColors,
		options: opts
	};

	// Get graph data
	const nodes = get(graphStore.nodesArray);
	const edges = get(graphStore.edgesArray);
	const events = get(eventStore.eventsArray);

	// Create nodes map for edge lookups
	const nodesMap = new Map<string, NodeInstance>();
	for (const node of nodes) {
		nodesMap.set(node.id, node);
	}

	// Calculate bounds
	const bounds = calculateBounds(nodes, events);

	// Build SVG
	const parts: string[] = [];

	// Header
	parts.push(renderHeader(bounds, opts.padding));

	// Background
	if (opts.background === 'solid') {
		parts.push(renderBackground(bounds, opts.padding, ctx));
	}

	// Edges (rendered below nodes)
	if (edges.length > 0) {
		parts.push('<g class="edges">');
		for (const edge of edges) {
			parts.push(renderEdge(edge, nodesMap, ctx));
		}
		parts.push('</g>');
	}

	// Events
	if (events.length > 0) {
		parts.push('<g class="events">');
		for (const event of events) {
			parts.push(renderEvent(event, ctx));
		}
		parts.push('</g>');
	}

	// Nodes (rendered above edges)
	if (nodes.length > 0) {
		parts.push('<g class="nodes">');
		for (const node of nodes) {
			parts.push(renderNode(node, ctx));
		}
		parts.push('</g>');
	}

	parts.push('</svg>');

	return parts.join('\n');
}
