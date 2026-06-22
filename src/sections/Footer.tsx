import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { Mail, Heart } from 'lucide-react';

const SOCIALS = [
  { href: 'https://github.com/SrimanKumarV', icon: FaGithub, label: 'GitHub', color: '#ffffff' },
  { href: 'https://www.linkedin.com/in/sriman-vel-b89432383/', icon: FaLinkedin, label: 'LinkedIn', color: '#0A66C2' },
  { href: 'https://leetcode.com/u/Sriman_Kumar_V/', icon: FaCode, label: 'LeetCode', color: '#FFA116' },
  { href: 'mailto:srimankumar06@gmail.com', icon: Mail, label: 'Email', color: '#00F2FE' },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 py-12 overflow-hidden">
      {/* Ambient footer glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-accent/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">

        <motion.div
          className="text-center md:text-left"
          whileHover={{ scale: 1.02 }}
        >
          <a href="#home" className="text-xl font-display font-bold tracking-tight text-white block mb-1 hover:gradient-text-accent transition-all">
            Sriman Kumar.
          </a>
          <p className="text-gray-500 text-sm font-medium">Software Engineer · AI Enthusiast</p>
        </motion.div>

        <div className="flex items-center gap-3">
          {SOCIALS.map(({ href, icon: Icon, label, color }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              title={label}
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 transition-all group"
              style={{ '--icon-color': color } as React.CSSProperties}
            >
              <Icon
                size={18}
                className="group-hover:text-white transition-colors"
                style={{ filter: 'none' }}
              />
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: `0 0 15px ${color}66, inset 0 0 10px ${color}22` }}
              />
            </motion.a>
          ))}
        </div>

      </div>

      <div className="mt-8 text-center text-gray-600 text-xs font-medium flex items-center justify-center gap-1.5 relative z-10">
        <span>© {new Date().getFullYear()} Sriman Kumar. All rights reserved.</span>
        <span>Built with</span>
        <motion.span
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-block"
        >
          <Heart size={12} className="text-red-400 fill-red-400" />
        </motion.span>
        <span>using React + Vite</span>
      </div>
    </footer>
  );
};
