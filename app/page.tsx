import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Cpu, BookOpen, ChevronRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-100">
      <Head>
        <title>Prantik Bora | Software Engineer</title>
      </Head>

      {/* --- ANIMATED NAV --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-xl font-bold tracking-tighter text-blue-600"
          >
            PB.
          </motion.h1>
          <div className="flex gap-5 items-center">
            <a href="https://github.com/prantikbora" target="_blank" className="text-slate-500 hover:text-blue-600 transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/prantik-bora-039a9a245/" target="_blank" className="text-slate-500 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
            <Button variant="outline" size="sm" className="hidden sm:flex" asChild>
              <a href="mailto:boraprantik0@gmail.com">Hire Me</a>
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        
        {/* --- HERO SECTION WITH GRAPHICS --- */}
        <section className="relative mb-24">
          {/* Background Decorative Graphic */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          
          <motion.div 
            initial="initial" animate="animate" variants={fadeIn}
            className="relative z-10 space-y-6"
          >
            <Badge variant="secondary" className="px-3 py-1 text-blue-700 bg-blue-50 border-blue-100">
              Available for New Projects
            </Badge>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">scalable digital</span> experiences.
            </h2>
            <p className="max-w-2xl text-lg text-slate-600 leading-relaxed">
              I’m a Software Engineer-I at **GlobizHub Pvt Ltd**[cite: 16, 17]. 
              With a background in **Electronics & Telecommunication**[cite: 40], 
              I bridge the gap between complex engineering systems and modern web interfaces[cite: 9, 11].
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700">View Projects</Button>
              <Button variant="ghost" className="group">
                Contact Me <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16}/>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section className="mb-24">
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <h3 className="text-2xl font-bold">Experience</h3>
            <div className="h-px flex-1 bg-slate-200"></div>
          </motion.div>

          <div className="space-y-12">
            <motion.div 
              whileHover={{ x: 10 }}
              className="group border-l-2 border-blue-600 pl-8 py-2 relative"
            >
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-4 ring-4 ring-white"></div>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">2025 — Present [cite: 15]</p>
              <h4 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">Software Engineer-I</h4>
              <p className="text-slate-500 font-medium mb-4">GlobizHub Pvt Ltd [cite: 16, 17]</p>
              <ul className="grid md:grid-cols-2 gap-4 text-slate-600 text-sm">
                <li className="flex gap-2"><span>•</span> Leading multi-role food delivery platform[cite: 23].</li>
                <li className="flex gap-2"><span>•</span> Developing scalable library inventory systems[cite: 22].</li>
                <li className="flex gap-2"><span>•</span> Full-stack development for company portals[cite: 19, 21].</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* --- PROJECTS GRID --- */}
        <section className="mb-24">
          <h3 className="text-2xl font-bold mb-12">Selected Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div whileHover={{ y: -5 }}>
              <Card className="overflow-hidden border-slate-200 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 p-8 flex items-end">
                    <h4 className="text-white text-xl font-bold tracking-tight">Shankardev Shishu Niketan [cite: 36]</h4>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-slate-600 mb-4">
                      High-performance portal using **Next.js**, Prisma, and PostgreSQL[cite: 36]. 
                      Optimized for Google Search Console visibility[cite: 37].
                    </p>
                    <div className="flex gap-2 mb-6">
                      <Badge variant="outline">Next.js</Badge>
                      <Badge variant="outline">PostgreSQL</Badge>
                    </div>
                    <Button variant="link" className="p-0 text-blue-600" asChild>
                      <a href="https://www.ssnbatadrava.in/" target="_blank">Live Project <ExternalLink size={14} className="ml-1" /></a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -5 }}>
              <Card className="h-full border-slate-200 bg-white/50">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6 p-3 w-fit bg-blue-50 text-blue-600 rounded-lg">
                    <Cpu size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Healthcare Companion Robot [cite: 12]</h4>
                  <p className="text-sm text-slate-600 mb-6">
                    Microcontroller-based engineering project integrating project management with embedded hardware design[cite: 44].
                  </p>
                  <div className="mt-auto">
                    <Badge className="bg-slate-100 text-slate-600 hover:bg-slate-100 border-none">Electronics / Robotics</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* --- SKILLS PILLS --- */}
        <section className="p-12 rounded-3xl bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Code size={120} />
          </div>
          <h3 className="text-2xl font-bold mb-8">Technical Toolkit</h3>
          <div className="flex flex-wrap gap-3">
            {['React', 'Next.js', 'Node.js', 'React Native', 'Python', 'Tailwind CSS', 'Tanstack', 'PostgreSQL', 'VLSI Design', 'Prisma'].map((skill) => (
              <motion.span 
                key={skill} 
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white/10 rounded-xl text-sm border border-white/10 hover:border-blue-500 transition-colors"
              >
                {skill} [cite: 46, 50, 52, 54]
              </motion.span>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t py-12 text-center text-slate-400 text-sm">
        <p>© 2026 Prantik Bora • Handcrafted with Next.js & Framer Motion</p>
      </footer>
    </div>
  );
}