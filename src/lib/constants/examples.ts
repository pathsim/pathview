/**
 * Bundled example models shown on the landing page.
 *
 * The JSON files live in `static/examples/`, screenshots (per theme) in
 * `static/examples/screenshots/{basename}-{dark|light}.png`. The separate
 * `static/examples/manifest.json` lists the same files for the screenshot
 * capture script — keep both in sync when adding examples.
 */

export interface Example {
	name: string;
	description: string;
	filename: string;
	basename: string;
}

export const EXAMPLES: Example[] = [
	{ filename: 'feedback-system.json', basename: 'feedback-system', name: 'Feedback System', description: 'Linear feedback system with delayed step excitation' },
	{ filename: 'harmonic-oscillator.json', basename: 'harmonic-oscillator', name: 'Harmonic Oscillator', description: 'Linear spring-mass-damper system' },
	{ filename: 'squarewave-lpf.json', basename: 'squarewave-lpf', name: 'Squarewave LPF', description: 'Low pass filtering of a square wave' },
	{ filename: 'pid-subsystem.json', basename: 'pid-subsystem', name: 'PID Loop', description: 'Classic PID control loop as subsystem' },
	{ filename: 'thermostat.json', basename: 'thermostat', name: 'Thermostat', description: 'Relay based thermostat heating system' },
	{ filename: 'cascade-subsystem.json', basename: 'cascade-subsystem', name: 'Cascade PI', description: 'Cascade PI controller with subsystems' },
	{ filename: 'bouncing-ball.json', basename: 'bouncing-ball', name: 'Bouncing Ball', description: 'Bouncing ball with event-based collision' },
	{ filename: 'fmcw-radar.json', basename: 'fmcw-radar', name: 'FMCW Radar', description: 'Frequency-modulated continuous wave radar' },
	{ filename: 'vanderpol.json', basename: 'vanderpol', name: 'Van der Pol', description: 'Van der Pol oscillator system' }
];

/** Default example rendered in the landing hero when no autosave exists. */
export const DEFAULT_EXAMPLE = EXAMPLES[0];
