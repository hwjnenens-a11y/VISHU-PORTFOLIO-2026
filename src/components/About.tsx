import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-brand-charcoal/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="-mt-8 mb-8 md:mb-12 relative inline-block group cursor-pointer"
          >
            <div className="w-[120px] h-[120px] md:w-[184px] md:h-[184px] rounded-full border-2 border-brand-yellow p-1.5 shadow-[0_0_30px_rgba(255,212,0,0.2)] group-hover:shadow-[0_0_50px_rgba(255,212,0,0.5)] transition-all duration-500">
              <img 
                src="https://i.ibb.co/PzDNK1XK/IMG-20251202-202634-022-Picsart-Ai-Image-Enhancer.png" 
                alt="Vishu Sharma" 
                className="w-full h-full rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-2 right-2 bg-brand-yellow text-brand-dark px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg border border-brand-dark/10">
              EDITOR
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl font-bold mb-6 md:mb-8"
          >
            VISHU <span className="text-brand-yellow">SHARMA</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-300 leading-loose font-light max-w-3xl mx-auto"
          >
            I'm <span className="text-white font-medium">Vishu Sharma</span>, a professional freelance <span className="bg-brand-yellow/10 text-brand-yellow px-2.5 py-1 rounded-md font-bold inline-block my-1">VIDEO EDITOR</span> with 7 months of experience. 
            I specialize in long-form videos, YouTube Shorts, Reels, and <span className="bg-brand-blue/10 text-brand-blue px-2.5 py-1 rounded-md font-bold inline-block my-1">MAP ANIMATIONS</span>, creating engaging and high-quality content that captures attention and drives results. 
            I focus on storytelling, smooth transitions, and cinematic editing to bring ideas to life.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
