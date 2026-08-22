import { Link } from "react-router-dom";

export default function ServiceCard({ title, blurb, price, slug, image }) {
  return (
    <div className="service-card">
      {image && <img src={image} alt={title} loading="lazy" />}
      <h3>{title}</h3>
      {price && <p className="service-price">{price}</p>}
      <p>{blurb}</p>
      <Link to="/services">View service &rarr;</Link>
    </div>
  );
}
