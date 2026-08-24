import { Link } from "react-router-dom";

const tags = [
  "Rituals",
  "Marriage Fixing Rituals",
  "Love Binding Rituals",
  "Witchcraft & Spiritual Services",
  "Revenge Rituals",
  "Financial Rituals",
  "Drug Addiction Spells",
  "Divorce Fixing Spells",
  "Fertility and Marriage",
  "Love Binding Spells",
  "Income and Salary Spells",
  "Marriage Spells",
  "Job Attraction",
  "Business Problems",
  "Manpower Spells",
  "Soul Binding Rituals",
  "Tarot and Palm Reading",
  "Negative Energy Removal",
  "Black Magic Removal",
  "Jealousy and Curse Removal",
  "Twin Flame Reading",
  "African Voodoo Spiritual Services",
  "Strong Love Spells",
  "Bring Back Lover",
  "Fix Relationship Issues",
  "Remote Spiritual Healing",
  "Holistic Healing Services",
  "Spiritual Healer Online",
  "Spiritual Aura Cleansing",
  "Herbal Remedies for Anxiety",
  "Traditional Healer",
  "North America",
  "Spiritual Practitioner",
  "Europe",
  "Emotional Trauma Healing",
  "Spiritual Guidance for Stress",
  "Marriage Astrology",
  "Get Ex Back Spell"
];

export default function ServiceTags() {
  return (
    <section className="service-tags">
      <div className="service-tags-container">
        {tags.map((tag, index) => (
          <Link
            key={index}
            to="/services"
            className="service-tag"
          >
            {tag}
          </Link>
        ))}
      </div>
    </section>
  );
}
