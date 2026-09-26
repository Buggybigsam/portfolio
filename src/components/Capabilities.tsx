export default function Capabilities() {
  return (
    <section id="capabilities" className="panel capabilities">
      <div className="section__header">
        <p className="section__eyebrow">Capabilities</p>
        <h2 className="section__title">From insight to launch.</h2>
      </div>
      <div className="capabilities__grid">
        <article className="capability">
          <h3>Full-Stack Engineering</h3>
          <p>
            High-performance web applications built with Next.js, React, and TypeScript—designed for speed, responsiveness, and scale.
          </p>
          <ul>
            <li>Next.js App Router & SSR</li>
            <li>TypeScript Architecture</li>
            <li>Responsive UI & Tailwind CSS</li>
            <li>State & API Integration</li>
          </ul>
        </article>
        <article className="capability">
          <h3>Databases & Cloud Systems</h3>
          <p>
            Robust data modeling, resilient API pipelines, and secure authentication built on proven relational and NoSQL foundations.
          </p>
          <ul>
            <li>PostgreSQL & SQL Design</li>
            <li>RESTful API Microservices</li>
            <li>Auth & Role-Based Access</li>
            <li>Docker & CI/CD Pipelines</li>
          </ul>
        </article>
        <article className="capability">
          <h3>Saint Tech Solutions</h3>
          <p>
            Bespoke client management systems, smart appointment booking platforms, and practical computer vision workflows.
          </p>
          <ul>
            <li>Smart Booking Platforms</li>
            <li>Custom Business Portals</li>
            <li>Computer Vision (OpenCV)</li>
            <li>End-to-End System Delivery</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
