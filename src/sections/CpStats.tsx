import { motion } from 'framer-motion';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ExternalLink } from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────────────── */
const PLATFORMS = [
  {
    name: 'LeetCode',
    handle: 'Sriman_Kumar_V',
    url: 'https://leetcode.com/u/Sriman_Kumar_V/',
    logo: '🔶',
    accent: '#FFA116',
    glow: 'rgba(255,161,22,',
    stats: [
      { label: 'Problems Solved', value: 200, suffix: '+' },
      { label: 'Contest Rating', value: 1450, suffix: '' },
      { label: 'Global Rank', value: 350000, suffix: '+', prefix: 'Top ' },
    ],
    badges: ['50 Days Badge', 'SQL 50', 'Top Interview 150'],
  },
  {
    name: 'GeeksForGeeks',
    handle: 'srimankumar',
    url: 'https://www.geeksforgeeks.org/user/srimankumar/',
    logo: '🟢',
    accent: '#2F8D46',
    glow: 'rgba(47,141,70,',
    stats: [
      { label: 'Problems Solved', value: 150, suffix: '+' },
      { label: 'Score', value: 800, suffix: '+' },
      { label: 'Streak (Days)', value: 30, suffix: '+' },
    ],
    badges: ['Problem Solver', 'Consistent Coder'],
  },
  {
    name: 'HackerRank',
    handle: 'SrimanKumarV',
    url: 'https://www.hackerrank.com/SrimanKumarV',
    logo: '🟩',
    accent: '#00EA64',
    glow: 'rgba(0,234,100,',
    stats: [
      { label: 'Problems Solved', value: 100, suffix: '+' },
      { label: 'Stars Earned', value: 5, suffix: '★' },
      { label: 'Certifications', value: 3, suffix: '' },
    ],
    badges: ['Gold — Problem Solving', 'Gold — Java', 'Gold — Python'],
  },
  {
    name: 'Codolio',
    handle: 'Sriman_Kumar_V',
    url: 'https://codolio.com/profile/Sriman_Kumar_V',
    logo: '🔷',
    accent: '#00F2FE',
    glow: 'rgba(0,242,254,',
    stats: [
      { label: 'Total Solved', value: 450, suffix: '+' },
      { label: 'Active Platforms', value: 4, suffix: '' },
      { label: 'Dev Stats', value: 12, suffix: ' repos' },
    ],
    badges: ['Consistent Programmer', 'Multi-Platform', 'Open Source'],
  },
];

/* ─── Platform Card ────────────────────────────────────────────────── */
const PlatformCard = ({ platform, index }: { platform: typeof PLATFORMS[0]; index: number }) => (
  <motion.a
    href={platform.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -6, scale: 1.01 }}
    className="group relative glass-card p-6 rounded-2xl overflow-hidden block"
  >
    {/* Hover ambient fill */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ background: `radial-gradient(ellipse at 50% 0%, ${platform.glow}0.12) 0%, transparent 70%)` }}
    />

    {/* Top accent line */}
    <div
      className="absolute top-0 left-8 right-8 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: platform.accent }}
    />

    {/* Header */}
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl border"
          style={{
            borderColor: `${platform.accent}44`,
            background: `${platform.glow}0.12)`,
            boxShadow: `0 0 10px ${platform.glow}0.2)`,
          }}
        >
          {platform.logo}
        </div>
        <div>
          <h3 className="text-white font-display font-bold text-base">{platform.name}</h3>
          <p className="text-xs text-gray-500 font-mono">@{platform.handle}</p>
        </div>
      </div>
      <ExternalLink
        size={15}
        className="text-gray-600 group-hover:text-gray-300 transition-colors"
      />
    </div>

    {/* Stats row */}
    <div className="grid grid-cols-3 gap-3 mb-5">
      {platform.stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div
            className="text-xl font-display font-bold mb-0.5"
            style={{ color: platform.accent }}
          >
            {stat.prefix && <span className="text-sm">{stat.prefix}</span>}
            <AnimatedCounter end={stat.value} suffix="" duration={2000} />
            {stat.suffix && <span className="text-sm">{stat.suffix}</span>}
          </div>
          <div className="text-[10px] text-gray-500 leading-tight">{stat.label}</div>
        </div>
      ))}
    </div>

    {/* Divider */}
    <div className="h-px bg-white/5 mb-4" />

    {/* Badges */}
    <div className="flex flex-wrap gap-2">
      {platform.badges.map((badge) => (
        <span
          key={badge}
          className="text-[10px] font-medium px-2.5 py-1 rounded-full border transition-colors"
          style={{
            color: platform.accent,
            borderColor: `${platform.accent}33`,
            background: `${platform.glow}0.06)`,
          }}
        >
          {badge}
        </span>
      ))}
    </div>
  </motion.a>
);

/* ─── Summary Bar ───────────────────────────────────────────────────── */
const SummaryBar = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5 }}
    className="mt-10 glass-card p-6 rounded-2xl relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 pointer-events-none" />
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <h3 className="text-white font-display font-bold text-lg mb-1">Total Across All Platforms</h3>
        <p className="text-gray-400 text-sm">Actively solving problems every day.</p>
      </div>
      <div className="flex gap-8 md:gap-12">
        {[
          { label: 'Problems Solved', value: 450, suffix: '+' },
          { label: 'Platforms Active', value: 4, suffix: '' },
          { label: 'Badges Earned', value: 10, suffix: '+' },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <div className="text-3xl font-display font-bold gradient-text-accent">
              <AnimatedCounter end={item.value} suffix={item.suffix} duration={2000} />
            </div>
            <div className="text-xs text-gray-500 mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

/* ─── Section ───────────────────────────────────────────────────────── */
export const CpStats = () => {
  return (
    <section className="py-24 relative" id="cp-stats">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="mb-14 md:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            {['Competitive', 'Programming.'].map((word, i) => (
              <motion.span
                key={word}
                className={`inline-block mr-3 ${i === 1 ? 'gradient-text-accent' : ''}`}
                whileHover={{ scale: 1.05, y: -3 }}
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
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            My activity across coding platforms — click any card to visit my profile.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLATFORMS.map((platform, index) => (
            <PlatformCard key={platform.name} platform={platform} index={index} />
          ))}
        </div>

        <SummaryBar />

      </div>
    </section>
  );
};
