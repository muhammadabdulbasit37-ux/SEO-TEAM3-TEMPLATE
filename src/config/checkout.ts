import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/**
 * Partner destinations live in `checkout-redirects.mjs`.
 * Visible buy links must stay on `/go/…` so the status bar does not show the referral URL.
 * Click → server 302 (and static `_redirects` / fallback HTML) to the configured URL.
 */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  dota2: 'dota-2',
  hwidSpoofer: 'hwid-spoofer',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Internal path shown on hover. Redirect target is `CHECKOUT[product]`. */
export function checkoutPath(product: CheckoutProduct = 'dota2'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

/** Default product checkout path (replaces legacy Discord CTAs). */
export const PRIMARY_CHECKOUT_PATH = checkoutPath('dota2');

/** Map internal product slugs to cloaked checkout paths. */
export function checkoutForSlug(slug: string): string {
  if (slug === 'hwid-spoofer') {
    return checkoutPath('hwidSpoofer');
  }
  return checkoutPath('dota2');
}

/** Blog / legacy hrefs → cloaked `/go/…` paths (never the partner URL). */
export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    const normalized = href.startsWith('/') ? href : `/${href}`;
    const goMatch = normalized.match(/^\/go\/([^/?#]+)\/?/);
    if (goMatch) {
      const product = CHECKOUT_SLUG_TO_PRODUCT[goMatch[1]];
      if (product) return checkoutPath(product);
    }
    return normalized;
  }

  if (
    href.includes('%2Fproducts%2Fhwid-spoofer') ||
    href.includes('/products/hwid-spoofer') ||
    (href.includes('zadeyo.com/go/') && href.includes('hwid-spoofer'))
  ) {
    return checkoutPath('hwidSpoofer');
  }

  if (
    href.includes('%2Fproducts%2Fdota-2') ||
    href.includes('/products/dota-2') ||
    href.includes('%2Fproducts%2Fcloud-dma') ||
    href.includes('/products/cloud-dma') ||
    href.includes('%2Fproducts%2Fskin-changer') ||
    href.includes('/products/skin-changer') ||
    href.includes('%2Fproducts%2Fugc') ||
    href.includes('/products/ugc')
  ) {
    return checkoutPath('dota2');
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    const base = url.split('?')[0];
    if (href === url || href.startsWith(`${url}&`) || href.startsWith(`${base}?`) || href.startsWith(`${base}/`)) {
      return checkoutPath(product);
    }
  }

  return href;
}
