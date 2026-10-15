import type { SiteLocale } from '../../i18n/locales';
import type { SiteFaqItem } from '../faq';
import { localizeInlineHtmlLinks } from '../../utils/localizeHtmlLinks';
import { siteFaqs as siteFaqsEn } from '../faq';
import esFaq from './locales/es.json';
import deFaq from './locales/de.json';
import frFaq from './locales/fr.json';

type FaqRow = { id: string; q: string; a: string };

const byLocale: Record<Exclude<SiteLocale, 'en'>, FaqRow[]> = {
  es: esFaq as FaqRow[],
  de: deFaq as FaqRow[],
  fr: frFaq as FaqRow[],
};

function mergeFaqs(locale: SiteLocale): SiteFaqItem[] {
  if (locale === 'en') return siteFaqsEn;
  const translated = new Map(byLocale[locale].map((row) => [row.id, row]));
  return siteFaqsEn.map((item) => {
    const row = translated.get(item.id);
    if (!row) return item;
    return { ...item, q: row.q, a: row.a };
  });
}

export function getSiteFaqs(locale: SiteLocale): SiteFaqItem[] {
  const merged = mergeFaqs(locale);
  return merged.map((item) => ({
    ...item,
    a: localizeInlineHtmlLinks(item.a, locale),
  }));
}

export function getLandingFaqs(locale: SiteLocale): SiteFaqItem[] {
  return getSiteFaqs(locale).filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(locale: SiteLocale): SiteFaqItem[] {
  return getSiteFaqs(locale).filter((f) => f.topic !== 'all');
}
