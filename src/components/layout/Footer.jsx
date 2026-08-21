import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <h3>Psychic Ddungu / Mama</h3>
        <p>Guidance, reflection, and cultural wisdom for life's decisions.</p>
      </div>

      <div className="footer-links">
        <div>
          <h4>Explore</h4>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/testimonials">Testimonials</Link>
        </div>
        <div>
          <h4>Information</h4>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <p className="disclaimer">
        Sessions are offered for personal reflection, encouragement, and
        cultural guidance. They do not replace medical, psychological,
        legal, or financial advice, and outcomes are not guaranteed.
      </p>

      <p className="copyright">
        &copy; {new Date().getFullYear()} Psychic Ddungu / Mama. All rights reserved.
      </p>
    </footer>
  );
}
