import type { Metadata } from "next";
import RuNavbar from "@/components/ru-home/RuNavbar";
import RuFooter from "@/components/ru-home/RuFooter";
import SiteDocument, { metadata as sharedMetadata } from "@/components/SiteDocument";

export { viewport } from "@/components/SiteDocument";

/**
 * Independent RU root document: language is static server output, not request
 * headers or client mutation. Cross-language navigation reloads the document.
 *
 * Renders the Russian navbar/footer once here so every /ru page gets consistent
 * chrome. The shared English Navbar/Footer return null on /ru routes.
 */
export const metadata: Metadata = {
  ...sharedMetadata,
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
    <SiteDocument lang="ru">
      <RuNavbar />
      {children}
      <RuFooter />
    </SiteDocument>
  );
}
