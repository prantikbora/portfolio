// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Experience", href: "#experience" },
  { name: "Selected Works", href: "#projects" },
  { name: "Technical Arsenal", href: "#skills" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {/* --- DESKTOP FLOATING PILL & MOBILE TRANSPARENT HEADER --- */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed z-50 transition-all duration-500 
          /* Mobile Base: 100% Transparent, no borders, floating elements */
          w-full top-0 left-0 bg-transparent pt-6 pb-4 px-6
          
          /* Desktop Overlay (sm+): Floating pill design */
          sm:w-[90%] sm:max-w-5xl sm:left-1/2 sm:-translate-x-1/2 sm:rounded-full sm:px-8
          ${
          scrolled 
            ? "sm:top-4 sm:bg-[#0a0a0f]/90 sm:backdrop-blur-xl sm:border sm:border-white/10 sm:py-4 sm:shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
            : "sm:top-6 sm:bg-white/[0.02] sm:backdrop-blur-md sm:border sm:border-white/5 sm:py-4 sm:shadow-xl"
        }`}
      >
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          
          {/* Brand Logo */}
          <a 
            href="#" 
            className="font-serif text-xl sm:text-2xl text-white tracking-wide hover:opacity-80 transition-opacity z-50 relative"
          >
            Prantik Bora<span className="text-violet-500">.</span>
          </a>

          {/* Desktop Links (Hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-xs font-sans tracking-[0.2em] text-slate-400 uppercase font-semibold hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Toggle (Visible only on mobile/tablet) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white transition-colors z-50 relative p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </motion.header>

      {/* --- MOBILE FULLSCREEN MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#050508] flex flex-col justify-center items-center px-6"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.15),rgba(255,255,255,0))] pointer-events-none z-0"></div>

            <nav className="flex flex-col items-center gap-10 relative z-10">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="font-serif text-4xl sm:text-5xl text-slate-200 hover:text-white hover:scale-105 transition-all duration-300 tracking-wide"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-12 flex flex-col items-center gap-4"
            >
              <span className="text-[10px] font-sans tracking-[0.3em] text-slate-500 uppercase font-semibold">
                Say Hello
              </span>
              <a href="mailto:boraprantik0@gmail.com" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">
                boraprantik0@gmail.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}