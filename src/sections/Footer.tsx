import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <a href="#home" className="text-xl font-display font-bold tracking-tight text-white block mb-1">
            Sriman Kumar V.
          </a>
          <p className="text-gray-500 text-sm font-medium">
            Software Engineer
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
            <FaGithub size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
            <FaLinkedin size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
            <Mail size={18} />
          </a>
        </div>

      </div>
      
      <div className="mt-8 text-center text-gray-600 text-xs font-medium">
        <p>&copy; {new Date().getFullYear()} Sriman Kumar V. All rights reserved.</p>
      </div>
    </footer>
  );
};
