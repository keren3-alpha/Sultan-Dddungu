import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="cta-section">
      <h2>Tell Sultan Ddungu what you are facing</h2>
      <p>
        Your enquiry is treated respectfully and confidentially. Session
        format, timing, and fees are confirmed before any consultation begins.
      </p>
      <Link to="/contact" className="btn-primary">
        Request a Consultation
      </Link>
    </section>
  );
}
