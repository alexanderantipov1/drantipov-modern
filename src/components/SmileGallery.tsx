"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface SmilePhoto {
  src: string;
  alt: string;
  caption?: string;
  badge?: "Before" | "After";
}

interface SmileGalleryProps {
  photos: SmilePhoto[];
  eyebrow?: string;
  title?: string;
  description?: string;
  background?: "light" | "white";
  id?: string;
}

export default function SmileGallery({
  photos,
  eyebrow = "Smile Gallery",
  title = "Real Patient Smiles",
  description = "A selection of completed cases. Every smile is restored with full-arch dental implants and custom prosthetics by Dr. Antipov.",
  background = "light",
  id = "smile-gallery",
}: SmileGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const lastTriggerIndex = useRef<number | null>(null);

  const open = useCallback((i: number) => {
    lastTriggerIndex.current = i;
    setActiveIndex(i);
  }, []);

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Tab") {
        const dialog = dialogRef.current;
        if (!dialog) return;
        const focusables = dialog.querySelectorAll<HTMLElement>("button, [href], [tabindex]:not([tabindex='-1'])");
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      const idx = lastTriggerIndex.current;
      if (idx !== null) triggerRefs.current[idx]?.focus();
    };
  }, [activeIndex, close, next, prev]);

  const active = activeIndex === null ? null : photos[activeIndex];

  return (
    <section id={id} className={`py-24 lg:py-32 overflow-hidden ${background === "white" ? "bg-white" : "bg-light"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-muted text-lg">{description}</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((photo, i) => (
            <motion.button
              key={photo.src}
              type="button"
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              onClick={() => open(i)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.04 }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label={`View ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {photo.badge && (
                <span
                  className={`absolute top-2 left-2 z-10 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm ${
                    photo.badge === "After" ? "bg-primary" : "bg-dark/80"
                  }`}
                >
                  {photo.badge}
                </span>
              )}
              {photo.caption && (
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dark/70 to-transparent pt-8 pb-3 px-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm font-semibold">{photo.caption}</span>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {active && (
        <div
          ref={dialogRef}
          tabIndex={-1}
          className="fixed inset-0 z-[100] bg-dark/90 backdrop-blur-sm flex items-center justify-center p-4 focus:outline-none"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 sm:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <figure
            className="relative max-w-3xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
            <figcaption className="mt-4 text-center text-white/80 text-sm">
              {active.caption ? `${active.caption} · ` : ""}
              {(activeIndex ?? 0) + 1} / {photos.length}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
