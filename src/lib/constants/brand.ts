/**
 * Visible product branding, configurable at build time.
 *
 * Defaults to PathView (PathSim blue). A re-branded distribution overrides any
 * of these via `VITE_BRAND_*` env vars at build time, without touching the
 * components that read them. `key` is set as `data-brand` on <html> so CSS can
 * key an accent override off it; the JS accent (`accent` / `keywordColor`) feeds
 * the canvas default color and the CodeMirror palette.
 */
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
	framework: import.meta.env.VITE_BRAND_FRAMEWORK || 'PathSim'
};
