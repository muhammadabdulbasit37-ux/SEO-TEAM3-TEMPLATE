import fs from 'node:fs';
import path from 'node:path';
import { SITE_URL } from '../src/config/site-url.mjs';

const root = process.cwd();
const dist = path.join(root, 'dist');
const source = path.join(dist, 'sitemap-0.xml');

if (!fs.existsSync(source)) {
  console.error('finalize-sitemap: dist/sitemap-0.xml not found — run astro build first.');
  process.exit(1);
}

const raw = fs.readFileSync(source, 'utf8');
const urlCount = (raw.match(/<url>/g) ?? []).length;

if (urlCount === 0) {
  console.error('finalize-sitemap: sitemap-0.xml contains no URLs.');
  process.exit(1);
}

function field(block, name) {
  return block.match(new RegExp(`<${name}>([^<]*)</${name}>`))?.[1] ?? '';
}

function formatUrlset(xml) {
  const urls = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => {
    const block = match[1];
    const lines = ['  <url>', `    <loc>${field(block, 'loc')}</loc>`];
    const lastmod = field(block, 'lastmod');
    const changefreq = field(block, 'changefreq');
    const priority = field(block, 'priority');
    if (lastmod) lines.push(`    <lastmod>${lastmod.slice(0, 10)}</lastmod>`);
    if (changefreq) lines.push(`    <changefreq>${changefreq}</changefreq>`);
    if (priority) lines.push(`    <priority>${priority}</priority>`);
    lines.push('  </url>');
    return lines.join('\n');
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;
}

const formatted = formatUrlset(raw);
const sitemapUrl = `${SITE_URL}/sitemap.xml`;
const lastmod = new Date().toISOString().slice(0, 10);

fs.writeFileSync(path.join(dist, 'sitemap-0.xml'), formatted, 'utf8');
fs.writeFileSync(path.join(dist, 'sitemap.xml'), formatted, 'utf8');

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${sitemapUrl}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>
`;
fs.writeFileSync(path.join(dist, 'sitemap-index.xml'), indexXml, 'utf8');

console.log(`Sitemap finalized: ${urlCount} URLs → dist/sitemap.xml (and dist/sitemap-0.xml)`);
