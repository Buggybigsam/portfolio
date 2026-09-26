"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Atom,
  Globe,
  Layers,
  FileCode,
  Server,
  Database,
  Terminal,
  Cpu,
  Box,
  GitBranch,
  LayoutTemplate,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

interface TechItem {
  name: string;
  category: string;
  icon: any;
  status: string;
  useCase: string;
}

const TECH_LIST: TechItem[] = [
  {
    name: "TypeScript",
    category: "Languages",
    icon: Cpu,
    status: "Primary Language",
    useCase: "End-to-end type safety across both frontend components and backend services.",
  },
  {
    name: "Next.js & React 19",
    category: "Frontend",
    icon: Globe,
    status: "Core Framework",
    useCase: "Server components, fast client hydration, and SEO-friendly web applications.",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: Layers,
    status: "Design System",
    useCase: "Building responsive, accessible interfaces with consistent design tokens.",
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
    category: "AI & APIs",
    icon: Terminal,
    status: "Applied ML",
    useCase: "Computer vision pipelines with OpenCV and high-throughput async microservices.",
  },
  {
    name: "PostgreSQL & Prisma",
    category: "Databases",
    icon: Database,
    status: "Primary DB",
    useCase: "Relational data modeling, ACID transactions, and type-safe migrations.",
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: Box,
    status: "Containerization",
    useCase: "Packaging services for consistent local development and cloud deployments.",
  },
  {
    name: "Git & GitHub",
    category: "Workflow",
    icon: GitBranch,
    status: "Version Control",
    useCase: "Pull requests, branch workflows, issue tracking, and automated CI/CD.",
  },
  {
    name: "Figma",
    category: "UI Design",
    icon: LayoutTemplate,
    status: "Design Tool",
    useCase: "Creating wireframes, interactive user flows, and reviewing layout spacing.",
  },
];

export default function TechStack() {
  const [selectedTech, setSelectedTech] = useState<TechItem>(TECH_LIST[1]); // Next.js default

  return (
    <section id="tech-stack" className="relative py-24 sm:py-32 border-t border-white/[0.06] overflow-hidden sasu-section-contain">
      <div className="sasu-container relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <p className="sasu-section-mark">
            CORE TOOLKIT
          </p>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Technologies I Build With <span className="sasu-gradient-blue">Every Day</span>
          </h2>

          <p className="text-[#9DA0A6] text-base leading-relaxed">
            I prioritize battle-tested tools with active ecosystems, great documentation, and strong performance characteristics.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECH_LIST.map((tech) => {
            const Icon = tech.icon;
            const isSelected = selectedTech.name === tech.name;

            return (
              <div
                key={tech.name}
                onClick={() => setSelectedTech(tech)}
                className={`sasu-card cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "border-[#3B7EFF] bg-[#141B2D] shadow-[0_0_25px_rgba(59,126,255,0.25)]"
                    : "hover:border-[#3B7EFF]/40"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0A0D14] border border-white/[0.08]">
                    <Icon className="w-5 h-5 text-[#3B7EFF]" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#9DA0A6]">
                    {tech.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-white">
                    {tech.name}
                  </h3>
                  <p className="text-xs font-mono text-[#00F0FF]">
                    {tech.status}
                  </p>
                  <p className="text-xs text-[#C2C9D6] pt-1.5 leading-relaxed">
                    {tech.useCase}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Principles Ribbon */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0F131E] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-semibold text-white">
              Why this stack?
            </h4>
            <p className="text-xs text-[#9DA0A6]">
              TypeScript and Next.js offer rapid development cycles with minimal runtime errors, while PostgreSQL provides rock-solid data integrity.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-[#9DA0A6]">
            <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white">
              ✓ Type Safe
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white">
              ✓ Server-Rendered
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white">
              ✓ ACID Compliant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
