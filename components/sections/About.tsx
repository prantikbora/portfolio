// components/sections/About.tsx
import Image from "next/image";
import { User, BadgeCheck, Rocket, Heart, Trophy, Target } from "lucide-react";

export function About() {
  return (
    <div id="about" className="w-full scroll-mt-24">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 w-full">
        
        {/* Left Column: About Me */}
        <div className="w-full lg:w-[60%] space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <User className="w-7 h-7 text-blue-600" strokeWidth={2} />
            <h2 className="text-xl font-bold text-slate-900 uppercase tracking-widest">About Me</h2>
          </div>
          
          {/* Increased main paragraph text to text-lg */}
          <div className="space-y-5 text-slate-600 leading-[1.8] text-lg">
            <p>
              B.Tech graduate in Electronics and Telecommunication Engineering with a strong foundation in software development and embedded systems. I enjoy building modern, responsive and scalable applications with clean code and great user experience. I also have a keen interest in electronics and VLSI technologies.
            </p>
            <p>
              I believe in continuous learning, building solutions that create impact, and growing together through innovation and collaboration.
            </p>
          </div>

          {/* Stats Grid - Scaled up numbers and labels */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-8 border-t border-slate-100">
            <div className="flex flex-col items-start">
              <BadgeCheck className="w-7 h-7 text-blue-600 mb-3" strokeWidth={1.5} />
              <span className="text-3xl font-bold text-slate-900 mb-1 leading-none">2+</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-[1.3]">
                Years<br />Experience
              </span>
            </div>
            
            <div className="flex flex-col items-start">
              <Rocket className="w-7 h-7 text-blue-600 mb-3" strokeWidth={1.5} />
              <span className="text-3xl font-bold text-slate-900 mb-1 leading-none">10+</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-[1.3]">
                Projects<br />Completed
              </span>
            </div>
            
            <div className="flex flex-col items-start">
              <Heart className="w-7 h-7 text-red-500 mb-3" strokeWidth={1.5} />
              <span className="text-3xl font-bold text-slate-900 mb-1 leading-none">100%</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-[1.3]">
                Commitment
              </span>
            </div>
            
            <div className="flex flex-col items-start">
              <Trophy className="w-7 h-7 text-blue-600 mb-3" strokeWidth={1.5} />
              <span className="text-base font-bold text-slate-900 mb-1 mt-1.5 leading-none">Problem</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-[1.3]">
                Solver
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Erthad Private Limited Card */}
        <div className="w-full lg:w-[35%] flex lg:justify-end">
          <a 
            href="https://erthad.com/" 
            target="_blank" 
            rel="noreferrer"
            className="block w-full max-w-[480px] bg-white border border-slate-100 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-14 h-14 shrink-0">
                <Image 
                  src="/logo.png" 
                  alt="Erthad Private Limited Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight leading-none mb-1">
                  Erthad
                </h3>
                <p className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase leading-none">
                  Private Limited
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-slate-900 leading-tight">
                  Co-founder &<br />Managing Director
                </h4>
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mt-3">
                  Founded on May 22, 2026
                </div>
              </div>

              {/* Description text bumped to text-base */}
              <p className="text-slate-600 text-base leading-relaxed">
                Erthad Private Limited is committed to building digital solutions and smart systems that empower businesses and create real-world impact.
              </p>

              <div className="flex items-start gap-3 pt-6 border-t border-slate-100">
                <Target className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" strokeWidth={2} />
                <div>
                  <h5 className="font-bold text-slate-900 text-base">Our Vision</h5>
                  <p className="text-slate-500 text-base mt-0.5 leading-relaxed">
                    Innovate, collaborate, grow.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}