"use client";

import { Briefcase, GraduationCap, Download, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
  badges?: string[];
}

const EXPERIENCES: TimelineItem[] = [
  {
    period: "2024 to Present",
    role: "Founder & Lead Software Developer",
    organization: "Saint Tech Solutions",
    location: "Accra, Ghana",
    description:
      "Directing full-stack digital product engineering, specialized management systems, and client software delivery.",
    highlights: [
      "Engineered biometric FaceTrack attendance system using OpenCV & Python facial embeddings.",
      "Built full-stack CraftConnect booking platform connecting vetted trade artisans with customers across Ghana.",
      "Implemented automated CI/CD deployment pipelines on GitHub Pages and cloud hosts.",
    ],
    badges: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
  },
  {
    period: "2023 to 2024",
    role: "Full-Stack Web Developer",
    organization: "Enterprise & Freelance Solutions",
    location: "Accra, Ghana",
    description:
      "Engineered responsive web applications, payment integrations, and database architectures for diverse client portals.",
    highlights: [
      "Delivered production applications on schedule using React, Next.js, and Tailwind CSS.",
      "Integrated secure Paystack and Stripe payment gateways with webhook verification.",
      "Normalized relational database schemas and created indexes, improving query speeds by over 35%.",
    ],
    badges: ["React", "Node.js", "PostgreSQL", "Paystack", "Prisma"],
  },
];

const EDUCATION_ITEMS: TimelineItem[] = [
  {
    period: "2023 to 2026",
    role: "Bachelor of Science in Information Technology",
    organization: "Ghana Communication Technology University (GCTU)",
    location: "Accra, Ghana",
    description:
      "Rigorous undergraduate degree program focused on systems architecture, web development, and networking.",
    highlights: [
      "Key Courses: Web Architecture, Database Systems, Computer Networks, Software Engineering, and Operating Systems.",
      "Led Capstone Project: Smart Booking Management System for Local Ghanaian Artisans.",
      "Active participant in tech developer communities, workshops, and project showcases.",
    ],
    badges: ["Information Technology", "Web Systems", "Database Design", "Capstone Lead"],
  },
];

export default function Resume() {
  const cvPath = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Sam_Ebenezer_Akwasi_Afrimu_CV.pdf`;

  return (
    <section id="resume" className="panel resume">
      {/* Section Header */}
      <div className="section__header">
        <p className="section__eyebrow">Experience & Education</p>
        <h2 className="section__title">Proven track record & academic background.</h2>
        <p className="text-secondary mt-3 leading-relaxed">
          A summary of my hands-on software leadership, production client deliveries, and formal IT education.
        </p>
      </div>

      {/* Main Grid: Experience (Left) & Education + Summary (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Experience Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-[#242424]">
            <div className="p-2.5 rounded-xl bg-[#181818] border border-[#242424]">
              <Briefcase className="w-5 h-5 text-[#4D7CFF]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#F5F5F0]">Experience</h3>
              <p className="text-xs text-[#9A9A9A]">Production engineering & client leadership</p>
            </div>
          </div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <article
                key={idx}
                className="p-6 rounded-2xl bg-[#111111] border border-[#242424] hover:border-[#4D7CFF]/40 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-[#4D7CFF]/15 text-[#4D7CFF] border border-[#4D7CFF]/30">
                    {exp.period}
                  </span>
                  <span className="text-xs text-[#9A9A9A] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#666666]" />
                    {exp.location}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-[#F5F5F0] mt-1">{exp.role}</h4>
                <p className="text-sm font-medium text-[#4D7CFF] mb-3">{exp.organization}</p>
                <p className="text-xs text-[#9A9A9A] leading-relaxed mb-4">{exp.description}</p>

                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-[#CCCCCC] flex items-start gap-2 leading-relaxed">
                      <span className="text-[#4D7CFF] font-bold mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {exp.badges && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1C1C1C]">
                    {exp.badges.map((b) => (
                      <span
                        key={b}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#181818] border border-[#2A2A2A] text-[#9A9A9A]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Education & Overview Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-[#242424]">
            <div className="p-2.5 rounded-xl bg-[#181818] border border-[#242424]">
              <GraduationCap className="w-5 h-5 text-[#4D7CFF]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#F5F5F0]">Education</h3>
              <p className="text-xs text-[#9A9A9A]">Academic foundation & degree</p>
            </div>
          </div>

          <div className="space-y-6">
            {EDUCATION_ITEMS.map((edu, idx) => (
              <article
                key={idx}
                className="p-6 rounded-2xl bg-[#111111] border border-[#242424] hover:border-[#4D7CFF]/40 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-[#4D7CFF]/15 text-[#4D7CFF] border border-[#4D7CFF]/30">
                    {edu.period}
                  </span>
                  <span className="text-xs text-[#9A9A9A] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#666666]" />
                    {edu.location}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-[#F5F5F0] mt-1">{edu.role}</h4>
                <p className="text-sm font-medium text-[#4D7CFF] mb-3">{edu.organization}</p>
                <p className="text-xs text-[#9A9A9A] leading-relaxed mb-4">{edu.description}</p>

                <ul className="space-y-2 mb-4">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-[#CCCCCC] flex items-start gap-2 leading-relaxed">
                      <span className="text-[#4D7CFF] font-bold mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {edu.badges && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1C1C1C]">
                    {edu.badges.map((b) => (
                      <span
                        key={b}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#181818] border border-[#2A2A2A] text-[#9A9A9A]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}

            {/* Quick Contact & CV Download Card */}
            <div className="p-6 rounded-2xl bg-[#141B2D] border border-[#4D7CFF]/40 shadow-[0_0_30px_rgba(77,124,255,0.15)] flex flex-col justify-between gap-6">
              <div className="space-y-2">
                <h4 className="text-base font-semibold text-[#F5F5F0]">
                  Looking for the complete resume?
                </h4>
                <p className="text-xs text-[#9A9A9A] leading-relaxed">
                  Download the official PDF with verified academic coursework, full project descriptions, and technical references.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={cvPath}
                  download="Sam_Ebenezer_Akwasi_Afrimu_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--primary text-xs"
                >
                  <Download className="w-4 h-4 mr-1.5" />
                  Download Official CV
                </a>
                <a
                  href="#contact"
                  className="button button--ghost text-xs"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
