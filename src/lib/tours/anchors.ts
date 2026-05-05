/**
 * Floating-corner anchors for tour popovers that don't have a real DOM
 * target (intros, outros, summary tables). The anchor is a 1×1 invisible
 * fixed-position div in the requested corner; driver.js positions the
 * popover relative to it. The TourSession owns the lifetime — anchors are
 * created on demand and torn down with the session.
 */

export type Corner = 'top-right' | 'bottom-right';

const ANCHOR_BASE =
	'position:fixed;width:1px;height:1px;pointer-events:none;opacity:0;z-index:1;';

const ANCHOR_OFFSETS: Record<Corner, string> = {
	'top-right': 'top:64px;right:24px;',
	'bottom-right': 'bottom:24px;right:24px;'
};

const ANCHOR_IDS: Record<Corner, string> = {
	'top-right': 'tour-anchor-top-right',
	'bottom-right': 'tour-anchor-bottom-right'
};

/** Create or return the existing anchor for a corner. The element is added
 *  to `document.body` and is invisible & non-interactive. */
export function getCornerAnchor(corner: Corner): Element {
	const id = ANCHOR_IDS[corner];
	let el = document.getElementById(id);
	if (!el) {
		el = document.createElement('div');
		el.id = id;
		el.style.cssText = ANCHOR_BASE + ANCHOR_OFFSETS[corner];
		document.body.appendChild(el);
	}
	return el;
}

/** Remove all corner anchors from the DOM. Called by TourSession on teardown. */
export function removeAllAnchors(): void {
	for (const id of Object.values(ANCHOR_IDS)) {
		document.getElementById(id)?.remove();
	}
}
