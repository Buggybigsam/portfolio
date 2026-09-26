"use client";

import { useEffect, useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "sasu-nav py-3 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="sasu-container flex items-center justify-between">
        {/* Animated Initials Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-3 relative focus:outline-none"
          id="nav-logo"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#3B7EFF]/30 via-[#101422] to-[#00F0FF]/20 border border-[#3B7EFF]/40 group-hover:border-[#00F0FF] shadow-[0_0_15px_rgba(59,126,255,0.25)] transition-all duration-300">
            <span className="font-mono text-xs font-bold tracking-wider text-[#00F0FF] group-hover:text-white transition-colors">
              {PORTFOLIO_DATA.personal.initials}
            </span>
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0A0D14] animate-pulse" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-white group-hover:text-[#00F0FF] transition-colors">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#3B7EFF]">
              IT & Software Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 bg-[#101524]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                id={`nav-link-${item.name.toLowerCase()}`}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "text-white bg-[#3B7EFF]/35 shadow-[0_0_12px_rgba(59,126,255,0.4)] border border-[#3B7EFF]/50"
                    : "text-[#9DA0A6] hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            id="nav-cta-btn"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#3B7EFF] hover:bg-[#2F6AE6] shadow-[0_0_18px_rgba(59,126,255,0.35)] transition-all duration-200 hover:scale-[1.02]"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="p-2.5 rounded-xl bg-[#141824] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden sasu-nav border-t border-white/[0.08] px-6 py-6 space-y-3 mt-2 shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
        >
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-[#3B7EFF]/25 text-[#00F0FF] border border-[#3B7EFF]/40"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/[0.08]">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#3B7EFF] shadow-[0_0_20px_rgba(59,126,255,0.4)]"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
