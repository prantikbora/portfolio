
import { PORTFOLIO_DATA } from "@/lib/data";

export function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="w-full bg-[#050508] text-white py-24 sm:py-32 selection:bg-violet-500/30 border-t border-white/5">
      <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-24 sm:mb-32">
          <h2 className="text-xs sm:text-sm font-sans tracking-[0.3em] text-slate-500 uppercase font-semibold">
            Trajectory
          </h2>
          <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-4 tracking-wide">
            Professional <span className="text-violet-400 italic">Experience.</span>
          </h3>
        </div>

        
        <div className="flex flex-col">
          {experience.map((job, index) => {
            const isLast = index === experience.length - 1;
            
            return (
              <div 
                key={job.id} 
                className="flex flex-col md:grid md:grid-cols-12 group"
              >
                
                {/* Timeline (Date) */}
                
                <div className="md:col-span-3 lg:col-span-3 md:pr-12 md:text-right pt-2 mb-6 md:mb-0">
                  <span className="text-xs sm:text-sm font-sans tracking-[0.2em] text-slate-500 uppercase font-semibold group-hover:text-violet-400 transition-colors duration-300">
                    {job.timeline}
                  </span>
                </div>

                {/* Details & Trajectory Line */}
                
                <div className={`md:col-span-9 lg:col-span-9 flex flex-col relative border-l border-white/10 pl-8 md:pl-12 ${isLast ? 'pb-0' : 'pb-24 sm:pb-32'}`}>
                  
                  {/* Glowing Timeline Node / Dot */}
                  <div className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.8)] transition-all duration-300 group-hover:scale-150 group-hover:bg-fuchsia-400 z-10"></div>
                  
                  {/* Scaled-up Typography */}
                  <h4 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-wide mb-4 text-slate-200">
                    {job.role}
                  </h4>
                  <span className="text-sm sm:text-base font-sans tracking-[0.2em] text-violet-500 uppercase font-semibold mb-8 block">
                    {job.company}
                  </span>
                  
                  <p className="text-base sm:text-lg lg:text-xl text-slate-400 font-light leading-relaxed mb-10 max-w-5xl">
                    {job.description}
                  </p>

                  {/* Sub-projects / Highlights */}
                  {job.highlights.length > 0 && (
                    <ul className="flex flex-col gap-5 max-w-5xl">
                      {job.highlights.map((highlight, idx) => {
                        const [projectName, ...rest] = highlight.split(":");
                        return (
                          <li key={idx} className="text-base lg:text-lg text-slate-400 font-light flex items-start">
                            <span className="text-violet-500 mr-4 mt-2 text-[12px]">♦</span>
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
            );
          })}
        </div>

      </div>
    </section>
  );
}