import { describe, it, expect } from 'vitest';
import { migrateGraphFile } from './migrate';
import type { GraphFile, NodeInstance } from '$lib/nodes/types';
import type { ToolboxRequirement } from '$lib/types/schema';

const chem = (installedVersion: string | null): ToolboxRequirement => ({
	id: 'pathsim-chem',
	displayName: 'pathsim-chem',
	source: { type: 'pypi', pkg: 'pathsim-chem' },
	importPath: 'pathsim_chem',
	installedVersion
});

const polynomial = (coeffs: string): NodeInstance =>
	({ id: 'p', type: 'Polynomial', name: 'Polynomial', params: { coeffs } }) as unknown as NodeInstance;

const file = (nodes: NodeInstance[], requiredToolboxes?: ToolboxRequirement[]): GraphFile =>
	({ version: '1.0.0', graph: { nodes, connections: [] }, requiredToolboxes }) as unknown as GraphFile;

const coeffsOf = (f: GraphFile) => f.graph.nodes[0].params?.coeffs;

describe('migrateGraphFile', () => {
	it('drops the old pathsim module prefix of node types', () => {
		const node = { ...polynomial('[1]'), type: 'pathsim.sources.StepSource' };
		expect(migrateGraphFile(file([node])).graph.nodes[0].type).toBe('StepSource');
	});

	it('reverses the coefficients of the Polynomial of pathsim-chem before 0.4', () => {
		expect(coeffsOf(migrateGraphFile(file([polynomial('[1, 2, 3]')], [chem('0.3.0')])))).toBe('([1, 2, 3])[::-1]');
		expect(coeffsOf(migrateGraphFile(file([polynomial('c')], [chem(null)])))).toBe('(c)[::-1]');
	});

	it('reverses the coefficients inside subsystems', () => {
		const sub = { id: 's', type: 'Subsystem', name: 'S', params: {}, graph: { nodes: [polynomial('[1, 2]')], connections: [] } };
		const migrated = migrateGraphFile(file([sub as unknown as NodeInstance], [chem('0.2.8')]));
		expect(migrated.graph.nodes[0].graph?.nodes[0].params?.coeffs).toBe('([1, 2])[::-1]');
	});

	it('keeps the core Polynomial', () => {
		expect(coeffsOf(migrateGraphFile(file([polynomial('[1, 2, 3]')])))).toBe('[1, 2, 3]');
		expect(coeffsOf(migrateGraphFile(file([polynomial('[1, 2, 3]')], [chem('0.4.0')])))).toBe('[1, 2, 3]');
	});
});
