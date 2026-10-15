import type { FaqItem } from '../i18n/types';
import type { SiteLocale } from '../i18n/locales';
import { schemaLanguage } from '../i18n/localeTags';
import { SUPPORT_EMAIL } from '../config/site';
import { SITE_ORIGIN, absoluteAssetUrl, canonicalUrl, getOrganizationSameAs } from '../config/seo';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

type SchemaLocale = SiteLocale | undefined;

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function websiteSchema(locale?: SchemaLocale, description?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DotaCheats',
    url: `${SITE_ORIGIN}/`,
    inLanguage: schemaLanguage(locale),
    description:
      description ??
      'Dota 2 cheats with scripts, map hack, zoom hack, Skin Changer and ranked-safe tiers for PC.',
  };
}

export function organizationSchema(locale?: SchemaLocale) {
  const sameAs = getOrganizationSameAs();
  const languages =
    locale === 'es'
      ? ['Spanish', 'English']
      : locale === 'de'
        ? ['German', 'English']
        : locale === 'fr'
          ? ['French', 'English']
          : ['English'];

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DotaCheats',
    url: `${SITE_ORIGIN}/`,
    logo: `${SITE_ORIGIN}/logo.svg`,
    email: SUPPORT_EMAIL,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: SUPPORT_EMAIL,
        url: canonicalUrl('/support/'),
        availableLanguage: languages,
        areaServed: 'Worldwide',
      },
    ],
  };
}

export function collectionPageSchema(input: {
  name: string;
  description: string;
  url: string;
  locale?: SchemaLocale;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.url),
    inLanguage: schemaLanguage(input.locale),
    isPartOf: {
      '@type': 'WebSite',
      name: 'DotaCheats',
      url: `${SITE_ORIGIN}/`,
    },
  };
}

export function webPageSchema(input: {
  name: string;
  description: string;
  url: string;
  locale?: SchemaLocale;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.url),
    inLanguage: schemaLanguage(input.locale),
    isPartOf: {
      '@type': 'WebSite',
      name: 'DotaCheats',
      url: `${SITE_ORIGIN}/`,
    },
  };
}

export function faqPageSchema(items: FaqItem[], locale?: SchemaLocale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: schemaLanguage(locale),
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: canonicalUrl(item.url),
    })),
  };
}

export function discussionForumPostingSchema(input: {
  name: string;
  text: string;
  url: string;
  author: string;
  comments: number;
  locale?: SchemaLocale;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DiscussionForumPosting',
    headline: input.name,
    articleBody: input.text,
    url: canonicalUrl(input.url),
    inLanguage: schemaLanguage(input.locale),
    author: { '@type': 'Person', name: input.author },
    commentCount: input.comments,
    isPartOf: { '@type': 'CollectionPage', name: 'DotaCheats Community Forum', url: canonicalUrl('/forum/') },
  };
}

function offerUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return canonicalUrl(path);
}

export function productSchema(input: {
  name: string;
  description: string;
  url: string;
  offerUrl: string;
  image?: string;
  sku?: string;
  locale?: SchemaLocale;
  priceUsd?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: input.name,
    description: input.description,
    inLanguage: schemaLanguage(input.locale),
    sku: input.sku ?? input.url.replace(/\//g, '-'),
    brand: {
      '@type': 'Brand',
      name: 'DotaCheats',
    },
    ...(input.image ? { image: absoluteAssetUrl(input.image) } : {}),
    offers: {
      '@type': 'Offer',
      url: offerUrl(input.offerUrl),
      priceCurrency: 'USD',
      ...(input.priceUsd != null ? { price: input.priceUsd } : {}),
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'DotaCheats',
      },
    },
  };
}

/** @deprecated Prefer productSchema for product/cheat detail pages. */
export function softwareApplicationSchema(input: {
  name: string;
  description: string;
  url: string;
  image?: string;
  offerUrl?: string;
  locale?: SchemaLocale;
}) {
  return productSchema({
    name: input.name,
    description: input.description,
    url: input.url,
    offerUrl: input.offerUrl ?? input.url,
    image: input.image,
    locale: input.locale,
  });
}

export function articleSchema(input: {
  name: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  locale?: SchemaLocale;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.name,
    description: input.description,
    url: canonicalUrl(input.url),
    image: absoluteAssetUrl(input.image),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: schemaLanguage(input.locale),
    author: {
      '@type': 'Organization',
      name: 'DotaCheats',
    },
    publisher: {
      '@type': 'Organization',
      name: 'DotaCheats',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_ORIGIN}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl(input.url),
    },
  };
}

export function parseBlogDate(date: string): string {
  const parsed = Date.parse(date);
  if (Number.isNaN(parsed)) return new Date().toISOString().slice(0, 10);
  return new Date(parsed).toISOString().slice(0, 10);
}
