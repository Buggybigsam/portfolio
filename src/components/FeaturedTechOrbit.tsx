"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Atom,
  Globe,
  Terminal,
  Server,
  Database,
  Box,
  Layers,
  Sparkles,
  Bot,
  LayoutTemplate,
  Network,
  Share2,
} from "lucide-react";

interface TechNode {
  name: string;
  category: string;
  icon: any;
  color: string;
  description: string;
  metric: string;
  angle: number; // in degrees
  orbit: "inner" | "outer";
}

const TECH_NODES: TechNode[] = [
  // Inner Orbit (Radius 160px)
  {
    name: "React 19",
    category: "Frontend Core",
    icon: Atom,
    color: "#00F0FF",
    description: "Component architecture, server components, hooks & state trees.",
    metric: "Primary UI Foundation",
    angle: 0,
    orbit: "inner",
  },
  {
    name: "Next.js 16",
    category: "Full-Stack Web",
    icon: Globe,
    color: "#FFFFFF",
    description: "Hybrid SSR/SSG App Router, Turbopack, Edge Functions & API routes.",
    metric: "Sub-second LCP & TTFB",
    angle: 90,
    orbit: "inner",
  },
  {
    name: "TypeScript",
    category: "Type Safety",
    icon: Cpu,
    color: "#3B7EFF",
    description: "Strict typing, complex generics, and zero runtime type errors.",
    metric: "100% Type Coverage",
    angle: 180,
    orbit: "inner",
  },
  {
    name: "Node.js",
    category: "Backend Runtime",
    icon: Server,
    color: "#22C55E",
    description: "Event-driven asynchronous microservices and real-time WebSockets.",
    metric: "High Concurrency Engine",
    angle: 270,
    orbit: "inner",
  },

  // Outer Orbit (Radius 270px)
  {
    name: "Python & AI",
    category: "Intelligence",
    icon: Bot,
    color: "#EAB308",
    description: "Computer vision, OpenCV, PyTorch biometric models, and LLM orchestration.",
    metric: "99.4% Face Verification",
    angle: 30,
    orbit: "outer",
  },
  {
    name: "PostgreSQL",
    category: "Relational DB",
    icon: Database,
    color: "#60A5FA",
    description: "ACID transactions, spatial geohashing, complex indexing & Prisma ORM.",
    metric: "Microsecond Queries",
    angle: 90,
    orbit: "outer",
  },
  {
    name: "Docker",
    category: "Containerization",
    icon: Box,
    color: "#38BDF8",
    description: "Containerized reproducible dev/staging/prod cloud environments.",
    metric: "Zero-Drift Deployments",
    angle: 150,
    orbit: "outer",
  },
  {
    name: "Tailwind CSS",
    category: "Styling Engine",
    icon: Layers,
    color: "#2DD4BF",
    description: "Fluid design tokens, custom glassmorphism, responsive utilities.",
    metric: "Atomic CSS Architecture",
    angle: 210,
    orbit: "outer",
  },
  {
    name: "Figma",
    category: "UI/UX Systems",
    icon: LayoutTemplate,
    color: "#F43F5E",
    description: "Wireframing, interactive prototyping, and unified design token specs.",
    metric: "Pixel-Perfect Hand-off",
    angle: 270,
    orbit: "outer",
  },
  {
    name: "GraphQL & REST",
    category: "API Mesh",
    icon: Share2,
    color: "#A855F7",
    description: "Clean contracts, payload optimization, caching, and rate limiting.",
    metric: "Resilient Gateways",
    angle: 330,
    orbit: "outer",
  },
];

export default function FeaturedTechOrbit() {
  const [activeNode, setActiveNode] = useState<TechNode>(TECH_NODES[1]); // default Next.js

  const innerRadius = 150;
  const outerRadius = 260;

  return (
    <section
      id="featured-tech"
      className="relative py-24 lg:py-32 overflow-hidden border-t border-white/[0.05] bg-gradient-to-b from-[#050811] via-[#080D1D] to-[#050811]"
    >
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-300 text-xs font-mono tracking-widest uppercase">
            <Network className="w-3.5 h-3.5" />
            <span>03 // Ecosystem Network</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Distributed Systems & <span className="gradient-text-blue">Tech Matrix</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            An interconnected topology of technologies rotating around modern full-stack systems engineering. Hover any node to inspect telemetry.
          </p>
        </div>

        {/* Orbit Visualization Arena */}
        <div className="relative w-full max-w-[680px] h-[580px] sm:h-[640px] mx-auto flex items-center justify-center">
          {/* Subtle SVG Grid & Concentric Orbital Rings */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 680 640">
            <defs>
              <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3B7EFF" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#050811" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="laserBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B7EFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Inner Orbit Circle */}
            <circle
              cx="340"
              cy="320"
              r={innerRadius}
              fill="none"
              stroke="rgba(59, 126, 255, 0.2)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              className="animate-spin-slow"
              style={{ animationDuration: "120s" }}
            />

            {/* Outer Orbit Circle */}
            <circle
              cx="340"
              cy="320"
              r={outerRadius}
              fill="none"
              stroke="rgba(0, 240, 255, 0.15)"
              strokeWidth="1.5"
              strokeDasharray="4 8"
            />

            {/* Glowing Connection lines from Center to Active Node */}
            {TECH_NODES.map((node) => {
              const radius = node.orbit === "inner" ? innerRadius : outerRadius;
              const rad = (node.angle * Math.PI) / 180;
              const x = 340 + radius * Math.cos(rad);
              const y = 320 + radius * Math.sin(rad);
              const isActive = activeNode.name === node.name;

              return (
                <line
                  key={node.name}
                  x1="340"
                  y1="320"
                  x2={x}
                  y2={y}
                  stroke={isActive ? "url(#laserBeam)" : "rgba(255, 255, 255, 0.05)"}
                  strokeWidth={isActive ? 2 : 1}
                  strokeDasharray={isActive ? "none" : "3 6"}
                  className="transition-all duration-300"
                />
              );
            })}
          </svg>

          {/* Central Reactor Core */}
          <div className="relative z-20 flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#080D1D] border-2 border-cyan-400/60 shadow-[0_0_50px_rgba(0,240,255,0.35)] p-2">
            {/* Outer pulsing ring */}
            <div className="absolute -inset-2 rounded-full border border-blue-500/30 animate-ping opacity-40 pointer-events-none" />

            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600/30 via-slate-900 to-cyan-500/20 flex flex-col items-center justify-center text-center p-2">
              <Terminal className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-300 animate-pulse mb-1" />
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-white leading-tight">
                ARCH // LAB
              </span>
              <span className="text-[8px] font-mono text-cyan-400">CORE v2026</span>
            </div>
          </div>

          {/* Floating Orbital Tech Nodes */}
          {TECH_NODES.map((node) => {
            const radius = node.orbit === "inner" ? innerRadius : outerRadius;
            const rad = (node.angle * Math.PI) / 180;
            // Center is (340, 320) in a 680x640 frame. We position nodes with style
            const left = 340 + radius * Math.cos(rad);
            const top = 320 + radius * Math.sin(rad);
            const Icon = node.icon;
            const isActive = activeNode.name === node.name;

            return (
              <motion.button
                key={node.name}
                onClick={() => setActiveNode(node)}
                onMouseEnter={() => setActiveNode(node)}
                style={{
                  position: "absolute",
                  left: `${left}px`,
                  top: `${top}px`,
                  transform: "translate(-50%, -50%)",
                }}
                className={`group z-30 flex items-center justify-center p-3 rounded-2xl transition-all duration-300 focus:outline-none ${
                  isActive
                    ? "bg-slate-900 border-2 border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.6)] scale-125 z-40"
                    : "bg-[#0B101E]/90 border border-white/[0.12] hover:border-cyan-400/50 hover:scale-110 shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
                }`}
                aria-label={`Inspect ${node.name}`}
              >
                <Icon
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-colors"
                  style={{ color: node.color }}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Live Active Node Telemetry Card */}
        {activeNode && (
          <motion.div
            key={activeNode.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto mt-6 glass-card rounded-2xl p-6 border border-cyan-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(0,240,255,0.15)] flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left"
          >
            <div
              className="p-4 rounded-xl bg-slate-900/90 border border-white/10 shrink-0"
              style={{ boxShadow: `0 0 20px ${activeNode.color}25` }}
            >
              <activeNode.icon className="w-8 h-8" style={{ color: activeNode.color }} />
            </div>

            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>{activeNode.name}</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-500/20 text-cyan-300 border border-blue-500/30">
                    {activeNode.category}
                  </span>
                </h3>
                <span className="text-xs font-mono font-semibold text-emerald-400">
                  {activeNode.metric}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {activeNode.description}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
