import Link from "next/link";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 glass-dark mt-auto">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
              R3 Labs
            </h2>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Transforming businesses with intelligent automation, scalable applications, and modern digital solutions.
            </p>
            
            <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/mr-rohit-singh03/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:bg-white/10 transition-colors"
            >
            <FaLinkedinIn />
          </a>

            <a 
              href="https://github.com/rohitsingh0318" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
            <FaGithub />
          </a>

            <a 
              href="https://x.com/ROHITSINGH8305" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#1DA1F2] hover:bg-white/10 transition-colors"
            >
            <FaTwitter />
          </a>

            <a 
              href="https://www.instagram.com/rohit_singh__1803/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#E1306C] hover:bg-white/10 transition-colors"
            >
            <FaInstagram />
          </a>
        </div>

          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <a href="mailto:rohitsingh83051@gmail.com" className="hover:text-white transition-colors">
                  rohitsingh83051@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <a href="tel:+918305198886" className="hover:text-white transition-colors">
                  +91 83051 98886
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; 2026 R3 Labs. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
