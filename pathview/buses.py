"""Buses: virtual Bus Creator and Bus Selector blocks.

A Bus Creator bundles its input signals into one bus signal, a Bus Selector
picks signals out of a bus by name. Both exist only in the editor. Before code
generation the model is rewritten without them: every picked signal is wired
directly from its source, and a subsystem port carrying a bus becomes one port
index per signal in the bus. Subsystem and Interface have no fixed port count
in pathsim, so only the port indices of connections change.

A block port that is a pathsim carrier is a bus of its channels: a carrier
output is a bus source, a carrier input takes a bus with the same signals. A
single channel of a carrier port is wired by its channel position.

Mirrors src/lib/bus/expand.ts; tests/fixtures/bus_expansion.json keeps both
implementations in agreement.
"""

from __future__ import annotations

from dataclasses import dataclass, field

BUS_CREATOR = "BusCreator"
BUS_SELECTOR = "BusSelector"
SUBSYSTEM = "Subsystem"
INTERFACE = "Interface"
SEPARATOR = "."

# A signal structure is None for a plain signal, else a list of {"name", "structure"} elements


def port_bus(registry: dict, node: dict, direction: str, index: int):
    """Signals of a block port that is a carrier, None for a plain port. The
    direction is "inputs" or "outputs", as in the registry."""
    block = registry["blocks"].get(node.get("type", "")) or {}
    names = block.get(direction) or []
    buses = block.get("inputBuses" if direction == "inputs" else "outputBuses") or {}
    return buses.get(names[index]) if index < len(names) else None


def is_bus_block(node: dict) -> bool:
    return node.get("type") in (BUS_CREATOR, BUS_SELECTOR)


def selected_signals(node: dict) -> list[str]:
    """Signal paths a Bus Selector picks, one per output."""
    value = (node.get("params") or {}).get("signals")
    return [str(v) for v in value] if isinstance(value, list) else []


def signal_leaves(structure) -> list[str]:
    """Leaf signal paths of a structure; a plain signal has the single empty path."""
    if structure is None:
        return [""]
    leaves = []
    for element in structure:
        for path in signal_leaves(element["structure"]):
            leaves.append(f"{element['name']}{SEPARATOR}{path}" if path else element["name"])
    return leaves


def element_at(structure, path: str):
    """Structure of the element at a dotted signal path, and whether it exists."""
    current = structure
    found = False
    for name in path.split(SEPARATOR):
        match = next((e["structure"] for e in (current or []) if e["name"] == name), _MISSING)
        if match is _MISSING:
            return False, None
        current = match
        found = True
    return found, current


_MISSING = object()


def contains_buses(nodes: list[dict], registry: dict) -> bool:
    """Whether a model has buses: bus blocks or carrier ports, at any level."""
    def carrier(node):
        return any(
            port_bus(registry, node, direction, i)
            for direction in ("inputs", "outputs")
            for i in range(len(node.get(direction, [])))
        )
    return any(
        is_bus_block(n) or carrier(n) or (bool(n.get("graph")) and contains_buses(n["graph"].get("nodes", []), registry))
        for n in nodes
    )


def _is_plain_block(node: dict) -> bool:
    """Blocks that wiring passes through unchanged: neither bus blocks nor subsystem boundaries."""
    return not is_bus_block(node) and node.get("type") not in (SUBSYSTEM, INTERFACE)


@dataclass(eq=False)
class BusLevel:
    """One graph level: the root graph or the graph inside a subsystem."""

    id: int
    node_list: list[dict]
    nodes: dict[str, dict]
    connections: list[dict]
    incoming: dict[str, dict]
    parent: tuple[BusLevel, dict] | None
    children: dict[str, BusLevel] = field(default_factory=dict)


class BusModel:
    """Signal structures of a whole model, following wires through bus blocks and subsystems."""

    def __init__(self, nodes: list[dict], connections: list[dict], registry: dict):
        self.registry = registry
        self._next_id = 0
        self._memo: dict[str, object] = {}
        self._visiting: set[str] = set()
        self.root = self._build_level(nodes, connections, None)

    def _build_level(self, node_list, connections, parent) -> BusLevel:
        level = BusLevel(
            id=self._next_id,
            node_list=node_list,
            nodes={n["id"]: n for n in node_list},
            connections=connections,
            incoming={f"{c['targetNodeId']}:{c['targetPortIndex']}": c for c in connections},
            parent=parent,
        )
        self._next_id += 1
        for node in node_list:
            graph = node.get("graph")
            if node.get("type") == SUBSYSTEM and graph:
                level.children[node["id"]] = self._build_level(
                    graph.get("nodes", []), graph.get("connections", []), (level, node)
                )
        return level

    def level_at(self, path: list[str]) -> BusLevel | None:
        level = self.root
        for node_id in path:
            level = level.children.get(node_id)
            if level is None:
                return None
        return level

    def _source_port_name(self, level: BusLevel, connection: dict) -> str | None:
        source = level.nodes.get(connection["sourceNodeId"])
        port = connection["sourcePortIndex"]
        if source is not None and source.get("type") == INTERFACE and level.parent:
            ports = level.parent[1].get("inputs", [])
        else:
            ports = (source or {}).get("outputs", [])
        return ports[port].get("name") if port < len(ports) else None

    def _element_names(self, level: BusLevel, creator: dict) -> list[str]:
        """Wire label, else source port name, else the creator's input name; unique."""
        used: set[str] = set()
        names = []
        for i, port in enumerate(creator.get("inputs", [])):
            connection = level.incoming.get(f"{creator['id']}:{i}")
            label = (connection.get("label") or "").strip() if connection else ""
            source_name = self._source_port_name(level, connection) if connection else None
            raw = label or source_name or port.get("name") or f"signal {i}"
            base = "_".join(raw.split(SEPARATOR))
            name = base
            n = 2
            while name in used:
                name = f"{base}_{n}"
                n += 1
            used.add(name)
            names.append(name)
        return names

    def structure_in(self, level: BusLevel, node_id: str, port: int):
        connection = level.incoming.get(f"{node_id}:{port}")
        if connection is None:
            return None
        return self.structure_out(level, connection["sourceNodeId"], connection["sourcePortIndex"])

    def structure_out(self, level: BusLevel, node_id: str, port: int):
        key = f"{level.id}:{node_id}:{port}"
        if key in self._memo:
            return self._memo[key]
        # A wire loop through bus blocks has no defined structure
        if key in self._visiting:
            return None
        self._visiting.add(key)
        structure = self._compute_out(level, node_id, port)
        self._visiting.discard(key)
        self._memo[key] = structure
        return structure

    def _compute_out(self, level: BusLevel, node_id: str, port: int):
        node = level.nodes.get(node_id)
        if node is None:
            return None
        kind = node.get("type")
        if kind == BUS_CREATOR:
            return [
                {"name": name, "structure": self.structure_in(level, node_id, i)}
                for i, name in enumerate(self._element_names(level, node))
            ]
        if kind == BUS_SELECTOR:
            paths = selected_signals(node)
            if port >= len(paths) or not paths[port]:
                return None
            return element_at(self.structure_in(level, node_id, 0), paths[port])[1]
        if kind == SUBSYSTEM:
            inner = level.children.get(node_id)
            iface = next((n for n in inner.node_list if n.get("type") == INTERFACE), None) if inner else None
            return self.structure_in(inner, iface["id"], port) if iface else None
        if kind == INTERFACE:
            if not level.parent:
                return None
            outer, subsystem = level.parent
            return self.structure_in(outer, subsystem["id"], port)
        return port_bus(self.registry, node, "outputs", port)


def expand_buses(nodes: list[dict], connections: list[dict], registry: dict) -> tuple[list[dict], list[dict]]:
    """The model without bus blocks, for code generation.

    Models without buses are returned unchanged. Connections that carry
    several signals are split, with IDs suffixed by the signal index. A wire
    between two plain blocks stays as it is, also from carrier to carrier.
    Wiring that cannot be resolved, such as a bus into a plain block or a
    signal missing from a bus, is left out.
    """
    if not contains_buses(nodes, registry):
        return nodes, connections
    return _Expansion(BusModel(nodes, connections, registry)).expand()


class _Expansion:
    def __init__(self, model: BusModel):
        self.model = model
        self._offsets: dict[str, list[int]] = {}
        self._resolving: set[str] = set()

    @staticmethod
    def _count(structure) -> int:
        return len(signal_leaves(structure))

    @staticmethod
    def _range(node_id: str, offset: int, length: int) -> list[tuple[str, int, int | None] | None]:
        return [(node_id, offset + j, None) for j in range(length)]

    def _channels(self, node: dict, direction: str, port: int):
        """A port of a plain block: all channels of a carrier, else the port itself."""
        carrier = port_bus(self.model.registry, node, direction, port)
        if carrier is None:
            return [(node["id"], port, None)]
        return [(node["id"], port, channel) for channel in range(len(carrier))]

    def _offsets_of(self, level: BusLevel, subsystem: dict, direction: str) -> list[int]:
        key = f"{level.id}:{subsystem['id']}:{direction}"
        if key in self._offsets:
            return self._offsets[key]
        ports = len(subsystem.get("inputs" if direction == "in" else "outputs", []))
        result = []
        total = 0
        for i in range(ports):
            result.append(total)
            if direction == "in":
                total += self._count(self.model.structure_in(level, subsystem["id"], i))
            else:
                total += self._count(self.model.structure_out(level, subsystem["id"], i))
        self._offsets[key] = result
        return result

    def _offset(self, level: BusLevel, subsystem: dict, direction: str, port: int) -> int:
        offsets = self._offsets_of(level, subsystem, direction)
        return offsets[port] if port < len(offsets) else port

    def _resolve_in(self, level: BusLevel, node_id: str, port: int):
        connection = level.incoming.get(f"{node_id}:{port}")
        if connection is None:
            return [None]
        return self._resolve_out(level, connection["sourceNodeId"], connection["sourcePortIndex"])

    def _resolve_out(self, level: BusLevel, node_id: str, port: int):
        """Real source of every signal leaving an output, in leaf order."""
        key = f"{level.id}:{node_id}:{port}"
        if key in self._resolving:
            return [None]
        self._resolving.add(key)
        endpoints = self._compute_resolve_out(level, node_id, port)
        self._resolving.discard(key)
        return endpoints

    def _compute_resolve_out(self, level: BusLevel, node_id: str, port: int):
        model = self.model
        node = level.nodes.get(node_id)
        if node is None:
            return [None]
        kind = node.get("type")
        if kind == BUS_CREATOR:
            return [e for i in range(len(node.get("inputs", []))) for e in self._resolve_in(level, node_id, i)]
        if kind == BUS_SELECTOR:
            paths = selected_signals(node)
            path = paths[port] if port < len(paths) else ""
            everything = self._resolve_in(level, node_id, 0)
            leaves = signal_leaves(model.structure_in(level, node_id, 0))
            picked = []
            if path:
                for i, leaf in enumerate(leaves):
                    if leaf == path or leaf.startswith(path + SEPARATOR):
                        picked.append(everything[i] if i < len(everything) else None)
            return picked or [None]
        if kind == SUBSYSTEM:
            return self._range(
                node_id, self._offset(level, node, "out", port), self._count(model.structure_out(level, node_id, port))
            )
        if kind == INTERFACE:
            if not level.parent:
                return [(node_id, port, None)]
            outer, subsystem = level.parent
            return self._range(
                node_id,
                self._offset(outer, subsystem, "in", port),
                self._count(model.structure_in(outer, subsystem["id"], port)),
            )
        return self._channels(node, "outputs", port)

    def _input_slots(self, level: BusLevel, node: dict, port: int):
        """Expanded input slots a connection into a port lands on; bus blocks take none."""
        model = self.model
        kind = node.get("type")
        if kind in (BUS_CREATOR, BUS_SELECTOR):
            return []
        if kind == SUBSYSTEM:
            return self._range(
                node["id"], self._offset(level, node, "in", port), self._count(model.structure_in(level, node["id"], port))
            )
        if kind == INTERFACE:
            if not level.parent:
                return [(node["id"], port, None)]
            outer, subsystem = level.parent
            return self._range(
                node["id"],
                self._offset(outer, subsystem, "out", port),
                self._count(model.structure_out(outer, subsystem["id"], port)),
            )
        return self._channels(node, "inputs", port)

    def expand(self) -> tuple[list[dict], list[dict]]:
        return self._expand_level(self.model.root)

    def _expand_level(self, level: BusLevel) -> tuple[list[dict], list[dict]]:
        nodes = []
        for node in level.node_list:
            if is_bus_block(node):
                continue
            inner = level.children.get(node["id"])
            if inner is not None and node.get("graph"):
                child_nodes, child_connections = self._expand_level(inner)
                nodes.append({**node, "graph": {**node["graph"], "nodes": child_nodes, "connections": child_connections}})
            else:
                nodes.append(node)

        connections = []
        for connection in level.connections:
            target = level.nodes.get(connection["targetNodeId"])
            source = level.nodes.get(connection["sourceNodeId"])
            if target is None or source is None or (_is_plain_block(source) and _is_plain_block(target)):
                connections.append(connection)
                continue
            targets = self._input_slots(level, target, connection["targetPortIndex"])
            if not targets:
                continue
            sources = self._resolve_out(level, connection["sourceNodeId"], connection["sourcePortIndex"])
            if len(sources) != len(targets):
                continue
            for i, (endpoint, slot) in enumerate(zip(sources, targets)):
                if endpoint is None or slot is None:
                    continue
                expanded = {
                    **connection,
                    "id": connection["id"] if len(sources) == 1 else f"{connection['id']}{SEPARATOR}{i}",
                    "sourceNodeId": endpoint[0],
                    "sourcePortIndex": endpoint[1],
                    "targetNodeId": slot[0],
                    "targetPortIndex": slot[1],
                }
                if endpoint[2] is not None:
                    expanded["sourceChannel"] = endpoint[2]
                if slot[2] is not None:
                    expanded["targetChannel"] = slot[2]
                connections.append(expanded)
        return nodes, connections
