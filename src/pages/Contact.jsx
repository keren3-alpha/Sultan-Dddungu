import { useState } from "react";
import PageHero from "../components/shared/PageHero";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", concern: "" });
  const [error, setError] = useState("");

  const contactEmail = "hello@example.com";
  const phone = "26778521673";

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function buildMessage() {
    return (
      "Name: " + form.name + "\n" +
      "Email: " + form.email + "\n\n" +
      form.concern
    );
  }

  function sendByEmail(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.concern) {
      setError("Please fill in every field before sending.");
      return;
    }
    setError("");
    const subject = "Consultation enquiry from " + form.name;
    window.location.href =
      "mailto:" + contactEmail +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(buildMessage());
  }

  function sendByWhatsApp(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.concern) {
      setError("Please fill in every field before sending.");
      return;
    }
    setError("");
    window.open(
      "https://wa.me/" + phone + "?text=" + encodeURIComponent(buildMessage()),
      "_blank"
    );
  }

  return (
    <main id="contact-form">
      <PageHero
        eyebrow="Private enquiry"
        title="Contact Us"
        lead="Your enquiry is treated respectfully and confidentially."
        seed="contact-page"
      />

      <div className="contact-split">
        <div className="contact-info">
          <p>
            We welcome clients from around the world through secure online
            consultations via WhatsApp, phone, or email.
          </p>

          <div className="contact-info-card">
            <h4>Email</h4>
            <a href={"mailto:" + contactEmail}>{contactEmail}</a>
          </div>

          <div className="contact-info-card">
            <h4>WhatsApp</h4>
            <a
              href={"https://wa.me/" + phone}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              +267 78521673
            </a>
            <p className="contact-info-note">Chat privately on WhatsApp.</p>
          </div>

          <div className="contact-info-card">
            <h4>Telephone</h4>
            <a href={"tel:+" + phone}>+267 78521673</a>
          </div>
        </div>

        <form className="contact-form">
          <h2>Consultation Enquiry</h2>
          <p className="contact-form-note">
            Choose email or WhatsApp after completing the form.
          </p>

          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />

          <label htmlFor="concern">Briefly describe your concern</label>
          <textarea
            id="concern"
            name="concern"
            rows="5"
            value={form.concern}
            onChange={handleChange}
          />

          {error && <p className="form-error">{error}</p>}

          <div className="contact-form-buttons">
            <button onClick={sendByEmail} className="btn-primary">
              Send by Email
            </button>
            <button onClick={sendByWhatsApp} className="btn-secondary">
              Send by WhatsApp
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
