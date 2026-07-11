/**
 * Helpers that inject custom buttons into the driver.js popover footer.
 *
 * Currently just `addNextTourButton`, which adds a "Continue with X →" button
 * between Back and Done so the user can chain into the next tour without
 * going back to the landing page.
 */

import type { Driver } from 'driver.js';
import { getCurrentSession } from './session';
import type { TourId } from './types';

interface PopoverFooter {
	footerButtons: HTMLElement;
	nextButton: HTMLElement;
}

/** Add a custom "Continue with X →" button to the popover footer. The
 *  button ends the current tour cleanly and starts the next one after a
 *  short delay (so cleanup transitions can finish). */
export function addNextTourButton(nextId: TourId, label: string) {
	return (popover: PopoverFooter, _opts: { driver: Driver }) => {
		if (popover.footerButtons.querySelector('.tour-next-btn')) return;
		const btn = document.createElement('button');
		btn.type = 'button';
		btn.classList.add('tour-next-btn');
		btn.textContent = label;
		btn.addEventListener('click', async () => {
			// End current session (cleans up panels, dialogs, anchors, snapshots).
			await getCurrentSession()?.end();
			// Dynamic import breaks the popoverButtons → index → scripts cycle.
			const { startGuidedTour } = await import('./index');
			setTimeout(() => void startGuidedTour(nextId), 220);
		});
		popover.footerButtons.insertBefore(btn, popover.nextButton);
	};
}
