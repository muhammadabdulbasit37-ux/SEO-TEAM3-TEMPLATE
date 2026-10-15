import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { PRODUCT_BASE, SITE_DOMAIN, SITE_NAME } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: SITE_NAME,
    domain: SITE_DOMAIN,
    title: 'Dota Cheats & Hacks | Dota 2 Scripts, Map Hack & ESP',
    description:
      'Undetected dota 2 cheats with scripts, map hack, zoom hack and skin changer for PC ranked, updated every patch at {siteDomain}.',
  },
  nav: [
    { id: 'products', href: `${productBase}`, label: 'Product', shortLabel: 'Product' },
    { id: 'hwidSpoofer', href: '/hwid-spoofer/', label: 'HWID Spoofer', shortLabel: 'HWID' },
    { id: 'blog', href: '/blog/', label: 'Blog' },
    { id: 'forum', href: '/forum/', label: 'Forum' },
    { id: 'faq', href: '/faq/', label: 'FAQ' },
    { id: 'support', href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Dota 2, patch build online',
    eyebrow: '#1 Cheats Provider',
    titleLine1: 'Dota 2',
    titleLine2: 'Cheats & Hacks',
    subtitle:
      'Dota cheats with scripts, map hack, zoom hack and skin changer for PC ranked on Steam, updated every patch with preset configs and support at {siteDomain}.',
    ctaPrimary: 'View products',
    modesLabel: 'Dota 2 modes',
    modes: ['Ranked', 'Turbo', 'All Pick', 'Captains Mode'],
    metrics: [
      { label: 'Stream-safe', strong: 'Yes' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Users', strong: '300+' },
      { label: 'Live support', strong: '24/7' },
    ],
    statusPills: [
      'ESP Active',
      'Radar Online',
      'Season Build',
      'Undetected',
      'Soft Aim Ready',
      'No Recoil',
      'Stream Proof',
      'Loot ESP',
      'Skeleton ESP',
      'UAV Radar',
      'Map Hack',
      '24/7 Support',
      'Instant Delivery',
      'Ranked Safe',
      'Trigger Bot',
      'Bone Select',
      'Live Status',
      'Auto Updates',
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need in one package',
    subtitle: 'Scripts, map control and utility tools for Dota 2, maintained every patch.',
    items: [
      {
        title: 'Scripts',
        subtitle: 'Combo. Cast. Win.',
        desc: 'Full script engine for ranked and Turbo, tuned for Invoker, Lion, PA and dozens of burst heroes.',
        bullets: [
          'Auto Combo chains for Invoker, Lion, PA and burst cores',
          'Orbwalker and last-hit assist for carries',
          'Smart Cast with humanized delay sliders',
          'Prediction modules for skillshots and blinks',
          'Portal presets per hero, role and game mode',
        ],
        tags: ['dota 2 scripts', 'auto combo', 'smart cast'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Map Hack / ESP',
        subtitle: 'See Ganks Before They Hit.',
        desc: 'Vision advantage without guessing: ESP stays readable in teamfights and when multiple heroes dive your lane.',
        bullets: [
          'Hero boxes, HP bars and cooldown readouts',
          'Ward and sentry locator with range hints',
          'Smoke, TP and missing-enemy alerts',
        ],
        tags: ['dota 2 map hack', 'dota 2 esp', 'ward esp'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Minimap & Runes',
        subtitle: 'Map Control Without Wards.',
        desc: 'Timers and minimap overlays so you rotate on bounty, power runes and wave timing, not guesswork.',
        bullets: ['Bounty and power rune countdowns', 'Enemy last-seen on minimap hack', 'Jungle camp stack reminders'],
        tags: ['minimap hack', 'rune timer', 'map awareness'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Auto Combo',
        subtitle: 'Land Combos Like a Pro.',
        desc: 'One-key bursts with sane defaults for ranked, tighten timings as you get comfortable.',
        bullets: ['Target Selector for focus fire', 'Activator for BKB, Hex and Orchid', 'Per-hero combo chains in portal'],
        tags: ['auto combo', 'activator', 'target selector'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Utility Suite',
        subtitle: 'Extra Tools for Clutch Moments.',
        desc: 'Skin Changer, kill steal, Auto Dagon and more, beyond raw scripts and map hack.',
        bullets: [
          'Skin Changer: Preview arcanas and immortals locally',
          'Auto Kill Steal: Finish low-HP enemies with perfect timing',
          'Auto Dagon: Lethal item activation at combo end',
          'Stream Proof: Hide overlays from OBS capture',
        ],
        tags: ['skin changer', 'kill steal', 'stream proof'],
        bento:
          'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Auto Farm Bot',
        subtitle: 'Efficient Farm. Zero Tilt.',
        desc: 'Recover net worth when lanes go wrong, automation stays humanized to avoid obvious bot paths.',
        bullets: [
          'Lane last-hit and deny assist under tower',
          'Jungle pathing with camp stack timing',
          'Safe retreat when enemy heroes show on ESP',
          'Turbo-friendly farm presets',
        ],
        tags: ['auto farm', 'last hit bot', 'jungle stack'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Creators Stay Safe.',
        desc: 'Keep overlays on your monitor while capture software records a clean game feed.',
        bullets: ['OBS and Game Bar safe modes', 'Toggle stream proof per module', 'Test checklist in portal docs'],
        tags: ['obs safe', 'stream proof', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Zoom Hack',
        subtitle: 'See More of the Fight.',
        desc: 'Pull camera back for map awareness without losing last-hit precision in lane.',
        bullets: ['Distance caps per game mode', 'Quick reset to default FOV', 'Pairs with minimap ESP'],
        tags: ['zoom hack', 'camera', 'vision'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Cloud Config & Updates',
        subtitle: 'Patch Day Ready.',
        desc: 'Same presets on every PC, portal updates track Dota 2 and VAC patch days.',
        bullets: ['Cloud backup for slider profiles', 'Loader push within hours of patches', 'Discord #status for build notes'],
        tags: ['cloud sync', 'auto update', 'presets'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Ranked tooling backed by patches, not promises',
    subtitle:
      'Most dota 2 cheat shops ship stale loaders, obvious automation, and ticket bots. We built {siteDomain} around patch-day delivery, humanized scripts, and live operators.',
    usLabel: 'DotaCheats',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'VAC-aware builds pushed within hours of Dota 2 updates, check Discord #status before you queue ranked.',
      },
      {
        title: 'Humanized scripts & delays',
        desc: 'Delay Setting, Target Selector and conservative defaults mimic high-MMR timing, not instant bot bursts that flood reports.',
      },
      {
        title: 'Live Discord operators',
        desc: 'Real engineers for loader setup, hero configs and HWID resets: 24/7 shift coverage, not copy-paste FAQ tickets.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'Overlay suite with OBS-safe modes, no risky DLL injection into the Dota 2 process like legacy providers still sell.',
      },
      {
        title: 'Cloud preset sync',
        desc: 'Ranked, Turbo and per-hero profiles backup to the portal, same sliders on any PC without rebuilding from scratch.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through Discord ops, most providers lock one rig or charge for every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Average time to ship a loader build after major Dota 2 or VAC changes.',
      },
      {
        value: '24/7',
        title: 'Operator support',
        desc: 'Discord engineers on shift for setup, configs and account issues.',
      },
      {
        value: '300+',
        title: 'Active operators',
        desc: 'Steam PC players running scripts, map hack and utilities on {siteDomain}.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to ranked queue in just',
    titleHighlight: 'three simple steps',
    intro:
      'Getting started is easy. Follow the operator portal flow to download the loader, load presets, and queue Dota 2 on Steam PC, with live Discord help if anything blocks you.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your operator dashboard, and pull the latest patch loader build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the external loader, import ranked or Turbo presets, and tune scripts plus map hack sliders.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & queue Dota 2',
        desc: 'Check the live status banner, launch Steam Dota 2, and play with cloud-backed profiles saved in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching Dota 2 after updates.',
    items: ['Windows 10 & 11', 'Steam', 'Dota 2 client', 'Auto updater', 'Config cloud sync', 'Discord support', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Elite cheat',
    title: 'Dota 2 Elite cheats',
    subtitle: 'Full ranked suite, map hack, scripts, bots, Skin Changer, and priority patch delivery.',
    viewAll: 'View Elite details',
    explore: 'Explore',
    items: [
      {
        badge: 'Limited slots',
        tier: 'Private',
        name: 'Elite',
        title: 'Dota 2 Elite',
        desc: 'Private dota 2 cheats build with Auto Farm Bot, Auto Kill Steal, Auto Dagon, Skin Changer and direct dev support.',
        features: ['Auto Farm Bot', 'Auto Kill Steal', 'Auto Dagon', 'Full map hack suite', 'Skin Changer', 'Priority patch queue'],
        more: 42,
        href: productBase,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Store',
    title: 'Our products',
    subtitle: 'Dota 2 Cheats and HWID Spoofer, two tools for ranked play and hardware resets.',
    viewAll: 'View all cheats',
    spooferHubNote: 'Need a hardware reset before a new account? See ',
    spooferHubLink: 'HWID Spoofer',
    backToCheats: 'Back to product',
    showcaseHeading: 'Product Showcase',
    swipeHint: 'Swipe for more screenshots',
    checkoutEyebrow: 'Checkout',
    checkoutSelect: 'Select subscription',
    checkoutSingle: 'Purchase option',
    checkoutTotal: 'Total',
    bestValue: 'Best value',
    planMonthly: 'Monthly',
    planLifetime: 'Lifetime',
    planOneTime: 'One-time access',
    planPerMonth: 'USD / month',
    planOneTimeNote: 'USD, one time',
    get: 'Get',
    explore: 'Explore',
    buyNow: 'Buy now',
    viewDetails: 'View details',
    items: [
      {
        badge: 'Available',
        category: 'System utility',
        title: 'HWID Spoofer',
        subtitle: 'Clean slate for your PC',
        desc: 'Hardware ID spoofing for disk serials, MAC addresses and GPU IDs, follow the portal setup guide before launching Dota 2.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 9,
        href: '/hwid-spoofer/',
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'Cheat codes, script setup, map hack config and patch-day checks for Dota 2.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic to find setup guides, feature deep-dives, and patch-day notes.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    emptyArchive: 'No articles yet. New guides will show up here.',
    viewAll: 'View all articles',
    read: 'Read',
    articleActionsAria: 'Continue reading',
    buyCta: 'Buy Dota 2 Cheats',
    moreArticles: 'More articles',
    sidebarAria: 'Article sidebar',
    tocTitle: 'In this article',
    relatedTitle: 'Related guides',
    filterToolbarAria: 'Filter articles by topic',
    items: [],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning mid-match without tabbing through chaos.',
    items: [
      { num: '01', label: 'Scripts', title: 'Combos that adapt to your hero', desc: 'Auto Combo, Orbwalker, Smart Cast and Delay Setting in one scripts tab.' },
      { num: '02', label: 'Vision', title: 'Map hack that stays readable', desc: 'Filter by distance, team color, ward type and smoke alert sensitivity.' },
      { num: '03', label: 'Minimap', title: 'Runes and rotates on lock', desc: 'Rune timers, enemy hints and minimap hack on a compact overlay.' },
      { num: '04', label: 'Heroes', title: 'Per-hero script profiles', desc: 'Save Invoker, Lion, PA and support scripts and swap with hotkeys.' },
      { num: '05', label: 'Bots', title: 'Farm & lane automation', desc: 'Auto Farm Bot, stack timer and courier manager for efficient farming.' },
      { num: '06', label: 'Profiles', title: 'Configs for every mode', desc: 'Separate ranked, Turbo and casual presets with cloud backup.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from purchase to a Dota 2 profile you can reuse every session.',
    ctaLabel: 'View products',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check VAC status',
        desc: 'Read the live banner on {siteDomain} before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your product',
        desc: 'Buy Dota 2 Cheats or HWID Spoofer, the workflow that matches your situation.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable modules, and tune delays in a practice lobby.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, save ranked and Turbo presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how Dota 2 plays.',
    items: [
      { num: '01', title: 'Patch-day ready', desc: 'Patch notes hit Discord and the portal before the official blog, check before you queue ranked.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with safe script delays and map hack ranges, then tune up, not the other way around.' },
      { num: '03', title: 'Real operator support', desc: 'Stuck on loader or hero configs? Discord staff walk you through live, not copy-paste FAQs.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'DotaCheats support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Speak to our team about tiers and access.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Chat to support',
        desc: "We're here for loader, HWID and account issues.",
        linkLabel: '{supportEmail}',
        href: 'mailto:{supportEmail}',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans and setup, before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Live operators',
        desc: 'Discord engineers on shift 24/7.',
        linkLabel: 'Open contact page',
        href: '/support/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on {siteDomain} or via our secure checkout.' },
      { title: 'Platform', desc: 'Steam on Windows 10 or 11, and your Dota 2 client version.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or Steam.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access, no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Dota 2 cheats are online?',
        a: 'The live status banner is on {siteDomain} and in the Discord #status channel. Always check after a Dota 2 or VAC update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Dota 2.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party dota cheats?',
        a: 'Yes, any modification carries risk. VAC and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Dota 2 via Steam on Windows 10/11 64-bit only. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes, use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'Product and HWID Spoofer live at {siteDomain}/product/ and {siteDomain}/hwid-spoofer/ with feature lists and checkout via our partner.',
      },
    ],
  },
  footer: {
    tagline: 'Dota 2 cheats, scripts, map hack and tools for PC. {siteDomain}',
    explore: 'Explore',
    exploreLinks: [
      { id: 'products', href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { id: 'products', href: productBase, label: 'Product', ariaLabel: 'Product' },
      { id: 'hwidSpoofer', href: '/hwid-spoofer/', label: 'HWID Spoofer', ariaLabel: 'HWID Spoofer' },
      { id: 'blog', href: '/blog/', label: 'Blog', ariaLabel: 'Blog' },
      { id: 'forum', href: '/forum/', label: 'Forum', ariaLabel: 'Forum' },
    ],
    supportLinks: [
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
      { href: '/support/', label: 'Contact support', ariaLabel: 'Support' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About DotaCheats',
      description:
        'DotaCheats provides Dota 2 Cheats, HWID Spoofer and PC support resources at {siteDomain}.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'DotaCheats is a PC-focused resource for Dota 2 players exploring scripts, map hack, zoom hack and Skin Changer workflows. We publish tier comparisons, setup guides, and live status notes so you can evaluate dota cheats before checkout.',
            'All product names are used for identification only.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers Dota 2 Cheats and HWID Spoofer. Blog articles explain ranked-safe configs, patch-day checks, and VAC update behavior.',
            'Content is updated when patches land or when loader modules shift. Check the homepage status banner and Discord #status before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors, or checkout are handled through Discord and email support. Include your order email, Steam account, and Windows version when opening a ticket.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How DotaCheats handles analytics, cookies, and contact data when you use {siteDomain}.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages, we do not store payment card data on {siteDomain}.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund, and use terms for DotaCheats products and {siteDomain}.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using {siteDomain} or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell Dota 2 Cheats and HWID Spoofer delivered through an operator portal and loader for Steam on Windows.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when Dota 2 or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. {siteDomain} does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching Dota 2.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, VAC penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup: Steam Dota 2 on Windows 10/11, current loader from the portal, and the live status banner showing online when you started, contact us through the Support page. Include your order email, Windows version, Dota 2 build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Dota 2 can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue ranked while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'DotaCheats Support',
      description:
        'Get support for loader, HWID, and checkout questions at {siteDomain}.',
    },
  },
  common: {
    breadcrumbHome: 'Home',
    breadcrumbProducts: 'Product',
    breadcrumbBlog: 'Blog',
    breadcrumbForum: 'Forum',
    breadcrumbFaq: 'FAQ',
    breadcrumbAbout: 'About',
    breadcrumbCompareUtilities: 'Compare utilities',
    breadcrumbPrivacy: 'Privacy',
    breadcrumbTerms: 'Terms',
    breadcrumbSupport: 'Support',
    contactSupport: 'Contact support',
    backToProducts: 'Back to product',
  },
  notFound: {
    metaDescription: 'The page you requested could not be found on {siteDomain}.',
    title: 'Page not found',
    body: 'That URL does not exist or may have moved. Head back to the homepage or browse cheat tiers and products.',
    backHome: 'Back to home',
    viewProducts: 'View products',
    viewElite: 'View Elite cheats',
  },
  pages: {
    faq: {
      eyebrow: 'Help center',
      title: 'FAQ for cheats, products & guides',
      description:
        'Everything about Dota 2 Cheats, HWID Spoofer, safety and blog topics in one place.',
      schemaName: 'FAQ: Dota 2 Cheats & Products',
      schemaDescription:
        'Answers about Dota 2 cheat tiers, map hack, scripts, HWID tools, blog guides and checkout at {siteDomain}.',
    },
    forum: {
      eyebrow: 'Dota 2 community forum',
      title: 'Dota 2 Community Forum',
      description:
        'Archived, read-only threads on console setup, map awareness, patch updates, and hero builds. Replies are closed.',
      exploreGuides: 'Explore the guides',
      postsAria: 'Community posts',
      sortAria: 'Post sorting',
      sortPopular: 'Popular',
      sortLatest: 'Latest',
      sortTop: 'Most discussed',
      searchPlaceholder: 'Search discussions',
      searchAria: 'Search discussions',
      filterAria: 'Filter discussions by topic',
      filterAll: 'All topics',
      resultsCount: 'guide discussions',
      voteAria: 'Discussion voting',
      upvoteAria: 'Upvote this discussion',
      downvoteUnavailableAria: 'Downvoting is unavailable',
      guideTeam: 'DotaCheats guide team',
      guideBasedQa: 'Guide-based Q&A',
      fromGuide: 'From the guide:',
      comments: 'comments',
      closedThread: 'Closed thread',
      closedBy: 'Closed by archive',
      repliesClosed: 'Replies are closed',
      readDiscussion: 'Read discussion',
      empty: 'No discussions match. Try another search or topic.',
      emptyArchive: 'No discussions yet. New threads will show up here.',
      categoryGeneral: 'General',
      categoryGuides: 'Guides & Builds',
      categoryPatch: 'Patch Talk',
      categoryCommunity: 'Community',
      paginationAria: 'Discussion pages',
      pagePrevious: 'Previous',
      pageNext: 'Next',
      sidebarTitle: 'DotaCheats Community',
      sidebarIntro: 'Read-only archive. Threads stay up for reference, you cannot start a thread or reply.',
      statsDiscussions: 'guide discussions',
      statsTopics: 'topics',
      exploreAllGuides: 'Explore all guides',
      communitiesHeading: 'Communities',
      browseRelated: 'Browse related Q&A',
      browseAllCommunities: 'Browse all communities',
      guidelinesHeading: 'Community guidelines',
      guideline1: 'Keep it friendly and constructive',
      guideline2: 'Stay on topic and add context',
      guideline3: 'Mark spoilers and sensitive content',
      readFullGuidelines: 'Read the full guidelines',
      sidebarFoot: 'About · Guidelines · Privacy · Terms',
    },
    utilities: {
      title: 'HWID Spoofer',
      description: 'Hardware ID reset when new Steam accounts fail on one PC but work elsewhere.',
      tableAria: 'HWID Spoofer overview',
      tableUtility: 'Product',
      tableBestFor: 'Best for',
      tableProductPage: 'Product page',
      viewDetails: 'View',
      includes: 'Includes:',
      moreFeatures: 'more',
      backToProducts: 'Back to product',
      schemaName: 'HWID Spoofer',
      useCases: {
        'hwid-spoofer':
          'New PC or hardware flag after a ban. Reset how your machine appears before a new account.',
      },
    },
  },
  pageSeo: {
    '/': {
      title: 'Dota 2 Cheats & Hacks | Scripts, Map Hack & ESP',
      description:
        'Dota 2 cheats for PC ranked: scripts, map hack, zoom hack, and skin changer tiers updated every patch at {siteDomain}.',
    },
    '/product/': {
      title: 'Dota 2 Elite Cheats | Bots & Full Map Hack',
      description:
        'Dota 2 cheats for Steam ranked: auto farm bot, kill steal, skin changer, full map hack suite, and priority patch delivery on {siteDomain}.',
    },
    '/hwid-spoofer/': {
      title: 'Dota 2 HWID Spoofer | Hardware ID Reset Tool',
      description:
        'HWID Spoofer for Dota 2 and Steam: disk serials, MAC, and GPU ID workflow with setup guide on {siteDomain}.',
    },
    '/blog/': {
      title: 'Dota 2 Cheats Guides & Patch Notes',
      description:
        'Setup guides, Lite vs Pro comparisons, VAC patch checklists, and ranked config tips for dota cheats.',
    },
    '/forum/': {
      title: 'Dota 2 Community Forum | DotaCheats',
      description:
        'Join Dota players to discuss heroes, builds, patch changes, guides, and community moments.',
    },
    '/faq/': {
      title: 'FAQ | Dota 2 Cheats, Products & Setup',
      description:
        'Answers on cheat tiers, map hack, scripts, HWID tools, checkout, and blog guides at {siteDomain}.',
    },
    '/terms/': {
      title: 'Terms & Conditions | DotaCheats',
      description:
        'Purchase terms, license use, and refund policy for DotaCheats products sold through {siteDomain}.',
    },
    '/privacy/': {
      title: 'Privacy Policy | DotaCheats',
      description:
        'How {siteDomain} uses analytics, cookies, and contact data when you browse or request support.',
    },
    '/about/': {
      title: 'About DotaCheats',
      description:
        'What DotaCheats publishes: Dota 2 cheat tiers, utilities, guides, and status notes at {siteDomain}.',
    },
    '/support/': {
      title: 'Support | DotaCheats',
      description:
        'Get help with loader setup, HWID, and checkout for Dota 2 Cheats and HWID Spoofer.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsNav: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'DotaCheats home',
    checkoutAria: 'Start checkout',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
    languageSwitcherLabel: 'Language',
    languageNames: {
      en: 'English',
      es: 'Español',
      de: 'Deutsch',
      fr: 'Français',
    },
  },
};
