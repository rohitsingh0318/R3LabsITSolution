"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Code2, 
  Paintbrush, 
  Cloud, 
  Workflow, 
  Bot, 
  CheckCircle2 
} from "lucide-react";
import Image from "next/image";

export default function Home() {
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background animate-gradient-x"></div>
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
            >
              Transform Your Digital Vision Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Reality with Strategic Solutions
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Ready to unlock your business potential through cutting-edge technology? 
              We deliver intelligent automation, scalable digital solutions, and 
              applications that turn your technological challenges into competitive advantages.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
              >
                Get Free Consultation
              </Link>
              <Link 
                href="/services" 
                className="w-full sm:w-auto px-8 py-4 rounded-full glass-dark text-white font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
              >
                View Our Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-primary">R3 Labs IT Solution</span>
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                We don&apos;t just write code; we build scalable engineering marvels that drive real business value.
              </p>
              
              <div className="space-y-4">
                {[
                  "Scalable Solutions built for growth",
                  "Modern Technology Stack (Next.js, React, Node)",
                  "Fast Development & Lightning deployment",
                  "Secure Architecture & Data Protection",
                  "Dedicated Support & Maintenance"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-secondary" size={24} />
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-full min-h-[400px] rounded-2xl glass p-8 flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
              <div className="relative z-10 w-full h-full border border-white/20 rounded-xl bg-black/40 backdrop-blur-sm p-6 flex flex-col justify-center items-center text-center gap-4 shadow-2xl">
                 <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
                    <div className="text-3xl font-bold text-white">R3</div>
                 </div>
                 <h3 className="text-2xl font-bold">Innovation Delivered</h3>
                 <p className="text-gray-400 text-sm">Empowering startups & enterprises worldwide.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-400">Comprehensive digital solutions designed to elevate your business operations and user experience.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: <Code2 size={32} />, title: "Web Development", desc: "High-performance websites and web applications using modern frameworks." },
              { icon: <Paintbrush size={32} />, title: "UI/UX Design", desc: "Intuitive, user-centered designs that deliver exceptional experiences." },
              { icon: <Cloud size={32} />, title: "SaaS Development", desc: "Scalable SaaS platforms with secure, multi-tenant architectures." },
              { icon: <Workflow size={32} />, title: "API Integration", desc: "Seamless third-party integrations and robust REST/GraphQL APIs." },
              { icon: <Bot size={32} />, title: "Automation Solutions", desc: "Intelligent AI-powered automation to streamline business processes." },
              { icon: <CheckCircle2 size={32} />, title: "Maintenance & Support", desc: "Ongoing support and maintenance to ensure optimal performance." }
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="glass-dark p-8 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer border border-white/5 hover:border-primary/50"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition-colors"
            >
              Explore Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 bg-black/30">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
          >
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
              <p className="text-gray-400">Discover how we&apos;ve helped businesses transform their ideas into successful digital products.</p>
            </div>
            <Link 
              href="/projects" 
              className="shrink-0 flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
            >
              View All Projects <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "SaaS Dashboard", tag: "Web App", color: "from-blue-600 to-cyan-500", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
              { title: "Startup Landing Page", tag: "Design & Dev", color: "from-purple-600 to-pink-500", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
              { title: "Mobile UI Design", tag: "UI/UX", color: "from-orange-500 to-amber-500", image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop" },
              { title: "Portfolio Website", tag: "Web Dev", color: "from-emerald-500 to-teal-500", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop" }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer bg-black"
              >
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-700 ease-in-out" 
                />
                
                {/* Color Overlay with mix-blend-mode for a cool colored effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full z-10 glass translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="text-xs font-bold px-3 py-1 bg-white/20 rounded-full text-white mb-3 inline-block backdrop-blur-md">
                    {project.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-secondary/30 opacity-50 z-0"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="glass-dark border border-white/10 p-12 md:p-20 rounded-3xl max-w-4xl mx-auto shadow-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let&apos;s Build Something <span className="text-primary">Amazing</span> Together
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Ready to take your business to the next level? Contact us today to discuss your project requirements and receive a free consultation.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
