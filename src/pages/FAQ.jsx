import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/shared/PageHero";

const faqs = [
  {
    q: "What can I expect from a session?",
    a: "Every session starts with listening. You explain what you are facing, and guidance is shaped around your actual situation, beliefs, and circumstances."
  },
  {
    q: "Is everything confidential?",
    a: "Yes. What you share stays private. Nothing discussed in a session is shared with anyone else."
  },
  {
    q: "How can I book a consultation?",
    a: "Use the Contact page, WhatsApp, or call directly. You will confirm the service, format, timing, and fee before the session begins."
  },
  {
    q: "Do you offer consultations online?",
    a: "Yes. Sessions are available for clients around the world through WhatsApp, phone, or video call."
  },
  {
    q: "Are my personal details kept private?",
    a: "Yes. Your details and the content of your session are never shared with anyone else."
  },
  {
    q: "How long does a session take, and what does it cost?",
    a: "Most sessions run between 30 and 60 minutes. Pricing depends on the service and is confirmed with you before booking."
  },
  {
    q: "What issues can be discussed?",
    a: "Relationships, family matters, career decisions, life transitions, and personal reflection. If a topic falls outside what we can help with, we will tell you honestly."
  },
  {
    q: "Do you work with people from different backgrounds?",
    a: "Yes. Every client is treated with respect regardless of background or belief system."
  },
  {
    q: "Do you guarantee outcomes?",
    a: "No. Guidance is honest and grounded, not a promise of a specific result."
  }
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        {q}
      </button>
      <div className="faq-answer">
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <main>
      <PageHero
        breadcrumb="FAQ"
        title="Frequently Asked Questions"
        lead="Answers to what people usually ask before booking a session."
        seed="faq"
      />

      <section className="section">
        <div className="container narrow">
          <div className="faq-list">
            {faqs.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container center" style={{ maxWidth: "700px" }}>
          <div className="cta-panel">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Still have a question?</div>
            <h2>Send a private enquiry.</h2>
            <p className="lead">
              Describe the service you are considering and ask for the timing, 
              fee, consultation method, and scope before you proceed.
            </p>
            <div className="button-row" style={{ justifyContent: "center" }}>
              <Link to="/contact" className="btn btn-primary">Ask a Question</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
