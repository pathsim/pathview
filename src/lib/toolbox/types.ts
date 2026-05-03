/**
 * Runtime toolbox types
 *
 * A "toolbox" is a runtime-installable bundle of block (and optionally event)
 * types. The user adds toolboxes via the toolbox manager; their selections are
 * persisted to localStorage and replayed at app start.
 *
 * Built-in toolboxes (currently `pathsim`) are bundled at build time and not
 * represented here.
 */

import type { NodeShape } from '$lib/types/nodes';

/** Where the toolbox came from. */
export type ToolboxSource =
	| { type: 'pypi'; pkg: string; version?: string }
	| { type: 'url'; url: string }
	| { type: 'inline'; filename: string; code: string }
	| { type: 'curated'; id: string };

/** Per-block UI overrides applied on top of the introspected metadata. */
export interface BlockOverride {
	/** Display name override (defaults to the Python class name). */
	name?: string;
	/** Category override (defaults to the toolbox-config category). */
	category?: string;
	/** Custom shape (pill/rect/circle/diamond). */
	shape?: NodeShape;
}

/** A single block exposed by a toolbox; user can disable or override per-block. */
export interface BlockSelection {
	/** Python class name (also serves as the registered node `type`). */
	className: string;
	/** Whether to register this block. Disabled blocks are hidden but kept in config. */
	enabled: boolean;
	/** UI overrides (name/category/color/shape). */
	override?: BlockOverride;
}

/** A single event exposed by a toolbox. */
export interface EventSelection {
	/** Python class name. */
	className: string;
	enabled: boolean;
	override?: { name?: string };
}

/** A runtime-installed toolbox. */
export interface ToolboxConfig {
	/** Stable id (slug) used for registry de-duplication. */
	id: string;
	/** Display name shown in the Block Library. */
	displayName: string;
	/** Where the toolbox came from. */
	source: ToolboxSource;
	/** Python module path used for introspection (e.g. `pathsim_batt.blocks`). */
	importPath: string;
	/** Optional events submodule (e.g. `pathsim_batt.events`). */
	eventsImportPath?: string;
	/** Block selections + overrides. */
	blocks: BlockSelection[];
	/** Event selections + overrides. */
	events: EventSelection[];
}

/** Versioned envelope persisted to localStorage. */
export interface ToolboxStorage {
	version: 1;
	toolboxes: ToolboxConfig[];
}

export const TOOLBOX_STORAGE_KEY = 'pathview.toolboxes.v1';
