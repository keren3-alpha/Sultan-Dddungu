import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="hero hero-bg"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,9,21,0.75), rgba(15,9,21,0.85)), url(https://picsum.photos/seed/mama-ddungu-hero/1600/900)",
      }}
    >
      <div className="hero-content">
        <p className="eyebrow">
          <span className="eyebrow-dash"></span>
          Tradition, guidance, and honest conversation
        </p>
        <h1>Clarity, comfort, and confidential guidance.</h1>
        <p className="hero-lead">
          Sultan Ddungu/Mama offers life coaching, relationship guidance,
          cultural wisdom sessions, and personal consultations for clients
          around the world.
        </p>
        <div className="cta-row">
          <Link to="/contact" className="btn-primary">Book a Confidential Consultation</Link>
          <Link to="/services" className="btn-secondary">Explore Services</Link>
        </div>
      </div>
    </section>
  );
}
