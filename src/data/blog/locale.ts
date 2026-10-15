import type { SiteLocale } from '../../i18n/locales';
import type { BlogPostFull } from './types';
import { blogPosts as blogPostsEn } from './posts';

/** Blog articles stay English on all locales until replaced. */
export function getBlogPostsForLocale(_locale: SiteLocale): BlogPostFull[] {
  return blogPostsEn;
}

export function getBlogPost(slug: string, _locale: SiteLocale): BlogPostFull | undefined {
  return blogPostsEn.find((p) => p.slug === slug);
}
