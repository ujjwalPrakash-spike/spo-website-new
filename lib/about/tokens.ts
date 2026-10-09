// Shared design tokens and constants for the About page layout and animation.

export const ABOUT_TOKENS = {
  containerMax: "1440px",
  paddingInline: "clamp(24px, 6vw, 96px)",
  paddingVertical: "clamp(80px, 12vh, 160px)",
  radiusImage: "clamp(20px, 2.4vw, 32px)",
  scrollMarginTop: "140px",
  headerHeight: 64,
  indexHeight: 56,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  durationLine: 1.1,
  durationText: 0.9,
  durationImage: 1.2,
} as const;
