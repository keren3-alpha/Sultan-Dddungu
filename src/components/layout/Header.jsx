import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="logo">
        <img src={logo} alt="Sultan Ddungu/Mama" className="logo-img" />
        <span className="logo-text">Sultan Ddungu/Mama</span>
      </Link>
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="header-actions">
        <Link to="/contact" className="btn-primary">
          Book a Consultation
        </Link>
      </div>
    </header>
  );
}
