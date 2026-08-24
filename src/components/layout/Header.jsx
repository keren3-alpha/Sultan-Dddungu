import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function navClass({ isActive }) {
  return isActive ? "nav-active" : "";
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="navbar">
          <Link to="/" className="brand">
            <img src={logo} alt="Sultan Ddungu/Mama" />
            <div className="brand-text">
              <span className="brand-name">Sultan Ddungu/Mama</span>
              <span className="brand-tagline">Confidential Spiritual Guidance</span>
            </div>
          </Link>
          
          <button 
            className="menu-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
            <NavLink to="/" end className={navClass} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={navClass} onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/services" className={navClass} onClick={() => setIsOpen(false)}>Services</NavLink>
            <NavLink to="/testimonials" className={navClass} onClick={() => setIsOpen(false)}>Testimonials</NavLink>
            <NavLink to="/faq" className={navClass} onClick={() => setIsOpen(false)}>FAQ</NavLink>
            <NavLink to="/contact" className={navClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
            <Link to="/contact" className="btn btn-primary nav-cta" onClick={() => setIsOpen(false)}>
              Book a Consultation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
