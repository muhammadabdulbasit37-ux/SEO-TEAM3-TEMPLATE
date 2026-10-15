import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outDir = path.join(root, 'content-export');
fs.mkdirSync(outDir, { recursive: true });

const { blogPosts } = await import('../src/data/blog/posts.ts');
const { forumPosts, forumCategories } = await import('../src/data/forum.ts');
const { siteFaqs } = await import('../src/data/faq.ts');
const { en } = await import('../src/i18n/en.ts');

const payload = {
  blog: blogPosts,
  forum: { categories: forumCategories, posts: forumPosts },
  faq: siteFaqs.map(({ id, q, a }) => ({ id, q, a })),
  pageSeo: en.pageSeo,
};

await import('../src/data/products.ts');
const { getProductCopyBundle } = await import('../src/data/products/exportCopy.ts');
payload.products = getProductCopyBundle();

fs.writeFileSync(path.join(outDir, 'en.json'), JSON.stringify(payload, null, 2));
console.log('Wrote content-export/en.json');

const localeDirs = ['src/data/faq/locales', 'src/data/products/locales'];

for (const dir of localeDirs) {
  fs.mkdirSync(path.join(root, dir), { recursive: true });
}
