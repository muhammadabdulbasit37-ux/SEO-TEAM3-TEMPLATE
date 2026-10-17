import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, ROUTES } from '../utils/path';
import type { SiteLocale } from '../i18n/locales';
import { getSiteFaqs as getSiteFaqsForLocale } from './faq/locale';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'aim'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const cheats = link('Escape From Tarkov Cheats', ROUTES.cheats);
const hwid = link('HWID Spoofer', ROUTES.hwidSpoofer);
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('blog guides', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if Escape From Tarkov cheats are online?',
    a: a('The live status banner is on {siteDomain} and in the Discord #status channel. Always check after an Escape From Tarkov or BattlEye update.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Your portal unlocks the loader, setup guide and config library via our partner checkout. Follow the guide before launching Escape From Tarkov.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using third-party escape from tarkov cheats?',
    a: a('Yes, any modification carries risk. BattlEye and report systems evolve. Read current status and accept the risk before use.'),
    aHtml: `Yes, any modification carries risk. BattlEye and report systems evolve. Read current status and accept the risk before use. See our ${link('BattlEye and Tarkov cheats', '/blog/battleye-and-escape-from-tarkov-cheats-what-to-know/')} guide for context.`,
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Escape From Tarkov on Windows 10/11 64-bit only. macOS and Linux are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Yes, use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `${cheats} and ${hwid} are the two products we sell, feature lists and checkout via our partner.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is Escape From Tarkov ESP?',
    a: `Player ESP shows PMCs, Scavs and bosses with boxes, skeletons and distance readouts. Loot ESP highlights containers and valuable items. ${cheats} includes awareness overlays plus optional aimbot and no recoil modules.`,
    scopes: ['elite'],
  },
  {
    id: 'esp-vs-aim',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP and aimbot?',
    a: `ESP and loot highlights are information overlays; they do not move your crosshair. Aimbot, no recoil and trigger bot are combat assists on ${cheats}, tuned separately in the loader.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'faqEliteSlots',
    q: 'Why are Escape From Tarkov Cheats slots limited?',
    a: `Escape From Tarkov Cheats is a private build with direct dev support and priority patch delivery. Slot caps keep patch cycles fast. Check the status banner before checkout.`,
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can OBS capture my overlay?',
    a: `Stream-proof mode on ${cheats} hides overlays from OBS and Discord share. Test a local recording before going live.`,
  },
  {
    id: 'build-status',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Will the build stay online after every patch?',
    a: a('No. Online status is shown on the product page and status banner at purchase time only. Stop if the build shows updating, testing, or offline after a BattlEye update.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is ESP lower-profile than aimbot?',
    a: a('ESP is often less obvious than maxed aimbot, but it is still a cheat. BattlEye does not ignore overlays because you left aim assist off.'),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When should I add the HWID Spoofer to my setup?',
    a: `${hwid} is for when new Escape From Tarkov logins die on one PC yet succeed elsewhere. That points to hardware enforcement, not account-only BattlEye outcomes. After identifiers verify clean, pair a fresh account with ${cheats} and check status on {siteDomain} before raiding.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Is the loader injected into the game folder?',
    a: `EFT CHEATS runs external with cloud config sync, no files injected into the Escape From Tarkov directory. BattlEye risk still applies. See ${cheats}.`,
  },
  {
    id: 'blog-vs-cheats',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Are blog cheat codes the same as live raid cheats?',
    a: `No. Blog articles about offline or local testing do not replace the live loader. PMC raids use ${cheats} when status is online.`,
  },
  {
    id: 'blog-setup',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: 'Where do blog setup guides point for purchase?',
    a: `Guides link to ${cheats} and ${hwid}. Checkout runs through our partner, never paste loader files from random Discord DMs.`,
  },
  {
    id: 'who-cheats',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: 'Who should buy Escape From Tarkov Cheats?',
    a: `PMC raiders who want player ESP, loot ESP, aimbot, no recoil and priority patch delivery when slots are open.`,
    scopes: ['elite'],
  },
  {
    id: 'vac-update',
    topic: 'safety',
    icon: 'faqVacUpdate',
    q: 'What should I do after a BattlEye update?',
    a: a('Check {siteDomain} status and Discord #status. Do not launch until the banner shows online. Load conservative presets after any patch.'),
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a('Open Discord after purchase with your order email, Windows version and Escape From Tarkov client build. Staff walk through loader setup live.'),
  },
  {
    id: 'pmc-scav-raids',
    topic: 'plans',
    icon: 'faqTurboRanked',
    q: 'Do modules work in PMC and Scav raids?',
    a: `Yes. ${cheats} includes PMC and Scav presets in the portal. Tune ESP distance caps and aim smoothing before your first raid.`,
  },
  {
    id: 'zoom-hack',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'Which tier includes radar and extract ESP?',
    a: `2D radar and extract markers ship with ${cheats}. Use them to orient between fights and plan extracts.`,
    scopes: ['elite'],
  },
  {
    id: 'trigger-bot',
    topic: 'aim',
    icon: 'faqAutoFarm',
    q: 'Does the product include trigger bot?',
    a: `Optional trigger bot ships with ${cheats} alongside aimbot and no recoil. Start with conservative delay presets in the portal.`,
    scopes: ['elite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What are private Escape From Tarkov cheats?',
    a: a('Private means per-user keys and maintained builds, not public zip packs. EFT CHEATS ships portal delivery for the full raid suite on one cheats license.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `This site includes landing FAQs and per-page sections. See the ${faqPage} for all product, cheat and blog answers, or read ${blog} for deep guides.`,
  },
];

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter plans, ESP, aim and recoil, products, setup, and blog answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'aim',
  'safety',
  'products',
  'blog',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading. Visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export { getProductFaqs, getSiteFaqs, getLandingFaqs, getAllFaqs } from './faq/locale';

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-start',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Do offline cheat codes replace the live loader?',
      a: a('No. Local or offline testing does not replace the operator loader for PMC raids. Live raids use the product on {siteDomain} when status shows online.'),
    },
    {
      id: 'blog-guide-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which tier matches this guide?',
      a: `Setup and feature guides map to modules on ${cheats}. HWID and ban articles pair with ${hwid} when hardware is flagged.`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a('Check the article date and the live status banner. Patch-day articles note when modules change: Discord #status has the latest build notes.'),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from your operator portal after checkout, not from third-party links in comments or DMs.'),
    },
    {
      id: 'blog-setup-lobby',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test settings before a live raid?',
      a: a('Yes. Load conservative ESP and aim presets offline or in an empty raid first. Raise FOV, smoothing, and loot distance caps over several sessions.'),
    },
  ],
  Security: [
    {
      id: 'blog-sec-vac',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Does this article mean the build stays online?',
      a: a('No article replaces the live status banner. Check {siteDomain} and Discord #status after every patch before you launch.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${cheats} and ${hwid}. Feature lists on those pages are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Open Discord with your order email and the article slug. Staff reference the same portal presets mentioned in guides.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: a('Re-check status after every Escape From Tarkov update. Portal presets update with patch notes, reload configs instead of copying old sliders.'),
  },
];

export function getBlogFaqs(tag: string, slug: string, locale: SiteLocale = 'en'): SiteFaqItem[] {
  if (locale !== 'en') {
    const localized = getSiteFaqsForLocale(locale);
    const topicFaqs = localized.filter((f) => f.topic === 'blog').slice(0, 4);
    const extras: SiteFaqItem[] = [];
    if (slug.includes('esp') || slug.includes('loot') || slug.includes('radar')) {
      extras.push(...localized.filter((f) => f.topic === 'esp').slice(0, 2));
    }
    if (slug.includes('aim') || slug.includes('recoil') || slug.includes('trigger')) {
      extras.push(...localized.filter((f) => f.topic === 'aim').slice(0, 2));
    }
    if (slug.includes('hwid') || slug.includes('ban') || slug.includes('vac')) {
      extras.push(...localized.filter((f) => f.id === 'hwid-when' || f.topic === 'products').slice(0, 2));
    }
    extras.push(...localized.filter((f) => ['setup', 'safety'].includes(f.topic)).slice(0, 2));
    const seen = new Set<string>();
    return [...extras, ...topicFaqs, ...localized.filter((f) => f.topic === 'blog')].filter((item) => {
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    }).slice(0, 8);
  }
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('esp') || slug.includes('loot') || slug.includes('radar')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which product covers ESP from this article?',
      a: `${cheats} includes player ESP, loot ESP, radar and extract markers described in our raid guides.`,
    });
  }
  if (slug.includes('aim') || slug.includes('recoil') || slug.includes('trigger')) {
    slugHints.push({
      id: 'blog-slug-aim',
      topic: 'aim',
      icon: 'faqBlogSlugScripts',
      q: 'Which product includes aim modules from this article?',
      a: `${cheats} ships aimbot, no recoil and optional trigger bot with separate loader tabs.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban') || slug.includes('vac')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this guide replace the HWID Spoofer or cheat product pages?',
      a: `Recovery guides complement ${hwid} and ${cheats}, read product pages for workflow scope and realistic outcomes.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

