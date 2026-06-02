/**
 * Visible product branding, configurable at build time.
 *
 * Defaults to PathView (PathSim blue). A re-branded distribution overrides any
 * of these via `VITE_BRAND_*` env vars at build time, without touching the
 * components that read them. `key` is set as `data-brand` on <html> so CSS can
 * key an accent override off it; the JS accent (`accent` / `keywordColor`) feeds
 * the canvas default color and the CodeMirror palette.
 */

/**
 * Parse a comma-separated palette from an env var (e.g.
 * `VITE_BRAND_TRACE_PALETTE="#0070C0,#81C784,..."`) into a color array.
 * Returns null when unset/empty so the caller keeps its default.
 */
function parsePalette(raw: string | undefined): string[] | null {
	if (!raw) return null;
	const colors = raw
		.split(',')
		.map((c) => c.trim())
		.filter(Boolean);
	return colors.length > 0 ? colors : null;
}

export const BRAND = {
	/** Short key, set as `data-brand` on <html> for CSS overrides. */
	key: import.meta.env.VITE_BRAND_KEY || 'pathsim',
	/** Display name (window title, logo alt, autosave prompt, welcome header). */
	name: import.meta.env.VITE_BRAND_NAME || 'PathView',
	/** Logo asset filename under static/. */
	logo: import.meta.env.VITE_BRAND_LOGO || 'pathview_logo.png',
	/** Primary accent (matches the CSS `--accent` default). */
	accent: import.meta.env.VITE_BRAND_ACCENT || '#0070C0',
	/** CodeMirror keyword color (control flow / imports). */
	keywordColor: import.meta.env.VITE_BRAND_KEYWORD || '#E57373',
	/** Home link target (welcome modal). */
	home: import.meta.env.VITE_BRAND_HOME || 'https://pathsim.org',
	/** Simulation framework name (welcome tagline). */
	framework: import.meta.env.VITE_BRAND_FRAMEWORK || 'PathSim',
	/**
	 * Supplementary plot trace colors (used after trace 0, which takes the
	 * accent). A re-branded build can override this via `VITE_BRAND_TRACE_PALETTE`
	 * (comma-separated hex) so the palette doesn't clash with its accent (e.g. a
	 * red-accent brand drops the leading red).
	 */
	tracePalette: parsePalette(import.meta.env.VITE_BRAND_TRACE_PALETTE) ?? [
		'#E57373', // Red
		'#81C784', // Green
		'#64B5F6', // Blue
		'#BA68C8', // Purple
		'#4DD0E1', // Cyan
		'#FFB74D', // Orange
		'#F06292', // Pink
		'#4DB6AC', // Teal
		'#90A4AE' // Grey
	]
};
