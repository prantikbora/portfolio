// components/sections/Projects.tsx
"use client";

import React, { useRef, useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/data";

// Custom Interactive Card Component
function ProjectCard({ project }: { project: any }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // 1. Calculate Spotlight Position
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });

    // 2. Calculate 3D Tilt Angles (Max tilt is 10 degrees)
    const multiplier = 10; 
    const xRotate = multiplier * ((x - rect.width / 2) / (rect.width / 2));
    const yRotate = -multiplier * ((y - rect.height / 2) / (rect.height / 2));

    setTilt({ x: xRotate, y: yRotate });
  };

  const handleMouseEnter = () => setIsFocused(true);
  
  const handleMouseLeave = () => {
    setIsFocused(false);
    // Reset tilt smoothly when mouse leaves
    setTilt({ x: 0, y: 0 });
  };

  const Icon = project.icon;
  const isInternal = project.link === "#";

  return (
    <a
      ref={cardRef}
      href={project.link}
      target={isInternal ? "_self" : "_blank"}
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        // Apply the 3D transform dynamically
        transform: isFocused
          ? `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale3d(1.02, 1.02, 1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: isFocused ? "none" : "transform 0.5s ease",
      }}
      className={`relative group rounded-2xl p-[1px] flex flex-col ${
        isInternal ? "cursor-default" : "cursor-pointer"
      }`}
    >
      {/* --- MULTICOLOR BORDER GRADIENT --- */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* --- INNER CARD (Hides the center of the gradient, leaving the 1px border) --- */}
      <div className="relative h-[480px] w-full bg-[#08080B] rounded-2xl overflow-hidden p-8 md:p-10 flex flex-col z-10">

        {/* --- DYNAMIC MOUSE SPOTLIGHT --- */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{
            background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
          }}
        />

        {/* --- CARD CONTENT (z-10 keeps it above the spotlight) --- */}
        <div className="relative z-10 flex flex-col h-full">
          
          {/* Top Left: Index */}
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#475569] mb-auto">
            {project.id}
          </div>

          {/* Center: Icon (Now brightens and scales slightly on hover) */}
          <div className="flex justify-center items-center mb-auto">
            <Icon 
              size={72} 
              strokeWidth={1} 
              className="text-[#334155] group-hover:text-violet-400 group-hover:scale-110 transition-all duration-500" 
            />
          </div>

          {/* Divider Line (Turns into a glowing gradient on hover) */}
          <div className="w-full h-px bg-white/5 mb-6 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-violet-500/50 group-hover:to-transparent transition-all duration-500"></div>

          {/* Bottom Content */}
          <div className="flex flex-col">
            <h4 className="font-serif text-2xl sm:text-3xl tracking-wide mb-4 text-slate-200 group-hover:text-white transition-colors duration-500">
              {project.title}
            </h4>
            
            <p className="text-sm text-[#94a3b8] font-light leading-relaxed mb-8 line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack Pill Badges (Glow on hover) */}
            <div className="flex flex-wrap gap-3 mt-auto">
              {project.techStack.map((tech: string, idx: number) => (
                <span 
                  key={idx} 
                  className="text-[9px] sm:text-[10px] font-sans tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-white/10 text-slate-400 group-hover:border-violet-500/40 group-hover:text-violet-200 group-hover:bg-violet-500/10 transition-all duration-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </a>
  );
}

export function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="w-full bg-[#050508] text-white py-24 sm:py-32 border-t border-white/5">
      <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-24">
          <h2 className="text-[10px] sm:text-xs font-sans tracking-[0.3em] text-slate-500 uppercase font-semibold text-center md:text-left">
            Portfolio
          </h2>
          <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 tracking-wide text-center md:text-left">
            Selected <span className="text-violet-400 italic">Works.</span>
          </h3>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}