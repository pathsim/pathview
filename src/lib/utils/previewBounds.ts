/**
 * Plot-preview popup geometry (Scope / Spectrum).
 *
 * Single source of truth for the gap between a recording block and its
 * pinned plot-preview popup, the side it appears on for each rotation,
 * and how those bounds extend the block's bounding box (used for fit-view).
 */

import { PREVIEW_WIDTH, PREVIEW_HEIGHT } from '$lib/plotting/core/constants';

/** Pixel gap between block edge and preview popup. CSS reads this via the
 *  `--preview-gap` custom property set on the block. */
export const PREVIEW_GAP = 12;

export type PreviewSide = 'top' | 'right' | 'bottom' | 'left';

/** Side the preview appears on for a given block rotation (matches handle layout). */
export function previewSideForRotation(rotation: number): PreviewSide {
	switch (rotation) {
		case 1:
			return 'bottom';
		case 2:
			return 'left';
		case 3:
			return 'top';
		default:
			return 'right';
	}
}

export interface BlockBounds {
	left: number;
	top: number;
	right: number;
	bottom: number;
}

/** Extend a block's bounding box by the preview popup placed on the given side. */
export function extendBoundsForPreview(bounds: BlockBounds, side: PreviewSide): BlockBounds {
	const cx = (bounds.left + bounds.right) / 2;
	const cy = (bounds.top + bounds.bottom) / 2;
	const halfW = PREVIEW_WIDTH / 2;
	const halfH = PREVIEW_HEIGHT / 2;
	switch (side) {
		case 'right':
			return {
				left: bounds.left,
				top: Math.min(bounds.top, cy - halfH),
				right: bounds.right + PREVIEW_GAP + PREVIEW_WIDTH,
				bottom: Math.max(bounds.bottom, cy + halfH)
			};
		case 'left':
			return {
				left: bounds.left - PREVIEW_GAP - PREVIEW_WIDTH,
				top: Math.min(bounds.top, cy - halfH),
				right: bounds.right,
				bottom: Math.max(bounds.bottom, cy + halfH)
			};
		case 'bottom':
			return {
				left: Math.min(bounds.left, cx - halfW),
				top: bounds.top,
				right: Math.max(bounds.right, cx + halfW),
				bottom: bounds.bottom + PREVIEW_GAP + PREVIEW_HEIGHT
			};
		case 'top':
			return {
				left: Math.min(bounds.left, cx - halfW),
				top: bounds.top - PREVIEW_GAP - PREVIEW_HEIGHT,
				right: Math.max(bounds.right, cx + halfW),
				bottom: bounds.bottom
			};
	}
}
