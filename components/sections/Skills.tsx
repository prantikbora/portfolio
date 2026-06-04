
import { Code2, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Skills() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="w-full bg-[#050508] text-white py-24 sm:py-32 border-t border-white/5">
      <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 flex flex-col items-center text-center">
          <h2 className="text-[10px] sm:text-xs font-sans tracking-[0.3em] text-slate-500 uppercase font-semibold">
            Capabilities
          </h2>
          <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-4 tracking-wide">
            Technical <span className="text-violet-400 italic">Arsenal.</span>
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          
          {/* Web Stack Column */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
              <div className="p-3 bg-white/5 rounded-xl text-violet-400">
                <Code2 size={24} strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl tracking-wide text-slate-200">
                Web Stack
              </h4>
            </div>
            
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {skills.web.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="text-xs sm:text-sm font-sans tracking-wider px-5 py-2.5 rounded-full border border-white/10 bg-[#0a0a0f] text-slate-400 hover:border-violet-500/50 hover:text-violet-200 hover:bg-violet-500/10 transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(139,92,246,0.1)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Core Engineering Column */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
              <div className="p-3 bg-white/5 rounded-xl text-fuchsia-400">
                <Cpu size={24} strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl tracking-wide text-slate-200">
                Core Engineering
              </h4>
            </div>
            
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {skills.core.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="text-xs sm:text-sm font-sans tracking-wider px-5 py-2.5 rounded-full border border-white/10 bg-[#0a0a0f] text-slate-400 hover:border-fuchsia-500/50 hover:text-fuchsia-200 hover:bg-fuchsia-500/10 transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(217,70,239,0.1)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}