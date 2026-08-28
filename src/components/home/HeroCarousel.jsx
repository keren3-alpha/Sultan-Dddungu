import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sul2 from "../../assets/services/Sul2.jpeg";
import Sul7 from "../../assets/services/Sul7.jpeg";
import Sul6 from "../../assets/services/Sul6.jpeg";
import Sul8 from "../../assets/services/Sul8.jpeg";
import Sul4 from "../../assets/services/Sul4.jpeg";

const heroImages = [
  { id: 1, image: Sul2, title: "Spiritual Guidance" },
  { id: 2, image: Sul7, title: "Mystical Wisdom" },
  { id: 3, image: Sul6, title: "Divine Connection" },
  { id: 4, image: Sul8, title: "Sacred Rituals" },
  { id: 5, image: Sul4, title: "Ancient Power" }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-slideshow">
        {heroImages.map((img, index) => (
          <div
            key={img.id}
            className={`hero-slide ${index === currentIndex ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${img.image})` }}
          />
        ))}
      </div>
      <div className="hero-inner container" style={{ textAlign: "center" }}>
        <div className="hero-copy" style={{ margin: "0 auto", maxWidth: "900px" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>TRADITIONAL WISDOM, MODERN ACCESS</div>
          <h1 style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}>
            Clarity, comfort, and<br /><span>confidential spiritual</span><br />guidance.
          </h1>
          <p className="lead" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", maxWidth: "800px", margin: "0 auto 32px" }}>
            Sultan Ddungu/Mama offers palm reading, relationship guidance, prayer support, 
            spiritual cleansing, and personal consultations for clients around the world.
          </p>
          <div className="button-row" style={{ justifyContent: "center" }}>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: "1.2rem", padding: "16px 40px" }}>
              Book a Confidential Consultation
            </Link>
            <Link to="/services" className="btn btn-secondary" style={{ fontSize: "1.2rem", padding: "16px 40px" }}>
              Explore Services
            </Link>
          </div>
          <div className="trust-row" style={{ justifyContent: "center" }}>
            <span className="trust-pill" style={{ fontSize: "1rem" }}>Private and respectful</span>
            <span className="trust-pill" style={{ fontSize: "1rem" }}>Personalized guidance</span>
            <span className="trust-pill" style={{ fontSize: "1rem" }}>Worldwide online access</span>
          </div>
          <div className="hero-dots" style={{ display: "flex", justifyContent: "center", gap: "14px", marginTop: "40px" }}>
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`hero-dot ${index === currentIndex ? 'active' : ''}`}
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  border: "none",
                  background: index === currentIndex ? "#c9a464" : "#2c2233",
                  cursor: "pointer",
                  transition: "background 0.3s ease"
                }}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
