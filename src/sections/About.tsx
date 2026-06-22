import { motion } from 'framer-motion';

const SKILL_CATEGORIES = [
  { title: 'Languages', skills: ['Java', 'Python', 'JavaScript (ES6+)', 'SQL', 'C++'] },
  { title: 'Web Ecosystem', skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'HTML5/CSS3', 'TailwindCSS'] },
  { title: 'Desktop & Infra', skills: ['Java Swing', 'JDBC', 'MySQL', 'Git', 'Render Cloud'] },
  { title: 'Data Science', skills: ['OpenCV', 'Predictive Modeling', 'Data Analysis'] }
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
                I am a foundational tech talent and aspiring Software & AI Engineer with a strong command of Data Structures, Algorithms, and scalable Full-Stack Development. I am an active competitive programmer adept at optimizing complex solutions under tight constraints.
              </p>
              <p>
                Experienced in developing robust web architectures and integrating predictive machine learning models, I am highly motivated to leverage AI and engineering capabilities in hyper-scale environments to build product-oriented solutions for millions of users.
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
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" }}
                className="glass-card p-6 rounded-2xl cursor-pointer transition-shadow"
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
