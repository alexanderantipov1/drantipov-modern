"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Keeps <html lang> in sync with the active locale on the client.
 * /ru/* → "ru", everything else → "en". Runs on every route change.
 */
export default function HtmlLangSetter() {
  const pathname = usePathname();
  useEffect(() => {
    const isRu = pathname === "/ru" || (pathname?.startsWith("/ru/") ?? false);
    const lang = isRu ? "ru" : "en";
    if (document.documentElement.lang !== lang) {
      document.documentElement.lang = lang;
    }
  }, [pathname]);
  return null;
}
