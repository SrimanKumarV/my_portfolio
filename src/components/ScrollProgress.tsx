import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scaleX = useSpring(scrollProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[200] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #00F2FE, #4facfe, #a78bfa, #00F2FE)',
        backgroundSize: '200% 100%',
      }}
    />
  );
};
