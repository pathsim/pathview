/**
 * Plotly.js configuration utilities
 * Uses CSS variables from app.css for consistent theming
 */

import type { LineStyle, MarkerStyle, AxisScale } from '$lib/stores/plotSettings';

/** Style options for trace rendering */
export interface TraceStyleOptions {
	lineStyle?: LineStyle | null; // null = no line
	markerStyle?: MarkerStyle | null; // null = no markers
}

/** Style options for layout */
export interface LayoutStyleOptions {
	xAxisScale?: AxisScale;
	yAxisScale?: AxisScale;
}

/** Map our line style names to Plotly dash values */
const LINE_DASH_MAP: Record<LineStyle, Plotly.Dash> = {
	solid: 'solid',
	dash: 'dash',
	dot: 'dot'
};

/** Map our line style names to SVG stroke-dasharray values (for preview rendering) */
export const LINE_DASH_SVG: Record<LineStyle, string> = {
	solid: '',
	dash: '6,3',
	dot: '2,2'
};

/** Map our marker style names to Plotly symbol values */
const MARKER_SYMBOL_MAP: Record<MarkerStyle, string> = {
	circle: 'circle',
	square: 'square',
	'triangle-up': 'triangle-up'
};

/** Resolved style options with non-null defaults applied */
interface ResolvedStyle {
	lineStyle: LineStyle | null;
	markerStyle: MarkerStyle | null;
	showLines: boolean;
	showMarkers: boolean;
	mode: 'lines' | 'markers' | 'lines+markers';
}

/** Resolve style options to concrete values with defaults */
function resolveStyleOptions(styleOptions?: TraceStyleOptions): ResolvedStyle {
	// null means no line/marker, undefined means use default
	const lineStyle = styleOptions?.lineStyle === undefined ? 'solid' : styleOptions.lineStyle;
	const markerStyle = styleOptions?.markerStyle === undefined ? null : styleOptions.markerStyle;
	const showLines = lineStyle !== null;
	const showMarkers = markerStyle !== null;

	// Determine mode based on line and marker settings
	let mode: 'lines' | 'markers' | 'lines+markers';
	if (showLines && showMarkers) {
		mode = 'lines+markers';
	} else if (showMarkers) {
		mode = 'markers';
	} else {
		mode = 'lines';
	}

	return { lineStyle, markerStyle, showLines, showMarkers, mode };
}

/** Apply line config to trace if lines are shown */
function applyLineConfig(
	trace: Partial<Plotly.ScatterData>,
	style: ResolvedStyle,
	color: string,
	width: number = 1.5
): void {
	if (style.showLines && style.lineStyle) {
		trace.line = {
			color,
			width,
			dash: LINE_DASH_MAP[style.lineStyle]
		};
	}
}

/** Apply marker config to trace if markers are shown */
function applyMarkerConfig(
	trace: Partial<Plotly.ScatterData>,
	style: ResolvedStyle,
	color: string,
	size: number = 6
): void {
	if (style.showMarkers && style.markerStyle) {
		trace.marker = {
			symbol: MARKER_SYMBOL_MAP[style.markerStyle],
			size,
			color
		};
		// Allow markers to extend beyond axis without expanding range
		trace.cliponaxis = false;
	}
}

/**
 * Read a CSS variable value from the document root
 * Automatically reflects current theme (light/dark)
 */
function getCssVar(name: string): string {
	return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

/**
 * Build base layout using CSS variables
 * Reads current theme automatically from computed styles
 */
export function getBaseLayout(): Partial<Plotly.Layout> {
	const textMuted = getCssVar('--text-muted');
	const textDisabled = getCssVar('--text-disabled');
	const surfaceRaised = getCssVar('--surface-raised');
	const border = getCssVar('--border');
	const accent = getCssVar('--accent');

	return {
		paper_bgcolor: 'transparent',
		plot_bgcolor: 'transparent',
		font: {
			color: textMuted,
			family: 'Inter, system-ui, sans-serif',
			size: 11
		},
		margin: {
			l: 60,
			r: 15,
			t: 10,
			b: 45
		},
		xaxis: {
			gridcolor: border,
			gridwidth: 0.5,
			zeroline: false,
			linecolor: border,
			linewidth: 1.5,
			tickfont: { size: 10, color: textDisabled },
			title: { standoff: 10 }
		},
		yaxis: {
			gridcolor: border,
			gridwidth: 0.5,
			zeroline: false,
			linecolor: border,
			linewidth: 1.5,
			tickfont: { size: 10, color: textDisabled },
			title: { standoff: 5 }
		},
		legend: {
			bgcolor: surfaceRaised,
			bordercolor: border,
			borderwidth: 1,
			font: { size: 10, color: textMuted }
		},
		modebar: {
			bgcolor: 'transparent',
			color: textDisabled,
			activecolor: accent
		},
		hoverlabel: {
			bgcolor: surfaceRaised,
			bordercolor: border,
			font: { color: textMuted, size: 11 }
		}
	};
}

// Scope plot (time-domain) layout
export function getScopeLayout(
	title: string = 'Scope',
	showLegend: boolean = false,
	styleOptions?: LayoutStyleOptions
): Partial<Plotly.Layout> {
	const baseLayout = getBaseLayout();
	// Format y-axis label as "Scope: Name" or just "Scope" if no custom name
	const yAxisLabel = title.toLowerCase().startsWith('scope') ? title : `Scope: ${title}`;

	const xAxisScale = styleOptions?.xAxisScale ?? 'linear';
	const yAxisScale = styleOptions?.yAxisScale ?? 'linear';

	return {
		...baseLayout,
		xaxis: {
			...baseLayout.xaxis,
			title: { text: 'Time (s)', font: { size: 11 }, standoff: 10 },
			type: xAxisScale
		},
		yaxis: {
			...baseLayout.yaxis,
			title: { text: yAxisLabel, font: { size: 11 }, standoff: 5 },
			type: yAxisScale
		},
		showlegend: showLegend,
		legend: {
			...baseLayout.legend,
			x: 0.01,
			xanchor: 'left',
			y: 0.99,
			yanchor: 'top'
		},
		hovermode: 'closest'
	};
}

// Spectrum plot (frequency-domain) layout
// Uses index-based x-axis with frequency tick labels for equal spacing
export function getSpectrumLayout(
	title: string = 'Spectrum',
	frequencies?: number[],
	showLegend: boolean = false,
	styleOptions?: LayoutStyleOptions
): Partial<Plotly.Layout> {
	const baseLayout = getBaseLayout();

	// Generate tick labels from frequency values if provided
	let tickvals: number[] | undefined;
	let ticktext: string[] | undefined;

	if (frequencies && frequencies.length > 0) {
		// Pick ~6 evenly spaced tick positions
		const numTicks = Math.min(6, frequencies.length);
		const step = Math.max(1, Math.floor((frequencies.length - 1) / (numTicks - 1)));
		tickvals = [];
		ticktext = [];

		for (let i = 0; i < frequencies.length; i += step) {
			tickvals.push(i);
			ticktext.push(formatFrequency(frequencies[i]));
		}
		// Always include the last point
		if (tickvals[tickvals.length - 1] !== frequencies.length - 1) {
			tickvals.push(frequencies.length - 1);
			ticktext.push(formatFrequency(frequencies[frequencies.length - 1]));
		}
	}

	// Format y-axis label as "Spectrum: Name" or just "Spectrum" if no custom name
	const yAxisLabel = title.toLowerCase().startsWith('spectrum') ? title : `Spectrum: ${title}`;

	// Spectrum defaults to log scale for y-axis if not specified
	const xAxisScale = styleOptions?.xAxisScale ?? 'linear';
	const yAxisScale = styleOptions?.yAxisScale ?? 'log';

	return {
		...baseLayout,
		xaxis: {
			...baseLayout.xaxis,
			title: { text: 'Frequency (Hz)', font: { size: 11 }, standoff: 10 },
			tickvals,
			ticktext,
			tickangle: 0,
			type: xAxisScale
		},
		yaxis: {
			...baseLayout.yaxis,
			title: { text: yAxisLabel, font: { size: 11 }, standoff: 5 },
			type: yAxisScale
		},
		showlegend: showLegend,
		legend: {
			...baseLayout.legend,
			x: 0.01,
			xanchor: 'left',
			y: 0.99,
			yanchor: 'top'
		},
		hovermode: 'closest'
	};
}

// Format frequency for display (compact notation)
function formatFrequency(freq: number): string {
	if (freq >= 1e6) return (freq / 1e6).toFixed(1) + 'M';
	if (freq >= 1e3) return (freq / 1e3).toFixed(1) + 'k';
	if (freq >= 1) return freq.toFixed(1);
	return freq.toExponential(1);
}

// Signal colors for traces (after accent) - matches node color palette
const TRACE_COLORS = [
	'#E57373', // Red
	'#81C784', // Green
	'#64B5F6', // Blue
	'#BA68C8', // Purple
	'#4DD0E1', // Cyan
	'#FFB74D', // Orange
	'#F06292', // Pink
	'#4DB6AC', // Teal
	'#90A4AE'  // Grey
];

/**
 * Get signal color for a trace index
 * First trace uses accent color, last uses edge color
 */
export function getSignalColor(index: number): string {
	if (index === 0) {
		return getCssVar('--accent');
	}
	const traceIndex = (index - 1) % (TRACE_COLORS.length + 1);
	if (traceIndex < TRACE_COLORS.length) {
		return TRACE_COLORS[traceIndex];
	}
	return getCssVar('--edge');
}

// Legacy export for backwards compatibility
export const SIGNAL_COLORS = [
	'#0070C0', // PathSim blue (accent)
	...TRACE_COLORS
];

// Common plot configuration
export const plotConfig: Partial<Plotly.Config> = {
	responsive: true,
	displaylogo: false,
	displayModeBar: 'hover',
	modeBarButtonsToRemove: ['lasso2d', 'select2d'],
	modeBarButtonsToAdd: [],
	toImageButtonOptions: {
		format: 'svg',
		filename: 'pathview_plot',
		height: 600,
		width: 1000,
		scale: 2
	},
	scrollZoom: true
};

// Always use SVG scatter - WebGL (scattergl) causes warnings during streaming updates
// SVG performance is sufficient for typical simulation datasets
const TRACE_TYPE = 'scatter' as const;

// Create scope trace
export function createScopeTrace(
	time: number[],
	signal: number[],
	index: number,
	name?: string,
	styleOptions?: TraceStyleOptions
): Partial<Plotly.ScatterData> {
	const traceName = name || `port ${index}`;
	const color = getSignalColor(index);
	const style = resolveStyleOptions(styleOptions);

	const trace: Partial<Plotly.ScatterData> = {
		x: time,
		y: signal,
		type: TRACE_TYPE,
		mode: style.mode,
		name: traceName,
		legendgroup: `signal-${index}`,
		hovertemplate: `<b style="color:${color}">${traceName}</b><br>t = %{x:.4g} s<br>y = %{y:.4g}<extra></extra>`
	};

	applyLineConfig(trace, style, color);
	applyMarkerConfig(trace, style, color);

	return trace;
}

// Create ghost scope trace (previous run) with reduced opacity
export function createGhostScopeTrace(
	time: number[],
	signal: number[],
	signalIndex: number,
	ghostIndex: number,
	totalGhosts: number,
	styleOptions?: TraceStyleOptions
): Partial<Plotly.ScatterData> {
	// Linear opacity: 50% for most recent ghost, 20% for oldest
	const opacity = totalGhosts === 1
		? 0.5
		: 0.5 - (ghostIndex / (totalGhosts - 1)) * 0.3;
	const color = getSignalColor(signalIndex);
	const style = resolveStyleOptions(styleOptions);

	const trace: Partial<Plotly.ScatterData> = {
		x: time,
		y: signal,
		type: TRACE_TYPE,
		mode: style.mode,
		showlegend: false,
		hoverinfo: 'skip',
		legendgroup: `signal-${signalIndex}`,
		opacity
	};

	applyLineConfig(trace, style, color, 1); // Thinner line for ghosts
	applyMarkerConfig(trace, style, color, 5); // Smaller markers for ghosts

	return trace;
}

// Create spectrum trace - uses indices for equal spacing
export function createSpectrumTrace(
	frequency: number[],
	magnitude: number[],
	index: number,
	name?: string,
	styleOptions?: TraceStyleOptions
): Partial<Plotly.ScatterData> {
	const traceName = name || `port ${index}`;
	const color = getSignalColor(index);
	// Use indices for x-axis (equal spacing)
	const indices = Array.from({ length: magnitude.length }, (_, i) => i);
	const style = resolveStyleOptions(styleOptions);

	const trace: Partial<Plotly.ScatterData> = {
		x: indices,
		y: magnitude,
		type: TRACE_TYPE,
		mode: style.mode,
		name: traceName,
		legendgroup: `signal-${index}`,
		// Store frequency in customdata for hover
		customdata: frequency,
		hovertemplate: `<b style="color:${color}">${traceName}</b><br>f = %{customdata:.2f} Hz<br>mag = %{y:.4g}<extra></extra>`
	};

	applyLineConfig(trace, style, color);
	applyMarkerConfig(trace, style, color);

	return trace;
}

// Create ghost spectrum trace (previous run) with reduced opacity
export function createGhostSpectrumTrace(
	frequency: number[],
	magnitude: number[],
	signalIndex: number,
	ghostIndex: number,
	totalGhosts: number,
	styleOptions?: TraceStyleOptions
): Partial<Plotly.ScatterData> {
	// Linear opacity: 50% for most recent ghost, 20% for oldest
	const opacity = totalGhosts === 1
		? 0.5
		: 0.5 - (ghostIndex / (totalGhosts - 1)) * 0.3;
	const color = getSignalColor(signalIndex);
	// Use indices for x-axis (equal spacing)
	const indices = Array.from({ length: magnitude.length }, (_, i) => i);
	const style = resolveStyleOptions(styleOptions);

	const trace: Partial<Plotly.ScatterData> = {
		x: indices,
		y: magnitude,
		type: TRACE_TYPE,
		mode: style.mode,
		showlegend: false,
		hoverinfo: 'skip',
		legendgroup: `signal-${signalIndex}`,
		opacity
	};

	applyLineConfig(trace, style, color, 1); // Thinner line for ghosts
	applyMarkerConfig(trace, style, color, 5); // Smaller markers for ghosts

	return trace;
}
