/**
 * Graph store - Serialization (toJSON, fromJSON, clear)
 */

import { get } from 'svelte/store';
import type { NodeInstance, Connection, Annotation } from '$lib/nodes/types';
import { NODE_TYPES } from '$lib/constants/nodeTypes';
import { applyPortLabelSync } from './ports';
import { withPortStructure } from '$lib/nodes/ports';
import { registryVersion } from '$lib/nodes/registry';
import {
	rootNodes,
	rootConnections,
	rootAnnotations,
	currentPath,
	selectedNodeIds,
	type SearchableNode
} from './state';

/**
 * Clear the entire graph
 */
export function clear(): void {
	rootNodes.set(new Map());
	rootConnections.set([]);
	rootAnnotations.set(new Map());
	currentPath.set([]);
	selectedNodeIds.set(new Set());
}

/**
 * Get current state as JSON-serializable object (nested structure)
 */
export function toJSON(): { nodes: NodeInstance[]; connections: Connection[]; annotations: Annotation[] } {
	return {
		nodes: Array.from(get(rootNodes).values()),
		connections: get(rootConnections),
		annotations: Array.from(get(rootAnnotations).values())
	};
}

/**
 * Walk a node list (recursing into Subsystem.graph) and apply port-label
 * sync to every label-driven block (Scope, Spectrum, Adder, …) so port
 * names match the loaded `labels` / `operations` params. Without this,
 * nodes loaded from disk keep whatever names happened to be saved and
 * only re-sync after the next param edit.
 */
function syncPortLabelsRecursively(nodes: NodeInstance[]): NodeInstance[] {
	return nodes.map((node) => {
		const synced = applyPortLabelSync(node);
		if (synced.graph) {
			return {
				...synced,
				graph: { ...synced.graph, nodes: syncPortLabelsRecursively(synced.graph.nodes) }
			};
		}
		return synced;
	});
}

/**
 * Fill the port structure of nodes whose type registers after they were
 * loaded, such as the blocks of a toolbox that installs after the file is
 * shown (see `loadGraphFile`)
 */
registryVersion.subscribe(() => {
	rootNodes.update((nodes) => {
		let changed = false;
		const filled = new Map<string, NodeInstance>();
		for (const [id, node] of nodes) {
			const next = withPortStructure(node);
			changed ||= next !== node;
			filled.set(id, next);
		}
		return changed ? filled : nodes;
	});
});

/**
 * Load state from JSON
 */
export function fromJSON(nodeList: NodeInstance[], connectionList: Connection[], annotationList?: Annotation[]): void {
	if (!nodeList || !Array.isArray(nodeList)) {
		rootNodes.set(new Map());
	} else {
		const synced = syncPortLabelsRecursively(nodeList.map(withPortStructure));
		rootNodes.set(new Map(synced.map(n => [n.id, n])));
	}
	rootConnections.set(connectionList || []);
	rootAnnotations.set(new Map((annotationList || []).map(a => [a.id, a])));
	currentPath.set([]);
	selectedNodeIds.set(new Set());
}

/**
 * Get all nodes with their path information (for global search)
 * Excludes Interface nodes as they're internal to subsystems
 */
export function getAllNodesWithPaths(): SearchableNode[] {
	const results: SearchableNode[] = [];

	const collectNodes = (
		nodes: NodeInstance[],
		path: string[],
		pathNames: string[]
	) => {
		for (const node of nodes) {
			// Skip Interface nodes - they're internal
			if (node.type === NODE_TYPES.INTERFACE) continue;

			results.push({
				node,
				path: [...path],
				pathNames: [...pathNames],
				depth: path.length
			});

			// Recurse into subsystems
			if (node.graph) {
				collectNodes(
					node.graph.nodes,
					[...path, node.id],
					[...pathNames, node.name]
				);
			}
		}
	};

	collectNodes(Array.from(get(rootNodes).values()), [], ['Root']);
	return results;
}

