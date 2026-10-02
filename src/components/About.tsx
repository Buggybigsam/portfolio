import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="panel about">
      <div className="section__header">
        <p className="section__eyebrow">About</p>
        <h2 className="section__title">Crafted with intention.</h2>
      </div>
      <div className="about__grid">
        <article className="about__statement">
          <p>
            I&apos;m a passionate software developer focused on creating modern, innovative, and
            user-friendly digital solutions. I enjoy turning ideas into functional websites and
            applications that solve real-world problems while delivering a smooth and engaging user
            experience.
          </p>
          <p>
            My interests span across web development, UI/UX design, database systems, and emerging
            technologies. I&apos;m always exploring new tools, improving my skills, and finding
            better ways to build digital products that are efficient, visually appealing, and easy to
            use.
          </p>
          <p>
            I believe great technology should not only work well but also feel intuitive and
            meaningful to the people who use it. My goal is to continue growing as a developer while
            creating high-quality digital experiences that combine creativity, functionality, and
            technology.
          </p>
        </article>
        <div className="about__avatar-item">
          <div className="about__portrait-frame">
            <Image
              className="about__portrait-img"
              src="/images/ebenezer-sam.png"
              alt="Portrait of Ebenezer A.A Sam"
              fill
              sizes="(max-width: 768px) 280px, 320px"
              priority
            />
          </div>
          <p className="about__avatar-caption">
            Ebenezer A.A Sam - IT & Full‑Stack Developer
          </p>
        </div>
      </div>
    </section>
  );
}
