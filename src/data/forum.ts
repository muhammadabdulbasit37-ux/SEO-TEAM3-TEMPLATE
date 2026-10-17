export type { ForumComment, ForumPost } from './forum/types';
import type { ForumPost } from './forum/types';
import { forumPostsEn } from './forum/posts/en-threads';

export const forumCategories = [
  { name: 'Buying Questions', tone: 'blue', icon: 'tag' },
  { name: 'Features', tone: 'purple', icon: 'layers' },
  { name: 'Setup Help', tone: 'green', icon: 'settings' },
  { name: 'Status and Updates', tone: 'orange', icon: 'refresh' },
  { name: 'Anti-Cheat', tone: 'orange', icon: 'shieldCheck' },
  { name: 'Ban Help', tone: 'green', icon: 'alert' },
] as const;

export const forumPosts: ForumPost[] = forumPostsEn;

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
