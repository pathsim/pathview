/**
 * Edge highlight - colors of edges attached to the hovered handle or a selected node
 *
 * Computed once per hover or selection change, so an edge only re-renders when
 * its own highlight changes instead of every edge evaluating each change.
 */

import { untrack } from 'svelte';
import type { Edge } from '@xyflow/svelte';
import { SvelteMap } from 'svelte/reactivity';
import { hoveredHandle } from './hoveredHandle';

/** Highlight color when the node defines none */
const ACCENT = 'var(--accent)';

/** Edge id to highlight color; absent when the edge is not highlighted */
export const edgeHighlights = new SvelteMap<string, string>();

export function createEdgeHighlighter(getEdges: () => Edge[]) {
	let hovered: { nodeId: string; handleId: string; color?: string } | null = null;
	/** Selected node id to its color */
	let selected = new Map<string, string>();

	/**
	 * Recompute highlights, e.g. after the edge list changed. Untracked, so an
	 * effect that changes the hover or selection does not depend on the highlights.
	 */
	function refresh(): void {
		untrack(() => {
			const next = new Map<string, string>();
			for (const edge of getEdges()) {
				const onHoveredHandle =
					hovered !== null &&
					((edge.source === hovered.nodeId && edge.sourceHandle === hovered.handleId) ||
						(edge.target === hovered.nodeId && edge.targetHandle === hovered.handleId));
				const color = onHoveredHandle
					? hovered!.color || ACCENT
					: (selected.get(edge.source) ?? selected.get(edge.target));
				if (color) next.set(edge.id, color);
			}

			for (const id of [...edgeHighlights.keys()]) {
				if (!next.has(id)) edgeHighlights.delete(id);
			}
			for (const [id, color] of next) {
				if (edgeHighlights.get(id) !== color) edgeHighlights.set(id, color);
			}
		});
	}

	/** Highlight the edges of the selected nodes, given as node id to color */
	function select(nodes: Map<string, string>): void {
		selected = nodes;
		refresh();
	}

	const unsubscribe = hoveredHandle.subscribe((h) => {
		hovered = h;
		refresh();
	});

	return { refresh, select, destroy: unsubscribe };
}
