# PathView Toolbox Integration Specification

**Version:** 1.0.0

A toolbox is a Python package that provides computational blocks (and optionally events) for the PathView visual simulation environment. Toolboxes extend PathView with new block types that appear in the Block Library panel.

This document is the authoritative reference for third-party developers creating toolbox packages and integrating them into PathView.

Existing toolboxes: `pathsim` (core simulation blocks), `pathsim-chem` (chemical engineering blocks).

---

## Table of Contents

- [1. Overview](#1-overview)
- [2. Python Package Requirements](#2-python-package-requirements)
  - [2.1 Block Classes](#21-block-classes)
  - [2.2 Event Classes](#22-event-classes)
- [3. Toolbox Config Directory](#3-toolbox-config-directory)
- [4. blocks.json Schema](#4-blocksjson-schema)
- [5. events.json Schema](#5-eventsjson-schema)
- [6. requirements-pyodide.txt](#6-requirements-pyodidetxt)
- [7. Extraction Pipeline](#7-extraction-pipeline)
  - [7.1 Discovery](#71-discovery)
  - [7.2 Block Extraction Flow](#72-block-extraction-flow)
  - [7.3 Event Extraction Flow](#73-event-extraction-flow)
  - [7.4 Dependency Extraction Flow](#74-dependency-extraction-flow)
- [8. Generated Output](#8-generated-output)
  - [8.1 blocks.ts](#81-blocksts)
  - [8.2 events.ts](#82-eventsts)
  - [8.3 dependencies.ts](#83-dependenciests)
- [9. Block Metadata Contract (Block.info())](#9-block-metadata-contract-blockinfo)
  - [9.1 Port Label Semantics](#91-port-label-semantics)
  - [9.2 Parameter Type Inference](#92-parameter-type-inference)
- [10. Runtime Package Installation](#10-runtime-package-installation)
- [11. Step-by-Step Walkthrough](#11-step-by-step-walkthrough)
- [12. UI Configuration (Optional)](#12-ui-configuration-optional)

---

## 1. Overview

Each toolbox provides a set of block types (and optionally event types) that PathView discovers, extracts metadata from, and presents in the Block Library panel. The integration requires three things:

1. **A Python package** with blocks that implement the `Block.info()` classmethod (and optionally an `events` submodule).
2. **A config directory** at `scripts/config/<toolbox-name>/` containing `blocks.json` (and optionally `events.json`).
3. **An entry** in `scripts/config/requirements-pyodide.txt` so both the Pyodide and Flask backends install the package at runtime.

The extraction pipeline (`npm run extract`) reads the config files, imports the Python packages, calls `Block.info()` on each class, and generates TypeScript source files that PathView consumes at build time. No manual registration beyond these three steps is needed.

---

## 2. Python Package Requirements

### 2.1 Block Classes

The toolbox Python package must have an importable module containing block classes. For example, a package named `pathsim-controls` (installed as `pathsim_controls`) would expose blocks via `pathsim_controls.blocks`.

Each block class must implement the `info()` classmethod returning a dict with the following keys:

```python
@classmethod
def info(cls):
    return {
        "input_port_labels": {"x": 0, "y": 1},  # or None or {}
        "output_port_labels": {"out": 0},         # or None or {}
        "parameters": {
            "gain": {"default": 1.0},
            "mode": {"default": "linear"}
        },
        "description": "A proportional controller block."
    }
```

| Key | Type | Description |
|-----|------|-------------|
| `input_port_labels` | `dict`, `None`, or `{}` | Defines input port names and indices. See [Port Label Semantics](#91-port-label-semantics). |
| `output_port_labels` | `dict`, `None`, or `{}` | Defines output port names and indices. See [Port Label Semantics](#91-port-label-semantics). |
| `parameters` | `dict` | Map of parameter names to dicts containing at minimum a `"default"` key. |
| `description` | `str` | RST-formatted docstring. The first line/sentence is used as the short description. |

If a block does not implement `info()`, the extractor falls back to `__init__` signature introspection, but this is less reliable. All new toolbox blocks should implement `info()`.

### 2.2 Event Classes

Event classes live in a separate submodule (e.g., `pathsim_controls.events`). Events do not use an `info()` classmethod. Instead, the extractor inspects the `__init__` signature to discover parameters:

```python
class ThresholdEvent:
    """Triggers when a signal crosses a threshold value."""

    def __init__(self, func_evt=None, func_act=None, threshold=0.0, tolerance=1e-4):
        ...
```

Parameter names, default values, and the class docstring are extracted automatically.

---

## 3. Toolbox Config Directory

Each toolbox has a config directory at:

```
scripts/config/<toolbox-name>/
```

The directory name should match the pip package name (e.g., `pathsim-chem`, `pathsim-controls`).

Required contents:

| File | Required | Description |
|------|----------|-------------|
| `blocks.json` | Yes | Block categories and class names to extract |
| `events.json` | No | Event class names to extract |

Example directory structure:

```
scripts/config/
  schemas/                    # JSON schemas (shared, do not modify)
    blocks.schema.json
    events.schema.json
  pathsim/                    # Core toolbox
    blocks.json
    events.json
    simulation.json
  pathsim-chem/               # Chemical engineering toolbox
    blocks.json
  pathsim-controls/           # Your new toolbox
    blocks.json
    events.json
```

---

## 4. blocks.json Schema

A `blocks.json` file declares which block classes to extract from a toolbox and how to organize them into categories.

```json
{
  "$schema": "../schemas/blocks.schema.json",
  "toolbox": "pathsim-controls",
  "importPath": "pathsim_controls.blocks",
  "categories": {
    "Controls": ["PIDController", "StateEstimator"]
  },
  "extraDocstrings": []
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `$schema` | string | No | JSON Schema reference for editor validation. Should be `"../schemas/blocks.schema.json"`. |
| `toolbox` | string | Yes | Toolbox identifier. Must match the config directory name. |
| `importPath` | string | Yes | Python import path to the blocks module (e.g., `"pathsim_controls.blocks"`). |
| `categories` | object | Yes | Map of category names to arrays of block entries. Category names appear as section headers in the Block Library panel. |
| `extraDocstrings` | string[] | No | Additional classes to extract docstrings from (not blocks themselves). Used by the core toolbox for `Subsystem` and `Interface`. |

**Block entries** within each category array can be either:

- **A string** -- the class name, imported from `importPath`:
  ```json
  "PIDController"
  ```
- **An object** -- for classes that live in a different module than `importPath`:
  ```json
  {"class": "PIDController", "import": "pathsim_controls.advanced"}
  ```

**Real-world example** (`pathsim-chem/blocks.json`):

```json
{
  "$schema": "../schemas/blocks.schema.json",
  "toolbox": "pathsim-chem",
  "importPath": "pathsim_chem.tritium",
  "categories": {
    "Chemical": ["Process", "Bubbler4", "Splitter", "GLC"]
  }
}
```

---

## 5. events.json Schema

An `events.json` file declares which event classes to extract from a toolbox.

```json
{
  "$schema": "../schemas/events.schema.json",
  "toolbox": "pathsim-controls",
  "importPath": "pathsim_controls.events",
  "events": ["ThresholdEvent", "TimerEvent"]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `$schema` | string | No | JSON Schema reference for editor validation. Should be `"../schemas/events.schema.json"`. |
| `toolbox` | string | Yes | Toolbox identifier. Must match the config directory name. |
| `importPath` | string | Yes | Python import path to the events module (e.g., `"pathsim_controls.events"`). |
| `events` | string[] | Yes | List of event class names to extract from the module. |

**Real-world example** (`pathsim/events.json`):

```json
{
  "$schema": "../schemas/events.schema.json",
  "toolbox": "pathsim",
  "importPath": "pathsim.events",
  "events": [
    "ZeroCrossing",
    "ZeroCrossingUp",
    "ZeroCrossingDown",
    "Schedule",
    "ScheduleList",
    "Condition"
  ]
}
```

---

## 6. requirements-pyodide.txt

The file `scripts/config/requirements-pyodide.txt` is the single source of truth for runtime Python dependencies. Both the Pyodide web worker and the Flask backend install packages from this file.

**Syntax:**

```
--pre
pathsim
pathsim-chem>=0.2rc2  # optional
pathsim-controls       # optional
```

| Syntax Element | Description |
|----------------|-------------|
| `--pre` | Global flag. Applies to all packages below it. Allows pre-release versions (e.g., `rc`, `beta`). |
| `pathsim` | A required package. If installation fails, app startup is blocked. |
| `pathsim-chem>=0.2rc2  # optional` | An optional package with a version specifier. The `# optional` comment sets the package's `required` field to `false` -- installation failure will not block app startup. |
| `>=`, `==`, `~=`, `<`, `<=`, `>` | Standard pip version specifiers. All are supported. |

**How the file is parsed** (from `ConfigLoader.load_requirements()`):

1. Lines starting with `#` are ignored (pure comments).
2. The `--pre` flag sets `pre: true` for all subsequent packages.
3. For each package line, the pip spec is the text before any `#` comment.
4. If the comment contains `# optional` (case-insensitive), `required` is set to `false`.
5. The Python import name is derived by stripping version specifiers and replacing `-` with `_` (e.g., `pathsim-chem` becomes `pathsim_chem`).

---

## 7. Extraction Pipeline

The extraction is run via:

```bash
npm run extract          # Extract all (blocks, events, simulation, dependencies)
python scripts/extract.py  # Same, invoked directly
```

Selective extraction is also supported:

```bash
python scripts/extract.py --blocks      # Blocks only
python scripts/extract.py --events      # Events only
python scripts/extract.py --deps        # Dependencies only
python scripts/extract.py --registry    # JSON registry only (for pvm2py)
python scripts/extract.py --validate    # Validate config files only
```

### 7.1 Discovery

The `discover_toolboxes()` method scans `scripts/config/` for subdirectories that contain a `blocks.json` file (excluding the `schemas/` directory). Toolboxes are auto-discovered -- no manual registration step is needed beyond creating the config directory.

### 7.2 Block Extraction Flow

For each discovered toolbox:

1. Load and validate `blocks.json`.
2. Import the Python module specified in `importPath`.
3. For each class name in each category:
   a. Get the class object from the module via `getattr()`.
   b. Call `cls.info()` to get the metadata dict.
   c. Process `input_port_labels` and `output_port_labels` via `_process_port_labels()` -- converting the dict to a sorted list of names, `None` for variable ports, or `[]` for no ports.
   d. For each parameter, infer the type from the default value (see [Parameter Type Inference](#92-parameter-type-inference)).
   e. Extract parameter descriptions from the RST docstring.
   f. Convert the full docstring to HTML using `docutils` (if available).
4. If `info()` is not available, fall back to `__init__` signature introspection.
5. Process `extraDocstrings` classes (docstring-only extraction, no parameter/port extraction).
6. Generate `src/lib/nodes/generated/blocks.ts`.

### 7.3 Event Extraction Flow

For each discovered toolbox that has an `events.json`:

1. Load and validate `events.json`.
2. Import the Python module specified in `importPath`.
3. For each event class name:
   a. Get the class object from the module.
   b. Inspect the `__init__` signature for parameters (skipping `self`).
   c. Infer parameter types from names and default values.
   d. Extract parameter descriptions from the class docstring.
   e. Convert the full docstring to HTML.
4. Generate `src/lib/events/generated/events.ts`.

### 7.4 Dependency Extraction Flow

1. Parse `scripts/config/requirements-pyodide.txt` into a list of package configs.
2. For each package, import the module and read `__version__` to get the installed version.
3. Pin exact versions for release builds (dev versions keep the original spec).
4. Load `scripts/config/pyodide.json` for Pyodide runtime configuration.
5. Generate `src/lib/constants/dependencies.ts` containing the `PYTHON_PACKAGES` array.

---

## 8. Generated Output

The extraction pipeline generates three TypeScript files. These are auto-generated and should not be edited by hand.

### 8.1 blocks.ts

**Path:** `src/lib/nodes/generated/blocks.ts`

```typescript
export interface ExtractedParam {
  type: string;       // "integer", "number", "string", "boolean", "callable", "array", "any"
  default: string | null;
  description: string;
  min?: number;
  max?: number;
  options?: string[];
}

export interface ExtractedBlock {
  blockClass: string;
  description: string;
  docstringHtml: string;
  params: Record<string, ExtractedParam>;
  inputs: string[] | null;   // null = variable, [] = none, [...] = fixed named
  outputs: string[] | null;  // null = variable, [] = none, [...] = fixed named
}

export const extractedBlocks: Record<string, ExtractedBlock> = { ... };

export const blockConfig: Record<string, string[]> = {
  Sources: ["Constant", "Source", ...],
  Controls: ["PIDController", "StateEstimator"],
  ...
};

export const blockImportPaths: Record<string, string> = {
  "Constant": "pathsim.blocks",
  "PIDController": "pathsim_controls.blocks",
  ...
};
```

The `blockConfig` object maps category names (used as Block Library section headers) to arrays of block class names. The `blockImportPaths` object maps each block class name to its Python import path.

### 8.2 events.ts

**Path:** `src/lib/events/generated/events.ts`

```typescript
import type { EventTypeDefinition } from '../types';

export const extractedEvents: EventTypeDefinition[] = [
  {
    type: "pathsim.events.ZeroCrossing",    // fully qualified Python path
    name: "ZeroCrossing",                    // display name
    eventClass: "ZeroCrossing",              // class name
    description: "...",
    docstringHtml: "...",
    params: [
      { name: "func_evt", type: "callable", default: "None", description: "..." },
      { name: "func_act", type: "callable", default: "None", description: "..." },
      { name: "tolerance", type: "number", default: "0.0001", description: "..." }
    ]
  }
];
```

The `type` field uses the fully qualified Python import path (e.g., `"pathsim.events.ZeroCrossing"`). This is used in `.pvm` files to reference event types and for code generation.

### 8.3 dependencies.ts

**Path:** `src/lib/constants/dependencies.ts`

```typescript
export interface PackageConfig {
  pip: string;        // pip install spec (e.g., "pathsim==0.16.5")
  pre: boolean;       // whether to use --pre flag
  required: boolean;  // whether failure blocks startup
  import: string;     // Python import name (e.g., "pathsim_chem")
}

export const PYTHON_PACKAGES: PackageConfig[] = [
  {
    "pip": "pathsim==0.16.5",
    "required": true,
    "pre": true,
    "import": "pathsim"
  },
  {
    "pip": "pathsim-chem>=0.2rc2",
    "required": false,
    "pre": true,
    "import": "pathsim_chem"
  }
];
```

This file also exports `PYODIDE_VERSION`, `PYODIDE_CDN_URL`, `PYODIDE_PRELOAD`, `PATHVIEW_VERSION`, and `EXTRACTED_VERSIONS`.

---

## 9. Block Metadata Contract (Block.info())

The `info()` classmethod is the primary interface between a toolbox's Python code and PathView's extraction pipeline.

```python
@classmethod
def info(cls):
    return {
        "input_port_labels": {"x": 0, "y": 1},
        "output_port_labels": {"out": 0},
        "parameters": {
            "gain": {"default": 1.0},
            "mode": {"default": "linear"}
        },
        "description": "A proportional controller block."
    }
```

### 9.1 Port Label Semantics

The values of `input_port_labels` and `output_port_labels` have precise semantics that control both extraction and UI behavior:

| Value | Meaning | Extracted As | UI Behavior |
|-------|---------|--------------|-------------|
| `None` | Variable/unlimited ports | `null` in TypeScript | Add/remove port buttons shown |
| `{}` | No ports of this direction | `[]` (empty array) | No ports rendered |
| `{"name": index, ...}` | Fixed labeled ports | `["name", ...]` sorted by index | Ports locked, names displayed |

The extraction function `_process_port_labels()` converts dicts to sorted name lists:

```python
{"x": 0, "y": 1}   # → ["x", "y"]  (sorted by index value)
{"out": 0}          # → ["out"]
None                 # → None  (variable ports)
{}                   # → []    (no ports)
```

### 9.2 Parameter Type Inference

The extractor infers TypeScript-side parameter types from Python default values using these rules (evaluated in order):

| Condition | Inferred Type |
|-----------|---------------|
| Name starts with `func_` or `func`, or default is callable | `"callable"` |
| Default is `True` or `False` | `"boolean"` |
| Default is `int` (and not `bool`) | `"integer"` |
| Default is `float` | `"number"` |
| Default is `str` | `"string"` |
| Default is `list`, `tuple`, or ndarray | `"array"` |
| Default is `None` or anything else | `"any"` |

Note: `bool` is checked before `int` because in Python `isinstance(True, int)` is `True`.

---

## 10. Runtime Package Installation

The `PYTHON_PACKAGES` constant (generated from `requirements-pyodide.txt`) drives package installation in both backends:

**Pyodide backend** (`src/lib/pyodide/backend/pyodide/worker.ts`):
```typescript
for (const pkg of PYTHON_PACKAGES) {
    await pyodide.runPythonAsync(`
        import micropip
        await micropip.install('${pkg.pip}'${pkg.pre ? ', pre=True' : ''})
    `);
}
```

**Flask backend** (`src/lib/pyodide/backend/flask/backend.ts`):
```typescript
await fetch(`${baseUrl}/api/init`, {
    method: 'POST',
    body: JSON.stringify({ packages: PYTHON_PACKAGES }),
});
```

Both backends respect the `required` flag. If a package has `required: false` (from the `# optional` comment in requirements), installation failure is caught and logged but does not block app startup. If `required: true`, a failed installation aborts initialization.

---

## 11. Step-by-Step Walkthrough

This section walks through adding a hypothetical `pathsim-controls` toolbox with two blocks (`PIDController`, `StateEstimator`) and one event (`ThresholdEvent`).

### Step 1: Add to requirements

Edit `scripts/config/requirements-pyodide.txt`:

```
--pre
pathsim
pathsim-chem>=0.2rc2   # optional
pathsim-controls        # optional
```

The `# optional` comment means PathView will continue loading if this package is unavailable.

### Step 2: Create config directory

Create the directory `scripts/config/pathsim-controls/`.

**`scripts/config/pathsim-controls/blocks.json`:**

```json
{
  "$schema": "../schemas/blocks.schema.json",
  "toolbox": "pathsim-controls",
  "importPath": "pathsim_controls.blocks",
  "categories": {
    "Controls": ["PIDController", "StateEstimator"]
  }
}
```

**`scripts/config/pathsim-controls/events.json`:**

```json
{
  "$schema": "../schemas/events.schema.json",
  "toolbox": "pathsim-controls",
  "importPath": "pathsim_controls.events",
  "events": ["ThresholdEvent"]
}
```

### Step 3: Ensure the Python package is installed

The extraction script needs to import the package. Install it in your development environment:

```bash
pip install pathsim-controls
```

Verify the blocks module is importable and `info()` works:

```python
from pathsim_controls.blocks import PIDController
print(PIDController.info())
```

### Step 4: Run the extraction

```bash
npm run extract
```

Expected output:

```
PathSim Metadata Extractor
========================================

Extracting dependencies...
    Pinned pathsim to version 0.16.5
    pathsim-controls ...

Extracting blocks...
  Processing toolbox: pathsim
    Extracted Constant
    ...
  Processing toolbox: pathsim-controls
    Extracted PIDController
    Extracted StateEstimator
Generated: src/lib/nodes/generated/blocks.ts

Extracting events...
  Processing events from: pathsim
    Extracted ZeroCrossing
    ...
  Processing events from: pathsim-controls
    Extracted ThresholdEvent
Generated: src/lib/events/generated/events.ts

Done!
```

### Step 5: Verify in dev server

```bash
npm run dev
```

Open the app in a browser. The Block Library panel should now show a "Controls" section containing "PIDController" and "StateEstimator". The Events panel should list "ThresholdEvent".

### Step 6: Build for production

```bash
npm run build
```

The generated TypeScript files are compiled into the production bundle. The `PYTHON_PACKAGES` constant ensures runtime installation of `pathsim-controls` in both Pyodide and Flask backends.

---

## 12. UI Configuration (Optional)

After a toolbox's blocks are extracted and appear in the Block Library, you may want to customize their UI behavior. These configurations are in PathView's TypeScript source and are optional.

### Port synchronization

For blocks where each input has a corresponding output (parallel processing blocks), add the block class name to the `syncPortBlocks` set. This hides the output port controls and keeps output count in sync with input count.

**File:** `src/lib/nodes/uiConfig.ts`

```typescript
export const syncPortBlocks = new Set([
  'Integrator',
  'Differentiator',
  'Delay',
  // ... existing entries ...
  'PIDController',  // add your block here
]);
```

### Port labels from parameters

For blocks that derive port names from a parameter value (e.g., a list of channel labels), add an entry to `portLabelParams`. When the user changes the parameter, port names update automatically.

**File:** `src/lib/nodes/uiConfig.ts`

```typescript
export const portLabelParams: Record<string, PortLabelConfig | PortLabelConfig[]> = {
  Scope: { param: 'labels', direction: 'input' },
  Spectrum: { param: 'labels', direction: 'input' },
  Adder: { param: 'operations', direction: 'input', parser: parseOperationsString },
  // Add your block:
  MyMuxBlock: { param: 'labels', direction: 'input' },
};
```

The `PortLabelConfig` interface:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `param` | string | Yes | Parameter name whose value determines port labels. |
| `direction` | `"input"` or `"output"` | Yes | Which port direction the labels apply to. |
| `parser` | function | No | Custom parser to convert the param value to a `string[]`. Default uses `parsePythonList`. |

### Custom shapes

Map your toolbox's categories to node shapes using the shape registry. Available built-in shapes: `pill`, `rect`, `circle`, `diamond`, `mixed`, `default`.

**File:** `src/lib/nodes/shapes/registry.ts`

```typescript
// Add to the categoryShapeMap or call setCategoryShape:
setCategoryShape('Controls', 'rect');
```

The existing category-to-shape mapping:

| Category | Shape |
|----------|-------|
| Sources | `pill` |
| Dynamic | `rect` |
| Algebraic | `rect` |
| Mixed | `mixed` |
| Recording | `pill` |
| Subsystem | `rect` |

Categories not in the map use the `default` shape.

---

## Notes for Toolbox Authors

1. **`info()` is the contract.** Implement it on every block class. The extractor falls back to `__init__` introspection, but `info()` gives you explicit control over port definitions and parameter metadata.

2. **Port labels must be consistent.** The index values in port label dicts must be zero-based and contiguous. The extractor sorts by index, so `{"y": 1, "x": 0}` correctly produces `["x", "y"]`.

3. **Parameter defaults drive type inference.** If your parameter should be a `number` in the UI, make sure the default is a Python `float`, not `None`. Use `None` only when the type truly cannot be determined.

4. **Docstrings are rendered as HTML.** If `docutils` is installed, RST-formatted docstrings are converted to HTML and displayed in the block documentation panel. Write proper RST with `:param:` directives for best results.

5. **The `# optional` flag is important.** Mark your toolbox as optional in `requirements-pyodide.txt` unless PathView cannot function without it. This ensures the app starts even if your package has installation issues in a user's browser environment.

6. **Test the extraction locally.** Run `python scripts/extract.py --validate` to check config file validity, then `python scripts/extract.py --blocks` to verify block extraction before committing.
