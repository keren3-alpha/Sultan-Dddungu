import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="hero hero-bg"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,9,21,0.75), rgba(15,9,21,0.85)), url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80)",
      }}
    >
      <div className="hero-content">
        <p className="eyebrow">
          <span className="eyebrow-dash"></span>
          Traditional wisdom, modern access
        </p>
        <h1>Clarity, comfort, and confidential spiritual guidance.</h1>
        <p className="hero-lead">
          Psychic Sultan offers palm reading, relationship guidance, prayer support, 
          spiritual cleansing, and personal consultations for clients around the world.
        </p>
        <p className="hero-lead" style={{ fontSize: "16px", color: "#c9a464", marginTop: "8px" }}>
          Private and respectful | Personalized guidance | Worldwide online access
        </p>
        <div className="cta-row">
          <Link to="/contact" className="btn-primary">Book a Confidential Consultation</Link>
          <Link to="/services" className="btn-secondary">Explore All Services</Link>
        </div>
      </div>
    </section>
  );
}
