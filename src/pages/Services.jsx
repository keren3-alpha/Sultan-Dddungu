import PageHero from "../components/shared/PageHero";
import ServicesGrid from "../components/home/ServicesGrid";

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="What we offer"
        title="Our Services"
        lead="Confidential, honest consultations shaped around your situation."
        seed="services-page"
      />
      <ServicesGrid />
    </main>
  );
}
