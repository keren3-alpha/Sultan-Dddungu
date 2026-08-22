const items = [
  "Life & Purpose Guidance",
  "Relationship & Family Coaching",
  "Cultural & Ancestral Storytelling",
  "Career & Business Reflection",
  "Mindful Renewal Sessions",
  "Confidential Consultations",
  "Honest, Grounded Guidance",
  "Traditional Wisdom",
  "Personal Growth",
  "Life Transitions",
  "Family Matters",
  "Reflective Coaching",
  "Private Sessions",
  "Cultural Heritage",
  "Emotional Support",
  "Clarity & Direction",
  "Available Worldwide",
  "Respectful, Judgment-Free Space",
];

export default function Marquee() {
  const track = items.concat(items);

  return (
    <div className="marquee">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
