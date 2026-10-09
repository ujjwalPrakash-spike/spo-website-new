"use client";

// Chapter 04: Notable Alumni on dark surface with expandable list.

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChapterHeader } from "./ChapterHeader";
import { RevealText, RevealImage } from "./Reveal";
import { ALUMNI_CONTENT } from "@/lib/about/content";
import { NOTABLE_ALUMNI, type NotableAlumnus } from "@/lib/about/alumni";
import { ABOUT_TOKENS } from "@/lib/about/tokens";

export function AlumniSection({
  content = ALUMNI_CONTENT,
  alumni = NOTABLE_ALUMNI,
}: {
  content?: typeof ALUMNI_CONTENT;
  alumni?: NotableAlumnus[];
}) {
  const [showAll, setShowAll] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const visibleCount = 8;
  const initialList = alumni.slice(0, visibleCount);
  const remainingList = alumni.slice(visibleCount);

  return (
    <section
      id={content.id}
      aria-label={content.title}
      className="w-full bg-neutral-950 text-white scroll-mt-[130px]"
      style={{
        paddingInline: ABOUT_TOKENS.paddingInline,
        paddingTop: ABOUT_TOKENS.paddingVertical,
        paddingBottom: ABOUT_TOKENS.paddingVertical,
      }}
    >
      <div className="mx-auto max-w-[1440px]">
        <ChapterHeader index={content.index} title={content.title} tone="dark" />

        {/* Full-width Banner Image */}
        <RevealImage className="relative w-full aspect-[4/3] sm:aspect-[21/9] mb-12 lg:mb-16">
          <Image
            src={content.bannerImage.src}
            alt={content.bannerImage.alt}
            fill
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover"
          />
        </RevealImage>

        {/* Lead paragraphs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8 flex flex-col gap-5">
            {content.paragraphs.map((p, idx) => (
              <RevealText key={idx} delay={idx * 0.07}>
                <p className="text-[17px] leading-[1.7] text-white/75 max-w-[62ch] text-pretty">
                  {p}
                </p>
              </RevealText>
            ))}
          </div>
        </div>

        {/* Notable Alumni Name Roll */}
        <div className="w-full">
          <h3 className="text-[13px] uppercase tracking-[0.12em] text-white/50 mb-6">
            Notable Alumni
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 border-t border-white/10">
            {initialList.map((item) => (
              <div key={item.id} className="py-5 border-b border-white/10 flex flex-col gap-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-white/40">{item.id}</span>
                  <span
                    className="font-medium text-white tracking-tight"
                    style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)" }}
                  >
                    {item.name}
                  </span>
                </div>
                <p className="text-[15px] text-white/60 pl-8 leading-snug">{item.role}</p>
              </div>
            ))}
          </div>

          {/* Expandable remaining alumni */}
          {remainingList.length > 0 ? (
            <div>
              <AnimatePresence initial={false}>
                {showAll ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.4, ease: ABOUT_TOKENS.ease }
                    }
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12">
                      {remainingList.map((item) => (
                        <div
                          key={item.id}
                          className="py-5 border-b border-white/10 flex flex-col gap-1"
                        >
                          <div className="flex items-baseline gap-3">
                            <span className="font-mono text-sm text-white/40">{item.id}</span>
                            <span
                              className="font-medium text-white tracking-tight"
                              style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)" }}
                            >
                              {item.name}
                            </span>
                          </div>
                          <p className="text-[15px] text-white/60 pl-8 leading-snug">{item.role}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <div className="mt-8 flex justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-2.5 rounded-md border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-[#93c5fd] focus-visible:outline-offset-4"
                >
                  {showAll ? "Show less" : `Show all (${alumni.length})`}
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
