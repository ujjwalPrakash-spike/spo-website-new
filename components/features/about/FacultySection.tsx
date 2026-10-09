// Chapter 05: Faculty members and awards list on light surface.

import React from "react";
import Image from "next/image";
import { ChapterHeader } from "./ChapterHeader";
import { RevealText, RevealImage } from "./Reveal";
import { FACULTY_CONTENT } from "@/lib/about/content";
import { FACULTY_AWARDS, type FacultyAward } from "@/lib/about/faculty";
import { ABOUT_TOKENS } from "@/lib/about/tokens";

export function FacultySection({
  content = FACULTY_CONTENT,
  awards = FACULTY_AWARDS,
}: {
  content?: typeof FACULTY_CONTENT;
  awards?: FacultyAward[];
}) {
  return (
    <section
      id={content.id}
      aria-label={content.title}
      className="w-full bg-neutral-50 text-neutral-950 scroll-mt-[130px]"
      style={{
        paddingInline: ABOUT_TOKENS.paddingInline,
        paddingTop: ABOUT_TOKENS.paddingVertical,
        paddingBottom: ABOUT_TOKENS.paddingVertical,
      }}
    >
      <div className="mx-auto max-w-[1440px]">
        <ChapterHeader index={content.index} title={content.title} tone="light" />

        {/* Intro text and Faculty meeting photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
          <div className="lg:col-span-7">
            <RevealText>
              <p className="text-[17px] leading-[1.7] text-neutral-950/75 max-w-[62ch] text-pretty">
                {content.paragraphBeforeLink}
                <a
                  href={content.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-neutral-950 underline underline-offset-4 decoration-1 hover:decoration-2 transition-all focus-visible:outline-2 focus-visible:outline-neutral-950 focus-visible:outline-offset-4 rounded"
                >
                  {content.linkText}
                </a>
                {content.paragraphAfterLink}
              </p>
            </RevealText>
          </div>

          <div className="lg:col-span-5">
            <RevealImage className="relative w-full aspect-[4/3]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
            </RevealImage>
          </div>
        </div>

        {/* Faculty Awards Index */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[13px] uppercase tracking-[0.12em] text-neutral-950/50">
              Honors and Recognitions
            </h3>
            <span className="font-mono text-xs text-neutral-950/40">
              {String(awards.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 border-t border-neutral-950/10">
            {awards.map((award) => (
              <div
                key={award.id}
                className="group py-5 border-b border-neutral-950/10 flex items-center gap-4"
              >
                <span className="font-mono text-sm text-neutral-950/35 group-hover:text-neutral-950 transition-colors">
                  {award.id}
                </span>
                <span
                  className="font-medium text-neutral-950 tracking-tight transition-transform duration-200 ease-out group-hover:translate-x-2"
                  style={{ fontSize: "clamp(1.15rem, 1.8vw, 1.65rem)" }}
                >
                  {award.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
