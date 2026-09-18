import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Instagram, Youtube, Send, X, CheckCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setIsModalOpen(false);
        setFormStatus('idle');
      }, 2000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full text-[10px] font-bold tracking-[0.2em] text-brand-yellow uppercase mb-6"
              >
                Get In Touch
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tight mb-8">
                Let's Build <br />
                Something <span className="text-brand-yellow">Epic</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-lg">
                Ready to take your content to the next level? Whether it's a short-form reel or a long-form documentary, I'm here to help.
              </p>

              <div className="space-y-8">
                <motion.a 
                  href="mailto:v38401485@gmail.com"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all duration-500 shadow-[0_0_20px_rgba(255,212,0,0.05)] group-hover:shadow-[0_0_30px_rgba(255,212,0,0.3)]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1">Email Me</p>
                    <p className="text-xl font-bold group-hover:text-brand-yellow transition-colors whitespace-nowrap">v38401485@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a 
                  href="tel:8894054286"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all duration-500 shadow-[0_0_20px_rgba(255,212,0,0.05)] group-hover:shadow-[0_0_30px_rgba(255,212,0,0.3)]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1">Call Me</p>
                    <p className="text-xl font-bold group-hover:text-brand-yellow transition-colors whitespace-nowrap">8894054286</p>
                  </div>
                </motion.a>

                <div className="flex gap-4 pt-4">
                  {SOCIAL_LINKS.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-yellow hover:border-brand-yellow/30 transition-all"
                    >
                      {social.name === 'Instagram' ? <Instagram size={20} /> : <Youtube size={20} />}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass-card p-10 md:p-12 rounded-[40px] border border-white/5 bg-white/[0.02] relative z-10"
              >
                <div className="text-center space-y-8">
                  <div className="w-20 h-20 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow mx-auto shadow-[0_0_30px_rgba(255,212,0,0.1)]">
                    <Send size={32} />
                  </div>
                  <h3 className="text-3xl font-black italic uppercase tracking-tight">Send a Message</h3>
                  <p className="text-gray-400">Have a specific project in mind? Let's discuss the details.</p>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 212, 0, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-5 bg-brand-yellow text-brand-dark font-black uppercase tracking-[0.2em] rounded-2xl shadow-[0_0_20px_rgba(255,212,0,0.2)] transition-all flex items-center justify-center gap-3 group"
                  >
                    Start Project <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
              
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-yellow/10 rounded-full blur-[60px] -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-[60px] -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-brand-dark/95 backdrop-blur-xl"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl glass-card p-8 md:p-12 rounded-[40px] border border-white/10 bg-brand-charcoal overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all"
              >
                <X size={20} />
              </button>

              {formStatus === 'success' ? (
                <div className="text-center py-12 space-y-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 rounded-full bg-brand-yellow flex items-center justify-center text-brand-dark mx-auto shadow-[0_0_30px_rgba(255,212,0,0.4)]"
                  >
                    <CheckCircle size={40} />
                  </motion.div>
                  <h3 className="text-3xl font-black italic uppercase tracking-tight">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-black italic uppercase tracking-tight mb-8">Start a <span className="text-brand-yellow">Project</span></h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] ml-4">Your Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-yellow/50 transition-all text-white placeholder:text-white/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] ml-4">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-yellow/50 transition-all text-white placeholder:text-white/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] ml-4">Project Details</label>
                      <textarea 
                        required
                        rows={4}
                        placeholder="Tell me about your project..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-yellow/50 transition-all text-white placeholder:text-white/10 resize-none"
                      ></textarea>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={formStatus === 'submitting'}
                      className="w-full py-5 bg-brand-yellow text-brand-dark font-black uppercase tracking-[0.2em] rounded-2xl shadow-[0_0_20px_rgba(255,212,0,0.2)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
