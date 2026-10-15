/**
 * Builds es.ts, de.ts, fr.ts from en.ts by copying structure and applying locale labels.
 * Run: node scripts/generate-locale-files.mjs
 * Full string translation is maintained in the locale files after generation.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const enPath = path.join(root, 'src/i18n/en.ts');

const enSource = fs.readFileSync(enPath, 'utf8');

for (const locale of ['es', 'de', 'fr']) {
  let source = enSource.replace(/export const en: Translations = /, `export const ${locale}: Translations = `);
  source = source.replace(
    /languageNames: \{[\s\S]*?\},/,
    `languageNames: {
      en: 'English',
      es: 'Español',
      de: 'Deutsch',
      fr: 'Français',
    },`,
  );
  fs.writeFileSync(path.join(root, `src/i18n/${locale}.ts`), source, 'utf8');
  console.log(`Wrote src/i18n/${locale}.ts (clone of en — translate strings in file)`);
}
