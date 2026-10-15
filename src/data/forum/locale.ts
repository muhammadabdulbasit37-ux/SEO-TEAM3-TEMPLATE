import type { SiteLocale } from '../../i18n/locales';
import type { ForumPost } from '../forum';
import { forumCategories as forumCategoriesEn, forumPosts as forumPostsEn } from '../forum';

/** Forum threads stay English on all locales until replaced. */
export function getForumCategories(_locale: SiteLocale) {
  return forumCategoriesEn;
}

export function getForumPosts(_locale: SiteLocale): ForumPost[] {
  return forumPostsEn;
}

export function getForumPost(slug: string, _locale: SiteLocale): ForumPost | undefined {
  return forumPostsEn.find((p) => p.slug === slug);
}
