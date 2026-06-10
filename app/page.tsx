// app/page.tsx
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#050508] text-slate-200 font-sans selection:bg-violet-500/30 relative overflow-hidden">
      {/* --- TOP NAVIGATION --- */}
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>

      {/* Clean, Minimalist Footer */}
      <footer className="border-t border-white/5 bg-[#030305] py-12 text-center text-slate-600 text-xs sm:text-sm px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-sans tracking-wider">
          <p>
            © {new Date().getFullYear()} PRANTIK BORA. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}