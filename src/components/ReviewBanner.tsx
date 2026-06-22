import type { ReactNode } from "react";
import ReviewsPanel from "@/components/ReviewsPanel";

interface ReviewBannerProps {
  rating?: string;
  caption?: ReactNode;
  trustedLabel?: string;
  className?: string;
}

function Star() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 sm:h-[15px] sm:w-[15px]"
      fill="#F5A623"
      stroke="#F5A623"
      strokeWidth={1}
      aria-hidden="true"
    >
      <path d="M12 2.5l3.09 6.26L22 9.77l-5 4.87 1.18 6.88L12 18.27l-6.18 3.25L7 14.64 2 9.77l6.91-1.01L12 2.5z" />
    </svg>
  );
}

function GoogleCircle() {
  return (
    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white ring-2 ring-[#0a1929] sm:h-9 sm:w-9">
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    </span>
  );
}

function FacebookCircle() {
  return (
    <span className="relative -ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] ring-2 ring-[#0a1929] sm:h-9 sm:w-9">
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="#ffffff" aria-hidden="true">
        <path d="M15.12 8.45h-1.9v-1.3c0-.5.34-.62.57-.62h1.3V4.5l-1.79-.01c-1.99 0-2.44 1.48-2.44 2.43v1.53H9.6v2.13h1.26V19h2.36v-6.42h1.59l.31-2.13z" />
      </svg>
    </span>
  );
}

function YelpCircle() {
  return (
    <span className="relative -ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#FF1A1A] ring-2 ring-[#0a1929] sm:h-9 sm:w-9">
      <span className="text-sm font-extrabold leading-none text-white sm:text-base">Y</span>
    </span>
  );
}

function MonoGlyph({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-5 w-5 items-center justify-center text-white/55" aria-hidden="true">
      {children}
    </span>
  );
}

export default function ReviewBanner({
  rating = "4.7",
  caption,
  trustedLabel = "TRUSTED ON",
  className = "",
}: ReviewBannerProps) {
  const captionContent = caption ?? (
    <>
      Average rating from{" "}
      <span className="font-semibold text-white underline">740+ patients</span>
    </>
  );

  return (
    <section className={`w-full bg-[#0a1929] ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/15 px-4 py-3 sm:px-5 sm:py-3.5">
          {/* Left group */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center">
              <GoogleCircle />
              <FacebookCircle />
              <YelpCircle />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold leading-none text-white sm:text-xl">{rating}</span>
                <span
                  className="flex items-center gap-0.5"
                  role="img"
                  aria-label={`${rating} out of 5 stars`}
                >
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </span>
              </div>
              <ReviewsPanel
                rating={rating}
                trigger={captionContent}
                triggerClassName="mt-1 block cursor-pointer text-left text-xs text-white/65 transition hover:text-white sm:text-sm"
              />
            </div>
          </div>

          {/* Right group */}
          <div className="hidden items-center gap-4 md:flex">
            <span className="h-8 w-px bg-white/15" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.18em] text-white/45">
              {trustedLabel}
            </span>
            <div className="flex items-center gap-3">
              <MonoGlyph>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09zM12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23zM5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84zM12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </MonoGlyph>
              <MonoGlyph>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.08 24 18.09 24 12.07z" />
                </svg>
              </MonoGlyph>
              <MonoGlyph>
                <span className="text-sm font-extrabold leading-none">Y</span>
              </MonoGlyph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
