import HeroSection from '@/components/home/HeroSection';
import MeetDoctorSection from '@/components/home/MeetDoctorSection';
import SurgicalExpertise from '@/components/home/SurgicalExpertise';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import SmileGallery from '@/components/home/SmileGallery';
import LatestInsights from '@/components/home/LatestInsights';
// import AppointmentBanner from '@/components/home/AppointmentBanner';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MeetDoctorSection />
      <SurgicalExpertise />
      <WhyChooseSection />
      <TestimonialsSection />
      <SmileGallery />
      <LatestInsights />
      {/* <AppointmentBanner /> */}
    </main>
  );
}
