import { describe, it, expect } from 'vitest';
import { parseFileContent } from './fileOps';
import type { ToolboxRequirement } from '$lib/types/schema';

const batt: ToolboxRequirement = {
	id: 'pathsim-batt',
	displayName: 'pathsim-batt',
	source: { type: 'pypi', pkg: 'pathsim-batt' },
	importPath: 'pathsim_batt'
};

describe('parseFileContent', () => {
	it('keeps the required toolboxes of a model file', () => {
		const model = {
			version: '1.0.0',
			metadata: { name: 'cell' },
			graph: { nodes: [], connections: [] },
			codeContext: { code: '' },
			simulationSettings: {},
			requiredToolboxes: [batt]
		};
		const file = parseFileContent(JSON.stringify(model), 'cell.pvm');
		expect(file.type).toBe('model');
		expect((file.content as { requiredToolboxes?: ToolboxRequirement[] }).requiredToolboxes).toEqual([batt]);
	});
});
