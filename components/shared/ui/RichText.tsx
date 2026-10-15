import React from "react";

export type TextSegment =
  | string
  | { text: string; strong?: boolean; small?: boolean; className?: string };

export function RichText({ segments }: { segments: TextSegment[] }) {
  return (
    <>
      {segments.map((seg, i) => {
        if (typeof seg === "string") return <React.Fragment key={i}>{seg}</React.Fragment>;
        if (seg.strong) {
          return (
            <strong key={i} className={`font-medium ${seg.className ?? ""}`}>
              {seg.text}
            </strong>
          );
        }
        if (seg.small) {
          return (
            <small key={i} className={`text-[13px] opacity-70 ${seg.className ?? ""}`}>
              {seg.text}
            </small>
          );
        }
        return (
          <span key={i} className={seg.className}>
            {seg.text}
          </span>
        );
      })}
    </>
  );
}
