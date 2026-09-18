import { motion } from 'motion/react';

interface SoftwareIconProps {
  name: string;
  className?: string;
}

export const SoftwareIcon = ({ name, className = "" }: SoftwareIconProps) => {
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
