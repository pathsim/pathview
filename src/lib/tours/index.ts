/**
 * Public entry point for guided tours.
 *
 *   await startGuidedTour('start' | 'modeling' | 'simulation');
 *
 * The flow:
 *   1. Ask the user whether to load the paired demo model.
 *   2. Optionally load it (with a fitView grace period).
 *   3. Build the step list and wrap each step's `onHighlightStarted`
 *      so the body-mode CSS class is set/cleared as we move.
 *   4. Start a TourSession and hand it to driver.js.
 *   5. Run the script's `setup` hook (e.g. snapshot global toggles).
 *   6. Drive.
 */

import { driver, type DriveStep, type Config } from 'driver.js';
import 'driver.js/dist/driver.css';
import './tour.css';

import { confirmationStore } from '$lib/stores/confirmation';
import { TourSession } from './session';
import { loadDemo } from './actions';
import type { TourId, TourScript } from './types';
import { startTour } from './scripts/start';
import { modelingTour } from './scripts/modeling';
import { simulationTour } from './scripts/simulation';

const TOURS: Record<TourId, TourScript> = {
	start: startTour,
	modeling: modelingTour,
	simulation: simulationTour
};

/** Wrap each step's `onHighlightStarted` so the body-mode class is set/cleared
 *  before any per-step hook runs. driver.js's global onHighlightStarted is
 *  overridden by per-step hooks, so we have to inject step-by-step. */
function wrapStepsWithBodyMode(steps: DriveStep[]): DriveStep[] {
	return steps.map((step) => {
		const popoverClass = step.popover?.popoverClass ?? '';
		const isFloating = popoverClass.includes('tour-floating');
		const original = step.onHighlightStarted;
		return {
			...step,
			onHighlightStarted: (el, s, opts) => {
				document.body.classList.toggle('tour-floating-mode', isFloating);
				original?.(el, s, opts);
			}
		};
	});
}

function baseConfig(steps: DriveStep[]): Config {
	return {
		showProgress: true,
		allowClose: true,
		stagePadding: 6,
		stageRadius: 8,
		smoothScroll: true,
		nextBtnText: 'Next →',
		prevBtnText: '← Back',
		doneBtnText: 'Got it',
		steps: wrapStepsWithBodyMode(steps)
	};
}

export async function startGuidedTour(id: TourId): Promise<void> {
	const script = TOURS[id];

	const wantsLoad = await confirmationStore.show({
		title: 'Load demo model?',
		message: `This tour works best with the "${script.demoName}" example model. Loading replaces your current graph — save first if needed.`,
		confirmText: 'Load demo',
		cancelText: 'Continue without'
	});

	if (wantsLoad) {
		await loadDemo(script.demoFile);
	}

	const tourDriver = driver(baseConfig(script.build()));
	const session = TourSession.start(tourDriver);
	// driver.js skips its own teardown when onDestroyStarted is set —
	// route everything through the session for atomic cleanup.
	tourDriver.setConfig({
		...tourDriver.getConfig(),
		onDestroyStarted: () => void session.end()
	});
	script.setup?.(session);
	tourDriver.drive();
}

export type { TourId } from './types';
