/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'motion/react';
import { 
  Video, 
  Palette, 
  Layers, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  ExternalLink, 
  Play, 
  CheckCircle2,
  ChevronRight,
  MoreVertical,
  X,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'JOURNEY', href: '#journey' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PORTFOLIO', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent | React.TouchEvent, href: string) => {
    if (e.cancelable) e.preventDefault();
    
    // Close menu first to prevent it from blocking the view or interaction
    setIsOpen(false);

    // Small delay to ensure the menu closing transition starts and state updates
    // This also helps in calculating the correct scroll position if layout shifts
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80; // Navbar height offset
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

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
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

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-yellow" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <MoreVertical size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-charcoal border-b border-brand-yellow/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
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

const SoftwareIcon = ({ name, className = "" }: { name: string, className?: string }) => {
  const getLogo = (name: string) => {
    switch (name) {
      case 'Ps': return 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg';
      case 'Ae': return 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg';
      case 'Pr': return 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg';
      case 'Dr': return 'https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png';
      default: return null;
    }
  };

  const logoUrl = getLogo(name);

  return (
    <motion.div
      whileHover={{ 
        scale: 1.15, 
        rotate: 8,
      }}
      className={`w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg md:rounded-xl font-bold text-xs md:text-sm lg:text-base cursor-pointer overflow-hidden transition-all duration-300 bg-transparent ${className}`}
    >
      {logoUrl ? (
        <img src={logoUrl} alt={name} className="w-full h-full object-contain p-1" referrerPolicy="no-referrer" />
      ) : (
        <span className="text-white">{name}</span>
      )}
    </motion.div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-24 overflow-hidden">
      {/* Background Image with Grayscale and Overlay */}
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

      {/* Particle Effect Overlay */}
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

      {/* Main Hero Container */}
      <div className="container max-w-7xl mx-auto px-6 relative h-full flex flex-col items-center justify-center">
        
        <div className="flex flex-col items-center text-center z-10 w-full">
          {/* Role Badges */}
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

          {/* Main Heading Wrapper for Icons */}
          <div className="relative mb-4 md:mb-6 lg:mb-8">
            {/* Top Left Icon */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -left-10 sm:-top-20 sm:-left-16 md:-top-20 md:-left-20 lg:-top-24 lg:-left-24 z-20"
            >
              <SoftwareIcon name="Dr" className="rotate-[-12deg]" />
            </motion.div>
            {/* Top Right Icon */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-10 -right-10 sm:-top-20 sm:-right-16 md:-top-20 md:-right-20 lg:-top-24 lg:-right-24 z-20"
            >
              <SoftwareIcon name="Ae" className="rotate-[12deg]" />
            </motion.div>
            {/* Bottom Left Icon */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-16 -left-10 sm:-bottom-20 sm:-left-16 md:-bottom-20 md:-left-20 lg:-bottom-24 lg:-left-24 z-20"
            >
              <SoftwareIcon name="Pr" className="rotate-[12deg]" />
            </motion.div>
            {/* Bottom Right Icon */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-16 -right-10 sm:-bottom-20 sm:-right-16 md:-bottom-20 md:-right-20 lg:-bottom-24 lg:-right-24 z-20"
            >
              <SoftwareIcon name="Ps" className="rotate-[-12deg]" />
            </motion.div>

            {/* Main Heading */}
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

          {/* Subtitle */}
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

      {/* Down Arrow - Styled like reference */}
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

const About = () => {
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

const Skills = () => {
  const software = [
    { name: 'Dr', color: 'bg-brand-blue/50' },
    { name: 'Ae', color: 'bg-brand-purple' },
    { name: 'Ps', color: 'bg-brand-blue' },
    { name: 'Pr', color: 'bg-brand-purple/80' },
  ];

  const skills = [
    'Video Editing',
    'Cinematic Editing',
    'Short Form Editing',
    'Map Animation',
    'Storytelling',
  ];

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
                {software.map((s) => (
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
                {skills.map((skill) => (
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

const Journey = () => {
  const milestones = [
    { 
      year: '01', 
      title: 'Getting Started', 
      desc: 'Learned basics of video editing, tools & fundamentals.' 
    },
    { 
      year: '03', 
      title: 'First Projects', 
      desc: 'Started creating YouTube Shorts & Reels.' 
    },
    { 
      year: '05', 
      title: 'Skill Growth', 
      desc: 'Improved cinematic editing, transitions & storytelling.' 
    },
    { 
      year: '07', 
      title: 'Professional Work', 
      desc: 'Working with clients and delivering high-quality edits.' 
    },
  ];

  return (
    <section id="journey" className="py-24 bg-brand-charcoal/30 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-yellow rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-blue rounded-full blur-[120px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display tracking-tighter">
              MY <span className="text-brand-yellow">JOURNEY</span>
            </h2>
            <p className="text-gray-500 mt-2 uppercase tracking-[0.3em] text-xs">The evolution of a creator</p>
          </motion.div>
          <div className="h-px flex-1 bg-white/10 mx-8 mb-4 hidden md:block"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-yellow/30 to-transparent -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className={`relative flex items-center justify-between md:mb-24 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -10,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.97 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`w-full md:w-[45%] group cursor-pointer`}
                >
                  <div className="glass-card p-8 rounded-[32px] border border-white/5 bg-white/[0.02] group-hover:bg-white/[0.05] group-hover:border-brand-yellow/30 group-hover:shadow-[0_20px_50px_rgba(255,212,0,0.1)] transition-all duration-500 relative overflow-hidden">
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-yellow/0 via-brand-yellow/10 to-brand-yellow/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl font-display text-brand-yellow/20 group-hover:text-brand-yellow transition-colors duration-500">
                          {m.year}
                        </span>
                        <div className="h-px flex-1 bg-white/5"></div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors tracking-wide uppercase">
                        {m.title}
                      </h3>
                      <p className="text-gray-400 text-base leading-relaxed font-medium">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="relative"
                  >
                    {/* Outer Ring */}
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 -m-4 rounded-full bg-brand-yellow/20 blur-md"
                    ></motion.div>
                    
                    {/* Inner Node */}
                    <div className="w-4 h-4 rounded-full bg-brand-yellow shadow-[0_0_15px_rgba(255,212,0,0.8)] border-4 border-brand-dark"></div>
                  </motion.div>
                </div>

                {/* Spacer for mobile or desktop alignment */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-8 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col items-start text-left"
          >
            <h2 className="text-3xl md:text-5xl font-display tracking-normal m-0 p-0">
              TABLE OF <span className="text-brand-yellow">CONTENT</span>
            </h2>
            <p className="text-gray-500 mt-3 md:mt-2 uppercase tracking-[0.3em] text-[10px] md:text-xs m-0 p-0">MY SPECIALIZED SERVICES</p>
          </motion.div>
          <div className="h-px flex-1 bg-white/10 mx-8 mb-4 hidden md:block"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-8 max-w-5xl mx-auto">
          {/* Video Editing Card */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-brand-dark rounded-[32px] md:rounded-3xl p-8 md:p-10 relative overflow-hidden group border border-brand-dark/10 shadow-2xl"
          >
            <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity -rotate-12">
              <Video size={120} className="text-brand-yellow md:w-40 md:h-40" />
            </div>
            
            <div className="flex items-center gap-4 mb-8 md:mb-10 relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-yellow rounded-full flex items-center justify-center font-black text-brand-dark text-lg">1</div>
              <h3 className="text-3xl md:text-5xl font-display tracking-tight text-brand-dark">VIDEO EDITING</h3>
            </div>

            <div className="space-y-8 md:space-y-10 relative z-10">
              <div className="group/item">
                <h4 className="font-black text-xl md:text-2xl uppercase mb-2 flex items-center gap-2 text-brand-dark">
                  <span className="text-brand-yellow">A.</span> Long-Form Editing
                </h4>
                <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed md:leading-loose">Documentary, Vlogs, Weddings, Ads, Educational.</p>
              </div>
              <div className="group/item">
                <h4 className="font-black text-xl md:text-2xl uppercase mb-2 flex items-center gap-2 text-brand-dark">
                  <span className="text-brand-yellow">B.</span> Short-Form Editing
                </h4>
                <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed md:leading-loose">YouTube Shorts, Reels, Social Media Content.</p>
              </div>
              <div className="group/item">
                <h4 className="font-black text-xl md:text-2xl uppercase mb-2 flex items-center gap-2 text-brand-dark">
                  <span className="text-brand-yellow">C.</span> Cinematic Editing
                </h4>
                <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed md:leading-loose">Color Grading, Smooth Transitions, Storytelling.</p>
              </div>
              <div className="group/item">
                <h4 className="font-black text-xl md:text-2xl uppercase mb-2 flex items-center gap-2 text-brand-dark">
                  <span className="text-brand-yellow">D.</span> Map Animation
                </h4>
                <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed md:leading-loose">Travel Routes, Animated Maps, Motion Graphics.</p>
              </div>
            </div>
          </motion.div>

          {/* Advanced Editing Card */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-brand-yellow text-brand-dark rounded-[32px] md:rounded-3xl p-8 md:p-10 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity -rotate-12">
              <Layers size={120} className="text-brand-dark md:w-40 md:h-40" />
            </div>

            <div className="flex items-center gap-4 mb-10 relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-dark text-brand-yellow rounded-full flex items-center justify-center font-black text-lg">2</div>
              <h3 className="text-3xl md:text-5xl font-display tracking-tight text-brand-dark">ADVANCED EDITING</h3>
            </div>

            <div className="space-y-10 relative z-10">
              <div className="group/item">
                <h4 className="font-black text-xl md:text-2xl uppercase mb-3 flex items-center gap-3 text-brand-dark">
                  <span className="text-brand-dark/40">A.</span> Motion Graphics
                </h4>
                <p className="text-brand-dark/70 font-medium text-sm md:text-base leading-loose">Text Animation, Visual Effects, Dynamic Elements.</p>
              </div>
              <div className="group/item">
                <h4 className="font-black text-xl md:text-2xl uppercase mb-3 flex items-center gap-3 text-brand-dark">
                  <span className="text-brand-dark/40">B.</span> Sound Design
                </h4>
                <p className="text-brand-dark/70 font-medium text-sm md:text-base leading-loose">Audio Enhancement, Background Music, Sync Editing.</p>
              </div>
              <div className="group/item">
                <h4 className="font-black text-xl md:text-2xl uppercase mb-3 flex items-center gap-3 text-brand-dark">
                  <span className="text-brand-dark/40">C.</span> YouTube Content
                </h4>
                <p className="text-brand-dark/70 font-medium text-sm md:text-base leading-loose">Talking Head Videos, Podcasts, Educational Videos.</p>
              </div>
              <div className="group/item">
                <h4 className="font-black text-xl md:text-2xl uppercase mb-3 flex items-center gap-3 text-brand-dark">
                  <span className="text-brand-dark/40">D.</span> Client Projects
                </h4>
                <p className="text-brand-dark/70 font-medium text-sm md:text-base leading-loose">Professional Edits for Brands & Content Creators.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const categories = ['All', 'Short Form', 'Long Form', 'Map Animation', 'Motion Graphics'];
  const [activeTab, setActiveTab] = useState('All');

  const projects = [
    { 
      id: 1, 
      title: 'Viral Storytelling: High-Impact Shorts', 
      desc: 'Expertly paced short-form content engineered for maximum audience retention and viral engagement.', 
      category: 'Short Form', 
      aspect: 'portrait',
      img: 'https://img.youtube.com/vi/1kGl88J-5V8/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/1kGl88J-5V8?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0'
    },
    { 
      id: 10, 
      title: 'Cinematic Narratives: Documentary Style', 
      desc: 'An immersive long-form experience blending professional storytelling with high-end cinematic production.', 
      category: 'Long Form', 
      aspect: 'landscape',
      img: 'https://img.youtube.com/vi/LHGlDqG4k_Y/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/LHGlDqG4k_Y?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0'
    },
    { 
      id: 16, 
      title: 'Foreigners In India: Cultural Narrative', 
      desc: 'A compelling long-form cultural documentary exploring authentic perspectives with high-end cinematic visual storytelling.', 
      category: 'Long Form', 
      aspect: 'landscape',
      img: 'https://img.youtube.com/vi/sS_7JhzYbWk/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/sS_7JhzYbWk?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0'
    },
    { 
      id: 3, 
      title: 'Warfare & Strategy: Conflict Mapping', 
      desc: 'Sophisticated map animations detailing the strategic movements and logistics of historical global conflicts.', 
      category: 'Map Animation', 
      aspect: 'portrait',
      img: 'https://img.youtube.com/vi/oUyik6yewMI/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/oUyik6yewMI?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0'
    },
    { 
      id: 4, 
      title: 'Engagement Mastery: Viral Short-Form', 
      desc: 'Strategically crafted short-form narratives designed to capture attention and dominate social algorithms.', 
      category: 'Short Form', 
      aspect: 'portrait',
      img: 'https://img.youtube.com/vi/Tg35RSF0Bkg/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/Tg35RSF0Bkg?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0'
    },
    { 
      id: 5, 
      title: 'Trade Routes: The Silk Road Journey', 
      desc: 'Advanced cartographic visualization tracking the historical Silk Road with fluid, cinematic animations.', 
      category: 'Map Animation', 
      aspect: 'portrait',
      img: 'https://img.youtube.com/vi/COVrTyOb278/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/COVrTyOb278?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0'
    },
    { 
      id: 6, 
      title: 'Dynamic Motion: High-Energy Edits', 
      desc: 'Fast-paced, high-energy short-form content featuring cutting-edge transitions and viral storytelling.', 
      category: 'Short Form', 
      aspect: 'portrait',
      img: 'https://img.youtube.com/vi/ksI2FnaN3UA/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/ksI2FnaN3UA?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0'
    },
    { 
      id: 7, 
      title: 'The Mongol Conquest: Imperial Expansion', 
      desc: 'A powerful visualization of the Mongol Empire\'s rapid territorial growth and historical impact.', 
      category: 'Map Animation', 
      aspect: 'portrait',
      img: 'https://img.youtube.com/vi/hTobvSmBzwE/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/hTobvSmBzwE?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0'
    },
    { 
      id: 8, 
      title: 'Cartographic Motion: Advanced Visuals', 
      desc: 'High-impact map animations featuring advanced motion graphics and data-driven historical storytelling.', 
      category: 'Map Animation', 
      aspect: 'portrait',
      img: 'https://img.youtube.com/vi/u0bhtdDv3lw/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/u0bhtdDv3lw?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0'
    },
    { 
      id: 9, 
      title: 'Imperial Legacies: Rise & Fall Mapping', 
      desc: 'An epic cartographic journey showcasing the rise and fall of history\'s most influential global empires.', 
      category: 'Map Animation', 
      aspect: 'portrait',
      img: 'https://img.youtube.com/vi/hTobvSmBzwE/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/hTobvSmBzwE?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0'
    },
    { 
      id: 11, 
      title: 'Global Strategy: Animated Logistics', 
      desc: 'High-precision map animations detailing strategic global movements and complex historical logistics.', 
      category: 'Map Animation', 
      aspect: 'portrait',
      img: 'https://img.youtube.com/vi/VUNWtiRgWQE/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/VUNWtiRgWQE?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0'
    },
    { 
      id: 15, 
      title: 'Geopolitical Cartography: Animated Mapping Short', 
      desc: 'High-impact cartographic short demonstrating dynamic geopolitical shifts, territorial expansion, and tactical motion graphics.', 
      category: 'Map Animation', 
      aspect: 'portrait',
      img: 'https://img.youtube.com/vi/Ez1Wc5D-JEI/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/Ez1Wc5D-JEI?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0'
    },
    { 
      id: 12, 
      title: 'Motion Graphics Mastery: Dynamic Visuals', 
      desc: 'Cutting-edge motion graphics featuring fluid animations and complex visual effects for high-end production.', 
      category: 'Motion Graphics', 
      aspect: 'portrait',
      img: 'https://img.youtube.com/vi/ns7pR1vlLL8/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/ns7pR1vlLL8?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0'
    },
    { 
      id: 13, 
      title: 'Cinematic Branding: Motion Strategy', 
      desc: 'High-impact motion design focusing on brand identity and advanced visual storytelling.', 
      category: 'Motion Graphics', 
      aspect: 'landscape',
      img: 'https://img.youtube.com/vi/qvt4i29N__Y/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/qvt4i29N__Y?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0'
    },
    { 
      id: 14, 
      title: 'Advanced Motion Design: Visual Identity', 
      desc: 'A sophisticated exploration of motion design principles applied to high-end visual identities and immersive graphics.', 
      category: 'Motion Graphics', 
      aspect: 'landscape',
      img: 'https://img.youtube.com/vi/7EAuSthbUI0/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/7EAuSthbUI0?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0'
    },
  ];

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  const filteredProjects = activeTab === 'All' ? projects : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-brand-charcoal/50">
      {/* Video Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-brand-dark/98 backdrop-blur-2xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`relative w-full overflow-hidden shadow-[0_0_100px_rgba(250,204,21,0.15)] border border-white/10 bg-black rounded-[40px] ${
                selectedProject.aspect === 'landscape' 
                  ? 'max-w-6xl aspect-video' 
                  : 'max-w-md aspect-[9/16] max-h-[90vh]'
              }`}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-brand-dark/80 hover:bg-brand-yellow hover:text-brand-dark rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/10 group/close"
              >
                <X size={24} className="group-hover/close:rotate-90 transition-transform duration-300" />
              </button>
              
              <div className="w-full h-full relative group/player">
                <iframe 
                  src={selectedProject.videoUrl}
                  className="w-full h-full scale-[1.01]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {/* Custom Overlay to hide top YouTube bar if possible */}
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/40 to-transparent pointer-events-none opacity-0 group-hover/player:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className="container mx-auto px-6 py-16 rounded-[64px] bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)] relative overflow-hidden group">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent" />
        <div className="flex flex-col items-start justify-start mb-12 md:mb-16 gap-y-8 md:gap-y-12 px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col items-start"
          >
            <h2 className="text-5xl md:text-7xl text-white mb-4 md:mb-4 font-display italic tracking-tight">
              FEATURED <span className="text-brand-yellow">PROJECTS</span>
            </h2>
            <p className="text-gray-400 md:text-gray-500 mt-1 uppercase tracking-[0.4em] text-[10px] md:text-xs max-w-sm leading-relaxed">
              Premium cinematic edits that grab attention and drive viral results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:flex md:flex-nowrap items-center justify-center gap-2 md:gap-3 p-2.5 md:p-2.5 bg-brand-charcoal/90 backdrop-blur-3xl rounded-[2rem] md:rounded-full border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] relative group/nav w-full md:w-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow/5 via-transparent to-brand-yellow/5 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem] md:rounded-full" />
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setActiveTab(cat)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative px-4 md:px-9 py-3 md:py-4 rounded-full text-[9px] md:text-[11px] font-black tracking-[0.1em] md:tracking-[0.25em] uppercase whitespace-nowrap transition-all duration-700 w-full md:w-auto ${
                  activeTab === cat 
                    ? 'text-brand-dark' 
                    : 'text-gray-400 hover:text-white'
                } ${cat === 'All' ? 'col-span-2 md:col-span-1' : ''}`}
              >
                {activeTab === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-brand-yellow shadow-[0_0_40px_rgba(250,204,21,0.4)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 p-6 md:p-12 rounded-[72px] bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 shadow-[inset_0_0_50px_rgba(255,255,255,0.02)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(250,204,21,0.08),transparent_60%)] pointer-events-none" />
          <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_120deg,rgba(250,204,21,0.03)_180deg,transparent_240deg)] animate-[spin_20s_linear_infinite] pointer-events-none" />
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, scale: 1.02 }}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                onClick={() => setSelectedProject(project)}
                className={`group relative rounded-[32px] overflow-hidden cursor-pointer bg-brand-charcoal border border-white/5 shadow-2xl transition-all duration-500 ${
                  project.aspect === 'landscape' ? 'aspect-video' : 'aspect-[9/16]'
                }`}
              >
                <div className="w-full h-full overflow-hidden relative">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.includes('maxresdefault.jpg')) {
                        target.src = target.src.replace('maxresdefault.jpg', 'hqdefault.jpg');
                      }
                    }}
                    className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                      hoveredProjectId === project.id ? 'scale-110' : 'scale-100'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className={`relative flex items-center justify-center transition-all duration-300 transform ${
                      hoveredProjectId === project.id 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-50'
                    }`}>
                      {/* Animated Rings */}
                      <motion.div 
                        animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        className="absolute w-20 h-20 rounded-full border-2 border-brand-yellow/50"
                      />
                      <motion.div 
                        animate={{ scale: [1, 2.2], opacity: [0.3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                        className="absolute w-20 h-20 rounded-full border border-brand-yellow/30"
                      />
                      
                      {/* Main Button */}
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full bg-brand-yellow flex items-center justify-center shadow-[0_0_50px_rgba(255,212,0,0.6)] relative z-20"
                      >
                        <Play size={28} fill="currentColor" className="text-brand-dark ml-1" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-brand-yellow text-brand-yellow font-bold rounded-full text-sm uppercase tracking-[0.2em] hover:bg-brand-yellow hover:text-brand-dark transition-all"
          >
            View Full Portfolio
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl glass-card rounded-[32px] p-8 md:p-12 border border-brand-yellow/20 shadow-[0_0_50px_rgba(255,212,0,0.1)]"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-brand-yellow transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="mb-8">
              <h3 className="text-4xl font-display italic text-white mb-2 tracking-tight">SEND A <span className="text-brand-yellow">MESSAGE</span></h3>
              <p className="text-gray-400">Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-yellow ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-brand-charcoal/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-yellow/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-yellow ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-brand-charcoal/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-yellow/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-yellow ml-1">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-brand-charcoal/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-yellow/50 transition-colors resize-none"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-brand-yellow text-brand-dark font-bold rounded-2xl shadow-[0_10px_30px_rgba(255,212,0,0.2)] uppercase tracking-widest mt-4"
              >
                Submit Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto glass-card rounded-[40px] p-8 md:p-20 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-8xl mb-10 leading-[1.1] font-display italic tracking-tighter"
              >
                LET'S <span className="text-brand-yellow">WORK</span> <br /> TOGETHER
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg md:text-2xl text-gray-400 mb-14 leading-relaxed"
              >
                Ready to take your content to the next level? Whether it's a viral reel or a complete brand overhaul, I'm here to help.
              </motion.p>
              
              <div className="space-y-8">
                {[
                  { href: "mailto:v38401485@gmail.com", icon: <Mail size={24} />, text: "v38401485@gmail.com" },
                  { href: "tel:8894054286", icon: <Phone size={24} />, text: "8894054286" },
                  { href: "https://instagram.com/vishu_editz_fx", icon: <Instagram size={24} />, text: "@vishu_editz_fx", external: true }
                ].map((item, i) => (
                  <motion.a 
                    key={i}
                    href={item.href} 
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + (i * 0.1), ease: "easeOut" }}
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-charcoal flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(255,212,0,0.4)] border border-white/5 group-hover:border-brand-yellow/50">
                      {item.icon}
                    </div>
                    <span className="text-base md:text-xl font-medium group-hover:text-brand-yellow transition-colors duration-300 break-all leading-tight">{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-10 pt-8 md:pt-12">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { href: "https://instagram.com/vishu_editz_fx", icon: <Instagram size={32} className="text-brand-purple" />, label: "Instagram" },
                  { href: "#", icon: <Youtube size={32} className="text-brand-orange" />, label: "YouTube" }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                    whileHover={{ 
                      y: -10, 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(255, 212, 0, 0.1)",
                      borderColor: "rgba(255, 212, 0, 0.3)"
                    }}
                    className="glass-card p-8 rounded-3xl flex flex-col items-center justify-center gap-4 border border-white/5 transition-all duration-500 group"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-500">
                      {social.icon}
                    </div>
                    <span className="font-bold uppercase tracking-widest text-xs group-hover:text-brand-yellow transition-colors">{social.label}</span>
                  </motion.a>
                ))}
              </div>
              
              <motion.button 
                onClick={() => setIsModalOpen(true)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{ 
                  boxShadow: ["0 10px 30px rgba(255,212,0,0.3)", "0 10px 40px rgba(255,212,0,0.5)", "0 10px 30px rgba(255,212,0,0.3)"]
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8,
                  boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                }}
                className="w-full py-6 bg-brand-yellow text-brand-dark font-bold text-xl rounded-3xl shadow-[0_10px_30px_rgba(255,212,0,0.3)] uppercase tracking-widest"
              >
                Send a Message
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-display text-brand-yellow tracking-wider">
          VISHU<span className="text-white">SHARMA</span>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Vishu Sharma. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="https://instagram.com/vishu_editz_fx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-yellow transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors"><Youtube size={20} /></a>
          <a href="mailto:v38401485@gmail.com" className="text-gray-400 hover:text-brand-yellow transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-yellow z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* Side Navigation Dots (Desktop) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-4 z-40">
        {['home', 'about', 'skills', 'journey', 'services', 'projects', 'contact'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(section);
              if (element) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="w-3 h-3 rounded-full bg-white/20 hover:bg-brand-yellow transition-all hover:scale-150"
            title={section.charAt(0).toUpperCase() + section.slice(1)}
          />
        ))}
      </div>
    </div>
  );
}
