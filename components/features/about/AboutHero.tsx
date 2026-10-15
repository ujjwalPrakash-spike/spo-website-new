"use client";

// Editorial hero section for /about route with bottom-anchored typography and facts strip.

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Navbar } from "@/components/features/navigation/Navbar";
import { ABOUT_TOKENS } from "@/lib/about/tokens";
import { ABOUT_HERO_CONTENT } from "@/lib/about/content";
import { ABOUT_FACTS, type FactItem } from "@/lib/about/facts";

function FactCounter({ item }: { item: FactItem }) {
  const shouldReduceMotion = useReducedMotion();
  const [val, setVal] = useState<string>(item.value);

  useEffect(() => {
    if (shouldReduceMotion || !item.countUp) return;
    const match = item.value.match(/^(\d+)(.*)$/);
    if (!match) return;
    const target = parseInt(match[1], 10);
    const suffix = match[2];
    const duration = 1200;
    const start = performance.now();

    function step(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.floor(progress * target);
      setVal(`${current.toLocaleString()}${suffix}`);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }, [item.value, item.countUp, shouldReduceMotion]);

  return (
    <div className="flex flex-col py-4 px-2 sm:px-6 first:pl-0 last:pr-0">
      <span
        className="font-mono tabular-nums font-medium text-white tracking-tight"
        style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
      >
        {val}
      </span>
      <span className="text-[13px] text-white/60 font-normal tracking-wide mt-1">
        {item.label}
      </span>
    </div>
  );
}

export function AboutHero({
  content = ABOUT_HERO_CONTENT,
  facts = ABOUT_FACTS,
}: {
  content?: typeof ABOUT_HERO_CONTENT;
  facts?: FactItem[];
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-screen bg-neutral-950 text-white flex flex-col justify-between pt-16">
      <Navbar tone="dark" variant="bar" />

      {/* Spacer to push content down and create intentional empty space */}
      <div className="flex-1 min-h-[14vh]" />

      {/* Bottom-anchored typography block */}
      <div
        className="mx-auto w-full max-w-[1440px] shrink-0"
        style={{
          paddingInline: ABOUT_TOKENS.paddingInline,
          paddingBottom: "clamp(48px, 8vh, 80px)",
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: ABOUT_TOKENS.ease }}
          className="text-[13px] uppercase tracking-[0.12em] text-white/50 mb-4"
        >
          {content.eyebrow}
        </motion.p>

        {/* Title */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : "100%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.9, delay: 0.1, ease: ABOUT_TOKENS.ease }}
            className="font-sans font-medium tracking-[-0.05em] leading-[0.85] text-white"
            style={{ fontSize: "clamp(4rem, 15vw, 15rem)" }}
          >
            {content.title}
          </motion.h1>
        </div>

        {/* Lead subcopy */}
        <motion.p
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: ABOUT_TOKENS.ease }}
          className="text-white/75 text-[17px] sm:text-[19px] leading-[1.6] max-w-[52ch] mb-12 text-pretty"
        >
          {content.subcopy}
        </motion.p>

        {/* Facts strip */}
        <div className="w-full">
          <div className="h-[1px] w-full bg-white/10 mb-6" />
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: ABOUT_TOKENS.ease }}
            className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10"
          >
            {facts.map((fact, idx) => (
              <FactCounter key={idx} item={fact} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
