"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      const removeTimer = setTimeout(() => {
        setRemoved(true);
      }, 700);
      return () => clearTimeout(removeTimer);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (removed) return null;

  return (
    <div
      id="preloader"
      className={`preloader ${hidden ? "is-hidden" : ""}`}
      aria-hidden="true"
    >
      <div className="preloader__inner">
        <span className="preloader__logo">Welcome!</span>
        <span className="preloader__pulse" aria-hidden="true"></span>
        <p className="preloader__label">Loading experience</p>
      </div>
    </div>
  );
}
