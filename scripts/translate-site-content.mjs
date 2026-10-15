import fs from 'node:fs';
import path from 'node:path';
import translate from 'translate-google';

const locale = process.argv[2];
const section = process.argv[3] ?? 'all';
const target = { es: 'es', de: 'de', fr: 'fr' }[locale];
if (!target) {
  console.error('Usage: node scripts/translate-site-content.mjs <es|de|fr> [blog|forum|faq|products|pageSeo|all]');
  process.exit(1);
}

const root = process.cwd();
const enPath = path.join(root, 'content-export/en.json');
if (!fs.existsSync(enPath)) {
  console.error('Missing content-export/en.json — run export-site-content.mjs first.');
  process.exit(1);
}
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

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
  'Ranked',
  'USD',
  'English',
  'Español',
  'Deutsch',
  'Français',
]);

function protectLinks(text) {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => `⟦L:${label}⟧${href}⟦/L⟧`);
}

function restoreLinks(text) {
  return text.replace(/⟦L:([^⟧]+)⟧([^⟦]+)⟦\/L⟧/g, (_, label, href) => `[${label}](${href})`);
}

function shouldSkip(value) {
  if (typeof value !== 'string') return true;
  if (value.startsWith('http') || value.startsWith('/')) return true;
  if (value.includes('@')) return true;
  if (/^\$?\d/.test(value)) return true;
  if (skipExact.has(value)) return true;
  if (value.length < 2) return true;
  return false;
}

function collectStrings(node, trail = [], out = { paths: [], values: [] }) {
  if (typeof node === 'string') {
    if (!shouldSkip(node)) {
      out.paths.push(trail.join('.'));
      out.values.push(node);
    }
    return out;
  }
  if (Array.isArray(node)) {
    node.forEach((item, index) => collectStrings(item, [...trail, String(index)], out));
    return out;
  }
  if (node && typeof node === 'object') {
    for (const [key, value] of Object.entries(node)) {
      if (
        [
          'slug',
          'href',
          'image',
          'id',
          'icon',
          'variant',
          'bento',
          'categoryTone',
          'num',
          'author',
          'age',
          'score',
          'upvotes',
          'commentsCount',
          'featured',
          'date',
          'sourcePath',
          'flair',
        ].includes(key)
      ) {
        continue;
      }
      collectStrings(value, [...trail, key], out);
    }
  }
  return out;
}

function setAtPath(obj, trail, value) {
  let cur = obj;
  for (let i = 0; i < trail.length - 1; i++) {
    cur = cur[trail[i]];
  }
  cur[trail[trail.length - 1]] = value;
}

async function translateBatch(values) {
  const protectedValues = values.map((v) => protectLinks(v));
  const joined = protectedValues.map((s) => s.replace(/\n/g, ' \\n ')).join('\n|||\n');
  let lastError;
  for (let attempt = 1; attempt <= 6; attempt++) {
    try {
      const out = await translate(joined, { from: 'en', to: target });
      const parts = String(out).split('\n|||\n');
      return parts.map((part, i) => restoreLinks(String(part).replace(/ \\n /g, '\n').trim() || values[i]));
    } catch (error) {
      lastError = error;
      const wait = Math.min(30_000, 2000 * attempt ** 2);
      console.warn(`  Batch failed (attempt ${attempt}/6), waiting ${wait}ms…`);
      await new Promise((resolve) => setTimeout(resolve, wait));
    }
  }
  throw lastError;
}

async function translateObjectTree(tree, label) {
  const { paths, values } = collectStrings(tree);
  console.log(`[${label}] Translating ${values.length} strings…`);
  const batchSize = 12;
  for (let i = 0; i < values.length; i += batchSize) {
    const batch = values.slice(i, i + batchSize);
    const batchPaths = paths.slice(i, i + batchSize);
    const out = await translateBatch(batch);
    batchPaths.forEach((p, idx) => setAtPath(tree, p.split('.'), out[idx]));
    console.log(`  ${Math.min(i + batchSize, values.length)} / ${values.length}`);
    await new Promise((resolve) => setTimeout(resolve, 800));
  }
  return tree;
}

async function translateBlog() {
  const outPath = path.join(root, 'src/data/blog/locales', `${target}.json`);
  const posts = structuredClone(en.blog);
  for (let index = 0; index < posts.length; index++) {
    const post = posts[index];
    await translateObjectTree(post, `blog:${post.slug}`);
    fs.writeFileSync(outPath, JSON.stringify(posts, null, 2));
  }
  console.log(`Wrote ${outPath}`);
}

async function translateForum() {
  const outPath = path.join(root, 'src/data/forum/locales', `${target}.json`);
  const pack = structuredClone(en.forum);
  await translateObjectTree(pack, 'forum');
  fs.writeFileSync(outPath, JSON.stringify(pack, null, 2));
  console.log(`Wrote ${outPath}`);
}

async function translateFaq() {
  const outPath = path.join(root, 'src/data/faq/locales', `${target}.json`);
  const rows = structuredClone(en.faq);
  await translateObjectTree(rows, 'faq');
  fs.writeFileSync(outPath, JSON.stringify(rows, null, 2));
  console.log(`Wrote ${outPath}`);
}

async function translateProducts() {
  const outPath = path.join(root, 'src/data/products/locales', `${target}.json`);
  const products = structuredClone(en.products);
  await translateObjectTree(products, 'products');
  fs.writeFileSync(outPath, JSON.stringify(products, null, 2));
  console.log(`Wrote ${outPath}`);
}

async function translatePageSeo() {
  const outPath = path.join(root, 'src/i18n/pageSeo', `${target}.json`);
  const pageSeo = structuredClone(en.pageSeo);
  await translateObjectTree(pageSeo, 'pageSeo');
  fs.writeFileSync(outPath, JSON.stringify(pageSeo, null, 2));
  console.log(`Wrote ${outPath}`);
}

const jobs = {
  blog: translateBlog,
  forum: translateForum,
  faq: translateFaq,
  products: translateProducts,
  pageSeo: translatePageSeo,
};

if (section === 'all') {
  // Blog and forum stay English on all locales (content will be replaced later).
  for (const name of ['pageSeo', 'faq', 'products']) {
    await jobs[name]();
  }
} else if (jobs[section]) {
  await jobs[section]();
} else {
  console.error(`Unknown section: ${section}`);
  process.exit(1);
}

console.log(`Done ${target} (${section}).`);
