import Hero from "../components/home/Hero";
import Marquee from "../components/shared/Marquee";
import Intro from "../components/home/Intro";
import ServicesGrid from "../components/home/ServicesGrid";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Intro />
      <ServicesGrid />
      <HowItWorks />
      <WhyChooseUs />
      <CTASection />
    </main>
  );
}
