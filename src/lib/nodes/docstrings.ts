/**
 * Block docstring lookup.
 *
 * Reads from the node registry, which already merges build-time bundled
 * blocks (registered under `BUILTIN_SOURCE`) and runtime-installed toolbox
 * blocks. Reading from the registry first means a runtime toolbox that
 * replaces a built-in class name surfaces its own docstring rather than
 * the stale bundled one.
 */

import { nodeRegistry } from './registry';

export function getDocstring(blockType: string): string | undefined {
	return nodeRegistry.get(blockType)?.docstring;
}

export function getAllDocstrings(): Record<string, string> {
	const out: Record<string, string> = {};
	for (const def of nodeRegistry.getAll()) {
		if (def.docstring) out[def.type] = def.docstring;
	}
	return out;
}
