/**
 * Part 8 final base check (dist + routing rules). Mirrors skill audits without Python.
 */
import fs from 'node:fs';
import path from 'node:path';
import { resolveLocaleRoutingRedirect } from '../src/config/locale-routing.mjs';

const SITE_DOMAIN = 'dotacheats.com';
const SITE_URL = `https://${SITE_DOMAIN}`;
const distRoot = path.resolve('dist');
const PREFIXED_LOCALES = ['es', 'de', 'fr'];
const LOCALES = ['en', 'es', 'de', 'fr'];

function stripLocalePrefix(pathname) {
  for (const locale of PREFIXED_LOCALES) {
    if (pathname === `/${locale}` || pathname === `/${locale}/`) return '/';
    if (pathname.startsWith(`/${locale}/`)) {
      const rest = pathname.slice(`/${locale}`.length);
      return rest.startsWith('/') ? rest : `/${rest}`;
    }
  }
  if (pathname !== '/' && !pathname.endsWith('/')) return `${pathname}/`;
  return pathname;
}

function localizePath(pathname, locale) {
  const base = stripLocalePrefix(pathname);
  if (locale === 'en') return base;
  if (base === '/') return `/${locale}/`;
  return `/${locale}${base}`;
}

const failures = [];
const passes = [];

function loadHtml(routePath) {
  const file =
    routePath === '/'
      ? path.join(distRoot, 'index.html')
      : path.join(distRoot, routePath.replace(/^\//, '').replace(/\/$/, ''), 'index.html');
  if (!fs.existsSync(file)) return null;
  return fs.readFileSync(file, 'utf8');
}

function parseHreflang(html) {
  const out = [];
  for (const m of html.matchAll(
    /<link[^>]+rel=["']alternate["'][^>]*>/gi,
  )) {
    const tag = m[0];
    const hreflang = tag.match(/hreflang=["']([^"']+)["']/i)?.[1];
    const href = tag.match(/href=["']([^"']+)["']/i)?.[1];
    if (hreflang && href) out.push({ hreflang, href });
  }
  return out;
}

function parseCanonical(html) {
  const tag = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i)?.[0];
  return tag?.match(/href=["']([^"']+)["']/i)?.[1] ?? null;
}

function parseRobots(html) {
  const tag = html.match(/<meta[^>]+name=["']robots["'][^>]*>/i)?.[0];
  return tag?.match(/content=["']([^"']+)["']/i)?.[1] ?? null;
}

const homePaths = ['/', '/es/', '/de/', '/fr/'];
const deepPaths = [
  '/products/dota-2-cheats/elite/',
  '/blog/dota-2-lite-vs-pro/',
  '/forum/how-to-choose-dota-2-product-tier/',
];

for (const p of homePaths) {
  if (!loadHtml(p)) failures.push({ check: 'locale_home_exists', path: p });
  else passes.push(`home ${p}`);
}

for (const base of deepPaths) {
  for (const loc of LOCALES) {
    const p = localizePath(base, loc);
    if (!loadHtml(p)) failures.push({ check: 'deep_page_exists', path: p, locale: loc });
    else passes.push(`deep ${p}`);
  }
}

const enRedirect = resolveLocaleRoutingRedirect('/en/');
if (!enRedirect || enRedirect.status !== 301 || enRedirect.location !== '/') {
  failures.push({ check: 'en_redirect', got: enRedirect });
} else passes.push('/en/ → /');

const enDeep = resolveLocaleRoutingRedirect('/en/products/dota-2-cheats/elite/');
if (!enDeep || enDeep.location !== '/products/dota-2-cheats/elite/') {
  failures.push({ check: 'en_deep_redirect', got: enDeep });
}

if (resolveLocaleRoutingRedirect('/es/de/about/')?.status !== 404) {
  failures.push({ check: 'nested_locale_blocked' });
} else passes.push('nested locale → 404');

const graph = new Map();
for (const loc of LOCALES) {
  const pages = [localizePath('/', loc), localizePath(deepPaths[0], loc)];
  for (const p of pages) {
    const html = loadHtml(p);
    if (!html) continue;
    const canonical = parseCanonical(html);
    const expected = `${SITE_URL}${localizePath(stripLocalePrefix(p), loc)}`;
    if (canonical !== expected) {
      failures.push({ check: 'self_canonical', path: p, canonical, expected });
    }
    const alts = parseHreflang(html);
    if (!alts.length) {
      failures.push({ check: 'hreflang_missing', path: p });
      continue;
    }
    const pageUrl = canonical;
    graph.set(pageUrl, alts);
    if (!alts.some((a) => a.href === canonical)) {
      failures.push({ check: 'hreflang_self', path: p, canonical });
    }
    const xd = alts.find((a) => a.hreflang === 'x-default');
    const enHref = `${SITE_URL}${localizePath(stripLocalePrefix(p), 'en')}`;
    if (!xd || xd.href !== enHref) {
      failures.push({ check: 'x_default_en', path: p, xDefault: xd?.href, expected: enHref });
    }
    for (const code of LOCALES) {
      if (!alts.some((a) => a.hreflang === code)) {
        failures.push({ check: 'hreflang_locale_missing', path: p, locale: code });
      }
    }
  }
}

for (const [from, alts] of graph) {
  for (const alt of alts) {
    if (alt.hreflang === 'x-default') continue;
    const back = graph.get(alt.href);
    if (!back) continue;
    if (!back.some((b) => b.href === from)) {
      failures.push({ check: 'hreflang_reciprocal', from, to: alt.href });
    }
  }
}

for (const base of deepPaths) {
  for (const loc of LOCALES) {
    const p = localizePath(base, loc);
    const html = loadHtml(p);
    if (!html) continue;
    for (const target of LOCALES) {
      if (target === loc) continue;
      const targetPath = localizePath(base, target);
      const rel = `href="${targetPath}"`;
      if (!html.includes(rel)) {
        failures.push({ check: 'switcher_target_missing', page: p, target, expectedHref: targetPath });
      }
    }
  }
}

for (const loc of LOCALES) {
  for (const base of ['/privacy/', '/terms/']) {
    const p = localizePath(base, loc);
    const html = loadHtml(p);
    if (!html) {
      failures.push({ check: 'policy_page_missing', path: p });
      continue;
    }
    const robots = parseRobots(html);
    if (!robots?.includes('noindex')) failures.push({ check: 'policy_noindex', path: p, robots });
    if (parseHreflang(html).length) failures.push({ check: 'policy_hreflang_removed', path: p });
  }
}

const robotsTxt = fs.existsSync('public/robots.txt')
  ? fs.readFileSync('public/robots.txt', 'utf8')
  : '';
const sitemapPath = path.join(distRoot, 'sitemap-0.xml');
const sitemapXml = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf8') : '';

if (!sitemapXml) failures.push({ check: 'sitemap_missing' });
else {
  if (sitemapXml.includes('/go/')) failures.push({ check: 'sitemap_has_go' });
  if (/\/privacy\//.test(sitemapXml) || /\/terms\//.test(sitemapXml)) {
    failures.push({ check: 'sitemap_has_policy' });
  }
  if (!sitemapXml.includes('xhtml:link')) failures.push({ check: 'sitemap_hreflang_links' });
  else passes.push('sitemap alternates present');
}

if (!robotsTxt.includes(`Sitemap: ${SITE_URL}/sitemap-index.xml`)) {
  failures.push({ check: 'robots_sitemap_host', expected: `${SITE_URL}/sitemap-index.xml` });
} else passes.push('robots sitemap host');

if (!/Disallow:\s*\/go\//m.test(robotsTxt)) failures.push({ check: 'robots_go_disallow' });

const { getProductPlans, formatPlanPrice } = await import('../src/data/productPricing.ts');
const elitePlans = getProductPlans('elite');
const planSignature = elitePlans.map((p) => `${p.id}:${p.priceUsd}`).join(',');
for (const loc of LOCALES) {
  const p = localizePath('/products/dota-2-cheats/elite/', loc);
  const html = loadHtml(p);
  for (const plan of elitePlans) {
    const priceText = formatPlanPrice(plan.priceUsd);
    if (!html?.includes(priceText)) {
      failures.push({ check: 'price_missing_on_page', locale: loc, plan: plan.id, priceUsd: plan.priceUsd });
      break;
    }
  }
}
if (!failures.some((f) => f.check === 'price_missing_on_page')) {
  passes.push(`elite plan prices (${planSignature}) visible in all locales`);
}

const featureKeysByLocale = {};
for (const loc of LOCALES) {
  const p = localizePath('/products/dota-2-cheats/elite/', loc);
  const html = loadHtml(p);
  const keys = [...(html?.matchAll(/data-feature-key=["']([^"']+)["']/g) ?? [])].map((m) => m[1]).sort();
  featureKeysByLocale[loc] = keys.join('|');
}
const featureSets = new Set(Object.values(featureKeysByLocale).filter(Boolean));
if (featureSets.size > 1) {
  failures.push({ check: 'feature_key_mismatch', featureKeysByLocale });
} else if (featureSets.size === 0) {
  const counts = {};
  for (const loc of LOCALES) {
    const p = localizePath('/products/dota-2-cheats/elite/', loc);
    const html = loadHtml(p);
    counts[loc] = (html?.match(/class="[^"]*feature/gi) ?? []).length;
  }
  if (new Set(Object.values(counts)).size > 1) failures.push({ check: 'feature_count_mismatch', counts });
}

for (const bad of ['/es/es/', '/de/fr/blog/', '/en/es/']) {
  const built = loadHtml(bad);
  if (built) failures.push({ check: 'nested_locale_built', path: bad });
}

console.log(
  JSON.stringify(
    {
      pass: failures.length === 0,
      failure_count: failures.length,
      failures,
      passes,
      sitemap_loc_count: (sitemapXml.match(/<loc>/g) ?? []).length,
      elite_plan_signature: planSignature,
    },
    null,
    2,
  ),
);
process.exit(failures.length ? 1 : 0);
