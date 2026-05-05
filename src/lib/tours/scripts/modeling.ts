/**
 * Modeling tour — building & customising blocks.
 *
 * Pairs with the `squarewave-lpf` demo: a Signal source feeds a Butterworth
 * lowpass filter. The tour customises the filter (name, LaTeX name, color),
 * pins a parameter on the source, and toggles the global Icon mode +
 * Port Labels.
 */

import type { TourScript } from '../types';
import {
	intro,
	floatingStep,
	dialogStep,
	actionStep,
	blockStep,
	rawStep
} from '../builder';
import {
	openBlockProperties,
	closeBlockProperties,
	setBlockName,
	setBlockColor,
	pinFirstParam,
	applyChange,
	ANIM
} from '../actions';
import { findBlockElement } from '../blocks';
import { graphStore } from '$lib/stores/graph';
import { iconModeStore } from '$lib/stores/iconMode';
import { portLabelsStore } from '$lib/stores/portLabels';
import { closeNodeDialog } from '$lib/stores/nodeDialog';
import { triggerFitView } from '$lib/stores/viewActions';
import { startRotationDemo } from '../liveDemo';
import { addNextTourButton } from '../popoverButtons';
import { T } from '../targets';

const SIGNAL = { name: 'Signal' };
const LPF = { name: 'LPF' };

const DEMO_COLOR = '#e25c5c';
const DEMO_LATEX_NAME = 'LP $\\frac{1}{1 + (s/\\omega_c)^N}$';

/** Close the properties dialog and re-fit the canvas so a result step
 *  shows the change without the dialog covering it. */
function showCanvasChange() {
	closeNodeDialog();
	setTimeout(() => triggerFitView(), 200);
}

export const modelingTour: TourScript = {
	id: 'modeling',
	displayName: 'Modeling',
	demoFile: 'squarewave-lpf.json',
	demoName: 'Squarewave LPF',
	next: 'simulation',
	setup: (session) => {
		// Snapshot global toggles so the tour leaves them as we found them.
		session.snapshot(iconModeStore, portLabelsStore);
	},
	build: () => [
		intro({
			title: 'Modeling Tour',
			body: `
				<p>How to build and customise blocks: selection, transform, properties, pinning, naming, colors, icons, port labels and annotations.</p>
				<p>The demo model is loaded so each step refers to a concrete block.</p>
			`
		}),

		blockStep({
			block: () => findBlockElement(SIGNAL),
			onHighlightStarted: () => {
				const id = graphStore.getAllNodes().find((n) => n.name === SIGNAL.name)?.id;
				if (id) graphStore.selectNode(id);
			},
			title: 'Selection',
			body: `
				<p>The first block is now selected (notice the highlight on the canvas).</p>
				<ul>
					<li>Click a block to select it</li>
					<li><kbd>Shift</kbd>+click adds to selection</li>
					<li><kbd>Shift</kbd>+drag draws a marquee box</li>
				</ul>
				<table>
					<tr><td>Select all</td><td><kbd>Ctrl/Cmd+A</kbd></td></tr>
					<tr><td>Deselect</td><td><kbd>Esc</kbd></td></tr>
				</table>
			`
		}),

		blockStep({
			block: () => findBlockElement(SIGNAL),
			onHighlighted: () => startRotationDemo(SIGNAL),
			title: 'Transform',
			body: `
				<p>Once a block (or several) is selected, transform with these shortcuts. Watch the source block rotate through a full revolution:</p>
				<table>
					<tr><td>Rotate 90°</td><td><kbd>R</kbd></td></tr>
					<tr><td>Flip horizontal</td><td><kbd>X</kbd></td></tr>
					<tr><td>Flip vertical</td><td><kbd>Y</kbd></td></tr>
					<tr><td>Nudge</td><td>arrow keys</td></tr>
					<tr><td>Nudge × 10</td><td><kbd>Shift</kbd>+arrow</td></tr>
				</table>
			`
		}),

		floatingStep({
			title: 'Edit Operations',
			body: `
				<table>
					<tr><td>Undo</td><td><kbd>Ctrl/Cmd+Z</kbd></td></tr>
					<tr><td>Redo</td><td><kbd>Ctrl/Cmd+Y</kbd></td></tr>
					<tr><td>Cut</td><td><kbd>Ctrl/Cmd+X</kbd></td></tr>
					<tr><td>Copy</td><td><kbd>Ctrl/Cmd+C</kbd></td></tr>
					<tr><td>Paste</td><td><kbd>Ctrl/Cmd+V</kbd></td></tr>
					<tr><td>Duplicate</td><td><kbd>Ctrl/Cmd+D</kbd></td></tr>
					<tr><td>Delete</td><td><kbd>Del</kbd></td></tr>
				</table>
				<p>Paste lands at the cursor; duplicate offsets slightly from the original.</p>
			`
		}),

		rawStep({
			element: '.svelte-flow__node',
			title: 'Right-click Context Menu',
			body: `
				<p>Right-click on any block, edge or canvas area for context-sensitive actions:</p>
				<ul>
					<li>Properties, View Code, Export</li>
					<li>Duplicate, Copy, Delete</li>
					<li>Toggle Icon mode and Port Labels per-block</li>
					<li>Edge: Reset Route to clear manual waypoints</li>
				</ul>
			`,
			side: 'right',
			align: 'start'
		}),

		// Open the LPF block's properties — explicit so the next steps
		// (Names, Color, …) don't silently switch blocks.
		blockStep({
			block: () => findBlockElement(LPF),
			title: 'Open Block Properties',
			body: `<p>Double-click any block to open its Properties dialog. The next steps customise the <strong>Butterworth filter</strong> block on the right — Click <strong>Next</strong> to open its properties.</p>`,
			side: 'right',
			align: 'start',
			onNextClick: (_el, _s, opts) => {
				const id = graphStore.getAllNodes().find((n) => n.name === LPF.name)?.id;
				if (id) {
					void openBlockProperties(id).then(() => opts.driver.moveNext());
				} else {
					opts.driver.moveNext();
				}
			}
		}),

		rawStep({
			element: T.dialog('properties'),
			title: 'Block Properties',
			body: `
				<p>Every parameter is editable here:</p>
				<ul>
					<li>Numeric, string, callable, list parameters</li>
					<li>Display name (rename for clarity)</li>
					<li>Color picker for the accent</li>
					<li>Pin parameters to surface them on the canvas</li>
				</ul>
			`,
			side: 'left',
			align: 'center'
			// Dialog stays open — next step highlights the Name field inside it.
		}),

		...actionStep({
			locate: T.blockField('name-input'),
			locateTitle: 'Block Names',
			locateBody: `
				<p>The Name field for the filter. The display name is independent of the block's type — you can describe what it does in your model.</p>
				<p>Click <strong>Next</strong> to rename it to <strong>Lowpass Filter</strong>.</p>
			`,
			locatePosition: { side: 'left', align: 'start' },
			apply: async () => {
				const id = graphStore.getAllNodes().find((n) => n.name === LPF.name)?.id;
				if (id) await setBlockName(id, 'Lowpass Filter');
			},
			result: () => findBlockElement({ name: 'Lowpass Filter' }),
			resultTitle: 'Renamed',
			resultBody: `<p>The filter on the canvas now shows <strong>Lowpass Filter</strong>. Edit names directly in the field in the dialog, or double-click a block to open Properties.</p>`,
			beforeResult: showCanvasChange,
			onResultNext: (_el, _s, opts) => {
				const id = graphStore
					.getAllNodes()
					.find((n) => n.name === 'Lowpass Filter')?.id;
				if (id) {
					void openBlockProperties(id).then(() => opts.driver.moveNext());
				} else {
					opts.driver.moveNext();
				}
			}
		}),

		...actionStep({
			locate: T.blockField('name-input'),
			locateTitle: 'LaTeX in Names',
			locateBody: `
				<p>Block names support inline math with <code>$…$</code> for KaTeX rendering. The field keeps the source, the canvas shows the rendered math.</p>
				<p>Click <strong>Next</strong> to set the name to a LaTeX expression.</p>
			`,
			locatePosition: { side: 'left', align: 'start' },
			apply: async () => {
				const id = graphStore
					.getAllNodes()
					.find((n) => n.name === 'Lowpass Filter')?.id;
				if (id) await setBlockName(id, DEMO_LATEX_NAME, ANIM.keatexRender);
			},
			result: () => findBlockElement({ name: DEMO_LATEX_NAME }),
			resultTitle: 'Math Rendered',
			resultBody: `<p>The same block on the canvas now shows the rendered transfer function. The block resizes to fit the math glyph.</p>`,
			beforeResult: showCanvasChange,
			onResultNext: (_el, _s, opts) => {
				const id = graphStore
					.getAllNodes()
					.find((n) => n.name === DEMO_LATEX_NAME)?.id;
				if (id) {
					void openBlockProperties(id).then(() => opts.driver.moveNext());
				} else {
					opts.driver.moveNext();
				}
			}
		}),

		...actionStep({
			locate: T.blockField('color-picker'),
			locateTitle: 'Block Colors',
			locateBody: `
				<p>Each block has its own accent color you can pick here. Useful to group blocks belonging to the same logical signal path or subsystem.</p>
				<p>Click <strong>Next</strong> to apply a new color.</p>
			`,
			locatePosition: { side: 'right', align: 'center' },
			apply: async () => {
				const id = graphStore
					.getAllNodes()
					.find((n) => n.name === DEMO_LATEX_NAME)?.id;
				if (id) await setBlockColor(id, DEMO_COLOR);
			},
			result: () => findBlockElement({ name: DEMO_LATEX_NAME }),
			resultTitle: 'Color Applied',
			resultBody: `<p>The block now has a custom accent color on the canvas. The color also applies to the block's pinned parameters, ports and selection highlight.</p>`,
			beforeResult: showCanvasChange
		}),

		blockStep({
			block: () => findBlockElement(SIGNAL),
			title: 'Switching Blocks',
			body: `<p>Now over to the <strong>Signal</strong> source block on the left to demo parameter pinning. Click <strong>Next</strong> to open its properties.</p>`,
			onNextClick: (_el, _s, opts) => {
				const id = graphStore
					.getAllNodes()
					.find((n) => n.name === SIGNAL.name)?.id;
				if (id) {
					void openBlockProperties(id).then(() => opts.driver.moveNext());
				} else {
					opts.driver.moveNext();
				}
			}
		}),

		...actionStep({
			locate: T.blockField('pin-btn'),
			locateTitle: 'Parameter Pinning',
			locateBody: `
				<p>Each parameter has a pin icon. Pinning surfaces the parameter directly on the block, editable inline on the canvas.</p>
				<p>Click <strong>Next</strong> to pin the first parameter of the source.</p>
			`,
			locatePosition: { side: 'left', align: 'start' },
			apply: pinFirstParam,
			result: () => findBlockElement(SIGNAL),
			resultTitle: 'Pinned Parameter',
			resultBody: `<p>The first parameter is now visible on the source block, editable inline. Useful for tweaking gain, frequency, time constant or initial value without re-opening the dialog every time.</p>`,
			beforeResult: () => closeBlockProperties()
		}),

		floatingStep({
			title: 'Block Icons',
			corner: 'bottom-right',
			body: `
				<p>A global setting that swaps every block's text label for a Simulink-style icon: a programmatic plot, math glyph or schematic symbol.</p>
				<p>Click <strong>Next</strong> to enable icon mode.</p>
				<ul>
					<li>Global toggle: <kbd>I</kbd></li>
					<li>Per-block override: right-click → "Show as Icon" / "Show as Text"</li>
				</ul>
			`
		}),
		// Inject the apply on the previous step's Next via a tail-modifier.
		// (The floatingStep helper doesn't take onNextClick; mutate here.)

		floatingStep({
			title: 'Icons Active',
			corner: 'bottom-right',
			body: `<p>Every block now shows its programmatic icon. Icon mode resets to your previous preference when the tour ends.</p>`
		}),

		floatingStep({
			title: 'Port Labels',
			corner: 'bottom-right',
			body: `
				<p>Another global toggle that shows input and output port names on every block. Useful for blocks with many ports (StateSpace, Subsystem, Function).</p>
				<p>Click <strong>Next</strong> to enable port labels.</p>
				<ul>
					<li>Global toggle: <kbd>L</kbd></li>
					<li>Per-block override: right-click context menu</li>
				</ul>
			`
		}),

		floatingStep({
			title: 'Port Labels Active',
			corner: 'bottom-right',
			body: `<p>Every block now shows its port names. Both icon mode and port labels also have per-block overrides via the right-click menu.</p>`
		}),

		rawStep({
			element: () =>
				document.querySelector('.annotation')?.closest('.svelte-flow__node') ??
				document.querySelector(T.canvasPane) ??
				document.body,
			title: 'Canvas Annotations',
			body: `
				<p>The note already on the canvas is a Canvas Annotation that comes with this demo. Right-click on empty canvas → <strong>Add Annotation</strong> to drop your own.</p>
				<p>Annotations support Markdown and LaTeX, with adjustable font size via the annotation's context menu. Use them for inline documentation, equations or reminders.</p>
				<p>That's the modeling tour. The Simulation tour shows how to run and inspect the model.</p>
			`,
			side: 'right',
			align: 'center',
			onPopoverRender: addNextTourButton('simulation', 'Continue with Simulation →')
		})
	].map((step, i, all) => {
		// Wire the icon-mode + port-labels toggles onto the appropriate Next clicks.
		// Block Icons → enable icon mode on Next; Port Labels → enable port labels on Next.
		const title =
			typeof step === 'object' && step !== null && 'popover' in step
				? step.popover?.title
				: undefined;
		if (title === 'Block Icons') {
			return {
				...step,
				popover: {
					...step.popover,
					onNextClick: (_el, _s, opts) => {
						void applyChange(() => iconModeStore.set(true)).then(() =>
							opts.driver.moveNext()
						);
					}
				}
			};
		}
		if (title === 'Port Labels') {
			return {
				...step,
				popover: {
					...step.popover,
					onNextClick: (_el, _s, opts) => {
						void applyChange(() => portLabelsStore.set(true)).then(() =>
							opts.driver.moveNext()
						);
					}
				}
			};
		}
		return step;
	})
};
