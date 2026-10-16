"use client";

import React, { useRef } from "react";
import { ChapterHeader } from "@/components/shared/layout/ChapterHeader";
import { StudentProcedureStep } from "@/lib/students/data";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { TOKENS } from "@/lib/tokens";

function StepRow({
  item,
  index,
  total,
}: {
  item: StudentProcedureStep;
  index: number;
  total: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start 75%", "center 45%"],
  });

  const numeralOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [0.2, 1]
  );

  return (
    <div
      ref={rowRef}
      className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-b border-neutral-950/10 py-[clamp(28px,4vh,48px)] items-start"
    >
      {/* Numeral: Cols 1-3 */}
      <div className="md:col-span-3">
        <motion.div
          style={{
            opacity: numeralOpacity,
            fontSize: "clamp(2.5rem, 6vw, 6rem)",
          }}
          className="font-mono font-normal tracking-tight text-neutral-950 leading-none select-none tabular-nums"
        >
          {item.step}
        </motion.div>
      </div>

      {/* Content: Cols 4-11 */}
      <div className="md:col-span-8 space-y-2">
        <h3 className="text-sm uppercase tracking-wider text-neutral-950/50 font-medium">
          Step {index + 1} of {total} · {item.title}
        </h3>
        <p
          className="font-normal text-neutral-950 leading-[1.4] max-w-[52ch]"
          style={{ fontSize: "clamp(1.25rem, 1.9vw, 1.75rem)" }}
        >
          {item.text}
        </p>
      </div>
    </div>
  );
}

interface StudentsProcedureProps {
  steps: StudentProcedureStep[];
}

export function StudentsProcedure({ steps }: StudentsProcedureProps) {
  return (
    <section
      id="steps"
      aria-label="Student Placement Procedure"
      className="bg-neutral-50 text-neutral-950 scroll-mt-28 py-20 lg:py-28"
      style={{ paddingInline: TOKENS.paddingInline }}
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <ChapterHeader
          index="02"
          title="Procedure"
          surface="light"
          count={steps.length}
          lead="The step-by-step registration, verification, and placement process for IIT Kanpur students."
        />

        <div className="mt-12 md:mt-16 divide-y divide-neutral-950/10 border-t border-neutral-950/10">
          {steps.map((item, idx) => (
            <StepRow
              key={item.step}
              item={item}
              index={idx}
              total={steps.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
