export default function Marquee() {
  const items = [
    "Full-Stack Development",
    "Next.js & React",
    "TypeScript Architecture",
    "PostgreSQL & Databases",
    "Smart Booking Platforms",
    "Saint Tech Solutions",
    "RESTful API Design",
    "Computer Vision",
    "Full-Stack Development",
    "Next.js & React",
    "TypeScript Architecture",
    "PostgreSQL & Databases",
    "Smart Booking Platforms",
    "Saint Tech Solutions",
    "RESTful API Design",
    "Computer Vision",
  ];

  return (
    <section className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </section>
  );
}
