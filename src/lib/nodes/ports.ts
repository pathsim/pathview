/**
 * Port structure of nodes
 *
 * Each port of a node carries how pathsim addresses it (`key`, the label of a
 * fixed port of a pathsim block) and the channels of a carrier port (`bus`).
 * Code generation and the bus analysis read them from the node only.
 */

import type { NodeInstance, PortDirection, PortInstance } from './types';
import { nodeRegistry } from './registry';

/** Port of a node by direction and index */
export function nodePort(node: NodeInstance, direction: PortDirection, index: number): PortInstance | undefined {
	return (direction === 'input' ? node.inputs : node.outputs)?.[index];
}

/**
 * Fill the pathsim key and the carrier channels of the fixed ports of a node
 * from its type definition, by index, recursing into subsystems. For nodes
 * saved before ports carried their structure: the saved names are display
 * names (e.g. "out 0" for the label "out") and do not tell the key. Ports that
 * have a key, variable ports and unknown types are left as they are.
 */
export function withPortStructure(node: NodeInstance): NodeInstance {
	let result = node;
	const typeDef = nodeRegistry.get(node.type);
	if (typeDef) {
		for (const direction of ['input', 'output'] as const) {
			const portsKey = direction === 'input' ? 'inputs' : 'outputs';
			const policy = direction === 'input' ? typeDef.ports.inputPolicy : typeDef.ports.outputPolicy;
			if (policy !== 'fixed') continue;
			const defs = typeDef.ports[portsKey];
			const ports = result[portsKey];
			if (!ports.some((port, i) => port.key === undefined && (defs[i]?.key !== undefined || defs[i]?.bus))) continue;
			result = {
				...result,
				[portsKey]: ports.map((port, i) =>
					port.key !== undefined
						? port
						: {
								...port,
								...(defs[i]?.key !== undefined ? { key: defs[i].key } : {}),
								...(defs[i]?.bus ? { bus: defs[i].bus } : {})
							}
				)
			};
		}
	}
	if (result.graph) {
		const nodes = result.graph.nodes.map(withPortStructure);
		if (nodes.some((n, i) => n !== result.graph!.nodes[i])) {
			result = { ...result, graph: { ...result.graph, nodes } };
		}
	}
	return result;
}
