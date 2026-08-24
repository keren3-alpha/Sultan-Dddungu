import { Link } from "react-router-dom";
import PageHero from "../components/shared/PageHero";

export default function Testimonials() {
  return (
    <main>
      <PageHero
        breadcrumb="Testimonials"
        title="Testimonials"
        lead="Real feedback from people we have guided."
        seed="testimonials"
      />

      <section className="section">
        <div className="container center" style={{ maxWidth: "700px" }}>
          <div className="card" style={{ padding: "60px 40px" }}>
            <h2 style={{ fontSize: "32px" }}>Testimonials are on their way</h2>
            <p className="lead">
              We are collecting feedback from recent clients. Check back soon, 
              or reach out directly if you would like to hear from past clients 
              before booking.
            </p>
            <div className="button-row" style={{ justifyContent: "center" }}>
              <Link to="/contact" className="btn btn-primary">Ask us directly</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
