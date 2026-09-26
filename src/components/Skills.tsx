"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA, SkillItem } from "@/data/portfolioData";
import {
  Code2,
  Palette,
  FileCode,
  Cpu,
  Atom,
  Globe,
  Layers,
  Sparkles,
  Server,
  Network,
  Database,
  FileSpreadsheet,
  ShieldCheck,
  Terminal,
  GitBranch,
  Binary,
  LayoutTemplate,
  Box,
  Send,
  Compass,
  Workflow,
  Bot,
  Share2,
  Search,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

// Dynamic Icon Resolver
const getIcon = (iconName: string) => {
  const iconProps = { className: "w-5 h-5 text-[#3B7EFF]" };
  switch (iconName) {
    case "Atom": return <Atom {...iconProps} />;
    case "Cpu": return <Cpu {...iconProps} />;
    case "Layers": return <Layers {...iconProps} />;
    case "FileCode": return <FileCode {...iconProps} />;
    case "Code2": return <Code2 {...iconProps} />;
    case "Sparkles": return <Sparkles {...iconProps} />;
    case "Server": return <Server {...iconProps} />;
    case "Database": return <Database {...iconProps} />;
    case "Terminal": return <Terminal {...iconProps} />;
    case "FileSpreadsheet": return <FileSpreadsheet {...iconProps} />;
    case "ShieldCheck": return <ShieldCheck {...iconProps} />;
    case "Share2": return <Share2 {...iconProps} />;
    case "GitBranch": return <GitBranch {...iconProps} />;
    case "Binary": return <Binary {...iconProps} />;
    case "Box": return <Box {...iconProps} />;
    case "LayoutTemplate": return <LayoutTemplate {...iconProps} />;
    case "Send": return <Send {...iconProps} />;
    case "Compass": return <Compass {...iconProps} />;
    case "Bot": return <Bot {...iconProps} />;
    case "Network": return <Network {...iconProps} />;
    case "Workflow": return <Workflow {...iconProps} />;
    default: return <Cpu {...iconProps} />;
  }
};

type TabType = "all" | "frontend" | "backend" | "tools" | "other";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: { id: TabType; label: string }[] = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools & DevOps" },
    { id: "other", label: "Architecture & AI" },
  ];

  const allSkills = useMemo(() => {
    const list: (SkillItem & { category: string })[] = [];
    PORTFOLIO_DATA.skills.frontend.forEach((s) => list.push({ ...s, category: "Frontend" }));
    PORTFOLIO_DATA.skills.backend.forEach((s) => list.push({ ...s, category: "Backend" }));
    PORTFOLIO_DATA.skills.tools.forEach((s) => list.push({ ...s, category: "Tools" }));
    PORTFOLIO_DATA.skills.other.forEach((s) => list.push({ ...s, category: "Architecture & AI" }));
    return list;
  }, []);

  const filteredSkills = useMemo(() => {
    return allSkills.filter((skill) => {
      const matchesTab =
        activeTab === "all" ||
        (activeTab === "frontend" && skill.category === "Frontend") ||
        (activeTab === "backend" && skill.category === "Backend") ||
        (activeTab === "tools" && skill.category === "Tools") ||
        (activeTab === "other" && skill.category === "Architecture & AI");

      const matchesSearch =
        searchQuery === "" ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [allSkills, activeTab, searchQuery]);

  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-white/[0.06] overflow-hidden sasu-section-contain">
      <div className="sasu-container relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <p className="sasu-section-mark">
            EXPERTISE & CAPABILITIES
          </p>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Skills & <span className="sasu-gradient-blue">Competencies</span>
          </h2>

          <p className="text-[#9DA0A6] text-base leading-relaxed">
            The core technologies and tools I work with to build performant, resilient software.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.07]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeTab === cat.id
                    ? "bg-[#3B7EFF] text-white shadow-sm"
                    : "bg-[#141824] text-[#9DA0A6] hover:text-white border border-white/[0.08]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Filter by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-full bg-[#141824] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#3B7EFF] transition-all"
            />
          </div>
        </div>

        {/* Clean Skills Cards Grid (NO fake percentage bars!) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="sasu-card hover:border-[#3B7EFF]/50 space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#0A0D14] border border-white/[0.08]">
                      {getIcon(skill.icon)}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {skill.name}
                      </h3>
                      <p className="text-[11px] font-mono text-[#3B7EFF]">
                        {skill.experience}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#9DA0A6]">
                    {skill.tag}
                  </span>
                </div>

                <p className="text-xs text-[#C2C9D6] leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
