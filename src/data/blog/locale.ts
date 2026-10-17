import type { SiteLocale } from '../../i18n/locales';
import type { BlogPostFull } from './types';
import { blogPosts as blogPostsEn } from './posts';
import esBlog from './locales/es.json';
import deBlog from './locales/de.json';
import frBlog from './locales/fr.json';

const byLocale: Record<Exclude<SiteLocale, 'en'>, BlogPostFull[]> = {
  es: esBlog as BlogPostFull[],
  de: deBlog as BlogPostFull[],
  fr: frBlog as BlogPostFull[],
};

export function getBlogPostsForLocale(locale: SiteLocale): BlogPostFull[] {
  if (locale === 'en') return blogPostsEn;
  return byLocale[locale] ?? blogPostsEn;
}

export function getBlogPost(slug: string, locale: SiteLocale): BlogPostFull | undefined {
  return getBlogPostsForLocale(locale).find((p) => p.slug === slug);
}
