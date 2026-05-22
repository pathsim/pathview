/**
 * Content identity for runtime toolboxes.
 *
 * A toolbox `id` is a UI-construction artifact: catalog entries have a fixed
 * id, the PyPI tab builds `pypi:<pkg>`, the URL tab `url:<url>`, the file
 * upload `inline:<...>`. The id therefore depends on *how* the user added a
 * toolbox, not on *what* it is. Resolving dependencies on the raw id breaks
 * in two directions:
 *
 *   - the same PyPI package added via the catalog vs the PyPI tab gets two
 *     different ids and counts as two separate toolboxes;
 *   - two different uploaded `.py` files that happen to share a filename get
 *     the same id and count as one.
 *
 * `toolboxSourceKey` derives a stable key purely from the install source, so
 * both sides of a comparison agree regardless of the id.
 */

import type { ToolboxSource } from './types';

/**
 * Small, stable string hash (djb2 variant). Used to content-address inline
 * toolbox sources — not security-sensitive, just deterministic and
 * collision-resistant enough to tell pasted Python files apart.
 */
export function hashString(s: string): string {
	let h = 5381;
	for (let i = 0; i < s.length; i++) {
		h = (h * 33) ^ s.charCodeAt(i);
	}
	return (h >>> 0).toString(36);
}

/**
 * Normalize a PyPI project name per PEP 503: lowercase, with runs of `-`,
 * `_` and `.` collapsed to a single `-`. `Pathsim_Chem` and `pathsim-chem`
 * resolve to the same project.
 */
function normalizePypiName(pkg: string): string {
	return pkg.trim().toLowerCase().replace(/[-_.]+/g, '-');
}

/**
 * Canonical content identity for a toolbox source. Two sources that install
 * the same toolbox produce the same key; two that don't, don't.
 *
 * Note: the PyPI key intentionally ignores `version` — a pinned and an
 * unpinned install of the same package are still the same toolbox for
 * "is it installed" purposes.
 */
export function toolboxSourceKey(source: ToolboxSource): string {
	if (!source || typeof source !== 'object') return 'unknown:';
	switch (source.type) {
		case 'pypi':
			return `pypi:${normalizePypiName(source.pkg)}`;
		case 'url':
			return `url:${source.url.trim()}`;
		case 'inline':
			return `inline:${hashString(source.code)}`;
		default:
			return `unknown:${JSON.stringify(source)}`;
	}
}
