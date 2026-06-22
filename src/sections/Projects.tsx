import { motion, useMotionTemplate, useMotionValue, useTransform, useSpring } from 'framer-motion';
import type { MouseEvent } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const PROJECTS = [
  {
    title: 'Smart Certificate System',
    hook: 'An automated institutional framework eliminating manual certificate processing delays.',
    features: [
      'Automated PDF synthesis',
      'Role-based access control for verification',
      'Automated request queues'
    ],
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS'],
    githubUrl: 'https://github.com/SrimanKumarV/DESIGN-THINKING',
    liveUrl: 'https://smart-certificate-generation.great-site.net/',
    color: 'from-blue-500/10 to-cyan-500/5',
  },
  {
    title: 'Decoding Palindrome',
    hook: 'Bridging the gap between theoretical math and real-world CPU performance.',
    features: [
      'Empirical deep-dive into iterative versus recursive algorithms',
      'Unmasking the hidden overhead behind classic algorithm designs',
      'Real-world algorithmic benchmarking'
    ],
    tags: ['HTML', 'Algorithms', 'Performance Analysis'],
    githubUrl: 'https://github.com/SrimanKumarV/Decoding-Palindrome-Verification',
    liveUrl: 'https://decoding-palindrome-verification.vercel.app/?utm=codolio',
    color: 'from-emerald-500/10 to-teal-500/5',
  },
  {
    title: 'Urban Dust Pollution Predictor',
    hook: 'An environmental data science pipeline mapping urban particulate accumulation via leaf reflectance metrics.',
    features: [
      'ML feature extraction from leaf surface spectrometry',
      'Preprocessing noisy environmental datasets',
      'Evaluating model boundaries'
    ],
    tags: ['Python', 'OpenCV', 'Scikit-Learn', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/SrimanKumarV/Air_Pollution_Prediction_Using_DeepLearning',
    liveUrl: 'https://air-pollution-prediction-using-deeplearning.streamlit.app/',
    color: 'from-sky-500/10 to-indigo-500/5',
  },
  {
    title: 'Alumnex-Connect Portal',
    hook: 'A professional web networking platform bridging communication between institutional alumni and current undergraduates.',
    features: [
      'Secure JWT-based session handling',
      'Direct mentorship messaging architecture',
      'Optimized server-side routing deployed on cloud infrastructure'
    ],
    tags: ['Node.js', 'React', 'Render Deployment', 'MongoDB'],
    githubUrl: 'https://github.com/SrimanKumarV/FSD',
    liveUrl: 'https://alumnex-connect.onrender.com/',
    color: 'from-purple-500/10 to-pink-500/5',
  },
];

// --- 3D Tilt Dashboard Card ---
const SpotlightCard = ({ project, index }: { project: any; index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const xPct = useMotionValue(0);
  const yPct = useMotionValue(0);

  const rotateX = useSpring(useTransform(yPct, [-0.5, 0.5], [8, -8]), { damping: 30, stiffness: 200 });
  const rotateY = useSpring(useTransform(xPct, [-0.5, 0.5], [-8, 8]), { damping: 30, stiffness: 200 });

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
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: '1200px' }}
      className="group relative h-full"
    >
      {/* Card Body */}
      <div className={`relative h-full rounded-2xl border border-[#1E293B] bg-[#0B0F19] p-8 flex flex-col overflow-hidden transition-all duration-300 shadow-xl`}>

        {/* Ambient Gradient Background */}
        <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${project.color} pointer-events-none`} />

        {/* Spotlight Radial */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(0,242,254,0.1), transparent 40%)`,
          }}
        />

        {/* Animated border on hover */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(0,242,254,0.3), transparent 40%) border-box`,
            border: '1px solid transparent',
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        {/* Top row: icon + links, lifted in Z */}
        <div className="relative z-10 flex justify-between items-start mb-6" style={{ transform: 'translateZ(30px)' }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
              <svg className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            {/* Title — scales up on hover and clickable */}
            <motion.a
              href="https://codolio.com/profile/Sriman_Kumar_V/devStats/github"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-white leading-tight text-xl cursor-pointer inline-block"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-accent hover:to-white transition-all duration-300">
                {project.title}
              </span>
            </motion.a>
          </div>

          <div className="flex gap-2 text-gray-500">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200 magnetic">
                <FaGithub size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200 magnetic">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Hook */}
        <p className="relative z-10 text-accent/90 text-sm font-medium mb-6 leading-relaxed" style={{ transform: 'translateZ(20px)' }}>
          "{project.hook}"
        </p>

        {/* Features (Terminal Style) */}
        <div className="relative z-10 flex-grow bg-[#05070A] border border-[#1E293B] rounded-xl p-5 mb-6 font-mono text-xs text-gray-300 shadow-inner" style={{ transform: 'translateZ(10px)' }}>
          <div className="flex gap-1.5 mb-4 border-b border-[#1E293B] pb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
          </div>
          <ul className="space-y-3">
            {project.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-accent shrink-0 mt-0.5">{'>'}</span> 
                <span className="leading-relaxed opacity-90">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags — Monospace blocks */}
        <div className="relative z-10 flex flex-wrap gap-2 mt-auto" style={{ transform: 'translateZ(5px)' }}>
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-[11px] font-mono font-medium text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md transition-colors group-hover:border-white/20 group-hover:text-white"
            >
              {tag}
            </span>
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
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="mb-16 md:text-center">
          {/* Animated heading with word-by-word hover inflate */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            {['System', 'Architecture.'].map((word, i) => (
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
            A collection of robust, full-stack systems and data-driven pipelines built to solve complex problems at scale.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, index) => (
            <SpotlightCard key={project.title} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};
