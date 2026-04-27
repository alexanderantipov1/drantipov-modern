import type { Metadata } from "next";
import RussianHome from "@/components/RussianHome";
import {
  getRussianFunnelStructuredData,
  russianHomePage,
  siteUrl,
} from "@/data/russianImplantFunnel";
import { structuredDataScript } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: russianHomePage.title,
  description: russianHomePage.description,
  alternates: {
    canonical: `${siteUrl}/ru`,
    languages: {
      "x-default": siteUrl,
      en: siteUrl,
      ru: `${siteUrl}/ru`,
    },
  },
  openGraph: {
    title: russianHomePage.title,
    description: russianHomePage.description,
    url: `${siteUrl}/ru`,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/landing-pages/dental-implants/art/slider02-ff45c735.jpg",
        width: 1920,
        height: 1080,
        alt: "Dr. Antipov same-day dental implants in Roseville California",
      },
    ],
  },
  keywords: russianHomePage.keywords,
};

export default function RussianImplantPage() {
  const structuredData = getRussianFunnelStructuredData(russianHomePage, "/ru");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={structuredDataScript(structuredData)} />
      <RussianHome />
    </>
  );
}
