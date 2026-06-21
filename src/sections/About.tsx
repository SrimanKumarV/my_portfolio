
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { SkillBadge } from '../components/SkillBadge';

const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'JavaScript', 'C', 'C++'],
  },
  {
    title: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'React.js'],
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'PHP'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'XAMPP'],
  },
];

export const About = () => {
  return (
    <section className="py-24 relative" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          title="About & Expertise" 
          subtitle="A blend of academic rigor, technical agility, and a relentless problem-solving mindset."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start mt-12">
          
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-gray-400 text-lg leading-relaxed"
          >
            <p>
              I am a Computer Science Engineering student with hands-on experience in full-stack web development, database management, and software engineering principles. My background is rooted in a deep curiosity for how digital systems operate at scale.
            </p>
            <p>
              I am passionate about building scalable applications, solving real-world problems, and continuously learning modern technologies. My approach blends an analytical problem-solving mindset with a dedication to collaborative teamwork and iterative development.
            </p>
            <p>
              Whether I am architecting a relational database, deploying a responsive frontend, or fine-tuning a machine learning model, my goal remains constant: to engineer elegant, maintainable solutions that create measurable impact.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.title} className="glass-card p-6 rounded-2xl">
                <h3 className="text-white font-display font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
