"""Block introspection: ports that are carriers keep their channel layout."""

import sys
from pathlib import Path

from pathsim.blocks._block import Block
from pathsim.utils.carrier import Carrier, Vector

sys.path.insert(0, str(Path(__file__).parent.parent / "scripts"))
from pathview_introspect import extract_block  # noqa: E402


class Heater(Block):
    """Stream in and out, heat duty as a single channel."""

    input_port_labels = {"stream": Carrier(keys=("F", "T")), "Q": 2}
    output_port_labels = {"x": Vector(2, start=3), "stream": Carrier(keys=("F", "T", "P"))}


def test_carrier_ports():
    block = extract_block(Heater)

    #ports in the order of their first channel
    assert block["inputs"] == ["stream", "Q"]
    assert block["outputs"] == ["stream", "x"]

    #channel layout of the carriers, plain channels have none
    assert block["inputCarriers"] == {"stream": {"start": 0, "size": 2, "keys": ["F", "T"]}}
    assert block["outputCarriers"] == {
        "stream": {"start": 0, "size": 3, "keys": ["F", "T", "P"]},
        "x": {"start": 3, "size": 2, "keys": []},
    }


def test_plain_ports():
    class Gain(Block):
        input_port_labels = {"in": 0}
        output_port_labels = None

    block = extract_block(Gain)
    assert block["inputs"] == ["in"]
    assert block["outputs"] is None
    assert block["inputCarriers"] == {}
    assert block["outputCarriers"] == {}
