import React from "react";
import { IconArrowUpRight } from "@tabler/icons-react";

interface ArrowCircleProps {
  className?: string;
}

export function ArrowCircle({ className = "" }: ArrowCircleProps) {
  return (
    <div
      className={`h-11 w-11 rounded-full border border-neutral-950/15 flex items-center justify-center text-neutral-950 transition-all duration-300 group-hover:bg-neutral-950 group-hover:text-white group-hover:border-neutral-950 ${className}`}
    >
      <IconArrowUpRight size={18} />
    </div>
  );
}
