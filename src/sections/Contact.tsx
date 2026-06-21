import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-32 relative" id="contact">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Let's <span className="gradient-text">Connect.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-sans">
            Whether you have a question, an opportunity, or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12 rounded-3xl text-left max-w-2xl mx-auto relative overflow-hidden"
        >
          <form className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                id="message"
                rows={4}
                placeholder="How can I help you?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none"
              />
            </div>

            <button 
              type="button"
              className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 font-semibold text-base py-4 rounded-xl flex items-center justify-center gap-2 mt-4 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Send Message <Send size={18} />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-gray-300" />
              <a href="mailto:contact@example.com" className="hover:text-white transition-colors">contact@example.com</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-gray-300" />
              <span>Tamil Nadu, India</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
