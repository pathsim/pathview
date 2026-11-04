"""
Shared block/event introspection used by both:

  - scripts/extract.py at build time (for built-in pathsim blocks)
  - src/lib/toolbox/python.ts at runtime (for user-installed toolboxes,
    inlined into Pyodide via Vite's ?raw import)

Single source of truth for: RST-docstring parsing, parameter type inference,
default-value formatting, block/event class detection, and the canonical
extracted-metadata dict shape consumed by the TypeScript registry layer.
"""

import inspect
import json
import re

# --- Optional docutils for RST->HTML --------------------------------------

_publish_parts = None
_docutils_checked = False


def rst_to_html(rst):
    """Convert an RST docstring to HTML using docutils when available.

    Returns "" if docutils isn't installed or conversion fails. Build-time
    bundles docutils via requirements-build.txt; runtime falls back gracefully.
    """
    global _publish_parts, _docutils_checked
    if not rst:
        return ""
    if not _docutils_checked:
        _docutils_checked = True
        try:
            from docutils.core import publish_parts  # type: ignore
            _publish_parts = publish_parts
        except Exception:
            _publish_parts = None
    if _publish_parts is None:
        return ""
    try:
        cleaned = inspect.cleandoc(rst)
        parts = _publish_parts(
            cleaned,
            writer_name="html",
            settings_overrides={
                "report_level": 5,
                "halt_level": 5,
                "initial_header_level": 3,
                "math_output": "MathJax",
            },
        )
        return parts.get("body") or ""
    except Exception:
        return ""


def first_line(docstring):
    """First sentence of a docstring (used as the short description)."""
    if not docstring:
        return ""
    for line in docstring.strip().split("\n"):
        s = line.strip()
        if not s:
            continue
        if ". " in s:
            return s.split(". ")[0] + "."
        return s
    return ""


def param_desc(docstring, name):
    """Extract a `:param name:` description from an RST docstring."""
    if not docstring:
        return ""
    pattern = (
        re.escape(name)
        + r"\s*:\s*[^\n]*\n\s+(.+?)(?=\n\s*\w+\s*:|\n\n|$)"
    )
    m = re.search(pattern, docstring, re.DOTALL)
    if m:
        return re.sub(r"\s+", " ", m.group(1).strip())
    return ""


# --- Parameter helpers ----------------------------------------------------


def infer_type(value, name=""):
    """Infer the param type for a default value, matching ParamType in TS."""
    if name and (name.startswith("func_") or name.startswith("func")):
        return "callable"
    if callable(value) and not isinstance(value, type):
        return "callable"
    if isinstance(value, bool):
        return "boolean"
    if isinstance(value, int):
        return "integer"
    if isinstance(value, float):
        return "number"
    if isinstance(value, str):
        return "string"
    if isinstance(value, (list, tuple)):
        return "array"
    return "any"


def format_default(value):
    """Format a default as a TypeScript-compatible source string (or None)."""
    if value is None or value is inspect.Parameter.empty:
        return None
    if callable(value) and not isinstance(value, type):
        return None
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, (int, float)):
        return repr(value)
    if isinstance(value, str):
        return json.dumps(value)
    if isinstance(value, (list, tuple)):
        try:
            return json.dumps(list(value))
        except Exception:
            return repr(list(value))
    if isinstance(value, type):
        return json.dumps(value.__name__)
    try:
        return repr(value)
    except Exception:
        return None


def extract_params_from_signature(cls, docstring, infer=None):
    """Extract parameters by introspecting the class __init__ signature.
    `infer(default, name)` gives the param type, `infer_type` by default."""
    infer = infer or infer_type
    out = []
    try:
        sig = inspect.signature(cls.__init__)
    except (TypeError, ValueError):
        return out
    for pname, p in sig.parameters.items():
        if pname == "self":
            continue
        if p.kind in (
            inspect.Parameter.VAR_POSITIONAL,
            inspect.Parameter.VAR_KEYWORD,
        ):
            continue
        out.append({
            "name": pname,
            "default": format_default(p.default),
            "type": infer(None if p.default is inspect.Parameter.empty else p.default, pname),
            "description": param_desc(docstring, pname),
        })
    return out


# --- Port-label normalisation --------------------------------------------


def process_port_labels(labels):
    """Normalise the `*_port_labels` value into the canonical shape:

    - None -> None (variable/unlimited ports)
    - {}   -> []   (no ports of this type)
    - dict -> sorted list of names
    - list -> the list itself
    """
    if labels is None:
        return None
    if isinstance(labels, dict):
        if not labels:
            return []
        return [name for name, _ in sorted(labels.items(), key=lambda x: x[1])]
    if isinstance(labels, (list, tuple)):
        return list(labels)
    return None


# --- Class detection (runtime needs heuristics) --------------------------


def is_block(cls):
    """Best-effort check: subclass of pathsim's Block."""
    if not inspect.isclass(cls):
        return False
    for base in cls.__mro__[1:]:
        if base.__name__ == "Block" and base.__module__.startswith("pathsim"):
            return True
    return False


def is_event(cls):
    """Best-effort check: pathsim Event subclass or *Event-named class."""
    if not inspect.isclass(cls):
        return False
    name = cls.__name__
    if name.startswith("_"):
        return False
    for base in cls.__mro__[1:]:
        if base.__name__.endswith("Event") and "pathsim" in base.__module__:
            return True
    return name.endswith("Event")


# --- Canonical extraction ------------------------------------------------


def block_icon(cls):
    """SVG icon of a block class from `cls.icon()`, None for pathsim versions
    and classes without icons."""
    icon_fn = getattr(cls, "icon", None)
    if not callable(icon_fn):
        return None
    try:
        icon = icon_fn()
    except Exception:
        return None
    return icon if isinstance(icon, str) else None


def extract_block(cls):
    """Extract canonical block metadata from a class.

    Uses `cls.info()` when available (the convention for pathsim Block
    subclasses); falls back to signature introspection otherwise.
    """
    raw_doc = cls.__doc__ or ""

    info = None
    info_fn = getattr(cls, "info", None)
    if callable(info_fn):
        try:
            info = info_fn()
        except Exception:
            info = None

    if info is not None:
        rst = (info.get("description") or raw_doc).strip()
        params = []
        for pname, meta in (info.get("parameters") or {}).items():
            default = meta.get("default") if isinstance(meta, dict) else None
            params.append({
                "name": pname,
                "default": format_default(default),
                "type": infer_type(default, pname),
                "description": param_desc(rst, pname),
            })
        return {
            "className": cls.__name__,
            "description": first_line(rst),
            "docstringHtml": rst_to_html(rst),
            "inputs": process_port_labels(info.get("input_port_labels")),
            "outputs": process_port_labels(info.get("output_port_labels")),
            "params": params,
            "icon": block_icon(cls),
        }

    # Fallback: signature introspection + class attribute port labels
    return {
        "className": cls.__name__,
        "description": first_line(raw_doc),
        "docstringHtml": rst_to_html(raw_doc),
        "inputs": process_port_labels(getattr(cls, "input_port_labels", None)),
        "outputs": process_port_labels(getattr(cls, "output_port_labels", None)),
        "params": extract_params_from_signature(cls, raw_doc),
        "icon": block_icon(cls),
    }


def infer_event_type(value, name=""):
    """Infer the param type of an event, matching EventParamType in TS."""
    if name.startswith("func") or (callable(value) and not isinstance(value, type)):
        return "callable"
    if isinstance(value, (int, float)):
        return "number"
    if isinstance(value, str):
        return "string"
    if isinstance(value, (list, tuple)) or (name.endswith("_evt") and "time" in name.lower()):
        return "array"
    return "number"


def extract_event(cls):
    """Extract canonical event metadata from a class."""
    raw_doc = cls.__doc__ or ""
    return {
        "className": cls.__name__,
        "description": first_line(raw_doc),
        "docstringHtml": rst_to_html(raw_doc),
        "params": extract_params_from_signature(cls, raw_doc, infer=infer_event_type),
    }
