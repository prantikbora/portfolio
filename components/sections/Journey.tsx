// components/sections/Journey.tsx
import { GraduationCap, Code2, Briefcase, Building2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Journey() {
  const { experience } = PORTFOLIO_DATA;

  // We map the raw data from data.ts to the UI-specific requirements of this component.
  // Note: Your B.Tech is hardcoded here because education usually lives in a separate data array.
  const JOURNEY_STEPS = [
    {
      date: "2020 – 2024",
      title: "B.Tech in ECE",
      institution: "Barak Valley Engineering College",
      detail: "CGPA: 7.58",
      icon: GraduationCap,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      // Pulling from the Maven Silicon entry we fixed earlier
      date: experience[2]?.timeline || "July 2023 – Aug 2023",
      title: "VLSI Intern",
      institution: "Maven Silicon",
      detail: "(VLSI Design)",
      icon: Code2,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      // Pulling from the GlobizHub entry
      date: experience[1]?.timeline || "Oct 2025 – May 2026",
      title: experience[1]?.role || "Software Engineer-I",
      institution: experience[1]?.company || "GlobizHub Pvt Ltd",
      detail: "Guwahati, Assam",
      icon: Briefcase,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      // Pulling from the Erthad entry
      date: experience[0]?.timeline || "May 2026 – Present",
      title: experience[0]?.role || "Co-founder & MD",
      institution: experience[0]?.company || "Erthad Private Limited",
      detail: "Building the Future",
      icon: Building2,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section id="journey" className="w-full scroll-mt-24">
      
      {/* Section Header */}
      <h3 className="text-lg font-bold text-slate-900 tracking-wider uppercase mb-12 text-center md:text-left">
        MY JOURNEY
      </h3>

      {/* Timeline Container */}
      <div className="relative w-full max-w-5xl mx-auto md:mx-0">
        
        {/* Horizontal Connecting Line (Desktop Only) */}
        <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-slate-200 border-t-2 border-dashed border-slate-300 z-0"></div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
          {JOURNEY_STEPS.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                
                {/* Icon Wrapper */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm border-[4px] border-white transition-transform group-hover:scale-110 ${step.iconBg} ${step.iconColor}`}>
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </div>
                
                {/* Content */}
                <div className="flex flex-col items-center bg-white/50 px-2 py-1 rounded-lg">
                  <span className="text-sm font-bold text-slate-800 mb-2">
                    {step.date}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm font-medium text-slate-600 mb-1">
                    {step.institution}
                  </p>
                  <p className="text-xs font-semibold text-slate-500">
                    {step.detail}
                  </p>
                </div>

                {/* Vertical Connecting Line (Mobile Only) */}
                {index !== JOURNEY_STEPS.length - 1 && (
                  <div className="md:hidden w-px h-12 bg-slate-300 mt-6 border-l-2 border-dashed border-slate-300"></div>
                )}
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}