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
    const { aHtml: _drop, ...rest } = item;
    return { ...rest, q: row.q, a: row.a };
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

export function getProductFaqs(
  locale: SiteLocale,
  slug: string,
  kind: 'tier' | 'utility',
): SiteFaqItem[] {
  const siteFaqsLocalized = getSiteFaqs(locale);
  const general = siteFaqsLocalized.filter(
    (f) => !f.scopes && ['setup', 'safety', 'plans', 'esp', 'aim'].includes(f.topic),
  );
  const scoped = siteFaqsLocalized.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqsLocalized.filter((f) =>
    ['build-status', 'vac-update', 'who-cheats'].includes(f.id),
  );

  const combined =
    kind === 'tier'
      ? [...scoped, ...tierCompare, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}
