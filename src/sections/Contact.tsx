import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle, Loader } from 'lucide-react';
import { useState } from 'react';

type FormStatus = 'idle' | 'sending' | 'success';

export const Contact = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate send delay
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section className="py-32 relative" id="contact">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Let's <span className="gradient-text">Connect.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-sans">
            Whether you have a question, an opportunity, or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12 rounded-3xl text-left max-w-2xl mx-auto relative overflow-hidden"
        >
          {/* Ambient glow inside card */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/3 bg-accent/5 blur-2xl rounded-full pointer-events-none" />

          <AnimatePresence mode="wait">
            {formStatus === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex flex-col items-center justify-center py-12 gap-4 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
                  className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center"
                >
                  <CheckCircle size={36} className="text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                {/* Confetti burst */}
                {['🎉', '✨', '🚀', '💫', '⭐'].map((emoji, i) => (
                  <motion.span
                    key={i}
                    className="absolute text-2xl pointer-events-none select-none"
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    animate={{
                      x: (Math.random() - 0.5) * 300,
                      y: (Math.random() - 0.5) * 200,
                      opacity: 0,
                      scale: 0,
                      rotate: Math.random() * 360,
                    }}
                    transition={{ duration: 1.2, delay: i * 0.08 }}
                    style={{ left: '50%', top: '40%' }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6 relative z-10"
                onSubmit={handleSubmit}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="How can I help you?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255,255,255,0.2)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-black hover:bg-gray-100 transition-all duration-300 font-semibold text-base py-4 rounded-xl flex items-center justify-center gap-2 mt-4 shadow-[0_0_20px_rgba(255,255,255,0.1)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <Loader size={18} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm font-medium">
            <div className="flex items-center gap-2 hover:text-white transition-colors group">
              <Mail size={16} className="text-gray-300 group-hover:text-accent transition-colors" />
              <a href="mailto:srimankumar06@gmail.com">srimankumar06@gmail.com</a>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors group">
              <Phone size={16} className="text-gray-300 group-hover:text-accent transition-colors" />
              <a href="tel:+916381876020">+91-6381876020</a>
            </div>
            <div className="flex items-center gap-2 group">
              <MapPin size={16} className="text-gray-300 group-hover:text-accent transition-colors" />
              <span>Tamil Nadu, India</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
