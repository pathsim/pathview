/**
 * Public types for the tours module.
 */

export type TourId = 'start' | 'modeling' | 'simulation';

export interface TourScript {
	id: TourId;
	/** Human-readable name shown in confirmation dialogs / next-tour buttons. */
	displayName: string;
	/** The example model paired with this tour, served from /examples. */
	demoFile: string;
	/** Display name of the demo model for the confirmation dialog. */
	demoName: string;
	/** Build the driver.js step list. Called fresh on each tour start. */
	build: () => import('driver.js').DriveStep[];
	/** Optional setup, called once after the demo loads and before the first
	 *  step. Use it to snapshot stores so the tour leaves them as-found. */
	setup?: (session: import('./session').TourSession) => void;
	/** Optional: tour to launch from the "Continue" button on the last step. */
	next?: TourId;
}
