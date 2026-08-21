// components/home/ServicesGrid.jsx
import { services } from "../../data/services";
import ServiceCard from "../shared/ServiceCard";

export default function ServicesGrid() {
  return (
    <section className="services-grid">
      <h2>Guidance for what matters most</h2>
      <div className="grid">
        {services.map((s) => (
          <ServiceCard key={s.slug} {...s} />
        ))}
      </div>
    </section>
  );
}