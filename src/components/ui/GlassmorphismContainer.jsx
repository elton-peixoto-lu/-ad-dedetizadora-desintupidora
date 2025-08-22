import { motion } from 'framer-motion';
import { cn } from '../../utils/classNames';
import { useResponsive } from '../../hooks/useResponsive';
import watermark from '../../assets/services/meio-ambiente.jpg';

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
      border: 'border border-green-200',
      shadow: 'shadow-lg shadow-black/10'
    },
    dark: {
      bg: 'bg-gradient-to-br from-black/10 via-red-50 to-black/10 backdrop-blur-lg',
      border: 'border border-white/10',
      shadow: 'shadow-2xl shadow-black/40'
    },
    colored: {
      bg: 'bg-gradient-to-br from-green-600/10 via-green-500/10 to-green-600/10 backdrop-blur-lg',
      border: 'border border-green-200/40',
      shadow: 'shadow-lg shadow-green-900/10'
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
        // Texto padrão escuro; vermelho ficará só em acentos
        variant === 'light' ? 'text-gray-900' : '',
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
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/5" />
        {/* Marca d'água ambiental */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-10"
          style={{
            backgroundImage: `url(${watermark})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '300px auto'
          }}
        />
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
