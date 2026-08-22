export default function WhyChooseUs() {
  const reasons = [
    "Confidential consultations handled with discretion.",
    "Personalized guidance instead of a one-size-fits-all approach.",
    "Traditional spiritual knowledge shared with care and cultural respect.",
    "Honest communication without misleading guarantees.",
    "Online access for clients in the United Kingdom, United States, Australia, Canada, Africa, and beyond.",
  ];

  return (
    <section className="why-choose-us">
      <h2>Why people choose Sultan Ddungu/Mama</h2>
      <p style={{ color: "var(--text-muted)", marginBottom: "24px" }}>
        Professional communication. Personal attention. Respect for every belief.
      </p>
      <ul>
        {reasons.map((reason, i) => (
          <li key={i}>{reason}</li>
        ))}
      </ul>
    </section>
  );
}
