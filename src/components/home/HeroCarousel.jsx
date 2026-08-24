import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import palmReadingImg from "../../assets/services/Psalmreading.jpg";
import tarotReadingImg from "../../assets/services/Tarotreading.jpg";
import astrologyReadingImg from "../../assets/services/astrologyreading.jpg";
import loveBindingImg from "../../assets/services/LoveBindingRituals.jpg";

const heroImages = [
  { id: 1, image: palmReadingImg },
  { id: 2, image: tarotReadingImg },
  { id: 3, image: astrologyReadingImg },
  { id: 4, image: loveBindingImg }
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
      <div className="hero-inner container">
        <div className="hero-copy">
          <div className="eyebrow">TRADITIONAL WISDOM, MODERN ACCESS</div>
          <h1>Clarity, comfort, and<br /><span>confidential spiritual</span><br />guidance.</h1>
          <p className="lead">
            Sultan Ddungu/Mama offers palm reading, relationship guidance, prayer support, 
            spiritual cleansing, and personal consultations for clients around the world.
          </p>
          <div className="button-row">
            <Link to="/contact" className="btn btn-primary">
              Book a Confidential Consultation
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Explore Services
            </Link>
          </div>
          <div className="trust-row">
            <span className="trust-pill">Private and respectful</span>
            <span className="trust-pill">Personalized guidance</span>
            <span className="trust-pill">Worldwide online access</span>
          </div>
        </div>
      </div>
    </section>
  );
}
