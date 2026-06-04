// components/sections/Hero.tsx
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Hero() {
  const { hero } = PORTFOLIO_DATA;

 
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center pt-28 md:pt-32 pb-16 overflow-hidden bg-[#050508] text-white selection:bg-violet-500/30">
      
      {/* --- STATIC DARK THEME BACKGROUND --- */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.12),rgba(255,255,255,0))] pointer-events-none z-0"></div>

      {/* --- MAIN CONTENT CENTER --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-12 w-full max-w-5xl mx-auto">

        {/* Dynamic Roles */}
      
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[9px] sm:text-[10px] md:text-xs font-sans tracking-[0.2em] sm:tracking-[0.25em] text-slate-400 uppercase font-semibold mb-8 md:mb-10 w-full">
           <span className="text-center">{hero.roles[0]}</span>
           <span className="text-violet-500/50 text-[10px] hidden sm:block">✦</span>
           <span className="text-center">{hero.roles[1]}</span>
        </div>

        {/* Dynamic Headline */}
        <h1 className="font-serif text-[11vw] sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7.5rem] leading-[1.1] md:leading-[1.05] tracking-tight mb-8 md:mb-10 w-full drop-shadow-lg">
          {hero.headline.map((word, i) => (
            <span
              key={i}
              className={`block ${
                i === 2 
                  ? "text-transparent bg-clip-text bg-gradient-to-b from-violet-200 via-violet-400 to-indigo-600" 
                  : "text-white"
              }`}
            >
              {word.toUpperCase()}
            </span>
          ))}
        </h1>

        {/* Dynamic Description */}
        <p className="max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed mb-10 md:mb-12 font-light px-4">
          {hero.description}
        </p>

        {/* Buttons & Social Links */}
        <div className="flex flex-col items-center gap-8 w-full">
          
          {/* Primary CTA */}
          <Button
            className="bg-white text-black hover:bg-slate-200 w-full sm:w-auto h-12 px-8 md:px-10 rounded-full font-semibold text-sm transition-colors"
            asChild
          >
            <a href="#projects">Explore Selected Works</a>
          </Button>

          {/* Social & Contact Icons */}
          <div className="flex items-center gap-6 md:gap-8 mt-2">
            <a 
              href="mailto:boraprantik0@gmail.com" 
              className="text-[#EA4335] hover:scale-110 hover:brightness-125 transition-all duration-300 drop-shadow-[0_0_10px_rgba(234,67,53,0.2)]"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </a>
            <a 
              href="tel:+919707514371"
              className="text-[#25D366] hover:scale-110 hover:brightness-125 transition-all duration-300 drop-shadow-[0_0_10px_rgba(37,211,102,0.2)]"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </a>
            <a 
              href="https://www.linkedin.com/in/prantik-bora-039a9a245/"
              target="_blank" 
              rel="noreferrer" 
              className="text-[#0A66C2] hover:scale-110 hover:brightness-125 transition-all duration-300 drop-shadow-[0_0_10px_rgba(10,102,194,0.2)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </a>
            <a 
              href="https://github.com/prantikbora"
              target="_blank" 
              rel="noreferrer" 
              className="text-white hover:scale-110 hover:brightness-90 transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}