"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuDescription,
} from "@/components/ui/NavigationMenu";
import { LogoBadge } from "@/components/ui/LogoBadge";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconMenu2,
  IconX,
  IconArrowUpRight,
  IconLogin,
  IconSchool,
  IconFlask,
  IconUsers,
  IconAward,
  IconCalendar,
  IconBriefcase,
  IconFileText,
  IconCompass,
  IconBuilding,
  IconPhoneCall,
  IconChartBar,
  IconBook,
  IconShieldCheck,
} from "@tabler/icons-react";

interface SubNavItem {
  title: string;
  href: string;
  description?: string;
  external?: boolean;
  icon: React.ReactNode;
}

interface NavSection {
  title: string;
  items: SubNavItem[];
  featuredLink?: {
    label: string;
    href: string;
  };
}

const NAV_SECTIONS: NavSection[] = [
  {
    title: "About IITK",
    items: [
      {
        title: "About IITK",
        href: "/about",
        description: "Heritage, mission, and legacy of excellence.",
        icon: <IconBuilding size={16} />,
      },
      {
        title: "Academics",
        href: "/about#academics",
        description: "Flexible curriculum and distinguished faculty.",
        icon: <IconSchool size={16} />,
      },
      {
        title: "Research & Development",
        href: "/about#research",
        description: "Cutting-edge breakthroughs and national labs.",
        icon: <IconFlask size={16} />,
      },
      {
        title: "Alumni Network",
        href: "/about#alumni",
        description: "Global leaders across technology and academia.",
        icon: <IconUsers size={16} />,
      },
      {
        title: "Faculty Mentors",
        href: "/about#faculty",
        description: "Pioneering educators and researchers.",
        icon: <IconAward size={16} />,
      },
      {
        title: "Campus Life & Fests",
        href: "/about#activities",
        description: "Leadership, cultural fests, and student clubs.",
        icon: <IconCalendar size={16} />,
      },
    ],
    featuredLink: {
      label: "Explore Academic Programs →",
      href: "/about#academics",
    },
  },
  {
    title: "For Students",
    items: [
      {
        title: "Student Login",
        href: "https://placement.iitk.ac.in/login",
        description: "Access the official SPO placement portal.",
        external: true,
        icon: <IconLogin size={16} />,
      },
      {
        title: "Student Home",
        href: "/students",
        description: "Announcements, notices, and drive schedules.",
        icon: <IconCompass size={16} />,
      },
      {
        title: "Placement Insights",
        href: "/insights",
        description: "Historical placement statistics & trends.",
        icon: <IconChartBar size={16} />,
      },
      {
        title: "Placement Procedure",
        href: "/students#steps",
        description: "Step-by-step candidate workflow.",
        icon: <IconFileText size={16} />,
      },
      {
        title: "Preparation Resources",
        href: "/students#resources",
        description: "Interview archives, kits, and question banks.",
        icon: <IconBook size={16} />,
      },
      {
        title: "Domain Roadmaps",
        href: "/students#prepRoadmaps",
        description: "Structured guides for Tech, Quant & Core.",
        icon: <IconSchool size={16} />,
      },
    ],
    featuredLink: {
      label: "View Preparation Roadmaps →",
      href: "/students#prepRoadmaps",
    },
  },
  {
    title: "Recruiter",
    items: [
      {
        title: "Recruiter Portal",
        href: "https://placement.iitk.ac.in/login",
        description: "Submit JAFs and manage candidate selections.",
        external: true,
        icon: <IconLogin size={16} />,
      },
      {
        title: "Companies Home",
        href: "/companies",
        description: "Recruit India's sharpest analytical minds.",
        icon: <IconBriefcase size={16} />,
      },
      {
        title: "Recruitment Procedure",
        href: "/companies#steps",
        description: "Drive timelines, slots, and guidelines.",
        icon: <IconFileText size={16} />,
      },
      {
        title: "Internship Policy",
        href: "/companies#ipolicy",
        description: "Regulations for summer internships.",
        icon: <IconShieldCheck size={16} />,
      },
      {
        title: "Campus Facilities",
        href: "/companies#facilities",
        description: "Test centers, auditoriums, and interview rooms.",
        icon: <IconBuilding size={16} />,
      },
      {
        title: "Placement Brochure",
        href: "https://drive.google.com/file/d/1o7WZPfAJTp8gqzAysba2azJlmMhdacX6/view?usp=sharing",
        description: "Download official recruitment guide PDF.",
        external: true,
        icon: <IconBook size={16} />,
      },
    ],
    featuredLink: {
      label: "Download Official Brochure PDF →",
      href: "https://drive.google.com/file/d/1o7WZPfAJTp8gqzAysba2azJlmMhdacX6/view?usp=sharing",
    },
  },
  {
    title: "Contact",
    items: [
      {
        title: "Placement Coordinators",
        href: "/placement-coordinators",
        description: "Connect directly with student lead coordinators.",
        icon: <IconUsers size={16} />,
      },
      {
        title: "Administration & Leadership",
        href: "/administration",
        description: "Faculty leadership and office staff contacts.",
        icon: <IconPhoneCall size={16} />,
      },
    ],
    featuredLink: {
      label: "Contact SPO Desk →",
      href: "/contact",
    },
  },
];

export interface NavbarProps {
  tone?: "light" | "dark";
  stickyScrolled?: boolean;
}

export function Navbar({ tone = "light", stickyScrolled = false }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [openMobileSection, setOpenMobileSection] = React.useState<
    string | null
  >(null);

  const isDark = tone === "dark";
  const stickySurface = isDark
    ? "border-white/10 bg-neutral-950/85"
    : "border-neutral-950/10 bg-neutral-50/85";

  return (
    <header
      className={`z-50 ${
        stickyScrolled
          ? `sticky top-2 z-50 mx-2 w-auto shrink-0 rounded-md border ${stickySurface} px-4 py-2 backdrop-blur-xl sm:mx-3 sm:px-8 md:px-12`
          : `relative w-full ${isDark ? "" : "py-2 sm:py-3"}`
      }`}
    >
      <div
        className={`flex w-full items-center justify-between ${
          stickyScrolled || isDark ? "" : "px-4 sm:px-8 md:px-12"
        }`}
      >
        {/* Div 1: Left - Logo & Brand */}
        <div className="flex items-center gap-3">
          <LogoBadge
            size={isDark ? "hero" : "default"}
          />
        </div>

        {/* Div 2: Center - Nav Links with Dropdowns (hidden below lg) */}
        <div className="hidden lg:flex items-center justify-center">
          <NavigationMenu delayDuration={80}>
            <NavigationMenuList
              className={`flex items-center gap-1 rounded-xl px-2 py-1 backdrop-blur-xl transition-all ${
                isDark
                  ? "bg-black/30 border border-white/15 text-white"
                  : "border border-white/60 bg-white/85 shadow-[0_4px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.03]"
              }`}
            >
              {NAV_SECTIONS.map((section) => (
                <NavigationMenuItem key={section.title}>
                  <NavigationMenuTrigger
                    className={`text-[13px] font-semibold tracking-tight px-2.5 xl:px-3.5 py-1.5 rounded-lg transition-all ${
                      isDark
                        ? "text-white/90 hover:text-white hover:bg-white/10 data-[popup-open]:bg-white/15 data-[popup-open]:text-white"
                        : "text-neutral-800 hover:text-black hover:bg-neutral-100/90 data-[popup-open]:bg-neutral-100 data-[popup-open]:text-black"
                    }`}
                  >
                    {section.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    width={section.items.length > 4 ? "w-[38rem]" : "w-[22rem]"}
                    className="rounded-xl border border-neutral-100/90 bg-white/98 p-4 backdrop-blur-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),0_0_1px_rgba(0,0,0,0.06)] text-neutral-900"
                  >
                    <div
                      className={`grid gap-2 ${
                        section.items.length > 4 ? "grid-cols-2" : "grid-cols-1"
                      }`}
                    >
                      {section.items.map((item) => (
                        <NavigationMenuLink
                          key={item.title}
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="group flex items-start gap-3 rounded-lg p-2.5 text-left transition-all hover:bg-neutral-100/80"
                        >
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-neutral-100/80 text-neutral-600 transition-colors group-hover:bg-neutral-200/80 group-hover:text-neutral-950">
                            {item.icon}
                          </div>

                          <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-1 text-[13px] font-semibold text-neutral-900 group-hover:text-black">
                              <span>{item.title}</span>
                              {item.external ? (
                                <IconArrowUpRight
                                  size={12}
                                  className="text-neutral-400 group-hover:text-black"
                                />
                              ) : null}
                            </div>
                            {item.description ? (
                              <NavigationMenuDescription className="text-[11px] text-neutral-500 font-normal leading-snug">
                                {item.description}
                              </NavigationMenuDescription>
                            ) : null}
                          </div>
                        </NavigationMenuLink>
                      ))}
                    </div>

                    {section.featuredLink ? (
                      <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between px-2">
                        <Link
                          href={section.featuredLink.href}
                          className="text-xs font-semibold text-neutral-900 hover:text-black transition-colors inline-flex items-center gap-1"
                        >
                          <span>{section.featuredLink.label}</span>
                        </Link>
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                          SPO IITK
                        </span>
                      </div>
                    ) : null}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Div 3: Right - Solid CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="https://placement.iitk.ac.in/login"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:inline-flex items-center gap-1.5 rounded-md px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-95 ${
              isDark
                ? "bg-white text-black hover:bg-neutral-200"
                : "bg-neutral-950 text-white hover:bg-neutral-800"
            }`}
          >
            <IconLogin size={14} stroke={2.2} />
            <span>Portal Login</span>
          </Link>

          <Link
            href="https://placement.iitk.ac.in/login"
            target="_blank"
            rel="noopener noreferrer"
            className={`sm:hidden inline-flex items-center gap-1 rounded-md px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider shadow-sm ${
              isDark ? "bg-white text-black" : "bg-neutral-950 text-white"
            }`}
          >
            <IconLogin size={12} stroke={2.5} />
            <span>Login</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`lg:hidden flex h-9 w-9 items-center justify-center rounded-md border backdrop-blur-md shadow-sm transition-colors ${
              isDark
                ? "border-white/15 bg-black/40 text-white hover:bg-white/10"
                : "border-neutral-200/90 bg-white/95 text-neutral-800 hover:bg-neutral-100"
            }`}
          >
            {isMobileMenuOpen ? <IconX size={18} /> : <IconMenu2 size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-4 top-20 z-50 max-h-[80vh] overflow-y-auto rounded-xl border border-neutral-200/90 bg-white/98 p-6 backdrop-blur-2xl shadow-2xl lg:hidden flex flex-col gap-4 text-neutral-900"
          >
            {NAV_SECTIONS.map((section) => {
              const isExpanded = openMobileSection === section.title;
              return (
                <div
                  key={section.title}
                  className="border-b border-neutral-100 pb-3"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileSection(isExpanded ? null : section.title)
                    }
                    className="flex w-full items-center justify-between py-1.5 text-sm font-bold text-neutral-800"
                  >
                    <span>{section.title}</span>
                    <span className="text-xs text-neutral-400 font-mono">
                      {isExpanded ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col gap-1.5 pt-2 pl-2"
                      >
                        {section.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={
                              item.external ? "noopener noreferrer" : undefined
                            }
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-between py-1.5 text-xs text-neutral-600 hover:text-black"
                          >
                            <span className="flex items-center gap-2">
                              <span className="text-neutral-400">
                                {item.icon}
                              </span>
                              <span>{item.title}</span>
                            </span>
                            {item.external ? (
                              <IconArrowUpRight size={13} />
                            ) : null}
                          </Link>
                        ))}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}

            <Link
              href="https://placement.iitk.ac.in/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-950 hover:bg-neutral-800 py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-md transition-colors"
            >
              <IconLogin size={15} stroke={2.2} />
              <span>Official Portal Login</span>
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
