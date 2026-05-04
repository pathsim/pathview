<script lang="ts">
	interface Props {
		rows?: number;
		cols?: number;
		/** f(u, v) returning height in roughly [-1, 1] */
		fn?: (u: number, v: number) => number;
	}

	let {
		rows = 5,
		cols = 5,
		fn = (u: number, v: number) => 0.5 * (u * u - v * v)
	}: Props = $props();

	const CX = 48;
	const CY = 36;
	const SCALE = 17;
	const Y_TILT = 0.45;
	const H_SCALE = 11;

	function project(u: number, v: number, h: number): [number, number] {
		const x = CX + (u - v) * SCALE;
		const y = CY + (u + v) * SCALE * Y_TILT - h * H_SCALE;
		return [x, y];
	}

	type Point = [number, number];

	const grid = $derived.by<Point[][]>(() => {
		const g: Point[][] = [];
		for (let i = 0; i < rows; i++) {
			const v = -1 + (2 * i) / (rows - 1);
			const row: Point[] = [];
			for (let j = 0; j < cols; j++) {
				const u = -1 + (2 * j) / (cols - 1);
				row.push(project(u, v, fn(u, v)));
			}
			g.push(row);
		}
		return g;
	});

	function pathFromRows(g: Point[][]): string {
		const parts: string[] = [];
		for (let i = 0; i < g.length; i++) {
			parts.push(`M ${g[i][0][0].toFixed(2)} ${g[i][0][1].toFixed(2)}`);
			for (let j = 1; j < g[i].length; j++) {
				parts.push(`L ${g[i][j][0].toFixed(2)} ${g[i][j][1].toFixed(2)}`);
			}
		}
		for (let j = 0; j < g[0].length; j++) {
			parts.push(`M ${g[0][j][0].toFixed(2)} ${g[0][j][1].toFixed(2)}`);
			for (let i = 1; i < g.length; i++) {
				parts.push(`L ${g[i][j][0].toFixed(2)} ${g[i][j][1].toFixed(2)}`);
			}
		}
		return parts.join(' ');
	}

	const innerPath = $derived(pathFromRows(grid));

	const boundaryPath = $derived.by(() => {
		if (grid.length === 0) return '';
		const r = rows - 1;
		const c = cols - 1;
		const pts: Point[] = [];
		for (let j = 0; j <= c; j++) pts.push(grid[0][j]);
		for (let i = 1; i <= r; i++) pts.push(grid[i][c]);
		for (let j = c - 1; j >= 0; j--) pts.push(grid[r][j]);
		for (let i = r - 1; i >= 1; i--) pts.push(grid[i][0]);
		return (
			pts
				.map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`)
				.join(' ') + ' Z'
		);
	});
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor"
	stroke-linecap="round" stroke-linejoin="round">
	<path d={innerPath} stroke-width="2" />
	<path d={boundaryPath} stroke-width="2" />
</svg>

<style>
	svg {
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
