import { motion } from 'framer-motion';

export const Education = () => {
  return (
    <section className="py-24 relative" id="experience">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
            Education <span className="gradient-text">&</span> Experience.
          </h2>
          
          <motion.div 
            whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden transition-shadow"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-purple-500" />
            <span className="inline-block px-3 py-1 bg-white/10 text-xs font-medium text-white rounded-full mb-4">Class of 2028</span>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
              B.E. Computer Science & Engineering
            </h3>
            <p className="text-gray-400 font-medium mb-6">Kongu Engineering College &bull; Tamil Nadu, India</p>
            
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {['Data Structures', 'Algorithms', 'DBMS', 'OOP', 'Networks', 'OS'].map(course => (
                  <span key={course} className="text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
            Certifications.
          </h2>
          
          <div className="space-y-4">
            {[
              { name: 'Smart Certificate Program', issuer: 'Kongu Engineering College' },
              { name: 'Alumnex Connect', issuer: 'Web Development Certification' },
              { name: 'PostgreSQL', issuer: 'Database Management' },
              { name: 'Git & GitHub', issuer: 'Version Control Systems' },
            ].map((cert, index) => (
              <motion.div 
                key={cert.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="glass p-5 rounded-2xl flex items-center justify-between"
              >
                <div>
                  <h4 className="text-white font-medium mb-1">{cert.name}</h4>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <span className="text-accent text-lg">★</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
