"use client";

import { motion } from "framer-motion";
import { Search, PenTool, LayoutTemplate, Layers, CheckCircle } from "lucide-react";

export default function UIUXDesign() {
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

  const processes = [
    { title: "Research", icon: <Search size={24} />, desc: "Understanding user needs and business goals." },
    { title: "Wireframing", icon: <PenTool size={24} />, desc: "Structuring the layout and user flow." },
    { title: "UI Design", icon: <LayoutTemplate size={24} />, desc: "Creating visually stunning high-fidelity interfaces." },
    { title: "Prototyping", icon: <Layers size={24} />, desc: "Building interactive models for user testing." },
    { title: "User Testing", icon: <CheckCircle size={24} />, desc: "Validating the design with real users." },
  ];

  const tools = ["Figma", "Adobe XD", "Framer", "Sketch"];

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-24 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <motion.div
           initial="hidden"
           animate="visible"
           variants={fadeInUp}
           className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            UI/UX <span className="text-secondary">Design Services</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            At R3 Labs, we create intuitive, user-centered designs that deliver exceptional digital experiences. Our design approach focuses on usability, aesthetics, and functionality.
          </p>
        </motion.div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Design Process</h2>
            <p className="text-gray-400">A systematic approach to creating products that users love.</p>
          </motion.div>

          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={staggerContainer}
             className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 relative"
          >
             {/* Connecting Line */}
             <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-10"></div>
             
             {processes.map((step, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="flex flex-col items-center text-center w-full md:w-1/5">
                   <div className="w-24 h-24 rounded-full bg-black border-2 border-white/10 flex items-center justify-center text-primary mb-6 shadow-xl relative group">
                     <div className="absolute inset-0 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <span className="relative z-10">{step.icon}</span>
                     <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white text-xs font-bold border-2 border-black z-20">
                       0{idx + 1}
                     </div>
                   </div>
                   <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                   <p className="text-sm text-gray-400 max-w-[200px]">{step.desc}</p>
                </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="py-24 container mx-auto px-6 md:px-12 text-center">
         <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
         >
            <h2 className="text-3xl font-bold mb-12 text-white">Tools We Use</h2>
            <div className="flex flex-wrap justify-center gap-6">
               {tools.map((tool, idx) => (
                 <div key={idx} className="glass border border-white/10 px-8 py-4 rounded-full text-lg font-medium text-gray-300 hover:text-white hover:border-primary/50 transition-colors shadow-lg">
                    {tool}
                 </div>
               ))}
            </div>
         </motion.div>
      </section>
    </div>
  );
}
