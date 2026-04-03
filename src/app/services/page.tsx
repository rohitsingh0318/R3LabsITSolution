"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Workflow, Bot, MonitorSmartphone, ArrowRight, Palette } from "lucide-react";

export default function Services() {
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

  const services = [
    {
      id: "01",
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks like React and Next.js. We deliver fast, responsive, and SEO-friendly web experiences.",
      icon: <Code2 size={40} />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "02",
      title: "SaaS Development",
      description: "Scalable SaaS platforms with modern architecture. We build multi-tenant applications with subscription management, secure authentication, and high performance.",
      icon: <MonitorSmartphone size={40} />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "03",
      title: "API Development & Integration",
      description: "Secure APIs and third-party integrations. We design robust RESTful and GraphQL APIs that serve as the backbone for your application ecosystem.",
      icon: <Workflow size={40} />,
      color: "from-orange-500 to-amber-500"
    },
    {
      id: "04",
      title: "AI Automation Solutions",
      description: "AI-powered automation for business processes. Reduce manual work and increase efficiency by automating repetitive tasks across your organization.",
      icon: <Bot size={40} />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: "05",
      title: "Graphic Design",
      description: "Creative and visually engaging designs that elevate your brand identity. We craft stunning graphics, logos, and UI elements to make your business stand out.",
      icon: <Palette size={40} />,
      color: "from-pink-500 to-purple-500"
    },
    {
      id: "06",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications built with modern frameworks. We create engaging user experiences for iOS and Android devices.",
      icon: <MonitorSmartphone size={40} />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20">
      {/* Header Section */}
      <section className="container mx-auto px-6 md:px-12 mb-20">
        <motion.div
           initial="hidden"
           animate="visible"
           variants={fadeInUp}
           className="text-center max-w-3xl mx-auto"
        >
          <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-4 block">What We Do</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            From concept to execution, we provide end-to-end technology solutions that drive business transformation.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 md:px-12 relative">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className={`glass-dark p-10 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-300 group ${
                idx === services.length - 1 && services.length % 2 !== 0 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full bg-black/80 rounded-2xl flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                  <span className="text-4xl font-black text-white/5">{service.id}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center text-sm font-semibold text-white/50 group-hover:text-white transition-colors cursor-pointer">
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
