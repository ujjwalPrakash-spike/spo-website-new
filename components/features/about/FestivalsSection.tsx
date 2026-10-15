"use client";

// Chapter 07: Festivals at IIT Kanpur on dark surface with closing recruitment CTA.

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChapterHeader } from "@/components/shared/layout/ChapterHeader";
import { CAMPUS_FESTIVALS, type CampusFestival } from "@/lib/about/campus-life";
import { ABOUT_TOKENS } from "@/lib/about/tokens";

export function FestivalsSection({
  festivals = CAMPUS_FESTIVALS,
}: {
  festivals?: CampusFestival[];
}) {
  return (
    <section
      id="festivals"
      aria-label="Festivals at IIT Kanpur"
      className="w-full bg-neutral-950 text-white scroll-mt-[var(--header-stack-h)]"
      style={{
        paddingInline: ABOUT_TOKENS.paddingInline,
        paddingTop: ABOUT_TOKENS.paddingVertical,
        paddingBottom: ABOUT_TOKENS.paddingVertical,
      }}
    >
      <div className="mx-auto max-w-[1440px]">
        <ChapterHeader index="07" title="Festivals at IIT Kanpur" tone="dark" />

        {/* 3 Festival Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10 mb-20 lg:mb-28">
          {festivals.map((fest) => (
            <div key={fest.id} className="py-8 lg:py-0 lg:px-8 first:pl-0 last:pr-0 flex flex-col gap-5">
              <div className="h-[72px] w-[72px] rounded-2xl bg-white/10 flex items-center justify-center p-2.5 overflow-hidden border border-white/10 shrink-0">
                <Image
                  src={fest.logo}
                  alt={fest.alt}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4
                className="font-medium text-white tracking-tight"
                style={{ fontSize: "clamp(2rem, 3.6vw, 3.5rem)" }}
              >
                {fest.title}
              </h4>
              <p className="text-[15px] leading-[1.65] text-white/70 text-pretty">
                {fest.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h4 className="text-[22px] sm:text-[26px] font-medium text-white tracking-tight">
              Hiring from IIT Kanpur?
            </h4>
            <p className="text-[15px] text-white/60 mt-1">
              Connect with the Students&apos; Placement Office to coordinate recruitment.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/companies"
              className="h-[46px] px-6 rounded-md bg-white text-neutral-950 font-semibold text-sm inline-flex items-center justify-center hover:bg-neutral-200 transition-colors shadow-sm active:scale-95"
            >
              Recruit with us
            </Link>
            <Link
              href="https://placement.iitk.ac.in/login"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[46px] px-6 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm inline-flex items-center justify-center hover:bg-white/20 transition-colors active:scale-95"
            >
              Student login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
