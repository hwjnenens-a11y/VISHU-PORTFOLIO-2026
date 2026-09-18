import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories = ['All', 'Short Form', 'Long Form', 'Map Animation'];

  return (
    <section id="projects" className="py-24 bg-brand-charcoal/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full text-[10px] font-bold tracking-[0.2em] text-brand-yellow uppercase mb-6"
          >
            Portfolio
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black italic uppercase tracking-tight mb-12"
          >
            Featured <span className="text-brand-yellow">Projects</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-brand-yellow text-brand-dark shadow-[0_0_20px_rgba(255,212,0,0.3)]' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="glass-card rounded-[32px] overflow-hidden border border-white/5 bg-white/[0.02] group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className="w-16 h-16 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center shadow-2xl"
                    >
                      <Play size={32} fill="currentColor" />
                    </motion.div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-brand-dark/80 backdrop-blur-md border border-brand-yellow/30 rounded-full text-[10px] font-bold text-brand-yellow uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-yellow transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            className="inline-flex items-center gap-3 text-brand-yellow font-bold uppercase tracking-widest text-sm group"
          >
            View Full Portfolio <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-brand-dark/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-[32px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-brand-dark/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all"
              >
                <X size={24} />
              </button>
              
              <iframe
                src={`${selectedProject.videoUrl}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                title={selectedProject.title}
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
