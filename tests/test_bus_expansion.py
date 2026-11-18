"""Bus expansion: the Python converter resolves bus blocks like the editor does."""

import json
from pathlib import Path

import pytest

from pathsim import Connection
from pathsim.blocks import Constant
from pathsim.blocks._block import Block
from pathsim.utils.carrier import Carrier, Vector

from pathview.buses import SEPARATOR, channel_key, expand_buses, is_bus_block
from pathview.converter import generate_python, load_registry, port_reference, with_port_structure

FIXTURES = json.loads((Path(__file__).parent / "fixtures" / "bus_expansion.json").read_text())
REGISTRY_PATH = Path(__file__).parent.parent / "pathview" / "data" / "registry.json"


REGISTRY = FIXTURES["registry"]


def _load(scenario):
    """A scenario as a saved file is loaded: its ports get their structure from the registry."""
    return [with_port_structure(n, REGISTRY) for n in scenario["nodes"]], scenario["connections"]


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
    nodes, connections = expand_buses(*_load(scenario))
    expected = {key: sorted(value) for key, value in scenario["expected"].items()}
    assert _levels(nodes, connections) == expected
    assert not _any_bus_block(nodes)


def test_model_without_buses_is_unchanged():
    scenario = next(s for s in FIXTURES["scenarios"] if "without buses" in s["name"])
    loaded, wires = _load(scenario)
    nodes, connections = expand_buses(loaded, wires)
    assert nodes is loaded
    assert connections is wires


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


# wires into carrier ports, checked by pathsim ==========================================

WIRING = FIXTURES["wiring"]


def _labels(names, buses):
    """Port labels of a fixture block type: a carrier with keys, a vector, or a single channel."""
    labels, start = {}, 0
    for name in names:
        bus = buses.get(name)
        if bus is None:
            labels[name], start = start, start + 1
            continue
        keys = [channel_key(bus, i) for i in range(len(bus))]
        labels[name] = Vector(len(bus), start) if all(k is None for k in keys) else Carrier(start, keys=keys)
        start += len(bus)
    return labels


def _pathsim_block(node):
    block = REGISTRY["blocks"].get(node["type"])
    if block is None:
        return Constant()
    cls = type(node["type"], (Block,), {
        "input_port_labels": _labels(block["inputs"], block.get("inputBuses", {})),
        "output_port_labels": _labels(block["outputs"], block.get("outputBuses", {})),
    })
    return cls()


def _pathsim_accepts(wire):
    """Whether pathsim builds the connections the expansion makes of a wire."""
    nodes, connections = expand_buses(*_load(WIRING))
    by_id = {n["id"]: n for n in nodes}
    blocks = {n["id"]: _pathsim_block(n) for n in nodes}
    expanded = [c for c in connections if c["id"] == wire or c["id"].startswith(wire + SEPARATOR)]
    #the expansion leaves out a wire whose signals do not meet the channels one to one
    if not expanded:
        return False
    try:
        for c in expanded:
            source = port_reference(c["sourceNodeId"], by_id[c["sourceNodeId"]], "outputs", c["sourcePortIndex"], c.get("sourceChannel"))
            target = port_reference(c["targetNodeId"], by_id[c["targetNodeId"]], "inputs", c["targetPortIndex"], c.get("targetChannel"))
            Connection(eval(source, {}, blocks), eval(target, {}, blocks))
    except ValueError:
        return False
    return True


@pytest.mark.parametrize("case", WIRING["cases"], ids=lambda c: c["name"])
def test_wiring_verdict_is_pathsims(case):
    assert _pathsim_accepts(case["wire"]) == case["accepted"]
