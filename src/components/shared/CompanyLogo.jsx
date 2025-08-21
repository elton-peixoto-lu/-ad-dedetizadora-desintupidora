import { motion } from 'framer-motion';
import { cn, companyClasses } from '../../utils/classNames';
import { useResponsive } from '../../hooks/useResponsive';

/**
 * Componente do Logo da empresa AD Dedetizadora
 * Responsivo e customizável
 */
export const CompanyLogo = ({ 
  size = 'medium', 
  theme = 'default',
  animated = true,
  className = '' 
}) => {
  const { isMobile } = useResponsive();
  
  const themes = {
    default: {
      a: 'text-black',
      d: 'text-red-400',
      text: 'text-white',
      subtitle: 'text-red-400'
    },
    light: {
      a: 'text-white',
      d: 'text-red-500',
      text: 'text-white',
      subtitle: 'text-red-500'
    },
    dark: {
      a: 'text-black',
      d: 'text-red-600',
      text: 'text-black',
      subtitle: 'text-red-600'
    }
  };

  const currentTheme = themes[theme];
  const logoSize = companyClasses.logo[size];
  
  const textSize = size === 'small' 
    ? 'text-xs md:text-sm' 
    : size === 'medium' 
    ? 'text-sm md:text-base' 
    : 'text-base md:text-lg';

  const LogoContent = () => (
    <div className={cn('flex items-center space-x-2 md:space-x-4', className)}>
      {/* Logo AD */}
      <div className={logoSize}>
        <span className={currentTheme.a}>A</span>
        <span className={currentTheme.d}>D</span>
      </div>
      
      {/* Texto da empresa */}
      <div className={cn('font-black', textSize)}>
        <div className={currentTheme.subtitle}>DEDETIZADORA E</div>
        <div className={currentTheme.text}>DESINTUPIDORA</div>
      </div>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.5,
          type: "spring",
          stiffness: 100 
        }}
        whileHover={{ scale: 1.05 }}
      >
        <LogoContent />
      </motion.div>
    );
  }

  return <LogoContent />;
};

/**
 * Versão compacta do logo (apenas AD)
 */
export const CompactLogo = ({ 
  size = 'medium', 
  theme = 'default',
  animated = true,
  className = '' 
}) => {
  const themes = {
    default: { a: 'text-black', d: 'text-red-400' },
    light: { a: 'text-white', d: 'text-red-500' },
    dark: { a: 'text-black', d: 'text-red-600' }
  };

  const currentTheme = themes[theme];
  const logoSize = companyClasses.logo[size];

  const LogoContent = () => (
    <div className={cn(logoSize, className)}>
      <span className={currentTheme.a}>A</span>
      <span className={currentTheme.d}>D</span>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ 
          rotate: 360,
          transition: { duration: 0.5 }
        }}
      >
        <LogoContent />
      </motion.div>
    );
  }

  return <LogoContent />;
};
