import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="section">
      <div className="container center">
        <div className="cta-panel">
          <div className="eyebrow" style={{ justifyContent: "center" }}>Start a private conversation</div>
          <h2 style={{ fontSize: "38px" }}>Tell Sultan Ddungu/Mama what you are facing.</h2>
          <p className="lead" style={{ marginInline: "auto" }}>
            Your enquiry is treated respectfully and confidentially. Contact details, 
            consultation format, fees, and timing are confirmed before any service begins.
          </p>
          <div className="button-row" style={{ justifyContent: "center" }}>
            <Link to="/contact" className="btn btn-primary">Request a Consultation</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
