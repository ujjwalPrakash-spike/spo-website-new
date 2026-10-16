"use client";

import React from "react";
import Link from "next/link";
import { Marquee } from "@/components/shared/ui/Marquee";
import { useReducedMotion } from "framer-motion";
import { TOKENS } from "@/lib/tokens";

export interface TickerCompany {
  key: string;
  count: number;
}

interface StudentsTickerProps {
  companies: TickerCompany[];
}

export function StudentsTicker({ companies }: StudentsTickerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (companies.length < 4) return null;

  if (shouldReduceMotion) {
    return (
      <div className="w-full border-t border-b border-white/10 bg-neutral-950/60 py-3">
        <div className="mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6">
          <span className="font-mono text-xs uppercase tracking-wider text-white/45">
            Insights from:
          </span>
          {companies.map((c) => (
            <Link
              key={c.key}
              href={`/insights?company=${encodeURIComponent(c.key)}`}
              className="group inline-flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors"
            >
              <span>{c.key}</span>
              <span className="font-mono text-xs text-white/40 tabular-nums">
                {c.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full border-t border-b border-white/10 bg-neutral-950/80 h-14 flex items-center">
      <div
        className="w-full mx-auto flex items-center"
        style={{ paddingInline: TOKENS.paddingInline }}
      >
        {/* Left static label */}
        <div className="shrink-0 pr-6 border-r border-white/15 hidden sm:block">
          <span className="font-mono text-xs uppercase tracking-wider text-white/45 select-none">
            Insights from
          </span>
        </div>

        {/* Scrolling Marquee */}
        <div className="flex-1 overflow-hidden pl-0 sm:pl-6">
          <Marquee direction="left" duration={70} pauseOnHover maskEdge>
            <div className="flex items-center">
              {companies.map((c) => (
                <div key={c.key} className="flex items-center">
                  <Link
                    href={`/insights?company=${encodeURIComponent(c.key)}`}
                    className="group inline-flex items-center gap-2 px-6 text-[15px] text-white/65 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#93c5fd]"
                  >
                    <span className="group-hover:underline underline-offset-4">
                      {c.key}
                    </span>
                    <span className="font-mono text-[13px] text-white/40 tabular-nums">
                      {c.count}
                    </span>
                  </Link>
                  <span className="h-4 w-[1px] bg-white/15 shrink-0" aria-hidden="true" />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
