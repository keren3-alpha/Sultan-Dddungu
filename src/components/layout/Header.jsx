import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function navClass({ isActive }) {
  return isActive ? "nav-active" : "";
}

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="logo">
        <img src={logo} alt="Sultan Ddungu/Mama" className="logo-img" />
        <span className="logo-text">Sultan Ddungu/Mama</span>
      </Link>
      <nav className="main-nav">
        <NavLink to="/" end className={navClass}>Home</NavLink>
        <NavLink to="/about" className={navClass}>About</NavLink>
        <NavLink to="/services" className={navClass}>Services</NavLink>
        <NavLink to="/testimonials" className={navClass}>Testimonials</NavLink>
        <NavLink to="/faq" className={navClass}>FAQ</NavLink>
        <NavLink to="/contact" className={navClass}>Contact</NavLink>
      </nav>
      <div className="header-actions">
        <Link to="/contact" className="btn-primary">
          Book a Consultation
        </Link>
      </div>
    </header>
  );
}
