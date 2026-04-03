"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "UI/UX Design", path: "/ui-ux-design" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-dark shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          R3 Labs
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.path ? "text-primary" : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          >
            Get Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full glass-dark border-t border-white/10"
        >
          <div className="flex flex-col space-y-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition-colors ${
                  pathname === link.path ? "text-primary" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-block text-center px-5 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium"
            >
              Get Consultation
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
