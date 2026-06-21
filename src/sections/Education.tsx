import { motion } from 'framer-motion';

export const Education = () => {
  return (
    <section className="py-32 relative bg-[#000000]" id="experience">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-4">
          <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 sticky top-32">
            Background
          </h2>
        </div>

        <div className="lg:col-span-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="border-b border-white/10 pb-12 mb-12"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-[#CCCCCC] mb-4 block">Education</span>
            <h3 className="text-3xl md:text-5xl font-sans font-bold text-white mb-2">
              B.E. Computer Science
            </h3>
            <p className="text-xl font-serif italic text-gray-400 mb-6">Kongu Engineering College</p>
            <div className="flex items-center gap-4 text-sm text-gray-500 uppercase tracking-widest">
              <span>Class of 2028</span>
              <span className="w-1 h-1 rounded-full bg-gray-500" />
              <span>Tamil Nadu, IN</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="text-xs font-medium uppercase tracking-widest text-[#CCCCCC] mb-8 block">Certifications</span>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { name: 'Smart Certificate Program', issuer: 'Kongu Engineering College' },
                { name: 'Alumnex Connect', issuer: 'Web Development Certification' },
                { name: 'PostgreSQL', issuer: 'Database Management' },
                { name: 'Git & GitHub', issuer: 'Version Control' },
              ].map((cert) => (
                <div key={cert.name} className="group cursor-pointer">
                  <h4 className="text-white font-sans text-lg font-medium group-hover:text-[#CCCCCC] transition-colors">{cert.name}</h4>
                  <p className="text-gray-500 font-serif italic text-sm mt-1">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
