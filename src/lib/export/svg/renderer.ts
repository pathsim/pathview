/**
 * SVG Renderer
 *
 * Renders the current graph view as SVG using dom-to-svg library.
 * This captures the exact visual appearance of the canvas.
 */

import { elementToSVG, inlineResources } from 'dom-to-svg';
import { getThemeColors } from '$lib/constants/theme';
import { EXPORT_PADDING } from '$lib/constants/dimensions';
import type { ExportOptions } from './types';
import { DEFAULT_OPTIONS } from './types';

/**
 * Get the current viewport transform values
 */
function getViewportTransform(): { x: number; y: number; scale: number } {
	const viewport = document.querySelector('.svelte-flow__viewport') as HTMLElement;
	if (!viewport) return { x: 0, y: 0, scale: 1 };

	const transform = viewport.style.transform;
	const translateMatch = transform.match(/translate\(([^,]+),\s*([^)]+)\)/);
	const scaleMatch = transform.match(/scale\(([^)]+)\)/);

	return {
		x: translateMatch ? parseFloat(translateMatch[1]) : 0,
		y: translateMatch ? parseFloat(translateMatch[2]) : 0,
		scale: scaleMatch ? parseFloat(scaleMatch[1]) : 1
	};
}

/**
 * Calculate the bounding box of all content in graph coordinates
 */
function calculateContentBounds(): { minX: number; minY: number; maxX: number; maxY: number } {
	const bounds = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
	const viewport = document.querySelector('.svelte-flow__viewport') as HTMLElement;
	if (!viewport) return { minX: 0, minY: 0, maxX: 200, maxY: 200 };

	const { scale } = getViewportTransform();

	// Get all nodes and events
	const elements = viewport.querySelectorAll('.svelte-flow__node, .svelte-flow__edge');
	elements.forEach((el) => {
		const rect = (el as HTMLElement).getBoundingClientRect();
		const viewportRect = viewport.getBoundingClientRect();

		// Convert to viewport-relative coordinates, accounting for scale
		const left = (rect.left - viewportRect.left) / scale;
		const top = (rect.top - viewportRect.top) / scale;
		const right = left + rect.width / scale;
		const bottom = top + rect.height / scale;

		bounds.minX = Math.min(bounds.minX, left);
		bounds.minY = Math.min(bounds.minY, top);
		bounds.maxX = Math.max(bounds.maxX, right);
		bounds.maxY = Math.max(bounds.maxY, bottom);
	});

	return isFinite(bounds.minX) ? bounds : { minX: 0, minY: 0, maxX: 200, maxY: 200 };
}

/**
 * Export the current graph view as SVG
 */
export async function exportToSVG(options: ExportOptions = {}): Promise<string> {
	const opts: Required<ExportOptions> = { ...DEFAULT_OPTIONS, ...options };
	const theme = getThemeColors(opts.theme);
	const padding = opts.padding ?? EXPORT_PADDING;

	// Find the SvelteFlow container
	const flowContainer = document.querySelector('.svelte-flow') as HTMLElement;
	if (!flowContainer) {
		throw new Error('SvelteFlow container not found');
	}

	// Store original styles to restore later
	const viewport = flowContainer.querySelector('.svelte-flow__viewport') as HTMLElement;
	const originalTransform = viewport?.style.transform || '';
	const originalContainerStyle = flowContainer.style.cssText;

	try {
		// Calculate content bounds before resetting transform
		const bounds = calculateContentBounds();
		const contentWidth = bounds.maxX - bounds.minX;
		const contentHeight = bounds.maxY - bounds.minY;

		// Reset viewport transform to identity for clean capture
		// Position viewport so content starts at (padding, padding)
		if (viewport) {
			const offsetX = -bounds.minX + padding;
			const offsetY = -bounds.minY + padding;
			viewport.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1)`;
		}

		// Set container size to match content + padding
		const svgWidth = contentWidth + padding * 2;
		const svgHeight = contentHeight + padding * 2;
		flowContainer.style.width = `${svgWidth}px`;
		flowContainer.style.height = `${svgHeight}px`;
		flowContainer.style.overflow = 'visible';

		// Force reflow
		flowContainer.offsetHeight;

		// Convert DOM to SVG using dom-to-svg
		const svgDocument = elementToSVG(flowContainer);

		// Inline external resources (fonts, images)
		await inlineResources(svgDocument.documentElement);

		// Get the SVG element
		const svgElement = svgDocument.documentElement;

		// Set proper dimensions and viewBox
		svgElement.setAttribute('width', String(svgWidth));
		svgElement.setAttribute('height', String(svgHeight));
		svgElement.setAttribute('viewBox', `0 0 ${svgWidth} ${svgHeight}`);

		// Add background if requested
		if (opts.background === 'solid') {
			const bgRect = svgDocument.createElementNS('http://www.w3.org/2000/svg', 'rect');
			bgRect.setAttribute('x', '0');
			bgRect.setAttribute('y', '0');
			bgRect.setAttribute('width', String(svgWidth));
			bgRect.setAttribute('height', String(svgHeight));
			bgRect.setAttribute('fill', theme.surface);
			svgElement.insertBefore(bgRect, svgElement.firstChild);
		}

		// Remove elements we don't want in export
		// Remove selection box, minimap, controls, etc.
		const selectorsToRemove = [
			'.svelte-flow__minimap',
			'.svelte-flow__controls',
			'.svelte-flow__attribution',
			'.svelte-flow__selection',
			'.svelte-flow__nodesselection',
			'.svelte-flow__background',  // Remove default background (we add our own)
			'.port-controls',  // Remove +/- port buttons
			'.selection-glow'  // Remove selection glow effects
		];

		selectorsToRemove.forEach((selector) => {
			svgElement.querySelectorAll(selector).forEach((el) => el.remove());
		});

		// Serialize to string
		const serializer = new XMLSerializer();
		let svgString = serializer.serializeToString(svgDocument);

		// Add XML declaration
		svgString = '<?xml version="1.0" encoding="UTF-8"?>\n' + svgString;

		return svgString;
	} finally {
		// Restore original styles
		if (viewport) {
			viewport.style.transform = originalTransform;
		}
		flowContainer.style.cssText = originalContainerStyle;

		// Force reflow to apply restored styles
		flowContainer.offsetHeight;
	}
}
