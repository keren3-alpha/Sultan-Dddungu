export default function WhatsAppButton() {
  const phone = "26778521673";
  const message =
    "Hello Psychic Ddungu, I would like to ask about a confidential spiritual consultation.";

  return (
    <a
      href={"https://wa.me/" + phone + "?text=" + encodeURIComponent(message)}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      Chat on WhatsApp
    </a>
  );
}
