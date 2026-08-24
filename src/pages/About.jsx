import PageHero from "../components/shared/PageHero";

export default function About() {
  return (
    <main>
      <PageHero
        breadcrumb="About"
        title="About Sultan Ddungu/Mama"
        lead="Guidance rooted in listening, tradition, and honest conversation."
        seed="about"
      />

      <section className="section">
        <div className="container narrow">
          <p className="lead">
            Born in Zanzibar, East Africa, Sultan Ddungu/Mama describes a family spiritual 
            tradition passed down through generations. His work focuses on confidential 
            guidance for relationships, family matters, personal challenges, spiritual 
            wellbeing, and important life decisions.
          </p>
          <p className="lead">
            Every consultation begins with careful listening. Guidance is then tailored 
            to the client's concerns, beliefs, and circumstances, without unrealistic 
            promises or guaranteed outcomes.
          </p>
          <p className="lead">
            Clients come from many backgrounds and many parts of the world. What they 
            have in common is a need for a private, respectful space to think through 
            a difficult decision or a difficult season of life, guided by someone who 
            takes the conversation seriously.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container center">
          <div className="eyebrow" style={{ justifyContent: "center" }}>Core Values</div>
          <h2>What guides every session</h2>
          <div className="grid-3" style={{ marginTop: "40px" }}>
            <div className="card">
              <div className="card-body">
                <h3>Confidentiality</h3>
                <p>What you share stays private. Always.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>Honesty</h3>
                <p>No guaranteed outcomes, no exaggerated promises.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>Cultural respect</h3>
                <p>Tradition shared with care, for people of any background.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>Personal attention</h3>
                <p>Every conversation is shaped around your actual situation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
