import React from "react";
import { RevealLine, RevealTitleLine } from "../motion/Reveal";
import type { Surface } from "@/lib/tokens";

interface ChapterHeaderProps {
  id?: string;
  index: string;
  title: string;
  count?: string;
  tone?: Surface;
  className?: string;
}

export function ChapterHeader({
  id,
  index,
  title,
  count,
  tone = "dark",
  className = "",
}: ChapterHeaderProps) {
  const isDark = tone === "dark";

  return (
    <div className={`w-full mb-12 lg:mb-16 ${className}`}>
      <div className="flex items-center gap-4 sm:gap-6 mb-6">
        <span
          className={`font-mono text-sm tracking-widest shrink-0 ${
            isDark ? "text-white/40" : "text-neutral-950/40"
          }`}
        >
          {index}
        </span>
        <div className="flex-1">
          <RevealLine tone={tone} />
        </div>
        {count ? (
          <span
            className={`font-mono text-xs uppercase tracking-wider shrink-0 ${
              isDark ? "text-white/40" : "text-neutral-950/40"
            }`}
          >
            {count}
          </span>
        ) : null}
      </div>

      <h2
        id={id}
        className={`font-sans font-medium tracking-[-0.03em] leading-none ${
          isDark ? "text-white" : "text-neutral-950"
        }`}
        style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
      >
        <RevealTitleLine>{title}</RevealTitleLine>
      </h2>
    </div>
  );
}
