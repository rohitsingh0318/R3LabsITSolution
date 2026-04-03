"use client";

import { motion } from "framer-motion";
import { Target, Rocket, Users } from "lucide-react";
import Image from "next/image";

export default function About() {
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

  const team = [
    { name: "Rohit Singh", role: "Frontend Developer", img: "/team/rohit_singh02.jpg" },
    { name: "Rajnish Malviya", role: "UI/UX Designer", img: "/team/rj.jpg" },
    { name: "Pankaj Evne", role: "Backend Developer", img: "/team/02455651.jpg" },
    { name: "Rohit Sadawarte", role: "DevOps Engineer", img: "/team/titu.jpg" },
    { name: "Aditya Singh", role: "Data Analyst", img: "/team/aadi.jpg" },
    { name: "Amish Jatav", role: "Sales Executive", img: "/team/amish.jpg" },
    { name: "Ritik Pawar", role: "Customer Support Specialist", img: "/team/ritik.jpg" }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20">
      {/* Intro Section */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <motion.div
           initial="hidden"
           animate="visible"
           variants={fadeInUp}
           className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">R3 Labs</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            R3 Labs is a modern technology startup focused on building innovative digital solutions for businesses around the world. Our mission is to help organizations transform their ideas into scalable, secure, and high-performing digital products.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            We specialize in modern web technologies, intuitive UI/UX design, and automation solutions that empower businesses to grow faster in the digital era.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white/5 border-y border-white/5 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="glass-dark p-10 rounded-2xl flex flex-col items-start shadow-xl border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform"><Target size={120} /></div>
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6 relative z-10">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4 relative z-10">Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed relative z-10">
                To deliver innovative digital solutions that help businesses grow and succeed in the digital age.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="glass-dark p-10 rounded-2xl flex flex-col items-start shadow-xl border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform"><Rocket size={120} /></div>
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-6 relative z-10">
                <Rocket size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4 relative z-10">Our Vision</h2>
              <p className="text-gray-400 text-lg leading-relaxed relative z-10">
                To become a globally recognized technology partner known for innovation, quality, and reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 text-white mb-6">
             <Users size={32} />
          </div>
          <h2 className="text-4xl font-bold mb-4">Meet The Founders</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The passionate minds driving innovation and excellence at R3 Labs IT Solution.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, idx) => (
             <motion.div
                key={idx}
                variants={fadeInUp}
                className="glass-dark rounded-2xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-primary/30"
             >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white/100 group-hover:border-primary/50 transition-colors">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
             </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
