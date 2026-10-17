/** Default Open Graph / Twitter preview (first hero slide). */
export const DEFAULT_OG_GAMEPLAY_IMAGE = '/images/gameplay/eft-esp-daylight-player-highlights.webp';

export const DEFAULT_OG_GAMEPLAY_ALT =
  'Escape From Tarkov first-person view with player ESP showing red-highlighted figures, skeleton outlines, and distance labels in a sunlit industrial yard.';

/** Intrinsic size of master gameplay sources (all three attachments share this resolution). */
export const DEFAULT_OG_GAMEPLAY_WIDTH = 1024;
export const DEFAULT_OG_GAMEPLAY_HEIGHT = 576;

/** Homepage + product gallery use the same three masters, once each per slider. */
export const EFT_SHOWCASE_GALLERY_KEYS = [
  'gpDaylightEsp',
  'gpNightEsp',
  'gpWallEsp',
] as const;
