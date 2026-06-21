
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-4"
      >
        <div className="h-px w-12 bg-accent/50" />
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
          {title}
        </h2>
        <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-accent/50 to-transparent flex-1" />
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 max-w-2xl text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
