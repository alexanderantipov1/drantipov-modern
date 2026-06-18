import type { Metadata } from "next";
import { siteConfig } from "@/constants/siteConfig";

/**
 * Centralized metadata builder.
 *
 * Produces a consistent Next.js `Metadata` object for every page:
 * self-referencing canonical, English-only hreflang, OpenGraph + Twitter cards.
 * The site is English-only, so no locale-prefixing or conditional hreflang.
 *
 * Title rules:
 * - `title` is run through the layout template (`%s | Dr. Antipov, Roseville CA`).
 * - Pass `absoluteTitle` to bypass the template when a page needs full control
 *   (keep it <= 60 chars including any suffix).
 * - Aim for description <= 160 chars, benefit-driven, with a soft CTA.
 */
export function buildMetadata({
  path,
  title,
  description,
  ogImage,
  absoluteTitle,
  keywords,
}: {
  path: string;
  title?: string;
  description: string;
  ogImage?: string;
  absoluteTitle?: string;
  keywords?: string[];
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage ?? siteConfig.ogImage;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    ...(keywords && keywords.length ? { keywords } : {}),
    alternates: {
      canonical: path,
      languages: {
        en: path,
        "x-default": path,
      },
    },
    openGraph: {
      title: absoluteTitle ?? title,
      description,
      url,
      type: "website",
      locale: "en_US",
      siteName: "Dr. Alexander Antipov, DDS — Oral & Maxillofacial Surgery",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ?? title,
      description,
      images: [image],
    },
  };
}
