import { DEFAULT_LOCALE, PREFIXED_LOCALES, isPrefixedLocale, type SiteLocale } from './locales';
import { normalizeInternalPath } from '../utils/path';

/** Strip `/es|de|fr/` prefix; leave English paths unchanged. */
export function stripLocalePrefix(pathname: string): string {
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

export function localizePath(pathname: string, locale: SiteLocale): string {
  const base = stripLocalePrefix(normalizeInternalPath(pathname));
  if (locale === DEFAULT_LOCALE) return base;
  if (base === '/') return `/${locale}/`;
  return `/${locale}${base}`;
}

export function getLocalizedPath(currentPathname: string, targetLocale: SiteLocale): string {
  return localizePath(currentPathname, targetLocale);
}

export function localeFromPathname(pathname: string): SiteLocale {
  const segment = pathname.split('/').filter(Boolean)[0];
  if (segment && isPrefixedLocale(segment)) return segment;
  return DEFAULT_LOCALE;
}
