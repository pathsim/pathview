/**
 * Programmatic curve sample generators for block icons.
 * Samples are in real-value domain. The IconPlot's `xRange` and `yRange`
 * props control how values map to viewBox pixels — if 0 is inside a range,
 * the corresponding axis sits at 0; otherwise at the box edge.
 */

export type Sample = [number, number];

/** Box used to draw axes — the visible "frame" of the plot. */
export const AXIS_BOX = {
	x0: 12,
	x1: 88,
	y0: 8,
	y1: 56
} as const;

/** Inset between axes box and the actual signal area, gives axes headroom. */
const SIGNAL_INSET = 8;

/** Box used to map sample values into pixels — strictly inside AXIS_BOX. */
export const PLOT_BOX = {
	x0: AXIS_BOX.x0 + SIGNAL_INSET / 2,
	x1: AXIS_BOX.x1 - SIGNAL_INSET,
	y0: AXIS_BOX.y0 + SIGNAL_INSET,
	y1: AXIS_BOX.y1 - SIGNAL_INSET / 2,
	get width() {
		return this.x1 - this.x0;
	},
	get height() {
		return this.y1 - this.y0;
	}
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

export function squareSamples(cycles = 1.5): Sample[] {
	const out: Sample[] = [];
	const period = 1 / cycles;
	let t = 0;
	out.push([0, 1]);
	while (t < 1) {
		const tHigh = Math.min(1, t + period / 2);
		out.push([tHigh, 1]);
		out.push([tHigh, -1]);
		const tLow = Math.min(1, t + period);
		out.push([tLow, -1]);
		if (tLow < 1) {
			out.push([tLow, 1]);
		}
		t += period;
	}
	return out;
}

export function triangleSamples(cycles = 1.5, n = 80): Sample[] {
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		const phase = (t * cycles * 2) % 2;
		const v = phase < 1 ? phase : 2 - phase;
		out.push([t, v * 2 - 1]);
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

export function whiteNoiseSamples(n = 22, seed = 1): Sample[] {
	let s = seed;
	const rand = () => {
		s = (s * 9301 + 49297) % 233280;
		return s / 233280;
	};
	const out: Sample[] = [];
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		out.push([t, rand() * 2 - 1]);
	}
	return out;
}

/** Pink-noise approximation: random walk with small high-freq overlay → drifty + amplitude up to ~1. */
export function pinkNoiseSamples(n = 28, seed = 7): Sample[] {
	let s = seed;
	const rand = () => {
		s = (s * 9301 + 49297) % 233280;
		return s / 233280 - 0.5;
	};
	const walk: number[] = [];
	let v = 0;
	for (let i = 0; i < n; i++) {
		v += rand() * 0.55;
		v *= 0.95; // slight mean reversion
		walk.push(v);
	}
	const noisy = walk.map((d) => d + rand() * 0.25);
	const max = Math.max(...noisy.map(Math.abs));
	return noisy.map((value, i) => [i / (n - 1), (value / max) * 0.95] as Sample);
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

/** Modulo / sawtooth: y = x mod period over x ∈ [0, 1] */
export function modSamples(period = 0.3): Sample[] {
	const out: Sample[] = [];
	let t = 0;
	while (t < 1) {
		out.push([t, 0]);
		const tEnd = Math.min(1, t + period);
		out.push([tEnd, (tEnd - t) / period]);
		if (tEnd < 1) {
			out.push([tEnd, 0]);
		}
		t = tEnd;
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

export function backlashSamples(): Sample[] {
	return [
		[-1, -0.7],
		[-0.3, -0.7],
		[0.3, 0.7],
		[1, 0.7]
	];
}

/* --- Scope-style display signals --------------------------------------- */

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

export function spectrumBars(): Sample[] {
	const peaks = [
		[0.08, 0.15],
		[0.18, 0.55],
		[0.28, 0.85],
		[0.38, 0.65],
		[0.5, 0.4],
		[0.62, 0.7],
		[0.74, 0.3],
		[0.86, 0.5],
		[0.94, 0.18]
	] as Array<[number, number]>;
	const out: Sample[] = [[0, 0]];
	for (const [t, h] of peaks) {
		out.push([t, 0]);
		out.push([t, h]);
		out.push([t, 0]);
	}
	out.push([1, 0]);
	return out;
}
