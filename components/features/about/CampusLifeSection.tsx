"use client";

// Chapter 06: Students' Life & Activities, Councils & Innovation on light surface.

import React from "react";
import { ChapterHeader } from "@/components/shared/layout/ChapterHeader";
import { RevealText } from "@/components/shared/motion/Reveal";
import { CouncilCard } from "./CouncilCard";
import { CAMPUS_LIFE_CONTENT } from "@/lib/about/content";
import {
  STUDENT_COUNCILS,
  type StudentCouncil,
} from "@/lib/about/campus-life";
import { ABOUT_TOKENS } from "@/lib/about/tokens";

export function CampusLifeSection({
  content = CAMPUS_LIFE_CONTENT,
  councils = STUDENT_COUNCILS,
}: {
  content?: typeof CAMPUS_LIFE_CONTENT;
  councils?: StudentCouncil[];
}) {
  return (
    <section
      id={content.id}
      aria-label={content.title}
      className="w-full bg-neutral-50 text-neutral-950 scroll-mt-[var(--header-stack-h)]"
    >
      <div
        className="mx-auto max-w-[1440px]"
        style={{
          paddingInline: ABOUT_TOKENS.paddingInline,
          paddingTop: ABOUT_TOKENS.paddingVertical,
          paddingBottom: ABOUT_TOKENS.paddingVertical,
        }}
      >
        <ChapterHeader index={content.index} title={content.title} tone="light" />

        {/* Intro */}
        <RevealText>
          <p className="text-[17px] leading-[1.7] text-neutral-950/75 max-w-[62ch] text-pretty mb-16 lg:mb-24">
            {content.intro}
          </p>
        </RevealText>

        {/* Student Councils */}
        <div className="mb-20 lg:mb-28">
          <h3 className="text-[13px] uppercase tracking-[0.12em] text-neutral-950/50 mb-10">
            Student Councils
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {councils.map((c) => (
              <CouncilCard key={c.id} council={c} />
            ))}
          </div>
        </div>

        {/* Student Innovation */}
        <div className="pt-12 border-t border-neutral-950/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4">
              <h3 className="text-[24px] sm:text-[28px] font-medium text-neutral-950 tracking-tight leading-snug">
                {content.innovationTitle}
              </h3>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[17px] leading-[1.7] text-neutral-950/75 text-pretty">
                {content.innovationParagraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
