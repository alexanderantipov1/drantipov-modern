"use client";

import { useEffect, useState, type ReactNode } from "react";
import { testimonials } from "@/constants/testimonials";

const INITIAL_COUNT = 5;
const STEP = 4;

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#F59E0B" aria-hidden="true">
      <path d="M12 2.5l3.09 6.26L22 9.77l-5 4.87 1.18 6.88L12 18.27l-6.18 3.25L7 14.64 2 9.77l6.91-1.01L12 2.5z" />
    </svg>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

interface ReviewsPanelProps {
  trigger: ReactNode;
  triggerClassName?: string;
  rating?: string;
}

export default function ReviewsPanel({ trigger, triggerClassName = "", rating = "4.9" }: ReviewsPanelProps) {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(INITIAL_COUNT);

  const reviews = testimonials.filter((t) => t.stars === 5);
  const visible = reviews.slice(0, count);
  const hasMore = count < reviews.length;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={triggerClassName}>
        {trigger}
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Left slide-out drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Patient reviews"
        className={`fixed inset-y-0 left-0 z-[101] flex w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-dark/10 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Patient Reviews</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-2xl font-bold text-dark">{rating}</span>
              <span className="flex items-center gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
            </div>
            <p className="mt-1 text-xs text-muted">Showing 5-star reviews from 740+ patients</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close reviews"
            className="rounded-full p-2 text-muted transition hover:bg-dark/5 hover:text-dark"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          <ul className="space-y-5">
            {visible.map((r) => (
              <li key={r.name} className="rounded-2xl border border-dark/10 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                    {r.name[0]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="truncate text-sm font-semibold text-dark">{r.name}</p>
                      <GoogleMark />
                    </div>
                    <p className="truncate text-xs text-muted">{r.procedure}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-0.5" role="img" aria-label="5 out of 5 stars">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-dark/80">&ldquo;{r.quote}&rdquo;</p>
                <p className="mt-3 text-[11px] uppercase tracking-wide text-muted">{r.location}</p>
              </li>
            ))}
          </ul>

          {hasMore && (
            <button
              type="button"
              onClick={() => setCount((c) => c + STEP)}
              className="mt-5 w-full rounded-2xl border border-dark/10 px-6 py-3 text-sm font-bold text-dark transition hover:border-primary/40 hover:text-primary"
            >
              Load More
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
