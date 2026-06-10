// components/sections/Skills.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Skills() {
  const { skills } = PORTFOLIO_DATA;

  // Animation variants for staggering skill pills
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const pillVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
  };

  return (
    <section id="skills" className="w-full bg-[#030108] text-white py-24 sm:py-32 border-t border-white/5 relative font-sans">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_center_left,rgba(217,70,239,0.05),transparent_60%)] pointer-events-none -translate-y-1/2" />

      <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 sm:mb-24 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 mb-6">
            <span className="text-xs font-medium tracking-[0.2em] text-fuchsia-300 uppercase">
              Capabilities
            </span>
          </div>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-100 font-semibold">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-500">Arsenal.</span>
          </h3>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Web Stack Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-[2rem] p-[1px] flex flex-col"
          >
            {/* Hover Gradient Border (Always visible on mobile) */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-500 to-indigo-500 opacity-50 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-0" />
            
            <div className="relative h-full w-full bg-[#07050e] rounded-[2rem] p-8 md:p-10 flex flex-col z-10 border border-transparent md:border-white/5 md:group-hover:border-transparent transition-colors">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/4 bg-violet-500/10 blur-[40px] rounded-full pointer-events-none" />

              <div className="flex items-center gap-5 mb-10 border-b border-violet-500/20 md:border-white/5 pb-8 relative z-10">
                <div className="p-4 bg-violet-500/10 border border-violet-500/30 text-violet-400 md:bg-white/5 md:border-white/10 md:text-violet-400 rounded-2xl md:group-hover:scale-110 md:group-hover:bg-violet-500/10 md:group-hover:border-violet-500/30 transition-all duration-500">
                  <Code2 size={28} strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-2xl sm:text-3xl tracking-tight text-white md:text-slate-200 md:group-hover:text-white transition-colors">
                  Web Stack
                </h4>
              </div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3 sm:gap-4 relative z-10"
              >
                {skills.web.map((skill: string, idx: number) => (
                  <motion.span 
                    variants={pillVariants}
                    key={idx} 
                    className="text-xs sm:text-sm font-medium tracking-wider px-5 py-2.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-100 md:border-white/5 md:bg-white/[0.03] md:text-slate-300 md:hover:border-violet-500/50 md:hover:text-violet-200 md:hover:bg-violet-500/20 md:hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 cursor-default md:hover:-translate-y-1"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Core Engineering Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative rounded-[2rem] p-[1px] flex flex-col"
          >
            {/* Hover Gradient Border (Always visible on mobile) */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-fuchsia-500 to-purple-500 opacity-50 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-0" />
            
            <div className="relative h-full w-full bg-[#07050e] rounded-[2rem] p-8 md:p-10 flex flex-col z-10 border border-transparent md:border-white/5 md:group-hover:border-transparent transition-colors">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/4 bg-fuchsia-500/10 blur-[40px] rounded-full pointer-events-none" />

              <div className="flex items-center gap-5 mb-10 border-b border-fuchsia-500/20 md:border-white/5 pb-8 relative z-10">
                <div className="p-4 bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 md:bg-white/5 md:border-white/10 md:text-fuchsia-400 rounded-2xl md:group-hover:scale-110 md:group-hover:bg-fuchsia-500/10 md:group-hover:border-fuchsia-500/30 transition-all duration-500">
                  <Cpu size={28} strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-2xl sm:text-3xl tracking-tight text-white md:text-slate-200 md:group-hover:text-white transition-colors">
                  Core Engineering
                </h4>
              </div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3 sm:gap-4 relative z-10"
              >
                {skills.core.map((skill: string, idx: number) => (
                  <motion.span 
                    variants={pillVariants}
                    key={idx} 
                    className="text-xs sm:text-sm font-medium tracking-wider px-5 py-2.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-100 md:border-white/5 md:bg-white/[0.03] md:text-slate-300 md:hover:border-fuchsia-500/50 md:hover:text-fuchsia-200 md:hover:bg-fuchsia-500/20 md:hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all duration-300 cursor-default md:hover:-translate-y-1"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}