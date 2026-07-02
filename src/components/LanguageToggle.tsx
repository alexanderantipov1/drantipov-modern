"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Check } from "lucide-react";

function FlagUS({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" fill="#b22234" />
      {[1, 3, 5, 7, 9, 11].map((i) => (
        <rect key={i} y={(i * 24) / 13} width="24" height={24 / 13} fill="#fff" />
      ))}
      <rect width="10" height={(24 * 7) / 13} fill="#3c3b6e" />
      {Array.from({ length: 12 }).map((_, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        return (
          <circle key={i} cx={2 + col * 2.2} cy={2 + row * 3.2} r="0.6" fill="#fff" />
        );
      })}
    </svg>
  );
}

function FlagRU({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="8" y="0" fill="#ffffff" />
      <rect width="24" height="8" y="8" fill="#0039a6" />
      <rect width="24" height="8" y="16" fill="#d52b1e" />
    </svg>
  );
}

const LANGUAGES = [
  { code: "en", label: "English", short: "EN", href: "/", Flag: FlagUS },
  { code: "ru", label: "Русский", short: "RU", href: "/ru", Flag: FlagRU },
] as const;

/**
 * Language switcher shown in both the English navbar and the Russian navbar.
 * Auto-detects the active locale from the pathname (/ru* → Russian, else English)
 * and links to the other site's home. Uses the shared theme tokens so it fits
 * both navbars without configuration.
 */
export default function LanguageToggle({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const isRu = pathname === "/ru" || (pathname?.startsWith("/ru/") ?? false);
  const currentCode = isRu ? "ru" : "en";

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const current = LANGUAGES.find((l) => l.code === currentCode) ?? LANGUAGES[0];
  const CurrentFlag = current.Flag;

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Select language / Выбрать язык"
        className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-dark/15 py-1.5 pl-1.5 pr-2.5 text-xs font-semibold text-muted transition hover:border-primary/40 hover:text-dark"
      >
        <span className="h-4 w-4 overflow-hidden rounded-full ring-1 ring-black/10">
          <CurrentFlag className="h-full w-full" />
        </span>
        {current.short}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-dark/10 bg-white py-1 shadow-xl shadow-black/10"
        >
          {LANGUAGES.map((l) => {
            const Flag = l.Flag;
            const active = l.code === currentCode;
            return (
              <a
                key={l.code}
                href={l.href}
                onClick={() => setOpen(false)}
                role="menuitem"
                className={`flex items-center gap-2.5 px-3 py-2.5 text-sm transition ${
                  active
                    ? "font-semibold text-dark"
                    : "text-muted hover:bg-light hover:text-dark"
                }`}
              >
                <span className="h-4 w-4 shrink-0 overflow-hidden rounded-full ring-1 ring-black/10">
                  <Flag className="h-full w-full" />
                </span>
                {l.label}
                {active && <Check className="ml-auto h-4 w-4 text-primary" />}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
