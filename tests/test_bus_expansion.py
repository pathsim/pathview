"""Bus expansion: the Python converter resolves bus blocks like the editor does."""

import json
from pathlib import Path

import pytest

from pathview.buses import expand_buses, is_bus_block
from pathview.converter import generate_python, load_registry

FIXTURES = json.loads((Path(__file__).parent / "fixtures" / "bus_expansion.json").read_text())
REGISTRY_PATH = Path(__file__).parent.parent / "pathview" / "data" / "registry.json"


REGISTRY = FIXTURES["registry"]


def _endpoint(connection, side):
    channel = connection.get(f"{side}Channel")
    port = f"{connection[f'{side}NodeId']}:{connection[f'{side}PortIndex']}"
    return port if channel is None else f"{port}[{channel}]"


def _wiring(connections):
    return sorted(f"{_endpoint(c, 'source')}>{_endpoint(c, 'target')}" for c in connections)


def _levels(nodes, connections, path=""):
    """Wiring per level, keyed by subsystem ID path."""
    result = {path: _wiring(connections)}
    for node in nodes:
        graph = node.get("graph")
        if graph:
            child = f"{path}/{node['id']}" if path else node["id"]
            result.update(_levels(graph.get("nodes", []), graph.get("connections", []), child))
    return result


def _any_bus_block(nodes):
    return any(
        is_bus_block(n) or (bool(n.get("graph")) and _any_bus_block(n["graph"].get("nodes", [])))
        for n in nodes
    )


@pytest.mark.parametrize("scenario", FIXTURES["scenarios"], ids=lambda s: s["name"])
def test_expansion_matches_fixture(scenario):
    nodes, connections = expand_buses(scenario["nodes"], scenario["connections"], REGISTRY)
    expected = {key: sorted(value) for key, value in scenario["expected"].items()}
    assert _levels(nodes, connections) == expected
    assert not _any_bus_block(nodes)


def test_model_without_buses_is_unchanged():
    scenario = next(s for s in FIXTURES["scenarios"] if "without buses" in s["name"])
    nodes, connections = expand_buses(scenario["nodes"], scenario["connections"], REGISTRY)
    assert nodes is scenario["nodes"]
    assert connections is scenario["connections"]


def test_converter_generates_no_bus_blocks():
    scenario = next(s for s in FIXTURES["scenarios"] if s["name"] == "bus into a subsystem")
    pvm = {"version": "1.0.0", "graph": {"nodes": scenario["nodes"], "connections": scenario["connections"]}}
    for node in pvm["graph"]["nodes"]:
        node.setdefault("name", node["id"])
        node.setdefault("params", {})
        for child in (node.get("graph") or {}).get("nodes", []):
            child.setdefault("name", child["id"])
            child.setdefault("params", {})
    code = generate_python(pvm, load_registry(REGISTRY_PATH))
    assert "BusCreator" not in code
    assert "BusSelector" not in code
