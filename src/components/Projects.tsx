"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import ProjectModal from "@/components/ProjectModal";
import {
  ExternalLink,
  ArrowUpRight,
  Maximize2,
  FolderGit2,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "Full-Stack", "AI & ML", "Systems"];

  const filteredProjects: Project[] =
    selectedCategory === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-white/[0.06] overflow-hidden sasu-section-contain">
      <div className="sasu-container relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <p className="sasu-section-mark">
            CURATED PRODUCTION WORK
          </p>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Featured Systems & <span className="sasu-gradient-blue">Case Studies</span>
          </h2>

          <p className="text-[#9DA0A6] text-base leading-relaxed">
            Scalable commercial applications, computer vision platforms, and real-time distributed software. Click any project to inspect the technical case study.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#3B7EFF] text-white shadow-[0_0_20px_rgba(59,126,255,0.4)] scale-105"
                  : "bg-[#141824] text-[#9DA0A6] hover:text-white border border-white/[0.08] hover:border-[#3B7EFF]/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative sasu-card p-0 overflow-hidden flex flex-col justify-between"
              >
                {/* Project Image Preview */}
                <div
                  onClick={() => setActiveModalProject(project)}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 cursor-pointer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 550px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121622] via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-[#0A0D14]/85 backdrop-blur-md border border-white/10 text-[#00F0FF] text-[11px] font-mono font-medium">
                      {project.category}
                    </span>

                    <div className="p-2 rounded-full bg-[#0A0D14]/80 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Maximize2 className="w-4 h-4 text-[#00F0FF]" />
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-5">
                  <div className="space-y-2.5">
                    <h3
                      onClick={() => setActiveModalProject(project)}
                      className="text-xl font-bold text-white group-hover:text-[#00F0FF] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#3B7EFF] font-medium">
                      {project.subtitle}
                    </p>
                    <p className="text-[#C2C9D6] text-sm leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded-full bg-white/[0.02] text-[10px] font-mono text-slate-500">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Action Row */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#3B7EFF] hover:text-[#00F0FF] transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-[#0A0D14] border border-white/10 text-slate-300 hover:text-white hover:border-[#3B7EFF] transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-[#3B7EFF]/20 border border-[#3B7EFF]/40 text-[#00F0FF] hover:bg-[#3B7EFF] hover:text-white transition-all shadow-[0_0_12px_rgba(59,126,255,0.25)]"
                        aria-label={`Open ${project.title} Live Demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
