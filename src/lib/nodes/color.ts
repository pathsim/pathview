import type { NodeInstance } from './types';
import { nodeRegistry } from './registry';

/**
 * Color of a node: its own color, the accent by default, and the error color
 * when its type is not registered, so a missing block shows up in red.
 */
export function nodeColor(node: Pick<NodeInstance, 'type' | 'color'>): string {
	if (!nodeRegistry.has(node.type)) return 'var(--error)';
	return node.color || 'var(--accent)';
}
