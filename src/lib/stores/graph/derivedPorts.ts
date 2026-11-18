/**
 * Graph store - Derived ports
 *
 * The ports of a block whose ports depend on its parameters (`portParameters`
 * of its type) come from the pathsim block built with the parameters of the
 * node, when one of them is committed.
 */

import { get } from 'svelte/store';
import type { NodeInstance } from '$lib/nodes/types';
import { nodeRegistry } from '$lib/nodes/registry';
import { generateParamString, blockImportPath } from '$lib/pyodide/codeBuilder';
import { introspectBlockPorts } from '$lib/toolbox/installer';
import { codeContextStore } from '$lib/stores/codeContext';
import { consoleStore } from '$lib/stores/console';
import { currentPath, graphAt } from './state';
import { setDerivedPorts } from './ports';

/** Constructor arguments of the block of a node, as in the generated code */
function constructorArgs(node: NodeInstance): string {
	const typeDef = nodeRegistry.get(node.type);
	return generateParamString(node.params, new Set(typeDef?.params.map((p) => p.name)), { skipInternal: true });
}

/** Derive the ports of a node at the current level, if they depend on one of the changed parameters */
export function deriveChangedPorts(nodeId: string, changedParams: string[]): void {
	const path = get(currentPath);
	const node = graphAt(path).nodes.find((n) => n.id === nodeId);
	const portParameters = node && nodeRegistry.get(node.type)?.portParameters;
	if (portParameters?.some((p) => changedParams.includes(p))) void derivePorts(path, nodeId);
}

async function derivePorts(path: string[], nodeId: string): Promise<void> {
	const node = graphAt(path).nodes.find((n) => n.id === nodeId);
	const typeDef = node && nodeRegistry.get(node.type);
	if (!node || !typeDef) return;

	const args = constructorArgs(node);
	try {
		const ports = await introspectBlockPorts(blockImportPath(typeDef.blockClass), typeDef.blockClass, args, codeContextStore.getCode());

		//parameters edited while Python ran: a later derivation follows
		const current = graphAt(path).nodes.find((n) => n.id === nodeId);
		if (!current || constructorArgs(current) !== args) return;

		setDerivedPorts(path, nodeId, ports);
	} catch (e) {
		consoleStore.warn(`[ports] ${node.name}: ports kept, ${e instanceof Error ? e.message : String(e)}`);
	}
}
