export default function HowItWorks() {
  const steps = [
    {
      title: "Share your concern",
      text: "Send a short, private message explaining what you would like to discuss.",
    },
    {
      title: "Choose a suitable session",
      text: "Confirm the service, format, timing, and fee before the session begins.",
    },
    {
      title: "Receive personal guidance",
      text: "Speak openly in a respectful setting and receive guidance shaped around your situation.",
    },
  ];

  return (
    <section className="section">
      <div className="container center">
        <div className="eyebrow" style={{ justifyContent: "center" }}>How It Works</div>
        <h2>A simple, private consultation process</h2>
        <div className="steps">
          {steps.map((step, i) => (
            <div key={i} className="step">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
