import { useState } from "react";
import { services } from "../../data/services";
import ServiceCard from "../shared/ServiceCard";

export default function ServicesGrid({ showAll = false }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(services.map(s => s.category))];
  const filteredServices = selectedCategory === "All" ? services : services.filter(s => s.category === selectedCategory);
  const displayedServices = showAll ? filteredServices : filteredServices.slice(0, 6);

  return (
    <section className="section">
      <div className="container center">
        <h2>Guidance for the questions that matter most.</h2>
        <p className="lead" style={{ marginBottom: "32px" }}>
          Choose a service area or request a private consultation to discuss your situation directly.
        </p>
        
        <div className="category-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="grid-3">
          {displayedServices.map((s) => (
            <ServiceCard key={s.slug} {...s} />
          ))}
        </div>
        
        {!showAll && services.length > 6 && (
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <a href="#/services" className="btn btn-secondary">View All Services →</a>
          </div>
        )}
      </div>
    </section>
  );
}
