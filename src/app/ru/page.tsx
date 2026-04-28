import type { Metadata } from "next";
import RussianHome from "@/components/RussianHome";
import { russianHomePage, siteUrl } from "@/data/russianImplantFunnel";

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
};

export default function RussianImplantPage() {
  return <RussianHome />;
}
