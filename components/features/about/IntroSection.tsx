// Chapter 01: About IIT Kanpur on dark surface.

import React from "react";
import Image from "next/image";
import { ChapterHeader } from "./ChapterHeader";
import { RevealText, RevealImage } from "./Reveal";
import { ABOUT_INTRO_CONTENT } from "@/lib/about/content";
import { ABOUT_TOKENS } from "@/lib/about/tokens";

export function IntroSection({
  content = ABOUT_INTRO_CONTENT,
}: {
  content?: typeof ABOUT_INTRO_CONTENT;
}) {
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

        {/* 12-col grid for quote and body text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="lg:col-span-5">
            <RevealText>
              <p
                className="font-medium text-white leading-[1.4] text-pretty"
                style={{ fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)" }}
              >
                {content.quote}
              </p>
            </RevealText>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-5">
            {content.paragraphs.map((p, i) => (
              <RevealText key={i} delay={i * 0.07}>
                <p className="text-[17px] leading-[1.7] text-white/75 max-w-[62ch] text-pretty">
                  {p}
                </p>
              </RevealText>
            ))}
          </div>
        </div>

        {/* Full-width Entrance Wall Image */}
        <RevealImage className="relative w-full aspect-[4/3] sm:aspect-[21/9]">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover"
          />
        </RevealImage>
      </div>
    </section>
  );
}
