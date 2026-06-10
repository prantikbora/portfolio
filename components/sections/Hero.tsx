// components/sections/Hero.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA } from "@/lib/data";

// Animation Variants for staggering text
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

export function Hero() {
  const { hero } = PORTFOLIO_DATA;

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center pt-24 sm:pt-28 md:pt-32 pb-16 overflow-hidden bg-[#030108] text-white selection:bg-violet-500/40 font-sans">
      
      {/* --- AMBIENT BACKGROUND GLOWS & SPOTLIGHTS --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(124,58,237,0.15)_0%,rgba(0,0,0,0)_70%)] blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(79,70,229,0.15)_0%,rgba(0,0,0,0)_70%)] blur-[120px]" 
        />
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8 px-5 sm:px-8 md:px-12 xl:px-24 w-full max-w-[1600px] mx-auto">

        {/* LEFT COLUMN: Premium Typography & Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left w-full z-10 lg:pt-0 pt-10"
        >
          {/* Dynamic Roles Pill */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6 sm:mb-8 shadow-[0_4px_24px_-8px_rgba(139,92,246,0.3)]">
            <div className="relative flex items-center justify-center w-2 h-2 sm:w-2.5 sm:h-2.5">
              <div className="absolute w-full h-full rounded-full bg-emerald-400 animate-ping opacity-75" />
              <div className="relative w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
            </div>
            <span className="text-[9px] sm:text-xs font-semibold text-slate-200 tracking-[0.15em] uppercase">
              {hero.roles[0]} <span className="text-violet-400/60 mx-1.5 sm:mx-2">✦</span> {hero.roles[1]}
            </span>
          </motion.div>

          {/* Dynamic Headline - Scaled down for mobile to prevent overflow */}
          <h1 className="flex flex-col text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[1.1] sm:leading-[1.05] tracking-tight mb-6 sm:mb-8 font-semibold drop-shadow-xl z-10 w-full">
            {hero.headline.map((word, i) => (
              <motion.span
                variants={itemVariants}
                key={i}
                className={`block w-full break-words ${
                  i === 2 
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-400 to-indigo-500 filter drop-shadow-[0_0_20px_rgba(167,139,250,0.3)] pb-2" 
                    : "text-[#f8f9fa]"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Dynamic Description */}
          <motion.p variants={itemVariants} className="max-w-[600px] text-sm sm:text-base md:text-xl text-slate-400/90 leading-[1.6] sm:leading-[1.7] mb-8 sm:mb-12 font-light">
            {hero.description}
          </motion.p>

          {/* Actions: Button & Socials */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 w-full sm:w-auto">
            
            {/* Primary CTA */}
            <Button
              className="group relative overflow-hidden bg-white text-black hover:bg-slate-100 hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto h-12 sm:h-14 px-8 sm:px-10 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
              asChild
            >
              <a href="#projects">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Selected Works
                  <motion.span 
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-200/0 via-violet-200/30 to-violet-200/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              </a>
            </Button>

            {/* Social & Contact Icons */}
            <div className="flex items-center justify-center sm:justify-start gap-6 mt-2 sm:mt-4 w-full sm:w-auto">
              <SocialIcon href={`mailto:${hero.contact?.email || "boraprantik0@gmail.com"}`} icon={Mail} color="hover:text-[#EA4335] hover:drop-shadow-[0_0_12px_rgba(234,67,53,0.5)]" />
              <SocialIcon href={`tel:${hero.contact?.phone?.replace(/[^0-9+]/g, '') || "+919707514371"}`} icon={Phone} color="hover:text-[#25D366] hover:drop-shadow-[0_0_12px_rgba(37,211,102,0.5)]" />
              <SocialIcon href="https://www.linkedin.com/in/prantik-bora-039a9a245/" icon={Linkedin} color="hover:text-[#0A66C2] hover:drop-shadow-[0_0_12px_rgba(10,102,194,0.5)]" />
              <SocialIcon href="https://github.com/prantikbora" icon={Github} color="hover:text-white hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]" />
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Industry-Standard Complex 3D Motion Graphic - Hidden on mobile */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative w-full aspect-square max-w-[320px] sm:max-w-[400px] lg:max-w-[600px] mx-auto hidden lg:flex items-center justify-center mt-10 lg:mt-0 opacity-80 lg:opacity-100"
          style={{ perspective: "1500px" }}
        >
          {/* Core Energy Sphere */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[35%] h-[35%] bg-gradient-to-tr from-violet-600 to-fuchsia-500 rounded-full blur-[40px] z-0" 
          />
          <div className="absolute w-[20%] h-[20%] bg-white rounded-full blur-[30px] z-10 opacity-40 mix-blend-overlay" />

          {/* Complex 3D Orbiting Architecture */}
          <div className="relative w-full h-full flex items-center justify-center transform-gpu scale-90 sm:scale-100" style={{ transformStyle: "preserve-3d" }}>
            
            {/* Outer Mesh Sphere */}
            <motion.div
              animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute w-[90%] h-[90%] border border-white/5 rounded-full z-10"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 rounded-full border border-violet-500/10 rotate-45" />
              <div className="absolute inset-0 rounded-full border border-indigo-500/10 -rotate-45" />
            </motion.div>

            {/* Orbit 1: Thick Glass Ring */}
            <motion.div
              animate={{ rotateX: [0, 360], rotateY: [0, 360], rotateZ: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[80%] h-[80%] rounded-full border-[12px] border-white/5 bg-gradient-to-tr from-violet-500/10 to-transparent backdrop-blur-xl shadow-[inset_0_0_80px_rgba(139,92,246,0.15)] z-20"
              style={{ 
                borderRadius: "45% 55% 65% 35% / 40% 50% 60% 50%",
                transformStyle: "preserve-3d" 
              }}
            >
              <div className="absolute w-4 h-4 rounded-full bg-violet-400 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_#a78bfa]" />
            </motion.div>

            {/* Orbit 2: Inner Dense Purple Torus */}
            <motion.div
              animate={{ rotateX: [360, 0], rotateY: [0, 360], rotateZ: [360, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[65%] h-[65%] rounded-full border-[20px] border-indigo-500/20 bg-gradient-to-bl from-indigo-600/30 to-purple-500/30 backdrop-blur-2xl shadow-[0_0_50px_rgba(79,70,229,0.4)] z-30"
              style={{ 
                borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%",
                transformStyle: "preserve-3d" 
              }}
            />

            {/* Orbit 3: Fast Neon Accelerator Ring */}
            <motion.div
              animate={{ rotateX: [0, 360], rotateY: [360, 0], rotateZ: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute w-[85%] h-[85%] rounded-full border-t-[3px] border-r-[3px] border-fuchsia-400/80 shadow-[0_0_25px_rgba(217,70,239,0.6)] z-40"
              style={{ 
                borderRadius: "50%",
                transformStyle: "preserve-3d" 
              }}
            >
               <div className="absolute w-2 h-2 rounded-full bg-fuchsia-300 bottom-1/4 right-0 shadow-[0_0_15px_#f0abfc]" />
            </motion.div>
            
            {/* Orbit 4: Abstract Geometric Core Layer */}
            <motion.div
              animate={{ rotateX: [180, 540], rotateY: [180, 540], rotateZ: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[45%] h-[45%] rounded-full border-[8px] border-violet-400/50 bg-gradient-to-br from-violet-600/40 to-fuchsia-600/40 backdrop-blur-md mix-blend-screen z-50"
              style={{ 
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                transformStyle: "preserve-3d" 
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// Reusable Social Icon Component for cleaner code
function SocialIcon({ href, icon: Icon, color }: { href: string, icon: any, color: string }) {
  return (
    <a 
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noreferrer"
      className={`text-slate-400 transition-all duration-300 hover:scale-110 ${color}`}
    >
      <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
    </a>
  );
}