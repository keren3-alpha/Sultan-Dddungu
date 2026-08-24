export default function PageHero({ eyebrow, title, lead, seed, breadcrumb }) {
  // Different images for different pages
  const images = {
    'about': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80',
    'services': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
    'testimonials': 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&q=80',
    'faq': 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?w=1600&q=80',
    'contact': 'https://images.unsplash.com/photo-1612531386530-97286d97a242?w=1600&q=80',
  };
  
  const imageUrl = seed && images[seed] 
    ? images[seed] 
    : 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80';

  return (
    <section 
      className="page-hero" 
      style={{
        backgroundImage: `linear-gradient(rgba(15,9,21,0.85), rgba(15,9,21,0.9)), url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "400px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div className="container">
        {breadcrumb && (
          <div className="breadcrumbs">
            <a href="#/">Home</a> / <span>{breadcrumb}</span>
          </div>
        )}
        {eyebrow && (
          <div className="eyebrow">{eyebrow}</div>
        )}
        <h1>{title}</h1>
        {lead && <p className="lead" style={{ maxWidth: "650px" }}>{lead}</p>}
      </div>
    </section>
  );
}
