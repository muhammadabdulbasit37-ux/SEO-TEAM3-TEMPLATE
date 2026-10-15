/** Static path redirects (301). Keys are pathname without query/hash. */
const LOCALES = ['es', 'de', 'fr'];
const LEGACY_PRODUCT = '/products/dota-2-cheats';
const PRODUCT_HOME = '/product/';

function addLocaleRedirects(map, fromPath, toPath) {
  map.set(fromPath, toPath);
  for (const locale of LOCALES) {
    map.set(`/${locale}${fromPath}`, `/${locale}${toPath}`);
  }
}

export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', PRODUCT_HOME],
  ['/cheats/', PRODUCT_HOME],
  ['/cheats/compare', '/blog/'],
  ['/cheats/compare/', '/blog/'],
  ['/product/compare', '/blog/'],
  ['/product/compare/', '/blog/'],
  [`${LEGACY_PRODUCT}`, PRODUCT_HOME],
  [`${LEGACY_PRODUCT}/`, PRODUCT_HOME],
  ['/cheats/lite', PRODUCT_HOME],
  ['/cheats/lite/', PRODUCT_HOME],
  ['/cheats/pro', PRODUCT_HOME],
  ['/cheats/pro/', PRODUCT_HOME],
  ['/cheats/elite', PRODUCT_HOME],
  ['/cheats/elite/', PRODUCT_HOME],
  ['/product/lite', PRODUCT_HOME],
  ['/product/lite/', PRODUCT_HOME],
  ['/product/pro', PRODUCT_HOME],
  ['/product/pro/', PRODUCT_HOME],
  ['/product/elite', PRODUCT_HOME],
  ['/product/elite/', PRODUCT_HOME],
  [`${LEGACY_PRODUCT}/lite`, PRODUCT_HOME],
  [`${LEGACY_PRODUCT}/lite/`, PRODUCT_HOME],
  [`${LEGACY_PRODUCT}/pro`, PRODUCT_HOME],
  [`${LEGACY_PRODUCT}/pro/`, PRODUCT_HOME],
  [`${LEGACY_PRODUCT}/elite`, PRODUCT_HOME],
  [`${LEGACY_PRODUCT}/elite/`, PRODUCT_HOME],
  [`${LEGACY_PRODUCT}/utilities`, '/hwid-spoofer/'],
  [`${LEGACY_PRODUCT}/utilities/`, '/hwid-spoofer/'],
  [`${LEGACY_PRODUCT}/hwid-spoofer`, '/hwid-spoofer/'],
  [`${LEGACY_PRODUCT}/hwid-spoofer/`, '/hwid-spoofer/'],
  [`${LEGACY_PRODUCT}/ugc`, PRODUCT_HOME],
  [`${LEGACY_PRODUCT}/ugc/`, PRODUCT_HOME],
  [`${LEGACY_PRODUCT}/unlock-all`, PRODUCT_HOME],
  [`${LEGACY_PRODUCT}/unlock-all/`, PRODUCT_HOME],
  [`${LEGACY_PRODUCT}/account-recovery`, PRODUCT_HOME],
  [`${LEGACY_PRODUCT}/account-recovery/`, PRODUCT_HOME],
]);

for (const [from, to] of [...PATH_REDIRECTS.entries()]) {
  if (from.startsWith('/es/') || from.startsWith('/de/') || from.startsWith('/fr/')) continue;
  addLocaleRedirects(PATH_REDIRECTS, from, to);
}

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
