import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dirs = ['src/data/faq/locales', 'src/data/products/locales', 'src/i18n/pageSeo'];
for (const dir of dirs) fs.mkdirSync(path.join(root, dir), { recursive: true });

for (const locale of ['es', 'de', 'fr']) {
  fs.writeFileSync(path.join(root, 'src/i18n/pageSeo', `${locale}.json`), '{}');
  fs.writeFileSync(path.join(root, 'src/data/faq/locales', `${locale}.json`), '[]');
  fs.writeFileSync(path.join(root, 'src/data/products/locales', `${locale}.json`), '{}');
}

const { en } = await import('../src/i18n/en.ts');
for (const locale of ['es', 'de', 'fr']) {
  fs.writeFileSync(path.join(root, 'src/i18n/pageSeo', `${locale}.json`), JSON.stringify(en.pageSeo, null, 2));
}

const { siteFaqs } = await import('../src/data/faq.ts');

for (const locale of ['es', 'de', 'fr']) {
  fs.writeFileSync(
    path.join(root, 'src/data/faq/locales', `${locale}.json`),
    JSON.stringify(siteFaqs.map(({ id, q, a }) => ({ id, q, a })), null, 2),
  );
}

await import('../src/data/products.ts');
const { getProductCopyBundle } = await import('../src/data/products/exportCopy.ts');
const products = getProductCopyBundle();
for (const locale of ['es', 'de', 'fr']) {
  fs.writeFileSync(path.join(root, 'src/data/products/locales', `${locale}.json`), JSON.stringify(products, null, 2));
}

console.log('Bootstrapped locale JSON from English sources.');
