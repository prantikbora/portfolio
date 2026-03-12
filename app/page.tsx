"use client";

import React, { useEffect, useRef } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Cpu,
  ChevronRight,
  Server,
  Database,
  Mail,
  Phone
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Animation Variants for reusability
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Portfolio() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Playback started successfully
        }).catch((error) => {
          console.warn("Autoplay paused by browser (Battery Saver or Autoplay Policy).");
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-200 font-sans selection:bg-violet-500/30 relative overflow-hidden">
      <Head>
        <title>Prantik Bora | Software Engineer</title>
      </Head>

      {/* --- AMBIENT ANIMATED BACKGROUND (PREMIUM AURORA EFFECT) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-900/20 rounded-full mix-blend-screen filter blur-[150px] animate-pulse duration-10000"></div>
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-900/10 rounded-full mix-blend-screen filter blur-[150px] animate-pulse duration-7000"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-[30%] left-[60%] w-[30%] h-[30%] bg-indigo-900/15 rounded-full mix-blend-screen filter blur-[120px] animate-pulse duration-10000"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* --- ANIMATED NAV --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/70 backdrop-blur-xl border-b border-white/5 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter text-white"
          >
            Prantik Bora<span className="text-violet-500">.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-5 items-center"
          >
            <a
              href="https://github.com/prantikbora"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/prantik-bora-039a9a245/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <Button
              className="hidden sm:flex bg-white/10 hover:bg-white/20 text-white border-none backdrop-blur-md transition-all"
              size="sm"
              asChild
            >
              <a href="#projects">View Work</a>
            </Button>
          </motion.div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* --- HERO SECTION WITH VIDEO BACKGROUND --- */}
        <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden mb-24 mt-16 bg-black">
          
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            /* mix-blend-luminosity removed to preserve original video color */
            className="absolute inset-0 w-full h-full object-cover opacity-40 z-10 pointer-events-none"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/80 to-[#0a0a0f] z-20 pointer-events-none"></div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-30 max-w-5xl mx-auto px-6 text-center text-white"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="px-4 py-1.5 mb-8 text-violet-200 bg-violet-950/40 border border-violet-800/30 backdrop-blur-md text-sm font-medium tracking-wide shadow-2xl shadow-violet-900/20">
                Software Engineer-I at GlobizHub
              </Badge>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-8xl font-extrabold tracking-tight leading-tight mb-6 text-white drop-shadow-2xl"
            >
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-indigo-400">
                Digital Realities.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-10"
            >
              I bridge the gap between complex hardware systems and modern web
              interfaces. Specializing in full-stack architecture, React, and
              embedded systems.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white w-full sm:w-auto h-14 px-8 border-none shadow-lg shadow-violet-900/20 hover:scale-[1.02] transition-all duration-300 rounded-full font-semibold"
                asChild
              >
                <a href="#projects">Explore Projects</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white bg-white/5 hover:bg-white/10 border-white/10 w-full sm:w-auto h-14 px-8 group backdrop-blur-md hover:scale-[1.02] transition-all duration-300 rounded-full"
                asChild
              >
                <a href="tel:+919707514371">
                  Contact Me{" "}
                  <ChevronRight
                    className="ml-2 group-hover:translate-x-1 text-slate-400 transition-transform"
                    size={18}
                  />
                </a>
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center mt-12 text-slate-400 text-sm font-medium">
              <a href="mailto:boraprantik0@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                <Mail size={16} className="text-violet-400" /> boraprantik0@gmail.com
              </a>
              <span className="hidden sm:block text-slate-800">|</span>
              <a href="tel:+919707514371" className="hover:text-white transition-colors flex items-center gap-2">
                <Phone size={16} className="text-violet-400" /> +91 97075-14371
              </a>
            </motion.div>
          </motion.div>
        </section>

        <div className="max-w-5xl mx-auto px-6 pb-20">
          {/* --- EXPERIENCE SECTION --- */}
          <motion.section
            id="experience"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32 scroll-mt-24"
          >
            <div className="flex items-center gap-6 mb-16">
              <h3 className="text-4xl font-black text-white tracking-tight">Trajectory</h3>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>

            <div className="relative border-l border-white/10 ml-3 md:ml-4 space-y-16">
              <motion.div
                whileHover={{ x: 8 }}
                className="relative pl-8 md:pl-14 transition-transform duration-300"
              >
                <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-[8.5px] top-1.5 shadow-[0_0_15px_rgba(139,92,246,0.6)] flex items-center justify-center ring-4 ring-[#0a0a0f]"></div>
                <p className="text-sm font-bold text-violet-400 uppercase tracking-widest mb-2">
                  2025 — Present
                </p>
                <h4 className="text-2xl font-bold text-white mb-1">
                  Software Engineer-I
                </h4>
                <p className="text-slate-400 font-medium mb-6">
                  GlobizHub Pvt Ltd
                </p>
                <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl shadow-xl backdrop-blur-sm space-y-4 hover:bg-white/[0.04] transition-colors">
                  <p className="text-slate-300 leading-relaxed flex gap-4 items-start">
                    <Code size={20} className="text-violet-400 shrink-0 mt-1" />{" "}
                    <span>Led full-stack development of a multi-role food delivery platform using mono-repo architecture.</span>
                  </p>
                  <p className="text-slate-300 leading-relaxed flex gap-4 items-start">
                    <Database size={20} className="text-violet-400 shrink-0 mt-1" />{" "}
                    <span>Leading the development of a scalable library platform with automated fine tracking and inventory control.</span>
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="relative pl-8 md:pl-14 transition-transform duration-300 opacity-70 hover:opacity-100"
              >
                <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[6.5px] top-2 ring-4 ring-[#0a0a0f]"></div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Previous
                </p>
                <h4 className="text-xl font-bold text-slate-200 mb-1">
                  VLSI Design Intern
                </h4>
                <p className="text-slate-400">Maven Silicon</p>
              </motion.div>
            </div>
          </motion.section>

          {/* --- PROJECTS GRID --- */}
          <motion.section
            id="projects"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32 scroll-mt-24"
          >
            <div className="flex items-center gap-6 mb-16">
              <h3 className="text-4xl font-black text-white tracking-tight">Selected Works</h3>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden border-white/5 bg-white/[0.02] backdrop-blur-md shadow-2xl hover:border-violet-500/30 transition-all duration-500 h-full flex flex-col rounded-3xl">
                  <div className="h-52 bg-[#050508] relative overflow-hidden flex items-center justify-center border-b border-white/5">
                    <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-900/30 via-transparent to-transparent group-hover:scale-110 transition-transform duration-700"></div>
                    <Server
                      size={56}
                      className="text-violet-500/40 group-hover:text-violet-400 transition-colors duration-500 relative z-10"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col flex-1">
                    <h4 className="text-xl font-bold mb-3 text-white">
                      Shankardev Shishu Niketan
                    </h4>
                    <p className="text-sm text-slate-400 mb-8 flex-1 leading-relaxed">
                      Engineered a high-performance portal optimizing SSR and dynamic SEO for top-ranking Google Search Console visibility.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      <Badge variant="secondary" className="bg-white/5 text-slate-300 hover:bg-white/10 font-normal">Next.js</Badge>
                      <Badge variant="secondary" className="bg-white/5 text-slate-300 hover:bg-white/10 font-normal">Prisma</Badge>
                      <Badge variant="secondary" className="bg-white/5 text-slate-300 hover:bg-white/10 font-normal">PostgreSQL</Badge>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-white/10 hover:bg-violet-600 hover:border-violet-600 transition-colors bg-transparent text-white rounded-xl h-12"
                      asChild
                    >
                      <a href="https://www.ssnbatadrava.in/" target="_blank" rel="noreferrer">
                        View Live Site <ExternalLink size={16} className="ml-2 opacity-70" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden border-white/5 bg-white/[0.02] backdrop-blur-md shadow-2xl hover:border-fuchsia-500/30 transition-all duration-500 h-full flex flex-col rounded-3xl">
                  <div className="h-52 bg-[#050508] relative overflow-hidden flex items-center justify-center border-b border-white/5">
                    <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-900/30 via-transparent to-transparent group-hover:scale-110 transition-transform duration-700"></div>
                    <Code
                      size={56}
                      className="text-fuchsia-500/40 group-hover:text-fuchsia-400 transition-colors duration-500 relative z-10"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col flex-1">
                    <h4 className="text-xl font-bold mb-3 text-white">
                      Codquiskill Portal
                    </h4>
                    <p className="text-sm text-slate-400 mb-8 flex-1 leading-relaxed">
                      Developing and deploying the official web presence and educational platform for Codquiskill institute.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      <Badge variant="secondary" className="bg-white/5 text-slate-300 hover:bg-white/10 font-normal">Next.js</Badge>
                      <Badge variant="secondary" className="bg-white/5 text-slate-300 hover:bg-white/10 font-normal">React</Badge>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-white/10 hover:bg-fuchsia-600 hover:border-fuchsia-600 transition-colors bg-transparent text-white rounded-xl h-12"
                      asChild
                    >
                      <a href="https://www.codquiskill.com/" target="_blank" rel="noreferrer">
                        View Live Site <ExternalLink size={16} className="ml-2 opacity-70" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden border-white/5 bg-white/[0.02] backdrop-blur-md shadow-2xl hover:border-indigo-500/30 transition-all duration-500 h-full flex flex-col rounded-3xl">
                  <div className="h-52 bg-[#050508] relative overflow-hidden flex items-center justify-center border-b border-white/5">
                    <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent group-hover:scale-110 transition-transform duration-700"></div>
                    <Cpu
                      size={56}
                      className="text-indigo-500/40 group-hover:text-indigo-400 transition-colors duration-500 relative z-10"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col flex-1">
                    <h4 className="text-xl font-bold mb-3 text-white">
                      Healthcare Companion Robot
                    </h4>
                    <p className="text-sm text-slate-400 mb-8 flex-1 leading-relaxed">
                      Developed a microcontroller-based physical interface, showcasing end-to-end hardware and embedded systems engineering.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      <Badge variant="outline" className="border-white/10 text-slate-400 font-normal">Robotics</Badge>
                      <Badge variant="outline" className="border-white/10 text-slate-400 font-normal">Embedded Systems</Badge>
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full border border-white/5 bg-white/[0.01] text-slate-500 hover:bg-white/5 hover:text-slate-300 cursor-default rounded-xl h-12"
                    >
                      Internal Project
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.section>

          {/* --- TECHNICAL ARSENAL --- */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="p-10 md:p-20 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 text-white relative overflow-hidden shadow-2xl backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -right-32 opacity-[0.03] text-violet-500 pointer-events-none"
            >
              <Cpu size={500} />
            </motion.div>

            <h3 className="text-4xl font-black mb-16 relative z-10 text-white tracking-tight">
              Technical Arsenal
            </h3>

            <div className="grid md:grid-cols-2 gap-16 relative z-10">
              <div>
                <h4 className="flex items-center gap-4 text-xl font-bold text-violet-400 mb-8">
                  <div className="p-2 bg-violet-500/10 rounded-lg"><Code size={24} /></div> Web Stack
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Next.js",
                    "React",
                    "Node.js",
                    "React Native",
                    "Tailwind CSS",
                    "PostgreSQL",
                    "Prisma",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-5 py-2.5 bg-black/40 rounded-xl text-sm font-medium border border-white/5 hover:border-violet-500/50 hover:text-violet-300 hover:bg-violet-500/10 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="flex items-center gap-4 text-xl font-bold text-fuchsia-400 mb-8">
                  <div className="p-2 bg-fuchsia-500/10 rounded-lg"><Cpu size={24} /></div> Core Engineering
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Python",
                    "System Design",
                    "VLSI Design",
                    "Microcontrollers",
                    "C/C++",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-5 py-2.5 bg-black/40 rounded-xl text-sm font-medium border border-white/5 hover:border-fuchsia-500/50 hover:text-fuchsia-300 hover:bg-fuchsia-500/10 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <footer className="border-t border-white/5 bg-[#050508] py-16 text-center text-slate-500 text-sm relative z-10">
        <p className="font-medium tracking-wide">
          © {new Date().getFullYear()} Prantik Bora. All rights reserved.
        </p>
        <p className="mt-3 opacity-60">
          Engineered with Next.js, Framer Motion & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}