"use client";

import { useState } from "react";
import {
  Globe,
  Layers,
  Server,
  Database,
  Terminal,
  Cpu,
  Box,
  GitBranch,
  LayoutTemplate,
  type LucideIcon,
} from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  icon: LucideIcon;
  status: string;
  useCase: string;
}

const TECH_LIST: TechItem[] = [
  {
    name: "TypeScript",
    category: "Languages",
    icon: Cpu,
    status: "Primary Language",
    useCase: "End-to-end type safety across frontend components and backend services.",
  },
  {
    name: "Next.js & React 19",
    category: "Frontend",
    icon: Globe,
    status: "Core Framework",
    useCase: "Server components, fast client hydration, and SEO-optimized web applications.",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: Layers,
    status: "Design System",
    useCase: "Responsive, accessible interfaces with customized dark-mode tokens and micro-interactions.",
  },
  {
    name: "Node.js & Express",
    category: "Backend",
    icon: Server,
    status: "API Runtime",
    useCase: "Lightweight, event-driven REST APIs, webhook handlers, and background tasks.",
  },
  {
    name: "Python & FastAPI",
    category: "AI & Microservices",
    icon: Terminal,
    status: "Applied ML & APIs",
    useCase: "Computer vision pipelines with OpenCV and high-throughput async microservices.",
  },
  {
    name: "PostgreSQL & Prisma",
    category: "Databases",
    icon: Database,
    status: "Primary Relational DB",
    useCase: "Relational data modeling, ACID transactions, and type-safe database migrations.",
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: Box,
    status: "Containerization",
    useCase: "Packaging services for consistent local development and cloud production deployments.",
  },
  {
    name: "Git & GitHub",
    category: "Workflow",
    icon: GitBranch,
    status: "Version Control & CI/CD",
    useCase: "Pull requests, branch workflows, issue tracking, and automated GitHub Actions workflows.",
  },
  {
    name: "Figma",
    category: "UI/UX Design",
    icon: LayoutTemplate,
    status: "Design Tool",
    useCase: "Wireframing, interactive user journeys, component libraries, and spatial layout specs.",
  },
];

export default function TechStack() {
  const [selectedTech, setSelectedTech] = useState<TechItem>(TECH_LIST[1]); // Next.js default

  return (
    <section id="tech-stack" className="panel tech-stack">
      {/* Section Header */}
      <div className="section__header">
        <p className="section__eyebrow">Tech Stack</p>
        <h2 className="section__title">Technologies I build with daily.</h2>
        <p className="text-secondary mt-3 leading-relaxed">
          I prioritize battle-tested tools with active ecosystems, type safety, and strong performance characteristics.
        </p>
      </div>

      {/* Tech Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TECH_LIST.map((tech) => {
          const Icon = tech.icon;
          const isSelected = selectedTech.name === tech.name;

          return (
            <div
              key={tech.name}
              onClick={() => setSelectedTech(tech)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                isSelected
                  ? "bg-[#141B2D] border border-[#4D7CFF] shadow-[0_0_25px_rgba(77,124,255,0.25)]"
                  : "bg-[#111111] border border-[#242424] hover:border-[#4D7CFF]/50 hover:bg-[#161616]"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#181818] border border-[#242424]">
                  <Icon className="w-5 h-5 text-[#4D7CFF]" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] border border-[#242424] text-[#9A9A9A]">
                  {tech.category}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base font-semibold text-[#F5F5F0]">
                  {tech.name}
                </h3>
                <p className="text-xs font-mono text-[#4D7CFF]">
                  {tech.status}
                </p>
                <p className="text-xs text-[#9A9A9A] pt-1 leading-relaxed">
                  {tech.useCase}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Engineering Principles Ribbon */}
      <div className="mt-8 p-6 rounded-2xl bg-[#111111] border border-[#242424] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h4 className="text-sm font-semibold text-[#F5F5F0]">
            Why this stack?
          </h4>
          <p className="text-xs text-[#9A9A9A]">
            TypeScript and Next.js offer rapid development cycles with minimal runtime errors, while PostgreSQL and Docker provide rock-solid scalability.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-[#9A9A9A]">
          <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-[#242424] text-[#F5F5F0]">
            ✓ Type Safe
          </span>
          <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-[#242424] text-[#F5F5F0]">
            ✓ Server-Rendered
          </span>
          <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-[#242424] text-[#F5F5F0]">
            ✓ ACID Compliant
          </span>
          <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-[#242424] text-[#F5F5F0]">
            ✓ Container Ready
          </span>
        </div>
      </div>
    </section>
  );
}
