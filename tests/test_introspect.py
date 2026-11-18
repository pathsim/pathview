"""Block introspection: ports that are carriers are buses of their channels,
ports that depend on parameters come from the block instance."""

import sys
from pathlib import Path

from pathsim.blocks._block import Block
from pathsim.utils.carrier import Carrier, Vector

sys.path.insert(0, str(Path(__file__).parent.parent / "scripts"))
from pathview_introspect import extract_block, instance_ports  # noqa: E402


class Heater(Block):
    """Stream in and out, heat duty as a single channel."""

    input_port_labels = {"stream": Carrier(keys=("F", "T")), "Q": 2}
    output_port_labels = {"x": Vector(2, start=3), "stream": Carrier(keys=("F", "T", "P"))}


def test_carrier_ports():
    block = extract_block(Heater)

    #ports in the order of their first channel
    assert block["inputs"] == ["stream", "Q"]
    assert block["outputs"] == ["stream", "x"]

    #carriers as buses of their channels, by key or by position for a vector
    signals = lambda *names: [{"name": n, "structure": None} for n in names]
    assert block["inputBuses"] == {"stream": signals("F", "T")}
    assert block["outputBuses"] == {"stream": signals("F", "T", "P"), "x": signals("0", "1")}


def test_plain_ports():
    class Gain(Block):
        input_port_labels = {"in": 0}
        output_port_labels = None

    block = extract_block(Gain)
    assert block["inputs"] == ["in"]
    assert block["outputs"] is None
    assert block["inputBuses"] == {}
    assert block["outputBuses"] == {}


# ports that depend on parameters ======================================================

class _ClassOrInstance:
    """info() on the class and on an instance, as pathsim's Block reports it."""

    def __init__(self, func):
        self.func = func

    def __get__(self, obj, cls=None):
        return self.func.__get__(cls if obj is None else obj)


class Fan:
    """One output per weight, like pathsim's Splitter."""

    input_port_labels = {"in": 0}
    output_port_labels = None
    port_parameters = ("weights",)

    def __init__(self, weights=(1.0, 1.0)):
        self.output_port_labels = {f"out_{i}": i for i in range(len(weights))}

    @_ClassOrInstance
    def info(self):
        return {
            "description": "Fan out.",
            "input_port_labels": self.input_port_labels,
            "output_port_labels": self.output_port_labels,
            "port_parameters": self.port_parameters,
            "parameters": {"weights": {"default": (1.0, 1.0)}},
        }


def test_ports_from_parameters():
    #the type starts with the ports of the default parameters
    block = extract_block(Fan)
    assert block["portParameters"] == ["weights"]
    assert block["outputs"] == ["out_0", "out_1"]

    #an instance reports its own ports
    assert instance_ports(Fan((0.2, 0.3, 0.5)))["outputs"] == ["out_0", "out_1", "out_2"]


def test_ports_of_instances_unknown():
    #a pathsim whose info() does not report instances: no instance ports
    class Old(Fan):
        info = classmethod(lambda cls: {"input_port_labels": cls.input_port_labels, "output_port_labels": None})

    assert instance_ports(Old()) is None
    assert extract_block(Heater)["portParameters"] == []
