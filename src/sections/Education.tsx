
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { BookOpen, GraduationCap, Award } from 'lucide-react';

export const Education = () => {
  return (
    <section className="py-24 relative" id="experience">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Education & Certifications" 
          subtitle="Academic background and continuous learning endeavors."
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-12">
          
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-accent" size={28} />
              <h3 className="text-2xl font-display font-bold text-white">Academic Journey</h3>
            </div>

            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-transparent" />
              
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                  Bachelor of Engineering in Computer Science & Engineering
                </h4>
              </div>
              
              <div className="text-accent text-sm font-medium mb-4">
                Expected Graduation: 2028
              </div>
              
              <p className="text-gray-400 font-medium mb-6">
                Kongu Engineering College • Tamil Nadu, India
              </p>
              
              <div>
                <h5 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3 flex items-center gap-2">
                  <BookOpen size={16} /> Relevant Coursework
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {['Data Structures and Algorithms', 'Database Management Systems', 'Object Oriented Programming', 'Computer Networks', 'Operating Systems'].map((course) => (
                    <li key={course} className="text-gray-300 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 glass-card p-6 rounded-2xl border-l-4 border-l-indigo-500">
              <p className="text-gray-300 italic">
                "Actively building academic and personal software projects focused on full-stack development, databases, and software engineering."
              </p>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-accent" size={28} />
              <h3 className="text-2xl font-display font-bold text-white">Certifications</h3>
            </div>

            <div className="space-y-4">
              {[
                { name: 'Smart Certificate Program', issuer: 'Kongu Engineering College' },
                { name: 'Alumnex Connect', issuer: 'Web Development Certification' },
                { name: 'PostgreSQL', issuer: 'Database Management' },
                { name: 'Git & GitHub', issuer: 'Version Control Systems' },
              ].map((cert) => (
                <div key={cert.name} className="glass p-5 rounded-xl flex items-center justify-between group hover:border-accent/30 transition-all">
                  <div>
                    <h4 className="text-white font-medium mb-1 group-hover:text-accent transition-colors">{cert.name}</h4>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </div>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-accent/10 group-hover:text-accent transition-all">
                    <Award size={18} />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
