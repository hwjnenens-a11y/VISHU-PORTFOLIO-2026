import { motion } from 'motion/react';
import { Video, Layers, Zap, Clock, CheckCircle, Star } from 'lucide-react';

export const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full text-[10px] font-bold tracking-[0.2em] text-brand-yellow uppercase mb-6"
          >
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black italic uppercase tracking-tight"
          >
            My <span className="text-brand-yellow">Services</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Video Editing Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -10 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card p-10 md:p-12 rounded-[40px] border border-white/5 bg-white/[0.02] hover:border-brand-yellow/30 transition-all group cursor-default"
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all duration-500 shadow-[0_0_20px_rgba(255,212,0,0.1)] group-hover:shadow-[0_0_30px_rgba(255,212,0,0.4)]">
                <Video size={32} />
              </div>
              <h3 className="text-3xl font-black italic uppercase tracking-tight text-white group-hover:text-brand-yellow transition-colors">Video Editing</h3>
            </div>
            
            <div className="space-y-10">
              <div className="flex gap-6 group/item">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-yellow group-hover/item:scale-110 transition-transform">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-brand-yellow uppercase tracking-wider">Short Form Content</h4>
                  <p className="text-gray-400 leading-relaxed">Engaging YouTube Shorts, TikToks, and Instagram Reels with fast-paced editing and subtitles.</p>
                </div>
              </div>
              
              <div className="flex gap-6 group/item">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-yellow group-hover/item:scale-110 transition-transform">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-brand-yellow uppercase tracking-wider">Long Form Content</h4>
                  <p className="text-gray-400 leading-relaxed">Professional YouTube videos, documentaries, and storytelling with smooth pacing and flow.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advanced Editing Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -10 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card p-10 md:p-12 rounded-[40px] border border-white/5 bg-white/[0.02] hover:border-brand-yellow/30 transition-all group cursor-default"
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all duration-500 shadow-[0_0_20px_rgba(255,212,0,0.1)] group-hover:shadow-[0_0_30px_rgba(255,212,0,0.4)]">
                <Layers size={32} />
              </div>
              <h3 className="text-3xl font-black italic uppercase tracking-tight text-white group-hover:text-brand-yellow transition-colors">Advanced Editing</h3>
            </div>
            
            <div className="space-y-10">
              <div className="flex gap-6 group/item">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-yellow group-hover/item:scale-110 transition-transform">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-brand-yellow uppercase tracking-wider">Map Animations</h4>
                  <p className="text-gray-400 leading-relaxed">High-quality 2D/3D map animations for travel, history, or geographical storytelling.</p>
                </div>
              </div>
              
              <div className="flex gap-6 group/item">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-yellow group-hover/item:scale-110 transition-transform">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-brand-yellow uppercase tracking-wider">Motion Graphics</h4>
                  <p className="text-gray-400 leading-relaxed">Dynamic titles, transitions, and visual effects that enhance the overall production value.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
