"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import ApiFunnel, { type FunnelLocale } from "@/components/ApiFunnel";

const CARDS: {
  slug: string;
  en: { title: string; text: string };
  ru: { title: string; text: string };
}[] = [
  {
    slug: "all-on-468-per-arch",
    en: {
      title: "All-on-X",
      text: "Full-arch fixed teeth on implants - All-on-4 from $8,499, All-on-6 from $12,999 per arch.",
    },
    ru: {
      title: "All-on-X",
      text: "Несъёмные зубы на всю челюсть - All-on-4 от $8,499, All-on-6 от $12,999 за челюсть.",
    },
  },
  {
    slug: "zirconia-teeth",
    en: {
      title: "Final Teeth",
      text: "Your final teeth on implants - PMMA acrylic, zirconia, or thimble bar, priced per arch.",
    },
    ru: {
      title: "Финальные зубы",
      text: "Финальные зубы на имплантах - акрил PMMA, цирконий или балочная конструкция, цена за челюсть.",
    },
  },
  {
    slug: "snap-in-denture",
    en: { title: "Snap-on Denture", text: "A secure, removable denture that snaps firmly onto implants." },
    ru: { title: "Съёмный протез", text: "Надёжный съёмный протез, который защёлкивается на имплантах." },
  },
  {
    slug: "single-implant",
    en: { title: "Single Implant", text: "One missing tooth replaced with an implant and a natural-looking crown." },
    ru: { title: "Одиночный имплант", text: "Один отсутствующий зуб - имплант и естественная коронка." },
  },
];

const LABEL = { en: "Calculate my cost", ru: "Рассчитать стоимость" } as const;

/**
 * Opening a package pushes a history entry, so the browser's own Back arrow
 * returns the visitor to the package grid instead of leaving the page. Enabled
 * for every package in both locales.
 */
const HISTORY_SLUGS: string[] = CARDS.map((c) => c.slug);

/**
 * On-page grid of treatment cards. Clicking a card opens our own API-driven
 * cost funnel inline (no SDK, no popup) for that package. Card illustrations
 * are custom photorealistic renders in /public/images/calculator/<slug>.jpg.
 * NOTE: procedure step/component text inside the funnel comes from the DentalPrice
 * API in English until the RU content dictionary lands (Phase 3); all UI chrome
 * is localized via the `locale` prop.
 */
export default function CalculatorPackages({
  locale = "en",
  initialSlug,
}: {
  locale?: FunnelLocale;
  /**
   * Opens straight into this package's funnel and locks the calculator to it,
   * skipping the card grid entirely. Use on narrow pages (an article about one
   * treatment) where the other three options would be noise.
   *
   * When set, the back control is deliberately NOT rendered: the visitor should
   * stay on the treatment the page is about and must not be able to surface the
   * four-package picker inside an embedded block.
   */
  initialSlug?: string;
}) {
  const [active, setActive] = useState<string | null>(initialSlug ?? null);
  /** Embedded single-package mode: no back control, no route to the grid. */
  const lockedToPackage = Boolean(initialSlug);
  const rootRef = useRef<HTMLDivElement>(null);
  /** True once we've pushed our own history entry for the open funnel. */
  const pushedRef = useRef(false);

  const tracksHistory = useCallback((slug: string) => HISTORY_SLUGS.includes(slug), []);

  /*
   * Browsers restore the previous scroll offset after a popstate, and that
   * restoration lands after our re-render — it would otherwise drop the
   * visitor mid-page. Re-assert the position over the next few frames using an
   * instant scroll, so the grid wins regardless of restoration timing.
   */
  const scrollToTop = useCallback(() => {
    const run = () => {
      const node = rootRef.current;
      if (!node) return;
      /*
       * The site sets `scroll-behavior: smooth` globally, which would animate
       * this jump over a long distance and lose a race with scroll
       * restoration. Force it instant for the duration of the reposition.
       */
      const root = document.documentElement;
      const previous = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      node.scrollIntoView({ behavior: "auto", block: "start" });
      root.style.scrollBehavior = previous;
    };
    requestAnimationFrame(run);
    window.setTimeout(run, 60);
    window.setTimeout(run, 180);
    window.setTimeout(run, 360);
  }, []);

  /*
   * Own scroll restoration for as long as this calculator is on the page, so
   * the browser doesn't fight the repositioning above.
   */
  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  const open = (slug: string) => {
    setActive(slug);
    if (tracksHistory(slug)) {
      window.history.pushState({ calcSlug: slug }, "", `#calculator-${slug}`);
      pushedRef.current = true;
    }
    scrollToTop();
  };

  /** In-funnel back control. Unwinds our history entry so the two stay in sync. */
  const back = () => {
    if (pushedRef.current) {
      window.history.back();
      return;
    }
    setActive(null);
    scrollToTop();
  };

  /* Browser Back while the funnel is open returns to the grid, not the last page. */
  useEffect(() => {
    if (!active || !tracksHistory(active)) return;

    const onPop = () => {
      pushedRef.current = false;
      setActive(null);
      scrollToTop();
    };
    window.addEventListener("popstate", onPop);

    return () => window.removeEventListener("popstate", onPop);
  }, [active, tracksHistory, scrollToTop]);

  if (active) {
    return (
      <div ref={rootRef} className="scroll-mt-24">
        <ApiFunnel
          slug={active}
          locale={locale}
          title={CARDS.find((c) => c.slug === active)?.[locale].title}
          onBack={lockedToPackage ? undefined : back}
          stickyBack={!lockedToPackage && tracksHistory(active)}
        />
      </div>
    );
  }

  return (
    <div ref={rootRef} className="grid scroll-mt-24 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {CARDS.map((c) => {
        const copy = c[locale];
        return (
          <button
            key={c.slug}
            type="button"
            onClick={() => open(c.slug)}
            className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-50">
              {/*
                Review build: `unoptimized` serves these straight from /public.
                The Next.js image optimizer returned 400 for these four JPEGs on
                a reviewer's machine; this is belt-and-braces on top of
                images.unoptimized in next.config.mjs.
              */}
              <Image
                src={`/images/calculator/${c.slug}.jpg`}
                alt={copy.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-300 group-hover:scale-105"
                unoptimized
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-serif text-lg font-bold text-neutral-900">{copy.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{copy.text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                {LABEL[locale]}
                <svg className="h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
