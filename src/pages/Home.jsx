import HeroCarousel from "../components/home/HeroCarousel";
import Intro from "../components/home/Intro";
import ServicesGrid from "../components/home/ServicesGrid";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CTASection from "../components/home/CTASection";
import ServiceTags from "../components/home/ServiceTags";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <Intro />
      <ServicesGrid />
      <HowItWorks />
      <WhyChooseUs />
      <ServiceTags />
      <CTASection />
    </main>
  );
}
