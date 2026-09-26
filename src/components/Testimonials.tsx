const TESTIMONIALS = [
  {
    quote:
      "Ebenezer delivered our backend integrations on time with clean, well-documented code. A reliable developer who communicates well throughout the process.",
    author: "Engineering Collaborator, Ghana",
  },
  {
    quote:
      "Working with Ebenezer felt effortless. He understood our vision quickly and turned it into a polished product. Will absolutely collaborate again.",
    author: "Freelance Client, Ghana",
  },
  {
    quote:
      "I worked closely with Sam on our Smart Booking Management System for local Artisan capstone project, and what stood out most was how dependable he was. Deadlines never seemed to catch him off guard, he'd flag potential delays early and adjust his workload without anyone having to chase him. In a group project, that kind of reliability makes everyone else's job easier.\n\nHe was also easy to collaborate with. When we disagreed on an approach, he'd actually walk through his reasoning instead of just pushing his view, which made it simple to find a middle ground. I'd gladly work with him again.",
    author: "Capstone Project Collaborator, GCTU",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="panel testimonials">
      <div className="section__header">
        <p className="section__eyebrow">Testimonials</p>
        <h2 className="section__title">What people say.</h2>
      </div>
      <div className="testimonials__grid">
        {TESTIMONIALS.map((item, idx) => (
          <blockquote className="testimonial" key={idx}>
            <p style={{ whiteSpace: "pre-line" }}>{item.quote}</p>
            <footer className="testimonial__footer">
              <span className="testimonial__author">— {item.author}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
