"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import { TOKENS } from "@/lib/tokens";

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  activeOpenId?: string;
  onToggle?: (id: string) => void;
  className?: string;
}

export function Accordion({
  items,
  defaultOpenId,
  activeOpenId,
  onToggle,
  className = "",
}: AccordionProps) {
  const [prevDefaultOpenId, setPrevDefaultOpenId] = useState<string | undefined>(defaultOpenId);
  const [internalOpenId, setInternalOpenId] = useState<string>(
    defaultOpenId ?? (items[0]?.id || "")
  );
  const shouldReduceMotion = useReducedMotion();

  // Adjust state during render if defaultOpenId prop changed
  if (defaultOpenId !== prevDefaultOpenId) {
    setPrevDefaultOpenId(defaultOpenId);
    setInternalOpenId(defaultOpenId ?? (items[0]?.id || ""));
  }

  const isControlled = activeOpenId !== undefined;
  const currentOpenId = isControlled ? activeOpenId : internalOpenId;

  const handleToggle = (id: string) => {
    const next = currentOpenId === id ? "" : id;
    if (!isControlled) setInternalOpenId(next);
    onToggle?.(next);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      document.getElementById(`acc-trigger-${items[(index + 1) % items.length].id}`)?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      document.getElementById(`acc-trigger-${items[(index - 1 + items.length) % items.length].id}`)?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      document.getElementById(`acc-trigger-${items[0].id}`)?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      document.getElementById(`acc-trigger-${items[items.length - 1].id}`)?.focus();
    }
  };

  return (
    <div className={`w-full divide-y divide-neutral-950/10 border-y border-neutral-950/10 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = currentOpenId === item.id;
        return (
          <div key={item.id} className="w-full">
            <h3>
              <button
                id={`acc-trigger-${item.id}`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`acc-panel-${item.id}`}
                onClick={() => handleToggle(item.id)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className="w-full py-6 sm:py-7 flex items-center justify-between gap-6 text-left group focus-visible:outline-2 focus-visible:outline-neutral-950 focus-visible:outline-offset-4 rounded cursor-pointer"
              >
                <span
                  className="font-sans font-medium tracking-[-0.02em] text-neutral-950 group-hover:text-neutral-950/80 transition-colors"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
                >
                  {item.title}
                </span>
                <div className="h-8 w-8 rounded-full border border-neutral-950/15 flex items-center justify-center text-neutral-950/70 group-hover:text-neutral-950 group-hover:border-neutral-950/40 transition-colors shrink-0">
                  {isOpen ? <IconMinus size={16} /> : <IconPlus size={16} />}
                </div>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`acc-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`acc-trigger-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35, ease: TOKENS.ease }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pt-1 text-[17px] leading-[1.7] text-neutral-950/75 max-w-[62ch]">
                    {item.content}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
