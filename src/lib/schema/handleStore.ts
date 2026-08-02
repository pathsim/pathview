/**
 * IndexedDB-backed storage for autosave snapshots and persisted
 * File System Access API handles.
 *
 * Two object stores:
 *   - `kv`      — simple key/value (used for the autosave blob, single row)
 *   - `recents` — LRU of file handles with metadata (last 10 entries)
 *
 * Handles are structured-cloneable; the browser persists them as-is and we
 * re-prompt for permission via `handle.requestPermission` when reopening.
 */

const DB_NAME = 'pathview';
const DB_VERSION = 1;
const KV_STORE = 'kv';
const RECENTS_STORE = 'recents';
const RECENTS_LIMIT = 10;

export const AUTOSAVE_KEY = 'autosave';
// Name + handle of the file the user is working on, persisted next to the
// autosave blob so a restored session keeps saving to the same file.
export const LAST_FILE_KEY = 'lastFile';

export interface RecentFile {
	id: string;
	name: string;
	handle: FileSystemFileHandle;
	lastOpened: number;
}

let dbPromise: Promise<IDBDatabase> | null = null;

function openDb(): Promise<IDBDatabase> {
	if (dbPromise) return dbPromise;
	dbPromise = new Promise((resolve, reject) => {
		const req = indexedDB.open(DB_NAME, DB_VERSION);
		req.onupgradeneeded = () => {
			const db = req.result;
			if (!db.objectStoreNames.contains(KV_STORE)) {
				db.createObjectStore(KV_STORE);
			}
			if (!db.objectStoreNames.contains(RECENTS_STORE)) {
				const store = db.createObjectStore(RECENTS_STORE, { keyPath: 'id' });
				store.createIndex('lastOpened', 'lastOpened');
			}
		};
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
		req.onblocked = () => reject(new Error('IndexedDB open blocked'));
	});
	return dbPromise;
}

function tx<T>(
	storeName: string,
	mode: IDBTransactionMode,
	run: (store: IDBObjectStore) => IDBRequest<T> | Promise<T>
): Promise<T> {
	return openDb().then(
		(db) =>
			new Promise<T>((resolve, reject) => {
				const transaction = db.transaction(storeName, mode);
				const store = transaction.objectStore(storeName);
				let result: T;
				Promise.resolve(run(store)).then((r) => {
					if (r && typeof (r as IDBRequest).addEventListener === 'function') {
						const req = r as IDBRequest<T>;
						req.onsuccess = () => {
							result = req.result;
						};
						req.onerror = () => reject(req.error);
					} else {
						result = r as T;
					}
				});
				transaction.oncomplete = () => resolve(result);
				transaction.onerror = () => reject(transaction.error);
				transaction.onabort = () => reject(transaction.error);
			})
	);
}

// ─── KV ────────────────────────────────────────────────────────────────────

export async function kvGet<T = unknown>(key: string): Promise<T | undefined> {
	return tx<T | undefined>(KV_STORE, 'readonly', (store) => store.get(key));
}

export async function kvSet(key: string, value: unknown): Promise<void> {
	await tx(KV_STORE, 'readwrite', (store) => store.put(value, key));
}

export async function kvDelete(key: string): Promise<void> {
	await tx(KV_STORE, 'readwrite', (store) => store.delete(key));
}

export async function kvHas(key: string): Promise<boolean> {
	const v = await tx<IDBValidKey | undefined>(KV_STORE, 'readonly', (store) => store.getKey(key));
	return v !== undefined;
}

// ─── Recent files ──────────────────────────────────────────────────────────

export async function recentsList(): Promise<RecentFile[]> {
	const all = await tx<RecentFile[]>(RECENTS_STORE, 'readonly', (store) => store.getAll());
	return all.sort((a, b) => b.lastOpened - a.lastOpened);
}

export async function recentsAdd(entry: Omit<RecentFile, 'lastOpened'>): Promise<void> {
	const now = Date.now();
	await tx(RECENTS_STORE, 'readwrite', (store) => store.put({ ...entry, lastOpened: now }));
	// Trim to LRU_LIMIT — keep newest, evict the rest
	const all = await recentsList();
	if (all.length > RECENTS_LIMIT) {
		const toEvict = all.slice(RECENTS_LIMIT);
		await tx(RECENTS_STORE, 'readwrite', (store) => {
			toEvict.forEach((e) => store.delete(e.id));
			return store.count();
		});
	}
}

export async function recentsRemove(id: string): Promise<void> {
	await tx(RECENTS_STORE, 'readwrite', (store) => store.delete(id));
}

export async function recentsClear(): Promise<void> {
	await tx(RECENTS_STORE, 'readwrite', (store) => store.clear());
}

/**
 * Stable id for a handle. Same file (by name + kind) collapses into one
 * recents row instead of accumulating duplicates across sessions.
 */
export function recentIdFor(handle: FileSystemFileHandle): string {
	return `${handle.kind}:${handle.name}`;
}

export function hasFileSystemAccess(): boolean {
	return typeof window !== 'undefined' && 'showOpenFilePicker' in window;
}
