import { motion } from 'framer-motion';

const SKILL_CATEGORIES = [
  { title: 'Languages', skills: ['Java', 'Python', 'JavaScript', 'C/C++'] },
  { title: 'Frontend', skills: ['React.js', 'Tailwind CSS', 'HTML/CSS'] },
  { title: 'Backend', skills: ['Node.js', 'Express', 'PHP'] },
  { title: 'Databases', skills: ['MySQL', 'PostgreSQL'] }
];

export const About = () => {
  return (
    <section className="py-24 relative" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              About & <span className="gradient-text">Expertise.</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-sans">
              <p>
                I am a Computer Science Engineering student with hands-on experience in full-stack web development, database management, and software engineering principles. My background is rooted in a deep curiosity for how digital systems operate at scale.
              </p>
              <p>
                I am passionate about building scalable applications, solving real-world problems, and continuously learning modern technologies. My approach blends an analytical problem-solving mindset with a dedication to collaborative teamwork and iterative development.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {SKILL_CATEGORIES.map((category, index) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-accent to-purple-500" />
                </div>
                <h3 className="text-white font-display font-semibold mb-3">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="text-xs font-medium text-gray-400 bg-white/5 px-2.5 py-1 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
