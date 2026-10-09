// Shared chapter header displaying mono index, full-width hairline, and masked title.

import React from "react";
import { RevealLine, RevealTitleLine } from "./Reveal";

interface ChapterHeaderProps {
  index: string;
  title: string;
  tone?: "dark" | "light";
  className?: string;
}

export function ChapterHeader({
  index,
  title,
  tone = "dark",
  className = "",
}: ChapterHeaderProps) {
  const isDark = tone === "dark";

  return (
    <div className={`w-full mb-12 lg:mb-16 ${className}`}>
      {/* Top row: mono index + hairline filling the rest */}
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
      </div>

      {/* Main Chapter Title */}
      <h2
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
