/**
 * SVG Renderer
 *
 * Renders the current graph view as SVG by reading from the DOM.
 * Uses centralized constants for theme colors and handle paths.
 */

import { get } from 'svelte/store';
import { graphStore } from '$lib/stores/graph';
import { eventStore } from '$lib/stores/events';
import { getThemeColors } from '$lib/constants/theme';
import { EXPORT_PADDING, EVENT } from '$lib/constants/dimensions';
import { getHandlePath } from '$lib/constants/handlePaths';
import { nodeRegistry } from '$lib/nodes';
import { eventRegistry } from '$lib/events/registry';
import type { ExportOptions, RenderContext, Bounds } from './types';
import type { NodeInstance } from '$lib/types/nodes';
import type { EventInstance } from '$lib/types/events';

// ============================================================================
// DOM UTILITIES
// ============================================================================

/** Get current viewport zoom level */
function getZoom(): number {
	const viewport = document.querySelector('.svelte-flow__viewport') as HTMLElement;
	if (!viewport) return 1;
	const match = viewport.style.transform.match(/scale\(([^)]+)\)/);
	return match ? parseFloat(match[1]) : 1;
}

/** Escape XML special characters */
function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

/** Get node dimensions from DOM */
function getNodeDimensions(nodeId: string): { width: number; height: number } | null {
	const wrapper = document.querySelector(`[data-id="${nodeId}"]`) as HTMLElement;
	if (!wrapper) return null;
	const rect = wrapper.getBoundingClientRect();
	const zoom = getZoom();
	return { width: rect.width / zoom, height: rect.height / zoom };
}

// ============================================================================
// EDGE RENDERING (from DOM)
// ============================================================================

/** Extract and render edges from SvelteFlow's DOM */
function renderEdges(ctx: RenderContext): string {
	const container = document.querySelector('.svelte-flow__edges');
	if (!container) return '';

	const parts: string[] = [];

	container.querySelectorAll('.svelte-flow__edge').forEach((edge) => {
		// Main edge path
		const pathEl = edge.querySelector('.svelte-flow__edge-path');
		if (pathEl) {
			const d = pathEl.getAttribute('d');
			if (d) {
				parts.push(`<path d="${d}" fill="none" stroke="${ctx.theme.edge}" stroke-width="1.5"/>`);
			}
		}

		// Arrow head
		const arrowGroup = edge.querySelector('g[transform*="rotate"]');
		if (arrowGroup) {
			const transform = arrowGroup.getAttribute('transform');
			const arrowPath = arrowGroup.querySelector('path');
			if (arrowPath && transform) {
				const d = arrowPath.getAttribute('d');
				if (d) {
					parts.push(`<g transform="${transform}"><path d="${d}" fill="${ctx.theme.edge}"/></g>`);
				}
			}
		}
	});

	return parts.length > 0 ? `<g class="edges">\n\t${parts.join('\n\t')}\n</g>` : '';
}

// ============================================================================
// HANDLE RENDERING (from DOM positions + constants for shape)
// ============================================================================

/** Extract and render handles for a node */
function renderHandles(nodeId: string, nodeX: number, nodeY: number, ctx: RenderContext): string {
	const wrapper = document.querySelector(`[data-id="${nodeId}"]`);
	if (!wrapper) return '';

	const nodeEl = wrapper.querySelector('[data-rotation]') || wrapper;
	const rotation = parseInt(nodeEl.getAttribute('data-rotation') || '0');
	const paths = getHandlePath(rotation);
	const zoom = getZoom();
	const nodeRect = wrapper.getBoundingClientRect();

	const handles: string[] = [];

	nodeEl.querySelectorAll('.svelte-flow__handle').forEach((handle) => {
		const rect = handle.getBoundingClientRect();
		// Get center of handle relative to node
		const cx = (rect.left + rect.width / 2 - nodeRect.left) / zoom;
		const cy = (rect.top + rect.height / 2 - nodeRect.top) / zoom;
		// Position handle path centered on this point
		const x = nodeX + cx - paths.width / 2;
		const y = nodeY + cy - paths.height / 2;

		// Two-layer hollow handle
		handles.push(`<g transform="translate(${x.toFixed(2)}, ${y.toFixed(2)})">
		<path d="${paths.outer}" fill="${ctx.theme.edge}"/>
		<path d="${paths.inner}" fill="${ctx.theme.surfaceRaised}" transform="translate(1, 1)"/>
	</g>`);
	});

	return handles.join('\n\t');
}

// ============================================================================
// NODE RENDERING
// ============================================================================

/** Render a node */
function renderNode(node: NodeInstance, ctx: RenderContext): string {
	const { x, y } = node.position;
	const dims = getNodeDimensions(node.id);
	if (!dims) return '';

	const { width, height } = dims;
	const typeDef = nodeRegistry.get(node.type);
	const color = node.color || ctx.theme.accent;
	const isSubsystem = node.type === 'Subsystem' || node.type === 'Interface';

	// Get border radius from DOM element's computed style
	const wrapper = document.querySelector(`[data-id="${node.id}"]`) as HTMLElement;
	const nodeEl = wrapper?.querySelector('.node') as HTMLElement;
	let rx = 8;
	if (nodeEl) {
		const computed = getComputedStyle(nodeEl);
		rx = parseFloat(computed.borderRadius) || 8;
	}

	const parts: string[] = [];

	// Node rectangle
	const strokeDasharray = isSubsystem ? ' stroke-dasharray="4 2"' : '';
	parts.push(
		`<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" fill="none" stroke="${ctx.theme.edge}" stroke-width="1"${strokeDasharray}/>`
	);

	// Labels
	if (ctx.options.showLabels) {
		const nameY = ctx.options.showTypeLabels ? y + height / 2 - 3 : y + height / 2;
		parts.push(
			`<text x="${x + width / 2}" y="${nameY}" text-anchor="middle" dominant-baseline="middle" fill="${color}" font-size="10" font-weight="600" font-family="system-ui, -apple-system, sans-serif">${escapeXml(node.name)}</text>`
		);

		if (ctx.options.showTypeLabels && typeDef) {
			parts.push(
				`<text x="${x + width / 2}" y="${y + height / 2 + 9}" text-anchor="middle" dominant-baseline="middle" fill="${ctx.theme.textMuted}" font-size="8" font-family="system-ui, -apple-system, sans-serif">${escapeXml(typeDef.name)}</text>`
			);
		}
	}

	// Handles
	if (ctx.options.showHandles) {
		const handles = renderHandles(node.id, x, y, ctx);
		if (handles) parts.push(handles);
	}

	return `<g class="node" data-id="${node.id}">\n\t${parts.join('\n\t')}\n</g>`;
}

// ============================================================================
// EVENT RENDERING
// ============================================================================

/** Render an event */
function renderEvent(event: EventInstance, ctx: RenderContext): string {
	const cx = event.position.x + EVENT.center;
	const cy = event.position.y + EVENT.center;
	const color = event.color || ctx.theme.accent;
	const typeDef = eventRegistry.get(event.type);

	const parts: string[] = [];

	// Diamond shape
	parts.push(
		`<rect x="${cx - EVENT.diamondOffset}" y="${cy - EVENT.diamondOffset}" width="${EVENT.diamondSize}" height="${EVENT.diamondSize}" rx="4" fill="none" stroke="${ctx.theme.edge}" stroke-width="1" transform="rotate(45 ${cx} ${cy})"/>`
	);

	// Labels
	if (ctx.options.showLabels) {
		const nameY = ctx.options.showTypeLabels ? cy - 4 : cy;
		parts.push(
			`<text x="${cx}" y="${nameY}" text-anchor="middle" dominant-baseline="middle" fill="${color}" font-size="10" font-weight="600" font-family="system-ui, -apple-system, sans-serif">${escapeXml(event.name)}</text>`
		);

		if (ctx.options.showTypeLabels && typeDef) {
			parts.push(
				`<text x="${cx}" y="${cy + 10}" text-anchor="middle" dominant-baseline="middle" fill="${ctx.theme.textMuted}" font-size="8" font-family="system-ui, -apple-system, sans-serif">${escapeXml(typeDef.name)}</text>`
			);
		}
	}

	return `<g class="event" data-id="${event.id}">\n\t${parts.join('\n\t')}\n</g>`;
}

// ============================================================================
// BOUNDS CALCULATION
// ============================================================================

/** Calculate bounds from nodes and events */
function calculateBounds(nodes: NodeInstance[], events: EventInstance[]): Bounds {
	const bounds: Bounds = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };

	for (const node of nodes) {
		const dims = getNodeDimensions(node.id);
		const width = dims?.width ?? 90;
		const height = dims?.height ?? 36;
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

	return isFinite(bounds.minX) ? bounds : { minX: 0, minY: 0, maxX: 200, maxY: 200 };
}

// ============================================================================
// MAIN EXPORT
// ============================================================================

/** Default options */
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
 */
export function exportToSVG(options: ExportOptions = {}): string {
	const opts: Required<ExportOptions> = { ...DEFAULTS, ...options };
	const themeColors = getThemeColors(opts.theme);
	const ctx: RenderContext = { theme: themeColors, options: opts };

	const nodes = get(graphStore.nodesArray);
	const events = get(eventStore.eventsArray);
	const bounds = calculateBounds(nodes, events);

	const width = bounds.maxX - bounds.minX + opts.padding * 2;
	const height = bounds.maxY - bounds.minY + opts.padding * 2;
	const viewBox = `${bounds.minX - opts.padding} ${bounds.minY - opts.padding} ${width} ${height}`;

	const parts: string[] = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${viewBox}">`
	];

	// Background
	if (opts.background === 'solid') {
		parts.push(
			`<rect x="${bounds.minX - opts.padding}" y="${bounds.minY - opts.padding}" width="${width}" height="${height}" fill="${ctx.theme.surface}"/>`
		);
	}

	// Edges (from DOM)
	const edges = renderEdges(ctx);
	if (edges) parts.push(edges);

	// Events
	if (events.length > 0) {
		parts.push('<g class="events">');
		for (const event of events) {
			parts.push(renderEvent(event, ctx));
		}
		parts.push('</g>');
	}

	// Nodes
	if (nodes.length > 0) {
		parts.push('<g class="nodes">');
		for (const node of nodes) {
			const rendered = renderNode(node, ctx);
			if (rendered) parts.push(rendered);
		}
		parts.push('</g>');
	}

	parts.push('</svg>');
	return parts.join('\n');
}
