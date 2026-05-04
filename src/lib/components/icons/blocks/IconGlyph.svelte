<script lang="ts">
	interface Props {
		text: string;
		/** Approximate fraction of viewBox height for the glyph */
		size?: number;
		bold?: boolean;
	}

	let { text, size = 0.45, bold = true }: Props = $props();

	const VIEW_W = 96;
	const VIEW_H = 64;
	const fontSize = $derived(VIEW_H * size);
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {VIEW_W} {VIEW_H}">
	<text
		x={VIEW_W / 2}
		y={VIEW_H / 2}
		text-anchor="middle"
		dominant-baseline="central"
		fill="currentColor"
		stroke="none"
		font-family="ui-monospace, 'JetBrains Mono', 'SF Mono', Menlo, monospace"
		font-size={fontSize}
		font-weight={bold ? 700 : 500}
		letter-spacing="-1"
	>{text}</text>
</svg>

<style>
	svg {
		width: 100%;
		height: 100%;
		display: block;
		color: currentColor;
	}
</style>
