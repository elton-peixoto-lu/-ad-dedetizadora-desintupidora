import { motion } from 'framer-motion';
import { cn } from '../../utils/classNames';
import { useResponsive } from '../../hooks/useResponsive';

/**
 * Container com efeito glassmorphism responsivo
 * Cria um fundo com blur que permite elementos flutuantes aparecerem
 */
export const GlassmorphismContainer = ({ 
  children, 
  className = '',
  variant = 'light',
  intensity = 'medium'
}) => {
  const { isMobile } = useResponsive();

  const variants = {
    light: {
      bg: 'bg-gradient-to-br from-red-800/35 via-red-700/25 to-red-900/35 backdrop-blur-md',
      border: 'border border-red-300/30',
      shadow: 'shadow-xl shadow-red-900/25'
    },
    dark: {
      bg: 'bg-gradient-to-br from-black/40 via-red-900/25 to-red-950/40 backdrop-blur-lg',
      border: 'border border-red-400/25',
      shadow: 'shadow-2xl shadow-black/40'
    },
    colored: {
      bg: 'bg-gradient-to-br from-red-600/30 via-red-700/25 to-red-800/35 backdrop-blur-lg',
      border: 'border border-yellow-300/25',
      shadow: 'shadow-2xl shadow-red-900/30'
    }
  };

  const intensities = {
    light: isMobile ? 'backdrop-blur-sm' : 'backdrop-blur-md',
    medium: isMobile ? 'backdrop-blur-md' : 'backdrop-blur-lg',
    strong: isMobile ? 'backdrop-blur-lg' : 'backdrop-blur-xl'
  };

  const currentVariant = variants[variant];

  return (
    <motion.div
      className={cn(
        'relative rounded-2xl md:rounded-3xl overflow-hidden',
        currentVariant.bg.replace(/backdrop-blur-\w+/, intensities[intensity]),
        currentVariant.border,
        currentVariant.shadow,
        className
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
    >
      {/* Overlay gradient sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-red-600/5 to-red-800/10" />
      </div>
      
      {/* Conteúdo */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

/**
 * Seção com fundo glassmorphism
 */
export const GlassmorphismSection = ({ 
  children, 
  className = '',
  containerClassName = '',
  variant = 'light',
  intensity = 'medium' 
}) => {
  const { isMobile } = useResponsive();

  return (
    <div className={cn('relative', className)}>
      {/* Container principal com padding */}
      <div className={cn(
        'container mx-auto px-4 md:px-6 lg:px-8',
        containerClassName
      )}>
        <GlassmorphismContainer 
          variant={variant}
          intensity={intensity}
          className={cn(
            'p-4 md:p-6 lg:p-8',
            isMobile ? 'mx-2' : 'mx-4'
          )}
        >
          {children}
        </GlassmorphismContainer>
      </div>
    </div>
  );
};
