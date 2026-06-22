import { motion, useMotionTemplate, useMotionValue, useTransform, useSpring } from 'framer-motion';
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
    color: 'from-blue-500/10 to-cyan-500/5',
  },
  {
    title: 'Alumnex-Connect',
    description: 'A full-stack web portal built to facilitate seamless student-alumni networking, professional mentorship, and career tracking.',
    tags: ['Node.js', 'React', 'Express', 'Full-Stack'],
    githubUrl: 'https://github.com/SrimanKumarV/FSD',
    liveUrl: 'https://alumnex-connect.onrender.com/',
    color: 'from-purple-500/10 to-pink-500/5',
  },
  {
    title: 'Decoding Palindrome',
    description: 'Bridging the gap between theoretical math and real-world CPU performance. An empirical deep-dive into iterative versus recursive algorithms.',
    tags: ['Algorithms', 'Performance', 'Math'],
    githubUrl: 'https://github.com/SrimanKumarV/Decoding-Palindrome-Verification',
    liveUrl: 'https://decoding-palindrome-verification.vercel.app/',
    color: 'from-emerald-500/10 to-teal-500/5',
  },
  {
    title: 'Sentiment Analysis',
    description: 'Developed a machine learning model capable of classifying sentiments from user reviews using advanced NLP techniques.',
    tags: ['Python', 'ML', 'NLP'],
    githubUrl: 'https://github.com/SrimanKumarV/sentimental-analysis-app',
    liveUrl: 'https://sentimental-analysis-app-srimankumar06.streamlit.app/',
    color: 'from-orange-500/10 to-red-500/5',
  },
  {
    title: 'Air Pollution Detection',
    description: 'Built a deep learning model using environmental datasets for predicting and analyzing environmental pollution levels.',
    tags: ['Python', 'Deep Learning'],
    githubUrl: 'https://github.com/SrimanKumarV/Air_Pollution_Prediction_Using_DeepLearning',
    liveUrl: 'https://air-pollution-prediction-using-deeplearning.streamlit.app/',
    color: 'from-sky-500/10 to-indigo-500/5',
  },
  {
    title: 'Railway Track Simulator',
    description: "An interactive OS simulation implementing the Banker's Algorithm to visualize deadlock avoidance.",
    tags: ['JavaScript', 'OS Sim'],
    githubUrl: 'https://github.com/SrimanKumarV/OS-micro-project',
    liveUrl: 'https://os-micro-project.vercel.app/',
    color: 'from-yellow-500/10 to-amber-500/5',
  },
];

// --- 3D Tilt Spotlight Card ---
const SpotlightCard = ({ project, index }: { project: any; index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const xPct = useMotionValue(0);
  const yPct = useMotionValue(0);

  const rotateX = useSpring(useTransform(yPct, [-0.5, 0.5], [12, -12]), { damping: 25, stiffness: 200 });
  const rotateY = useSpring(useTransform(xPct, [-0.5, 0.5], [-12, 12]), { damping: 25, stiffness: 200 });
  const shine = useSpring(useTransform(xPct, [-0.5, 0.5], [0, 1]), { damping: 25, stiffness: 200 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    mouseX.set(x);
    mouseY.set(y);
    xPct.set(x / width - 0.5);
    yPct.set(y / height - 0.5);
  }

  function handleMouseLeave() {
    xPct.set(0);
    yPct.set(0);
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: '1000px' }}
      className="group relative h-full cursor-pointer"
    >
      {/* Card Body */}
      <div className={`relative h-full rounded-3xl border border-white/5 bg-gradient-to-br ${project.color} bg-white/[0.02] p-8 flex flex-col overflow-hidden transition-all duration-300`}>

        {/* Spotlight Radial */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(0,242,254,0.12), transparent 60%)`,
          }}
        />

        {/* Animated border on hover */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.25), transparent 60%) border-box`,
            border: '1px solid transparent',
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        {/* Shine sweep on hover */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: useMotionTemplate`linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)`,
          }}
        />

        {/* Top row: icon + links, lifted in Z */}
        <div className="relative z-10 flex justify-between items-start mb-6" style={{ transform: 'translateZ(30px)' }}>
          <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div className="flex gap-2 text-gray-500">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/10 hover:text-white transition-all duration-200 magnetic">
                <FaGithub size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/10 hover:text-white transition-all duration-200 magnetic">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Title — scales up on hover */}
        <motion.h3
          className="relative z-10 font-display font-bold text-white mb-3 leading-tight"
          style={{ transform: 'translateZ(20px)' }}
          whileHover={{ scale: 1.04 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <span className="text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500">
            {project.title}
          </span>
        </motion.h3>

        {/* Description */}
        <p className="relative z-10 text-gray-400 text-sm flex-grow mb-8 leading-relaxed" style={{ transform: 'translateZ(15px)' }}>
          {project.description}
        </p>

        {/* Tags — staggered glow on card hover */}
        <div className="relative z-10 flex flex-wrap gap-2 mt-auto" style={{ transform: 'translateZ(10px)' }}>
          {project.tags.map((tag: string, i: number) => (
            <motion.span
              key={tag}
              className="text-[11px] font-medium text-gray-400 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full"
              whileHover={{ scale: 1.15, color: '#ffffff', borderColor: 'rgba(0,242,254,0.4)', backgroundColor: 'rgba(0,242,254,0.08)' }}
              transition={{ type: 'spring', stiffness: 500, damping: 15, delay: i * 0.03 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Section ---
export const Projects = () => {
  return (
    <section className="py-24 relative" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="mb-16 md:text-center">
          {/* Animated heading with word-by-word hover inflate */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            {['Selected', 'Work.'].map((word, i) => (
              <motion.span
                key={word}
                className={`inline-block mr-3 ${i === 1 ? 'gradient-text' : ''}`}
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A collection of professional case studies showcasing my ability to engineer scalable solutions.
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
