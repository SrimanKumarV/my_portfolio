
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-[#05070a] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-display font-bold tracking-tight text-white inline-block mb-2">
            Sriman Kumar <span className="text-accent">V.</span>
          </a>
          <p className="text-gray-500 text-sm">
            Building digital experiences with code and creativity.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/30 transition-all">
            <FaGithub size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/30 transition-all">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/30 transition-all">
            <Mail size={20} />
          </a>
        </div>

      </div>
      
      <div className="mt-8 text-center text-gray-600 text-xs">
        <p>&copy; {new Date().getFullYear()} Sriman Kumar V. All rights reserved.</p>
      </div>
    </footer>
  );
};
