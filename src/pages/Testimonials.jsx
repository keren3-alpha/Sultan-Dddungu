import PageHero from "../components/shared/PageHero";

export default function Testimonials() {
  return (
    <main>
      <PageHero
        eyebrow="Client experiences"
        title="Testimonials"
        lead="Real feedback from people we have guided."
        seed="testimonials-page"
      />

      <section className="empty-state">
        <h2>Testimonials are on their way</h2>
        <p>
          We are collecting feedback from recent clients. Check back soon,
          or reach out directly if you would like to hear from past clients
          before booking.
        </p>
        <a href="/contact" className="btn-primary">Ask us directly</a>
      </section>
    </main>
  );
}
