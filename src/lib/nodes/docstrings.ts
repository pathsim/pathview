/**
 * Block docstring lookup.
 *
 * Resolves to the build-time generated `extractedBlocks` first, then falls
 * back to the live `nodeRegistry` so runtime-installed toolbox blocks also
 * surface their RST→HTML documentation in the BlockProperties dialog.
 */

import { extractedBlocks } from './generated/blocks';
import { nodeRegistry } from './registry';

export function getDocstring(blockType: string): string | undefined {
	const fromBundle = extractedBlocks[blockType]?.docstringHtml;
	if (fromBundle) return fromBundle;
	return nodeRegistry.get(blockType)?.docstring;
}

export function getAllDocstrings(): Record<string, string> {
	const out: Record<string, string> = {};
	for (const [name, block] of Object.entries(extractedBlocks)) {
		if (block.docstringHtml) out[name] = block.docstringHtml;
	}
	for (const def of nodeRegistry.getAll()) {
		if (def.docstring && !out[def.type]) out[def.type] = def.docstring;
	}
	return out;
}
