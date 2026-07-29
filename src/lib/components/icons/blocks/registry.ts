/**
 * Block icon registry — maps blockClass to a renderer descriptor.
 *
 * Renderer types:
 *   - 'plot':  programmatic curve with optional axes (Sources, responses, nonlinearities)
 *   - 'scope': framed plot with grid (Scope/Spectrum)
 *   - 'pz':    pole-zero map in the s-plane (zero/pole/gain blocks)
 *   - 'math':  KaTeX-rendered LaTeX (transfer functions, ODEs, operators)
 *   - 'glyph': monospace text label (PID, ADC, DAC, …)
 *   - 'svg':   raw SVG file from ./svg/<BlockClass>.svg (geometric symbols)
 *
 * Every icon shares the geometry defined in ./curves (96×64 viewBox, centred
 * PLOT_BOX, axes overshooting it by a fixed margin), so icons stay comparable
 * in weight and size when placed side by side on the canvas.
 */

import type { Sample } from './curves';
import * as C from './curves';

type AxesMode = 'none' | 'baseline' | 'yaxis' | 'cross';

export type IconDef =
	| { kind: 'plot'; samples: () => Sample[]; samplesDashed?: () => Sample[]; xRange?: [number, number]; yRange?: [number, number]; axes?: AxesMode; markers?: boolean; decoration?: 'arrow-up' | 'arrow-down'; asymptotes?: number[]; badge?: string; stems?: boolean }
	| { kind: 'pz'; poles?: Array<[number, number]>; zeros?: Array<[number, number]> }
	| { kind: 'scope'; samples: () => Sample[]; samples2?: () => Sample[]; yRange?: [number, number]; gridX?: number; gridY?: number; bars?: boolean }
	| { kind: 'surface'; fn?: (u: number, v: number) => number; rows?: number; cols?: number }
	| { kind: 'math'; latex: string }
	| { kind: 'glyph'; text: string; size?: number }
	| { kind: 'svg'; name: string };

const X_BIPOLAR: [number, number] = [-1.05, 1.05];
const Y_BIPOLAR: [number, number] = [-1.1, 1.1];
const Y_TIGHT: [number, number] = [-0.7, 0.7];
const PT2_RANGE: [number, number] = [0, 1.5];
const LEADLAG_RANGE: [number, number] = [0, 1.6];
const TRIG_X_RANGE: [number, number] = [-Math.PI * 1.05, Math.PI * 1.05];
const GENERIC_BODE_Y: [number, number] = [0, 1.6];

export const iconRegistry: Record<string, IconDef> = {
	/* --- Sources (time-domain signals) --- */
	Constant: { kind: 'plot', samples: () => C.constantSamples() },
	StepSource: { kind: 'plot', samples: () => C.stepSamples() },
	SinusoidalSource: { kind: 'plot', samples: () => C.sineSamples(), yRange: Y_BIPOLAR },
	SquareWaveSource: { kind: 'plot', samples: () => C.squareSamples(), yRange: Y_BIPOLAR },
	TriangleWaveSource: { kind: 'plot', samples: () => C.triangleSamples(), yRange: Y_BIPOLAR },
	PulseSource: { kind: 'plot', samples: () => C.pulseSamples() },
	GaussianPulseSource: { kind: 'plot', samples: () => C.gaussianSamples() },
	ChirpPhaseNoiseSource: { kind: 'plot', samples: () => C.chirpSamples(), yRange: Y_BIPOLAR },
	WhiteNoise: { kind: 'plot', samples: () => C.whiteNoiseSamples(), yRange: Y_BIPOLAR },
	PinkNoise: { kind: 'plot', samples: () => C.pinkNoiseSamples(), yRange: Y_BIPOLAR },
	// Discrete draws, not a continuous trace — keeps it apart from the noise sources.
	RandomNumberGenerator: { kind: 'plot', samples: () => C.randomStemSamples(), yRange: Y_BIPOLAR, stems: true },
	ClockSource: { kind: 'plot', samples: () => C.clockSamples() },
	Source: { kind: 'math', latex: 'f(t)' },

	/* --- Step responses (Dynamic) --- */
	PT1: { kind: 'plot', samples: () => C.pt1StepSamples() },
	PT2: { kind: 'plot', samples: () => C.pt2StepSamples(), yRange: PT2_RANGE },
	LeadLag: { kind: 'plot', samples: () => C.leadLagStepSamples(), yRange: LEADLAG_RANGE },
	Integrator: { kind: 'plot', samples: () => C.rampSamples() },
	Differentiator: { kind: 'plot', samples: () => C.differentiatorBode() },
	Delay: {
		kind: 'plot',
		samples: () => C.delayOutputSineSamples(),
		samplesDashed: () => C.delayInputSineSamples(),
		yRange: Y_BIPOLAR
	},
	PID: { kind: 'plot', samples: () => C.pidStepSamples(), yRange: PT2_RANGE },
	// Saturating response — visibly different from the plain PID overshoot.
	AntiWindupPID: { kind: 'plot', samples: () => C.antiWindupStepSamples(), yRange: PT2_RANGE },

	/* --- Bode magnitude (Filters / generic transfer functions) --- */
	ButterworthLowpassFilter: { kind: 'plot', samples: () => C.butterLowpassBode() },
	ButterworthHighpassFilter: { kind: 'plot', samples: () => C.butterHighpassBode() },
	ButterworthBandpassFilter: { kind: 'plot', samples: () => C.butterBandpassBode() },
	ButterworthBandstopFilter: { kind: 'plot', samples: () => C.butterBandstopBode() },
	FIR: { kind: 'plot', samples: () => C.firBode() },
	TransferFunctionNumDen: { kind: 'plot', samples: () => C.genericBode(0.35), yRange: GENERIC_BODE_Y },
	// Parametrised by zeros/poles/gain — shown as the pole-zero map rather than
	// the same Bode magnitude as the coefficient form.
	TransferFunctionZPG: { kind: 'pz' },

	/* --- Static nonlinearities (input-output, x in real domain) --- */
	Tanh: { kind: 'plot', samples: () => C.tanhSamples(), xRange: X_BIPOLAR, yRange: Y_BIPOLAR },
	Exp: { kind: 'plot', samples: () => C.expSamples() },
	Log: { kind: 'plot', samples: () => C.logSamples() },
	// Same curve shape as Log — the base is what distinguishes the two.
	Log10: { kind: 'plot', samples: () => C.logSamples(), badge: '10' },
	Sqrt: { kind: 'plot', samples: () => C.sqrtSamples() },
	// The V sits on the zero line, so drawing the y-axis through its vertex too
	// would turn the icon into a four-armed fan — baseline only.
	Abs: { kind: 'plot', samples: () => C.absSamples(), xRange: X_BIPOLAR, axes: 'baseline' },
	Clip: { kind: 'plot', samples: () => C.clipSamples(), xRange: X_BIPOLAR, yRange: Y_TIGHT },
	// The dead zone lies exactly on the x-axis — drawing it would hide the very
	// feature the icon is about.
	Deadband: { kind: 'plot', samples: () => C.deadbandSamples(), xRange: X_BIPOLAR, yRange: Y_TIGHT, axes: 'yaxis' },
	// Axis-parallel hysteresis loop — with axes drawn through it the icon reads
	// as a hash mark, so the loop stands on its own.
	Relay: { kind: 'plot', samples: () => C.relaySamples(0.45), xRange: X_BIPOLAR, yRange: Y_BIPOLAR, axes: 'none' },
	RateLimiter: { kind: 'plot', samples: () => C.rateLimiterSamples() },
	SampleHold: { kind: 'plot', samples: () => C.sampleHoldSamples() },
	Backlash: { kind: 'plot', samples: () => C.backlashSamples(), xRange: X_BIPOLAR, yRange: Y_BIPOLAR },

	/* --- Trig / power --- */
	Sin: { kind: 'plot', samples: () => C.sinFunctionSamples(), xRange: TRIG_X_RANGE, yRange: Y_BIPOLAR },
	Cos: { kind: 'plot', samples: () => C.cosFunctionSamples(), xRange: TRIG_X_RANGE, yRange: Y_BIPOLAR },
	Tan: {
		kind: 'plot',
		samples: () => C.tanFunctionSamples(),
		xRange: TRIG_X_RANGE,
		yRange: [-1.6, 1.6],
		asymptotes: [-Math.PI / 2, Math.PI / 2]
	},
	Pow: { kind: 'plot', samples: () => C.powSamples(2), xRange: X_BIPOLAR },
	Mod: { kind: 'plot', samples: () => C.modSamples() },
	Atan2: { kind: 'plot', samples: () => C.atan2Samples(), xRange: X_BIPOLAR, yRange: [-1.25, 1.25] },

	/* --- Quantisation / counters ---
	 * ADC and DAC are mirror images: the ghost trace is the input, the solid
	 * one the output — continuous in, stepped out for ADC and vice versa. */
	ADC: {
		kind: 'plot',
		samples: () => C.quantizerSamples(),
		samplesDashed: () => C.rampBipolarSamples(),
		xRange: X_BIPOLAR,
		yRange: Y_BIPOLAR
	},
	DAC: {
		kind: 'plot',
		samples: () => C.rampBipolarSamples(),
		samplesDashed: () => C.quantizerSamples(),
		xRange: X_BIPOLAR,
		yRange: Y_BIPOLAR
	},
	Counter: { kind: 'plot', samples: () => C.counterUpSamples() },
	CounterUp: { kind: 'plot', samples: () => C.counterUpSamples(), decoration: 'arrow-up' },
	CounterDown: { kind: 'plot', samples: () => C.counterDownSamples(), decoration: 'arrow-down' },

	/* --- Lookup tables --- */
	LUT1D: { kind: 'plot', samples: () => C.lut1dSamples(), xRange: X_BIPOLAR, yRange: Y_BIPOLAR, markers: true },
	LUT: { kind: 'surface', fn: (u, v) => -0.18 * (u + v) + 0.3 * u * v },

	/* --- Math (KaTeX) ---
	 * Kept to a single short line wherever possible: at canvas scale a block is
	 * 80×40 px, so a two-line formula degrades into unreadable texture. */
	ODE: { kind: 'math', latex: '\\dot{x} = f(x, u, t)' },
	StateSpace: { kind: 'math', latex: '\\dot{x} = Ax{+}Bu' },
	// Keeps the output equation ODE does not have — abbreviated so two lines
	// still scale up rather than turning to texture.
	DynamicalSystem: { kind: 'math', latex: '\\begin{aligned}\\dot{x} &= f\\\\ y &= g\\end{aligned}' },
	DynamicalFunction: { kind: 'math', latex: 'f(u, t)' },
	Function: { kind: 'math', latex: 'f(u)' },
	Polynomial: { kind: 'math', latex: '\\sum c_k\\,u^{k}' },

	/* --- Discrete-time blocks --- */
	FirstOrderHold: { kind: 'plot', samples: () => C.firstOrderHoldSamples() },
	DiscreteIntegrator: { kind: 'math', latex: '\\dfrac{T}{z-1}' },
	DiscreteDerivative: { kind: 'math', latex: '\\dfrac{z-1}{T\\,z}' },
	DiscreteStateSpace: { kind: 'math', latex: 'x_{k+1} = Ax_k{+}Bu_k' },
	DiscreteTransferFunction: { kind: 'math', latex: '\\dfrac{B(z)}{A(z)}' },
	TappedDelay: { kind: 'svg', name: 'TappedDelay' },

	/* --- Geometric SVGs (kept as files) --- */
	Adder: { kind: 'svg', name: 'Adder' },
	Multiplier: { kind: 'svg', name: 'Multiplier' },
	Amplifier: { kind: 'svg', name: 'Amplifier' },
	Rescale: { kind: 'svg', name: 'Amplifier' },
	Divider: { kind: 'svg', name: 'Divider' },
	LogicAnd: { kind: 'svg', name: 'LogicAnd' },
	LogicOr: { kind: 'svg', name: 'LogicOr' },
	LogicNot: { kind: 'svg', name: 'LogicNot' },
	Equal: { kind: 'svg', name: 'Equal' },
	GreaterThan: { kind: 'svg', name: 'GreaterThan' },
	LessThan: { kind: 'svg', name: 'LessThan' },
	Alias: { kind: 'svg', name: 'Alias' },
	Wrapper: { kind: 'svg', name: 'Wrapper' },
	Switch: { kind: 'svg', name: 'Switch' },
	Subsystem: { kind: 'svg', name: 'Subsystem' },
	Interface: { kind: 'svg', name: 'Interface' },
	Scope: {
		kind: 'scope',
		samples: () => C.superposedSignal(),
		yRange: [-1.15, 1.15],
		gridX: 4,
		gridY: 2
	},
	Spectrum: {
		kind: 'scope',
		samples: () => C.spectrumBars(),
		yRange: [0, 1.12],
		gridX: 0,
		gridY: 2,
		bars: true
	}
};

export function getIconDef(blockClass: string | undefined): IconDef | undefined {
	return blockClass ? iconRegistry[blockClass] : undefined;
}

export function hasBlockIcon(blockClass: string | undefined): boolean {
	return !!blockClass && blockClass in iconRegistry;
}
