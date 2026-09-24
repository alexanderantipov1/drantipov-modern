import type { Metadata } from "next";
import staticRoutes from "./seo-route-inventory.json";
import { cities, stateSlugs, getCitiesByState } from "../constants/cities";
import { allCases } from "../constants/cases";

export const canonicalOrigin = "https://www.drantipov.com";

// Only existing routes/data are admitted. No invented geographic landing pages.
const dynamicEnglishRoutes = [
  ...stateSlugs.filter(state => getCitiesByState(state).length > 0).map(state => `/locations/${state}`),
  ...cities.map(city => `/locations/${city.state.toLowerCase()}/${city.slug}`),
  ...allCases.map(item => `/surgical-cases/${item.category}/${item.id}`),
];
export const indexableRoutes = [...new Set([
  ...staticRoutes,
  ...dynamicEnglishRoutes,
  ...dynamicEnglishRoutes.map(route => `/ru${route}`),
])].sort();
const indexable = new Set(indexableRoutes);

// Pairs must exist on both sides; untranslated routes never fall back to a homepage.
export const translationPairs = indexableRoutes
  .filter(route => route !== "/ru" && !route.startsWith("/ru/"))
  .map(en => ({ en, ru: en === "/" ? "/ru" : `/ru${en}` }))
  .filter(pair => indexable.has(pair.ru));
const pairsByRoute = new Map(translationPairs.flatMap(pair => [[pair.en, pair], [pair.ru, pair]] as const));

export function normalizeSeoPath(value: string): string {
  const url = new URL(value, canonicalOrigin);
  return url.pathname.replace(/\/+$/, "") || "/";
}

export function getSeoAlternates(value: string): NonNullable<Metadata["alternates"]> {
  const path = normalizeSeoPath(value);
  const absolute = (route: string) => canonicalOrigin + (route === "/" ? "" : route);
  const pair = pairsByRoute.get(path);
  return {
    canonical: absolute(path),
    languages: pair ? {
      en: absolute(pair.en),
      ru: absolute(pair.ru),
      "x-default": absolute(pair.en),
    } : undefined,
  };
}

/** Applied only at page metadata boundaries; never set route-specific metadata in layouts. */
export function finalizeMetadata(metadata: Metadata, explicitPath?: string): Metadata {
  const canonical = metadata.alternates?.canonical;
  const rawPath = explicitPath ?? (typeof canonical === "string" ? canonical : canonical instanceof URL ? canonical.href : undefined);
  // Existing dynamic invalid-ID branches return a not-found title before the
  // page invokes notFound(). They must not become server errors or indexable.
  if (!rawPath) return { ...metadata, robots: { index: false, follow: false } };
  const path = normalizeSeoPath(rawPath);
  const ru = path === "/ru" || path.startsWith("/ru/");
  const noindex = typeof metadata.robots === "string"
    ? metadata.robots.includes("noindex")
    : metadata.robots?.index === false;
  const title = typeof metadata.title === "string" ? metadata.title
    : metadata.title && "absolute" in metadata.title ? metadata.title.absolute
    : metadata.title && "default" in metadata.title ? metadata.title.default : undefined;
  return {
    ...metadata,
    ...(noindex ? {
      robots: typeof metadata.robots === "string" ? metadata.robots : {
        ...metadata.robots,
        googleBot: { index: false, follow: metadata.robots?.follow ?? false },
      },
    } : {}),
    // Deprecated search-engine keywords are omitted without touching visible content.
    keywords: null,
    alternates: noindex ? { canonical: getSeoAlternates(path).canonical } : getSeoAlternates(path),
    openGraph: {
      ...metadata.openGraph,
      title: metadata.openGraph?.title ?? title,
      description: metadata.openGraph?.description ?? metadata.description ?? undefined,
      url: getSeoAlternates(path).canonical as string,
      locale: ru ? "ru_RU" : "en_US",
      images: metadata.openGraph?.images ?? ["/images/slides/1/1844-99036b3b.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      ...metadata.twitter,
      title: metadata.twitter?.title ?? title,
      description: metadata.twitter?.description ?? metadata.description ?? undefined,
      images: metadata.twitter && "images" in metadata.twitter ? metadata.twitter.images : ["/images/slides/1/1844-99036b3b.jpg"],
    },
  };
}