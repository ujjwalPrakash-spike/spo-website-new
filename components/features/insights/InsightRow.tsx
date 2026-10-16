"use client";

import React from "react";
import Link from "next/link";
import { Insight } from "@/lib/insights/types";
import { ArrowCircle } from "@/components/shared/ui/ArrowCircle";
import { sourceTag } from "@/lib/format";

interface InsightRowProps {
  insight: Insight;
  className?: string;
}

export function InsightRow({ insight, className = "" }: InsightRowProps) {
  const isArticle = insight.kind === "article";
  const href = isArticle ? `/insights/${insight.slug}` : insight.href;
  const tag = sourceTag(insight);

  const ariaLabel = isArticle
    ? `Read ${insight.name}'s ${insight.type} insight for ${insight.company}`
    : `Open ${insight.name}'s ${insight.type} insight for ${insight.company} on Drive`;

  const commonClasses = `group relative block w-full py-[18px] border-b border-neutral-950/10 transition-colors hover:bg-neutral-950/[0.04] focus-visible:outline-2 focus-visible:outline-neutral-950 focus-visible:outline-offset-2 px-3 -mx-3 rounded-lg ${className}`;

  const innerContent = (
    <div className="grid grid-cols-12 items-center gap-2 sm:gap-4 w-full">
      {/* Name: cols 1-4 */}
      <div className="col-span-12 sm:col-span-4 transition-transform duration-200 group-hover:translate-x-2">
        <span className="font-medium text-[16px] sm:text-[17px] text-neutral-950">
          {insight.name}
        </span>
      </div>

      {/* Role: cols 5-8 */}
      <div className="col-span-7 sm:col-span-4">
        <span className="text-[14px] sm:text-[15px] text-neutral-950/65 line-clamp-1">
          {insight.role || (isArticle ? "Interview & Prep" : "—")}
        </span>
      </div>

      {/* Company: cols 9-11 */}
      <div className="col-span-3 sm:col-span-3">
        <span className="font-medium text-[14px] sm:text-[15px] text-neutral-950 line-clamp-1">
          {insight.company}
        </span>
      </div>

      {/* Tag & Arrow: col 12 */}
      <div className="col-span-2 sm:col-span-1 flex items-center justify-end gap-3">
        <span className="hidden xl:inline-block font-mono text-[12px] text-neutral-950/45 tabular-nums uppercase">
          {tag}
        </span>
        <ArrowCircle
          size={36}
          tone="light"
          direction={isArticle ? "right" : "up-right"}
          className="shrink-0 transition-colors duration-200 group-hover:bg-neutral-950 group-hover:text-white"
        />
      </div>
    </div>
  );

  if (isArticle) {
    return (
      <Link href={href} aria-label={ariaLabel} className={commonClasses}>
        {innerContent}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={commonClasses}
    >
      {innerContent}
    </a>
  );
}
