"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-white/[0.06] overflow-hidden sasu-section-contain">
      <div className="sasu-container relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-20">
          <p className="sasu-section-mark">
            CAREER TRAJECTORY
          </p>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Engineering Milestones & <span className="sasu-gradient-blue">Experience</span>
          </h2>

          <p className="text-[#9DA0A6] text-base leading-relaxed">
            A chronological timeline of shipping production applications, leading software architecture, and solving hard algorithmic problems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#3B7EFF] via-[#00F0FF] to-indigo-600 shadow-[0_0_15px_rgba(59,126,255,0.4)] opacity-50" />

          <div className="space-y-12 sm:space-y-16">
            {PORTFOLIO_DATA.experience.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.period + item.role}
                  className="relative flex flex-col sm:flex-row items-start"
                >
                  {/* Glowing Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                    <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#0A0D14] border-2 border-[#3B7EFF] shadow-[0_0_15px_rgba(59,126,255,0.6)]">
                      <div className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                    </div>
                  </div>

                  {/* Card Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`ml-12 sm:ml-0 w-full sm:w-[calc(50%-36px)] ${
                      isEven ? "sm:mr-auto sm:text-right" : "sm:ml-auto sm:text-left"
                    }`}
                  >
                    <div className="sasu-card p-6 sm:p-7 space-y-4">
                      {/* Period Badge */}
                      <div
                        className={`flex items-center gap-2 ${
                          isEven ? "sm:justify-end" : "sm:justify-start"
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3B7EFF]/15 text-[#00F0FF] border border-[#3B7EFF]/30 text-xs font-mono font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                      </div>

                      {/* Role & Org */}
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-sm font-medium text-slate-300 mt-0.5">
                          {item.organization}
                        </p>
                        <div
                          className={`flex items-center gap-1 text-xs text-[#9DA0A6] font-mono mt-1 ${
                            isEven ? "sm:justify-end" : "sm:justify-start"
                          }`}
                        >
                          <MapPin className="w-3 h-3 text-[#3B7EFF]" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#C2C9D6] leading-relaxed">
                        {item.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="space-y-2 pt-2 border-t border-white/[0.06] text-left">
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#3B7EFF] shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-300 leading-relaxed">
                              {h}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Tags */}
                      <div
                        className={`flex flex-wrap gap-1.5 pt-2 ${
                          isEven ? "sm:justify-end" : "sm:justify-start"
                        }`}
                      >
                        {item.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.07] text-[10px] font-mono text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
