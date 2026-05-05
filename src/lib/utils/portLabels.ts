/**
 * Port Labels Utility
 *
 * Shared logic for determining port label visibility.
 * Used by both BaseNode.svelte (canvas) and SVG renderer (export).
 */

import type { NodeInstance } from '$lib/types/nodes';

/**
 * Get effective port label visibility for a node.
 * Per-node settings override global setting.
 *
 * @param node - The node instance
 * @param globalShowLabels - Global port labels setting (from portLabelsStore)
 * @returns Object with hasVisibleInputLabels and hasVisibleOutputLabels
 */
export function getEffectivePortLabelVisibility(
	node: NodeInstance,
	globalShowLabels: boolean
): { inputs: boolean; outputs: boolean } {
	// Per-node overrides (undefined = follow global)
	const inputSetting = (node.params?.['_showInputLabels'] as boolean | undefined) ?? globalShowLabels;
	const outputSetting = (node.params?.['_showOutputLabels'] as boolean | undefined) ?? globalShowLabels;

	// Actual visibility: setting is ON and ports exist
	return {
		inputs: inputSetting && node.inputs.length > 0,
		outputs: outputSetting && node.outputs.length > 0
	};
}

/**
 * Truncate port label for display. The on-canvas labels are also clipped
 * by CSS `text-overflow: ellipsis`, but this provides a hard limit for the
 * SVG export path (where ellipsis isn't trivially available) and avoids
 * overly long inline strings in the DOM.
 *
 * @param name - Port name
 * @param maxChars - Maximum characters (default: 8)
 * @returns Truncated name
 */
export function truncatePortLabel(name: string, maxChars: number = 8): string {
	return name.length > maxChars ? name.slice(0, maxChars) : name;
}
