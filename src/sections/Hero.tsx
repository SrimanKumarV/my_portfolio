import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      
      <motion.div 
        style={{ y: y1, opacity }}
        className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center text-center mt-20"
      >
        <div className="overflow-hidden mb-2">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <p className="text-gray-400 uppercase tracking-[0.3em] text-xs font-medium">Software Engineer</p>
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="text-[12vw] leading-[0.8] font-sans font-bold tracking-tighter uppercase text-white"
          >
            Sriman
          </motion.h1>
        </div>
        
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="text-[12vw] leading-[0.8] font-serif italic tracking-tight text-[#CCCCCC]"
          >
            Kumar V.
          </motion.h1>
        </div>

        <div className="mt-16 overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="max-w-md mx-auto text-gray-400 text-sm md:text-base font-medium leading-relaxed"
          >
            Architecting high-performance digital experiences and solving intricate algorithmic challenges with deliberate, sustainable code.
          </motion.p>
        </div>
      </motion.div>

      {/* Abstract Background Element */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] border border-white/5 rounded-full z-0 opacity-50 pointer-events-none"
      />
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.76, 0, 0.24, 1] }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Discover</span>
          <div className="w-px h-16 bg-gradient-to-b from-gray-500 to-transparent" />
        </motion.div>
      </div>

    </section>
  );
};
