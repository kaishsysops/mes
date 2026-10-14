// Shared control styles so every CTA on the site has the same shape and motion.
const base =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[background-color,border-color,color,transform] duration-300 ease-out-expo active:scale-[0.98]";

const primary = `${base} bg-accent text-on-accent hover:brightness-110`;

export const buttonPrimary = `${primary} px-6 py-3`;

export const buttonPrimaryCompact = `${primary} px-5 py-2.5`;

export const buttonOutline = `${base} border border-ink/20 px-6 py-3 text-ink hover:border-ink/50`;

export const buttonOnImage = `${base} border border-white/30 bg-white/10 px-6 py-3 text-white backdrop-blur-md hover:bg-white/20`;

export const arrowNudge = "transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5";

export const logoDarkFilter = "dark:[filter:invert(1)_hue-rotate(180deg)_brightness(1.1)]";

// Layout widths. Content sits in `container`; full-bleed panels (photos, navy blocks, footer)
// use `frame`, which stops at 1600px so large monitors keep the same proportions and the
// 1600px source photos are never stretched past their native width.
export const container = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10";

export const frame = "mx-auto w-full max-w-[1600px] px-2 sm:px-3";

/** `sizes` for an image that fills a frame. */
export const frameSizes = "(min-width: 1600px) 1600px, 100vw";
