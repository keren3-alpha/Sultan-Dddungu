import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import palmReadingImg from "../../assets/services/Psalmreading.jpg";
import tarotReadingImg from "../../assets/services/Tarotreading.jpg";
import astrologyReadingImg from "../../assets/services/astrologyreading.jpg";
import loveBindingImg from "../../assets/services/LoveBindingRituals.jpg";

const heroImages = [
  {
    id: 1,
    image: palmReadingImg,
  },
  {
    id: 2,
    image: tarotReadingImg,
  },
  {
    id: 3,
    image: astrologyReadingImg,
  },
  {
    id: 4,
    image: loveBindingImg,
  }
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
    <section style={{ 
      width: "100%", 
      margin: 0, 
      padding: 0,
      overflow: "hidden",
      position: "relative"
    }}>
      <div 
        style={{
          backgroundImage: `linear-gradient(rgba(15,9,21,0.7), rgba(15,9,21,0.85)), url(${heroImages[currentIndex].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          transition: "background-image 0.8s ease-in-out",
          margin: 0,
          padding: 0
        }}
      >
        <div style={{ 
          maxWidth: "1100px", 
          margin: "0 auto", 
          padding: "80px 32px",
          width: "100%"
        }}>
          <p style={{
            color: "#c9a464",
            textTransform: "uppercase",
            fontSize: "13px",
            letterSpacing: "1.5px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}>
            <span style={{ display: "inline-block", width: "32px", height: "2px", background: "#c9a464" }}></span>
            TRADITIONAL WISDOM, MODERN ACCESS
          </p>
          
          <h1 style={{
            fontSize: "64px",
            lineHeight: "1.1",
            maxWidth: "800px",
            marginBottom: "16px",
            color: "#f4f0f8",
            fontWeight: "700"
          }}>
            Clarity, comfort, and<br />confidential spiritual<br />guidance.
          </h1>
          
          <p style={{
            fontSize: "18px",
            color: "#d8d3de",
            maxWidth: "620px",
            marginBottom: "24px",
            lineHeight: "1.6"
          }}>
            Sultan Ddungu/Mama offers palm reading, relationship guidance, prayer support, 
            spiritual cleansing, and personal consultations for clients around the world.
          </p>
          
          <div style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "32px"
          }}>
            <Link to="/contact" style={{
              display: "inline-block",
              padding: "14px 32px",
              borderRadius: "999px",
              fontWeight: "600",
              fontSize: "15px",
              textDecoration: "none",
              background: "#c9a464",
              color: "#1a1220",
              letterSpacing: "0.3px"
            }}>
              Book a Confidential Consultation
            </Link>
            <Link to="/services" style={{
              display: "inline-block",
              padding: "14px 32px",
              borderRadius: "999px",
              fontWeight: "600",
              fontSize: "15px",
              textDecoration: "none",
              background: "transparent",
              color: "#f4f0f8",
              border: "1px solid #2c2233",
              letterSpacing: "0.3px"
            }}>
              Explore Services
            </Link>
          </div>
          
          {/* Trust Badges */}
          <div style={{
            display: "flex",
            gap: "32px",
            flexWrap: "wrap",
            marginTop: "8px"
          }}>
            <span style={{ color: "#c9a464", fontSize: "14px" }}>✦ Private and respectful</span>
            <span style={{ color: "#c9a464", fontSize: "14px" }}>✦ Personalized guidance</span>
            <span style={{ color: "#c9a464", fontSize: "14px" }}>✦ Worldwide online access</span>
          </div>
          
          {/* Carousel Dots */}
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "12px", 
            marginTop: "60px"
          }}>
            {heroImages.map((_, index) => (
              <button
                key={index}
                style={{
                  width: "10px",
                  height: "10px",
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
