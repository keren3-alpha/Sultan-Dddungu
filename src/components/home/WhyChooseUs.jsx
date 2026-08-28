import { Link } from "react-router-dom";
import Sul2 from "../../assets/services/Sul2.jpeg";

export default function WhyChooseUs() {
  const reasons = [
    "Confidential consultations handled with discretion.",
    "Personalized guidance instead of a one-size-fits-all approach.",
    "Traditional spiritual knowledge shared with care and cultural respect.",
    "Honest communication without misleading guarantees.",
    "Online access for clients in Namibia, Botswana, South Africa, USA, and beyond.",
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="grid-2">
          <div>
            <div className="eyebrow">Why choose us</div>
            <h2>Why people choose Sultan Ddungu/Mama</h2>
            <p className="lead" style={{ marginBottom: "24px" }}>
              Professional communication. Personal attention. Respect for every belief.
            </p>
            <ul className="feature-list">
              {reasons.map((reason, i) => (
                <li key={i}>{reason}</li>
              ))}
            </ul>
            <div className="button-row">
              <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
            </div>
          </div>
          <div className="image-frame portrait">
            <img 
              src={Sul2}
              alt="Spiritual guidance and tradition"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
