/**
 * Partner checkout destinations (affiliate / ref links).
 * Visible buy buttons use `/go/…` from `checkout.ts`. These URLs are the 302 targets only.
 */
export const CHECKOUT_URLS = {
  eftCheats: 'https://zadeyo.com/go/BASIT?to=%2Fproducts%2Fescape-from-tarkov',
  hwidSpoofer: 'https://zadeyo.com/go/BASIT?to=%2Fproducts%2Fhwid-spoofer',
};

const EFT_CHECKOUT = CHECKOUT_URLS.eftCheats;

const PREFIXED_LOCALES = ['es', 'de', 'fr'];

/** Checkout paths → external product URLs (Node serve, Astro middleware, static `_redirects`). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/escape-from-tarkov', EFT_CHECKOUT],
  ['/go/escape-from-tarkov/', EFT_CHECKOUT],
  ['/go/dota-2', EFT_CHECKOUT],
  ['/go/dota-2/', EFT_CHECKOUT],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/skin-changer', EFT_CHECKOUT],
  ['/go/skin-changer/', EFT_CHECKOUT],
  ['/go/ugc', EFT_CHECKOUT],
  ['/go/ugc/', EFT_CHECKOUT],
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
