import PageHero from "../components/shared/PageHero";
import ContactForm from "../components/forms/ContactForm";

export default function Contact() {
  const contactEmail = "contact@sultanddungu.com";
  const phone = "256741817321";

  return (
    <main>
      <PageHero
        breadcrumb="Contact"
        title="Contact Us"
        lead="Your enquiry is treated respectfully and confidentially."
        seed="contact"
      />

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "flex-start" }}>
            <div>
              <h3>Get in Touch</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.8" }}>
                I welcome clients from Namibia, Botswana, South Africa, United States, 
                through secure online consultations via WhatsApp, phone, or email.
              </p>
              
              <div className="contact-list">
                <div className="contact-item">
                  <strong>Email</strong>
                  <a href={"mailto:" + contactEmail} style={{ color: "var(--gold-light)" }}>
                    {contactEmail}
                  </a>
                </div>
                
                <div className="contact-item">
                  <strong>WhatsApp</strong>
                  <a 
                    href={"https://wa.me/" + phone} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whatsapp-contact-link"
                  >
                    +{phone}
                  </a>
                  <span style={{ display: "block", color: "var(--muted)", fontSize: "14px", marginTop: "4px" }}>
                    Chat privately with Sultan Ddungu on WhatsApp.
                  </span>
                </div>
                
                <div className="contact-item">
                  <strong>Telephone</strong>
                  <a href={"tel:+" + phone} style={{ color: "var(--gold-light)" }}>
                    +{phone}
                  </a>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
