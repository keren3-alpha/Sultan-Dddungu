import { Link } from "react-router-dom";
import logo from "../../assets/services/logo.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <img src={logo} alt="Sultan Ddungu/Mama" style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1px solid var(--line)", objectFit: "cover" }} />
              <div>
                <h3 style={{ color: "var(--gold-light)", marginBottom: "4px" }}>Sultan Ddungu/Mama</h3>
                <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--muted)" }}>Confidential Spiritual Guidance</p>
              </div>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: "1.7" }}>
              Sessions are offered for personal reflection, encouragement, and cultural guidance. 
              They do not replace medical, psychological, legal, or financial advice, and outcomes 
              are not guaranteed.
            </p>
          </div>
          
          <div>
            <h4 className="footer-title">Explore</h4>
            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/testimonials">Testimonials</Link>
            </div>
          </div>
          
          <div>
            <h4 className="footer-title">Information</h4>
            <div className="footer-links">
              <Link to="/faq">Frequently Asked Questions</Link>
              <Link to="/contact">Send an enquiry</Link>
            </div>
          </div>
          
          <div>
            <h4 className="footer-title">Contact</h4>
            <div className="footer-links">
              <a href="mailto:hello@example.com">hello@example.com</a>
              <a href="https://wa.me/26778521673" target="_blank" rel="noopener noreferrer">WhatsApp consultation</a>
              <a href="tel:+26778521673">+267 78521673</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Sultan Ddungu/Mama. All rights reserved.</span>
          <span>Serving clients worldwide through confidential online consultations.</span>
        </div>
      </div>
    </footer>
  );
}
