import SiteDocument from "@/components/SiteDocument";

export { metadata, viewport } from "@/components/SiteDocument";

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="en">{children}</SiteDocument>;
}