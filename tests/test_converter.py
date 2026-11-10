"""Converter: generated scripts address labeled ports by label and build in pathsim."""

from pathlib import Path

from pathview.converter import generate_python, load_registry, port_key

REGISTRY = load_registry(Path(__file__).parent.parent / "pathview" / "data" / "registry.json")


def node(node_id, node_type, **params):
    return {"id": node_id, "type": node_type, "name": node_id, "params": params}


def wire(source, source_port, target, target_port):
    return {
        "id": f"{source}-{target}-{target_port}",
        "sourceNodeId": source, "sourcePortIndex": source_port,
        "targetNodeId": target, "targetPortIndex": target_port,
    }


def test_port_key():
    #labeled ports by label, variable ports by index
    assert port_key(REGISTRY, "Atan2", "inputs", 1) == "b"
    assert port_key(REGISTRY, "Atan2", "outputs", 0) == "y"
    assert port_key(REGISTRY, "Scope", "inputs", 2) == 2
    assert port_key(REGISTRY, "Unknown", "inputs", 0) == 0


def test_script_builds():
    pvm = {"version": "1.0.0", "graph": {
        "nodes": [node("x", "Constant", value="1.0"), node("y", "Constant", value="2.0"),
                  node("angle", "Atan2"), node("scope", "Scope")],
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
