"use client";

import React, { useRef, useEffect } from "react";
import { IconSearch, IconX } from "@tabler/icons-react";

interface SearchInputProps {
  value: string;
  onChange: (val: string) => void;
  resultCount?: number;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  resultCount,
  className = "",
}: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === "Escape" && document.activeElement === inputRef.current) {
        onChange("");
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onChange]);

  return (
    <div className={`relative flex items-center ${className}`}>
      <label htmlFor="directory-search" className="sr-only">
        Search name, department or email
      </label>
      <IconSearch size={16} className="absolute left-3.5 text-white/40 pointer-events-none" />
      <input
        id="directory-search"
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search name, department or email"
        aria-controls="directory-results"
        className="h-11 w-full sm:w-72 pl-10 pr-9 rounded-full bg-white/5 border border-white/15 text-white text-[13px] placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-[#93c5fd] transition-all"
      />
      {value ? (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 text-white/50 hover:text-white"
        >
          <IconX size={14} />
        </button>
      ) : null}
      <span className="sr-only" aria-live="polite">
        {resultCount !== undefined ? `${resultCount} results found` : ""}
      </span>
    </div>
  );
}
