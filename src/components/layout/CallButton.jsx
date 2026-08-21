export default function CallButton() {
  const phone = "+26778521673";

  return (
    <a href={"tel:" + phone} className="call-float">
      Call us now
    </a>
  );
}
