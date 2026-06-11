"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface FloatingArticleCTAProps {
  href?: string;
  label?: string;
  showAfterPct?: number;
}

export default function FloatingArticleCTA({
  href = "/contact",
  label = "Schedule consultation",
  showAfterPct = 25,
}: FloatingArticleCTAProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? Math.min(100, Math.max(0, (window.scrollY / docH) * 100)) : 0;
      setProgress(pct);
      setVisible(pct > showAfterPct && pct < 95);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfterPct]);

  // SVG progress ring math
  const size = 56;
  const stroke = 3;
  const radius = (size - stroke) / 2;
  const circ = radius * 2 * Math.PI;
  const dashOffset = circ - (progress / 100) * circ;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-24 right-4 z-40 transition-all duration-500 sm:bottom-8 sm:right-8 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
      }`}
    >
      <Link
        href={href}
        className="group relative flex items-center gap-3 rounded-full bg-primary text-white shadow-2xl shadow-primary/30 transition hover:bg-primary-dark px-5 py-3"
      >
        <div className="relative h-10 w-10 shrink-0">
          <svg className="h-full w-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth={stroke}
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="white"
              strokeWidth={stroke}
              strokeDasharray={circ}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-200 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <span className="text-sm font-bold hidden sm:inline">{label}</span>
      </Link>
    </div>
  );
}
