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

/** Get node dimensions from DOM */
function getNodeDimensions(nodeId: string): { width: number; height: number } | null {
	const wrapper = document.querySelector(`[data-id="${nodeId}"]`) as HTMLElement;
	if (!wrapper) return null;
	const rect = wrapper.getBoundingClientRect();
	const zoom = getZoom();
	return { width: rect.width / zoom, height: rect.height / zoom };
}

// ============================================================================
// EDGE RENDERING (clone from DOM)
// ============================================================================

/** Clone edges SVG from SvelteFlow and restyle */
function renderEdges(ctx: RenderContext): string {
	const edgesSvg = document.querySelector('.svelte-flow__edges') as SVGElement;
	if (!edgesSvg) return '';

	// Clone the entire edges SVG content
	const clone = edgesSvg.cloneNode(true) as SVGElement;

	// Restyle all paths to use theme colors (remove any inline styles/classes)
	clone.querySelectorAll('path').forEach((path) => {
		// Edge paths have class svelte-flow__edge-path
		if (path.classList.contains('svelte-flow__edge-path')) {
			path.setAttribute('stroke', ctx.theme.edge);
			path.setAttribute('stroke-width', '1.5');
			path.setAttribute('fill', 'none');
		} else {
			// Arrow paths
			path.setAttribute('fill', ctx.theme.edge);
		}
		path.removeAttribute('class');
		path.removeAttribute('style');
	});

	// Remove wrapper classes/styles
	clone.querySelectorAll('g').forEach((g) => {
		g.removeAttribute('class');
		g.removeAttribute('style');
	});

	// Get inner content (skip the outer <svg> wrapper)
	return `<g class="edges">${clone.innerHTML}</g>`;
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
// NODE RENDERING (clone HTML into foreignObject)
// ============================================================================

/** Clone a node's HTML and embed in SVG foreignObject */
function renderNode(node: NodeInstance, ctx: RenderContext): string {
	const { x, y } = node.position;
	const wrapper = document.querySelector(`[data-id="${node.id}"]`) as HTMLElement;
	if (!wrapper) return '';

	const dims = getNodeDimensions(node.id);
	if (!dims) return '';
	const { width, height } = dims;

	// Clone the node's inner .node element
	const nodeEl = wrapper.querySelector('.node') as HTMLElement;
	if (!nodeEl) return '';

	const clone = nodeEl.cloneNode(true) as HTMLElement;

	// Inline critical styles since CSS won't apply in standalone SVG
	const computed = getComputedStyle(nodeEl);
	clone.style.cssText = `
		background: ${computed.backgroundColor};
		border: ${computed.border};
		border-radius: ${computed.borderRadius};
		font-size: ${computed.fontSize};
		min-width: ${width}px;
		min-height: ${height}px;
		color: ${computed.color};
		--node-color: ${node.color || ctx.theme.accent};
		--edge: ${ctx.theme.edge};
		--surface-raised: ${ctx.theme.surfaceRaised};
		--text-muted: ${ctx.theme.textMuted};
	`;

	// Remove any hover/preview related classes
	clone.classList.remove('preview-hovered', 'selected');

	// Remove plot preview popups
	clone.querySelectorAll('.plot-preview-popup').forEach((el) => el.remove());

	// Remove handles (we'll render them separately as SVG)
	clone.querySelectorAll('.svelte-flow__handle').forEach((el) => el.remove());

	const html = clone.outerHTML;

	// Build foreignObject with embedded HTML
	const parts: string[] = [
		`<foreignObject x="${x}" y="${y}" width="${width}" height="${height}">`,
		`<div xmlns="http://www.w3.org/1999/xhtml">${html}</div>`,
		`</foreignObject>`
	];

	// Add handles as SVG paths
	if (ctx.options.showHandles) {
		const handles = renderHandles(node.id, x, y, ctx);
		if (handles) parts.push(handles);
	}

	return `<g class="node" data-id="${node.id}">\n\t${parts.join('\n\t')}\n</g>`;
}

// ============================================================================
// EVENT RENDERING (clone HTML into foreignObject)
// ============================================================================

/** Clone an event's HTML and embed in SVG foreignObject */
function renderEvent(event: EventInstance, ctx: RenderContext): string {
	const { x, y } = event.position;
	const wrapper = document.querySelector(`[data-id="${event.id}"]`) as HTMLElement;
	if (!wrapper) return '';

	// Clone the event-node element
	const eventEl = wrapper.querySelector('.event-node') as HTMLElement;
	if (!eventEl) return '';

	const clone = eventEl.cloneNode(true) as HTMLElement;

	// Inline critical styles
	const color = event.color || ctx.theme.accent;
	clone.style.cssText = `
		--event-color: ${color};
		--edge: ${ctx.theme.edge};
		--surface-raised: ${ctx.theme.surfaceRaised};
		--text-muted: ${ctx.theme.textMuted};
	`;

	// Remove selection state
	clone.classList.remove('selected');

	const html = clone.outerHTML;

	return `<g class="event" data-id="${event.id}">
	<foreignObject x="${x}" y="${y}" width="${EVENT.size}" height="${EVENT.size}">
		<div xmlns="http://www.w3.org/1999/xhtml">${html}</div>
	</foreignObject>
</g>`;
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
