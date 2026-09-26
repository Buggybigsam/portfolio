"use client";

import { useEffect, useState, useRef } from "react";

const TYPED_ITEMS = [
  "Full‑Stack Developer",
  "Backend Engineer",
  "Python Developer",
  "UI/UX Designer",
  "Freelancer",
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [itemIndex, setItemIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [repoCount, setRepoCount] = useState("14+");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const visualRef = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    const currentWord = TYPED_ITEMS[itemIndex];
    const typingSpeed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length + 1));
        if (typedText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        if (typedText === "") {
          setIsDeleting(false);
          setItemIndex((prev) => (prev + 1) % TYPED_ITEMS.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, itemIndex]);

  // Fetch live GitHub repos count for Buggybigsam
  useEffect(() => {
    fetch("https://api.github.com/users/Buggybigsam")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.public_repos === "number") {
          setRepoCount(`${data.public_repos}+`);
        }
      })
      .catch(() => {
        setRepoCount("14+");
      });
  }, []);

  // Parallax on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="panel hero">
      <div className="hero__content">
        <h1 className="hero__name">Ebenezer A.A Sam</h1>
        <p className="hero__eyebrow">Designing the future</p>
        <h2 className="hero__title">
          Digital products with a{" "}
          <span className="hero__title--accent">human</span> heartbeat.
        </h2>
        <p className="hero__subtitle hero__subtitle--typed">
          I&apos;m a <span className="typed">{typedText}</span>
          <span className="typed-cursor">|</span>
        </p>
        <div className="hero__cta button-group button-group--even">
          <a className="button button--primary" href="#portfolio">
            View selected work
          </a>
          <a className="button button--ghost" href="#contact">
            Start a conversation
          </a>
          <a
            className="button button--outline"
            href="/Ebenezer_AA_Sam_CV.pdf"
            download="Ebenezer_AA_Sam_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV"
          >
            Download CV ↓
          </a>
        </div>
        <div className="hero__stats" aria-label="Quick stats">
          <div className="hero__stat">
            <span className="hero__stat-num">3+</span>
            <span className="hero__stat-label">Years coding</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">10+</span>
            <span className="hero__stat-label">Projects built</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num" id="gh-repo-count">
              {repoCount}
            </span>
            <span className="hero__stat-label">GitHub repos</span>
          </div>
        </div>
      </div>

      <div className="hero__visual" aria-hidden="true" ref={visualRef}>
        <div
          className="hero__card hero__card--primary"
          style={{
            transform: `translate3d(${mousePos.x * 0.2 * 25}px, ${
              mousePos.y * 0.2 * 25
            }px, 0)`,
          }}
        >
          <p>Immersive storytelling</p>
          <span className="hero__card-line"></span>
        </div>
        <div
          className="hero__card hero__card--secondary"
          style={{
            transform: `translate3d(${mousePos.x * 0.4 * 25}px, ${
              mousePos.y * 0.4 * 25
            }px, 0)`,
          }}
        >
          <p>Adaptive systems</p>
          <span className="hero__card-line"></span>
        </div>
        <div
          className="hero__orb"
          style={{
            transform: `translate3d(${mousePos.x * 0.6 * 30}px, ${
              mousePos.y * 0.6 * 30
            }px, 0)`,
          }}
        ></div>
      </div>
    </section>
  );
}
