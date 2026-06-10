// components/sections/Projects.tsx
"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

// Custom Interactive Card Component with Framer Motion 3D Physics
function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });

  // Framer Motion values for ultra-smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for premium feel
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map normalized mouse position to rotation angles (max 10 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Set Spotlight Position
    setSpotlight({ x: mouseX, y: mouseY });

    // Set normalized coordinates for 3D tilt (-0.5 to 0.5)
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    setIsFocused(true);
  };

  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    setIsFocused(false);
    // Smoothly spring back to center
    x.set(0);
    y.set(0);
  };

  const Icon = project.icon;
  const isInternal = project.link === "#";

  return (
    <motion.a
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      ref={cardRef}
      href={project.link}
      target={isInternal ? "_self" : "_blank"}
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      className={`relative group rounded-[2rem] p-[1px] flex flex-col ${
        isInternal ? "cursor-default" : "cursor-pointer"
      }`}
    >
      {/* --- MULTICOLOR BORDER GRADIENT (Always visible on mobile, hover on desktop) --- */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-600 via-fuchsia-600 to-indigo-600 opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

      {/* --- INNER CARD --- */}
      <div className="relative h-[480px] w-full bg-[#07050e] rounded-[2rem] overflow-hidden p-8 md:p-10 flex flex-col z-10 border border-transparent md:border-white/5 md:group-hover:border-transparent transition-colors duration-500">

        {/* --- STATIC GLOW FOR MOBILE --- */}
        <div className="absolute -inset-px bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_60%)] md:hidden z-0" />

        {/* --- DYNAMIC MOUSE SPOTLIGHT (Desktop only) --- */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-0 hidden md:block"
          style={{
            background: `radial-gradient(600px circle at ${spotlight.x}px ${spotlight.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
          }}
        />

        {/* --- CARD CONTENT --- */}
        <div 
          className="relative z-10 flex flex-col h-full transform-gpu"
          style={{ transform: "translateZ(40px)" }}
        >
          
          {/* Top Left: Index */}
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#475569] mb-auto">
            {project.id}
          </div>

          {/* Center: Icon */}
          <div className="flex justify-center items-center mb-auto mt-4">
            <Icon 
              size={72} 
              strokeWidth={1} 
              className="text-violet-400 md:text-[#334155] md:group-hover:text-violet-400 md:group-hover:scale-110 transition-all duration-500" 
            />
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent md:bg-white/5 md:bg-none md:group-hover:bg-gradient-to-r md:group-hover:from-transparent md:group-hover:via-violet-500/50 md:group-hover:to-transparent mb-6 transition-all duration-500"></div>

          {/* Bottom Content */}
          <div className="flex flex-col">
            <h4 className="font-sans font-semibold text-2xl sm:text-3xl tracking-tight mb-4 text-white md:text-slate-200 md:group-hover:text-white transition-colors duration-500">
              {project.title}
            </h4>
            
            <p className="text-sm text-slate-300 md:text-[#94a3b8] font-light leading-relaxed mb-8 line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack Pill Badges */}
            <div className="flex flex-wrap gap-3 mt-auto">
              {project.techStack.map((tech: string, idx: number) => (
                <span 
                  key={idx} 
                  className="text-[9px] sm:text-[10px] font-sans tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-violet-500/40 text-violet-200 bg-violet-500/10 md:border-white/10 md:text-slate-400 md:bg-transparent md:group-hover:border-violet-500/40 md:group-hover:text-violet-200 md:group-hover:bg-violet-500/10 transition-all duration-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.a>
  );
}

export function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="w-full bg-[#030108] text-white py-24 sm:py-32 border-t border-white/5 relative font-sans">
      
      {/* Background Subtle Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(79,70,229,0.08),transparent_50%)] pointer-events-none" />

      <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 sm:mb-24 flex flex-col items-center md:items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 mb-6">
            <span className="text-xs font-medium tracking-[0.2em] text-violet-300 uppercase">
              Portfolio
            </span>
          </div>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-100 font-semibold text-center md:text-left">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500">Works.</span>
          </h3>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 perspective-[1000px]">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}