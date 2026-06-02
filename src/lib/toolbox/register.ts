/**
 * Convert introspected toolbox metadata into registry definitions and apply
 * the user's per-block overrides.
 *
 * One toolbox = one source id in the registry. Registering replaces, and
 * `unregisterSource(id)` is the clean uninstall path.
 */

import { defineNode } from '$lib/nodes/defineNode';
import { nodeRegistry } from '$lib/nodes/registry';
import type { NodeShape, ParamType } from '$lib/nodes/types';
import { eventRegistry } from '$lib/events/registry';
import type {
	EventParamDefinition,
	EventParamType,
	EventTypeDefinition
} from '$lib/types/events';
import {
	installPackage,
	loadInlineModule,
	introspectBlocks,
	introspectEvents,
	getModuleVersion,
	uninstallModule,
	type IntrospectedBlock,
	type IntrospectedEvent
} from './installer';
import { upsertToolbox } from './store';
import type { BlockSelection, EventSelection, ToolboxConfig } from './types';

/**
 * Resolve the port shape from introspected `input_port_labels` / `output_port_labels`.
 * Same semantics as the build-time pipeline.
 */
function resolvePorts(
	labels: Record<string, number> | string[] | null | undefined
): { ports: string[] | undefined; max: number | null } {
	if (labels === null || labels === undefined) {
		return { ports: undefined, max: null }; // variable
	}
	if (Array.isArray(labels)) {
		if (labels.length === 0) return { ports: [], max: 0 };
		return { ports: labels, max: labels.length };
	}
	// Dict {name: index}
	const entries = Object.entries(labels);
	if (entries.length === 0) return { ports: [], max: 0 };
	entries.sort((a, b) => (a[1] as number) - (b[1] as number));
	const ports = entries.map(([name]) => name);
	return { ports, max: ports.length };
}

const PARAM_TYPES: ReadonlySet<ParamType> = new Set([
	'number',
	'integer',
	'boolean',
	'string',
	'array',
	'callable',
	'any'
]);

function asParamType(t: string): ParamType {
	return PARAM_TYPES.has(t as ParamType) ? (t as ParamType) : 'any';
}

/**
 * Map a runtime-introspected param type onto the narrower `EventParamType`
 * surface. Numeric types collapse to 'number'; everything else falls back
 * to 'string'.
 */
function asEventParamType(t: string): EventParamType {
	if (t === 'callable' || t === 'array') return t;
	if (t === 'number' || t === 'integer') return 'number';
	if (t === 'string') return 'string';
	return 'string';
}

const SHAPE_IDS = new Set(['pill', 'rect', 'circle', 'diamond', 'mixed']);

function asShape(value: string | undefined): NodeShape | undefined {
	if (!value) return undefined;
	return SHAPE_IDS.has(value) ? (value as NodeShape) : undefined;
}

/** Build a node definition from one introspected block + the user's selection. */
function buildBlockDefinition(
	block: IntrospectedBlock,
	selection: BlockSelection,
	fallbackCategory: string,
	importPath: string
) {
	const { ports: inputs, max: maxInputs } = resolvePorts(block.inputs);
	const { ports: outputs, max: maxOutputs } = resolvePorts(block.outputs);

	const params: Record<string, { type: ParamType; default: unknown; description?: string }> = {};
	for (const p of block.params) {
		params[p.name] = {
			type: asParamType(p.type),
			default: p.default,
			description: p.description || undefined
		};
	}

	const definition = defineNode({
		name: selection.override?.name ?? block.className,
		category: selection.override?.category ?? fallbackCategory,
		blockClass: block.className,
		importPath,
		description: block.description,
		inputs,
		outputs,
		maxInputs,
		maxOutputs,
		shape: asShape(selection.override?.shape),
		syncPorts: selection.override?.syncPorts || undefined,
		params
	});

	if (block.docstringHtml) {
		definition.docstring = block.docstringHtml;
	}

	return definition;
}

function buildEventDefinition(event: IntrospectedEvent, selection: EventSelection, importPath: string): EventTypeDefinition {
	const params: EventParamDefinition[] = event.params.map((p) => ({
		name: p.name,
		type: asEventParamType(p.type),
		default: p.default,
		description: p.description || undefined
	}));
	const def: EventTypeDefinition = {
		type: `${importPath}.${event.className}`,
		name: selection.override?.name ?? event.className,
		description: event.description,
		params,
		eventClass: event.className
	};
	if (event.docstringHtml) {
		def.docstringHtml = event.docstringHtml;
	}
	return def;
}

/**
 * Run the source-specific install step (PyPI / URL / inline) and return the
 * importPath that introspection should use afterwards. The caller is
 * responsible for persisting the toolbox config.
 */
export async function performInstall(
	source: ToolboxConfig['source'],
	requestedImportPath?: string
): Promise<{ importPath: string; installedVersion: string | null }> {
	let importPath: string;
	if (source.type === 'pypi') {
		const spec = source.version ? `${source.pkg}==${source.version}` : source.pkg;
		// Default to the package name with `_` if caller didn't specify.
		importPath = requestedImportPath ?? source.pkg.replace(/-/g, '_');
		await installPackage(spec, importPath);
	} else if (source.type === 'url') {
		if (!requestedImportPath) {
			throw new Error('importPath is required when installing from URL');
		}
		await installPackage(source.url, requestedImportPath);
		importPath = requestedImportPath;
	} else if (source.type === 'inline') {
		const baseName = source.filename.replace(/\.py$/, '').replace(/[^A-Za-z0-9_]/g, '_');
		importPath = await loadInlineModule(baseName, source.code);
	} else {
		throw new Error(`Unknown toolbox source type: ${(source as { type: string }).type}`);
	}
	const installedVersion = await getModuleVersion(importPath);
	return { importPath, installedVersion };
}

/**
 * Run introspection for a configured toolbox. The toolbox must already be
 * installed (importable). Returns the raw introspection data so the caller
 * can present it in the manager (e.g. for selection step).
 */
export async function discoverToolbox(config: {
	importPath: string;
	eventsImportPath?: string;
}): Promise<{ blocks: IntrospectedBlock[]; events: IntrospectedEvent[] }> {
	const blocks = await introspectBlocks(config.importPath);
	let events: IntrospectedEvent[] = [];
	if (config.eventsImportPath) {
		try {
			events = await introspectEvents(config.eventsImportPath);
		} catch (e) {
			// Events submodule is optional — likely just doesn't exist for
			// this toolbox. Log but don't fail the install.
			console.warn(
				`[toolbox] event introspection skipped for "${config.eventsImportPath}":`,
				e
			);
		}
	}
	return { blocks, events };
}

/**
 * Register the user's selected blocks/events under the toolbox source id.
 * Replaces any previous registration for the same toolbox id.
 *
 * `defaultCategory` and `categoryByClass` both come from the catalog and
 * provide fallbacks when the user hasn't set an explicit override.
 * Resolution order: user override → categoryByClass → defaultCategory →
 * toolbox display name.
 */
export function registerToolbox(
	config: ToolboxConfig,
	options: {
		blocks: IntrospectedBlock[];
		events: IntrospectedEvent[];
		defaultCategory?: string;
		categoryByClass?: Record<string, string>;
	}
): void {
	// Clear any prior registrations for this id.
	nodeRegistry.unregisterSource(config.id);
	eventRegistry.unregisterSource(config.id);

	const blocksByClass = new Map(options.blocks.map((b) => [b.className, b]));
	const eventsByClass = new Map(options.events.map((e) => [e.className, e]));

	for (const sel of config.blocks) {
		if (!sel.enabled) continue;
		const block = blocksByClass.get(sel.className);
		if (!block || block.error) continue;
		const fallbackCategory =
			options.categoryByClass?.[sel.className] ??
			options.defaultCategory ??
			config.displayName;
		const def = buildBlockDefinition(block, sel, fallbackCategory, config.importPath);
		nodeRegistry.register(def, config.id);
	}

	for (const sel of config.events) {
		if (!sel.enabled) continue;
		const event = eventsByClass.get(sel.className);
		if (!event) continue;
		const importPath = config.eventsImportPath ?? config.importPath;
		const def = buildEventDefinition(event, sel, importPath);
		eventRegistry.register(def, config.id);
	}
}

/**
 * Commit a discovered toolbox: register its selected blocks/events and persist
 * the config. The shared tail of both install paths — the startup/required
 * orchestrator (`installFlow`) and the manager dialog — which run their own
 * install + discover + selection beforehand and then call this to land it.
 */
export function commitToolbox(
	config: ToolboxConfig,
	discovered: { blocks: IntrospectedBlock[]; events: IntrospectedEvent[] },
	hints: { defaultCategory?: string; categoryByClass?: Record<string, string> } = {}
): void {
	registerToolbox(config, {
		blocks: discovered.blocks,
		events: discovered.events,
		defaultCategory: hints.defaultCategory,
		categoryByClass: hints.categoryByClass
	});
	upsertToolbox(config);
}

/** Clean up a toolbox: drop registry entries and the Python module. */
export async function uninstallToolbox(config: ToolboxConfig): Promise<void> {
	nodeRegistry.unregisterSource(config.id);
	eventRegistry.unregisterSource(config.id);
	try {
		await uninstallModule(config.importPath);
		if (config.eventsImportPath) await uninstallModule(config.eventsImportPath);
	} catch {
		// Best-effort: dropping from sys.modules is cosmetic at runtime.
	}
}
