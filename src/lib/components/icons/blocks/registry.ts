/**
 * Block icon registry — maps blockClass to a renderer descriptor.
 *
 * Renderer types:
 *   - 'plot':  programmatic curve with optional axes (Sources, responses, nonlinearities)
 *   - 'scope': framed plot with grid (Scope/Spectrum)
 *   - 'math':  KaTeX-rendered LaTeX (transfer functions, ODEs, operators)
 *   - 'glyph': monospace text label (PID, ADC, DAC, …)
 *   - 'svg':   raw SVG file from ./svg/<BlockClass>.svg (geometric symbols)
 */

import type { Sample } from './curves';
import * as C from './curves';

type AxesMode = 'none' | 'baseline' | 'cross';

export type IconDef =
	| { kind: 'plot'; samples: () => Sample[]; xRange?: [number, number]; yRange?: [number, number]; axes?: AxesMode; markers?: boolean; decoration?: 'arrow-up' | 'arrow-down' }
	| { kind: 'scope'; samples: () => Sample[]; yRange?: [number, number]; gridX?: number; gridY?: number }
	| { kind: 'surface'; fn?: (u: number, v: number) => number; rows?: number; cols?: number }
	| { kind: 'math'; latex: string; fit?: number }
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
	RandomNumberGenerator: { kind: 'plot', samples: () => C.whiteNoiseSamples(16, 13), yRange: Y_BIPOLAR },
	ClockSource: { kind: 'plot', samples: () => C.clockSamples() },
	Source: { kind: 'math', latex: 'f(t)' },

	/* --- Step responses (Dynamic) --- */
	PT1: { kind: 'plot', samples: () => C.pt1StepSamples() },
	PT2: { kind: 'plot', samples: () => C.pt2StepSamples(), yRange: PT2_RANGE },
	LeadLag: { kind: 'plot', samples: () => C.leadLagStepSamples(), yRange: LEADLAG_RANGE },
	Integrator: { kind: 'plot', samples: () => C.rampSamples() },
	Differentiator: { kind: 'plot', samples: () => C.differentiatorBode() },
	Delay: { kind: 'plot', samples: () => C.delaySamples() },
	PID: { kind: 'plot', samples: () => C.pidStepSamples(), yRange: PT2_RANGE },
	AntiWindupPID: { kind: 'plot', samples: () => C.pt1StepSamples(0.12, 0.12) },

	/* --- Bode magnitude (Filters / generic transfer functions) --- */
	ButterworthLowpassFilter: { kind: 'plot', samples: () => C.butterLowpassBode() },
	ButterworthHighpassFilter: { kind: 'plot', samples: () => C.butterHighpassBode() },
	ButterworthBandpassFilter: { kind: 'plot', samples: () => C.butterBandpassBode() },
	ButterworthBandstopFilter: { kind: 'plot', samples: () => C.butterBandstopBode() },
	FIR: { kind: 'plot', samples: () => C.firBode() },
	TransferFunctionNumDen: { kind: 'plot', samples: () => C.genericBode(0.35), yRange: GENERIC_BODE_Y },
	TransferFunctionZPG: { kind: 'plot', samples: () => C.genericBode(0.35), yRange: GENERIC_BODE_Y },

	/* --- Static nonlinearities (input-output, x in real domain) --- */
	Tanh: { kind: 'plot', samples: () => C.tanhSamples(), xRange: X_BIPOLAR, yRange: Y_BIPOLAR },
	Exp: { kind: 'plot', samples: () => C.expSamples() },
	Log: { kind: 'plot', samples: () => C.logSamples() },
	Log10: { kind: 'plot', samples: () => C.logSamples() },
	Sqrt: { kind: 'plot', samples: () => C.sqrtSamples() },
	Abs: { kind: 'plot', samples: () => C.absSamples(), xRange: X_BIPOLAR },
	Clip: { kind: 'plot', samples: () => C.clipSamples(), xRange: X_BIPOLAR, yRange: Y_TIGHT },
	Deadband: { kind: 'plot', samples: () => C.deadbandSamples(), xRange: X_BIPOLAR, yRange: Y_TIGHT },
	Relay: { kind: 'plot', samples: () => C.relaySamples(), xRange: X_BIPOLAR, yRange: Y_BIPOLAR },
	RateLimiter: { kind: 'plot', samples: () => C.rateLimiterSamples() },
	SampleHold: { kind: 'plot', samples: () => C.sampleHoldSamples() },
	Backlash: { kind: 'plot', samples: () => C.backlashSamples(), xRange: X_BIPOLAR, yRange: Y_BIPOLAR },

	/* --- Trig / power --- */
	Sin: { kind: 'plot', samples: () => C.sinFunctionSamples(), xRange: TRIG_X_RANGE, yRange: Y_BIPOLAR },
	Cos: { kind: 'plot', samples: () => C.cosFunctionSamples(), xRange: TRIG_X_RANGE, yRange: Y_BIPOLAR },
	Tan: { kind: 'plot', samples: () => C.tanFunctionSamples(), xRange: TRIG_X_RANGE, yRange: [-1.6, 1.6] },
	Pow: { kind: 'plot', samples: () => C.powSamples(2), xRange: X_BIPOLAR },
	Mod: { kind: 'plot', samples: () => C.modSamples() },

	/* --- Quantisation / counters --- */
	ADC: { kind: 'plot', samples: () => C.quantizerSamples(), xRange: X_BIPOLAR, yRange: Y_BIPOLAR },
	DAC: { kind: 'plot', samples: () => C.quantizerSamples(), xRange: X_BIPOLAR, yRange: Y_BIPOLAR },
	Counter: { kind: 'plot', samples: () => C.counterUpSamples() },
	CounterUp: { kind: 'plot', samples: () => C.counterUpSamples(), decoration: 'arrow-up' },
	CounterDown: { kind: 'plot', samples: () => C.counterUpSamples(), decoration: 'arrow-down' },

	/* --- Lookup tables --- */
	LUT1D: { kind: 'plot', samples: () => C.lut1dSamples(), xRange: X_BIPOLAR, yRange: Y_BIPOLAR, markers: true },
	LUT: { kind: 'surface', fn: (u, v) => -0.18 * (u + v) + 0.3 * u * v },

	/* --- Math (KaTeX) --- */
	ODE: { kind: 'math', latex: '\\dot{x} = f(x, u, t)' },
	StateSpace: { kind: 'math', latex: '\\begin{aligned}\\dot{x} &= Ax{+}Bu\\\\ y &= Cx{+}Du\\end{aligned}' },
	DynamicalSystem: { kind: 'math', latex: '\\begin{aligned}\\dot{x} &= f(x, u, t)\\\\ y &= g(x, u, t)\\end{aligned}' },
	DynamicalFunction: { kind: 'math', latex: 'f(u, t)' },
	Function: { kind: 'math', latex: 'f(u)' },

	/* --- Geometric SVGs (kept as files) --- */
	Adder: { kind: 'svg', name: 'Adder' },
	Multiplier: { kind: 'svg', name: 'Multiplier' },
	Amplifier: { kind: 'svg', name: 'Amplifier' },
	Rescale: { kind: 'svg', name: 'Amplifier' },
	LogicAnd: { kind: 'svg', name: 'LogicAnd' },
	LogicOr: { kind: 'svg', name: 'LogicOr' },
	LogicNot: { kind: 'svg', name: 'LogicNot' },
	Switch: { kind: 'svg', name: 'Switch' },
	Subsystem: { kind: 'svg', name: 'Subsystem' },
	Scope: { kind: 'scope', samples: () => C.dampedOscillation(), yRange: [-1.05, 1.05], gridX: 0, gridY: 0 },
	Spectrum: { kind: 'scope', samples: () => C.spectrumBars(), yRange: [0, 1], gridX: 0, gridY: 0 }
};

export function getIconDef(blockClass: string | undefined): IconDef | undefined {
	return blockClass ? iconRegistry[blockClass] : undefined;
}

export function hasBlockIcon(blockClass: string | undefined): boolean {
	return !!blockClass && blockClass in iconRegistry;
}
