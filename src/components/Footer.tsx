import { motion } from 'motion/react';
import { Instagram, Youtube } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl font-display font-black tracking-wider italic"
          >
            <span className="text-white">VISHU</span><span className="text-brand-yellow">SHARMA</span>
          </motion.div>

          <div className="text-gray-500 text-sm font-medium tracking-widest uppercase">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </div>

          <div className="flex gap-6">
            {SOCIAL_LINKS.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#FFD400' }}
                className="text-gray-500 transition-colors"
              >
                {social.name === 'Instagram' ? <Instagram size={20} /> : <Youtube size={20} />}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
