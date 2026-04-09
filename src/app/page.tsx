import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import StatsCounter from "@/components/StatsCounter";
import ProcedureVideos from "@/components/ProcedureVideos";
import Process from "@/components/Process";
import About from "@/components/About";
import Results from "@/components/Results";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import EmergencyBanner from "@/components/EmergencyBanner";
import OfficeTour from "@/components/OfficeTour";
import ServiceArea from "@/components/ServiceArea";
import Locations from "@/components/Locations";
import ReferringDoctors from "@/components/ReferringDoctors";
import Blog from "@/components/Blog";
import PatientResources from "@/components/PatientResources";
import FullArchShowcase from "@/components/FullArchShowcase";
import PriceCalculator from "@/components/PriceCalculator";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBadges />
        <Services />
        <FullArchShowcase />
        <StatsCounter />
        <ProcedureVideos />
        <Process />
        <PriceCalculator />
        <About />
        <Results />
        <BeforeAfter />
        <Gallery />
        <Testimonials />
        <FAQ />
        <EmergencyBanner />
        <OfficeTour />
        <ServiceArea />
        <Locations />
        <ReferringDoctors />
        <Blog />
        <PatientResources />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
