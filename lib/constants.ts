// Site configuration, navigation links, and content constants.

export const SITE_METADATA = {
  title: "SPO IITK",
  description: "Official Student Placement Office IITK Website",
} as const;

export const HERO_CONFIG = {
  videoUrl: "/videos/hero-background.mp4",
  posterUrl: "/images/hero-poster.jpg",
} as const;

export interface HeroStat {
  value: string;
  label: string;
}

// TODO: Populate with official SPO placement statistics once verified.
export const HERO_STATS: HeroStat[] = [];
