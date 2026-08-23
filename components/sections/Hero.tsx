// components/sections/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { Calendar, Briefcase, MapPin, ArrowRight, MessageSquare, Linkedin, Github, Mail, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    // Reduced padding-top to pull the entire hero section closer to the navbar
    <section id="home" className="w-full pt-12 pb-16 lg:pt-16 lg:pb-24 scroll-mt-20">
      
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 w-full">
        
        {/* Left Column: Content */}
        <div className="w-full lg:w-[55%] space-y-8 z-10">
          <div className="space-y-4">
            <p className="text-blue-600 font-semibold text-lg lg:text-xl">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Prantik Bora
            </h1>
            <div className="text-lg sm:text-xl text-slate-700 font-medium flex flex-wrap items-center gap-2">
              Software Engineer 
              <span className="text-blue-600 hidden sm:inline">•</span> 
              <span className="sm:hidden w-full"></span>
              Electronics & Telecommunication Engineer
            </div>
            <p className="text-slate-600 leading-relaxed max-w-xl text-base sm:text-lg">
              I build scalable, user-centric web applications and smart solutions that solve real-world problems using modern technologies.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            <div className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Co-founder & MD</h3>
                <p className="text-xs text-slate-500 mt-0.5">Erthad Private Limited</p>
                <p className="text-xs text-slate-400 mt-1">May 22, 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Software Engineer-I</h3>
                <p className="text-xs text-slate-500 mt-0.5">GlobizHub Pvt Ltd</p>
                <p className="text-xs text-slate-400 mt-1">2025 - May 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Based in</h3>
                <p className="text-xs text-slate-500 mt-0.5">Guwahati, Assam, India</p>
              </div>
            </div>
          </div>

          {/* Actions & Socials */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="#projects" 
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link 
              href="#contact" 
              className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
            >
              Contact Me
              <MessageSquare className="w-4 h-4" />
            </Link>
            
            <div className="flex items-center gap-3 ml-auto sm:ml-4">
              <SocialLink href="https://linkedin.com/in/prantik-bora-039a9a245/" icon={Linkedin} />
              <SocialLink href="https://github.com/prantikbora" icon={Github} />
              <SocialLink href="mailto:boraprantik0@gmail.com" icon={Mail} />
              <SocialLink href="https://wa.me/919707514371" icon={MessageCircle} />
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end mt-12 lg:mt-0 lg:-translate-y-8 xl:-translate-y-12">
          
          <div className="relative w-full max-w-[500px] xl:max-w-[650px] aspect-square sm:aspect-[4/5] [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
            <Image 
              src="/hero-portrait.png" 
              alt="Prantik Bora"
              fill
              className="object-contain object-bottom z-10 scale-110 origin-bottom"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer" 
      className="p-2.5 rounded-full border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-all bg-white shadow-sm"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}