/**
 * Curated toolbox catalog.
 *
 * Hardcoded list of toolboxes that show up in the manager's "Catalog" tab.
 * Users can still install anything else via PyPI / URL / file upload.
 */

import type { ToolboxSource } from './types';

export interface CatalogEntry {
	/** Stable id used as the registry source key. */
	id: string;
	/** Display name in the catalog and Block Library section header. */
	displayName: string;
	/** Pre-defined install source. */
	source: ToolboxSource;
	/** Python module path used for block introspection. */
	importPath: string;
	/** Optional events submodule. */
	eventsImportPath?: string;
	/**
	 * Default category assigned to every block from this toolbox unless
	 * overridden by `categoryByClass` or by the user in the manager.
	 * Falls back to the toolbox display name if not set.
	 */
	defaultCategory?: string;
	/** Per-class category override (takes precedence over defaultCategory). */
	categoryByClass?: Record<string, string>;
	/**
	 * Seed this entry into the toolbox store on first launch so it's
	 * preinstalled. The user can still uninstall it; the choice persists.
	 */
	preloaded?: boolean;
}

export const TOOLBOX_CATALOG: CatalogEntry[] = [
	{
		id: 'pathsim-chem',
		displayName: 'pathsim-chem',
		source: { type: 'pypi', pkg: 'pathsim-chem' },
		importPath: 'pathsim_chem',
		defaultCategory: 'Chemical',
		preloaded: true
	},
	{
		id: 'pathsim-batt',
		displayName: 'pathsim-batt',
		source: { type: 'pypi', pkg: 'pathsim-batt' },
		importPath: 'pathsim_batt',
		defaultCategory: 'Battery'
	},
	{
		id: 'pathsim-flight',
		displayName: 'pathsim-flight',
		source: { type: 'pypi', pkg: 'pathsim-flight' },
		importPath: 'pathsim_flight',
		defaultCategory: 'Flight'
	},
	{
		id: 'pathsim-vehicle',
		displayName: 'pathsim-vehicle',
		source: { type: 'pypi', pkg: 'pathsim-vehicle' },
		importPath: 'pathsim_vehicle',
		defaultCategory: 'Vehicle'
	},
	{
		id: 'pathsim-rf',
		displayName: 'pathsim-rf',
		source: { type: 'pypi', pkg: 'pathsim-rf' },
		importPath: 'pathsim_rf',
		defaultCategory: 'RF'
	},
	{
		id: 'pathsim-fmi',
		displayName: 'pathsim-fmi',
		source: { type: 'pypi', pkg: 'pathsim-fmi' },
		importPath: 'pathsim_fmi',
		defaultCategory: 'FMI'
	}
];

export function getCatalogEntry(id: string): CatalogEntry | undefined {
	return TOOLBOX_CATALOG.find((e) => e.id === id);
}
