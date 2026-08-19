"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Pages where the floating button should NOT appear.
const HIDDEN_PREFIXES = [
  "/legal",
  "/ru/legal",
  "/smile-preview",
  "/ru/smile-preview",
];

/**
 * Floating corner button. Clicking it navigates to the AI Smile landing page
 * (localized), instead of opening a modal.
 */
export default function SmileFloatingButton() {
  const pathname = usePathname() || "/";

  const isRu = pathname === "/ru" || pathname.startsWith("/ru/");
  const hidden = HIDDEN_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(p + "/"),
  );
  if (hidden) return null;

  const href = isRu ? "/ru/smile-preview" : "/smile-preview";
  const label = isRu ? "Примерить улыбку" : "See your smile";

  return (
    <Link
      href={href}
      aria-label={label}
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 smile-float-attn`}
    >
      <span aria-hidden="true">✨</span>
      <span>{label}</span>
    </Link>
  );
}
