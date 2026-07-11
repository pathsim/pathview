/**
 * Simulation tour — running and inspecting a model.
 *
 * Pairs with the `bouncing-ball` demo: an event-driven oscillator with a
 * recording block, so plots come alive when we run.
 */

import type { TourScript } from '../types';
import {
	intro,
	floatingStep,
	panelStep,
	dialogStep,
	rawStep
} from '../builder';
import {
	openPanel,
	runSimulation,
	applyChange
} from '../actions';
import { getCurrentSession } from '../session';
import { T } from '../targets';

export const simulationTour: TourScript = {
	id: 'simulation',
	displayName: 'Simulation',
	demoFile: 'bouncing-ball.json',
	demoName: 'Bouncing Ball',
	build: () => [
		intro({
			title: 'Simulation Tour',
			body: `<p>Set up, run and inspect a simulation. The demo model has a recording block so plots come alive when we run.</p>`
		}),

		...panelStep({
			name: 'simulation',
			toggleBody: `<p>Opens the Simulation settings panel on the right.</p><p>Shortcut: <kbd>S</kbd></p>`,
			contentBody: `
				<p>Configure the integrator:</p>
				<ul>
					<li><strong>Duration</strong> and <strong>dt</strong> (initial / fixed step)</li>
					<li><strong>Solver matrix</strong>: pick by Adaptive/Fixed × Explicit/Implicit
						<ul>
							<li>Adaptive: <code>RKBS32</code>, <code>RKCK54</code> (explicit), <code>GEAR52A</code>, <code>ESDIRK43</code> (implicit)</li>
							<li>Fixed: <code>SSPRK22</code>, <code>RK4</code> (explicit), <code>BDF2</code> (implicit)</li>
						</ul>
					</li>
					<li>Tolerances: <code>rtol</code>, <code>atol</code>, <code>ftol</code></li>
					<li>Step limits: <code>dt_min</code>, <code>dt_max</code></li>
					<li><strong>Ghost traces</strong> (0–8): keeps the last N runs faded behind the current trace, useful for tuning parameters and comparing runs side-by-side</li>
				</ul>
				<p>Run / Continue / Stop live on the toolbar at the top.</p>
			`,
			togglePosition: { side: 'left', align: 'center' },
			contentPosition: { side: 'left', align: 'center' }
		}),

		...panelStep({
			name: 'editor',
			toggleBody: `<p>Opens the Python code editor.</p><p>Shortcut: <kbd>E</kbd></p>`,
			contentBody: `
				<p>Shared Python code for the whole graph. Anything defined here is available to blocks that take a callable:</p>
				<ul>
					<li><code>Function</code>: algebraic transforms</li>
					<li><code>Source</code>: time-dependent inputs</li>
					<li><code>ODE</code>, <code>DynamicalSystem</code>: right-hand sides</li>
					<li><code>Switch</code>, <code>Wrapper</code>, conditions</li>
				</ul>
				<p>Use it for shared constants, helper functions, lookup tables.</p>
			`
		}),

		...panelStep({
			name: 'events',
			toggleBody: `<p>Opens the Events panel.</p><p>Shortcut: <kbd>N</kbd></p>`,
			contentBody: `
				<p>Discrete events that interrupt or modify the integration:</p>
				<ul>
					<li><strong>Schedule</strong>: fire at fixed times</li>
					<li><strong>ZeroCrossing</strong>: trigger when a signal crosses a threshold</li>
					<li><strong>Condition</strong>: trigger when a Python expression turns true</li>
					<li>Hover any event for a detail panel with preview and full documentation</li>
				</ul>
				<p>Each event can modify block parameters or call user code. The bouncing-ball demo uses an event for the floor collision.</p>
			`
		}),

		rawStep({
			element: T.toolbarButton('run'),
			title: 'Run',
			body: `
				<p>Now we've seen everything that goes <em>into</em> a simulation. Click <strong>Next</strong> to actually run it and watch the live results fill in.</p>
				<p>Shortcut: <kbd>Ctrl/Cmd+Enter</kbd></p>
			`,
			side: 'bottom',
			align: 'center',
			onNextClick: (_el, _s, opts) => {
				void runSimulation().then(() => opts.driver.moveNext());
			}
		}),

		rawStep({
			element: T.panelContent('results'),
			onHighlightStarted: () => {
				void openPanel('results').then(() =>
					getCurrentSession()?.trackOpenedPanel('results')
				);
			},
			title: 'Results / Plots',
			body: `
				<p>The Results panel opens automatically on the first run. Live plots from <code>Scope</code> and <code>Spectrum</code> blocks update as the simulation progresses:</p>
				<ul>
					<li>Tabs per recording block, or single combined view</li>
					<li>Pan, zoom, hover for values</li>
					<li>Right-click for plot options and export to CSV</li>
				</ul>
				<p>Shortcut to toggle: <kbd>V</kbd></p>
			`,
			side: 'top',
			align: 'center'
		}),

		rawStep({
			element: T.panelContent('console'),
			onHighlightStarted: () => {
				void openPanel('console').then(() =>
					getCurrentSession()?.trackOpenedPanel('console')
				);
			},
			title: 'Console',
			body: `
				<p>The Console also opens automatically on the first run. It collects stdout, stderr and PathSim diagnostics:</p>
				<ul>
					<li>Solver warnings and progress messages</li>
					<li><code>print()</code> output from your blocks</li>
					<li>Errors with clickable links to the offending block</li>
				</ul>
				<p>Shortcut to toggle: <kbd>C</kbd></p>
			`,
			side: 'top',
			align: 'center'
		}),

		rawStep({
			element: T.toolbarButton('pin-previews'),
			title: 'Pinned Plot Previews',
			body: `
				<p>Pin miniature plot previews directly next to recording blocks on the canvas. The trace stays visible without opening the Results panel.</p>
				<p>Click <strong>Next</strong> to enable pinned previews.</p>
				<p>Shortcut: <kbd>P</kbd></p>
			`,
			side: 'bottom',
			align: 'end',
			onNextClick: (_el, _s, opts) => {
				void applyChange(() => {
					document
						.querySelector<HTMLButtonElement>(T.toolbarButton('pin-previews'))
						?.click();
				}).then(() => opts.driver.moveNext());
			}
		}),

		floatingStep({
			title: 'Continue & Stop',
			corner: 'bottom-right',
			body: `
				<table>
					<tr><td>Continue from current state</td><td><kbd>Shift+Enter</kbd></td></tr>
					<tr><td>Stop</td><td><kbd>Esc</kbd></td></tr>
				</table>
				<p>Continue is useful for stepping through long runs interactively without resetting. It adds wall-time without re-initialising state.</p>
			`
		}),

		...dialogStep({
			dialog: 'python-export',
			opener: { kind: 'toolbar', action: 'export-python' },
			openerTitle: 'Open Python Export',
			openerBody: `<p>Generate a standalone Python script of the current simulation. Click <strong>Next</strong> to open it.</p>`,
			openerPosition: { side: 'bottom', align: 'end' },
			contentTitle: 'Python Export',
			contentBody: `
				<p>The exported script is self-contained. Copy, save or run it anywhere. Useful for:</p>
				<ul>
					<li>Production deployment</li>
					<li>Version control of the simulation</li>
					<li>Running headless outside the browser</li>
				</ul>
				<p>Shortcut: <kbd>Ctrl/Cmd+E</kbd></p>
				<p>That's it, you've seen all three tours. Happy simulating!</p>
			`,
			contentPosition: { side: 'left', align: 'center' }
		})
	]
};
