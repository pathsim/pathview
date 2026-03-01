/**
 * Mutation Queue
 * Collects graph changes (add/remove blocks, connections, parameter/setting changes)
 * as structured command objects. Changes are NOT applied automatically — the user
 * explicitly stages them via a "Stage Changes" action.
 *
 * On "Run": queue is cleared, mappings initialized from code generation result.
 * On "Stage": queue is flushed → applied to worker (via exec or execDuringStreaming).
 * On "Continue": remaining queued mutations are flushed before the new generator starts.
 *
 * Design:
 * - Structural mutations (add/remove block/connection) are queued in order.
 * - Parameter and setting updates are coalesced: only the latest value per key.
 * - Mutations are serialized as JSON and dispatched by a Python-side handler
 *   (_apply_mutations) which handles per-mutation error isolation.
 * - pendingMutationCount is a Svelte store for UI reactivity (badge on stage button).
 */

import { writable } from 'svelte/store';
import type { NodeInstance, Connection } from '$lib/nodes/types';
import { nodeRegistry } from '$lib/nodes/registry';
import { isSubsystem } from '$lib/nodes/shapes';
import { sanitizeName } from './codeBuilder';

// --- Command types ---

type MutationCommand =
	| { type: 'set_param'; var: string; param: string; value: string }
	| { type: 'set_setting'; code: string }
	| { type: 'add_block'; var: string; blockClass: string; params: Record<string, string>; nodeId: string; nodeName: string }
	| { type: 'remove_block'; var: string; nodeId: string }
	| { type: 'add_connection'; var: string; sourceVar: string; sourcePort: number; targetVar: string; targetPort: number }
	| { type: 'remove_connection'; var: string };

// --- Internal state ---

/** Active variable name mappings from the last run */
let activeNodeVars = new Map<string, string>();   // nodeId → Python var name
let activeConnVars = new Map<string, string>();    // connectionId → Python var name

/** Counter for dynamically added variables */
let dynamicVarCounter = 0;

/** Ordered structural mutations (add/remove block/connection) */
const structuralQueue: MutationCommand[] = [];

/** Coalesced parameter updates: "nodeId:paramName" → command */
const paramUpdates = new Map<string, MutationCommand>();

/** Coalesced setting updates: key → command */
const settingUpdates = new Map<string, MutationCommand>();

/** Reactive store: number of pending mutations */
export const pendingMutationCount = writable(0);

function updateCount(): void {
	pendingMutationCount.set(
		structuralQueue.length + paramUpdates.size + settingUpdates.size
	);
}

// --- Public API ---

/**
 * Check if the mutation queue is active (a simulation has been run).
 */
export function isActive(): boolean {
	return activeNodeVars.size > 0;
}

/**
 * Initialize mappings from a fresh run's code generation result.
 * Called when "Run" starts. Clears all pending mutations.
 */
export function initMappings(nodeVars: Map<string, string>, connVars: Map<string, string>): void {
	activeNodeVars = new Map(nodeVars);
	activeConnVars = new Map(connVars);
	dynamicVarCounter = 0;
	structuralQueue.length = 0;
	paramUpdates.clear();
	settingUpdates.clear();
	updateCount();
}

/**
 * Clear the mutation queue (on fresh Run).
 */
export function clearQueue(): void {
	structuralQueue.length = 0;
	paramUpdates.clear();
	settingUpdates.clear();
	updateCount();
}

/**
 * Get all pending mutations as a Python code string and clear the queue.
 * Mutations are serialized as JSON and dispatched via _apply_mutations().
 * Order: settings first, then structural mutations, then parameter updates.
 */
export function flushQueue(): string | null {
	const allCommands: MutationCommand[] = [];

	// 1. Settings (apply before structural changes)
	for (const cmd of settingUpdates.values()) {
		allCommands.push(cmd);
	}

	// 2. Structural mutations (add/remove in order)
	for (const cmd of structuralQueue) {
		allCommands.push(cmd);
	}

	// 3. Parameter updates (apply after blocks exist)
	for (const cmd of paramUpdates.values()) {
		allCommands.push(cmd);
	}

	structuralQueue.length = 0;
	paramUpdates.clear();
	settingUpdates.clear();
	updateCount();

	if (allCommands.length === 0) return null;

	// Double stringify: inner produces the JSON array,
	// outer wraps it as a Python string literal with proper escaping
	const jsonPayload = JSON.stringify(JSON.stringify(allCommands));
	return `_apply_mutations(${jsonPayload})`;
}

/**
 * Check if there are pending mutations.
 */
export function hasPendingMutations(): boolean {
	return structuralQueue.length > 0 || paramUpdates.size > 0 || settingUpdates.size > 0;
}

// --- Mutation generators ---

/**
 * Queue adding a new block to the simulation.
 * Skips subsystem nodes (they require recursive internal graph creation).
 */
export function queueAddBlock(node: NodeInstance): void {
	if (!isActive()) return;
	if (isSubsystem(node)) return;

	const typeDef = nodeRegistry.get(node.type);
	if (!typeDef) return;

	const existingNames = new Set(activeNodeVars.values());
	let varName = sanitizeName(node.name);
	if (!varName || existingNames.has(varName)) {
		varName = `block_dyn_${dynamicVarCounter++}`;
	}
	activeNodeVars.set(node.id, varName);

	const validParamNames = new Set(typeDef.params.map(p => p.name));
	const params: Record<string, string> = {};
	for (const [name, value] of Object.entries(node.params)) {
		if (value === null || value === undefined || value === '') continue;
		if (name.startsWith('_')) continue;
		if (!validParamNames.has(name)) continue;
		params[name] = String(value);
	}

	structuralQueue.push({
		type: 'add_block',
		var: varName,
		blockClass: typeDef.blockClass,
		params,
		nodeId: node.id,
		nodeName: node.name
	});
	updateCount();
}

/**
 * Queue removing a block from the simulation.
 */
export function queueRemoveBlock(nodeId: string): void {
	const varName = activeNodeVars.get(nodeId);
	if (!varName) return;

	structuralQueue.push({
		type: 'remove_block',
		var: varName,
		nodeId
	});
	activeNodeVars.delete(nodeId);

	// Remove any coalesced param updates for this block
	for (const key of paramUpdates.keys()) {
		if (key.startsWith(nodeId + ':')) {
			paramUpdates.delete(key);
		}
	}
	updateCount();
}

/**
 * Queue adding a new connection to the simulation.
 */
export function queueAddConnection(conn: Connection): void {
	if (!isActive()) return;

	const sourceVar = activeNodeVars.get(conn.sourceNodeId);
	const targetVar = activeNodeVars.get(conn.targetNodeId);
	if (!sourceVar || !targetVar) return;

	const varName = `conn_dyn_${dynamicVarCounter++}`;
	activeConnVars.set(conn.id, varName);

	structuralQueue.push({
		type: 'add_connection',
		var: varName,
		sourceVar,
		sourcePort: conn.sourcePortIndex,
		targetVar,
		targetPort: conn.targetPortIndex
	});
	updateCount();
}

/**
 * Queue removing a connection from the simulation.
 */
export function queueRemoveConnection(connId: string): void {
	const varName = activeConnVars.get(connId);
	if (!varName) return;

	structuralQueue.push({
		type: 'remove_connection',
		var: varName
	});
	activeConnVars.delete(connId);
	updateCount();
}

/**
 * Queue a block parameter change.
 * Coalesced: only the latest value per (nodeId, paramName) is kept.
 */
export function queueUpdateParam(nodeId: string, paramName: string, value: string): void {
	const varName = activeNodeVars.get(nodeId);
	if (!varName) return;

	paramUpdates.set(`${nodeId}:${paramName}`, {
		type: 'set_param',
		var: varName,
		param: paramName,
		value
	});
	updateCount();
}

/**
 * Queue a simulation setting change.
 * Coalesced: only the latest code per setting key is kept.
 * @param key - Coalescing key (e.g. 'dt', 'solver')
 * @param code - Full Python code to execute (e.g. 'sim.dt = 0.01')
 */
export function queueUpdateSetting(key: string, code: string): void {
	if (!isActive()) return;

	settingUpdates.set(key, {
		type: 'set_setting',
		code
	});
	updateCount();
}

// --- Lookup ---

export function getNodeVar(nodeId: string): string | undefined {
	return activeNodeVars.get(nodeId);
}

export function getConnVar(connId: string): string | undefined {
	return activeConnVars.get(connId);
}
