/**
 * Types for SVG export
 */

import { EXPORT_PADDING } from '$lib/constants/dimensions';

/** SVG export options */
export interface ExportOptions {
	/** Background style: 'transparent' or 'solid' */
	background?: 'transparent' | 'solid';
	/** Padding around content in pixels */
	padding?: number;
}

/** Default export options */
export const DEFAULT_OPTIONS: Required<ExportOptions> = {
	background: 'transparent',
	padding: EXPORT_PADDING
};
