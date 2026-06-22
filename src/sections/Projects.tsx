import { motion, useMotionTemplate, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import type { MouseEvent } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const CODOLIO = 'https://codolio.com/profile/Sriman_Kumar_V';

/* ─── Screenshot via thum.io (free, no API key needed) ─────────────── */
const thumb = (url: string) =>
  `https://image.thum.io/get/width/900/crop/500/noanimate/${url}`;

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
    coverImage: thumb('https://alumnex-connect.onrender.com/'),
    color: 'from-purple-500/20 to-pink-500/10',
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
    coverImage: thumb('https://air-pollution-prediction-using-deeplearning.streamlit.app/'),
    color: 'from-sky-500/20 to-indigo-500/10',
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
    coverImage: thumb('https://smart-certificate-generation.great-site.net/'),
    color: 'from-blue-500/20 to-cyan-500/10',
    accent: 'rgba(0,242,254,',
    num: '03',
  },
  {
    title: 'Railway Track Allocation',
    hook: 'A real-time junction control simulator applying Banker\'s Algorithm for deadlock-free railway track scheduling.',
    features: [
      'Banker\'s Algorithm for safe-state track allocation',
      'Interactive junction visualizer with live train positions',
      'Step-by-step deadlock detection & auto-resolution',
    ],
    tags: ['HTML', 'JavaScript', 'DSA', 'Banker\'s Algorithm', 'Graph Theory'],
    githubUrl: 'https://github.com/SrimanKumarV',
    liveUrl: null,
    coverImage: null,
    coverGradient: 'linear-gradient(135deg, #0a0e14 0%, #0f2027 40%, #1e3a5f 70%, #00e5a022 100%)',
    coverEmoji: '🚂',
    coverLabel: 'Junction Control System',
    color: 'from-green-500/20 to-emerald-500/10',
    accent: 'rgba(0,229,160,',
    num: '04',
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
    coverImage: thumb('https://decoding-palindrome-verification.vercel.app/'),
    color: 'from-emerald-500/20 to-teal-500/10',
    accent: 'rgba(52,211,153,',
    num: '05',
  },
  {
    title: 'Student Feedback System',
    hook: 'A full-stack academic feedback platform enabling anonymous submissions, faculty analytics, and admin moderation at institutional scale.',
    features: [
      'Anonymous feedback submission with category tagging',
      'Faculty performance analytics dashboard',
      'Admin moderation pipeline with reporting exports',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    githubUrl: 'https://github.com/SrimanKumarV',
    liveUrl: null,
    coverImage: null,
    coverGradient: 'linear-gradient(135deg, #0d0d1a 0%, #1a1040 40%, #2d1b69 70%, #7c3aed22 100%)',
    coverEmoji: '📋',
    coverLabel: 'Academic Feedback Portal',
    color: 'from-violet-500/20 to-purple-500/10',
    accent: 'rgba(139,92,246,',
    num: '06',
  },
];

type Project = typeof PROJECTS[0];

/* ─── Cover Preview Panel ───────────────────────────────────────────── */
const CoverPreview = ({ project, visible }: { project: Project; visible: boolean }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        key="cover"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 170, opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden relative flex-shrink-0"
        style={{ borderRadius: '12px 12px 0 0' }}
      >
        {project.coverImage ? (
          <>
            <motion.img
              src={project.coverImage}
              alt={project.title + ' preview'}
              className="w-full h-full object-cover object-top"
              loading="lazy"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              exit={{ scale: 1.08 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{ height: 170 }}
            />
            {/* Gradient fade into card */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, transparent 40%, rgba(11,15,25,0.7) 75%, #0B0F19 100%)`,
              }}
            />
          </>
        ) : (
          /* Gradient art for projects without live URLs */
          <div className="w-full h-full relative" style={{ background: (project as any).coverGradient, height: 170 }}>
            {/* Scanline effect */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
              }}
            />
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <span className="text-5xl">{(project as any).coverEmoji}</span>
              <span
                className="text-xs font-mono tracking-widest uppercase"
                style={{ color: project.accent + '0.8)' }}
              >
                {(project as any).coverLabel}
              </span>
            </div>
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, transparent 50%, #0B0F19 100%)`,
              }}
            />
          </div>
        )}

        {/* LIVE PREVIEW badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium"
          style={{
            background: project.accent + '0.15)',
            border: `1px solid ${project.accent}0.4)`,
            color: project.accent + '1)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <Eye size={10} />
          {project.liveUrl ? 'LIVE PREVIEW' : 'PROJECT OVERVIEW'}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

/* ─── 3D Tilt Spotlight Card ───────────────────────────────────────── */
const SpotlightCard = ({ project, index }: { project: Project; index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const xPct = useMotionValue(0);
  const yPct = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useSpring(useTransform(yPct, [-0.5, 0.5], [6, -6]), { damping: 30, stiffness: 200 });
  const rotateY = useSpring(useTransform(xPct, [-0.5, 0.5], [-6, 6]), { damping: 30, stiffness: 200 });

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
    setIsHovered(false);
  }

  const handleCardClick = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest('.inner-link')) return;
    window.open(CODOLIO, '_blank', 'noopener,noreferrer');
  };

  const accentRgba = project.accent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: '1200px' }}
      className="group relative h-full"
    >
      <div
        role="link"
        tabIndex={0}
        onClick={handleCardClick}
        onKeyDown={(e) => e.key === 'Enter' && handleCardClick(e as any)}
        className="block relative h-full cursor-pointer"
      >
        <div className="relative h-full rounded-2xl border border-[#1E293B] bg-[#0B0F19] flex flex-col overflow-hidden transition-all duration-300 shadow-xl">

          {/* Ambient gradient */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${project.color} pointer-events-none`} />
          <div className={`absolute inset-0 opacity-[0.04] bg-gradient-to-br ${project.color} pointer-events-none`} />

          {/* Mouse spotlight */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, ${accentRgba}0.07), transparent 40%)`,
            }}
          />

          {/* Glow border on hover */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, ${accentRgba}0.22), transparent 40%) border-box`,
              border: '1px solid transparent',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />

          {/* ── Cover image reveal (slides in from top on hover) ── */}
          <CoverPreview project={project} visible={isHovered} />

          {/* ── Card Content ── */}
          <div className="relative z-10 p-7 flex flex-col flex-grow">

            {/* Top row: number + title + links */}
            <div className="flex justify-between items-start mb-4" style={{ transform: 'translateZ(30px)' }}>
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono text-gray-600 group-hover:text-gray-400 transition-colors select-none tabular-nums">
                  {project.num}
                </span>
                {/* Title → live URL */}
                <motion.a
                  href={project.liveUrl ?? project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inner-link font-display font-bold text-white leading-tight text-lg"
                  whileHover={{ scale: 1.04, y: -1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00F2FE] hover:to-white transition-all duration-300">
                    {project.title}
                  </span>
                </motion.a>
              </div>

              <div className="flex gap-1 text-gray-500 shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inner-link p-2 rounded-lg hover:bg-white/10 hover:text-white transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size={16} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inner-link p-2 rounded-lg hover:bg-white/10 hover:text-white transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            {/* Hook — vibrant gradient tagline */}
            <div
              className="relative mb-4 pl-4"
              style={{ transform: 'translateZ(20px)' }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
                style={{
                  background: `linear-gradient(180deg, ${accentRgba}0.9), transparent)`,
                  boxShadow: `0 0 8px ${accentRgba}0.5)`,
                }}
              />
              <p
                className="text-sm font-semibold leading-relaxed tracking-wide"
                style={{
                  background: `linear-gradient(120deg, #ffffff 0%, ${accentRgba}1) 50%, #ffffff 100%)`,
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'taglineShimmer 4s linear infinite',
                }}
              >
                "{project.hook}"
              </p>
            </div>

            {/* Terminal features */}
            <div
              className="flex-grow bg-[#05070A] border border-[#1E293B] rounded-xl p-4 mb-4 font-mono text-xs text-gray-300 shadow-inner"
              style={{ transform: 'translateZ(10px)' }}
            >
              <div className="flex gap-1.5 mb-3 border-b border-[#1E293B] pb-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <ul className="space-y-2.5">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#00F2FE] shrink-0 mt-0.5">{'>'}</span>
                    <span className="leading-relaxed opacity-80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-auto" style={{ transform: 'translateZ(5px)' }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono font-medium text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md group-hover:border-white/20 group-hover:text-gray-300 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Codolio hint */}
            <div className="mt-3 flex items-center gap-1.5 text-[10px] text-gray-600 group-hover:text-gray-400 transition-colors font-mono">
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
            Hover a card to preview · Click the title to open the live demo · Click anywhere else to view on Codolio.
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
