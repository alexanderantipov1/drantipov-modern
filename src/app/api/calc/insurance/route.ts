import { NextResponse } from "next/server";
import { CALC_PUBLIC_KEY, CALC_API_ORIGIN } from "@/lib/costCalculator";

/** Proxy for the widget's insurance plans (server-side, avoids CORS). */
export const revalidate = 300; // 5 min - dashboard price edits propagate within ~5 minutes

export async function GET() {
  try {
    const res = await fetch(
      `${CALC_API_ORIGIN}/api/v1/public/insurance-plans?public_key=${CALC_PUBLIC_KEY}`,
      { next: { revalidate } },
    );
    if (!res.ok) return NextResponse.json({ plans: [] });
    const data = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const arr: any[] = Array.isArray(data) ? data : data.plans || data.data || [];
    const plans = arr
      .filter((p) => p?.is_active !== false)
      .sort((a, b) => (a?.sort_order ?? 0) - (b?.sort_order ?? 0))
      .map((p) => ({
        id: String(p?.id ?? p?.plan_name ?? ""),
        name: String(p?.plan_name ?? p?.name ?? ""),
        description: String(p?.description ?? ""),
      }));
    return NextResponse.json({ plans });
  } catch {
    return NextResponse.json({ plans: [] });
  }
}
