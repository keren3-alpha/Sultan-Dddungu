export default function ServiceCard({ title, blurb, price, slug, image }) {
  return (
    <div className="service-card">
      {image && <img src={image} alt={title} loading="lazy" />}
      <h3>{title}</h3>
      {price && <p className="service-price">{price}</p>}
      <p>{blurb}</p>
      <a href={"/services#" + slug}>View service &rarr;</a>
    </div>
  );
}
