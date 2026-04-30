import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import heroContent from "@/lib/heroContent";
import Locations from "@/components/Locations";
import ServiceArea from "@/components/ServiceArea";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Locations & Service Area — Roseville, Sacramento & Northern California",
  description:
    "Visit Dr. Antipov's offices in Roseville and surrounding areas. Serving 46+ cities across Northern California and Nevada for dental implants, jaw surgery, and facial cosmetics.",
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
