import type { BlogPostFull } from '../types';

/** Part 6 gameplay masters only (1024×576). */
const imgDaylight = '/images/gameplay/eft-esp-daylight-player-highlights.webp';
const imgNight = '/images/gameplay/eft-esp-night-vision-skeletons.webp';
const imgWall = '/images/gameplay/eft-esp-enemies-through-concrete-wall.webp';

export const blogPostsEn: BlogPostFull[] = [
  {
    tag: 'Features',
    title: 'Tarkov Loot ESP: How to Filter Loot by Price, Category and Container',
    slug: 'tarkov-loot-esp-filters-price-category-containers',
    image: imgDaylight,
    imageAlt: 'Escape From Tarkov raid view with loot ESP labels showing item names and prices',
    desc: 'A practical look at Tarkov loot ESP: price filters, loot categories, containers and presets, and how to keep your screen readable instead of cluttered.',
    metaTitle: 'Tarkov Loot ESP: Filters, Price and Containers Explained',
    metaDescription:
      'See how Tarkov loot ESP works, including minimal price filters, loot categories, containers, quest items and presets, and how to set it up for faster, cleaner raids.',
    date: '2026-07-16',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'Loot is the whole reason most people run raids in Tarkov. It is also where a lot of time gets wasted. You clear a room, open three containers, and walk out with nothing worth the slots. Loot ESP exists to fix that problem, and the difference between a good setup and a bad one comes down to filters.',
      },
      { type: 'h2', text: 'What loot ESP actually does' },
      {
        type: 'p',
        text: 'Loot ESP draws labels on items and containers in the world, so you can see what is nearby without checking every shelf and drawer. In the Escape From Tarkov cheat menu, the loot section covers items on the ground, containers, stashes, dead bodies, computers and similar spots, with distance and price shown next to what it finds.',
      },
      {
        type: 'p',
        text: 'The mistake most people make is turning everything on. A screen full of labels for common items is just noise. The tools that matter are the filters.',
      },
      { type: 'h2', text: 'Start with a minimal price' },
      {
        type: 'p',
        text: 'The most useful single setting is the minimal price. Set a floor, and anything below it simply does not get drawn. If you are running for profit, a higher floor keeps your view clean and points you at items worth carrying. If you are hunting for specific barter items or quest needs, drop it lower and use the search and category options instead.',
      },
      {
        type: 'p',
        text: 'There is also an option to ignore items you have not selected, which is handy once you have a short list of what you care about.',
      },
      { type: 'h2', text: 'Use categories instead of one giant list' },
      {
        type: 'p',
        text: 'Loot is grouped into categories such as military, technical, medical and valuable, with a separate common group for everyday items. Picking categories lets you decide what type of raid you are doing. A quick medical run and a technical loot run need very different labels.',
      },
      {
        type: 'p',
        text: 'Container types are filtered separately. You can choose whether woodcrates, stashes, computers, dead bodies and corpses are shown, which matters because every container you check costs time and exposes your position.',
      },
      { type: 'h2', text: 'Draw distance, price display and colors' },
      {
        type: 'p',
        text: 'Draw distance controls how far out labels appear. Short distance keeps things tidy inside buildings. Longer distance helps on open maps. The price display adds value to each label, and custom loot coloring lets you make high value items stand out so your eye finds them instantly. Pick colors you can read at a glance.',
      },
      { type: 'h2', text: 'Quest items and extracts' },
      {
        type: 'p',
        text: 'Quest ESP marks quest related items and objectives, which saves a lot of backtracking if you are working through tasks. Extract and transition markers show where you can leave, which is useful when a raid starts going badly and you need to commit to a route.',
      },
      { type: 'h2', text: 'Presets save time' },
      {
        type: 'p',
        text: 'Loot presets let you store a filter setup and switch between them. One preset for high value runs, one for quest hunting, one for a general sweep. The config system also supports saving, loading, importing and exporting, so you are not rebuilding your setup every time.',
      },
      { type: 'h2', text: 'Keep it readable' },
      {
        type: 'p',
        text: 'A good rule is to show less than you think you need. Set a price floor, pick two or three categories, and keep your draw distance reasonable. If you find yourself squinting at labels, you have too many on.',
      },
      { type: 'h2', text: 'Getting started' },
      {
        type: 'p',
        text: 'If you want loot ESP with full price, category, container and preset controls, the [Escape From Tarkov cheats](/product/) include it alongside player ESP, aimbot and misc options. Check the status page after patches before you load in, review [setup requirements](/blog/how-to-set-up-escape-from-tarkov-cheats-requirements/), and note that the Cloud DMA component is required for full functionality. Plans start at a [monthly or lifetime plan](/blog/escape-from-tarkov-cheats-price-monthly-vs-lifetime/), with a lifetime option if you plan to stay long term.',
      },
    ],
  },
  {
    tag: 'Features',
    title: 'Tarkov Aimbot Settings Explained: FOV, Bones, Target Selection and More',
    slug: 'tarkov-aimbot-settings-explained',
    image: imgNight,
    imageAlt: 'Escape From Tarkov cheat menu aimbot tab showing FOV and target options',
    desc: 'Every aimbot menu looks overwhelming the first time. Here is what the main Tarkov aimbot options do and how to set them up without making a mess.',
    metaTitle: 'Tarkov Aimbot Settings Explained: FOV, Bones and Targets',
    metaDescription:
      'A plain guide to Tarkov aimbot options, including aim key, FOV, visibility checks, smart bone, target selection and prediction, with advice on building a config.',
    date: '2026-05-10',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: 'The aimbot tab in a Tarkov cheat menu has a lot of toggles, and most of them are useful only if you understand what they change. This is a walkthrough of the main options, based on the options listed for the Escape From Tarkov cheats.',
      },
      { type: 'h2', text: 'The basics: aim key and FOV' },
      {
        type: 'p',
        text: 'Enable Aim turns the feature on, and the aim key decides when it engages. Most people bind it to a mouse button they already press when fighting, so it feels natural.',
      },
      {
        type: 'p',
        text: 'FOV is the circle around your crosshair in which targets can be picked. You can draw it on screen, set its size, color it, and make it dynamic. A smaller FOV means the aimbot only reacts to targets near where you are already looking. A large FOV means it can grab people far from your crosshair, which is more powerful but also looks far more obvious to anyone watching you.',
      },
      { type: 'h2', text: 'Distance and visibility' },
      {
        type: 'p',
        text: 'Max aimbot distance limits how far away it will target. Tarkov engagements vary hugely between maps, so a lower value suits interior heavy maps and a higher one suits open ones.',
      },
      {
        type: 'p',
        text: 'Only Visible tells the aimbot to ignore targets you cannot actually see. Turn it on if you want behavior that stays closer to what a normal player could see. Leave it off and you are asking the tool to track through cover.',
      },
      { type: 'h2', text: 'Target selection and teammates' },
      {
        type: 'p',
        text: 'Target selection decides who gets picked when more than one person is in range. Teammate options let you mark squadmates so you do not point at them, with a bind to add a teammate quickly. If you play in groups, set this up before the raid, not during it.',
      },
      { type: 'h2', text: 'Bones: smart bone, force bone and priority' },
      {
        type: 'p',
        text: 'Smart bone lets the aimbot choose from a list of body parts, and the priority option lets you rank them. Force bone locks it to one. In a game where armor and ammo decide fights, choosing bones deliberately matters more than leaving it on a default.',
      },
      { type: 'h2', text: 'Extras worth knowing about' },
      {
        type: 'ul',
        items: [
          'Prediction accounts for target movement.',
          'Target lock keeps you on one target once chosen.',
          'Show target and target color highlight who is currently selected.',
          'Draw crosshair gives you a clear reference point.',
          'Bullet tracers show where your shots are going, which helps when tuning a config.',
          'Instant hit exists as an option, but it is the most aggressive setting in the list.',
        ],
      },
      { type: 'h2', text: 'A sensible way to build a config' },
      {
        type: 'p',
        text: 'Start small. Pick a modest FOV, turn on Only Visible, set a distance that suits your usual map, and use smart bone with a short list. Change one setting at a time and test it. Save the result in the config system, which supports saving, loading, importing and exporting.',
      },
      {
        type: 'p',
        text: 'Settings that look blatant tend to draw attention from other players, and no setting removes risk entirely. Cheating in an online game can lead to bans, so build your config with that in mind.',
      },
      { type: 'h2', text: 'Where to get it' },
      {
        type: 'p',
        text: 'If you want the full aimbot menu along with ESP and misc tools, see the [Tarkov aimbot options](/product/). It is sold for main raids only and uses a separate key from Arena, and the Cloud DMA component is required for full functionality. Pair it with [loot ESP filters](/blog/tarkov-loot-esp-filters-price-category-containers/) and read [BattlEye considerations](/blog/battleye-and-escape-from-tarkov-cheats-what-to-know/) before you raid.',
      },
    ],
  },
  {
    tag: 'Buyer Guides',
    title: 'Escape From Tarkov Cheats Price: Monthly vs Lifetime',
    slug: 'escape-from-tarkov-cheats-price-monthly-vs-lifetime',
    image: imgWall,
    imageAlt: 'Escape From Tarkov cheats monthly and lifetime plan options',
    desc: 'Monthly or lifetime? Here are the prices, the break even point, and the extra things to check before you pay.',
    metaTitle: 'Escape From Tarkov Cheats Price: Monthly vs Lifetime',
    metaDescription:
      'Monthly is $35 and lifetime is $150 with the same features. See when each makes sense, what is sold separately, and what to check before you buy.',
    date: '2026-10-15',
    readTime: '5 min read',
    featured: true,
    body: [
      {
        type: 'p',
        text: 'If you are searching for Escape From Tarkov cheats, price is probably one of the first things you want answered. Here are the actual numbers and how to decide between the two plans.',
      },
      { type: 'h2', text: 'The two plans' },
      {
        type: 'table',
        headers: ['Plan', 'Access', 'Price'],
        rows: [
          ['Monthly', '31 days', '$35'],
          ['Lifetime', 'Unlimited access', '$150 once'],
        ],
      },
      {
        type: 'p',
        text: 'Both plans include the same features. You are not paying more for extra tools. The only difference is how long you have access.',
      },
      { type: 'h2', text: 'When monthly makes sense' },
      {
        type: 'p',
        text: 'Monthly is the lower risk way to start. If you are testing the cheat on your own setup, only play in short bursts, or are not sure you will stay with Tarkov through the next wipe, $35 for 31 days keeps your commitment small.',
      },
      { type: 'h2', text: 'When lifetime makes sense' },
      {
        type: 'p',
        text: 'The math is simple. Four months of monthly access costs $140. The fifth month takes you past $150. If you expect to use the cheat for five months or more, lifetime is the cheaper option, and you stop thinking about renewals.',
      },
      {
        type: 'p',
        text: 'Lifetime also suits people who play steadily across wipes and do not want to rebuy.',
      },
      { type: 'h2', text: 'What else you need to know before paying' },
      {
        type: 'p',
        text: 'Cloud DMA. [Cloud DMA](/blog/tarkov-cloud-dma-explained-do-you-need-it/) is required for full functionality and is a separate purchase from the monthly and lifetime plans. Budget for it up front so there are no surprises.',
      },
      {
        type: 'p',
        text: 'Raids only. This product is for main Tarkov raids. It uses a separate key from Arena, so a purchase here does not cover Arena.',
      },
      {
        type: 'p',
        text: 'Your PC. You need Windows 10 or 11 with HVCI, Core Isolation, TPM and Secure Boot turned on. Our [system requirements](/blog/how-to-set-up-escape-from-tarkov-cheats-requirements/) cover this in more detail.',
      },
      {
        type: 'p',
        text: 'Delivery and support. Delivery is instant after purchase, and you get a loader to use. If something goes wrong, you can open a ticket on the site or reach out on Discord with your order ID.',
      },
      {
        type: 'p',
        text: 'After patches. Check the status page after major patches before you load into a raid.',
      },
      { type: 'h2', text: 'What is included for the price' },
      {
        type: 'p',
        text: 'The feature set covers player ESP with box, skeleton, health, distance and more, loot ESP with price and category filters, an aimbot with FOV, bone and visibility options, no recoil and other misc options, and a config system for saving and sharing setups. It is also described as streamproof for most capture tools.',
      },
      { type: 'h2', text: 'Ready to buy' },
      {
        type: 'p',
        text: 'If you have made your choice, head to the [buy Escape From Tarkov cheats](/go/escape-from-tarkov/) page to pick monthly or lifetime. If you are undecided, start monthly. You can always decide to commit later.',
      },
    ],
  },
  {
    tag: 'Buyer Guides',
    title: 'Tarkov Cloud DMA Explained: What It Is and Whether You Need It',
    slug: 'tarkov-cloud-dma-explained-do-you-need-it',
    image: imgDaylight,
    imageAlt: 'Escape From Tarkov cheat setup diagram with Cloud DMA connection',
    desc: 'Cloud DMA comes up in almost every Tarkov cheat conversation. Here is what it is and where it fits in your purchase.',
    metaTitle: 'Tarkov Cloud DMA Explained: Do You Need It?',
    metaDescription:
      'Cloud DMA is required for full functionality with our Escape From Tarkov cheats. Here is what it means, how it relates to the plans, and what to know before buying.',
    date: '2026-06-04',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'If you have looked at Tarkov cheats for more than five minutes, you have seen the term DMA. Cloud DMA is the version that appears across our products, and it is worth understanding before you buy.',
      },
      { type: 'h2', text: 'DMA in plain terms' },
      {
        type: 'p',
        text: 'DMA stands for direct memory access. In the cheat world, a DMA setup traditionally means using separate hardware to read game data instead of running everything inside the same machine as the game. That approach is popular because Tarkov uses BattlEye, which operates at kernel level.',
      },
      { type: 'h2', text: 'Where Cloud DMA fits' },
      {
        type: 'p',
        text: 'Cloud DMA is the hosted option listed with the [Escape From Tarkov cheats with Cloud DMA](/product/). The product lists Cloud DMA in its feature set, and it is described as required for full functionality. If you are looking for exact steps on how the connection is made, those are provided after purchase through the guide and support channels, so follow the current instructions rather than relying on general internet advice.',
      },
      { type: 'h2', text: 'How it relates to the plan you buy' },
      {
        type: 'p',
        text: 'This part trips people up. The monthly and lifetime [plans](/blog/escape-from-tarkov-cheats-price-monthly-vs-lifetime/) cover the cheat itself. Cloud DMA is a separate purchase. So the full cost of running the product with all functions is the plan you choose plus Cloud DMA.',
      },
      { type: 'h2', text: 'Do you need it?' },
      {
        type: 'p',
        text: 'If you want full functionality, yes. The product page states that Cloud DMA is required for full functionality. If you only want to look around the menu, you may not need to rush into it, but you will not get the complete experience without it.',
      },
      { type: 'h2', text: 'What your PC still needs' },
      {
        type: 'p',
        text: 'Cloud DMA does not remove your own system requirements. The product asks for Windows 10 or 11 with HVCI, Core Isolation, TPM and Secure Boot turned on. Read our [setup checklist](/blog/how-to-set-up-escape-from-tarkov-cheats-requirements/) for a full checklist.',
      },
      { type: 'h2', text: 'Questions to ask support before you buy' },
      {
        type: 'p',
        text: 'If you are unsure, ask before you pay, not after. Good questions are what the current setup order is, what to do after a patch, and what information to include in a ticket. Support is available through a ticket on the site or on Discord. Include your order ID when you contact them.',
      },
      { type: 'h2', text: 'Next step' },
      {
        type: 'p',
        text: 'Once you know what you are buying, the [Escape From Tarkov cheats with Cloud DMA](/product/) page shows both plans and the Cloud DMA requirement. Remember that the product is for main raids only and uses a separate key from Arena.',
      },
    ],
  },
  {
    tag: 'Anti-Cheat',
    title: 'BattlEye and Escape From Tarkov Cheats: What You Should Know',
    slug: 'battleye-and-escape-from-tarkov-cheats-what-to-know',
    image: imgNight,
    imageAlt: 'BattlEye anti-cheat loading screen for Escape From Tarkov',
    desc: 'BattlEye is the anti-cheat behind Tarkov. Here is a straight explanation of what it is, what the risks are, and how to approach it sensibly.',
    metaTitle: 'BattlEye and Tarkov Cheats: What You Should Know',
    metaDescription:
      'An honest look at BattlEye in Escape From Tarkov, what it means for cheat users, why status checks matter after patches, and what to do if a ban happens.',
    date: '2026-09-07',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'Escape From Tarkov uses BattlEye as its anti-cheat. If you are thinking about using cheats in the game, you should understand what that means.',
      },
      { type: 'h2', text: 'What BattlEye is' },
      {
        type: 'p',
        text: 'BattlEye is a kernel level anti-cheat. That means it runs with deep access to your system, and it is used across a number of games. In Tarkov, it is the main layer that tries to catch cheating software.',
      },
      { type: 'h2', text: 'What this means for cheat users' },
      {
        type: 'p',
        text: 'Let us be direct. There is no cheat that removes the risk of a ban, and any seller who tells you otherwise is overselling. Anti-cheat vendors update their detection, and games patch. What you can do is use a product that is actively maintained and approach it carefully.',
      },
      {
        type: 'p',
        text: 'That is why the product page tells you to check the status page after patches before you load in. If a patch has just landed, wait for the status to update.',
      },
      { type: 'h2', text: 'Why account bans and hardware bans differ' },
      {
        type: 'p',
        text: 'Some bans apply to your account. Others tie the penalty to your hardware identifiers. A hardware ban follows your PC, not just your login, which makes it much more disruptive. We cover this in detail in our [HWID ban](/blog/tarkov-hwid-ban-how-hwid-spoofer-works/) article.',
      },
      { type: 'h2', text: 'Habits that lower your exposure' },
      {
        type: 'p',
        text: 'These are practical points, not guarantees.',
      },
      {
        type: 'ul',
        items: [
          'Keep your settings modest. Obvious behavior draws reports from other players.',
          'Follow the current setup guide exactly, and do not skip steps.',
          'Meet the system requirements listed for the product, including HVCI, Core Isolation, TPM and Secure Boot.',
          'Check status after every large patch.',
          'Do not share your loader or order details.',
        ],
      },
      { type: 'h2', text: 'If a ban happens' },
      {
        type: 'p',
        text: 'If your account is banned, that account is gone, and you would need a new one. If your hardware is flagged, a hardware spoofer is one way people try to return with a fresh hardware fingerprint. Our [HWID spoofer](/hwid-spoofer/) lists Escape From Tarkov under BattlEye titles and includes a cleaner.',
      },
      { type: 'h2', text: 'Making the decision' },
      {
        type: 'p',
        text: 'Cheating carries risk, and you should decide with that in mind. If you decide to go ahead, the [Escape From Tarkov cheats](/product/) are sold for main raids with ESP, aimbot and misc features, and [Cloud DMA](/blog/tarkov-cloud-dma-explained-do-you-need-it/) is required for full functionality. Support is available by ticket or Discord if you need help with the current process.',
      },
    ],
  },
  {
    tag: 'Ban Help',
    title: 'Tarkov HWID Ban: What It Is and How an HWID Spoofer Works',
    slug: 'tarkov-hwid-ban-how-hwid-spoofer-works',
    image: imgWall,
    imageAlt: 'HWID spoofer interface for BattlEye games including Escape From Tarkov',
    desc: 'An HWID ban follows your hardware, not just your account. Here is how that works and what a spoofer with a cleaner is designed to do.',
    metaTitle: 'Tarkov HWID Ban: How an HWID Spoofer Works',
    metaDescription:
      'Hit by a Tarkov HWID ban? Learn what it is, what a spoofer changes, what the cleaner does, and the requirements and prices for our HWID Spoofer.',
    date: '2026-05-17',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: 'An HWID ban is one of the most frustrating things that can happen in Tarkov, because it is not limited to your account. Here is what it is and how a spoofer fits in.',
      },
      { type: 'h2', text: 'What an HWID ban is' },
      {
        type: 'p',
        text: 'HWID means hardware ID. An HWID ban ties the punishment to identifiers on your PC, such as disk serials, MAC addresses and GPU IDs, rather than only to your account. That is why making a new account often does not fix it. The game still recognizes the machine.',
      },
      { type: 'h2', text: 'What a spoofer changes' },
      {
        type: 'p',
        text: 'A spoofer changes those hardware identifiers so your PC presents a different fingerprint. The [HWID spoofer](/hwid-spoofer/) is designed for this, and it changes disk serials, MAC addresses, GPU IDs and related identifiers.',
      },
      { type: 'h2', text: 'What the cleaner is for' },
      {
        type: 'p',
        text: 'Hardware spoofing alone is not always enough, since leftover traces can remain on your system. The spoofer includes a cleaner that clears those traces before you launch the game again. Running the cleanup is part of the process, not an optional extra.',
      },
      { type: 'h2', text: 'Is Tarkov supported' },
      {
        type: 'p',
        text: 'Yes. Escape From Tarkov is listed under [BattlEye](/blog/battleye-and-escape-from-tarkov-cheats-what-to-know/) titles, and the product states spoofing is fine on all BattlEye games. It also lists support for EAC titles, Ricochet games, Valorant through Vanguard, and others.',
      },
      { type: 'h2', text: 'An honest limit' },
      {
        type: 'p',
        text: 'A spoofer deals with hardware identifiers. It does not undo an account ban. If your account has been banned, you will need a new account to play. And no tool guarantees a result, so follow the current guide closely.',
      },
      { type: 'h2', text: 'Requirements before you start' },
      {
        type: 'ul',
        items: [
          'Windows 10 or 11, 64-bit',
          'HVCI, Core Isolation, TPM and Secure Boot turned on',
          'Administrator rights for the spoof and cleanup steps',
          'A stable internet connection for activation and updates',
        ],
      },
      { type: 'h2', text: 'The order matters' },
      {
        type: 'p',
        text: 'Run the spoof and cleanup before launching the game, and follow the current instructions in your account or ticket channel for the exact sequence. If you are unsure about a step, ask support before you launch the game.',
      },
      { type: 'h2', text: 'Pricing' },
      {
        type: 'p',
        text: 'The HWID Spoofer is $50 monthly for 31 days, or $150 for lifetime access. Delivery is instant, and support is available around the clock.',
      },
      { type: 'h2', text: 'Next step' },
      {
        type: 'p',
        text: 'If you have been hit by a hardware ban or want to be prepared, see the [HWID spoofer](/hwid-spoofer/). If you are also looking at the cheat itself, the [Escape From Tarkov cheats](/product/) are available separately.',
      },
    ],
  },
  {
    tag: 'Setup Guides',
    title: 'How to Set Up Escape From Tarkov Cheats: Requirements and Troubleshooting',
    slug: 'how-to-set-up-escape-from-tarkov-cheats-requirements',
    image: imgDaylight,
    imageAlt: 'Windows security settings checklist for Escape From Tarkov cheat setup',
    desc: 'Most setup problems come from a short list of causes. Here is the checklist, plus what to do when things do not work.',
    metaTitle: 'Tarkov Cheat Requirements and Setup Checklist',
    metaDescription:
      'A practical setup checklist for Escape From Tarkov cheats: Windows, HVCI, Core Isolation, TPM, Secure Boot, loader access, Cloud DMA and what to do if something fails.',
    date: '2026-06-12',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'Most problems people have getting Tarkov cheats working come from a short list of causes. Go through this checklist first.',
      },
      { type: 'h2', text: 'System requirements' },
      {
        type: 'ul',
        items: [
          'Windows 10 or 11',
          'Intel or AMD processor',
          'HVCI turned on',
          'Core Isolation turned on',
          'TPM turned on',
          'Secure Boot turned on',
          'A stable internet connection',
        ],
      },
      {
        type: 'p',
        text: 'These settings are listed on the product page, so do not assume you can skip them.',
      },
      { type: 'h2', text: 'What you receive' },
      {
        type: 'p',
        text: 'After purchase, you get delivery right away along with access to the loader. The product is for main Tarkov raids and uses a separate key from Arena, so make sure you bought the right one.',
      },
      { type: 'h2', text: 'Cloud DMA' },
      {
        type: 'p',
        text: '[Cloud DMA](/blog/tarkov-cloud-dma-explained-do-you-need-it/) is required for full functionality and is purchased separately from the monthly and lifetime plans. If features seem to be missing, confirm this part of your setup first.',
      },
      { type: 'h2', text: 'Before every session' },
      {
        type: 'ul',
        items: [
          'Check the status page, especially after a Tarkov patch.',
          'Make sure your Windows security settings above are still on, since updates can change them.',
          'Follow the current guide in your account for launch order.',
          'Load into a raid only after the above is done.',
        ],
      },
      { type: 'h2', text: 'If something is not working' },
      {
        type: 'p',
        text: 'Check status first. If a patch just released, the product may be waiting on an update.',
      },
      {
        type: 'p',
        text: 'Recheck your Windows settings. Verify HVCI, Core Isolation, TPM and Secure Boot.',
      },
      {
        type: 'p',
        text: 'Confirm the product. Tarkov raids and Arena use different keys.',
      },
      {
        type: 'p',
        text: 'Contact support. You can open a ticket on the site or use Discord. Include your order ID so they can find your purchase quickly. Describe what you did and what happened in plain terms.',
      },
      { type: 'h2', text: 'Config tips for new users' },
      {
        type: 'p',
        text: 'The menu has a config system that lets you save, load, import and export setups. Once you find a layout that works, save it. It saves a lot of time after a patch or reinstall.',
      },
      { type: 'h2', text: 'Ready to start' },
      {
        type: 'p',
        text: 'You can see the [plan options](/blog/escape-from-tarkov-cheats-price-monthly-vs-lifetime/) and full feature list on the [Escape From Tarkov cheats](/product/) page. Monthly access is $35 and lifetime is $150, with the same features on both.',
      },
    ],
  },
  {
    tag: 'Features',
    title: 'Streamproof Tarkov Cheats: What It Means for Streamers and Recorders',
    slug: 'streamproof-tarkov-cheats-for-streamers',
    image: imgNight,
    imageAlt: 'Escape From Tarkov gameplay captured in OBS without cheat overlay visible',
    desc: 'Streamproof means the ESP and menu do not show up in your capture. Here is what that covers and what it does not.',
    metaTitle: 'Streamproof Tarkov Cheats: OBS and Recording Explained',
    metaDescription:
      'What streamproof means for Tarkov cheats, how the ESP and menu stay off OBS and most capture tools, and what streamers and recorders should still keep in mind.',
    date: '2026-10-05',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'If you stream or record your Tarkov raids, you probably have one question about cheats: will anyone see the overlay in my footage? That is what streamproof is about.',
      },
      { type: 'h2', text: 'What streamproof means' },
      {
        type: 'p',
        text: 'Streamproof means the ESP and menu are not drawn into your capture. The Escape From Tarkov cheats are described as streamproof, with ESP and menus staying off OBS and most capture tools. What you see on your monitor is not what your viewers see.',
      },
      { type: 'h2', text: 'Why it matters' },
      {
        type: 'p',
        text: 'Beyond viewers, recordings get shared, clipped and reviewed. If an overlay appears in a clip, anyone can see it. Keeping the capture clean removes that particular problem.',
      },
      { type: 'h2', text: 'What it does not cover' },
      {
        type: 'p',
        text: 'Be realistic about the limits.',
      },
      {
        type: 'ul',
        items: [
          'The wording is “most capture tools”, not every tool. Test your own setup before going live.',
          'Streamproof does not change how the game or [BattlEye](/blog/battleye-and-escape-from-tarkov-cheats-what-to-know/) sees your system. It only affects what is captured on screen.',
          'Your behavior still shows. Impossible looking aim, or knowing where players are through walls, is noticeable to viewers and to other players.',
        ],
      },
      { type: 'h2', text: 'Test before you go live' },
      {
        type: 'p',
        text: 'Do a short test recording before streaming. Open the menu, turn on ESP, record a few seconds, and play it back. If anything shows up, stop and contact support.',
      },
      { type: 'h2', text: 'Settings that suit streamers' },
      {
        type: 'ul',
        items: [
          'Keep ESP minimal. Fewer labels look more natural on screen.',
          'Use a modest aimbot FOV and Only Visible, as covered in our [aimbot settings](/blog/tarkov-aimbot-settings-explained/) guide.',
          'Save a stream friendly config so you can load it quickly.',
          'Keep your hotkeys memorized so you never have to fumble in the menu.',
        ],
      },
      { type: 'h2', text: 'Plan and requirements' },
      {
        type: 'p',
        text: 'The product is for main raids, uses a separate key from Arena, and requires Windows 10 or 11 with HVCI, Core Isolation, TPM and Secure Boot turned on. Cloud DMA is required for full functionality. Monthly access is $35 and lifetime is $150.',
      },
      { type: 'h2', text: 'Get started' },
      {
        type: 'p',
        text: 'You can review features and plans on the [streamproof Tarkov cheats](/product/) page. Check the status page after patches before you start a session, and contact support by ticket or Discord if your capture test shows anything unexpected.',
      },
    ],
  },
];
