"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  url: string;
  tags: string[];
  fullDesc?: string;
  github?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "craftconnect",
    title: "CraftConnect",
    desc: "Smart booking platform for verified local artisans in Ghana with Paystack payments.",
    image: "/images/craftconnect.png",
    url: "https://github.com/Buggybigsam/CraftConnect",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    fullDesc:
      "A full-stack platform built to bridge the gap between skilled local artisans and prospective customers across Ghana. Provides real-time appointment booking, direct messaging, verified portfolio showcases, and secure Paystack payments.",
    github: "https://github.com/Buggybigsam/CraftConnect",
  },
  {
    id: "apartment-booking",
    title: "Apartment Booking Platform",
    desc: "Modern accommodation and property reservation system for apartment owners and guests.",
    image: "/images/cloud-fintech.jpg",
    url: "https://github.com/Buggybigsam/Apartment-Booking-Platform",
    tags: ["TypeScript", "React", "REST API"],
    fullDesc:
      "End-to-end residential booking platform allowing apartment owners to list spaces, manage availability calendars, set seasonal pricing, and handle guest reservations seamlessly.",
    github: "https://github.com/Buggybigsam/Apartment-Booking-Platform",
  },
  {
    id: "nova-stitch-studio",
    title: "Nova Stitch Studio",
    desc: "Custom digital studio application for tailoring, fashion ateliers, and bespoke apparel designers.",
    image: "/assets/images/p2.png",
    url: "https://github.com/Buggybigsam/nova-stitch-studio",
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    fullDesc:
      "An interactive fashion atelier management system featuring custom garment order tracking, client body measurement logs, digital lookbooks, and high-performance design workflows.",
    github: "https://github.com/Buggybigsam/nova-stitch-studio",
  },
  {
    id: "artisan-management-capstone",
    title: "Smart Booking System for Local Artisans",
    desc: "Capstone project smart booking platform designed for trade artisans in Ghana.",
    image: "/assets/images/p1.png",
    url: "https://github.com/Buggybigsam/Smart-Booking-System-for-local-Artisans-",
    tags: ["TypeScript", "System Architecture", "SQL"],
    fullDesc:
      "Developed as a comprehensive university capstone project at Ghana Communication Technology University. Solves scheduling collisions, ensures timely milestone delivery, and simplifies service coordination between artisans and households.",
    github: "https://github.com/Buggybigsam/Smart-Booking-System-for-local-Artisans-",
  },
  {
    id: "face-attendance",
    title: "Face Recognition Attendance",
    desc: "Computer vision attendance tracking using OpenCV and deep learning facial embeddings.",
    image: "/images/face-attendance.jpg",
    url: "https://github.com/Buggybigsam",
    tags: ["Python", "OpenCV", "Machine Learning"],
    fullDesc:
      "Biometric automated attendance logging system capable of real-time multi-face detection, liveness verification, and instant classroom check-in database exports.",
    github: "https://github.com/Buggybigsam",
  },
  {
    id: "saint-tech-solutions",
    title: "Saint Tech Solutions",
    desc: "Enterprise software, digital infrastructure, and custom web applications by Saint Tech.",
    image: "/assets/images/image.png",
    url: "https://sainttechsolutions.github.io/",
    tags: ["Architecture", "Next.js", "Cloud"],
    fullDesc:
      "Client solutions and scalable web systems engineered under Saint Tech, delivering reliable microservices, database schemas, and modern user experiences.",
    github: "https://github.com/Buggybigsam",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <>
      <section id="portfolio" className="panel projects">
        <div className="section__header">
          <p className="section__eyebrow">Portfolio</p>
          <h2 className="section__title">Signature engagements.</h2>
        </div>
        <div className="projects__list">
          {PROJECTS.map((project) => (
            <article className="project project--image" key={project.id}>
              <a
                className="project__link-block"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                onClick={(e) => {
                  // Allow direct click or modal preview if right-clicked or clicked with modifier
                  if (e.altKey || e.metaKey) {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    className="project__thumb object-cover"
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="project__overlay">
                  <h3 className="project__title">{project.title}</h3>
                  <p className="project__desc">{project.desc}</p>
                  <ul className="project__tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <span className="project__open">
                    View ↗
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Optional Interactive Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-slate-700 p-1 text-2xl leading-none"
              >
                &times;
              </button>
            </div>
            <div className="py-4">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {selectedProject.fullDesc || selectedProject.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 justify-end pt-2 border-t border-slate-100">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--ghost text-xs"
                >
                  <i className="bx bxl-github"></i> Repository
                </a>
              )}
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--primary text-xs"
              >
                Launch Project ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
