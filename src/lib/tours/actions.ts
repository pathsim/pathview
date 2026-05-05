/**
 * Promise-based tour actions. Every UI side-effect a tour can trigger lives
 * here as an awaitable function that resolves when the UI has reached the
 * expected post-condition (panel open, dialog mounted, simulation finished,
 * …). Step scripts stay readable: `await openPanel('blocks')` instead of
 * hand-rolled `setTimeout(..., 280)` chains.
 *
 * Magic timeouts cluster *here* (one place to tune), not in step content.
 */

import { graphStore } from '$lib/stores/graph';
import { openNodeDialog, closeNodeDialog } from '$lib/stores/nodeDialog';
import { searchDialogStore } from '$lib/stores/searchDialog';
import { triggerFitView } from '$lib/stores/viewActions';
import { importFromUrl } from '$lib/schema/fileOps';
import { base } from '$app/paths';
import { T, type PanelName, type DialogKind } from './targets';

/* --- Generic UI primitives -------------------------------------------- */

const ANIM = {
	panelToggle: 280, // svelte fly duration (200ms) + a bit of slack
	dialogOpen: 320, // dialog scale-in + measurement settle
	dialogClose: 200,
	storeMutation: 350, // graphStore mutation → SvelteFlow re-render
	keatexRender: 450, // store mutation + KaTeX re-typeset
	simulationStart: 800, // run kicks off, panels auto-mount
	postFitView: 140 // small grace period after fitView before next step
};

/** Resolve when a selector returns a node (polled), or after `timeoutMs`
 *  whichever comes first. Used by panel/dialog actions to wait for the
 *  corresponding DOM to mount before we hand control back. */
export function waitForElement(selector: string, timeoutMs = 1000): Promise<Element | null> {
	const found = document.querySelector(selector);
	if (found) return Promise.resolve(found);
	return new Promise((resolve) => {
		const start = performance.now();
		const tick = () => {
			const el = document.querySelector(selector);
			if (el) return resolve(el);
			if (performance.now() - start > timeoutMs) return resolve(null);
			requestAnimationFrame(tick);
		};
		requestAnimationFrame(tick);
	});
}

/** Resolve when a selector stops returning a node, or after `timeoutMs`. */
export function waitForElementGone(selector: string, timeoutMs = 1000): Promise<void> {
	if (!document.querySelector(selector)) return Promise.resolve();
	return new Promise((resolve) => {
		const start = performance.now();
		const tick = () => {
			if (!document.querySelector(selector)) return resolve();
			if (performance.now() - start > timeoutMs) return resolve();
			requestAnimationFrame(tick);
		};
		requestAnimationFrame(tick);
	});
}

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

/* --- Panel actions ---------------------------------------------------- */

function isPanelOpen(name: PanelName): boolean {
	const btn = document.querySelector<HTMLButtonElement>(T.panelToggle(name));
	return !!btn?.classList.contains('active');
}

/** Open a panel and resolve once its content is mounted. No-op if already open. */
export async function openPanel(name: PanelName): Promise<void> {
	if (isPanelOpen(name)) return;
	const btn = document.querySelector<HTMLButtonElement>(T.panelToggle(name));
	btn?.click();
	await waitForElement(T.panelContent(name), 800);
	await sleep(ANIM.panelToggle - 100); // wait for fly-in to settle
}

/** Close a panel and resolve once it has unmounted. No-op if already closed. */
export async function closePanel(name: PanelName): Promise<void> {
	if (!isPanelOpen(name)) return;
	const btn = document.querySelector<HTMLButtonElement>(T.panelToggle(name));
	btn?.click();
	await waitForElementGone(T.panelContent(name), 800);
}

/* --- Dialog actions --------------------------------------------------- */

/** Open the block-properties dialog for `nodeId` and resolve when ready. */
export async function openBlockProperties(nodeId: string): Promise<void> {
	openNodeDialog(nodeId);
	await waitForElement(T.dialog('properties'), 800);
	await sleep(ANIM.dialogOpen - 200); // dialog mount + fields render
}

/** Close the block-properties dialog. No-op if not open. */
export async function closeBlockProperties(): Promise<void> {
	closeNodeDialog();
	await waitForElementGone(T.dialog('properties'), 600);
}

/** Click a toolbar button (by data-tour action) and wait for any dialog
 *  it opens to mount. */
export async function clickToolbar(
	action: Parameters<typeof T.toolbarButton>[0],
	dialogToWaitFor?: DialogKind
): Promise<void> {
	const btn = document.querySelector<HTMLButtonElement>(T.toolbarButton(action));
	btn?.click();
	if (dialogToWaitFor) {
		await waitForElement(T.dialog(dialogToWaitFor), 800);
		await sleep(ANIM.dialogOpen - 200);
	} else {
		await sleep(ANIM.dialogOpen - 100);
	}
}

/** Open the toolbox-manager dialog (button lives inside the Block Library
 *  panel actions slot). The Blocks panel must already be open. */
export async function openToolboxManager(): Promise<void> {
	const btn = document.querySelector<HTMLButtonElement>(T.openToolboxManager);
	btn?.click();
	await waitForElement(T.dialog('toolbox-manager'), 800);
	await sleep(ANIM.dialogOpen - 200);
}

/** Open the search dialog (no toolbar button — it's shortcut-only). */
export async function openSearchDialog(): Promise<void> {
	searchDialogStore.open();
	await waitForElement(T.dialog('search'), 800);
	await sleep(ANIM.dialogOpen - 200);
}

/** Close every dialog that might be open: search + properties via stores,
 *  others by clicking their close button. */
export async function closeAllDialogs(): Promise<void> {
	closeNodeDialog();
	searchDialogStore.close();
	document
		.querySelectorAll<HTMLButtonElement>('[data-tour^="dialog-"] [aria-label="Close"]')
		.forEach((b) => b.click());
	await sleep(ANIM.dialogClose);
}

/* --- Block customisation actions -------------------------------------- */

/** Apply a side-effect to the graph and wait for SvelteFlow to re-render. */
export async function applyChange(
	mutation: () => void,
	{ delay = ANIM.storeMutation } = {}
): Promise<void> {
	mutation();
	await sleep(delay);
	triggerFitView();
	await sleep(ANIM.postFitView);
}

/** Set a block's name. Use `delay: ANIM.keatexRender` for LaTeX names. */
export const setBlockName = (id: string, name: string, delay = ANIM.storeMutation) =>
	applyChange(() => graphStore.updateNodeName(id, name), { delay });

/** Set a block's accent color. */
export const setBlockColor = (id: string, color: string) =>
	applyChange(() => graphStore.updateNodeColor(id, color));

/** Pin the first parameter shown in the open block-properties dialog —
 *  uses the actual DOM button order so it matches what the user just saw
 *  highlighted (param-key order from the model can differ). */
export const pinFirstParam = () =>
	applyChange(() => {
		const btn = document.querySelector<HTMLButtonElement>(T.blockField('pin-btn'));
		if (btn && !btn.classList.contains('pinned')) btn.click();
	});

/** Drill into the first Subsystem block found in the current graph level.
 *  Waits for the breadcrumb element to mount so the Breadcrumb step that
 *  follows finds its target. */
export const drillIntoFirstSubsystem = async () => {
	await applyChange(() => {
		const sub = graphStore.getAllNodes().find((n) => n.type === 'Subsystem');
		if (sub) graphStore.drillDown(sub.id);
	});
	await waitForElement('[data-tour="breadcrumb"]', 800);
};

/** Navigate back to the root of the subsystem hierarchy. */
export const navigateToRoot = () =>
	applyChange(() => {
		if (!graphStore.isAtRoot()) graphStore.navigateTo(0);
	});

/* --- Simulation actions ----------------------------------------------- */

/** Trigger Run via the toolbar button. Resolves after the run starts and
 *  Results/Console panels have had time to auto-mount. */
export async function runSimulation(): Promise<void> {
	const btn = document.querySelector<HTMLButtonElement>(T.toolbarButton('run'));
	btn?.click();
	await sleep(ANIM.simulationStart);
	triggerFitView();
	await sleep(ANIM.postFitView);
}

/* --- Demo loading ----------------------------------------------------- */

/** Import an example model by filename (relative to /examples) and wait
 *  for the assembly animation grace period before the tour proceeds. */
export async function loadDemo(filename: string): Promise<boolean> {
	const url = `${base}/examples/${filename}`;
	const result = await importFromUrl(url);
	if (!result.success) return false;
	await sleep(250);
	triggerFitView();
	await sleep(350);
	return true;
}

export { ANIM };
