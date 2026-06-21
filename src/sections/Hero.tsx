
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { ArrowRight, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
      {/* Background abstract elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Text Content */}
        <div className="flex flex-col items-start z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium mb-6"
          >
            Available for Internships & Roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight mb-4"
          >
            Sriman Kumar <span className="text-accent">V.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-300 font-medium mb-6"
          >
            Full-Stack Engineer & Algorithmic Problem Solver
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            A Computer Science & Engineering student dedicated to architecting high-performance web applications, automating enterprise workflows, and solving intricate algorithmic challenges with clean, sustainable code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="#projects" variant="primary">
              Explore Work <ArrowRight size={18} />
            </Button>
            <Button href="#contact" variant="outline">
              Get in Touch <Mail size={18} />
            </Button>
          </motion.div>
        </div>

        {/* Visual Graphic / Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:flex justify-center z-10"
        >
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl transform rotate-6 border border-white/10 backdrop-blur-sm" />
            <div className="absolute inset-0 glass-card rounded-3xl transform -rotate-3 overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center bg-[#0B0F19]">
              {/* Professional placeholder, later to be replaced by the user's actual photo */}
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-tr from-accent to-indigo-500 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">SK</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-32 bg-gray-800 rounded mx-auto" />
                  <div className="h-2 w-24 bg-gray-800 rounded mx-auto" />
                  <div className="h-2 w-28 bg-gray-800 rounded mx-auto" />
                </div>
                <div className="mt-8 flex gap-3 justify-center">
                  <div className="h-8 w-8 rounded bg-gray-800/50" />
                  <div className="h-8 w-8 rounded bg-gray-800/50" />
                  <div className="h-8 w-8 rounded bg-gray-800/50" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
};
