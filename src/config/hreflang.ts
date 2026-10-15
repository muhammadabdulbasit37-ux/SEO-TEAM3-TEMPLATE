import type { LinkItem } from '@astrojs/sitemap';
import { localizePath, stripLocalePrefix } from '../i18n/paths';
import { DEFAULT_LOCALE, LOCALES, type SiteLocale } from '../i18n/locales';
import { canonicalUrl } from './seo';

export type HreflangAlternate = { hreflang: string; href: string };

/** HTML `<link rel="alternate" hreflang>` entries for a pathname in any locale. */
export function hreflangAlternatesForPath(pathname: string): HreflangAlternate[] {
  const base = stripLocalePrefix(pathname);
  const normalizedBase = base.endsWith('/') || base === '/' ? base : `${base}/`;
  if (/^\/(blog|forum)\/[^/]+\/$/.test(normalizedBase)) {
    const href = canonicalUrl(normalizedBase);
    return [
      { hreflang: DEFAULT_LOCALE, href },
      { hreflang: 'x-default', href },
    ];
  }

  const alternates: HreflangAlternate[] = LOCALES.map((locale) => ({
    hreflang: locale,
    href: canonicalUrl(localizePath(pathname, locale)),
  }));
  alternates.push({
    hreflang: 'x-default',
    href: canonicalUrl(localizePath(pathname, DEFAULT_LOCALE)),
  });
  return alternates;
}

/** Sitemap `xhtml:link` alternates for the same pathname cluster. */
export function sitemapAlternateLinks(pathname: string): LinkItem[] {
  return hreflangAlternatesForPath(pathname).map(({ hreflang, href }) => ({
    lang: hreflang,
    url: href,
  }));
}

/**
 * Blog articles and forum threads are English-only until locale copy exists.
 * Locale URLs of those pages are duplicates and must stay out of the index.
 */
export function isUntranslatedLocaleCopy(pathname: string): boolean {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return /^\/(es|de|fr)\/(blog|forum)\/[^/]+\/$/.test(path);
}

export function isIndexablePath(pathname: string): boolean {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;

  if (isUntranslatedLocaleCopy(path)) return false;

  if (path.includes('/404') || path.startsWith('/go/') || path.includes('/rss.xml')) {
    return false;
  }
  if (/^\/(es|de|fr)\/404\//.test(path)) return false;
  if (path === '/en/' || path.startsWith('/en/')) return false;
  if (/^\/(es|de|fr)\/go(\/|$)/.test(path)) return false;

  const base = stripLocalePrefix(path);
  if (base === '/privacy/' || base === '/terms/') return false;

  return true;
}

export function localizedPathsForBase(basePath: string): Record<SiteLocale, string> {
  return Object.fromEntries(
    LOCALES.map((locale) => [locale, localizePath(basePath, locale)]),
  ) as Record<SiteLocale, string>;
}
