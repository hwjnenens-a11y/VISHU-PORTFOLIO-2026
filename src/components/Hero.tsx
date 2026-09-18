import { motion, useScroll, useTransform } from 'motion/react';
import { SoftwareIcon } from './SoftwareIcon';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-24 overflow-hidden">
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 -z-20"
      >
        <img 
          src="https://i.ibb.co/PzDNK1XK/IMG-20251202-202634-022-Picsart-Ai-Image-Enhancer.png" 
          alt="Background" 
          className="w-full h-full object-cover grayscale opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/50 to-brand-dark"></div>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{ 
              y: [null, "-=150px"],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 8 + 8, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute w-1.5 h-1.5 bg-brand-yellow rounded-full blur-[1px]"
          />
        ))}
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative h-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-6 md:mb-8 lg:mb-10 w-full"
          >
            {['Short Form Specialist', 'Long Form Videos', 'Map Animation Expert'].map((role) => (
              <motion.span 
                key={role} 
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 25px rgba(255, 212, 0, 0.4)",
                  borderColor: "rgba(255, 212, 0, 0.6)"
                }}
                className="px-3 py-1 md:px-4 md:py-1.5 bg-brand-dark/80 border border-brand-yellow/30 rounded-full text-[8px] md:text-[10px] lg:text-[11px] font-bold tracking-[0.15em] text-brand-yellow neon-glow-yellow-sm uppercase shadow-[0_0_15px_rgba(255,212,0,0.15)] transition-all duration-300 cursor-default"
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          <div className="relative mb-4 md:mb-6 lg:mb-8">
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -left-10 sm:-top-20 sm:-left-16 md:-top-20 md:-left-20 lg:-top-24 lg:-left-24 z-20"
            >
              <SoftwareIcon name="Dr" className="rotate-[-12deg]" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-10 -right-10 sm:-top-20 sm:-right-16 md:-top-20 md:-right-20 lg:-top-24 lg:-right-24 z-20"
            >
              <SoftwareIcon name="Ae" className="rotate-[12deg]" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-16 -left-10 sm:-bottom-20 sm:-left-16 md:-bottom-20 md:-left-20 lg:-bottom-24 lg:-left-24 z-20"
            >
              <SoftwareIcon name="Pr" className="rotate-[12deg]" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-16 -right-10 sm:-bottom-20 sm:-right-16 md:-bottom-20 md:-right-20 lg:-bottom-24 lg:-right-24 z-20"
            >
              <SoftwareIcon name="Ps" className="rotate-[-12deg]" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4
              }}
              className="text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[15vw] xl:text-[17rem] leading-[0.75] font-black italic text-brand-yellow neon-glow-yellow select-none tracking-normal transform scale-y-110"
            >
              PORTFOLIO
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-sm font-black tracking-[0.4em] md:tracking-[0.6em] text-white/90 uppercase max-w-4xl mx-auto opacity-100 leading-relaxed px-4"
          >
            Creative Video Editor
          </motion.p>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-brand-yellow"
      >
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-[2px] h-10 bg-gradient-to-b from-brand-yellow to-transparent mb-2"></div>
          <div className="w-4 h-4 border-b-2 border-r-2 border-brand-yellow rotate-45"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};
