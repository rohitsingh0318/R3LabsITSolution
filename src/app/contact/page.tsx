"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerRef = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10"></div>

      <section className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.div
           initial="hidden"
           animate="visible"
           variants={fadeInUp}
           className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Touch</span>
          </h1>
          <p className="text-lg text-gray-400">
            Have a project in mind or want to learn more about our services? Let&apos;s talk about how we can help you achieve your goals.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
           
           {/* Contact Info (Left Side) */}
           <motion.div 
             initial="hidden"
             animate="visible"
             variants={containerRef}
             className="w-full lg:w-1/3 flex flex-col gap-10"
           >
              <div>
                 <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                 <p className="text-gray-400 leading-relaxed mb-8">
                   Fill out the form and our team will get back to you within 24 hours.
                 </p>
              </div>

              <div className="space-y-6">
                 <motion.div variants={fadeInUp} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                       <Mail size={24} />
                    </div>
                    <div>
                       <h3 className="font-semibold text-white mb-1">Email Us</h3>
                       <a href="mailto:rohitsingh83051@gmail.com" className="text-gray-400 hover:text-primary transition-colors">rohitsingh83051@gmail.com</a>
                    </div>
                 </motion.div>

                 <motion.div variants={fadeInUp} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                       <Phone size={24} />
                    </div>
                    <div>
                       <h3 className="font-semibold text-white mb-1">Call Us</h3>
                       <a href="tel:+918305198886" className="text-gray-400 hover:text-secondary transition-colors">+91 83051 98886</a>
                    </div>
                 </motion.div>

                 <motion.div variants={fadeInUp} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0">
                       <MapPin size={24} />
                    </div>
                    <div>
                       <h3 className="font-semibold text-white mb-1">Location</h3>
                       <p className="text-gray-400">Indore, Madhya Pradesh, India</p>
                    </div>
                 </motion.div>
              </div>

              <div className="mt-auto pt-10">
                 <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                 <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"><Linkedin size={18} /></a>
                    <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"><Github size={18} /></a>
                    <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-[#1DA1F2] hover:bg-white/10 transition-colors"><Twitter size={18} /></a>
                    <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-[#E1306C] hover:bg-white/10 transition-colors"><Instagram size={18} /></a>
                 </div>
              </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="w-full lg:w-2/3"
           >
              <div className="glass-dark p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                 {/* Decorative element */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -z-10 rounded-full"></div>
                 
                 <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="flex flex-col gap-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                          <input 
                            type="text" 
                            id="name" 
                            placeholder="rj malviya" 
                            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          />
                       </div>
                       <div className="flex flex-col gap-2">
                          <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                          <input 
                            type="email" 
                            id="email" 
                            placeholder="john@example.com" 
                            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          />
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="flex flex-col gap-2">
                          <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
                          <input 
                            type="tel" 
                            id="phone" 
                            placeholder="+91 0000-0000" 
                            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          />
                       </div>
                       <div className="flex flex-col gap-2">
                          <label htmlFor="projectType" className="text-sm font-medium text-gray-300">Project Type</label>
                          <select 
                            id="projectType" 
                            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                          >
                             <option value="" disabled selected className="text-gray-600">Select a project type...</option>
                             <option value="web-dev">Web Development</option>
                             <option value="saas">SaaS Application</option>
                             <option value="ui-ux">UI/UX Design</option>
                             <option value="api">API Development</option>
                             <option value="other">Other</option>
                          </select>
                       </div>
                    </div>

                    <div className="flex flex-col gap-2">
                       <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                       <textarea 
                         id="message" 
                         rows={5} 
                         placeholder="Tell us about your project..." 
                         className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                       ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="mt-4 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(59,130,246,0.3)]"
                    >
                       Send Message <Send size={20} />
                    </button>
                 </form>
              </div>
           </motion.div>

        </div>
      </section>
    </div>
  );
}
