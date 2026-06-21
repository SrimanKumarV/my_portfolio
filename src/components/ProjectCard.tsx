
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  delay?: number;
}

export const ProjectCard = ({ title, description, tags, githubUrl, liveUrl, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group flex flex-col h-full glass-card p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <div className="flex gap-3 text-gray-400">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <FaGithub size={20} />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-accent transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 flex-grow mb-6 line-clamp-3">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-medium text-accent/80 bg-accent/10 px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
