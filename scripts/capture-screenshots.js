#!/usr/bin/env node

/**
 * Captures screenshots of example models for welcome modal tiles.
 * Captures both dark and light themes using ?theme= URL parameter.
 * Run with: npm run screenshots
 */

import puppeteer from 'puppeteer-core';
import { readFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const STATIC_DIR = join(__dirname, '..', 'static', 'examples');
const SCREENSHOTS_DIR = join(STATIC_DIR, 'screenshots');
const MANIFEST_PATH = join(STATIC_DIR, 'manifest.json');

const BASE_URL = 'https://view.pathsim.org';
const VIEWPORT = { width: 1000, height: 600 };
const DEVICE_SCALE_FACTOR = 1;
const SETTLE_DELAY = 1500;
const THEMES = ['dark', 'light'];

async function captureScreenshot(browser, filename, theme) {
	const basename = filename.replace('.json', '');
	const url = `${BASE_URL}?model=examples/${filename}&theme=${theme}`;
	console.log(`  ${basename} ${theme}...`);

	const page = await browser.newPage();
	await page.setViewport({ width: VIEWPORT.width, height: VIEWPORT.height, deviceScaleFactor: DEVICE_SCALE_FACTOR });

	try {
		await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
		await new Promise((resolve) => setTimeout(resolve, SETTLE_DELAY));

		const outputPath = join(SCREENSHOTS_DIR, `${basename}-${theme}.png`);
		await page.screenshot({ path: outputPath, type: 'png' });
		console.log(`    Saved: ${basename}-${theme}.png`);
	} catch (error) {
		console.error(`    Error: ${error.message}`);
	} finally {
		await page.close();
	}
}

async function main() {
	if (!existsSync(MANIFEST_PATH)) {
		console.error('manifest.json not found at', MANIFEST_PATH);
		process.exit(1);
	}

	const manifest = JSON.parse(readFileSync(MANIFEST_PATH, 'utf-8'));
	const files = manifest.files || [];

	if (files.length === 0) {
		console.log('No example files in manifest.');
		return;
	}

	if (!existsSync(SCREENSHOTS_DIR)) {
		mkdirSync(SCREENSHOTS_DIR, { recursive: true });
	}

	console.log('Launching browser...');
	const browser = await puppeteer.launch({
		headless: true,
		channel: 'chrome',
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	});

	try {
		for (const filename of files) {
			for (const theme of THEMES) {
				await captureScreenshot(browser, filename, theme);
			}
		}
	} finally {
		await browser.close();
	}

	console.log('\nDone!');
}

main().catch((error) => {
	console.error('Fatal error:', error);
	process.exit(1);
});
