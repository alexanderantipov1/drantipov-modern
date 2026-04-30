import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import heroContent from "@/lib/heroContent";
import Results from "@/components/Results";
import Gallery from "@/components/Gallery";
import StatsCounter from "@/components/StatsCounter";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Results & Office Gallery — Why Patients Choose Dr. Antipov",
  description:
    "See why over 10,000 patients trust Dr. Antipov for dental implants, jaw surgery, and facial cosmetics. View our state-of-the-art Roseville office and surgical results.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero {...heroContent["/results"]!} />
      <Results />
      <Gallery />
      <StatsCounter />
      <CTA />
    </>
  );
}
