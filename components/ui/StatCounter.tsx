// High-performance animated numeric counter supporting integers and decimals.
"use client";

import { useCallback, useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  useSpaceSeparator?: boolean;
  className?: string;
}

export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.8,
  useSpaceSeparator = true,
  className = "",
}: StatCounterProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  const isDecimal = value % 1 !== 0;

  const formatNumber = useCallback(
    (num: number): string => {
      if (isDecimal) return num.toFixed(2);
      if (!useSpaceSeparator) return num.toString();
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    [isDecimal, useSpaceSeparator]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (!isInView || shouldReduceMotion) {
      el.textContent = `${prefix}${formatNumber(value)}${suffix}`;
      return;
    }

    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Smooth cubic ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = isDecimal
        ? Number((eased * value).toFixed(2))
        : Math.round(eased * value);

      el.textContent = `${prefix}${formatNumber(current)}${suffix}`;

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isInView, value, prefix, suffix, duration, formatNumber, isDecimal, shouldReduceMotion]);

  return (
    <span ref={containerRef} className={className}>
      {prefix}
      {shouldReduceMotion ? formatNumber(value) : isDecimal ? "0.00" : "0"}
      {suffix}
    </span>
  );
}

export default StatCounter;
