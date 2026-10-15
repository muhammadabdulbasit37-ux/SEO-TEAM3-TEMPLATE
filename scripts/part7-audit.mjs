/**
 * Part 7 skill-style audits (no Python): crawl sample URLs from preview/dist,
 * emit JSON findings for manual prioritization.
 */
import fs from 'node:fs';
import path from 'node:path';

const base = process.argv[2] ?? 'dist';
const SITE_DOMAIN = 'dotacheats.com';
const distRoot = path.resolve('dist');

function loadHtml(routePath) {
  if (base !== 'dist') {
    return fetch(`${base}${routePath}`).then((r) => r.text());
  }
  const normalized = routePath === '/' ? '/index.html' : `${routePath.replace(/\/$/, '')}/index.html`;
  const file = path.join(distRoot, normalized.replace(/^\//, '').split('/').join(path.sep));
  if (!fs.existsSync(file)) throw new Error(`Missing built file: ${file}`);
  return Promise.resolve(fs.readFileSync(file, 'utf8'));
}

const localePaths = [
  { locale: 'en', path: '/' },
  { locale: 'es', path: '/es/' },
  { locale: 'de', path: '/de/' },
  { locale: 'fr', path: '/fr/' },
  { locale: 'en', path: '/faq/' },
  { locale: 'de', path: '/de/faq/' },
  { locale: 'en', path: '/products/dota-2-cheats/elite/' },
  { locale: 'es', path: '/es/products/dota-2-cheats/elite/' },
];

function parseMeta(html, name) {
  const m = html.match(new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']*)["']`, 'i'));
  return m?.[1] ?? null;
}

function parseCanonical(html) {
  return html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1] ?? null;
}

function parseHreflang(html) {
  return [...html.matchAll(/<link[^>]+rel=["']alternate["'][^>]+hreflang=["']([^"']+)["'][^>]+href=["']([^"']+)["']/gi)].map(
    (m) => ({ hreflang: m[1], href: m[2] }),
  );
}

function parseRobots(html) {
  return parseMeta(html, 'robots');
}

function schemaTypes(html) {
  const types = new Set();
  for (const m of html.matchAll(/"@type"\s*:\s*"([^"]+)"/g)) types.add(m[1]);
  return [...types];
}

function internalLinks(html, locale) {
  const links = new Set();
  for (const m of html.matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi)) {
    const href = m[1];
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('/go/')) continue;
    if (!href.startsWith('/')) continue;
    links.add(href);
  }
  return [...links];
}

function wrongLocaleLink(href, pageLocale) {
  if (pageLocale === 'en') {
    return /^\/(es|de|fr)(\/|$)/.test(href);
  }
  const prefix = `/${pageLocale}`;
  if (href === prefix || href.startsWith(`${prefix}/`)) return false;
  if (href.startsWith('/es/') || href.startsWith('/de/') || href.startsWith('/fr/')) return true;
  if (pageLocale !== 'en' && (href === '/' || (!href.startsWith(`/${pageLocale}`) && !href.startsWith('/go')))) {
    // English unprefixed internal links on localized pages
    if (!href.startsWith('/blog/') && !href.startsWith('/forum/')) return true;
  }
  return false;
}

const rows = [];
const findings = [];

for (const { locale, path: p } of localePaths) {
  const url = base === 'dist' ? `dist:${p}` : `${base}${p}`;
  const html = await loadHtml(p);
  const res = { status: 200 };
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? '';
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() ?? '';
  const canonical = parseCanonical(html);
  const hreflang = parseHreflang(html);
  const robots = parseRobots(html);
  const types = schemaTypes(html);
  const links = internalLinks(html, locale);
  const badLinks = links.filter((href) => wrongLocaleLink(href, locale));

  rows.push({
    url,
    locale,
    status: res.status,
    title: title.slice(0, 120),
    h1: h1.slice(0, 80),
    canonical,
    robots,
    hreflang_count: hreflang.length,
    schema_types: types.join('|'),
  });

  if (res.status !== 200) findings.push({ type: 'NON_200', severity: 'high', url, evidence: String(res.status) });
  if (!canonical?.includes(SITE_DOMAIN)) findings.push({ type: 'CANONICAL_HOST', severity: 'medium', url, evidence: canonical });
  if (hreflang.length < 5) findings.push({ type: 'HREFLANG_INCOMPLETE', severity: 'medium', url, evidence: String(hreflang.length) });
  if (badLinks.length) {
    findings.push({
      type: 'CROSS_LOCALE_INTERNAL_LINK',
      severity: 'high',
      url,
      evidence: badLinks.slice(0, 8).join(', '),
    });
  }
}

// English-only thin template check (pSEO-style): word count on feature/product shells
const enSamples = [
  '/',
  '/products/dota-2-cheats/',
  '/products/dota-2-cheats/elite/',
  '/products/dota-2-cheats/utilities/',
];
const wordCounts = [];
for (const p of enSamples) {
  const html = await loadHtml(p);
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  wordCounts.push({ path: p, words: text.split(' ').length });
}
const minWords = Math.min(...wordCounts.map((w) => w.words));
if (minWords < 400) {
  findings.push({ type: 'THIN_EN_TEMPLATE', severity: 'low', url: enSamples.join(','), evidence: JSON.stringify(wordCounts) });
}

// Hardcoded domain in locale source (should use tokens)
const i18nDir = path.join(process.cwd(), 'src', 'i18n');
let hardcodedDomainInI18n = 0;
for (const file of ['en.ts', 'es.ts', 'de.ts', 'fr.ts']) {
  const raw = fs.readFileSync(path.join(i18nDir, file), 'utf8');
  if (raw.includes('dotacheats.com')) hardcodedDomainInI18n += 1;
}

if (hardcodedDomainInI18n) {
  findings.push({
    type: 'HARDCODED_DOMAIN_IN_I18N',
    severity: 'medium',
    url: 'src/i18n',
    evidence: `${hardcodedDomainInI18n} locale files still contain dotacheats.com`,
  });
}

const roadmap = [
  {
    phase: 1,
    title: 'Fix cross-locale internal links',
    items: findings.filter((f) => f.type === 'CROSS_LOCALE_INTERNAL_LINK'),
  },
  {
    phase: 2,
    title: 'SEO signal hygiene',
    items: findings.filter((f) => ['HREFLANG_INCOMPLETE', 'CANONICAL_HOST', 'NON_200'].includes(f.type)),
  },
  {
    phase: 3,
    title: 'Template / content debt',
    items: findings.filter((f) => ['THIN_EN_TEMPLATE', 'HARDCODED_DOMAIN_IN_I18N'].includes(f.type)),
  },
].filter((p) => p.items.length);

console.log(JSON.stringify({ crawl_rows: rows, findings, remediation_roadmap: roadmap, ok: findings.length === 0 }, null, 2));
