"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#hero", label: "Home", icon: "bx-home" },
  { href: "#about", label: "About", icon: "bx-user" },
  { href: "#capabilities", label: "Capabilities", icon: "bx-cog" },
  { href: "#resume", label: "Resume", icon: "bx-file-blank" },
  { href: "#portfolio", label: "Portfolio", icon: "bx-book-content" },
  { href: "#github", label: "GitHub", icon: "bxl-github" },
  { href: "#contact", label: "Contact", icon: "bx-envelope" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of NAV_ITEMS) {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Nav Toggle */}
      <button
        type="button"
        className="mobile-nav-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileOpen}
      >
        <i className={`bx ${mobileOpen ? "bx-x" : "bx-menu"}`} style={{ fontSize: "24px" }}></i>
      </button>

      {/* Backdrop overlay for mobile drawer */}
      <div
        className={`mobile-nav-overlay ${mobileOpen ? "is-active" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Header & Left Navigation Dock */}
      <header id="header" className={mobileOpen ? "expanded" : ""}>
        <nav className="nav-menu">
          <ul>
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={item.href} className={isActive ? "active" : ""}>
                  <a href={item.href} onClick={handleLinkClick}>
                    <i className={`bx ${item.icon}`}></i>
                    <span className="nav-tooltip">{item.label}</span>
                    <span className="nav-label hidden">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}
