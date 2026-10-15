import { PRODUCT_BASE, SITE_DOMAIN, SITE_NAME, SITE_URL, SUPPORT_EMAIL } from '../config/site';

/** Placeholders in locale copy: `{siteDomain}`, `{siteName}`, `{siteUrl}`, `{supportEmail}`. */
const TOKEN_VALUES: Record<string, string> = {
  '{siteDomain}': SITE_DOMAIN,
  '{siteName}': SITE_NAME,
  '{siteUrl}': SITE_URL,
  '{supportEmail}': SUPPORT_EMAIL,
};

export function applySiteTokens(input: string): string {
  let out = input;
  for (const [token, value] of Object.entries(TOKEN_VALUES)) {
    if (out.includes(token)) out = out.split(token).join(value);
  }
  return out;
}

export function deepApplySiteTokens<T>(value: T): T {
  if (typeof value === 'string') return applySiteTokens(value) as T;
  if (Array.isArray(value)) return value.map((item) => deepApplySiteTokens(item)) as T;
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value)) {
      out[key] = deepApplySiteTokens(child);
    }
    return out as T;
  }
  return value;
}

/** Bind site identity from `src/config/site.ts` (single source for the next game conversion). */
export function bindSiteIdentity<T extends { site: { name: string; domain: string } }>(dict: T): T {
  return {
    ...dict,
    site: {
      ...dict.site,
      name: SITE_NAME,
      domain: SITE_DOMAIN,
    },
  };
}

export function finalizeLocaleDictionary<T extends { site: { name: string; domain: string } }>(dict: T): T {
  return deepApplySiteTokens(bindSiteIdentity(dict));
}
