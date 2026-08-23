// lib/data.ts
import { Server, Code, Cpu, Truck, ShoppingCart } from "lucide-react";

export const PORTFOLIO_DATA = {
  hero: {
    roles: [
      "Software Development Engineer",
      "Co-Founder & MD @ Erthad Pvt Ltd"
    ],
    headline: ["Engineering", "Digital", "Realities."],
    description: "I bridge the gap between complex backend architectures and modern web interfaces. Specializing in full-stack development, React, and embedded systems.",
    contact: {
      email: "boraprantik0@gmail.com",
      phone: "+91 97075-14371"
    }
  },
  
  experience: [
    {
      id: 1,
      timeline: "May 2026 — Present",
      role: "Co-Founder & MD",
      company: "Erthad Pvt Ltd",
      description: "Running a web development and digital solutions agency. Directing technical strategy and delivering custom websites and scalable platforms for clients.",
      highlights: []
    },
    {
      id: 2,
      timeline: "Oct 2025 — May 2026",
      role: "Software Engineer-I",
      company: "GlobizHub Pvt Ltd",
      description: "Served as Lead Developer across the company's core ecosystem, managing backend architectures and scalable frontend modules.",
      highlights: [
        "Ecosystem Architecture: Architected and deployed scalable multi-platform applications including user, vendor, and admin interfaces.",
        "Project Leadership: Directed complete backend infrastructure and frontend modular development for several key client platforms.",
        "Internal Tools: Engineered secure internal management software, streamlining corporate invoicing and quotation operations.",
        "Cross-Functional Support: Conducted technical product demonstrations for clients and assisted with corporate marketing initiatives."
      ]
    },
    {
      id: 3,
      timeline: "March 2025 — Sept 2025", 
      role: "Apprentice Trainee (HR)",
      company: "Indian Oil AOD State Office",
      description: "Completed a technical apprenticeship in corporate operations, establishing a foundation in enterprise workflows.",
      highlights: [
        "Corporate Operations: Engaged in HR functions and support tasks within a major enterprise environment.",
        "Technical Training: Completed internal enterprise learning modules including data management and corporate workflows."
      ]
    },
    {
      id: 4,
      timeline: "July 2023 — August 2023", 
      role: "VLSI Design Intern",
      company: "Maven Silicon",
      description: "Gained foundational hands-on experience in VLSI design and applications through a remote hardware-focused program.",
      highlights: []
    }
  ],

  projects: [
    {
      id: "02",
      title: "Shankardev Shishu Niketan Batadrava",
      description: "Engineered a high-performance portal optimizing SSR and dynamic SEO for top-ranking Google Search Console visibility.",
      techStack: ["Next.js", "Prisma", "PostgreSQL"],
      link: "https://www.ssnbatadrava.in/",
      icon: Server,
    },
    {
      id: "03",
      title: "Codquiskill Portal",
      description: "Developing and deploying the official web presence and educational platform for Codquiskill institute.",
      techStack: ["Next.js", "React", "PostgreSQL"],
      link: "https://www.codquiskill.com/",
      icon: Code,
    },
    {
      id: "04",
      title: "Healthcare Companion Robot",
      description: "Developed a microcontroller-based physical interface, showcasing end-to-end hardware and embedded systems engineering.",
      techStack: ["Robotics", "Embedded Systems"],
      link: "#", 
      icon: Cpu,
    }
  ],

  skills: {
    web: [
      "Next.js & React", 
      "React Native (Expo)", 
      "Node.js", 
      "Tailwind CSS", 
      "PostgreSQL", 
      "Prisma",
      "Tanstack"
    ],
    core: [
      "Python",
      "Go",
      "Docker & WSL (Ubuntu)",
      "System Design", 
      "VLSI Design", 
      "Microcontrollers", 
      "C/C++"
    ]
  }
};