import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="cta-section">
      <h2>Start a private conversation</h2>
      <p>
        Tell Sultan Ddungu/Mama what you are facing. Your enquiry is treated respectfully 
        and confidentially. Contact details, consultation format, fees, and timing 
        are confirmed before any service begins.
      </p>
      <Link to="/contact" className="btn-primary">
        Request a Consultation
      </Link>
    </section>
  );
}
