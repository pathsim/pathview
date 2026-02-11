"""PathView Server — local Flask backend for PathView."""

try:
    from importlib.metadata import version
    __version__ = version("pathview")
except Exception:
    __version__ = "0.5.0"  # fallback for editable installs / dev
