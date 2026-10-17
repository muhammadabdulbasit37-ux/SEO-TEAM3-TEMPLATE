import { CHEAT_PRODUCT_SLUGS, CHEATS_PRIMARY_SLUG, HWID_SPOOFER_SLUG } from '../config/catalog';
import { PRODUCT_BASE } from '../config/site';
import { getTranslations } from '../i18n';
import { deepApplySiteTokens } from '../i18n/brandTokens';
import type { SiteLocale } from '../i18n/locales';
import type { Translations } from '../i18n/types';
import { checkoutForSlug } from '../config/checkout';
import { EFT_SHOWCASE_GALLERY_KEYS } from '../config/gameplayMedia';
import { HWID_GALLERY_KEYS } from '../config/hwidMedia';
import type { IconName } from '../components/icons/types';
import { getProductCopyBundle, registerProductCopyBundle, type ProductCopyBundle } from './products/exportCopy';
import esProductCopy from './products/locales/es.json';
import deProductCopy from './products/locales/de.json';
import frProductCopy from './products/locales/fr.json';

export interface ProductSlide {
  /** Still image, or the poster frame when `videoSrc` is set. */
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
  /** `image` unless a clip is attached. */
  kind?: 'image' | 'video';
  /** MP4 or WebM. The slider shows this instead of the still; `src` stays the poster. */
  videoSrc?: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
  relatedForumSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  elite: [
    'escape-from-tarkov-cheats-price-monthly-vs-lifetime',
    'how-to-set-up-escape-from-tarkov-cheats-requirements',
    'tarkov-cloud-dma-explained-do-you-need-it',
    'tarkov-loot-esp-filters-price-category-containers',
    'tarkov-aimbot-settings-explained',
    'streamproof-tarkov-cheats-for-streamers',
    'battleye-and-escape-from-tarkov-cheats-what-to-know',
  ],
  'hwid-spoofer': [
    'tarkov-hwid-ban-how-hwid-spoofer-works',
    'battleye-and-escape-from-tarkov-cheats-what-to-know',
  ],
};

/** Community threads paired with each product detail page */
export const productRelatedForumSlugs: Record<string, string[]> = {
  elite: [
    'tarkov-cheats-monthly-or-lifetime-worth-it',
    'do-i-need-cloud-dma-for-tarkov-cheats',
    'tarkov-cheat-loader-not-working-what-to-check',
    'how-to-check-tarkov-cheat-status-after-patch',
  ],
  'hwid-spoofer': ['tarkov-hwid-ban-does-a-spoofer-help', 'tarkov-battleye-ban-honest-talk-risk'],
};

const productBase = PRODUCT_BASE;

const hwidAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Confirm spoofer status',
    desc: 'Read the live banner on {siteDomain} and Discord #status after BattlEye changes before you buy. Compatibility notes live on the status page.',
  },
  {
    num: '02',
    title: 'Select monthly or lifetime',
    desc: 'Monthly and lifetime plans include the same portal tools; pick the duration that matches how long you need hardware recovery access.',
  },
  {
    num: '03',
    title: 'Verify setup with ops',
    desc: 'Open Discord with your order email and Windows version so staff can flag obvious driver or shared-PC conflicts early.',
  },
  {
    num: '04',
    title: 'Run the portal checklist',
    desc: 'Restore point, driver cleanup, spoof pass, cold reboot, and identifier verification, and only then sign into a fresh Escape From Tarkov account.',
  },
];

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on {siteDomain} and Discord #status before purchase, especially after an Escape From Tarkov or BattlEye update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Escape From Tarkov Cheats or the utility that matches your goal. Review the feature list before checkout via our partner checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, Windows setup, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test offline, load presets, then run PMC raids when status is online.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Escape From Tarkov and BattlEye receive frequent updates. Confirm module availability on the live status panel at {siteDomain} before you purchase or launch. Cloud DMA is a separate purchase when required for full functionality.';

const sharedLimitations =
  'Third-party software in Escape From Tarkov can violate Battlestate Games terms and lead to BattlEye bans or account action. You use this software at your own risk. Compatibility and availability can change after game, BattlEye, or Windows updates without notice.';

const eftSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit (Intel or AMD).' },
  { icon: 'reqWifi', text: 'Stable internet and loader access after purchase.' },
  { icon: 'reqSettings', text: 'Current Escape From Tarkov client; check status after major patches.' },
  { icon: 'reqShieldGuide', text: 'Cloud DMA is a separate purchase when required for full functionality.' },
];

const galleryRaw = {
  gpDaylightEsp: {
    src: '/images/gameplay/eft-esp-daylight-player-highlights.webp',
    alt: 'Escape From Tarkov first-person view with player ESP showing red-highlighted figures, skeleton outlines, and distance labels in a sunlit industrial yard.',
    caption: 'Player ESP in daylight raids',
    captionDesc:
      'Red and green player highlights, skeleton wireframes, and distance readouts over an outdoor industrial map.',
  },
  gpNightEsp: {
    src: '/images/gameplay/eft-esp-night-vision-skeletons.webp',
    alt: 'Escape From Tarkov night-vision scene with skeleton ESP, PMC and Scav labels, and meter readouts visible through interior walls.',
    caption: 'Skeleton ESP at night',
    captionDesc:
      'Stick-figure skeletons, name tags, and distance markers through walls in a green-tinted indoor raid.',
  },
  gpWallEsp: {
    src: '/images/gameplay/eft-esp-enemies-through-concrete-wall.webp',
    alt: 'Escape From Tarkov first-person aim with red wallhack silhouettes and weapon labels visible through a concrete wall outdoors.',
    caption: 'ESP through hard cover',
    captionDesc:
      'Red enemy silhouettes and weapon callouts rendered through a concrete barrier while aiming down sights.',
  },
} satisfies Record<
  string,
  { src: string; alt: string; caption: string; captionDesc: string; videoSrc?: string }
>;

type GalleryKey = keyof typeof galleryRaw;

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((key) => {
    const item = galleryRaw[key];
    if (!item) throw new Error(`Missing gallery key: ${String(key)}`);
    const { src, alt, caption, captionDesc, videoSrc } = item;
    return {
      src,
      alt,
      caption,
      captionDesc,
      ...(videoSrc ? { videoSrc, kind: 'video' as const } : {}),
    };
  });
}

const eftShowcaseSlides = slide(...EFT_SHOWCASE_GALLERY_KEYS);

const hwidGalleryRaw = {
  hwidSerialCheck: {
    src: '/images/hwid-spoofer/hwid-spoofer-serial-check-panel.webp',
    alt: 'Operator portal serial screen with disk, board, display, UUID, GPU, and network rows marked changed or unchanged beside a check-serials action.',
    caption: 'Identifier diff view',
    captionDesc:
      'Scan each hardware row for changed versus unchanged values, then reboot only after the diff matches the portal checklist.',
  },
  hwidUefiSpoof: {
    src: '/images/hwid-spoofer/hwid-spoofer-uefi-spoof-panel.webp',
    alt: 'UEFI spoof tab showing permanent spoof switch, GPU and ethernet toggles, and a seed field on a dark mountain-themed dashboard.',
    caption: 'UEFI toggle board',
    captionDesc:
      'Enable GPU or ethernet spoofing, set a seed, and trigger permanent spoof without leaving the UEFI tab.',
  },
} satisfies Record<
  string,
  { src: string; alt: string; caption: string; captionDesc: string; videoSrc?: string }
>;

type HwidGalleryKey = keyof typeof hwidGalleryRaw;

function hwidSlide(...keys: HwidGalleryKey[]): ProductSlide[] {
  return keys.map((key) => {
    const item = hwidGalleryRaw[key];
    const { src, alt, caption, captionDesc, videoSrc } = item;
    return {
      src,
      alt,
      caption,
      captionDesc,
      ...(videoSrc ? { videoSrc, kind: 'video' as const } : {}),
    };
  });
}

const hwidShowcaseSlides = hwidSlide(...HWID_GALLERY_KEYS);

function slugFromHref(href: string): string {
  const normalized = href.replace(/^\//, '').replace(/\/$/, '');
  if (normalized === HWID_SPOOFER_SLUG || normalized.endsWith(`/${HWID_SPOOFER_SLUG}`)) {
    return HWID_SPOOFER_SLUG;
  }
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  if (!segment || segment === 'dota-2-cheats' || segment === 'cheats') {
    return CHEATS_PRIMARY_SLUG;
  }
  return segment;
}

const tierAbout: Record<string, ProductPage['about']> = {
  elite: [
    {
      type: 'p',
      text: 'This license covers main Escape From Tarkov raids with player ESP, loot ESP, aimbot, no recoil, radar and extract helpers. Arena is a separate product key. Cloud DMA is optional when you need full hardware pass-through.',
    },
    { type: 'h2', text: 'Tune before you queue' },
    {
      type: 'p',
      text: 'Load portal presets offline first, then raise ESP distance and aim smoothing over several sessions. Discord staff help with loader tabs if a module conflicts after a BattlEye patch.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  elite: [
    { type: 'h2', text: 'Plans and delivery' },
    {
      type: 'p',
      text: 'Choose monthly ($35) or lifetime ($150) at checkout. The operator portal unlocks instantly with loader download, preset library and patch notes. Check the live status banner before every session.',
    },
    { type: 'h2', text: 'Module layout' },
    {
      type: 'p',
      text: 'ESP, loot, aim, weapons, radar and utilities each have their own loader tab so you can disable combat assists while keeping loot filters during stash runs.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'Signals this utility fits' },
    {
      type: 'p',
      text: 'Reach for it when new Escape From Tarkov logins fail immediately on one machine yet succeed on another, which points to hardware enforcement. Skip it for account-only BattlEye outcomes; pair a clean account with conservative presets from [Escape From Tarkov Cheats](/product/) once identifiers look fresh. First run the portal compatibility scan, snapshot a Windows restore point, and after a cold reboot confirm identifiers actually changed before opening the game.',
    },
    { type: 'h2', text: 'Checklist order' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof pass, cold reboot, identifier verification, then a low-profile cheat profile before raiding. The portal and HWID blog guide mirror the same step order. Do not stack two spoof tools; shared or work PCs may be poor fits; driver-level edits stay your risk. Read the status page on {siteDomain} before checkout and again before launch.',
    },
    { type: 'h2', text: 'System requirements' },
    {
      type: 'p',
      text: 'Run it on 64-bit Windows 10 or 11 from an administrator account. Make a Windows restore point first, keep a steady connection while the portal verification tools run, and finish every step of the portal guide before you open Escape From Tarkov again.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  elite: {
    images: eftShowcaseSlides,
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: eftSystemRequirements,
    fullFeatures: [
      'Player ESP (box, skeleton, health, distance)',
      'PMC, Scav and boss ESP filters',
      'Loot ESP with category and price filters',
      'Container, corpse and quest item highlights',
      'Extract and transition markers',
      'Aimbot with FOV, smoothing and bone select',
      'No recoil and no sway toggles',
      'Stream-proof overlays',
      'Hotkeys and config save/load',
      '2D radar and OOF arrows',
      'Raids only (separate key from Arena)',
      'Instant delivery via operator portal',
      'Windows 10/11; Intel/AMD',
      'Check live status after BattlEye patches',
      'Cloud DMA optional for full functionality',
    ],
    overview: {
      title: 'One license for PMC raids on Windows',
      paragraphs: [
        'Escape From Tarkov Cheats bundles awareness and combat modules for main raids: player and loot ESP, aimbot, no recoil, radar, extract markers and stream-proof overlays. The loader groups settings by tab so you can run loot-only profiles or full combat loadouts.',
        'Licenses cover Windows 10 and 11 on Intel or AMD. Raids-only access excludes Arena; add Cloud DMA separately when your setup requires it. Monthly and lifetime plans are listed at checkout. Confirm online status on {siteDomain} before you buy or launch.',
      ],
    },
  },
  'hwid-spoofer': {
    images: hwidShowcaseSlides,
    goodToKnow:
      'Run the portal compatibility scan before any spoof pass. Snapshot a Windows restore point first. After a cold reboot, confirm identifier changes before you launch Escape From Tarkov.',
    limitations:
      'Designed for hardware-level flags, not account-only BattlEye restrictions. Never run two spoof tools together. Shared or work PCs may be unsuitable. Driver-level edits remain your risk; read the status page on {siteDomain} before checkout.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Admin rights on 64-bit Windows 10 or 11 for the portal steps.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a Windows restore point before the first spoof pass.' },
      { icon: 'reqShieldGuide', text: 'Finish the full portal guide before you open Escape From Tarkov after a spoof.' },
      { icon: 'reqWifi', text: 'Stable internet for portal verification and identifier diff tools.' },
    ],
    fullFeatures: [
      'Disk serial profiling kit',
      'MAC rotation controls',
      'Restore-point walkthrough',
      'Pre-flight compatibility scan',
      'Driver overlap detection',
      'Post-spoof validation steps',
      'Identifier change report',
      'Cold-reboot instructions',
      'Portal milestone checklist',
      'Discord hardware recovery desk',
    ],
    overview: {
      title: 'Hardware-first recovery for flagged rigs',
      paragraphs: [
        'BattlEye can tie bans to PC fingerprints while the Escape From Tarkov account still looks clean. This utility bundles disk, MAC, and GPU ID tooling with a restore-point checklist, portal compatibility scan, and post-reboot verification prompts designed to confirm changes before you raid again.',
        'Pick it when brand-new accounts collapse on one rig but work elsewhere, not when the penalty is account-only. After spoofing, load conservative presets from {siteDomain} and confirm the live status banner before your first PMC session.',
      ],
    },
  },
};

function buildTierPages(t: Translations): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = 'Escape From Tarkov Cheats';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.heroDesc ?? cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      relatedForumSlugs: productRelatedForumSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(t: Translations): ProductPage[] {
  const slug = HWID_SPOOFER_SLUG;
  const product = t.products.items.find((item) => slugFromHref(item.href) === slug);
  const content = productContent[slug];
  if (!product || !content) return [];

  return [
    {
      slug,
      kind: 'utility',
      badge: product.badge,
      category: product.category,
      name: product.title,
      title: product.title,
      subtitle: product.subtitle,
      desc: product.desc,
      features: product.features,
      more: product.more,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: {
        title: acquisitionFor(product.title).title,
        steps: hwidAcquisitionSteps,
      },
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      body: utilityBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      relatedForumSlugs: productRelatedForumSlugs[slug] ?? [],
    },
  ];
}

export function getProductPages(locale: SiteLocale): ProductPage[] {
  const t = getTranslations(locale);
  return [...buildTierPages(t), ...buildUtilityPages(t)].map((page) =>
    deepApplySiteTokens(applyProductCopy(page, locale)),
  );
}

export function getCheatPages(locale: SiteLocale) {
  return getProductPages(locale).filter((p) => p.kind === 'tier');
}

export function getProductPage(slug: string, locale: SiteLocale) {
  return getProductPages(locale).find((p) => p.slug === slug);
}

/** Tier slugs for sitemap extras, store lives at `PRODUCT_BASE` only. */
export function getAllProductSlugs(): string[] {
  const slugs = getAllCheatSlugs();
  const catalog = new Set<string>(CHEAT_PRODUCT_SLUGS);
  for (const slug of slugs) {
    if (!catalog.has(slug as (typeof CHEAT_PRODUCT_SLUGS)[number])) {
      throw new Error(`Cheat slug "${slug}" missing from CHEAT_PRODUCT_SLUGS in src/config/catalog.ts`);
    }
  }
  return [];
}

export function getHwidSpooferPage(locale: SiteLocale) {
  return getProductPage(HWID_SPOOFER_SLUG, locale);
}

export function getAllCheatSlugs() {
  return getCheatPages('en').map((p) => p.slug);
}

export function getHeroSlides(_locale: SiteLocale): ProductSlide[] {
  return eftShowcaseSlides;
}

const productCopyByLocale: Record<Exclude<SiteLocale, 'en'>, ProductCopyBundle> = {
  es: esProductCopy as ProductCopyBundle,
  de: deProductCopy as ProductCopyBundle,
  fr: frProductCopy as ProductCopyBundle,
};

function acquisitionTitleFor(productName: string) {
  return `How to get ${productName}`;
}

function buildEnglishProductCopyBundle(): ProductCopyBundle {
  const tierSlugs = ['elite'] as const;
  const utilitySlugs = ['hwid-spoofer'] as const;

  const tiers = Object.fromEntries(
    tierSlugs.map((slug) => {
      const content = productContent[slug];
      const displayName = 'Escape From Tarkov Cheats';
      return [
        slug,
        {
          about: tierAbout[slug],
          body: tierBodies[slug] ?? [],
          overview: content.overview,
          goodToKnow: content.goodToKnow,
          limitations: content.limitations,
          acquisitionTitle: acquisitionTitleFor(displayName),
        },
      ];
    }),
  ) as ProductCopyBundle['tiers'];

  const utilities = Object.fromEntries(
    utilitySlugs.map((slug) => {
      const content = productContent[slug];
      const title = 'HWID Spoofer';
      return [
        slug,
        {
          body: utilityBodies[slug] ?? [],
          overview: content.overview,
          goodToKnow: content.goodToKnow,
          limitations: content.limitations,
          acquisitionTitle: acquisitionTitleFor(title),
        },
      ];
    }),
  ) as ProductCopyBundle['utilities'];

  return {
    sharedGoodToKnow,
    sharedLimitations,
    acquisitionSteps: defaultAcquisitionSteps.map(({ num, title, desc }) => ({ num, title, desc })),
    systemRequirements: eftSystemRequirements.map((r) => r.text),
    gallery: Object.values(galleryRaw).map(({ alt, caption, captionDesc }) => ({
      alt,
      caption,
      captionDesc,
    })),
    tiers,
    utilities,
  };
}

registerProductCopyBundle(buildEnglishProductCopyBundle());

export const heroSlides = getHeroSlides('en');

function productCopyFor(locale: SiteLocale): ProductCopyBundle {
  if (locale === 'en') return getProductCopyBundle();
  return productCopyByLocale[locale];
}

function applyProductCopy(page: ProductPage, locale: SiteLocale): ProductPage {
  if (locale === 'en') return page;
  const copy = productCopyFor(locale);
  const bucket = page.kind === 'tier' ? copy.tiers[page.slug] : copy.utilities[page.slug];
  if (!bucket) return page;

  const steps = copy.acquisitionSteps.map((step) => ({ ...step }));
  const acquisition: ProductAcquisition = {
    title: bucket.acquisitionTitle,
    steps,
  };

  const images =
    page.kind === 'tier'
      ? page.images.map((slide, index) => {
          const g = copy.gallery[index];
          if (!g) return slide;
          return { ...slide, alt: g.alt, caption: g.caption, captionDesc: g.captionDesc };
        })
      : page.images;

  const systemRequirements = page.systemRequirements.map((req, index) => ({
    ...req,
    text: copy.systemRequirements[index] ?? req.text,
  }));

  return {
    ...page,
    overview: bucket.overview,
    body: bucket.body,
    about: 'about' in bucket ? bucket.about : page.about,
    goodToKnow: bucket.goodToKnow,
    limitations: bucket.limitations,
    acquisition,
    images,
    systemRequirements,
  };
}
