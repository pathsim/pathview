/**
 * Connection drag - the port a wire is being dragged from, so ports that can
 * take the wire are highlighted while connecting
 */

import { busWireAllowed } from './busView.svelte';

interface DragSource {
	nodeId: string;
	port: number;
	isOutput: boolean;
}

export const connectionDrag = $state<{ from: DragSource | null; occupiedInputs: Set<string> }>({
	from: null,
	occupiedInputs: new Set()
});

/**
 * Start highlighting for a wire dragged from a port
 * @param occupiedInputs - Inputs that already receive a wire, as "nodeId:port"
 */
export function startConnectionDrag(from: DragSource, occupiedInputs: Set<string>): void {
	connectionDrag.occupiedInputs = occupiedInputs;
	connectionDrag.from = from;
}

export function endConnectionDrag(): void {
	connectionDrag.from = null;
}

/**
 * Whether a port can take the wire being dragged: a free input for a wire from
 * an output, any output for a wire from an input, both within the bus rules
 */
export function canTakeDraggedWire(nodeId: string, port: number, isOutput: boolean): boolean {
	const from = connectionDrag.from;
	if (!from || from.isOutput === isOutput) return false;
	if (isOutput) return busWireAllowed(nodeId, port, from.nodeId, from.port);
	return !connectionDrag.occupiedInputs.has(`${nodeId}:${port}`) && busWireAllowed(from.nodeId, from.port, nodeId, port);
}
