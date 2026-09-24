import type { MetadataRoute } from "next";
import { canonicalOrigin, getSeoAlternates, indexableRoutes } from "@/lib/seo-foundation";

/** Single sitemap producer; no postbuild public artifacts or fabricated lastmod dates. */
export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map(path => {
    const alternates = getSeoAlternates(path);
    return {
      url: canonicalOrigin + (path === "/" ? "" : path),
      ...(alternates.languages ? {
        alternates: { languages: alternates.languages as Record<string, string> },
      } : {}),
    };
  });
}