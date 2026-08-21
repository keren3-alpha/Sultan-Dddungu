export default function WhyChooseUs() {
  const reasons = [
    "Confidential sessions handled with discretion.",
    "Personalized guidance instead of a one-size-fits-all approach.",
    "Traditional wisdom shared with care and cultural respect.",
    "Honest communication without misleading guarantees.",
    "Online access for clients around the world.",
  ];

  return (
    <section className="why-choose-us">
      <h2>Professional communication. Personal attention. Respect for every belief.</h2>
      <ul>
        {reasons.map((reason, i) => (
          <li key={i}>{reason}</li>
        ))}
      </ul>
    </section>
  );
}

