"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Single-locale (EN) site - Navbar and Footer render on every route.
export default function SiteChrome() {
  return null;
}

export function SiteNavbar() {
  return <Navbar />;
}

export function SiteFooter() {
  return <Footer />;
}
