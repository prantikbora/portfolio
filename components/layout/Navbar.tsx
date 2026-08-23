// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState("#home");

  // Handle scroll for border shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md ${
        scrolled ? "border-b border-slate-200 shadow-sm" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xl leading-none">
              P
            </div>
            <Link href="/" className="font-bold text-xl tracking-tight text-slate-900 uppercase">
              Prantik Bora
            </Link>
          </div>

          {/* Desktop Navigation - Pushed to the right now that CTA is gone */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActivePath(link.href)}
                className={`text-sm font-semibold transition-colors py-2 relative ${
                  activePath === link.href ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {link.name}
                {/* Active Underline Indicator */}
                {activePath === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-t-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white border-t border-slate-100 overflow-y-auto">
          <nav className="flex flex-col p-4 gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActivePath(link.href);
                  setIsOpen(false);
                }}
                className={`p-4 rounded-xl font-semibold text-base transition-colors ${
                  activePath === link.href
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}