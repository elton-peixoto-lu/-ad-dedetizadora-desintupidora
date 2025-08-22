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
      bg: 'bg-white',
      border: 'border border-gray-200',
      shadow: 'shadow-lg shadow-black/10'
    },
    dark: {
      bg: 'bg-gradient-to-br from-black/40 via-[#300909]/30 to-black/50 backdrop-blur-lg',
      border: 'border border-white/10',
      shadow: 'shadow-2xl shadow-black/40'
    },
    colored: {
      bg: 'bg-gradient-to-br from-[#6b0d0d]/25 via-[#8f1d1d]/15 to-[#1a1a1a]/30 backdrop-blur-lg',
      border: 'border border-white/12',
      shadow: 'shadow-2xl shadow-black/30'
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
        <div className="absolute inset-0 bg-gradient-to-br from-white/7 via-transparent to-black/15 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#8f1d1d]/12 via-transparent to-[#300909]/12" />
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
