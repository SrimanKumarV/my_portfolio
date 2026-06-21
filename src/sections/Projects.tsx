import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import type { MouseEvent } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const PROJECTS = [
  {
    title: 'Smart Certificate System',
    description: 'An automated enterprise framework engineered to streamline academic certificate issuance and digital student workflows.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    githubUrl: 'https://github.com/SrimanKumarV/DESIGN-THINKING',
    liveUrl: 'https://smart-certificate-generation.great-site.net/',
  },
  {
    title: 'Alumnex-Connect',
    description: 'A full-stack web portal built to facilitate seamless student-alumni networking, professional mentorship, and career tracking.',
    tags: ['Node.js', 'React', 'Express', 'Full-Stack'],
    githubUrl: 'https://github.com/SrimanKumarV/FSD',
    liveUrl: 'https://alumnex-connect.onrender.com/',
  },
  {
    title: 'Decoding Palindrome Verification',
    description: 'Bridging the gap between theoretical math and real-world CPU performance. An empirical deep-dive into iterative versus recursive algorithms. Unmasking the hidden overhead behind classic algorithm designs.',
    tags: ['Algorithms', 'Performance Analysis', 'Math'],
    githubUrl: 'https://github.com/SrimanKumarV/Decoding-Palindrome-Verification',
    liveUrl: 'https://decoding-palindrome-verification.vercel.app/',
  },
  {
    title: 'Sentiment Analysis System',
    description: 'Developed a machine learning model capable of classifying sentiments from user reviews using advanced NLP techniques.',
    tags: ['Python', 'Machine Learning', 'NLP'],
    githubUrl: 'https://github.com/SrimanKumarV/sentimental-analysis-app',
    liveUrl: 'https://sentimental-analysis-app-srimankumar06.streamlit.app/',
  },
  {
    title: 'Air Pollution Detection',
    description: 'Built a deep learning model using environmental datasets for predicting and analyzing environmental pollution levels.',
    tags: ['Python', 'Deep Learning'],
    githubUrl: 'https://github.com/SrimanKumarV/Air_Pollution_Prediction_Using_DeepLearning',
    liveUrl: 'https://air-pollution-prediction-using-deeplearning.streamlit.app/',
  },
  {
    title: 'Railway Track Simulator',
    description: 'An interactive operating systems simulation implementing the Banker\'s Algorithm to visualize deadlock avoidance.',
    tags: ['JavaScript', 'OS Simulation'],
    githubUrl: 'https://github.com/SrimanKumarV/OS-micro-project',
    liveUrl: 'https://os-micro-project.vercel.app/',
  }
];

const SpotlightCard = ({ project, index }: { project: any; index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden p-8 flex flex-col"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 242, 254, 0.1),
              transparent 40%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          border: '1px solid transparent',
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.3),
              transparent 40%
            ) border-box
          `,
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      
      <div className="relative z-10 flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
          <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <div className="flex gap-3 text-gray-400">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 hover:text-white transition-all magnetic">
              <FaGithub size={20} />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 hover:text-white transition-all magnetic">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="relative z-10 text-xl font-display font-semibold text-white mb-3">
        {project.title}
      </h3>
      
      <p className="relative z-10 text-gray-400 text-sm flex-grow mb-8 leading-relaxed">
        {project.description}
      </p>
      
      <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag: string) => (
          <span key={tag} className="text-[11px] font-medium text-gray-300 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section className="py-24 relative" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16 md:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Selected <span className="gradient-text">Work.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A collection of professional case studies showcasing my ability to engineer scalable solutions and solve complex problems.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <SpotlightCard key={project.title} project={project} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
};
