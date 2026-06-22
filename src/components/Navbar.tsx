import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MagneticElement } from './MagneticElement';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'CP Stats', href: '#cp-stats' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Simple scrollspy
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-6 px-6 flex justify-center pointer-events-none">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center p-1.5 rounded-full transition-all duration-500 ${
          isScrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <ul className="flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.label}>
                <MagneticElement strength={20}>
                  <a
                    href={link.href}
                    onClick={() => setActiveSection(link.href.substring(1))}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center justify-center ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/10 rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </MagneticElement>
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </header>
  );
};
