import { motion } from 'motion/react';
import { SoftwareIcon } from './SoftwareIcon';
import { SOFTWARE, SKILLS } from '../constants';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FFD400 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Software Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 0 40px rgba(255, 212, 0, 0.08)",
              borderColor: "rgba(255, 212, 0, 0.2)"
            }}
            className="glass-card p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-white/5 bg-white/[0.02] flex flex-col transition-colors duration-500"
          >
            <div className="space-y-8 md:space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-brand-yellow"></div>
                <h3 className="text-xl md:text-2xl text-brand-yellow font-bold tracking-[0.15em] uppercase">Softwares</h3>
              </div>
              <div className="grid grid-cols-2 gap-6 md:gap-4">
                {SOFTWARE.map((s) => (
                  <motion.div 
                    key={s.name} 
                    whileHover={{ scale: 1.05, y: -5 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: Math.random() * 2
                    }}
                    className="bg-black/20 p-4 md:p-6 flex items-center justify-center rounded-2xl border border-white/5 hover:border-brand-yellow/30 transition-all group"
                  >
                    <SoftwareIcon name={s.name} className="w-12 h-12 md:w-16 md:h-16 text-2xl" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 0 40px rgba(255, 212, 0, 0.08)",
              borderColor: "rgba(255, 212, 0, 0.2)"
            }}
            className="glass-card p-10 rounded-[40px] border border-white/5 bg-white/[0.02] flex flex-col transition-colors duration-500"
          >
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-4">
                <div className="w-6 h-px bg-brand-yellow"></div>
                <h3 className="text-2xl text-brand-yellow font-bold tracking-[0.15em] uppercase">Skills</h3>
                <div className="w-6 h-px bg-brand-yellow"></div>
              </div>
              <ul className="space-y-5">
                {SKILLS.map((skill) => (
                  <motion.li 
                    key={skill} 
                    whileHover={{ x: 10, color: '#FFD400' }}
                    className="text-lg text-gray-300 transition-colors cursor-default flex items-center gap-4 group"
                  >
                    <motion.div 
                      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
                      className="w-2 h-2 bg-brand-yellow rounded-full group-hover:scale-150 transition-transform"
                    ></motion.div>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 0 40px rgba(255, 212, 0, 0.08)",
              borderColor: "rgba(255, 212, 0, 0.2)"
            }}
            className="glass-card p-10 rounded-[40px] border border-white/5 bg-white/[0.02] flex flex-col transition-colors duration-500"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-brand-yellow"></div>
                <h3 className="text-2xl text-brand-yellow font-bold tracking-[0.15em] uppercase">Let's Connect</h3>
              </div>
              
              <div className="space-y-8 text-left">
                <motion.a 
                  href="tel:8894054286"
                  whileHover={{ x: 10 }} 
                  className="group cursor-pointer block"
                >
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1">Phone</p>
                  <p className="text-xl font-bold group-hover:text-brand-yellow transition-colors">8894054286</p>
                </motion.a>
                <motion.a 
                  href="mailto:v38401485@gmail.com"
                  whileHover={{ x: 10 }} 
                  className="group cursor-pointer block"
                >
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1">Email</p>
                  <p className="text-xl font-bold group-hover:text-brand-yellow transition-colors whitespace-nowrap">v38401485@gmail.com</p>
                </motion.a>
                <motion.a 
                  href="https://instagram.com/vishu_editz_fx"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }} 
                  className="group cursor-pointer block"
                >
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1">Social</p>
                  <p className="text-xl font-bold group-hover:text-brand-yellow transition-colors">vishu_editz_fx</p>
                </motion.a>
                
                <div className="flex justify-center pt-4">
                  <motion.a 
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-8 py-3 bg-brand-yellow text-brand-dark font-bold rounded-full text-sm uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,212,0,0.4)] transition-all"
                  >
                    Contact Me
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
