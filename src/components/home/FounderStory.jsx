export default function FounderStory() {
  return (
    <section className="founder-story" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px", padding: "40px 24px", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <h2>Born in Zanzibar, East Africa</h2>
      <p style={{ fontSize: "18px", color: "var(--text-muted)" }}>
        <strong>Prof. Sultan</strong> describes a family spiritual tradition passed down through generations. 
        His work focuses on confidential guidance for relationships, family matters, personal challenges, 
        spiritual wellbeing, and important life decisions.
      </p>
      <p style={{ fontSize: "18px", color: "var(--text-muted)" }}>
        Every consultation begins with careful listening. Guidance is then tailored to 
        the client's concerns, beliefs, and circumstances, without unrealistic promises 
        or guaranteed outcomes.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "32px", flexWrap: "wrap" }}>
        <div><h3>Zanzibar</h3><p style={{ color: "var(--text-muted)" }}>East African heritage</p></div>
        <div><h3>Prof. Sultan</h3><p style={{ color: "var(--text-muted)" }}>7th generation spiritual guide</p></div>
        <div><h3>Worldwide</h3><p style={{ color: "var(--text-muted)" }}>UK, US, Australia, Canada, Africa</p></div>
      </div>
    </section>
  );
}
