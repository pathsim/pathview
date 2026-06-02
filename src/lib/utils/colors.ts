/**
 * Color definitions for PathView
 */

import { BRAND } from '$lib/constants/brand';

// Default node/event/annotation color: the brand accent (matches the CSS
// `--accent` default). Items without an explicit color follow the active brand.
export const DEFAULT_NODE_COLOR = BRAND.accent;

// Port colors
export const PORT_COLORS = {
	default: '#969696', // Gray: rgb(150, 150, 150)
	signal: '#64c8ff', // Blue: rgb(100, 200, 255)
	control: '#ffc864', // Orange: rgb(255, 200, 100)
	data: '#c864ff' // Purple: rgb(200, 100, 255)
};

// Color palette for dialogs (block/event properties)
export const DIALOG_COLOR_PALETTE = [
	DEFAULT_NODE_COLOR, // PathSim blue (default)
	'#E57373', // Red
	'#FFB74D', // Orange
	'#FFF176', // Yellow
	'#81C784', // Green
	'#4DB6AC', // Teal
	'#4DD0E1', // Cyan
	'#64B5F6', // Blue
	'#BA68C8', // Purple
	'#F06292', // Pink
	'#90A4AE', // Grey
	'#FFFFFF' // White
];
