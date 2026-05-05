/**
 * Demo-block lookup helpers for tour scripts. Tours reference blocks by
 * stable attributes (name, type) instead of by index in `getAllNodes()` —
 * if a demo file is edited or save-format migration changes the order,
 * the tour still finds the right block.
 */

import { graphStore } from '$lib/stores/graph';
import { T } from './targets';

export interface BlockLookup {
	name?: string;
	type?: string;
}

/** Find a block in the current graph level. Match precedence:
 *    1. exact name match
 *    2. block type match (first one found)
 *  Returns undefined when nothing matches.
 */
export function findBlock(lookup: BlockLookup): { id: string } | undefined {
	const nodes = graphStore.getAllNodes();
	if (lookup.name) {
		const byName = nodes.find((n) => n.name === lookup.name);
		if (byName) return { id: byName.id };
	}
	if (lookup.type) {
		const byType = nodes.find((n) => n.type === lookup.type);
		if (byType) return { id: byType.id };
	}
	return undefined;
}

/** Convenience: id of the block matching `lookup`, or undefined. */
export function findBlockId(lookup: BlockLookup): string | undefined {
	return findBlock(lookup)?.id;
}

/** Resolve a block lookup to its DOM element on the canvas. Falls back to
 *  the canvas pane so a missing block doesn't crash the tour. */
export function findBlockElement(lookup: BlockLookup): Element {
	const id = findBlockId(lookup);
	const el = id ? document.querySelector<HTMLElement>(T.nodeById(id)) : null;
	return (
		el ??
		document.querySelector(T.canvasPane) ??
		document.body
	);
}
