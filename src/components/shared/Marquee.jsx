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
  const track = items.concat(items);
  return (
    <div className="marquee">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
