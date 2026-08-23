// components/sections/Experience.tsx
import { Briefcase, Monitor, Rocket, Building2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

const STYLE_MAP: Record<string, any> = {
  "Erthad Pvt Ltd": { icon: Rocket, bg: "bg-purple-500" },
  "GlobizHub Pvt Ltd": { icon: Briefcase, bg: "bg-blue-500" },
  "Maven Silicon & Indian Oil": { icon: Monitor, bg: "bg-emerald-500" }
};

const DEFAULT_STYLE = { icon: Building2, bg: "bg-slate-500" };

export function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <div id="experience" className="flex flex-col scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
        <h3 className="text-xl font-bold text-slate-900 tracking-wider uppercase">
          Experience
        </h3>
      </div>

      {/* Experience List */}
      <div className="flex flex-col gap-10">
        {experience.map((job, index) => {
          const style = STYLE_MAP[job.company] || DEFAULT_STYLE;
          const Icon = style.icon;

          return (
            <div key={job.id || index} className="flex gap-4 sm:gap-6">
              
              {/* Icon */}
              <div className="shrink-0 mt-1">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-sm ${style.bg}`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                    {job.role}
                  </h4>
                  <p className="text-base font-medium text-slate-600 mt-1">
                    {job.company}
                  </p>
                  <p className="text-sm font-semibold text-slate-400 mt-0.5">
                    {job.timeline}
                  </p>
                </div>
                
                {/* Main Description */}
                {job.description && (
                  <p className="text-base text-slate-700 leading-relaxed font-medium">
                    {job.description}
                  </p>
                )}

                {/* Bullet Points / Highlights */}
                {job.highlights && job.highlights.length > 0 && (
                  <ul className="space-y-2 mt-4">
                    {job.highlights.map((point, i) => {
                      const [title, ...rest] = point.split(':');
                      const hasColon = rest.length > 0;

                      return (
                        <li key={i} className="text-base text-slate-600 flex items-start gap-3">
                          <span className="text-slate-300 mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                          <span className="leading-relaxed">
                            {hasColon ? (
                              <>
                                <strong className="text-slate-800 font-semibold">{title}:</strong>{rest.join(':')}
                              </>
                            ) : (
                              point
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
  );
}