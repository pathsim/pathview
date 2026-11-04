<!--
	Block icon from the block class, `Block.icon()` in pathsim and toolboxes.

	The SVG is used as a CSS mask over a `currentColor` fill, so the icon takes
	the node color and the SVG markup of a toolbox is never inserted into the
	document. Opacity in the SVG is kept, colors in it are not.
-->
<script lang="ts">
	interface Props {
		icon: string;
		title?: string;
	}

	let { icon, title }: Props = $props();

	const mask = $derived(`url("data:image/svg+xml,${encodeURIComponent(icon)}")`);
</script>

<span class="block-icon" style:--icon-mask={mask} role={title ? 'img' : undefined} aria-label={title}></span>

<style>
	.block-icon {
		display: block;
		width: 100%;
		height: 100%;
		background-color: currentColor;
		-webkit-mask: var(--icon-mask) center / contain no-repeat;
		mask: var(--icon-mask) center / contain no-repeat;
	}
</style>
