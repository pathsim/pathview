/**
 * Helpers for tracking which runtime toolboxes a graph depends on.
 *
 * - `collectRequiredToolboxes`: scans a node tree, finds all non-builtin
 *   block types, and returns the matching `ToolboxRequirement` entries from
 *   the active toolbox store. Used when saving a file.
 * - `findMissingRequirements`: filters a list of requirements down to the
 *   ones not currently installed. Used when loading a file.
 */

import { get } from 'svelte/store';
import { nodeRegistry, BUILTIN_SOURCE } from '$lib/nodes/registry';
import { NODE_TYPES } from '$lib/constants/nodeTypes';
import type { NodeInstance } from '$lib/types/nodes';
import type { ToolboxRequirement } from '$lib/types/schema';
import { toolboxes } from './store';
import { toolboxSourceKey } from './identity';
import type { ToolboxConfig } from './types';

function walkNodeTypes(nodes: NodeInstance[], out: Set<string>): void {
	for (const node of nodes) {
		if (node.type !== NODE_TYPES.SUBSYSTEM && node.type !== NODE_TYPES.INTERFACE) {
			out.add(node.type);
		}
		if (node.graph?.nodes) walkNodeTypes(node.graph.nodes, out);
	}
}

function toRequirement(t: ToolboxConfig): ToolboxRequirement {
	return {
		id: t.id,
		displayName: t.displayName,
		source: t.source,
		importPath: t.importPath,
		eventsImportPath: t.eventsImportPath,
		installedVersion: t.installedVersion ?? null
	};
}

/**
 * Walk a node tree, find all block types whose registry source is a
 * runtime toolbox, and return the matching requirement records.
 */
export function collectRequiredToolboxes(nodes: NodeInstance[]): ToolboxRequirement[] {
	const seenTypes = new Set<string>();
	walkNodeTypes(nodes, seenTypes);

	const sourceIds = new Set<string>();
	for (const type of seenTypes) {
		const src = nodeRegistry.getSource(type);
		if (src && src !== BUILTIN_SOURCE) sourceIds.add(src);
	}

	const installed = get(toolboxes);
	const result: ToolboxRequirement[] = [];
	for (const id of sourceIds) {
		const t = installed.find((tb) => tb.id === id);
		if (t) result.push(toRequirement(t));
	}
	return result;
}

/**
 * Filter a list of toolbox requirements to those that are NOT currently
 * installed. Used at load time to figure out what to prompt for.
 *
 * Matching is done on the source content identity (`toolboxSourceKey`), not
 * the raw `id`: the id depends on how a toolbox was added (catalog vs PyPI
 * tab vs file upload), so the same package can carry different ids across
 * machines. Comparing source keys means a file that references
 * `pypi:pathsim-chem` resolves against a catalog-installed `pathsim-chem`,
 * and an inline toolbox is matched by its code rather than its filename.
 */
export function findMissingRequirements(reqs: ToolboxRequirement[]): ToolboxRequirement[] {
	if (!reqs || reqs.length === 0) return [];
	const installedKeys = new Set(get(toolboxes).map((t) => toolboxSourceKey(t.source)));
	return reqs.filter((r) => !installedKeys.has(toolboxSourceKey(r.source)));
}
