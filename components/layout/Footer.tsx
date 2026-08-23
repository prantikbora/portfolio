// components/layout/Footer.tsx
import { Phone, Mail, MapPin, Linkedin, Github, Heart, Instagram, Twitter, Facebook } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pb-8 mt-12">
      
      {/* Top CTA Block: Applied a soft blue-to-indigo gradient and tinted the border */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50 rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6 mb-8 shadow-sm">
        <div className="text-center lg:text-left">
          <h3 className="text-2xl font-bold text-slate-900">Let's build something amazing together!</h3>
          <p className="text-slate-600 mt-2 font-medium">I'm open to collaborations and exciting opportunities.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-3 bg-white/50 px-4 py-2 rounded-lg shadow-sm border border-white/60">
            <Phone className="w-5 h-5 text-blue-600" />
            <span>+91 97075-14371</span>
          </div>
          <div className="flex items-center gap-3 bg-white/50 px-4 py-2 rounded-lg shadow-sm border border-white/60">
            <Mail className="w-5 h-5 text-blue-600" />
            <a href="mailto:boraprantik0@gmail.com" className="hover:text-blue-600 transition-colors">
              boraprantik0@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 bg-white/50 px-4 py-2 rounded-lg shadow-sm border border-white/60">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span>Assam, India</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Block */}
      <div className="flex flex-col md:flex-row items-center justify-between text-sm font-medium text-slate-500 gap-6">
        <p>© {new Date().getFullYear()} Prantik Bora. All rights reserved.</p>
        
        {/* Social Icons Grid */}
        <div className="flex flex-wrap justify-center items-center gap-3">
          <SocialLink href="https://www.linkedin.com/in/prantik-bora-039a9a245/" icon={Linkedin} label="LinkedIn" />
          <SocialLink href="https://github.com/prantikbora" icon={Github} label="GitHub" />
          <SocialLink href="https://x.com/prantikbora15" icon={Twitter} label="Twitter" />
          <SocialLink href="https://www.instagram.com/prantik_bora1234?igsh=NmNqcmxwcGxnNGFl" icon={Instagram} label="Instagram" />
          <SocialLink href="https://www.facebook.com/share/1DMggTjzYD/" icon={Facebook} label="Facebook" />
        </div>

        <p className="flex items-center gap-1.5">
          Built with passion and purpose. 
          <Heart className="w-4 h-4 text-blue-600 fill-blue-600" />
        </p>
      </div>
    </footer>
  );
}

// Reusable micro-component keeps your JSX clean and DRY
function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <Link 
      href={href} 
      target="_blank"
      rel="noreferrer"
      className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm"
      aria-label={label}
    >
      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
    </Link>
  );
}