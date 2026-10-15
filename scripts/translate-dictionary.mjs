import fs from 'node:fs';
import path from 'node:path';
import translate from 'translate-google';

const locale = process.argv[2];
const target = { es: 'es', de: 'de', fr: 'fr' }[locale];
if (!target) {
  console.error('Usage: node scripts/translate-dictionary.mjs <es|de|fr>');
  process.exit(1);
}

const en = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src/i18n/_en.export.json'), 'utf8'));

const skipExact = new Set([
  'DotaCheats',
  'dotacheats.com',
  'Dota 2',
  'Steam',
  'Windows',
  'Discord',
  'OBS',
  'VAC',
  'HWID',
  'UGC',
  'Lite',
  'Pro',
  'Elite',
  'Invoker',
  'Lion',
  'Turbo',
  'English',
  'Español',
  'Deutsch',
  'Français',
]);

function shouldSkip(value) {
  if (typeof value !== 'string') return true;
  if (value.startsWith('http') || value.startsWith('/')) return true;
  if (value.includes('@')) return true;
  if (/^\d/.test(value)) return true;
  if (skipExact.has(value)) return true;
  return false;
}

const paths = [];
const values = [];

function collect(node, trail = []) {
  if (typeof node === 'string') {
    if (!shouldSkip(node)) {
      paths.push(trail.join('.'));
      values.push(node);
    }
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((item, index) => collect(item, [...trail, String(index)]));
    return;
  }
  if (node && typeof node === 'object') {
    for (const [key, value] of Object.entries(node)) {
      if (['slug', 'href', 'image', 'id', 'icon', 'variant', 'bento', 'categoryTone', 'num'].includes(key)) {
        continue;
      }
      collect(value, [...trail, key]);
    }
  }
}

collect(en);
console.log(`Translating ${values.length} strings to ${target}...`);

const translated = new Map();
const batchSize = 40;
for (let i = 0; i < values.length; i += batchSize) {
  const batch = values.slice(i, i + batchSize);
  const joined = batch.map((s) => s.replace(/\n/g, ' \\n ')).join('\n|||\n');
  const out = await translate(joined, { from: 'en', to: target });
  const parts = String(out).split('\n|||\n');
  batch.forEach((original, idx) => {
    const key = paths[i + idx];
    translated.set(key, (parts[idx] ?? original).replace(/ \\n /g, '\n').replace(/[—–]/g, '-'));
  });
  console.log(`  ${Math.min(i + batchSize, values.length)} / ${values.length}`);
}

function setAtPath(obj, trail, value) {
  let cur = obj;
  for (let i = 0; i < trail.length - 1; i++) {
    cur = cur[trail[i]];
  }
  cur[trail[trail.length - 1]] = value;
}

const result = structuredClone(en);
for (const [p, value] of translated.entries()) {
  setAtPath(result, p.split('.'), value);
}

result.ui.languageNames = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
};

const outTs = path.join(process.cwd(), `src/i18n/${locale}.ts`);
fs.writeFileSync(
  outTs,
  `import type { Translations } from './types';\n\nexport const ${locale}: Translations = ${JSON.stringify(result, null, 2)};\n`,
  'utf8',
);
console.log(`Wrote ${outTs}`);
