// components/sections/Education.tsx
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <div id="education" className="flex flex-col scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
        <h3 className="text-xl font-bold text-slate-900 tracking-wider uppercase">
          Education & Certifications
        </h3>
      </div>

      {/* Education List */}
      <div className="flex flex-col gap-8">
        
        {/* B.Tech */}
        <div className="flex gap-4 sm:gap-6">
          <div className="shrink-0 mt-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-purple-100 text-purple-600 shadow-sm">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
              B.Tech in Electronics & Telecommunication Engineering
            </h4>
            <p className="text-base font-medium text-slate-600 mt-1">
              Barak Valley Engineering College
            </p>
            {/* Fixed the incorrect 2020-2025 date */}
            <p className="text-sm font-semibold text-slate-400 mt-0.5">
              2020 – 2024
            </p>
            <p className="text-base font-bold text-slate-700 mt-2">
              CGPA: 7.58
            </p>
          </div>
        </div>

        {/* Diploma */}
        <div className="flex gap-4 sm:gap-6">
          <div className="shrink-0 mt-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-blue-100 flex items-center justify-center text-blue-600 bg-white shadow-sm">
              <Award className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
              Diploma in Computer Education
            </h4>
            {/* FIXME: "Computer Education" is not a school. Put the real institution name here. */}
            <p className="text-base font-medium text-slate-600 mt-1 text-red-500">
              [Insert Actual Institution Name]
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}