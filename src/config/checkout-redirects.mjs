/**
 * Partner checkout destinations (affiliate / ref links).
 * Never put these on visible `href`s, buy buttons use `/go/…` and this map redirects on click.
 */
export const CHECKOUT_URLS = {
  dota2: 'https://zadeyo.com/products/dota-2',
  hwidSpoofer: 'https://zadeyo.com/go/BASIT?to=%2Fproducts%2Fhwid-spoofer',
};

const PREFIXED_LOCALES = ['es', 'de', 'fr'];

/** Checkout paths → external product URLs (Node serve, Astro middleware, static `_redirects`). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/dota-2', CHECKOUT_URLS.dota2],
  ['/go/dota-2/', CHECKOUT_URLS.dota2],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/skin-changer', CHECKOUT_URLS.dota2],
  ['/go/skin-changer/', CHECKOUT_URLS.dota2],
  ['/go/ugc', CHECKOUT_URLS.dota2],
  ['/go/ugc/', CHECKOUT_URLS.dota2],
]);

function stripLocaleFromCheckoutPath(pathname) {
  for (const locale of PREFIXED_LOCALES) {
    const prefix = `/${locale}`;
    if (pathname === `${prefix}/go` || pathname.startsWith(`${prefix}/go/`)) {
      return pathname.slice(prefix.length);
    }
  }
  if (pathname.startsWith('/en/go/') || pathname === '/en/go') {
    return pathname.slice('/en'.length);
  }
  return pathname;
}

export function resolveCheckoutPathRedirect(pathname) {
  const path = stripLocaleFromCheckoutPath(pathname);
  const direct = CHECKOUT_PATH_REDIRECTS.get(path);
  if (direct) return direct;

  if (path !== '/' && !path.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${path}/`) ?? null;
  }

  return null;
}
