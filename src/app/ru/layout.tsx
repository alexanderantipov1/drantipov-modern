import type { Metadata } from "next";
import RuNavbar from "@/components/ru-home/RuNavbar";
import RuFooter from "@/components/ru-home/RuFooter";

/**
 * RU subtree layout. Sets a Russian <title> template and ru_RU OpenGraph locale
 * for every /ru/* page via Next.js metadata merging. (The <html lang="ru">
 * itself is set in the root layout based on the request pathname.)
 *
 * Renders the Russian navbar/footer once here so every /ru page gets consistent
 * chrome. The shared English Navbar/Footer return null on /ru routes.
 */
export const metadata: Metadata = {
  title: {
    default: "Доктор Александр Антипов — челюстно-лицевой хирург, Roseville CA",
    template: "%s | Доктор Антипов, Roseville CA",
  },
  openGraph: {
    locale: "ru_RU",
    siteName: "Доктор Александр Антипов, DDS",
  },
};

export default function RuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RuNavbar />
      {children}
      <RuFooter />
    </>
  );
}
