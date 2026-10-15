/**
 * Deep-clone en and apply locale overrides from JSON, then emit a standalone .ts dictionary.
 * Usage: npx tsx scripts/build-locale-dict.mjs es
 */
import fs from 'node:fs';
import path from 'node:path';
import { en } from '../src/i18n/en.ts';

const locale = process.argv[2];
if (!locale || !['es', 'de', 'fr'].includes(locale)) {
  console.error('Usage: npx tsx scripts/build-locale-dict.mjs <es|de|fr>');
  process.exit(1);
}

const overridesPath = path.join(process.cwd(), `src/i18n/overrides/${locale}.json`);
if (!fs.existsSync(overridesPath)) {
  console.error(`Missing ${overridesPath}`);
  process.exit(1);
}

const overrides = JSON.parse(fs.readFileSync(overridesPath, 'utf8'));

function deepMerge(target, patch) {
  if (patch === null || typeof patch !== 'object' || Array.isArray(patch)) {
    return patch;
  }
  const out = { ...target };
  for (const [key, value] of Object.entries(patch)) {
    if (value && typeof value === 'object' && !Array.isArray(value) && typeof target[key] === 'object') {
      out[key] = deepMerge(target[key], value);
    } else {
      out[key] = value;
    }
  }
  return out;
}

const merged = deepMerge(structuredClone(en), overrides);
const outPath = path.join(process.cwd(), `src/i18n/${locale}.ts`);
const body = `import type { Translations } from './types';

export const ${locale}: Translations = ${JSON.stringify(merged, null, 2)} as const satisfies Translations;
`;

fs.writeFileSync(outPath, body.replace(' as const satisfies Translations', ' satisfies Translations'), 'utf8');
console.log(`Wrote ${outPath}`);
