import { useState } from "react";
import PageHero from "../components/shared/PageHero";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", concern: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const contactEmail = "hello@example.com";

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.concern) {
      setError("Please fill in every field before sending.");
      return;
    }
    setError("");

    const subject = "Consultation enquiry from " + form.name;
    const body =
      "Name: " + form.name + "\n" +
      "Email: " + form.email + "\n\n" +
      form.concern;

    window.location.href =
      "mailto:" + contactEmail +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    setSent(true);
  }

  return (
    <main id="contact-form">
      <PageHero
        eyebrow="Start a private conversation"
        title="Book a Consultation"
        lead="Your enquiry is treated respectfully and confidentially. Session format, timing, and fees are confirmed before anything begins."
        seed="contact-page"
      />

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Your email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="concern">What would you like to discuss?</label>
        <textarea
          id="concern"
          name="concern"
          rows="5"
          value={form.concern}
          onChange={handleChange}
        />

        {error && <p className="form-error">{error}</p>}
        {sent && (
          <p className="form-success">
            Your email client should now be open with your message ready to
            send.
          </p>
        )}

        <button type="submit" className="btn-primary">
          Send Enquiry
        </button>
      </form>
    </main>
  );
}
