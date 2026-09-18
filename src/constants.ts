import { NavLink, Software, Milestone, Project, SocialLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'JOURNEY', href: '#journey' },
  { name: 'SERVICES', href: '#services' },
  { name: 'PORTFOLIO', href: '#projects' },
  { name: 'CONTACT', href: '#contact' },
];

export const SOFTWARE: Software[] = [
  { name: 'Dr', color: 'bg-brand-blue/50' },
  { name: 'Ae', color: 'bg-brand-purple' },
  { name: 'Ps', color: 'bg-brand-blue' },
  { name: 'Pr', color: 'bg-brand-purple/80' },
];

export const SKILLS: string[] = [
  'Video Editing',
  'Cinematic Editing',
  'Short Form Editing',
  'Map Animation',
  'Storytelling',
];

export const MILESTONES: Milestone[] = [
  { 
    year: '01', 
    title: 'Getting Started', 
    description: 'Learned basics of video editing, tools & fundamentals.' 
  },
  { 
    year: '03', 
    title: 'First Projects', 
    description: 'Started creating YouTube Shorts & Reels.' 
  },
  { 
    year: '05', 
    title: 'Skill Growth', 
    description: 'Improved cinematic editing, transitions & storytelling.' 
  },
  { 
    year: '07', 
    title: 'Professional Work', 
    description: 'Working with clients and delivering high-quality edits.' 
  },
];

export const PROJECTS: Project[] = [
  { 
    id: 1, 
    title: 'Viral Storytelling: High-Impact Shorts', 
    description: 'Expertly paced short-form content engineered for maximum audience retention and viral engagement.', 
    category: 'Short Form', 
    thumbnail: 'https://img.youtube.com/vi/1kGl88J-5V8/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/1kGl88J-5V8'
  },
  { 
    id: 10, 
    title: 'Cinematic Narratives: Documentary Style', 
    description: 'An immersive long-form experience blending professional storytelling with high-end cinematic production.', 
    category: 'Long Form', 
    thumbnail: 'https://img.youtube.com/vi/LHGlDqG4k_Y/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/LHGlDqG4k_Y'
  },
  { 
    id: 3, 
    title: 'Warfare & Strategy: Conflict Mapping', 
    description: 'Sophisticated map animations detailing the strategic movements and logistics of historical global conflicts.', 
    category: 'Map Animation', 
    thumbnail: 'https://img.youtube.com/vi/oUyik6yewMI/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/oUyik6yewMI'
  },
  { 
    id: 4, 
    title: 'Engagement Mastery: Viral Short-Form', 
    description: 'Strategically crafted short-form narratives designed to capture attention and dominate social algorithms.', 
    category: 'Short Form', 
    thumbnail: 'https://img.youtube.com/vi/Tg35RSF0Bkg/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/Tg35RSF0Bkg'
  },
  { 
    id: 5, 
    title: 'Trade Routes: The Silk Road Journey', 
    description: 'Advanced cartographic visualization tracking the historical Silk Road with fluid, cinematic animations.', 
    category: 'Map Animation', 
    thumbnail: 'https://img.youtube.com/vi/COVrTyOb278/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/COVrTyOb278'
  },
  { 
    id: 6, 
    title: 'Dynamic Motion: High-Energy Edits', 
    description: 'Fast-paced, high-energy short-form content featuring cutting-edge transitions and viral storytelling.', 
    category: 'Short Form', 
    thumbnail: 'https://img.youtube.com/vi/ksI2FnaN3UA/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/ksI2FnaN3UA'
  },
  { 
    id: 7, 
    title: 'The Mongol Conquest: Imperial Expansion', 
    description: 'A powerful visualization of the Mongol Empire\'s rapid territorial growth and historical impact.', 
    category: 'Map Animation', 
    thumbnail: 'https://img.youtube.com/vi/hTobvSmBzwE/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/hTobvSmBzwE'
  },
  { 
    id: 8, 
    title: 'Cartographic Motion: Advanced Visuals', 
    description: 'High-impact map animations featuring advanced motion graphics and data-driven historical storytelling.', 
    category: 'Map Animation', 
    thumbnail: 'https://img.youtube.com/vi/u0bhtdDv3lw/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/u0bhtdDv3lw'
  },
  { 
    id: 9, 
    title: 'Imperial Legacies: Rise & Fall Mapping', 
    description: 'An epic cartographic journey showcasing the rise and fall of history\'s most influential global empires.', 
    category: 'Map Animation', 
    thumbnail: 'https://img.youtube.com/vi/hTobvSmBzwE/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/hTobvSmBzwE'
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', url: 'https://instagram.com/vishu_editz_fx' },
  { name: 'YouTube', url: 'https://youtube.com/@VishuSharma' },
];
