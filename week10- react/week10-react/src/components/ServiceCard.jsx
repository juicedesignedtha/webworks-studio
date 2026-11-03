/*
  WEBWORKS STUDIO — WEEK 10

  Reusable service card component. Service-specific content is received
  through props so the same markup can display every service record.
*/

function ServiceCard({ categoryLabel, title, description, detail }) {
  return (
    <article className="service-card">
      <p className="service-category">{categoryLabel}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="service-detail">{detail}</p>
    </article>
  )
}

export default ServiceCard
