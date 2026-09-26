"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Globe,
  Layout,
  Layers,
  Cpu,
  Bot,
  Database,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function Services() {
  const getServiceIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 transition-transform duration-300 group-hover:scale-110";
    switch (iconName) {
      case "Globe":
        return <Globe className={`${iconClass} text-[#3B7EFF]`} />;
      case "Layout":
        return <Layout className={`${iconClass} text-pink-400`} />;
      case "Layers":
        return <Layers className={`${iconClass} text-teal-400`} />;
      case "Cpu":
        return <Cpu className={`${iconClass} text-emerald-400`} />;
      case "BrainCircuit":
        return <Bot className={`${iconClass} text-purple-400`} />;
      case "Database":
        return <Database className={`${iconClass} text-amber-400`} />;
      default:
        return <Globe className={`${iconClass} text-[#3B7EFF]`} />;
    }
  };

  const handleServiceSelect = (serviceTitle: string) => {
    const contactSection = document.getElementById("contact");
    const subjectInput = document.getElementById("contact-subject") as HTMLInputElement | null;

    if (subjectInput) {
      subjectInput.value = `Inquiry regarding ${serviceTitle}`;
    }

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 border-t border-white/[0.06] overflow-hidden sasu-section-contain">
      <div className="sasu-container relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <p className="sasu-section-mark">
            CORE OFFERINGS
          </p>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            What I Can <span className="sasu-gradient-blue">Build</span>
          </h2>

          <p className="text-[#9DA0A6] text-base leading-relaxed">
            Full-lifecycle development from interactive UI/UX prototyping to resilient distributed systems and practical machine learning integrations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group sasu-card flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-[#0A0D14] border border-white/10 w-fit group-hover:border-[#3B7EFF]/50 transition-colors">
                  {getServiceIcon(service.icon)}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#C2C9D6] leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Deliverables:
                  </p>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3B7EFF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/[0.06]">
                <button
                  onClick={() => handleServiceSelect(service.title)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-full bg-white/[0.03] hover:bg-[#3B7EFF]/20 border border-white/[0.08] hover:border-[#3B7EFF]/50 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white transition-all duration-200"
                >
                  <span>Request Solution</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#3B7EFF]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
