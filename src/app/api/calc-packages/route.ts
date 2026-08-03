import { NextResponse } from "next/server";
import { CALC_PUBLIC_KEY, CALC_API_ORIGIN } from "@/lib/costCalculator";

/**
 * Server-side proxy for the DentalPrice public package list.
 * Runs on the server (no browser CORS/CSP), returns only the slug + inline
 * illustration (data-URI) for each package so the on-page cards can show the
 * exact same images the calculator uses. Cached for an hour.
 */
export const revalidate = 3600;

const SLUGS: { slug: string; test: RegExp }[] = [
  { slug: "all-on-468-per-arch", test: /all[\s-]*on/i },
  { slug: "zirconia-teeth", test: /zirconia|final\s*teeth/i },
  { slug: "snap-in-denture", test: /snap/i },
  { slug: "single-implant", test: /single/i },
];

function slugFor(name: string): string | null {
  for (const s of SLUGS) if (s.test.test(name)) return s.slug;
  return null;
}

export async function GET() {
  try {
    const url = `${CALC_API_ORIGIN}/api/v1/public/packages?public_key=${CALC_PUBLIC_KEY}`;
    const res = await fetch(url, { next: { revalidate } });
    if (!res.ok) return NextResponse.json({ packages: [] });
    const data = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const arr: any[] = Array.isArray(data) ? data : data.packages || data.data || [];
    const packages = arr
      .map((p) => ({
        slug: slugFor(String(p?.name || "")),
        image: typeof p?.image_url === "string" ? p.image_url : "",
      }))
      .filter((p) => p.slug && p.image);
    return NextResponse.json({ packages });
  } catch {
    return NextResponse.json({ packages: [] });
  }
}
