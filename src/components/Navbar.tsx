import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Index', href: '#home' },
  { label: 'Expertise', href: '#about' },
  { label: 'Selected Work', href: '#projects' },
  { label: 'Background', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[80] p-6 md:p-12 flex justify-between items-center mix-blend-difference text-white">
        <a href="#home" className="text-xl md:text-2xl font-serif italic tracking-wide">
          Sriman Kumar V.
        </a>
        
        <button 
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 hover-trigger"
        >
          <span className="uppercase text-xs tracking-[0.2em] font-medium hidden md:block">Menu</span>
          <div className="w-8 flex flex-col gap-1.5 items-end">
            <div className="h-px bg-white w-full transition-all duration-300 group-hover:w-full" />
            <div className="h-px bg-white w-2/3 transition-all duration-300 group-hover:w-full" />
          </div>
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#0a0a0a] z-[90] flex flex-col justify-between p-6 md:p-12"
          >
            <div className="flex justify-between items-center text-white">
              <span className="text-xl md:text-2xl font-serif italic tracking-wide opacity-50">
                Menu
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-3 hover-trigger"
              >
                <span className="uppercase text-xs tracking-[0.2em] font-medium hidden md:block">Close</span>
                <div className="w-8 h-8 relative flex items-center justify-center">
                  <div className="absolute w-full h-px bg-white rotate-45" />
                  <div className="absolute w-full h-px bg-white -rotate-45" />
                </div>
              </button>
            </div>

            <nav className="flex flex-col gap-4 md:gap-8 mt-auto mb-auto max-w-4xl mx-auto w-full">
              {NAV_LINKS.map((link, i) => (
                <div key={link.label} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-5xl md:text-8xl font-sans font-bold text-transparent text-stroke hover:text-stroke-hover transition-all duration-500 uppercase tracking-tighter"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                </div>
              ))}
            </nav>

            <div className="flex justify-between items-end text-sm text-gray-500 uppercase tracking-widest font-medium">
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              </div>
              <a href="#resume" className="hover:text-white transition-colors">Resume</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
