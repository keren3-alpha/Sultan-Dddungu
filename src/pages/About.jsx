import PageHero from "../components/shared/PageHero";

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="Our story"
        title="About Mama Ddungu"
        lead="Guidance rooted in listening, tradition, and honest conversation."
        seed="about-page"
      />

      <section className="about-body">
        <p>
          Mama Ddungu offers confidential guidance for people navigating
          relationships, family matters, career decisions, and important
          life transitions. The approach draws on cultural tradition and
          lived experience, combined with a genuine commitment to listening
          before offering any perspective.
        </p>
        <p>
          Every session begins the same way: by understanding your
          situation, your beliefs, and what you are actually facing. From
          there, guidance is shaped around you, not delivered as a fixed
          script or a guaranteed outcome. No promise is ever made that
          cannot honestly be kept.
        </p>
        <p>
          Clients come from many backgrounds and many parts of the world.
          What they have in common is a need for a private, respectful space
          to think through a difficult decision or a difficult season of
          life, guided by someone who takes the conversation seriously.
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
