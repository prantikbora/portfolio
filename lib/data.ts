import { Server, Code, Cpu } from "lucide-react";

export const PORTFOLIO_DATA = {
  hero: {
    roles: [
      "Software Development Engineer",
      "Co-Founder & MD @ Erthad Pvt Ltd"
    ],
    headline: ["Engineering", "Digital", "Realities."],
    description: "I bridge the gap between complex hardware systems and modern web interfaces. Specializing in full-stack architecture, React, and embedded systems.",
    contact: {
      email: "boraprantik0@gmail.com",
      phone: "+91 97075-14371"
    }
  },
  
  experience: [
    {
      id: 1,
      timeline: "June 2026 — Present",
      role: "Co-Founder & MD",
      company: "Erthad Pvt Ltd",
      description: "Leading technical strategy, business operations, and the development of innovative software solutions.",
      highlights: []
    },
    {
      id: 2,
      timeline: "Oct 2025 — May 2026",
      role: "Software Engineer-I",
      company: "GlobizHub Pvt Ltd",
      description: "Served as Lead Developer across the company's core ecosystem, managing both complex backend architectures and scalable frontend modules.",
      highlights: [
        "Ecosystem Architecture: Architected and deployed scalable multi-platform applications including user, vendor, and admin interfaces.",
        "Project Leadership: Directed complete backend infrastructure and frontend modular development for several key client platforms.",
        "Internal Tools: Engineered secure internal management software, streamlining corporate invoicing and quotation operations.",
        "Cross-Functional Support: Conducted technical product demonstrations for clients and assisted with corporate marketing initiatives."
      ]
    },
    {
      id: 3,
      timeline: "Before Oct 2025",
      role: "Internships & Apprenticeships",
      company: "Maven Silicon & Indian Oil",
      description: "Completed short-term technical and operational training programs, establishing a foundational understanding of both hardware engineering and corporate workflows.",
      highlights: [
        "Maven Silicon (VLSI Design Intern): Gained hands-on experience in VLSI design and applications, working remotely on hardware-focused projects.",
        "Indian Oil (Apprentice Trainee): Engaged in HR functions and support tasks, completing a technical apprenticeship and gaining industry experience in corporate operations."
      ]
    }
  ],

  projects: [
    {
      id: "01",
      title: "Shankardev Shishu Niketan",
      description: "Engineered a high-performance portal optimizing SSR and dynamic SEO for top-ranking Google Search Console visibility.",
      techStack: ["Next.js", "Prisma", "PostgreSQL"],
      link: "https://www.ssnbatadrava.in/",
      icon: Server,
      // We use a CSS gradient here to simulate the rich image reveal on hover
      hoverBg: "from-violet-600/80 to-indigo-900/90", 
    },
    {
      id: "02",
      title: "Codquiskill Portal",
      description: "Developing and deploying the official web presence and educational platform for Codquiskill institute.",
      techStack: ["Next.js", "React", "PostgreSQL"],
      link: "https://www.codquiskill.com/",
      icon: Code,
      hoverBg: "from-fuchsia-600/80 to-purple-900/90",
    },
    {
      id: "03",
      title: "Healthcare Companion Robot",
      description: "Developed a microcontroller-based physical interface, showcasing end-to-end hardware and embedded systems engineering.",
      techStack: ["Robotics", "Embedded Systems"],
      link: "#", // Internal project
      icon: Cpu,
      hoverBg: "from-indigo-600/80 to-blue-900/90",
    }
  ],

  skills: {
    web: [
      "Next.js", 
      "React", 
      "Node.js", 
      "React Native", 
      "Tailwind CSS", 
      "PostgreSQL", 
      "Prisma"
    ],
    core: [
      "Python", 
      "System Design", 
      "VLSI Design", 
      "Microcontrollers", 
      "C/C++"
    ]
  }
};