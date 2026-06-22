import { motion, useMotionTemplate, useMotionValue, useTransform, useSpring } from 'framer-motion';
import type { MouseEvent } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const CODOLIO = 'https://codolio.com/profile/Sriman_Kumar_V';

const PROJECTS = [
  {
    title: 'Alumnex-Connect Portal',
    hook: 'A professional web networking platform bridging communication between institutional alumni and current undergraduates.',
    features: [
      'Secure JWT-based session handling',
      'Direct mentorship messaging architecture',
      'Optimized server-side routing deployed on cloud infrastructure',
    ],
    tags: ['Node.js', 'React', 'MongoDB', 'Render Cloud'],
    githubUrl: 'https://github.com/SrimanKumarV/FSD',
    liveUrl: 'https://alumnex-connect.onrender.com/',
    color: 'from-purple-500/15 to-pink-500/8',
    accent: 'rgba(167,139,250,',
    num: '01',
  },
  {
    title: 'Urban Dust Pollution Predictor',
    hook: 'An environmental data science pipeline mapping urban particulate accumulation via leaf reflectance metrics.',
    features: [
      'ML feature extraction from leaf surface spectrometry',
      'Preprocessing noisy environmental datasets',
      'Evaluating model boundaries with real-world accuracy',
    ],
    tags: ['Python', 'OpenCV', 'Scikit-Learn', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/SrimanKumarV/Air_Pollution_Prediction_Using_DeepLearning',
    liveUrl: 'https://air-pollution-prediction-using-deeplearning.streamlit.app/',
    color: 'from-sky-500/15 to-indigo-500/8',
    accent: 'rgba(79,172,254,',
    num: '02',
  },
  {
    title: 'Smart Certificate System',
    hook: 'An automated institutional framework eliminating manual certificate processing delays.',
    features: [
      'Automated PDF synthesis at scale',
      'Role-based access control for verification',
      'Automated request queues with status tracking',
    ],
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS'],
    githubUrl: 'https://github.com/SrimanKumarV/DESIGN-THINKING',
    liveUrl: 'https://smart-certificate-generation.great-site.net/',
    color: 'from-blue-500/15 to-cyan-500/8',
    accent: 'rgba(0,242,254,',
    num: '03',
  },
  {
    title: 'Decoding Palindrome',
    hook: 'Bridging the gap between theoretical math and real-world CPU performance via empirical benchmarking.',
    features: [
      'Empirical deep-dive into iterative vs recursive algorithms',
      'Unmasking hidden overhead behind classic algorithm designs',
      'Real-world algorithmic benchmarking & visualization',
    ],
    tags: ['HTML', 'Algorithms', 'Performance Analysis'],
    githubUrl: 'https://github.com/SrimanKumarV/Decoding-Palindrome-Verification',
    liveUrl: 'https://decoding-palindrome-verification.vercel.app/',
    color: 'from-emerald-500/15 to-teal-500/8',
    accent: 'rgba(52,211,153,',
    num: '04',
  },
];

/* ─── 3D Tilt Spotlight Card ───────────────────────────────────────── */
const SpotlightCard = ({ project, index }: { project: typeof PROJECTS[0]; index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const xPct = useMotionValue(0);
  const yPct = useMotionValue(0);

  const rotateX = useSpring(useTransform(yPct, [-0.5, 0.5], [7, -7]), { damping: 30, stiffness: 200 });
  const rotateY = useSpring(useTransform(xPct, [-0.5, 0.5], [-7, 7]), { damping: 30, stiffness: 200 });

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

  const accentRgba = project.accent;

  const handleCardClick = (e: MouseEvent) => {
    // If click originated from an inner-link, don't open codolio
    if ((e.target as HTMLElement).closest('.inner-link')) return;
    window.open(CODOLIO, '_blank', 'noopener,noreferrer');
  };

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
      {/* Whole card is clickable → Codolio */}
      <div
        role="link"
        tabIndex={0}
        onClick={handleCardClick}
        onKeyDown={(e) => e.key === 'Enter' && handleCardClick(e as any)}
        className="block relative h-full cursor-pointer"
      >
        <div className={`relative h-full rounded-2xl border border-[#1E293B] bg-[#0B0F19] flex flex-col overflow-hidden transition-all duration-300 shadow-xl group-hover:border-opacity-50`}>

          {/* Ambient Gradient Background */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${project.color} pointer-events-none`} />
          <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${project.color} pointer-events-none`} />

          {/* Spotlight Radial */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`radial-gradient(550px circle at ${mouseX}px ${mouseY}px, ${accentRgba}0.08), transparent 40%)`,
            }}
          />

          {/* Animated border glow on hover */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, ${accentRgba}0.25), transparent 40%) border-box`,
              border: '1px solid transparent',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-8 flex flex-col h-full">

            {/* Top row */}
            <div className="flex justify-between items-start mb-5" style={{ transform: 'translateZ(30px)' }}>
              <div className="flex items-center gap-3">
                {/* Project number */}
                <span className="text-xs font-mono text-gray-600 group-hover:text-gray-400 transition-colors select-none">
                  {project.num}
                </span>
                {/* Title — click goes to live URL */}
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inner-link font-display font-bold text-white leading-tight text-xl"
                  whileHover={{ scale: 1.04, y: -1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00F2FE] hover:to-white transition-all duration-300">
                    {project.title}
                  </span>
                </motion.a>
              </div>

              <div className="flex gap-1.5 text-gray-500 shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inner-link p-2 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size={17} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inner-link p-2 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={17} />
                  </a>
                )}
              </div>
            </div>

            {/* Hook */}
            <p
              className="text-gray-400 text-sm font-medium mb-5 leading-relaxed italic"
              style={{ transform: 'translateZ(20px)' }}
            >
              "{project.hook}"
            </p>

            {/* Features — Terminal */}
            <div
              className="flex-grow bg-[#05070A] border border-[#1E293B] rounded-xl p-5 mb-5 font-mono text-xs text-gray-300 shadow-inner"
              style={{ transform: 'translateZ(10px)' }}
            >
              <div className="flex gap-1.5 mb-3 border-b border-[#1E293B] pb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#00F2FE] shrink-0 mt-0.5">{'>'}</span>
                    <span className="leading-relaxed opacity-80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto" style={{ transform: 'translateZ(5px)' }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono font-medium text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md group-hover:border-white/20 group-hover:text-gray-300 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Hover CTA hint */}
            <div className="mt-4 flex items-center gap-1.5 text-[10px] text-gray-600 group-hover:text-gray-400 transition-colors font-mono">
              <span>↗</span>
              <span>View on Codolio</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Main Section ─────────────────────────────────────────────────── */
export const Projects = () => {
  return (
    <section className="py-24 relative" id="projects">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="mb-16 md:text-center">
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
            Click any card to view on Codolio · Click a title to open the live deployment.
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
