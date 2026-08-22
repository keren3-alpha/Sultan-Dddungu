import HeroCarousel from "../components/home/HeroCarousel";
import Marquee from "../components/shared/Marquee";
import Intro from "../components/home/Intro";
import ServicesGrid from "../components/home/ServicesGrid";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CTASection from "../components/home/CTASection";
import ServiceTags from "../components/home/ServiceTags";

export default function Home() {
  return (
    <main style={{ padding: 0 }}>
      <HeroCarousel />
      <div style={{ padding: "0 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <Marquee />
        <Intro />
        <ServicesGrid />
        <HowItWorks />
        <WhyChooseUs />
        <ServiceTags />
        <CTASection />
      </div>
    </main>
  );
}
