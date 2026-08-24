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
  "Palm Reading",
  "Tarot Reading",
  "Astrology Reading",
  "Twin Flame Reading",
  "Dream Interpretation",
  "Spiritual Cleansing",
  "Aura Cleansing",
  "Negative Energy Removal",
  "Black Magic Removal",
  "Curse Removal",
  "Love Binding Rituals",
  "Marriage Fixing",
  "Divorce Fixing",
  "Fertility Spells",
  "Money Power Rituals",
  "Financial Rituals",
  "Business Boosting",
  "Job Promotion",
  "Win Court Cases",
  "Win Lottery",
  "Revenge Rituals",
  "African Voodoo",
  "Prayer Support",
  "Remote Healing",
  "Emotional Trauma Healing",
];

export default function Marquee() {
  return (
    <div className="services-marquee">
      <div className="marquee-shell">
        <div className="marquee-track">
          {items.concat(items).map((item, i) => (
            <div key={i} className="marquee-group">
              <span className="marquee-item">{item}</span>
              <span className="marquee-separator">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
