#!/usr/bin/env node
/**
 * Generates manifest.json and SVG previews from example .json files
 * Run this before build or as part of the dev process
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const examplesDir = join(__dirname, '..', 'static', 'examples');
const manifestPath = join(examplesDir, 'manifest.json');

// Constants matching src/lib/constants/dimensions.ts
const NODE_WIDTH = 90;
const NODE_HEIGHT = 36;
const EVENT_SIZE = 80;
const EVENT_CENTER = 40;
const EVENT_DIAMOND_SIZE = 56;

// Theme colors matching src/lib/constants/theme.ts
const THEMES = {
  dark: {
    surfaceRaised: '#1c1c26',
    edge: '#7F7F7F'
  },
  light: {
    surfaceRaised: '#ffffff',
    edge: '#7F7F7F'
  }
};

/**
 * Generate SVG preview from graph data
 */
function generatePreview(graph, events = [], options = {}) {
  const { width = 240, height = 140, padding = 16, theme = 'dark' } = options;
  const colors = THEMES[theme];
  const nodes = graph.nodes || [];
  const connections = graph.connections || [];

  if (nodes.length === 0 && events.length === 0) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"></svg>`;
  }

  // Calculate bounds
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

  for (const node of nodes) {
    minX = Math.min(minX, node.position.x);
    minY = Math.min(minY, node.position.y);
    maxX = Math.max(maxX, node.position.x + NODE_WIDTH);
    maxY = Math.max(maxY, node.position.y + NODE_HEIGHT);
  }

  for (const event of events) {
    minX = Math.min(minX, event.position.x);
    minY = Math.min(minY, event.position.y);
    maxX = Math.max(maxX, event.position.x + EVENT_SIZE);
    maxY = Math.max(maxY, event.position.y + EVENT_SIZE);
  }

  // Calculate scale to fit
  const contentWidth = maxX - minX;
  const contentHeight = maxY - minY;
  const availableWidth = width - padding * 2;
  const availableHeight = height - padding * 2;
  const scale = Math.min(availableWidth / contentWidth, availableHeight / contentHeight, 1);

  // Center offset
  const scaledWidth = contentWidth * scale;
  const scaledHeight = contentHeight * scale;
  const offsetX = padding + (availableWidth - scaledWidth) / 2;
  const offsetY = padding + (availableHeight - scaledHeight) / 2;

  // Build node lookup for connections
  const nodeMap = new Map();
  for (const node of nodes) {
    nodeMap.set(node.id, node);
  }

  const parts = [];

  // Render connections as simple curves
  for (const conn of connections) {
    const source = nodeMap.get(conn.sourceNodeId);
    const target = nodeMap.get(conn.targetNodeId);
    if (source && target) {
      const x1 = offsetX + (source.position.x + NODE_WIDTH - minX) * scale;
      const y1 = offsetY + (source.position.y + NODE_HEIGHT / 2 - minY) * scale;
      const x2 = offsetX + (target.position.x - minX) * scale;
      const y2 = offsetY + (target.position.y + NODE_HEIGHT / 2 - minY) * scale;
      const midX = (x1 + x2) / 2;
      parts.push(
        `<path d="M ${x1.toFixed(1)} ${y1.toFixed(1)} C ${midX.toFixed(1)} ${y1.toFixed(1)}, ${midX.toFixed(1)} ${y2.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}" fill="none" stroke="${colors.edge}" stroke-width="1" opacity="0.6"/>`
      );
    }
  }

  // Render nodes as rectangles
  for (const node of nodes) {
    const x = offsetX + (node.position.x - minX) * scale;
    const y = offsetY + (node.position.y - minY) * scale;
    const w = NODE_WIDTH * scale;
    const h = NODE_HEIGHT * scale;
    const isSubsystem = node.type === 'Subsystem' || node.type === 'Interface';
    const dashArray = isSubsystem ? ' stroke-dasharray="3 1"' : '';
    parts.push(
      `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" rx="4" fill="${colors.surfaceRaised}" stroke="${colors.edge}" stroke-width="1"${dashArray}/>`
    );
  }

  // Render events as diamonds
  for (const event of events) {
    const cx = offsetX + (event.position.x + EVENT_CENTER - minX) * scale;
    const cy = offsetY + (event.position.y + EVENT_CENTER - minY) * scale;
    const size = EVENT_DIAMOND_SIZE * scale * 0.5;
    parts.push(
      `<rect x="${(cx - size / 2).toFixed(1)}" y="${(cy - size / 2).toFixed(1)}" width="${size.toFixed(1)}" height="${size.toFixed(1)}" rx="2" fill="${colors.surfaceRaised}" stroke="${colors.edge}" stroke-width="1" transform="rotate(45 ${cx.toFixed(1)} ${cy.toFixed(1)})"/>`
    );
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${parts.join('')}</svg>`;
}

// Find all .json files (excluding manifest.json)
const files = readdirSync(examplesDir)
  .filter(f => f.endsWith('.json') && f !== 'manifest.json')
  .sort();

// Generate SVG previews for each example (both themes)
for (const filename of files) {
  try {
    const jsonPath = join(examplesDir, filename);
    const data = JSON.parse(readFileSync(jsonPath, 'utf-8'));
    const baseName = filename.replace('.json', '');

    // Generate dark theme preview
    const darkSvg = generatePreview(data.graph || {}, data.events || [], { theme: 'dark' });
    writeFileSync(join(examplesDir, `${baseName}-dark.svg`), darkSvg);

    // Generate light theme preview
    const lightSvg = generatePreview(data.graph || {}, data.events || [], { theme: 'light' });
    writeFileSync(join(examplesDir, `${baseName}-light.svg`), lightSvg);
  } catch (e) {
    console.warn(`Could not generate preview for ${filename}:`, e.message);
  }
}

// Write manifest
const manifest = { files };
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');

console.log(`Generated manifest and ${files.length * 2} SVG previews (light + dark)`);
