// components/sections/Achievements.tsx
import { Target, Users, Puzzle } from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "Engineering Projects",
    description: "Developed a healthcare companion robot and a microcontroller-based irrigation system.",
    icon: Target,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50"
  },
  {
    title: "Leadership",
    description: "Co-founder & MD of Erthad Private Limited, leading product development and innovation.",
    icon: Users,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    title: "Problem Solver",
    description: "Passionate about solving real-world problems through technology and innovation.",
    icon: Puzzle,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50"
  }
];

export function Achievements() {
  return (
    <div id="achievements" className="flex flex-col scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
        <h3 className="text-xl font-bold text-slate-900 tracking-wider uppercase">
          Key Achievements
        </h3>
      </div>

      {/* Achievements List */}
      <div className="flex flex-col gap-8">
        {ACHIEVEMENTS.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex gap-4 sm:gap-6">
              
              {/* Icon */}
              <div className="shrink-0 mt-0.5">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center ${item.bgColor}`}>
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${item.iconColor}`} strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <div>
                <h4 className="text-lg font-bold text-slate-900 leading-tight">
                  {item.title}
                </h4>
                <p className="text-base text-slate-600 mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
            </div>
          );
        })}
      </div>
      
    </div>
  );
}