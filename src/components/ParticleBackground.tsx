"use client";

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Refined subtle background grid */}
      <div className="absolute inset-0 sasu-grid opacity-40 pointer-events-none" />

      {/* Soft atmospheric ambient glows */}
      <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] rounded-full bg-[#3B7EFF]/8 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[550px] h-[550px] rounded-full bg-[#00F0FF]/5 blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-40 left-10 w-[700px] h-[700px] rounded-full bg-indigo-600/6 blur-[180px] pointer-events-none" />
    </div>
  );
}
