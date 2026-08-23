// app/page.tsx
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { Footer } from "@/components/layout/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500/30">
      <Navbar />

      <main className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 space-y-24 lg:space-y-32 py-12">
        <Hero />
        
        {/* Removed the restrictive grid wrapper. About component handles its own internal layout. */}
        <About />

        <Journey />
        
        <Skills />
        
        <Projects />

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start pb-20">
          <Experience />
          <Education />
          <Achievements />
        </section>
      </main>

      <Footer />
    </div>
  );
}