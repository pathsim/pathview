/**
 * Migrations of saved graph files to the current format, applied on load
 */

import type { NodeInstance, GraphFile } from '$lib/nodes/types';
import type { ToolboxRequirement } from '$lib/types/schema';

/**
 * pathsim-chem up to 0.3 had its own `Polynomial` with the coefficients in
 * ascending order, which replaced the core block of the same name. It was
 * removed in 0.4, so these nodes now load as `pathsim.blocks.Polynomial`,
 * which takes the coefficients in descending order (numpy.polyval).
 */
const CHEM_POLYNOMIAL_REMOVED = [0, 4];

/**
 * Migrate old node type format to new format
 * Old: 'pathsim.sources.StepSource' -> New: 'StepSource'
 */
function migrateNodeType(type: string): string {
	if (type.startsWith('pathsim.')) {
		// Extract the last part after the final dot
		const parts = type.split('.');
		return parts[parts.length - 1];
	}
	return type;
}

/** Whether a version string is older than [major, minor], unknown versions count as older */
function olderThan(version: string | null | undefined, [major, minor]: number[]): boolean {
	const match = version?.match(/^(\d+)\.(\d+)/);
	if (!match) return true;
	const [maj, min] = [Number(match[1]), Number(match[2])];
	return maj < major || (maj === major && min < minor);
}

/** Whether the file was saved with a pathsim-chem that still had its own Polynomial */
function hasChemPolynomial(requirements: ToolboxRequirement[] | undefined): boolean {
	const chem = requirements?.find((r) => r.importPath === 'pathsim_chem');
	return !!chem && olderThan(chem.installedVersion, CHEM_POLYNOMIAL_REMOVED);
}

/** Reverse the coefficients of a chem Polynomial for the core block */
function migrateChemPolynomial(node: NodeInstance): NodeInstance {
	const coeffs = node.params?.coeffs;
	if (typeof coeffs !== 'string' || !coeffs.trim()) return node;
	return { ...node, params: { ...node.params, coeffs: `(${coeffs})[::-1]` } };
}

/**
 * Migrate a GraphFile from old format to new format
 */
export function migrateGraphFile(file: GraphFile): GraphFile {
	const chemPolynomial = hasChemPolynomial(file.requiredToolboxes);

	const migrateNodes = (nodes: NodeInstance[]): NodeInstance[] => {
		return nodes.map(node => {
			let migratedNode = { ...node, type: migrateNodeType(node.type) };
			if (chemPolynomial && migratedNode.type === 'Polynomial') {
				migratedNode = migrateChemPolynomial(migratedNode);
			}
			// Recursively migrate subsystem graphs (preserving connections, annotations, and events)
			if (migratedNode.graph) {
				migratedNode.graph = {
					nodes: migrateNodes(migratedNode.graph.nodes || []),
					connections: migratedNode.graph.connections || [],
					annotations: migratedNode.graph.annotations,
					events: migratedNode.graph.events
				};
			}
			return migratedNode;
		});
	};

	return {
		...file,
		graph: file.graph ? {
			...file.graph,
			nodes: migrateNodes(file.graph.nodes || [])
		} : file.graph
	};
}
