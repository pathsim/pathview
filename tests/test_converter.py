"""Converter: generated scripts address labeled ports by label and build in pathsim."""

import sys
from pathlib import Path

import numpy as np
from pathsim.blocks._block import Block
from pathsim.utils.carrier import Carrier

from pathview.converter import generate_python, load_registry, port_key, with_port_structure

sys.path.insert(0, str(Path(__file__).parent.parent / "scripts"))
from pathview_introspect import extract_block  # noqa: E402

REGISTRY = load_registry(Path(__file__).parent.parent / "pathview" / "data" / "registry.json")


def node(node_id, node_type, inputs=(), outputs=(), **params):
    """A node as saved before ports carried their structure: ports with display names only."""
    return {
        "id": node_id, "type": node_type, "name": node_id, "params": params,
        "inputs": [{"name": name} for name in inputs], "outputs": [{"name": name} for name in outputs],
    }


def wire(source, source_port, target, target_port):
    return {
        "id": f"{source}-{target}-{target_port}",
        "sourceNodeId": source, "sourcePortIndex": source_port,
        "targetNodeId": target, "targetPortIndex": target_port,
    }


def test_port_key():
    #labeled ports by the label they carry, whatever their display name, others by index
    atan = {"inputs": [{"name": "y", "key": "a"}, {"name": "denominator", "key": "b"}], "outputs": [{"name": "out 0", "key": "y"}]}
    assert port_key(atan, "inputs", 1) == "b"
    assert port_key(atan, "outputs", 0) == "y"
    assert port_key({"inputs": [{"name": "in 0"}, {"name": "in 1"}, {"name": "in 2"}]}, "inputs", 2) == 2
    assert port_key({}, "inputs", 0) == 0


def test_port_structure_from_registry():
    #saved display names do not tell the key, the registry does, by index
    atan = with_port_structure(node("angle", "Atan2", inputs=["in 0", "in 1"], outputs=["out 0"]), REGISTRY)
    assert [p["key"] for p in atan["inputs"]] == ["a", "b"]
    assert atan["outputs"][0] == {"name": "out 0", "key": "y"}

    #a key a port carries stays, variable ports and unknown types get none
    kept = with_port_structure({**node("c", "Constant"), "outputs": [{"name": "out", "key": "kept"}]}, REGISTRY)
    assert kept["outputs"][0]["key"] == "kept"
    assert "key" not in with_port_structure(node("s", "Scope", inputs=["in 0"]), REGISTRY)["inputs"][0]
    assert "key" not in with_port_structure(node("u", "Unknown", inputs=["in 0"]), REGISTRY)["inputs"][0]

    #nodes inside subsystems as well
    sub = {**node("sub", "Subsystem"), "graph": {"nodes": [node("c", "Constant", outputs=["out 0"])], "connections": []}}
    assert with_port_structure(sub, REGISTRY)["graph"]["nodes"][0]["outputs"][0]["key"] == "out"


def test_script_builds():
    pvm = {"version": "1.0.0", "graph": {
        "nodes": [node("x", "Constant", outputs=["out 0"], value="1.0"), node("y", "Constant", outputs=["out 0"], value="2.0"),
                  node("angle", "Atan2", inputs=["in 0", "in 1"], outputs=["out 0"]), node("scope", "Scope", inputs=["in 0"])],
        "connections": [wire("x", 0, "angle", 1), wire("y", 0, "angle", 0), wire("angle", 0, "scope", 0)],
    }}
    code = generate_python(pvm, REGISTRY)
    assert 'Connection(x["out"], angle["b"])' in code
    assert 'Connection(angle["y"], scope[0])' in code

    #pathsim resolves every port reference of the script
    namespace = {"__name__": "converted"}
    exec(compile(code, "converted.py", "exec"), namespace)
    sim = namespace["sim"]
    sim.run(0.01)
    assert namespace["angle"].inputs["b"] == 1.0


# carrier ports, introspected like a toolbox block ======================================

KEYS = ("F", "T", "P")


class Stream(Block):
    output_port_labels = {"out": Carrier(keys=KEYS)}

    def update(self, t):
        self.outputs["out"] = [1.0, 2.0, 3.0]


class Tank(Block):
    input_port_labels = {"in": Carrier(keys=KEYS), "Q": 3}


def carrier_registry():
    """The bundled registry with the carrier blocks of this module."""
    blocks = dict(REGISTRY["blocks"])
    for cls in (Stream, Tank):
        block = extract_block(cls)
        blocks[cls.__name__] = {
            "blockClass": cls.__name__, "importPath": __name__, "params": [],
            **{key: block[key] for key in ("inputs", "outputs", "inputBuses", "outputBuses")},
        }
    return {**REGISTRY, "blocks": blocks}


def test_carrier_script_builds():
    pvm = {"version": "1.0.0", "graph": {
        "nodes": [
            {**node("st", "Stream"), "outputs": [{"name": "out"}]},
            {**node("tk", "Tank"), "inputs": [{"name": "in"}, {"name": "Q"}]},
            {**node("sel", "BusSelector", signals=["T"]), "inputs": [{"name": "in 0"}], "outputs": [{"name": "T"}]},
            node("q", "Constant", outputs=["out 0"], value="4.0"), node("scope", "Scope", inputs=["in 0"]),
        ],
        "connections": [
            wire("st", 0, "tk", 0), wire("q", 0, "tk", 1),
            wire("st", 0, "sel", 0), wire("sel", 0, "scope", 0),
        ],
    }}
    code = generate_python(pvm, carrier_registry())
    assert 'Connection(st["out"], tk["in"])' in code
    assert 'Connection(st["out"]["T"], scope[0])' in code
    assert 'Connection(q["out"], tk["Q"])' in code

    namespace = {"__name__": "converted"}
    exec(compile(code, "converted.py", "exec"), namespace)
    namespace["sim"].run(0.01)
    np.testing.assert_array_equal(namespace["tk"].inputs["in"], [1.0, 2.0, 3.0])
    assert namespace["tk"].inputs["Q"] == 4.0
    assert namespace["scope"].inputs[0] == 2.0
