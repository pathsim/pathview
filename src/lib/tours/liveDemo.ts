/**
 * Small live-demo helpers for tour steps that animate something on the
 * canvas (currently just block rotation; future tours might add ports
 * dance, signal-flow pulse, etc.). Each helper registers its cleanup on
 * the active TourSession so a tour-end mid-animation cancels cleanly.
 */

import { graphStore } from '$lib/stores/graph';
import { triggerFitView } from '$lib/stores/viewActions';
import { getCurrentSession } from './session';
import { findBlockId, type BlockLookup } from './blocks';

/** Rotate a block 4× by 90° with a delay between each turn so the
 *  Transform step demonstrates the shortcut visually. After one full
 *  revolution the block is back to its original orientation.
 *
 *  Auto-cancelled if the tour ends mid-animation. */
export function startRotationDemo(
	lookup: BlockLookup,
	{ stepMs = 450, turns = 4 } = {}
): void {
	const session = getCurrentSession();
	if (!session) return;

	const id = findBlockId(lookup);
	if (!id) return;

	let n = 0;
	let timer: ReturnType<typeof setTimeout> | null = null;

	const cancel = () => {
		if (timer !== null) {
			clearTimeout(timer);
			timer = null;
		}
	};

	const tick = () => {
		const node = graphStore.getNode(id);
		const current = ((node?.params?.['_rotation'] as number) ?? 0) % 4;
		graphStore.updateNodeParams(id, { _rotation: (current + 1) % 4 });
		triggerFitView();
		n++;
		if (n < turns) timer = setTimeout(tick, stepMs);
		else timer = null;
	};

	timer = setTimeout(tick, stepMs);
	session.registerCleanup(cancel);
}
