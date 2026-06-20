// components/sections/Experience.tsx
"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="w-full bg-transparent text-white py-24 sm:py-32 selection:bg-violet-500/30 relative overflow-hidden font-sans">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.08),transparent_50%)] pointer-events-none" />

      <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-24 sm:mb-32 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-xs font-medium tracking-[0.2em] text-violet-300 uppercase">
              Trajectory
            </span>
          </div>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-100">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500">Experience.</span>
          </h3>
        </motion.div>

        {/* Timeline Container */}
        <div className="flex flex-col relative">
          {/* Main vertical line for desktop */}
          <div className="hidden md:block absolute left-[25%] top-4 bottom-0 w-[1px] bg-gradient-to-b from-violet-500/30 via-white/10 to-transparent" />

          {experience.map((job, index) => {
            const isLast = index === experience.length - 1;
            
            return (
              <motion.div 
                key={job.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col md:grid md:grid-cols-12 group relative ${isLast ? 'mb-0' : 'mb-16 sm:mb-24'}`}
              >
                
                {/* Timeline (Date) */}
                <div className="md:col-span-3 lg:col-span-3 md:pr-12 md:text-right pt-2 mb-4 md:mb-0 relative">
                  {/* Glowing Timeline Node / Dot (Desktop) */}
                  <div className="hidden md:block absolute right-[-5px] top-3 w-2.5 h-2.5 rounded-full bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.6)] transition-all duration-500 md:group-hover:scale-[1.8] md:group-hover:bg-fuchsia-400 z-10" />
                  
                  <span className="text-sm sm:text-base tracking-[0.1em] text-violet-300 md:text-slate-400 font-medium md:group-hover:text-violet-300 transition-colors duration-300">
                    {job.timeline}
                  </span>
                </div>

                {/* Details Card */}
                <div className="md:col-span-9 lg:col-span-9 relative">
                  
                  {/* Glowing Timeline Node / Dot (Mobile) - Pre-lit to fuchsia */}
                  <div className="md:hidden absolute -left-6 top-3 w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_rgba(217,70,239,0.8)] z-10" />
                  <div className="md:hidden absolute -left-[20px] top-4 bottom-[-64px] w-[1px] bg-white/10" />

                  <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] md:bg-white/[0.02] border border-white/10 md:border-white/5 backdrop-blur-sm transition-all duration-300 md:group-hover:bg-white/[0.04] md:group-hover:border-white/10 shadow-2xl shadow-[0_0_40px_-15px_rgba(139,92,246,0.2)] md:shadow-none md:group-hover:shadow-[0_0_40px_-15px_rgba(139,92,246,0.2)] md:hover:-translate-y-1">
                    
                    <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-2 text-slate-100">
                      {job.role}
                    </h4>
                    
                    <span className="text-sm sm:text-base tracking-[0.15em] text-violet-400 uppercase font-medium mb-6 block">
                      {job.company}
                    </span>
                    
                    <p className="text-base sm:text-lg text-slate-300 md:text-slate-400 font-light leading-relaxed mb-8 max-w-4xl">
                      {job.description}
                    </p>

                    {/* Sub-projects / Highlights */}
                    {job.highlights.length > 0 && (
                      <ul className="flex flex-col gap-4 max-w-4xl">
                        {job.highlights.map((highlight, idx) => {
                          const [projectName, ...rest] = highlight.split(":");
                          return (
                            <li key={idx} className="text-base text-slate-300 md:text-slate-400/90 font-light flex items-start group/item">
                              <span className="text-violet-400 md:text-violet-500/50 mr-4 mt-1.5 text-[10px] transition-colors md:group-hover/item:text-violet-400">◆</span>
                              <span className="leading-relaxed">
                                {rest.length > 0 ? (
                                  <>
                                    <span className="text-slate-200 font-medium">{projectName}:</span>
                                    {rest.join(":")}
                                  </>
                                ) : (
                                  highlight
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}