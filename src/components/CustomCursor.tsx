"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useSpring(0, { damping: 25, stiffness: 350 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 350 });
  const trailX = useSpring(0, { damping: 20, stiffness: 150 });
  const trailY = useSpring(0, { damping: 20, stiffness: 150 });

  useEffect(() => {
    // Check if device is touch-enabled
    if (
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0)
    ) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        target.classList.contains("interactive") ||
        target.closest(".interactive");

      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, trailX, trailY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Outer trailing aura */}
      <motion.div
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className={`absolute rounded-full transition-all duration-200 pointer-events-none ${
          isHovered
            ? "h-12 w-12 bg-cyan-400/20 border border-cyan-400/60 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            : isClicking
            ? "h-7 w-7 bg-blue-500/25 border border-blue-400/50"
            : "h-8 w-8 border border-blue-400/40 bg-blue-500/10 shadow-[0_0_12px_rgba(59,126,255,0.25)]"
        }`}
      />

      {/* Center sharp dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className={`absolute rounded-full pointer-events-none transition-transform duration-100 ${
          isHovered
            ? "h-2 w-2 bg-cyan-300 shadow-[0_0_10px_#00F0FF]"
            : isClicking
            ? "h-1.5 w-1.5 bg-white"
            : "h-1.5 w-1.5 bg-cyan-400 shadow-[0_0_8px_#3B7EFF]"
        }`}
      />
    </div>
  );
}
