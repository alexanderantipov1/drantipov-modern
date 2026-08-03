import { NextRequest, NextResponse } from "next/server";
import { CALC_PUBLIC_KEY, CALC_API_ORIGIN } from "@/lib/costCalculator";

/**
 * Server-side proxy for a package's full funnel (steps + components + prices).
 * Resolves a friendly slug -> package UUID via the public packages list, then
 * returns that package's steps-config. Server-side = no browser CORS/CSP.
 */
export const revalidate = 300; // 5 min - dashboard price edits propagate within ~5 minutes

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

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug") || "";
  try {
    // 1) resolve slug -> package id
    const listRes = await fetch(
      `${CALC_API_ORIGIN}/api/v1/public/packages?public_key=${CALC_PUBLIC_KEY}`,
      { next: { revalidate } },
    );
    if (!listRes.ok) return NextResponse.json({ error: "packages" }, { status: 502 });
    const listData = await listRes.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const arr: any[] = Array.isArray(listData) ? listData : listData.packages || listData.data || [];
    const match = arr.find((p) => slugFor(String(p?.name || "")) === slug);
    if (!match?.id) return NextResponse.json({ error: "not found" }, { status: 404 });

    // 2) fetch that package's funnel
    const stepsRes = await fetch(
      `${CALC_API_ORIGIN}/api/v1/public/packages/${match.id}/steps-config?public_key=${CALC_PUBLIC_KEY}`,
      { next: { revalidate } },
    );
    if (!stepsRes.ok) return NextResponse.json({ error: "steps" }, { status: 502 });
    const steps = await stepsRes.json();
    return NextResponse.json(steps);
  } catch {
    return NextResponse.json({ error: "exception" }, { status: 502 });
  }
}
