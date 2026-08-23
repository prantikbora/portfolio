// components/sections/Skills.tsx
import { PORTFOLIO_DATA } from "@/lib/data";
import { 
  Atom, 
  Smartphone, 
  Server, 
  Database, 
  Box, 
  Palette, 
  FileCode2, 
  Network, 
  Cpu, 
  Terminal,
  BarChart,
  Code2
} from "lucide-react";

// Visual mapping dictionary. This keeps Tailwind classes and Icon components out of your data file.
const SKILL_STYLES: Record<string, any> = {
  "Next.js & React": { icon: Atom, color: "text-cyan-500", bg: "bg-cyan-50", borderColor: "border-cyan-200" },
  "React Native (Expo)": { icon: Smartphone, color: "text-cyan-500", bg: "bg-cyan-50", borderColor: "border-cyan-200" },
  "Node.js": { icon: Server, color: "text-green-600", bg: "bg-green-50", borderColor: "border-green-200" },
  "Tailwind CSS": { icon: Palette, color: "text-sky-500", bg: "bg-sky-50", borderColor: "border-sky-200" },
  "PostgreSQL": { icon: Database, color: "text-blue-600", bg: "bg-blue-50", borderColor: "border-blue-200" },
  "Prisma": { icon: Database, color: "text-teal-600", bg: "bg-teal-50", borderColor: "border-teal-200" },
  "Tanstack": { icon: BarChart, color: "text-orange-500", bg: "bg-orange-50", borderColor: "border-orange-200" },
  "Python": { icon: FileCode2, color: "text-yellow-600", bg: "bg-yellow-50", borderColor: "border-yellow-200" },
  "Go": { icon: Terminal, color: "text-cyan-600", bg: "bg-cyan-50", borderColor: "border-cyan-200" },
  "Docker & WSL (Ubuntu)": { icon: Box, color: "text-blue-500", bg: "bg-blue-50", borderColor: "border-blue-200" },
  "System Design": { icon: Network, color: "text-purple-600", bg: "bg-purple-50", borderColor: "border-purple-200" },
  "VLSI Design": { icon: Cpu, color: "text-emerald-600", bg: "bg-emerald-50", borderColor: "border-emerald-200" },
  "Microcontrollers": { icon: Cpu, color: "text-emerald-600", bg: "bg-emerald-50", borderColor: "border-emerald-200" },
  "C/C++": { icon: FileCode2, color: "text-indigo-600", bg: "bg-indigo-50", borderColor: "border-indigo-200" },
};

// Fallback style if you add a skill in data.ts but forget to add it to the mapping above
const DEFAULT_STYLE = { icon: Code2, color: "text-slate-600", bg: "bg-slate-100", borderColor: "border-slate-200" };

export function Skills() {
  const { web, core } = PORTFOLIO_DATA.skills;
  
  // Flatten the arrays into a single list for the unified flex layout
  const allSkills = [...web, ...core];

  return (
    <section id="skills" className="w-full scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
        <h3 className="text-lg font-bold text-slate-900 tracking-wider uppercase">
          Technical Arsenal
        </h3>
      </div>

      {/* Skills Flex Container */}
      <div className="flex flex-wrap gap-4">
        {allSkills.map((skillName, index) => {
          const style = SKILL_STYLES[skillName] || DEFAULT_STYLE;
          const Icon = style.icon;
          
          return (
            <div 
              key={index} 
              className={`flex items-center gap-3 px-5 py-3 bg-white border ${style.borderColor} rounded-xl shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className={`p-1.5 rounded-md ${style.bg}`}>
                <Icon className={`w-5 h-5 ${style.color}`} strokeWidth={2} />
              </div>
              <span className="font-semibold text-slate-700 text-sm">
                {skillName}
              </span>
            </div>
          );
        })}
      </div>

    </section>
  );
}