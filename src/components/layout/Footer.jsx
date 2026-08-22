import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <div className="footer-logo-row">
          <img src={logo} alt="Sultan Ddungu/Mama" className="footer-logo-img" />
          <div>
            <h3>Sultan Ddungu/Mama</h3>
            <p className="footer-tagline">Confidential Spiritual Guidance</p>
          </div>
        </div>
        <p>
          Sessions are offered for personal reflection, encouragement, and
          cultural guidance. They do not replace medical, psychological,
          legal, or financial advice, and outcomes are not guaranteed.
        </p>
      </div>

      <div className="footer-col">
        <h4>Explore</h4>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/testimonials">Testimonials</Link>
      </div>

      <div className="footer-col">
        <h4>Information</h4>
        <Link to="/faq">Frequently Asked Questions</Link>
        <Link to="/contact">Send an enquiry</Link>
      </div>

      <div className="footer-col">
        <h4>Contact</h4>
        <a href="mailto:hello@example.com">hello@example.com</a>
        <a
          href="https://wa.me/26778521673"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp consultation
        </a>
        <a href="tel:+26778521673">+267 78521673</a>
      </div>

      <p className="copyright">
        &copy; {new Date().getFullYear()} Sultan Ddungu/Mama. All rights reserved.
        <span className="footer-serving"> Serving clients worldwide through confidential online consultations.</span>
      </p>
    </footer>
  );
}
