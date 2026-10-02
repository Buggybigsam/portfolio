"use client";

import { useEffect, useRef, useState } from "react";

const SKILLS = [
  { name: "Python", value: 95 },
  { name: "JavaScript", value: 90 },
  { name: "C++", value: 82 },
  { name: "C#", value: 80 },
  { name: "Java", value: 84 },
  { name: "UX Design", value: 88 },
  { name: "HTML", value: 93 },
  { name: "CSS", value: 92 },
  { name: "SQL", value: 87 },
  { name: "NoSQL", value: 85 },
];

export default function Resume() {
  const [animated, setAnimated] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="resume" className="panel">
      <div className="section__header">
        <p className="section__eyebrow">Resume</p>
        <h2 className="section__title">Craft backed by precision.</h2>
      </div>

      {/* Education & Experience */}
      <div className="resume__grid">
        <div>
          <h3 className="resume__heading">Summary</h3>
          <p className="text-secondary leading-relaxed">
            Ebenezer A.A Sam — Full‑stack web developer and IT specialist passionate about system architecture,
            resilient back‑end services, and modern digital experiences. I craft efficient, interactive
            applications that feel effortless for the people who use them, backed by strong fundamentals in
            information technology, systems engineering, and scalable web solutions.
          </p>
          <ul className="resume__meta mt-3">
            <li>
              <strong>Location:</strong> Ghana
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:buggybigsam@gmail.com">buggybigsam@gmail.com</a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:0244203222">0244203222</a>
            </li>
            <li>
              <strong>Snapchat:</strong>{" "}
              <a
                href="https://snapchat.com/t/O2P7Amd8"
                target="_blank"
                rel="noopener noreferrer"
              >
                @buggy_bigsam
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="resume__heading">Education</h3>
          <ul className="about__timeline">
            <li>
              <span className="about__timeline-year">2023 — 2026</span>
              <div className="about__timeline-role">
                Bachelor Of Science in Information Technology · Ghana Communication Technology University
              </div>
              <p className="resume__note">
                Focus areas: Information Technology, Web & Software Architecture, Networking, and Database Systems.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mb-8">
        <h3 className="resume__heading text-center">Skills</h3>
      </div>

      <div className="skills__list" id="skills-list" ref={skillsRef}>
        {SKILLS.map((skill) => (
          <article className="skill" key={skill.name}>
            <div className="skill__header">
              <span className="skill__name">{skill.name}</span>
              <span className="skill__value">{skill.value}%</span>
            </div>
            <div
              className="skill__bar"
              role="progressbar"
              aria-valuenow={skill.value}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <span
                className="skill__bar-fill"
                style={{ width: animated ? `${skill.value}%` : "0%" }}
              ></span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
