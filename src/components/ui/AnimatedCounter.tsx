"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  /** Target number to count to */
  to: number;
  /** Suffix appended after the number, e.g. "+" or "%" */
  suffix?: string;
  /** Prefix prepended before the number, e.g. "$" */
  prefix?: string;
  /** Animation duration in ms (default 1800) */
  duration?: number;
  /** Number of decimal places */
  decimals?: number;
  /** Optional className applied to the rendered span */
  className?: string;
  /** Ease-out curve (default true). When false uses linear interpolation. */
  easeOut?: boolean;
}

/**
 * AnimatedCounter - counts from 0 to `to` when the element scrolls into view.
 * Triggers once. Uses requestAnimationFrame for a smooth, monotonic animation.
 */
export function AnimatedCounter({
  to,
  suffix = "",
  prefix = "",
  duration = 1800,
  decimals = 0,
  className,
  easeOut = true,
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      // easeOutCubic for a natural decel feel
      const eased = easeOut ? 1 - Math.pow(1 - t, 3) : t;
      setValue(to * eased);
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValue(to);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, to, duration, easeOut]);

  const displayed = decimals > 0
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayed}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
