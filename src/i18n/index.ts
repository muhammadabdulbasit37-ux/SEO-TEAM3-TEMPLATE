import type { Translations } from './types';
import { DEFAULT_LOCALE, isSiteLocale, type SiteLocale } from './locales';
import { localizePath } from './paths';
import { finalizeLocaleDictionary } from './brandTokens';
import { en } from './en';
import { es } from './es';
import { de } from './de';
import { fr } from './fr';
import esPageSeo from './pageSeo/es.json';
import dePageSeo from './pageSeo/de.json';
import frPageSeo from './pageSeo/fr.json';

const dictionaries: Record<SiteLocale, Translations> = {
  en: finalizeLocaleDictionary(en),
  es: finalizeLocaleDictionary({ ...es, pageSeo: esPageSeo as Translations['pageSeo'] }),
  de: finalizeLocaleDictionary({ ...de, pageSeo: dePageSeo as Translations['pageSeo'] }),
  fr: finalizeLocaleDictionary({ ...fr, pageSeo: frPageSeo as Translations['pageSeo'] }),
};

export function getTranslations(locale: string | undefined): Translations {
  if (locale && isSiteLocale(locale)) return dictionaries[locale];
  return dictionaries[DEFAULT_LOCALE];
}

/** Locale + dictionary + path localizer for Astro frontmatter. */
export function useLocale(currentLocale: string | undefined) {
  const locale = (currentLocale && isSiteLocale(currentLocale) ? currentLocale : DEFAULT_LOCALE) as SiteLocale;
  const t = getTranslations(locale);
  const lp = (path: string) => localizePath(path, locale);
  return { locale, t, lp };
}

export type { Translations } from './types';
export type { NavId, NavLink } from './types';
export { LOCALES, DEFAULT_LOCALE, type SiteLocale } from './locales';
export {
  getLocalizedPath,
  localizePath,
  localeFromPathname,
  stripLocalePrefix,
} from './paths';

export function avatarSrc(style: string, seed: string) {
  return `https://api.dicebear.com/9.x/${style}/png?seed=${seed}&size=28&backgroundColor=0a0d10,7f3dee,181f26,e9a82f,11161b`;
}

/** @deprecated Use getTranslations(Astro.currentLocale) in pages and layouts. */
export const t = en;
