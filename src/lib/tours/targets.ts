/**
 * Tour-target selector helpers. Every selector used by a tour goes through
 * this module — components carry `data-tour="..."` attributes (set in the
 * Svelte source), and tour scripts call these helpers instead of hand-rolling
 * CSS selectors. Refactor-safe: rename a panel toggle and only the data-tour
 * attribute and the helper here change.
 *
 * Convention: data-tour values are kebab-case, lowercase, hierarchically
 * scoped (e.g. `panel-toggle-blocks`, `dialog-properties`, `block-pin-btn`).
 */

export type PanelName =
	| 'blocks'
	| 'subsystems'
	| 'simulation'
	| 'editor'
	| 'events'
	| 'results'
	| 'console';

export type ToolbarAction =
	| 'run'
	| 'pin-previews'
	| 'export-python'
	| 'theme'
	| 'shortcuts'
	| 'files';

export type DialogKind =
	| 'toolbox-manager'
	| 'search'
	| 'properties'
	| 'shortcuts'
	| 'python-export';

export type BlockField = 'name-input' | 'color-picker' | 'pin-btn';

export const T = {
	/** Toggle button on the left rail that opens/closes a panel. */
	panelToggle: (name: PanelName): string => `[data-tour="panel-toggle-${name}"]`,

	/** Content wrapper of an open panel (the ResizablePanel root). */
	panelContent: (name: PanelName): string => `[data-tour="panel-${name}"]`,

	/** Toolbar button at the top of the editor (Run, Theme, …). */
	toolbarButton: (action: ToolbarAction): string =>
		`[data-tour="toolbar-${action}"]`,

	/** Dialog root. */
	dialog: (kind: DialogKind): string => `[data-tour="dialog-${kind}"]`,

	/** Field inside the open block-properties dialog. */
	blockField: (field: BlockField): string => `[data-tour="block-${field}"]`,

	/** Welcome banner / logo button (top-left). */
	welcomeLogo: '[data-tour="welcome-banner-logo"]',

	/** Toolbox-manager opener (icon at the top of the Block Library panel). */
	openToolboxManager: '[data-tour="open-toolbox-manager"]',

	/** Subsystem-path breadcrumb at the top centre. */
	breadcrumb: '[data-tour="breadcrumb"]',

	/** SvelteFlow canvas pane. */
	canvasPane: '.svelte-flow__pane',

	/** SvelteFlow node by graph node id. */
	nodeById: (id: string): string => `.svelte-flow__node[data-id="${id}"]`,

	/** First (any) annotation node on the canvas. */
	annotation: '.annotation'
} as const;

/** Resolve a target selector to an Element, falling back to a sensible
 *  default so a missing target doesn't crash the tour mid-step. */
export function resolveTarget(selector: string, fallback?: Element): Element {
	return (
		document.querySelector(selector) ??
		fallback ??
		document.querySelector(T.canvasPane) ??
		document.body
	);
}
