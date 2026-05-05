/**
 * TourSession — atomic lifetime + cleanup for one tour run.
 *
 * Owns:
 *   - the active driver.js instance,
 *   - the set of panels the tour opened (so we can close them on cleanup),
 *   - snapshots of global toggles (icon mode, port labels, …) so the tour
 *     leaves the editor exactly as it found it,
 *   - any cleanup callbacks registered during the run,
 *   - the body-mode class for tour-specific CSS.
 *
 * Replaces the previous module-level globals (activeTour, tourOpenedPanels,
 * savedIconMode, savedPortLabels, rotationDemoTimer). Hot-reload-safe:
 * an interrupted session can be `.end()`ed and a fresh one started.
 */

import type { Driver } from 'driver.js';
import { closePanel } from './actions';
import { closeAllDialogs } from './actions';
import { removeAllAnchors } from './anchors';
import type { PanelName } from './targets';
import { inputMode } from './inputMode';

interface Snapshottable<T> {
	get(): T;
	set(value: T): void;
}

export type TourBodyMode = 'floating' | null;

let currentSession: TourSession | null = null;

export function getCurrentSession(): TourSession | null {
	return currentSession;
}

export class TourSession {
	private driver: Driver | null = null;
	private cleanups: Array<() => void> = [];
	private openedPanels = new Set<PanelName>();
	private snapshots: Array<{ store: Snapshottable<unknown>; value: unknown }> = [];
	private bodyMode: TourBodyMode = null;
	private ended = false;

	static start(driver: Driver): TourSession {
		// Defensive: if a previous session leaked (hot-reload, crash), end it.
		currentSession?.end();
		const session = new TourSession();
		session.driver = driver;
		currentSession = session;
		inputMode.set('tour');
		return session;
	}

	getDriver(): Driver | null {
		return this.driver;
	}

	/** Register a callback to run on `.end()`. Use for one-off resources
	 *  (timers, event listeners, DOM nodes the tour adds). */
	registerCleanup(fn: () => void): void {
		this.cleanups.push(fn);
	}

	/** Track that this session opened a panel; cleanup will close it. */
	trackOpenedPanel(name: PanelName): void {
		this.openedPanels.add(name);
	}

	untrackPanel(name: PanelName): void {
		this.openedPanels.delete(name);
	}

	/** Snapshot one or more stores' current values. They are restored on
	 *  `.end()` so a tour that flips a toggle leaves the user's preference
	 *  intact afterwards. */
	snapshot<T>(...stores: Snapshottable<T>[]): void {
		for (const store of stores) {
			this.snapshots.push({
				store: store as Snapshottable<unknown>,
				value: store.get()
			});
		}
	}

	/** Switch body-mode class (CSS-driven tour behaviour like overlay-hide). */
	setBodyMode(mode: TourBodyMode): void {
		document.body.classList.toggle('tour-floating-mode', mode === 'floating');
		this.bodyMode = mode;
	}

	/** Tear down everything this session created/changed. Idempotent. */
	async end(): Promise<void> {
		if (this.ended) return;
		this.ended = true;

		// 1. Per-step / ad-hoc resources first (timers, observers, …)
		for (const fn of this.cleanups.splice(0)) {
			try {
				fn();
			} catch {
				// Tour cleanup must never throw — keep going.
			}
		}

		// 2. UI artefacts: dialogs, panels, anchors, body-mode.
		await closeAllDialogs();
		for (const name of [...this.openedPanels]) {
			await closePanel(name);
		}
		this.openedPanels.clear();
		removeAllAnchors();
		document.body.classList.remove('tour-floating-mode');
		this.bodyMode = null;

		// 3. Restore saved store values.
		for (const { store, value } of this.snapshots) store.set(value);
		this.snapshots = [];

		// 4. Hand keyboard back to pathview.
		inputMode.set('normal');

		// 5. Driver itself last — it triggers driver.js onDestroyed.
		this.driver?.destroy();
		this.driver = null;

		if (currentSession === this) currentSession = null;
	}
}
