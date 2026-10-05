// Site configuration, navigation links, and content constants.

export interface NavChapter {
  id: string;
  title: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: "instagram" | "tiktok" | "facebook" | "twitch" | "youtube" | "x";
}

export interface MainMenuSubLink {
  label: string;
  href: string;
}

export interface MainMenuLink {
  label: string;
  href: string;
  muted?: boolean;
  subLinks?: MainMenuSubLink[];
}

export const SITE_METADATA = {
  title: "SPO IITK",
  description: "Official Student Placement Office IITK Website",
} as const;

export const LANGUAGES = [
  { code: "EN", label: "English", active: true },
  { code: "IT", label: "Italiano", active: false },
  { code: "FR", label: "Français", active: false },
] as const;

export const HERO_CONFIG = {
  title: "BEYOND SPEED",
  scrollText: "SCROLL TO EXPLORE",
  ctaText: "KNOW THE MAN",
  videoUrl: "/videos/hero-background.mp4",
  posterUrl: "/images/hero-poster.png",
} as const;

export const CHAPTERS_LIST: NavChapter[] = [
  { id: "01", title: "Chapter 1: The Origin", href: "#chapter-1" },
  { id: "02", title: "Chapter 2: The Ascent", href: "#chapter-2" },
  { id: "03", title: "Chapter 3: Scuderia Ferrari", href: "#chapter-3" },
  { id: "04", title: "Chapter 4: Beyond Speed", href: "#chapter-4" },
];

export const MENU_MAIN_LINKS: MainMenuLink[] = [
  { label: "CL16", href: "#cl16" },
  {
    label: "FORMULA 1",
    href: "#f1",
    subLinks: [
      { label: "CALENDAR", href: "#calendar" },
      { label: "STANDINGS", href: "#standings" },
    ],
  },
  { label: "STORE", href: "#store", muted: true },
];

export const MENU_SUB_LINKS = [
  { label: "Partners", href: "#partners" },
  { label: "News", href: "#news" },
  { label: "Contacts", href: "#contacts" },
] as const;

export const MENU_WIDGET_DATA = {
  raceCard: {
    round: "ROUND 14",
    title: "SPAGNA",
    description: "Scopri i momenti salienti della gara di Madrid.",
    href: "#race-spagna",
  },
  latestNews: {
    tag: "LATEST NEWS",
    title: "LEC – Why resist?",
    image: "/images/hero-poster.png",
    href: "#news-lec",
  },
  socialPost: {
    platform: "INSTAGRAM",
    title: "New 2025 helmet. I'm sure it will be a fast one",
    image: "/images/hero-poster.png",
    href: "https://instagram.com",
  },
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { name: "TikTok", href: "https://tiktok.com", icon: "tiktok" },
  { name: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { name: "Twitch", href: "https://twitch.tv", icon: "twitch" },
  { name: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { name: "X", href: "https://x.com", icon: "x" },
];

export interface HeroStat {
  value: string;
  label: string;
}

// TODO: Populate with official SPO placement statistics once verified.
export const HERO_STATS: HeroStat[] = [];
