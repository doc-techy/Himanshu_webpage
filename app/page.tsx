import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import BlogsVideosPreview from "./components/BlogsVideosPreview";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f2f0] text-[#18333b] overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BlogsVideosPreview />
      <FAQSection />
      <ContactSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}
