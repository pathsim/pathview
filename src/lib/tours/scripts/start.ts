/**
 * Start tour — editor walkthrough.
 *
 * Covers navigation, panels, view controls, files and help. Pairs with the
 * `pid-subsystem` demo so the Subsystems step has something to drill into.
 */

import type { TourScript } from '../types';
import type { DriverHook } from 'driver.js';
import {
	intro,
	floatingStep,
	panelStep,
	dialogStep,
	rawStep
} from '../builder';
import { closePanel, drillIntoFirstSubsystem, navigateToRoot } from '../actions';
import { getCurrentSession } from '../session';
import { addNextTourButton } from '../popoverButtons';

export const startTour: TourScript = {
	id: 'start',
	displayName: 'Start',
	demoFile: 'pid-subsystem.json',
	demoName: 'PID Loop',
	next: 'modeling',
	build: () => [
		intro({
			title: 'Welcome',
			body: `
				<p>A walkthrough of the editor: navigation, panels, view controls, files and help.</p>
				<p>Building and simulating are covered in the <strong>Modeling</strong> and <strong>Simulation</strong> tours.</p>
				<p>Dismiss anytime with <kbd>×</kbd> or <kbd>Esc</kbd>.</p>
			`
		}),

		rawStep({
			element: '[data-tour="welcome-banner-logo"]',
			title: 'Home',
			body: `<p>Click the home button anytime to return to the landing page to restart any tour, browse examples, open recent files or jump to docs and GitHub.</p>`,
			side: 'bottom',
			align: 'start'
		}),

		...panelStep({
			name: 'blocks',
			toggleBody: `<p>Opens the Block Library panel on the left.</p><p>Shortcut: <kbd>B</kbd></p>`,
			contentBody: `
				<p>Every available block grouped by category:</p>
				<ul>
					<li>Search by name across all categories</li>
					<li>Drag onto canvas, or click to add at center</li>
					<li>Hover any block for a detail panel with preview and full documentation</li>
					<li>Categories collapse for cleaner navigation</li>
				</ul>
			`,
			// The Toolbox-Manager opener button lives inside this panel, so
			// keep it open across the next step. We close it manually when
			// the toolbox dialog closes (below).
			autoClose: false
		}),

		...dialogStep({
			dialog: 'toolbox-manager',
			opener: { kind: 'toolboxButton' },
			openerTitle: 'Open Toolbox Manager',
			openerBody: `
				<p>This icon at the top of the Block Library opens the Toolbox Manager.</p>
				<p>Click <strong>Next</strong> to open it.</p>
			`,
			openerPosition: { side: 'right', align: 'start' },
			contentTitle: 'Toolbox Manager',
			contentBody: `
				<p>Install runtime toolboxes (flight, vehicle, batt, chem, …) on demand:</p>
				<ul>
					<li>New blocks appear in the library immediately after install</li>
					<li>Toolboxes are loaded lazily so the base bundle stays small</li>
					<li>Drop a toolbox URL or pick from the registry</li>
				</ul>
			`,
			contentPosition: { side: 'right', align: 'center' }
		}).map((step, i, all) =>
			i === all.length - 1
				? {
						...step,
						// After the toolbox dialog closes, also close the Blocks
						// panel that hosted its opener.
						onDeselected: () => {
							void closePanel('blocks');
							getCurrentSession()?.untrackPanel('blocks');
						}
					}
				: step
		),

		floatingStep({
			title: 'Canvas',
			corner: 'bottom-right',
			body: `
				<p>The interactive working area:</p>
				<ul>
					<li>Drag blocks around, they snap to a grid</li>
					<li>Drag from an output port to an input port to connect</li>
					<li>Double-click a block for properties</li>
					<li>Right-click for the context menu</li>
					<li>Drag empty canvas to pan, scroll to zoom</li>
				</ul>
				<p>Modeling tour covers selection, transform and editing in detail.</p>
			`
		}),

		...panelStep({
			name: 'subsystems',
			toggleBody: `<p>Opens the Subsystem tree panel. Visible once a Subsystem block exists in the graph.</p><p>Shortcut: <kbd>R</kbd></p>`,
			contentBody: `
				<p>Group blocks into Subsystems for hierarchy:</p>
				<ul>
					<li>Double-click a Subsystem on the canvas to drill in</li>
					<li>Breadcrumb at the top tracks your current path</li>
					<li>Tree gives an outline of all nested levels</li>
				</ul>
				<table>
					<tr><td>Open tree</td><td><kbd>R</kbd></td></tr>
					<tr><td>Go to root</td><td><kbd>H</kbd></td></tr>
				</table>
				<p>Click <strong>Next</strong> to drill into the subsystem.</p>
			`
		}).map((step, i, all) =>
			// last (content) step: drill into subsystem on Next instead of just advancing
			i === all.length - 1
				? {
						...step,
						popover: {
							...step.popover,
							onNextClick: ((_el, _s, opts) => {
								void drillIntoFirstSubsystem().then(() => opts.driver.moveNext());
							}) satisfies DriverHook
						}
					}
				: step
		),

		rawStep({
			element: '[data-tour="breadcrumb"]',
			title: 'Breadcrumb',
			body: `
				<p>You're now inside the subsystem. The canvas shows its internal blocks.</p>
				<p>The breadcrumb at the top tracks your current path. Click any segment to jump back to that level, or press <kbd>H</kbd> to go straight to the root.</p>
				<p>Click <strong>Next</strong> to navigate back to the root.</p>
			`,
			side: 'bottom',
			align: 'start',
			onNextClick: (_el, _s, opts) => {
				void navigateToRoot().then(() => opts.driver.moveNext());
			}
		}),

		...dialogStep({
			dialog: 'search',
			opener: { kind: 'searchShortcut' },
			openerTitle: 'Find',
			openerBody: `<p><kbd>Ctrl/Cmd+F</kbd> opens the search dialog. Click <strong>Next</strong> to open it now.</p>`,
			contentTitle: 'Search Dialog',
			contentBody: `<p>Type to filter blocks and events by name across the entire graph, including nested subsystems. Selecting a result jumps to the matching block.</p>`,
			contentPosition: { side: 'bottom', align: 'center' }
		}),

		rawStep({
			element: '[data-tour="toolbar-theme"]',
			title: 'Theme',
			body: `<p>Toggle between light and dark theme. Your choice is remembered across sessions.</p><p>Shortcut: <kbd>T</kbd></p>`,
			side: 'bottom',
			align: 'end'
		}),

		floatingStep({
			title: 'View Controls',
			corner: 'bottom-right',
			body: `
				<table>
					<tr><td>Fit view</td><td><kbd>F</kbd></td></tr>
					<tr><td>Zoom in</td><td><kbd>+</kbd></td></tr>
					<tr><td>Zoom out</td><td><kbd>-</kbd></td></tr>
					<tr><td>Pan</td><td>drag empty canvas</td></tr>
					<tr><td>Zoom under cursor</td><td>scroll</td></tr>
				</table>
			`
		}),

		rawStep({
			element: '[data-tour="toolbar-files"]',
			title: 'Files & Sharing',
			body: `
				<p>Save and load <code>.pvm</code> files. Buttons left to right: New, Open, Save, Save As, View Python Code.</p>
				<table>
					<tr><td>Open</td><td><kbd>Ctrl/Cmd+O</kbd></td></tr>
					<tr><td>Save</td><td><kbd>Ctrl/Cmd+S</kbd></td></tr>
					<tr><td>Save as</td><td><kbd>Ctrl/Cmd+Shift+S</kbd></td></tr>
					<tr><td>View Python</td><td><kbd>Ctrl/Cmd+E</kbd></td></tr>
				</table>
			`,
			side: 'bottom',
			align: 'center'
		}),

		...dialogStep({
			dialog: 'shortcuts',
			opener: { kind: 'toolbar', action: 'shortcuts' },
			openerTitle: 'Open Keyboard Shortcuts',
			openerBody: `<p>The full reference is grouped by category. Click <strong>Next</strong> to open it.</p>`,
			openerPosition: { side: 'bottom', align: 'end' },
			contentTitle: 'Keyboard Shortcuts',
			contentBody: `
				<p>Reference for every shortcut: file, edit, transform, view, panels and run.</p>
				<p>Press <kbd>?</kbd> anywhere to open it.</p>
				<p>That's the editor tour. Modeling shows how to build and customise blocks.</p>
			`,
			onContentPopoverRender: addNextTourButton('modeling', 'Continue with Modeling →')
		})
	]
};
