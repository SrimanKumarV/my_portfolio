import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#000000] pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-12">
        
        <div className="text-left">
          <a href="#home" className="text-3xl md:text-5xl font-serif italic tracking-wide text-white block mb-6">
            Sriman Kumar V.
          </a>
          <p className="text-gray-500 font-sans uppercase tracking-[0.2em] text-xs">
            Software Engineer &bull; Based in India
          </p>
        </div>

        <div className="flex flex-col items-end gap-8">
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-sans">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
