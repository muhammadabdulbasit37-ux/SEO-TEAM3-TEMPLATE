/**
 * Game catalog routing, change these when converting the template to another title.
 *
 * 1. Update `SITE_*` and `PRODUCT_BASE` in `src/config/site.ts`.
 * 2. Add cheat tier slugs to `CHEAT_PRODUCT_SLUGS` (Astro i18n fallback builds `/es|de|fr/..` automatically).
 * 3. Add product copy in `src/data/products.ts` and `src/data/products/locales/{es,de,fr}.json`.
 * 4. Add hub SEO keys under `pageSeo` in `src/i18n/en.ts` plus `src/i18n/pageSeo/{es,de,fr}.json`.
 */
import { PRODUCT_BASE, HWID_SPOOFER_PATH } from './site';

export { PRODUCT_BASE, HWID_SPOOFER_PATH };

/** Primary cheat product served at `PRODUCT_BASE` (store page). */
export const CHEATS_PRIMARY_SLUG = 'elite' as const;

/** Cheat slugs referenced in copy and checkout, only the store slug is a public page. */
export const CHEAT_PRODUCT_SLUGS = [CHEATS_PRIMARY_SLUG] as const;

/** @deprecated Use `CHEAT_PRODUCT_SLUGS`, kept for scripts that expect `PRODUCT_SLUGS`. */
export const PRODUCT_SLUGS = CHEAT_PRODUCT_SLUGS;

export const HWID_SPOOFER_SLUG = 'hwid-spoofer';
