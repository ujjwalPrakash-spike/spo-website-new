"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/features/navigation/Navbar";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowCircle } from "@/components/shared/ui/ArrowCircle";
import { CountUp } from "@/components/shared/motion/CountUp";
import { StudentsTicker, TickerCompany } from "./StudentsTicker";
import { STUDENT_HERO_DATA } from "@/lib/students/data";
import { HERO_CONFIG } from "@/lib/site/constants";
import { TOKENS } from "@/lib/tokens";

interface HeroRowItem {
  index: string;
  label: string;
  href: string;
  count: number;
  isExternal?: boolean;
  highlightTop?: boolean;
}

interface StudentsHeroProps {
  totalInsights: number;
  totalSteps: number;
  totalResources: number;
  totalRoadmaps: number;
  totalFaqs: number;
  topCompanies: TickerCompany[];
}

export function StudentsHero({
  totalInsights,
  totalSteps,
  totalResources,
  totalRoadmaps,
  totalFaqs,
  topCompanies,
}: StudentsHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const entryRows: HeroRowItem[] = [
    {
      index: "01",
      label: "SPO Insights",
      href: "/insights",
      count: totalInsights,
      highlightTop: true,
    },
    {
      index: "02",
      label: "Procedure",
      href: "#steps",
      count: totalSteps,
    },
    {
      index: "03",
      label: "Resources",
      href: "#resources",
      count: totalResources,
    },
    {
      index: "04",
      label: "Preparation Roadmaps",
      href: "#prepRoadmaps",
      count: totalRoadmaps,
    },
    {
      index: "05",
      label: "Resume FAQs",
      href: "#faqs",
      count: totalFaqs,
    },
  ];

  return (
    <section
      aria-label="For Students Introduction"
      className="relative flex min-h-[85svh] flex-col justify-between bg-neutral-950 text-white overflow-hidden"
      style={{
        paddingTop: "var(--nav-h)",
      }}
    >
      <Navbar tone="dark" variant="bar" />
      {/* Decorative Poster Frame in Cols 6-12 */}
      {HERO_CONFIG.posterUrl && (
        <div className="absolute right-0 top-1/4 w-full lg:w-7/12 pointer-events-none hidden md:block overflow-hidden rounded-2xl opacity-35 z-0 pr-8">
          <motion.div
            initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: TOKENS.ease }}
            className="relative aspect-[16/10] w-full"
          >
            <Image
              src={HERO_CONFIG.posterUrl}
              alt=""
              fill
              priority
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </motion.div>
        </div>
      )}

      {/* Hero Main Content Grid */}
      <div
        className="relative z-10 mx-auto w-full max-w-[1440px] pb-12 lg:pb-16"
        style={{ paddingInline: TOKENS.paddingInline }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Left Title Block (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-white/50">
              {STUDENT_HERO_DATA.eyebrow}
            </p>

            <div className="overflow-hidden">
              <motion.h1
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: TOKENS.ease }}
                className="font-medium tracking-[-0.05em] leading-[0.88] text-white"
                style={{ fontSize: "clamp(3.25rem, 11.5vw, 11.5rem)" }}
              >
                <span>{STUDENT_HERO_DATA.titlePart1}</span>
                <br />
                <span>{STUDENT_HERO_DATA.titlePart2}</span>
              </motion.h1>
            </div>

            <p
              className="text-white/75 leading-[1.6] max-w-[50ch]"
              style={{ fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)" }}
            >
              {STUDENT_HERO_DATA.lead}
            </p>

            {/* Optional Notice */}
            {STUDENT_HERO_DATA.notice ? (
              <div className="flex items-center gap-2.5 pt-2 text-sm text-[#93c5fd]">
                <span className="h-2 w-2 rounded-full bg-[#93c5fd] animate-pulse shrink-0" />
                <span>{STUDENT_HERO_DATA.notice}</span>
              </div>
            ) : null}
          </div>

          {/* Right Entry Rows (Cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="space-y-0 divide-y divide-white/10">
              {entryRows.map((row) => (
                <Link
                  key={row.label}
                  href={row.href}
                  className={`group relative flex items-center justify-between py-4 transition-all hover:bg-white/[0.04] px-3 -mx-3 rounded-lg ${
                    row.highlightTop ? "border-t border-[#93c5fd]" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-white/40 tabular-nums">
                      {row.index}
                    </span>
                    <span
                      className="font-medium text-white transition-transform duration-200 group-hover:translate-x-3"
                      style={{ fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)" }}
                    >
                      {row.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm text-white/45 tabular-nums">
                      <CountUp value={row.count} />
                    </span>
                    <ArrowCircle
                      size={36}
                      tone="dark"
                      direction={row.href.startsWith("#") ? "down-right" : "right"}
                      className="transition-colors group-hover:bg-white group-hover:text-neutral-950"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Signature Ticker */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <StudentsTicker companies={topCompanies} />
      </motion.div>
    </section>
  );
}
