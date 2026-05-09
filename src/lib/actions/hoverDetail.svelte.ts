/**
 * Reusable hover-detail state machine.
 *
 * Drives a "detail column" that appears next to a list when the user hovers
 * an item. Brushing past tiles on the way to the detail column shouldn't
 * flip the content, so we delay open/switch/close transitions.
 *
 * Used by NodeLibrary and EventsPanel — keep the timing identical so both
 * panels feel the same.
 */

const DEFAULT_OPEN_DELAY = 250;
const DEFAULT_SWITCH_DELAY = 200;
const DEFAULT_CLOSE_DELAY = 120;

export interface HoverDetailOptions<T> {
	/** Called whenever the visible detail item changes (including to null). */
	onChange?: (item: T | null) => void;
	/** Called when the detail column should appear or disappear. */
	onVisibleChange?: (visible: boolean) => void;
	openDelay?: number;
	switchDelay?: number;
	closeDelay?: number;
}

export function createHoverDetail<T>(opts: HoverDetailOptions<T> = {}) {
	const openDelay = opts.openDelay ?? DEFAULT_OPEN_DELAY;
	const switchDelay = opts.switchDelay ?? DEFAULT_SWITCH_DELAY;
	const closeDelay = opts.closeDelay ?? DEFAULT_CLOSE_DELAY;

	let hoveredItem = $state<T | null>(null);
	let openTimer: ReturnType<typeof setTimeout> | null = null;
	let switchTimer: ReturnType<typeof setTimeout> | null = null;
	let closeTimer: ReturnType<typeof setTimeout> | null = null;

	function clearOpenTimer() {
		if (openTimer !== null) {
			clearTimeout(openTimer);
			openTimer = null;
		}
	}
	function clearSwitchTimer() {
		if (switchTimer !== null) {
			clearTimeout(switchTimer);
			switchTimer = null;
		}
	}
	function clearCloseTimer() {
		if (closeTimer !== null) {
			clearTimeout(closeTimer);
			closeTimer = null;
		}
	}
	function clearAll() {
		clearOpenTimer();
		clearSwitchTimer();
		clearCloseTimer();
	}

	function handleEnter(item: T) {
		clearCloseTimer();
		if (hoveredItem === item) {
			clearSwitchTimer();
			return;
		}
		if (hoveredItem !== null) {
			clearSwitchTimer();
			switchTimer = setTimeout(() => {
				switchTimer = null;
				hoveredItem = item;
				opts.onChange?.(item);
			}, switchDelay);
			return;
		}
		clearOpenTimer();
		openTimer = setTimeout(() => {
			openTimer = null;
			hoveredItem = item;
			opts.onChange?.(item);
			opts.onVisibleChange?.(true);
		}, openDelay);
	}

	function handleLeave() {
		clearOpenTimer();
		clearSwitchTimer();
		if (hoveredItem === null) return;
		clearCloseTimer();
		closeTimer = setTimeout(() => {
			closeTimer = null;
			hoveredItem = null;
			opts.onChange?.(null);
			opts.onVisibleChange?.(false);
		}, closeDelay);
	}

	function hideNow() {
		clearAll();
		const wasShown = hoveredItem !== null;
		hoveredItem = null;
		if (wasShown) {
			opts.onChange?.(null);
			opts.onVisibleChange?.(false);
		}
	}

	function keepAlive() {
		clearCloseTimer();
		clearSwitchTimer();
	}

	return {
		get hovered() {
			return hoveredItem;
		},
		handleEnter,
		handleLeave,
		hideNow,
		keepAlive,
		dismiss: handleLeave,
		cleanup: clearAll
	};
}
