import { motion } from 'framer-motion';
import { cn, companyClasses, responsiveClasses } from '../../utils/classNames';
import { useResponsive } from '../../hooks/useResponsive';
import { WhatsAppButton } from '../shared/WhatsAppButton';
import { CompanyLogo } from '../shared/CompanyLogo';
import { GlassmorphismSection } from '../ui/GlassmorphismContainer';
import { FaSoap, FaTint } from 'react-icons/fa';

/**
 * Componente para caixa d'água (antes e depois)
 */
const WaterTankDisplay = ({ type, size, className = '' }) => {
  const { prefersReducedMotion } = useResponsive();
  
  const configs = {
    before: {
      gradient: 'from-zinc-700 via-zinc-600 to-zinc-500',
      Icon: FaSoap,
      iconClass: 'text-white',
      bgOverlay: 'from-zinc-700/60 via-zinc-600/50 to-zinc-500/40',
      buttonBg: 'bg-zinc-700',
      buttonText: 'ANTES'
    },
    after: {
      gradient: 'from-blue-500 to-blue-600',
      Icon: FaTint,
      iconClass: 'text-white',
      bgOverlay: 'from-blue-300/30 to-transparent',
      buttonBg: 'bg-blue-600',
      buttonText: 'DEPOIS'
    }
  };

  const config = configs[type];
  const tankSize = size === 'small' 
    ? 'w-40 h-40 md:w-48 md:h-48' 
    : 'w-48 h-48 md:w-56 md:h-56';

  return (
    <motion.div
      className={cn('text-center', className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.8,
        delay: type === 'before' ? 0.2 : 0.4,
        type: "spring",
        stiffness: 100
      }}
    >
      {/* Caixa d'água */}
      <motion.div
        className={cn(
          tankSize,
          'mx-auto mb-4 md:mb-6 rounded-full border-4 md:border-8 border-white',
          `bg-gradient-to-br ${config.gradient}`,
          'flex items-center justify-center relative overflow-hidden shadow-2xl'
        )}
        whileHover={{
          scale: prefersReducedMotion ? 1 : 1.05,
          rotate: prefersReducedMotion ? 0 : type === 'before' ? -2 : 2
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Ícone central */}
        <motion.div
          className="text-4xl md:text-5xl lg:text-6xl relative z-10"
          animate={{
            y: prefersReducedMotion ? 0 : type === 'before' ? [0, -5, 0] : [0, 5, 0],
            scale: prefersReducedMotion ? 1 : [1, 1.1, 1]
          }}
          transition={{
            duration: type === 'before' ? 2 : 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <config.Icon className={config.iconClass} />
        </motion.div>
        
        {/* Overlay de efeito */}
        <div className={cn(
          'absolute inset-4 rounded-full',
          `bg-gradient-to-t ${config.bgOverlay}`
        )}></div>

        {/* Bolhas de água limpa (apenas no "depois") */}
        {type === 'after' && !prefersReducedMotion && (
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
                style={{
                  left: `${35 + i * 15}%`,
                  top: `${25 + i * 10}%`
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Label ANTES/DEPOIS */}
      <motion.h3
        className={cn(
          'font-black text-white px-4 md:px-8 py-2 md:py-3 rounded-full inline-block border-2 md:border-4 border-white',
          config.buttonBg,
          'text-2xl md:text-3xl lg:text-4xl'
        )}
        whileHover={{
          scale: prefersReducedMotion ? 1 : 1.1,
          y: prefersReducedMotion ? 0 : -2
        }}
        transition={{ duration: 0.2 }}
      >
        {config.buttonText}
      </motion.h3>
    </motion.div>
  );
};

/**
 * Seção Limpeza de Caixa d'Água
 * Mostra o antes e depois do serviço
 */
export const WaterTankCleaningSection = () => {
  const { isMobile } = useResponsive();

  const phoneNumbers = {
    primary: '11988919225',
    secondary: '1913238991'
  };

  return (
    <section className={companyClasses.section.waterTank}>
      <GlassmorphismSection 
        variant="light"
        intensity="medium"
        containerClassName="py-6 md:py-10"
      >
        <motion.h2
          className={cn('text-2xl md:text-4xl lg:text-5xl font-black text-red-700 text-center mb-2')}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Limpeza de caixa d’água
        </motion.h2>
        
        <motion.h3
          className={cn('font-semibold text-red-600 text-center mb-6 md:mb-10', isMobile ? 'text-base' : 'text-lg md:text-xl')}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          SOLICITE ORÇAMENTO
        </motion.h3>
        
        {/* Grid Antes/Depois */}
        <div className={cn(
          'grid gap-8 md:gap-12 max-w-4xl mx-auto mb-8 md:mb-12',
          isMobile ? 'grid-cols-1' : 'grid-cols-2'
        )}>
          <WaterTankDisplay 
            type="before" 
            size="small"
          />
          <WaterTankDisplay 
            type="after" 
            size="small"
          />
        </div>

        {/* Logo AD e contato */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Logo */}
          <div className="mb-6 md:mb-8 flex justify-center">
            <CompanyLogo 
              size="small"
              theme="light"
              animated={true}
            />
          </div>

          {/* Botões WhatsApp */}
          <div className={cn(
            'flex gap-4 md:gap-6 justify-center',
            isMobile ? 'flex-col items-center' : 'flex-col sm:flex-row'
          )}>
            <WhatsAppButton
              phoneNumber={phoneNumbers.primary}
              displayNumber="11 9 8891-9225"
              size="small"
              className={isMobile ? 'w-full max-w-xs' : ''}
            />
            <WhatsAppButton
              phoneNumber={phoneNumbers.secondary}
              displayNumber="11 9 1323-8991"
              size="small"
              className={isMobile ? 'w-full max-w-xs' : ''}
            />
          </div>
        </motion.div>
      </GlassmorphismSection>
    </section>
  );
};
