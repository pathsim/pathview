/**
 * Programmatic curve sample generators for block icons.
 * Samples are in real-value domain. The IconPlot's `xRange` and `yRange`
 * props control how values map to viewBox pixels — if 0 is inside a range,
 * the corresponding axis sits at 0; otherwise at the box edge.
 */

export type Sample = [number, number];

/**
 * Geometry. The signal area (PLOT_BOX) is centred in the 96×64 viewBox; the
 * axes overshoot it by AXIS_OVERSHOOT on every side, so an icon stays visually
 * balanced no matter which axes it draws.
 */
export const PLOT_BOX = {
	x0: 14,
	x1: 82,
	y0: 14,
	y1: 50,
	get width() {
		return this.x1 - this.x0;
	},
	get height() {
		return this.y1 - this.y0;
	}
} as const;

/** How far the axes extend past the signal area. */
const AXIS_OVERSHOOT = 4;

/** Box used to draw axes — the visible "frame" of the plot. */
export const AXIS_BOX = {
	x0: PLOT_BOX.x0 - AXIS_OVERSHOOT,
	x1: PLOT_BOX.x1 + AXIS_OVERSHOOT,
	y0: PLOT_BOX.y0 - AXIS_OVERSHOOT,
	y1: PLOT_BOX.y1 + AXIS_OVERSHOOT
} as const;

export function mapX(x: number, xMin = 0, xMax = 1): number {
	const t = (x - xMin) / (xMax - xMin);
	return PLOT_BOX.x0 + t * PLOT_BOX.width;
}

export function mapY(v: number, yMin = 0, yMax = 1): number {
	const t = (v - yMin) / (yMax - yMin);
	return PLOT_BOX.y1 - t * PLOT_BOX.height;
}

export function buildPath(
	samples: Sample[],
	xMin = 0,
	xMax = 1,
	yMin = 0,
	yMax = 1
): string {
	if (samples.length === 0) return '';
	const cmds: string[] = [];
	let penDown = false;
	for (const [x, v] of samples) {
		if (!Number.isFinite(v)) {
			penDown = false;
			continue;
		}
		const px = mapX(x, xMin, xMax).toFixed(2);
		const py = mapY(v, yMin, yMax).toFixed(2);
		cmds.push(`${penDown ? 'L' : 'M'} ${px} ${py}`);
		penDown = true;
	}
	return cmds.join(' ');
}

/* --- Time-domain signals (x = t, real values) -------------------------- */

export function sineSamples(cycles = 1.5, n = 64): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		out.push([t, Math.sin(2 * Math.PI * cycles * t)]);
	}
	return out;
}

/** Square wave over whole periods, so the trace closes cleanly at both edges. */
export function squareSamples(cycles = 2): Sample[] {
	const out: Sample[] = [];
	const period = 1 / cycles;
	for (let c = 0; c < cycles; c++) {
		const t0 = c * period;
		out.push([t0, 1]);
		out.push([t0 + period / 2, 1]);
		out.push([t0 + period / 2, -1]);
		out.push([t0 + period, -1]);
		if (c < cycles - 1) out.push([t0 + period, 1]);
	}
	return out;
}

/** Triangle wave over whole periods, starting and ending at the zero crossing. */
export function triangleSamples(cycles = 2, n = 81): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		const phase = (t * cycles * 4) % 4;
		const v = phase < 1 ? phase : phase < 3 ? 2 - phase : phase - 4;
		out.push([t, v]);
	}
	return out;
}

export function pulseSamples(
	period = 0.6,
	duty = 0.5,
	t0 = 0.05,
	tRise = 0.15,
	tFall = 0.07
): Sample[] {
	const out: Sample[] = [[0, 0]];
	let t = t0;
	while (t < 1) {
		out.push([t, 0]);
		out.push([Math.min(1, t + tRise), 1]);
		const tHigh = t + period * duty;
		out.push([Math.min(1, tHigh), 1]);
		out.push([Math.min(1, tHigh + tFall), 0]);
		t += period;
	}
	out.push([1, 0]);
	return out;
}

export function stepSamples(t0 = 0.25): Sample[] {
	return [
		[0, 0],
		[t0, 0],
		[t0, 1],
		[1, 1]
	];
}

export function gaussianSamples(mu = 0.5, sigma = 0.13, n = 80): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		out.push([t, Math.exp(-((t - mu) ** 2) / (2 * sigma * sigma))]);
	}
	return out;
}

export function chirpSamples(f0 = 1, f1 = 6, n = 120): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		const k = (f1 - f0);
		const phase = 2 * Math.PI * (f0 * t + 0.5 * k * t * t);
		out.push([t, Math.sin(phase)]);
	}
	return out;
}

/** White noise — Gaussian-distributed samples (Box-Muller), normalised to ±1. */
export function whiteNoiseSamples(n = 28, seed = 5): Sample[] {
	let s = seed;
	const rand = () => {
		s = (s * 9301 + 49297) % 233280;
		return s / 233280;
	};
	const trace: number[] = [];
	for (let i = 0; i < n; i++) {
		const u1 = Math.max(1e-6, rand());
		const u2 = rand();
		trace.push(Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2));
	}
	const max = Math.max(...trace.map(Math.abs));
	return trace.map((v, i) => [i / (n - 1), (v / max) * 0.95] as Sample);
}

/** Pink-noise approximation via Voss-McCartney: sum of independent octaves,
 *  each updated at half the rate of the previous one — gives true 1/f-style
 *  noise with a visible LF trend plus HF detail. */
export function pinkNoiseSamples(n = 35, seed = 11): Sample[] {
	let s = seed;
	const rand = () => {
		s = (s * 9301 + 49297) % 233280;
		return s / 233280 - 0.5;
	};
	const octaves = 5;
	const values = new Array(octaves).fill(0);
	const counters = new Array(octaves).fill(0);
	const trace: number[] = [];
	for (let i = 0; i < n; i++) {
		let total = 0;
		for (let o = 0; o < octaves; o++) {
			if (counters[o] === 0) {
				values[o] = rand();
				counters[o] = 1 << o;
			}
			counters[o]--;
			total += values[o];
		}
		trace.push(total);
	}
	const max = Math.max(...trace.map(Math.abs));
	return trace.map((value, i) => [i / (n - 1), (value / max) * 0.9] as Sample);
}

export function constantSamples(value = 1): Sample[] {
	return [[0, value], [1, value]];
}

/** Clock source — fixed-period discrete 0/1 pulse train (sharp edges) */
export function clockSamples(period = 0.32, t0 = 0.06): Sample[] {
	const out: Sample[] = [[0, 0]];
	let t = t0;
	while (t < 1) {
		out.push([t, 0]);
		out.push([t, 1]);
		const tHigh = Math.min(1, t + period / 2);
		out.push([tHigh, 1]);
		out.push([tHigh, 0]);
		t += period;
	}
	out.push([1, 0]);
	return out;
}

/* --- Step responses ---------------------------------------------------- */

export function pt1StepSamples(T = 0.18, t0 = 0.15, n = 60): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		if (t < t0) out.push([t, 0]);
		else out.push([t, 1 - Math.exp(-(t - t0) / T)]);
	}
	return out;
}

export function pt2StepSamples(zeta = 0.25, wn = 22, t0 = 0.15, n = 100): Sample[] {
	const out: Sample[] = [];
	const wd = wn * Math.sqrt(1 - zeta * zeta);
	const phi = Math.atan2(Math.sqrt(1 - zeta * zeta), zeta);
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		if (t < t0) out.push([t, 0]);
		else {
			const tt = t - t0;
			const env = Math.exp(-zeta * wn * tt) / Math.sqrt(1 - zeta * zeta);
			out.push([t, 1 - env * Math.sin(wd * tt + phi)]);
		}
	}
	return out;
}

export function leadLagStepSamples(n = 60): Sample[] {
	const out: Sample[] = [];
	const t0 = 0.15;
	const T1 = 0.06;
	const T2 = 0.25;
	const peak = 1.4;
	const ss = 1.0;
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		if (t < t0) out.push([t, 0]);
		else {
			const tt = t - t0;
			const y = peak * Math.exp(-tt / T1) + ss * (1 - Math.exp(-tt / T2));
			out.push([t, y]);
		}
	}
	return out;
}

export function rampSamples(t0 = 0.15): Sample[] {
	return [
		[0, 0],
		[t0, 0],
		[1, 1 - t0]
	];
}

/** Delayed step — input step at t1, delayed output step at t1+τ */
export function delaySamples(t1 = 0.15, tau = 0.3): Sample[] {
	return [
		[0, 0],
		[t1 + tau, 0],
		[t1 + tau, 1],
		[1, 1]
	];
}

/** Input sine for the Delay icon — runs over the full window, one full cycle. */
export function delayInputSineSamples(cycles = 1, n = 64): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		out.push([t, Math.sin(2 * Math.PI * cycles * t)]);
	}
	return out;
}

/** Output sine for the Delay icon — flat at 0 until t1, then the same sine
 *  shifted by t1 (so it tracks the input one delay later). */
export function delayOutputSineSamples(t1 = 0.25, cycles = 1, n = 56): Sample[] {
	const out: Sample[] = [[0, 0], [t1, 0]];
	for (let i = 1; i < n; i++) {
		const t = t1 + (1 - t1) * (i / (n - 1));
		out.push([t, Math.sin(2 * Math.PI * cycles * (t - t1))]);
	}
	return out;
}

/** Differentiator step response: a sharp impulse at the step instant */
export function impulseSamples(t0 = 0.45, width = 0.04): Sample[] {
	return [
		[0, 0],
		[t0 - width, 0],
		[t0, 1],
		[t0 + width, 0],
		[1, 0]
	];
}

/* --- Bode magnitude (linear scale, 0..1) ------------------------------- */

export function butterLowpassBode(order = 4, n = 80): Sample[] {
	const out: Sample[] = [];
	const fmin = -1.2;
	const fmax = 1.2;
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		const w = Math.pow(10, fmin + t * (fmax - fmin));
		out.push([t, 1 / Math.sqrt(1 + Math.pow(w, 2 * order))]);
	}
	return out;
}

export function butterHighpassBode(order = 4, n = 80): Sample[] {
	const out: Sample[] = [];
	const fmin = -1.2;
	const fmax = 1.2;
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		const w = Math.pow(10, fmin + t * (fmax - fmin));
		out.push([t, Math.pow(w, order) / Math.sqrt(1 + Math.pow(w, 2 * order))]);
	}
	return out;
}

export function butterBandpassBode(order = 2, Q = 2, n = 100): Sample[] {
	const out: Sample[] = [];
	const fmin = -1.5;
	const fmax = 1.5;
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		const w = Math.pow(10, fmin + t * (fmax - fmin));
		const num = Math.pow(w / Q, order);
		const denom = Math.sqrt(Math.pow(1 - w * w, 2 * order) + Math.pow(w / Q, 2 * order));
		out.push([t, num / denom]);
	}
	return out;
}

export function butterBandstopBode(order = 2, Q = 2, n = 100): Sample[] {
	const out: Sample[] = [];
	const fmin = -1.5;
	const fmax = 1.5;
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		const w = Math.pow(10, fmin + t * (fmax - fmin));
		const num = Math.pow(Math.abs(1 - w * w), order);
		const denom = Math.sqrt(Math.pow(1 - w * w, 2 * order) + Math.pow(w / Q, 2 * order));
		out.push([t, num / denom]);
	}
	return out;
}

export function differentiatorBode(n = 80): Sample[] {
	// |H(jω)| = ω, normalised against ω_max so the curve fits [0, 1]
	const out: Sample[] = [];
	const fmin = -1.2;
	const fmax = 1.2;
	const wMax = Math.pow(10, fmax);
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		const w = Math.pow(10, fmin + t * (fmax - fmin));
		out.push([t, w / wMax]);
	}
	return out;
}

export function firBode(n = 80): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		const w = Math.pow(10, -1.2 + t * 2.4);
		const sinc = Math.abs(Math.sin(w * 1.2) / (w * 1.2 + 0.0001));
		const lp = 1 / Math.sqrt(1 + Math.pow(w / 1, 6));
		out.push([t, sinc * lp]);
	}
	return out;
}

/* --- Trig and power functions (input-output) -------------------------- */

export function sinFunctionSamples(n = 80): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const x = -Math.PI + (2 * Math.PI * i) / (n - 1);
		out.push([x, Math.sin(x)]);
	}
	return out;
}

export function cosFunctionSamples(n = 80): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const x = -Math.PI + (2 * Math.PI * i) / (n - 1);
		out.push([x, Math.cos(x)]);
	}
	return out;
}

/** atan2 characteristic — the arctan S-curve saturating towards ±π/2,
 *  normalised so ±π/2 maps to ±1. */
export function atan2Samples(gain = 4, n = 80): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const x = -1 + (2 * i) / (n - 1);
		out.push([x, Math.atan(x * gain) / (Math.PI / 2)]);
	}
	return out;
}

export function powSamples(exp = 2, n = 60): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const x = -1 + (2 * i) / (n - 1);
		out.push([x, Math.pow(x, exp)]);
	}
	return out;
}

/** ADC/DAC quantization staircase — input continuous, output stepped */
export function quantizerSamples(levels = 6): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < levels; i++) {
		const xL = -1 + (2 * i) / levels;
		const xR = -1 + (2 * (i + 1)) / levels;
		const y = -1 + (2 * (i + 0.5)) / levels;
		out.push([xL, y]);
		out.push([xR, y]);
	}
	return out;
}

/** Counter — staircase time series rising up */
export function counterUpSamples(steps = 6): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < steps; i++) {
		const t0 = i / steps;
		const t1 = (i + 1) / steps;
		const y = i / (steps - 1);
		out.push([t0, y]);
		out.push([t1, y]);
	}
	return out;
}

export function counterDownSamples(steps = 6): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < steps; i++) {
		const t0 = i / steps;
		const t1 = (i + 1) / steps;
		const y = 1 - i / (steps - 1);
		out.push([t0, y]);
		out.push([t1, y]);
	}
	return out;
}

/** PID step response — typical overshoot + settle */
export function pidStepSamples(t0 = 0.12, n = 100): Sample[] {
	return pt2StepSamples(0.4, 18, t0, n);
}

/** Modulo / sawtooth: y = x mod period, over a whole number of periods so no
 *  tooth is cut off at the right edge. */
export function modSamples(teeth = 3): Sample[] {
	const out: Sample[] = [];
	const period = 1 / teeth;
	for (let i = 0; i < teeth; i++) {
		const t0 = i * period;
		out.push([t0, 0]);
		out.push([t0 + period, 1]);
		if (i < teeth - 1) out.push([t0 + period, 0]);
	}
	return out;
}

/** Tangent over x ∈ [-π, π]; out-of-range points are dropped so the curve
 *  appears cropped at the plot edges instead of clamped to a flat line. */
export function tanFunctionSamples(limit = 1.55, n = 240): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const x = -Math.PI + (2 * Math.PI * i) / (n - 1);
		const y = Math.tan(x);
		if (!Number.isFinite(y) || Math.abs(y) > limit) {
			out.push([x, NaN]);
		} else {
			out.push([x, y]);
		}
	}
	return out;
}

/** 1D lookup table — pronounced S-curve through six break points */
export function lut1dSamples(): Sample[] {
	return [
		[-1, -0.6],
		[-0.5, -0.55],
		[-0.05, 0.0],
		[0.4, 0.55],
		[0.75, 0.75],
		[1, 0.78]
	];
}

/** 2D lookup table (MISO) — two distinctly different output characteristics:
 *  one monotonically rising, one non-monotonic with a hump. */
export function lut2dSamples(): Sample[] {
	return [
		// rising characteristic
		[-1, -0.7],
		[-0.3, -0.05],
		[0.4, 0.55],
		[1, 0.8],
		[0, NaN],
		// hump characteristic (rises then falls)
		[-1, -0.4],
		[-0.3, 0.3],
		[0.4, -0.05],
		[1, -0.55]
	];
}

/** Generic 2nd-order Bode magnitude — used for generic transfer-function blocks */
export function genericBode(zeta = 0.4, n = 80): Sample[] {
	const out: Sample[] = [];
	const fmin = -1.2;
	const fmax = 1.2;
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		const w = Math.pow(10, fmin + t * (fmax - fmin));
		const denom = Math.sqrt(Math.pow(1 - w * w, 2) + Math.pow(2 * zeta * w, 2));
		out.push([t, 1 / denom]);
	}
	return out;
}

/* --- Static nonlinearities (real x domain, typically [-1, 1] or [0, 1]) */

export function tanhSamples(gain = 4, n = 60): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const x = -1 + 2 * (i / (n - 1));
		out.push([x, Math.tanh(x * gain)]);
	}
	return out;
}

export function expSamples(n = 60): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		out.push([t, (Math.exp(t * 2.2) - 1) / (Math.exp(2.2) - 1)]);
	}
	return out;
}

export function logSamples(n = 60): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		out.push([t, Math.log(1 + 9 * t) / Math.log(10)]);
	}
	return out;
}

export function sqrtSamples(n = 60): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		out.push([t, Math.sqrt(t)]);
	}
	return out;
}

export function absSamples(n = 60): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const x = -1 + 2 * (i / (n - 1));
		out.push([x, Math.abs(x)]);
	}
	return out;
}

export function clipSamples(limit = 0.6): Sample[] {
	return [
		[-1, -limit],
		[-limit, -limit],
		[limit, limit],
		[1, limit]
	];
}

export function deadbandSamples(width = 0.3): Sample[] {
	return [
		[-1, -1 + width],
		[-width, 0],
		[width, 0],
		[1, 1 - width]
	];
}

export function relaySamples(threshold = 0.3): Sample[] {
	return [
		[-1, -1],
		[threshold, -1],
		[threshold, 1],
		[1, 1],
		[-threshold, 1],
		[-threshold, -1],
		[-1, -1]
	];
}

export function rateLimiterSamples(): Sample[] {
	const t0 = 0.15;
	const ramp = 0.45;
	return [
		[0, 0],
		[t0, 0],
		[t0 + ramp, 1],
		[1, 1]
	];
}

export function sampleHoldSamples(n = 6): Sample[] {
	const out: Sample[] = [];
	const samplesY = [0.1, 0.3, 0.55, 0.75, 0.55, 0.85];
	for (let i = 0; i < n; i++) {
		const t0 = i / n;
		const t1 = (i + 1) / n;
		out.push([t0, samplesY[i]]);
		out.push([t1, samplesY[i]]);
	}
	return out;
}

/** First-order hold — piecewise-linear interpolation through sample points.
 *  Same sample values as SampleHold so the two icons read as a pair. */
export function firstOrderHoldSamples(n = 6): Sample[] {
	const samplesY = [0.1, 0.3, 0.55, 0.75, 0.55, 0.85];
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		out.push([i / (n - 1), samplesY[i]]);
	}
	return out;
}

/** Backlash — closed hysteresis loop: the rising branch, then the falling one
 *  traced back, so the dead zone between them is visible as an open shape. */
export function backlashSamples(width = 0.42, gain = 0.8): Sample[] {
	return [
		// rising branch
		[-1, -gain],
		[-1 + 2 * width, -gain],
		[1, gain],
		// falling branch, traced back to the start
		[1 - 2 * width, gain],
		[-1, -gain]
	];
}

/** Discrete random draws — one value per sample instant, rendered as stems. */
export function randomStemSamples(n = 11, seed = 7): Sample[] {
	let s = seed;
	const rand = () => {
		s = (s * 9301 + 49297) % 233280;
		return s / 233280;
	};
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		out.push([(i + 0.5) / n, rand() * 1.8 - 0.9]);
	}
	return out;
}

/** Reconstructed analog ramp for the DAC icon — the smooth counterpart to the
 *  quantizer staircase. */
export function rampBipolarSamples(): Sample[] {
	return [
		[-1, -1],
		[1, 1]
	];
}

/* --- Scope-style display signals --------------------------------------- */

/** Ringing step response — the Scope trace. A decaying oscillation reads as a
 *  signal at any size and spans the screen without the noise of a superposition. */
export function scopeTrace(decay = 1.45, cycles = 3, n = 200): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		out.push([t, Math.exp(-decay * t) * Math.sin(2 * Math.PI * cycles * t)]);
	}
	return out;
}

/** Growing cosine — secondary oscilloscope channel (start at peak, amplitude grows) */
export function growingCosine(growth = 0.01, cycles = 4.5, n = 140): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		const env = Math.exp(growth * 2 * Math.PI * cycles * t);
		out.push([t, env * Math.cos(2 * Math.PI * cycles * t)]);
	}
	return out;
}

export function dampedOscillation(zeta = 0.06, cycles = 2.5, t0 = 0.05, n = 140): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		if (t < t0) out.push([t, 0]);
		else {
			const tt = t - t0;
			const env = Math.exp(-zeta * 2 * Math.PI * cycles * tt);
			out.push([t, env * Math.sin(2 * Math.PI * cycles * tt)]);
		}
	}
	return out;
}

/** Spectrum line heights — one entry per bin, rendered as bars by IconScope.
 *  Shaped like a real spectrum: a dominant fundamental with decaying harmonics
 *  sitting on a low noise floor. */
export function spectrumBars(): Sample[] {
	return [
		[0.1, 0.28],
		[0.22, 1.0],
		[0.34, 0.2],
		[0.46, 0.62],
		[0.58, 0.16],
		[0.7, 0.4],
		[0.82, 0.14],
		[0.94, 0.24]
	];
}

/** PID step response hitting an actuator limit — the flat top is the
 *  saturation the anti-windup logic deals with. */
export function antiWindupStepSamples(limit = 0.82, t0 = 0.12, n = 100): Sample[] {
	return pt2StepSamples(0.4, 18, t0, n).map(([t, v]) => [t, Math.min(v, limit)] as Sample);
}
