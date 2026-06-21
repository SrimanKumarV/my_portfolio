import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section className="py-32 relative bg-[#0a0a0a]" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-4">
          <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 sticky top-32">
            Engage
          </h2>
        </div>

        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-sans font-bold text-white mb-6 uppercase tracking-tighter">
              Let's <span className="font-serif italic text-[#CCCCCC] normal-case tracking-normal">connect.</span>
            </h2>
            <p className="text-gray-400 font-serif italic text-xl md:text-2xl mb-16 max-w-lg">
              Open for full-time roles, internships, and algorithmic challenges.
            </p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="space-y-12 max-w-2xl"
          >
            <div className="relative group">
              <input 
                type="text" 
                id="name"
                placeholder=" "
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-white transition-all duration-300 peer"
              />
              <label htmlFor="name" className="absolute left-0 top-4 text-gray-500 uppercase tracking-widest text-xs font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-placeholder-shown:text-base peer-placeholder-shown:top-4">
                Name
              </label>
            </div>
            
            <div className="relative group">
              <input 
                type="email" 
                id="email"
                placeholder=" "
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-white transition-all duration-300 peer"
              />
              <label htmlFor="email" className="absolute left-0 top-4 text-gray-500 uppercase tracking-widest text-xs font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-placeholder-shown:text-base peer-placeholder-shown:top-4">
                Email
              </label>
            </div>
            
            <div className="relative group">
              <textarea 
                id="message"
                rows={1}
                placeholder=" "
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-white transition-all duration-300 resize-none overflow-hidden peer"
              />
              <label htmlFor="message" className="absolute left-0 top-4 text-gray-500 uppercase tracking-widest text-xs font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-placeholder-shown:text-base peer-placeholder-shown:top-4">
                Message
              </label>
            </div>

            <button 
              type="button"
              className="mt-8 uppercase tracking-widest text-xs font-bold text-white border border-white/20 py-5 px-12 hover:bg-white hover:text-black transition-colors duration-500"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};
