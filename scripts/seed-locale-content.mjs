import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const enPath = path.join(root, 'content-export/en.json');
if (!fs.existsSync(enPath)) {
  console.error('Run scripts/export-site-content.mjs first.');
  process.exit(1);
}

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const targets = ['es', 'de', 'fr'];

for (const locale of targets) {
  fs.writeFileSync(path.join(root, 'src/data/faq/locales', `${locale}.json`), JSON.stringify(en.faq, null, 2));
  fs.writeFileSync(path.join(root, 'src/data/products/locales', `${locale}.json`), JSON.stringify(en.products, null, 2));
  fs.writeFileSync(path.join(root, 'src/i18n/pageSeo', `${locale}.json`), JSON.stringify(en.pageSeo, null, 2));
}

console.log('Seeded es/de/fr locale JSON from English export (run translate-site-content to localize).');
