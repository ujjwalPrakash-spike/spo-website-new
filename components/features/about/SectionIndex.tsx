"use client";

// Sticky sub-nav with IntersectionObserver scrollspy and sliding active indicator.

import React, { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ABOUT_SECTIONS } from "@/lib/about/content";
import { ABOUT_TOKENS } from "@/lib/about/tokens";

export function SectionIndex({
  sections = ABOUT_SECTIONS,
}: {
  sections?: typeof ABOUT_SECTIONS;
}) {
  const [activeId, setActiveId] = useState<string>(sections[0].id);
  const shouldReduceMotion = useReducedMotion();
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  useEffect(() => {
    const activeEl = itemRefs.current[activeId];
    if (activeEl && navRef.current) {
      const navContainer = navRef.current;
      const elLeft = activeEl.offsetLeft;
      const elWidth = activeEl.offsetWidth;
      const navWidth = navContainer.offsetWidth;
      navContainer.scrollTo({
        left: elLeft - navWidth / 2 + elWidth / 2,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
    }
  }, [activeId, shouldReduceMotion]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -120;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
      top: y,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
    window.history.pushState(null, "", `#${id}`);
    setActiveId(id);
  };

  return (
    <aside
      aria-label="About section chapters"
      className="sticky top-0 z-40 w-full bg-neutral-50/80 backdrop-blur-xl border-b border-neutral-950/10"
    >
      <div
        className="mx-auto max-w-[1440px]"
        style={{ paddingInline: ABOUT_TOKENS.paddingInline }}
      >
        <nav
          ref={navRef}
          className="flex items-center gap-6 overflow-x-auto no-scrollbar py-3.5"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {sections.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <a
                key={sec.id}
                ref={(el) => {
                  itemRefs.current[sec.id] = el;
                }}
                href={`#${sec.id}`}
                onClick={(e) => scrollToSection(e, sec.id)}
                className={`relative shrink-0 text-[13px] py-1 transition-colors focus-visible:outline-2 focus-visible:outline-[#93c5fd] focus-visible:outline-offset-4 rounded ${
                  isActive ? "text-neutral-950 font-medium" : "text-neutral-950/50 hover:text-neutral-950/80"
                }`}
              >
                <span className="font-mono text-neutral-950/40 mr-1.5">{sec.index}</span>
                <span>{sec.label}</span>
                {isActive ? (
                  <motion.div
                    layoutId="activeSubnavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#93c5fd]"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.3, ease: ABOUT_TOKENS.ease }
                    }
                  />
                ) : null}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
