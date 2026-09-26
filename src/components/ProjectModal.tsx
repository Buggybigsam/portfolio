"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/portfolioData";
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="project-modal-backdrop"
        className="fixed inset-0 z-[9990] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0D111C] border border-white/[0.12] shadow-2xl text-left z-10 flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-[#0A0D14]/80 border border-white/10 text-slate-300 hover:text-white hover:border-[#3B7EFF] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Project Banner Image */}
          <div className="relative w-full aspect-[16/9] bg-slate-950 overflow-hidden shrink-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D111C] via-transparent to-black/30" />

            <div className="absolute bottom-4 left-5 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#3B7EFF] text-white text-xs font-mono font-semibold uppercase tracking-wider">
                {project.category}
              </span>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Title & Subtitle */}
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {project.title}
              </h2>
              <p className="text-xs font-mono text-[#3B7EFF]">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#9DA0A6]">
                About The Project
              </h3>
              <p className="text-[#C2C9D6] text-sm leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#9DA0A6]">
                Key Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#3B7EFF] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#9DA0A6]">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full bg-[#141C30] border border-[#3B7EFF]/30 text-xs font-mono text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-xl bg-amber-500/[0.04] border border-amber-500/20 space-y-1.5">
                <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-xs">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>The Engineering Challenge</span>
                </div>
                <p className="text-xs text-[#C2C9D6] leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/20 space-y-1.5">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-xs">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>The Solution</span>
                </div>
                <p className="text-xs text-[#C2C9D6] leading-relaxed">
                  {project.solutions}
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sasu-btn-primary h-10 px-5 text-xs"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sasu-btn-secondary h-10 px-5 text-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="text-xs font-mono text-[#9DA0A6] hover:text-white transition-colors"
              >
                Close [Esc]
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
