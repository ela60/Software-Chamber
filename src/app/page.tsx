import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CompanyHighlights from "@/components/CompanyHighlights";
import SoftwareDevelopmentProcess from "@/components/SoftwareDevelopmentProcess";
import TechStackPortfolio from "@/components/TechStackPortfolio";
import WhyChooseSoftwarechamber from "@/components/WhyChooseSoftwarechamber";
import FAQSection from "@/components/FAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import ContactInfoSection from "@/components/ContactInfoSection";
import TestimonialSection from "@/components/TestimonialSection";
import ServicesSection from "@/components/ServicesSection";
import SoftwareDevelopment from "@/components/softwareDevelopment";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import SoftTech from "@/components/SoftTech";
import Next from "@/components/Next";
import ContactFooter from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white relative overflow-hidden font-sans">
      {/* Background Stars */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,255,0.08)_1px,transparent_1px)] bg-[length:24px_24px]"></div>

      <Banner/>
      {/* <Navbar />
      <Hero /> */}
      {/* <ServiceCard /> */}
      <CompanyHighlights />
      <ServicesSection />
      <SoftwareDevelopment />
      {/* <SoftwareDevelopmentProcess /> */}
      <WhyChooseSoftwarechamber/>
      {/* <TechStackPortfolio /> */}
      <SoftTech />
      {/* <Next/> */}
      <FAQSection />
      <TestimonialSection/>
      <ContactFormSection />
      {/* <ContactInfoSection /> */}
      <ContactFooter/>
    </main>
  );
}
