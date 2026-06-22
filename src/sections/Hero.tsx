import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { MagneticElement } from '../components/MagneticElement';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { useEffect, useState } from 'react';

const ROLES = [
  'Software Engineer',
  'AI/ML Enthusiast',
  'Full-Stack Developer',
  'Competitive Programmer',
];

const STATS = [
  { label: 'LeetCode Problems', value: 200, suffix: '+', prefix: '' },
  { label: 'Projects Built', value: 10, suffix: '+', prefix: '' },
  { label: 'Technologies', value: 14, suffix: '', prefix: '' },
];

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = texts[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= current.length) {
      setDisplayText(current.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex >= 0) {
      setDisplayText(current.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 35);
    } else {
      setIsDeleting(false);
      setCurrentIndex((i) => (i + 1) % texts.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex, texts]);

  return (
    <span className="gradient-text-accent">
      {displayText}
      <span className="inline-block w-[2px] h-[1.1em] bg-accent ml-1 align-middle animate-pulse" />
    </span>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">

      {/* Extra ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 bg-cyan-400 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full blur-3xl opacity-10 bg-purple-500 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center z-10">

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          {/* Rotating ring */}
          <motion.div
            className="absolute -inset-2 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #00F2FE, #4facfe, #a78bfa, #00F2FE)',
              padding: '2px',
              borderRadius: '9999px',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-full h-full rounded-full bg-[#0B0F19]" />
          </motion.div>

          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-transparent"
            style={{ boxShadow: '0 0 30px rgba(0,242,254,0.3)' }}>
            <img src="/profile.jpg" alt="Sriman Kumar" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-medium text-gray-300 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          Available for Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-4 cursor-default"
        >
          Hi, I'm{' '}
          <motion.span
            className="gradient-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            Sriman Kumar.
          </motion.span>
        </motion.h1>

        {/* Typewriter roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl md:text-3xl font-display font-semibold mb-6 h-10"
        >
          <TypewriterText texts={ROLES} />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base md:text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed font-sans"
        >
          Building scalable systems at the intersection of{' '}
          <span className="text-white font-medium">AI</span> and{' '}
          <span className="text-white font-medium">Full-Stack Engineering</span> — one elegant solution at a time.
        </motion.p>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-8 md:gap-12 mb-10"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.08 }}
              whileHover={{ scale: 1.08 }}
            >
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text-accent">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} duration={2200} />
              </div>
              <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-300 transition-colors">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticElement strength={40}>
            <a
              href="#projects"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.35)]"
            >
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </MagneticElement>
          <MagneticElement strength={40}>
            <a
              href="/Sriman_Kumar_Resume.pdf"
              download="Sriman_Kumar_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full glass border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all"
            >
              Resume <Download size={18} />
            </a>
          </MagneticElement>
        </motion.div>

      </div>
    </section>
  );
};
