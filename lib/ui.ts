// Shared control styles so every CTA on the site has the same shape and motion.
const base =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[background-color,border-color,color,transform] duration-300 ease-out-expo active:scale-[0.98]";

const primary = `${base} bg-accent text-on-accent hover:brightness-110`;

export const buttonPrimary = `${primary} px-6 py-3`;

export const buttonPrimaryCompact = `${primary} px-5 py-2.5`;

export const buttonOutline = `${base} border border-line px-6 py-3 text-ink hover:border-ink/40`;

export const buttonOnImage = `${base} border border-white/30 bg-white/10 px-6 py-3 text-white backdrop-blur-md hover:bg-white/20`;

export const arrowNudge = "transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5";

export const logoDarkFilter = "dark:[filter:invert(1)_hue-rotate(180deg)_brightness(1.1)]";
