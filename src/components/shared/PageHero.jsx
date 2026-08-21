export default function PageHero({ eyebrow, title, lead, seed }) {
  return (
    <section
      className="hero hero-bg page-hero"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,9,21,0.75), rgba(15,9,21,0.85)), url(https://picsum.photos/seed/" +
          seed +
          "/1600/900)",
      }}
    >
      <div className="hero-content page-hero-content">
        {eyebrow && (
          <p className="eyebrow">
            <span className="eyebrow-dash"></span>
            {eyebrow}
          </p>
        )}
        <h1>{title}</h1>
        {lead && <p className="hero-lead">{lead}</p>}
      </div>
    </section>
  );
}
