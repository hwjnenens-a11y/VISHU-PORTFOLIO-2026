import { motion } from 'motion/react';
import { MILESTONES } from '../constants';

export const Journey = () => {
  return (
    <section id="journey" className="py-24 bg-brand-charcoal/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full text-[10px] font-bold tracking-[0.2em] text-brand-yellow uppercase mb-6"
          >
            Experience
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black italic uppercase tracking-tight"
          >
            My <span className="text-brand-yellow">Journey</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-yellow/30 to-transparent hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-24">
            {MILESTONES.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 w-full ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02, x: index % 2 === 0 ? -10 : 10 }}
                    className="glass-card p-8 rounded-[32px] border border-white/5 bg-white/[0.02] hover:border-brand-yellow/30 transition-all group cursor-default"
                  >
                    <div className="text-brand-yellow text-4xl font-black italic mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-yellow transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>

                <div className="relative flex items-center justify-center z-10">
                  <motion.div 
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-12 h-12 rounded-full bg-brand-dark border-4 border-brand-yellow shadow-[0_0_20px_rgba(255,212,0,0.4)] flex items-center justify-center"
                  >
                    <div className="w-3 h-3 bg-brand-yellow rounded-full animate-pulse"></div>
                  </motion.div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
