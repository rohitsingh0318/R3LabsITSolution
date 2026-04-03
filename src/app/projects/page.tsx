"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projects = [
    {
      title: "SaaS Analytics Dashboard",
      category: "Web App",
      description: "A comprehensive analytics dashboard for SaaS companies to track user engagement, MRR, and churn rates in real-time.",
      techStack: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
      color: "from-blue-600 to-indigo-600",
      imagePattern: "bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]",
      image: "/team/solvinghub.png", 
      liveLink: "https://solvinghub.vercel.app/", 
      githubLink: "https://github.com/rohitsingh0318" // Add your github link here (optional)
    },
    {
      title: "Amazon Product Showcase Website",
      category: "Website Design & Development",
      description: "Modern, clean, and intuitive user interface design for a personal finance and investment tracking mobile application.",
      techStack: ["React.js", "Tailwind CSS", "AOS", "Framer Motion"], 
      color: "from-emerald-500 to-teal-600",
      imagePattern: "bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]",
      image: "/team/amzon1.png",
      liveLink: "https://classic-fashion.vercel.app/",
      githubLink: "https://github.com/rohitsingh0318"
    },
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A high-performance e-commerce platform with seamless payment integration, inventory management, and an admin panel.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "from-purple-600 to-pink-600",
      imagePattern: "bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]",
      image: "/team/shopEasy.png",
      liveLink: "https://shopeasy-nextjs.vercel.app/",
      githubLink: "https://github.com/rohitsingh0318"
    },
    {
      title: "AI Automation Tool Dashboard",
      category: "Automation",
      description: "An AI-powered document processing tool that extracts data from invoices and receipts automatically.",
      techStack: ["Python", "FastAPI", "React", "OpenAI"],
      color: "from-orange-500 to-red-500",
      imagePattern: "bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]",
      image: "/team/dashboard.png",
      liveLink: "https://dashboard-design-gray.vercel.app/",
      githubLink: "https://github.com/rohitsingh0318"
    },
    {
      title: "Corporate Website Redesign",
      category: "Web Design & Dev",
      description: "A complete overhaul of a legacy corporate website into a modern, responsive, and SEO-optimized digital presence.",
      techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
      color: "from-cyan-500 to-blue-600",
      imagePattern: "bg-[url('https://www.transparenttextures.com/patterns/purty-wood.png')]",
      image: "/team/construction.png",
      liveLink: "https://real-trust-website-blush.vercel.app/",
      githubLink: "https://github.com/rohitsingh0318"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20">
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-20 text-center">
        <motion.div
           initial="hidden"
           animate="visible"
           variants={fadeInUp}
           className="max-w-3xl mx-auto"
        >
          <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-4 block">Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Projects</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Discover how we've helped startups and enterprises transform their ideas into successful digital products.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6 md:px-12">
        <motion.div
           initial="hidden"
           animate="visible"
           variants={staggerContainer}
           className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {projects.map((project, idx) => (
             <motion.div
               key={idx}
               variants={fadeInUp}
               className={`group flex flex-col rounded-3xl overflow-hidden glass-dark border border-white/10 hover:border-white/20 transition-colors ${
                 idx === projects.length - 1 && projects.length % 2 !== 0 ? "lg:col-span-2 lg:w-3/4 lg:mx-auto" : ""
               }`}
             >
                {/* Project Image/Visual area */}
                <div className={`relative h-64 md:h-80 w-full bg-gradient-to-br ${project.color} overflow-hidden`}>
                   <div className={`absolute inset-0 opacity-20 ${project.imagePattern}`}></div>
                   {project.image && (
                     <img 
                       src={project.image} 
                       alt={project.title} 
                       className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-110 transition-transform duration-700" 
                     />
                   )}
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                   
                   {/* Floating Tags */}
                   <div className="absolute top-6 left-6 flex gap-2">
                     <span className="backdrop-blur-md bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                       {project.category}
                     </span>
                   </div>
                </div>

                {/* Project Info */}
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                   <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                     {project.title}
                   </h3>
                   <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                     {project.description}
                   </p>
                   
                   <div className="mb-8">
                      <h4 className="text-sm font-semibold text-white/50 mb-3 uppercase tracking-wider">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                         {project.techStack.map((tech, i) => (
                           <span key={i} className="text-xs font-medium text-gray-300 bg-white/5 px-3 py-1 rounded-md border border-white/5">
                             {tech}
                           </span>
                         ))}
                      </div>
                   </div>

                   <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                      {project.liveLink ? (
                        <a 
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 justify-center w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
                        >
                           Live Demo <ExternalLink size={16} />
                        </a>
                      ) : (
                        <button className="flex items-center gap-2 justify-center w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-hover transition-colors">
                           Live Demo <ExternalLink size={16} />
                        </button>
                      )}
                      {project.githubLink ? (
                        <a 
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-12 h-12 rounded-full glass hover:bg-white/10 transition-colors text-white"
                        >
                           <Github size={20} />
                        </a>
                      ) : (
                        <button className="flex items-center justify-center w-12 h-12 rounded-full glass hover:bg-white/10 transition-colors text-white">
                           <Github size={20} />
                        </button>
                      )}
                   </div>
                </div>
             </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
