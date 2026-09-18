import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MoreVertical, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent | React.TouchEvent, href: string) => {
    if (e.cancelable) e.preventDefault();
    
    setIsOpen(false);

    setTimeout(() => {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 150);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-md py-4 shadow-lg border-b border-brand-yellow/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-8 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-display font-black tracking-wider italic cursor-pointer"
          onClick={(e) => handleNavClick(e as any, '#home')}
        >
          <span className="text-white">VISHU</span><span className="text-brand-yellow">SHARMA</span>
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-brand-yellow transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        <button className="md:hidden text-brand-yellow" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <MoreVertical size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-charcoal border-b border-brand-yellow/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  onTouchEnd={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-medium hover:text-brand-yellow active:bg-white/5 p-4 rounded-2xl transition-all flex items-center justify-between group touch-manipulation"
                >
                  <span>{link.name}</span>
                  <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
