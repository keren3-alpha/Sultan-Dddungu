import { Link } from "react-router-dom";

export default function ServiceCard({ title, blurb, price, slug, image }) {
  return (
    <div className="card service-card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-body">
        <h3>{title}</h3>
        {price && <p className="service-price">{price}</p>}
        <p>{blurb}</p>
        <Link to="/services" className="learn">View service →</Link>
      </div>
    </div>
  );
}
