import { useState } from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    title: 'Smart Cert',
    type: 'Enterprise Framework',
    description: 'Automated certificate management system and digital student workflows.',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
  },
  {
    title: 'Alumnex',
    type: 'Full-Stack Portal',
    description: 'Student-alumni networking, professional mentorship, and career tracking.',
    tags: ['Node.js', 'React', 'Express'],
  },
  {
    title: 'Lost & Found',
    type: 'Desktop App',
    description: 'High-integrity application with efficient data structures for tracking.',
    tags: ['Java', 'MySQL'],
  },
  {
    title: 'Sentiment',
    type: 'Machine Learning',
    description: 'Model capable of classifying sentiments from user reviews.',
    tags: ['Python', 'NLP'],
  },
  {
    title: 'Air Quality',
    type: 'Deep Learning',
    description: 'Predicting environmental pollution using neural networks.',
    tags: ['Python', 'Neural Networks'],
  }
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative bg-[#000000] z-20" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-16">
          Selected Work
        </h2>

        <div className="flex flex-col border-t border-white/10">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.title}
              className="group relative border-b border-white/10 py-10 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated Background on Hover */}
              <motion.div
                className="absolute inset-0 bg-white/5 origin-left -z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              />

              <div className="flex-1">
                <motion.h3 
                  className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-tighter text-white transition-colors duration-500 group-hover:text-transparent group-hover:text-stroke-hover"
                >
                  {project.title}
                </motion.h3>
              </div>

              <div className="flex-1 md:text-right flex flex-col md:items-end gap-3">
                <span className="text-xs uppercase tracking-widest text-[#CCCCCC] font-medium font-serif italic">
                  {project.type}
                </span>
                <p className="text-gray-400 text-sm max-w-xs transition-opacity duration-500 md:opacity-0 group-hover:opacity-100">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-500 border border-white/10 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
