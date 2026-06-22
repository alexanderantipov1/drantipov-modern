"use client";

import { useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { smileGalleryPhotos } from "@/lib/smileGalleryPhotos";

const smiles = smileGalleryPhotos;

export default function WallOfSmiles() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-14 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Wall of Smiles
        </p>
        <h2 className="mt-2 text-3xl lg:text-4xl font-serif font-bold text-neutral-900">
          Real Patients. Real Smiles.
        </h2>
        <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
          Every smile here belongs to a patient who trusted Dr. Antipov to restore
          their confidence with dental implants and full-arch care.
        </p>
      </div>

      <div className="smile-marquee group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />

        <div
          className="smile-marquee-track flex w-max gap-4 sm:gap-5"
          style={paused ? { animationPlayState: "paused" } : undefined}
        >
          {smiles.map((photo) => (
            <figure
              key={photo.src}
              className="relative aspect-[3/4] w-40 flex-none overflow-hidden rounded-2xl border-4 border-white bg-neutral-100 shadow-md ring-1 ring-black/5 transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl sm:w-48 lg:w-56"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 14rem, (min-width: 640px) 12rem, 10rem"
              />
            </figure>
          ))}
          {smiles.map((photo) => (
            <figure
              key={`dup-${photo.src}`}
              aria-hidden="true"
              className="relative aspect-[3/4] w-40 flex-none overflow-hidden rounded-2xl border-4 border-white bg-neutral-100 shadow-md ring-1 ring-black/5 transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl sm:w-48 lg:w-56"
            >
              <Image
                src={photo.src}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 14rem, (min-width: 640px) 12rem, 10rem"
              />
            </figure>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? "Resume the wall of smiles" : "Pause the wall of smiles"}
          className="absolute bottom-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-md ring-1 ring-black/10 backdrop-blur transition hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {paused ? (
            <Play className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Pause className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>
    </section>
  );
}
