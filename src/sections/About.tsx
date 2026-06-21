import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section className="py-32 relative bg-[#0a0a0a]" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-4">
          <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 sticky top-32">
            Expertise & Origin
          </h2>
        </div>

        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-2xl md:text-4xl font-serif italic leading-relaxed text-[#CCCCCC] mb-16"
          >
            "A blend of academic rigor, technical agility, and a relentless problem-solving mindset."
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="space-y-8 text-gray-400 font-sans text-lg max-w-2xl"
          >
            <p>
              I am a Computer Science Engineering student obsessed with the architecture of digital systems. My foundation is built on deep algorithmic understanding and scalable web development.
            </p>
            <p>
              Whether engineering a relational database schema, deploying a seamless frontend, or fine-tuning a machine learning model, my approach remains deliberate: write clean, maintainable, and highly efficient code.
            </p>
          </motion.div>

          {/* Minimalist Skills */}
          <div className="mt-24 grid sm:grid-cols-2 gap-12">
            {[
              { title: 'Core', skills: 'Java, Python, JS, C++' },
              { title: 'Frontend', skills: 'React, Tailwind, HTML/CSS' },
              { title: 'Backend', skills: 'Node.js, Express, PHP' },
              { title: 'Database & Tools', skills: 'MySQL, PostgreSQL, Git' }
            ].map((cat, i) => (
              <motion.div 
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1), ease: [0.76, 0, 0.24, 1] }}
                className="border-t border-white/10 pt-4"
              >
                <h4 className="text-white text-sm font-medium uppercase tracking-wider mb-2">{cat.title}</h4>
                <p className="text-gray-500 font-serif italic">{cat.skills}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
