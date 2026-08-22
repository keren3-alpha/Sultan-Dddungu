import PageHero from "../components/shared/PageHero";

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="Our story"
        title="About Sultan Ddungu/Mama"
        lead="Guidance rooted in listening, tradition, and honest conversation."
        seed="about-page"
      />

      <section className="about-body">
        <p>
          Born in Zanzibar, East Africa, Sultan Ddungu/Mama describes a family spiritual 
          tradition passed down through generations. His work focuses on confidential 
          guidance for relationships, family matters, personal challenges, spiritual 
          wellbeing, and important life decisions.
        </p>
        <p>
          Every consultation begins with careful listening. Guidance is then tailored 
          to the client's concerns, beliefs, and circumstances, without unrealistic 
          promises or guaranteed outcomes.
        </p>
        <p>
          Clients come from many backgrounds and many parts of the world. What they 
          have in common is a need for a private, respectful space to think through 
          a difficult decision or a difficult season of life, guided by someone who 
          takes the conversation seriously.
        </p>
      </section>

      <section className="about-values">
        <h2>What guides every session</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Confidentiality</h3>
            <p>What you share stays private. Always.</p>
          </div>
          <div className="value-card">
            <h3>Honesty</h3>
            <p>No guaranteed outcomes, no exaggerated promises.</p>
          </div>
          <div className="value-card">
            <h3>Cultural respect</h3>
            <p>Tradition shared with care, for people of any background.</p>
          </div>
          <div className="value-card">
            <h3>Personal attention</h3>
            <p>Every conversation is shaped around your actual situation.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
