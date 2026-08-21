import PageHero from "../components/shared/PageHero";

export default function FAQ() {
  return (
    <main>
      <PageHero
        eyebrow="Common questions"
        title="Frequently Asked Questions"
        lead="Answers to what people usually ask before booking a session."
        seed="faq-page"
      />
      <p style={{ textAlign: "center", color: "var(--text-muted)" }}>
        FAQ content will appear here soon.
      </p>
    </main>
  );
}
