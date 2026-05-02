"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteChrome() {
  const pathname = usePathname() || "/";
  // Russian site has its own header/footer in RussianHome.tsx
  const isRussianRoute = pathname.startsWith("/ru");
  if (isRussianRoute) return null;
  return null; // Render moved to two pieces below
}

export function SiteNavbar() {
  const pathname = usePathname() || "/";
  if (pathname.startsWith("/ru")) return null;
  return <Navbar />;
}

export function SiteFooter() {
  const pathname = usePathname() || "/";
  if (pathname.startsWith("/ru")) return null;
  return <Footer />;
}
