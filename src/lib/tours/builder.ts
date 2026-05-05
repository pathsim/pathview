/**
 * Step-Builder-DSL.
 *
 * Tour scripts describe their content with high-level building blocks —
 * `intro`, `panelStep`, `dialogStep`, `actionStep`, `blockStep`, `floatingStep` —
 * each of which expands to one or more driver.js DriveStep records with
 * the right hooks, anchors, body-mode classes and cleanup behaviour wired in.
 *
 * The intent: a tour script reads like a table of contents, not like
 * driver.js boilerplate.
 */

import type { DriveStep, DriverHook, Side, Alignment } from 'driver.js';
import {
	openPanel,
	closePanel,
	openBlockProperties,
	closeBlockProperties,
	closeAllDialogs,
	clickToolbar,
	openToolboxManager,
	openSearchDialog
} from './actions';
import { getCornerAnchor, type Corner } from './anchors';
import { getCurrentSession } from './session';
import { T, type PanelName, type DialogKind, type ToolbarAction } from './targets';

/* --- Common helpers --------------------------------------------------- */

/** Wrap an async opener so it fires when the user clicks Next, then advances
 *  the driver. Errors in the opener are swallowed — tour Next must not stall. */
function openOnNext(opener: () => Promise<void>): DriverHook {
	return (_el, _step, opts) => {
		opener()
			.catch(() => {})
			.finally(() => opts.driver.moveNext());
	};
}

const FLOATING_POPOVER = { popoverClass: 'tour-floating' } as const;
const FLOATING_BR = {
	side: 'top' as Side,
	align: 'end' as Alignment
};
const FLOATING_TR = {
	side: 'bottom' as Side,
	align: 'end' as Alignment
};

/* --- Floating / intro / outro steps ----------------------------------- */

export interface FloatingStep {
	title: string;
	body: string;
	corner?: Corner; // default: 'top-right'
	/** Inject a custom button (e.g. "Continue with Modeling") into the popover footer. */
	onPopoverRender?: DriveStep['popover'] extends infer P
		? P extends { onPopoverRender?: infer F }
			? F
			: never
		: never;
}

/** A popover anchored to a corner of the viewport, no canvas highlight.
 *  Used for tour intros, summaries, "no specific element" steps. */
export function floatingStep(opts: FloatingStep): DriveStep {
	const corner: Corner = opts.corner ?? 'top-right';
	const align = corner === 'top-right' ? FLOATING_TR : FLOATING_BR;
	return {
		element: () => getCornerAnchor(corner),
		popover: {
			...FLOATING_POPOVER,
			...align,
			title: opts.title,
			description: opts.body,
			onPopoverRender: opts.onPopoverRender
		}
	};
}

/** Tour intro: top-right floating step. */
export const intro = (opts: { title: string; body: string }): DriveStep =>
	floatingStep({ ...opts, corner: 'top-right' });

/* --- Panel steps ------------------------------------------------------ */

export interface PanelStep {
	name: PanelName;
	/** Body text shown for the toggle step ("Click Next to open"). */
	toggleBody: string;
	/** Body text shown for the content step (panel is open). */
	contentBody: string;
	/** Optional shortcut letter, displayed in the toggle step body. */
	shortcut?: string;
	/** Where the toggle popover sits relative to the toggle button. Defaults to right/start. */
	togglePosition?: { side: Side; align: Alignment };
	/** Where the content popover sits relative to the panel. Defaults to right/center. */
	contentPosition?: { side: Side; align: Alignment };
	/** When true (default), the panel closes on deselect of the content step.
	 *  Set to false when the panel hosts the opener of the next step (e.g. the
	 *  Block Library hosts the Toolbox-Manager button) — closing it would
	 *  destroy the next step's target. The session still tracks the panel,
	 *  so cleanup at tour end will close it. */
	autoClose?: boolean;
}

/** Two-step pair: toggle button → content panel. The content step closes
 *  the panel on deselect (when the user moves to the next step), so panels
 *  don't accumulate as the tour progresses. */
export function panelStep(opts: PanelStep): DriveStep[] {
	const toggle: DriveStep = {
		element: T.panelToggle(opts.name),
		popover: {
			title: panelTitle(opts.name) + ' Toggle',
			description: opts.toggleBody,
			side: opts.togglePosition?.side ?? 'right',
			align: opts.togglePosition?.align ?? 'start',
			onNextClick: openOnNext(async () => {
				await openPanel(opts.name);
				getCurrentSession()?.trackOpenedPanel(opts.name);
			})
		}
	};
	const autoClose = opts.autoClose !== false;
	const content: DriveStep = {
		element: T.panelContent(opts.name),
		popover: {
			title: panelTitle(opts.name),
			description: opts.contentBody,
			side: opts.contentPosition?.side ?? 'right',
			align: opts.contentPosition?.align ?? 'center'
		},
		onDeselected: autoClose
			? () => {
					void closePanel(opts.name);
					getCurrentSession()?.untrackPanel(opts.name);
				}
			: undefined
	};
	return [toggle, content];
}

const PANEL_TITLES: Record<PanelName, string> = {
	blocks: 'Block Library',
	subsystems: 'Subsystems',
	simulation: 'Simulation Settings',
	editor: 'Code Editor',
	events: 'Events',
	results: 'Results / Plots',
	console: 'Console'
};
function panelTitle(name: PanelName): string {
	return PANEL_TITLES[name] ?? name;
}

/* --- Dialog steps ----------------------------------------------------- */

export interface DialogStep {
	/** Which dialog kind (CSS via data-tour). */
	dialog: DialogKind;
	/** What the user clicks to *open* the dialog. */
	opener:
		| { kind: 'toolbar'; action: ToolbarAction }
		| { kind: 'toolboxButton' } // icon at the top of the Block Library panel
		| { kind: 'searchShortcut' } // Ctrl/Cmd+F
		| { kind: 'custom'; open: () => Promise<void>; selector: string };
	/** Title for the opener step. */
	openerTitle: string;
	/** Body for the opener step. */
	openerBody: string;
	/** Title for the content step. */
	contentTitle: string;
	/** Body for the content step. */
	contentBody: string;
	/** Where the opener popover sits. Defaults to bottom/end (toolbar buttons). */
	openerPosition?: { side: Side; align: Alignment };
	/** Where the content popover sits relative to the dialog. */
	contentPosition?: { side: Side; align: Alignment };
	/** Inject a footer button on the content step (e.g. "Continue with Modeling"). */
	onContentPopoverRender?: DriveStep['popover'] extends infer P
		? P extends { onPopoverRender?: infer F }
			? F
			: never
		: never;
}

/** Two-step pair: opener button → dialog content. The content step closes
 *  the dialog on Next via closeAllDialogs(), so users always continue with
 *  a clean slate. */
export function dialogStep(opts: DialogStep): DriveStep[] {
	const opener = makeDialogOpener(opts);
	const dialogSelector = T.dialog(opts.dialog);
	const isFloatingOpener = opts.opener.kind === 'searchShortcut';

	const openerStep: DriveStep = {
		element: opener.selector,
		popover: {
			...(isFloatingOpener ? FLOATING_POPOVER : {}),
			title: opts.openerTitle,
			description: opts.openerBody,
			side: opts.openerPosition?.side ?? (isFloatingOpener ? 'top' : 'bottom'),
			align: opts.openerPosition?.align ?? 'end',
			onNextClick: openOnNext(opener.open)
		}
	};
	const contentStep: DriveStep = {
		element: dialogSelector,
		popover: {
			title: opts.contentTitle,
			description: opts.contentBody,
			side: opts.contentPosition?.side ?? 'left',
			align: opts.contentPosition?.align ?? 'center',
			onNextClick: openOnNext(closeAllDialogs),
			onPopoverRender: opts.onContentPopoverRender
		}
	};
	return [openerStep, contentStep];
}

function makeDialogOpener(opts: DialogStep): {
	selector: string | (() => Element);
	open: () => Promise<void>;
} {
	switch (opts.opener.kind) {
		case 'toolbar': {
			const action = opts.opener.action;
			return {
				selector: T.toolbarButton(action),
				open: () => clickToolbar(action, opts.dialog)
			};
		}
		case 'toolboxButton':
			return {
				selector: T.openToolboxManager,
				open: openToolboxManager
			};
		case 'searchShortcut':
			// Search opens via Ctrl/Cmd+F only — no real button to highlight,
			// so the opener step is a floating popover at the bottom-right.
			return {
				selector: () => getCornerAnchor('bottom-right'),
				open: openSearchDialog
			};
		case 'custom':
			return { selector: opts.opener.selector, open: opts.opener.open };
	}
}

/* --- Action / customization steps ------------------------------------- */

export interface ActionStep {
	/** Title for the "locate" step (which element will be acted on). */
	locateTitle: string;
	/** Body for the locate step ("Click Next to apply X"). */
	locateBody: string;
	/** What the locate step highlights — accepts a static selector or a
	 *  function returning an Element (for dynamic targets like a block). */
	locate: string | (() => Element);
	/** Side/align for the locate popover. */
	locatePosition?: { side: Side; align: Alignment };
	/** The mutation: applied when the user clicks Next on the locate step. */
	apply: () => Promise<void>;
	/** Title for the result step (after the change is applied). */
	resultTitle: string;
	/** Body for the result step. */
	resultBody: string;
	/** What the result step highlights — typically the affected canvas block. */
	result: string | (() => Element);
	/** Side/align for the result popover. */
	resultPosition?: { side: Side; align: Alignment };
	/** Run before the result step is highlighted (e.g. close the dialog
	 *  that the apply step opened, so the user can see the canvas change). */
	beforeResult?: () => void;
	/** Hook to run on the result step after Next is clicked (e.g. re-open the
	 *  properties dialog so the next locate step finds its field in the DOM). */
	onResultNext?: DriverHook;
}

/** Three-act pattern for "show me a thing → apply a change → see the result":
 *    1. locate step with onNextClick:apply, then advance,
 *    2. result step on the affected canvas element.
 *  The result step optionally cleans up a side effect of the apply.
 */
export function actionStep(opts: ActionStep): DriveStep[] {
	return [
		{
			element: opts.locate,
			popover: {
				title: opts.locateTitle,
				description: opts.locateBody,
				side: opts.locatePosition?.side ?? 'left',
				align: opts.locatePosition?.align ?? 'start',
				onNextClick: openOnNext(opts.apply)
			}
		},
		{
			element: opts.result,
			onHighlightStarted: opts.beforeResult,
			popover: {
				title: opts.resultTitle,
				description: opts.resultBody,
				side: opts.resultPosition?.side ?? 'right',
				align: opts.resultPosition?.align ?? 'center',
				onNextClick: opts.onResultNext
			}
		}
	];
}

/* --- Single-block steps ----------------------------------------------- */

export interface BlockStep {
	title: string;
	body: string;
	block: string | (() => Element);
	side?: Side;
	align?: Alignment;
	onHighlightStarted?: DriveStep['onHighlightStarted'];
	onHighlighted?: DriveStep['onHighlighted'];
	onDeselected?: DriveStep['onDeselected'];
	onNextClick?: DriverHook;
}

/** Highlight a single block on the canvas. */
export function blockStep(opts: BlockStep): DriveStep {
	return {
		element: opts.block,
		onHighlightStarted: opts.onHighlightStarted,
		onHighlighted: opts.onHighlighted,
		onDeselected: opts.onDeselected,
		popover: {
			title: opts.title,
			description: opts.body,
			side: opts.side ?? 'right',
			align: opts.align ?? 'center',
			onNextClick: opts.onNextClick
		}
	};
}

/* --- Generic single-element step (raw escape hatch) ------------------- */

export interface RawStep {
	element: string | (() => Element);
	title: string;
	body: string;
	side?: Side;
	align?: Alignment;
	onHighlightStarted?: DriveStep['onHighlightStarted'];
	onDeselected?: DriveStep['onDeselected'];
	onNextClick?: DriverHook;
	popoverClass?: string;
	onPopoverRender?: DriveStep['popover'] extends infer P
		? P extends { onPopoverRender?: infer F }
			? F
			: never
		: never;
}

/** Single DriveStep with sensible defaults. Use when the higher-level
 *  helpers don't fit (theme toggle, files toolbar group, breadcrumb, …). */
export function rawStep(opts: RawStep): DriveStep {
	return {
		element: opts.element,
		onHighlightStarted: opts.onHighlightStarted,
		onDeselected: opts.onDeselected,
		popover: {
			title: opts.title,
			description: opts.body,
			side: opts.side ?? 'right',
			align: opts.align ?? 'center',
			popoverClass: opts.popoverClass,
			onNextClick: opts.onNextClick,
			onPopoverRender: opts.onPopoverRender
		}
	};
}
