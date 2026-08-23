// components/sections/Projects.tsx
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="w-full scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
          <h3 className="text-lg font-bold text-slate-900 tracking-wider uppercase">
            Featured Projects
          </h3>
        </div>
        
        <Link 
          href="#projects" 
          className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
        >
          View All Projects
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Projects Grid - Set to 3 columns to match your 3 data items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const Icon = project.icon;
          // Don't render the "Visit Site" link if it's an internal/placeholder link
          const isInternal = project.link === "#";
          
          return (
            <div 
              key={project.id || index} 
              className="flex flex-col bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full"
            >
              {/* Top Row: Icon */}
              <div className="mb-4">
                <Icon className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h4 className="text-base font-bold text-slate-900 mb-2 leading-tight">
                {project.title}
              </h4>
              
              <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack & Link Container */}
              <div className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-2">
                  {/* Updated from project.tech to project.techStack to match your data.ts */}
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* External Link Rendering */}
                {!isInternal && project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors pt-2"
                  >
                    Visit Site
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
    </section>
  );
}