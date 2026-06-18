import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import heroContent from "@/lib/heroContent";
import Locations from "@/components/Locations";
import ServiceArea from "@/components/ServiceArea";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: { absolute: "Locations & Service Area | Roseville, Sacramento" },
  description: "Main office in Roseville, CA. Serving Sacramento, Bay Area, and 157+ cities across Northern California and Nevada.",
  alternates: {
    canonical: "/locations",
    languages: {
      "en": "/locations",
      "x-default": "/locations",
    },
  },
  openGraph: {
    title: "Our Locations & Service Area",
    description: "Convenient offices serving Roseville, Sacramento, and 46+ cities across Northern California.",
    images: [
      {
        url: "/images/locations/locations@2x-dc292d32.jpg",
        width: 1200,
        height: 630,
        alt: "Our Locations & Service Area",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Locations & Service Area",
    description: "Convenient offices serving Roseville, Sacramento, and 46+ cities across Northern California.",
    images: ["/images/locations/locations@2x-dc292d32.jpg"],
  }
};

export default function LocationsPage() {
  return (
    <>
      <PageHero {...heroContent["/locations"]!} />
      <Locations />
      <ServiceArea />
      <CTA />
    </>
  );
}
