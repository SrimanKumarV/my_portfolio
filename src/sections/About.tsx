import { motion } from 'framer-motion';
import {
  SiJavascript, SiPython, SiCplusplus, SiTypescript, SiHtml5,
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiNextdotjs,
  SiOpencv, SiScikitlearn, SiPandas, SiNumpy, SiTensorflow,
  SiGit, SiGithub, SiMysql, SiPostman, SiLinux, SiVercel,
} from 'react-icons/si';
import { FaJava, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { Cloud } from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────────────── */
const TECH_CATEGORIES = [
  {
    title: 'Languages',
    icon: '⚙️',
    accent: '#00F2FE',
    glow: 'rgba(0,242,254,0.15)',
    border: 'rgba(0,242,254,0.2)',
    techs: [
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
    ],
  },
  {
    title: 'Web Ecosystem',
    icon: '🌐',
    accent: '#a78bfa',
    glow: 'rgba(167,139,250,0.15)',
    border: 'rgba(167,139,250,0.2)',
    techs: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    title: 'Data Science & AI',
    icon: '🧠',
    accent: '#34d399',
    glow: 'rgba(52,211,153,0.15)',
    border: 'rgba(52,211,153,0.2)',
    techs: [
      { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
      { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'Pandas', icon: SiPandas, color: '#150458' },
      { name: 'NumPy', icon: SiNumpy, color: '#013243' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
    ],
  },
  {
    title: 'Infrastructure & Tools',
    icon: '☁️',
    accent: '#fb923c',
    glow: 'rgba(251,146,60,0.15)',
    border: 'rgba(251,146,60,0.2)',
    techs: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
      { name: 'Render', icon: Cloud, color: '#46E3B7' },
    ],
  },
];

/* ─── Tag Chip ─────────────────────────────────────────────────────── */
const TechChip = ({
  tech,
  accent,
  delay,
}: {
  tech: (typeof TECH_CATEGORIES)[0]['techs'][0];
  accent: string;
  delay: number;
}) => {
  const Icon = tech.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 6 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.1, y: -3 }}
      className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] cursor-default select-none transition-all duration-200 hover:border-white/20"
      style={{
        boxShadow: 'none',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${accent}44, inset 0 0 8px ${accent}11`;
        (e.currentTarget as HTMLElement).style.borderColor = `${accent}55`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLElement).style.borderColor = '';
      }}
    >
      <Icon size={15} style={{ color: tech.color, flexShrink: 0 }} />
      <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">
        {tech.name}
      </span>
    </motion.div>
  );
};

/* ─── Skill Card ────────────────────────────────────────────────────── */
const SkillCard = ({
  category,
  catIndex,
}: {
  category: (typeof TECH_CATEGORIES)[0];
  catIndex: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: catIndex * 0.12, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -6, scale: 1.01 }}
    className="relative group glass-card p-6 rounded-2xl cursor-default overflow-hidden"
  >
    {/* Hover ambient fill */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ background: `radial-gradient(ellipse at 30% 0%, ${category.glow} 0%, transparent 70%)` }}
    />

    {/* Top accent bar */}
    <div
      className="absolute top-0 left-6 right-6 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: `linear-gradient(90deg, transparent, ${category.accent}, transparent)` }}
    />

    {/* Header */}
    <div className="flex items-center gap-3 mb-5 relative z-10">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg border"
        style={{
          background: `${category.glow}`,
          borderColor: category.border,
          boxShadow: `0 0 12px ${category.glow}`,
        }}
      >
        {category.icon}
      </div>
      <div>
        <h3 className="text-white font-display font-semibold text-sm leading-tight">{category.title}</h3>
        <p className="text-xs text-gray-500 mt-0.5">{category.techs.length} technologies</p>
      </div>
    </div>

    {/* Chip Grid */}
    <div className="relative z-10 flex flex-wrap gap-2">
      {category.techs.map((tech, i) => (
        <TechChip
          key={tech.name}
          tech={tech}
          accent={category.accent}
          delay={catIndex * 0.1 + i * 0.04}
        />
      ))}
    </div>
  </motion.div>
);

/* ─── Quick-Fact Tile ───────────────────────────────────────────────── */
const FactTile = ({ label, value }: { label: string; value: string }) => (
  <motion.div
    whileHover={{ y: -3, scale: 1.02 }}
    className="glass p-4 rounded-xl cursor-default"
  >
    <div className="text-xs text-gray-500 mb-1">{label}</div>
    <div className="text-sm font-semibold text-white">{value}</div>
  </motion.div>
);

/* ─── Section ───────────────────────────────────────────────────────── */
export const About = () => {
  return (
    <section className="py-24 relative" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: Bio ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:sticky lg:top-28"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              About & <span className="gradient-text">Expertise.</span>
            </h2>
            <div className="space-y-5 text-gray-400 text-base md:text-lg leading-relaxed font-sans">
              <p>
                I am a <span className="text-white font-medium">foundational tech talent</span> and aspiring
                Software & AI Engineer with a strong command of Data Structures, Algorithms, and scalable
                Full-Stack Development.
              </p>
              <p>
                An active competitive programmer adept at optimizing complex solutions under tight constraints —
                experienced in developing robust web architectures and integrating{' '}
                <span className="text-white font-medium">predictive machine learning models</span>.
              </p>
              <p>
                Highly motivated to leverage AI and engineering capabilities in{' '}
                <span className="gradient-text-accent font-semibold">hyper-scale environments</span> to build
                product-oriented solutions for millions of users.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <FactTile label="🎓 Degree" value="B.E. Computer Science" />
              <FactTile label="📍 Location" value="Tamil Nadu, India" />
              <FactTile label="⚡ Status" value="Open to Work" />
              <FactTile label="🏆 CP Rating" value="HackerRank Gold" />
            </div>
          </motion.div>

          {/* ── Right: Skill Cards ── */}
          <div className="grid sm:grid-cols-2 gap-4">
            {TECH_CATEGORIES.map((cat, i) => (
              <SkillCard key={cat.title} category={cat} catIndex={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
