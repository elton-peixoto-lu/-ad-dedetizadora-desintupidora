import { motion } from 'framer-motion';
import { cn, companyClasses, responsiveClasses } from '../../utils/classNames';
import { useResponsive } from '../../hooks/useResponsive';
import { WhatsAppButton } from '../shared/WhatsAppButton';
import { CompanyLogo } from '../shared/CompanyLogo';
import { GlassmorphismSection } from '../ui/GlassmorphismContainer';
import { FaTint } from 'react-icons/fa';
import { MdSick } from 'react-icons/md';
import { ServiceIcon } from '../shared/ServiceIcon';

/**
 * Componente para caixa d'água (antes e depois)
 */
const WaterTankDisplay = ({ type, size, className = '' }) => {
  const { prefersReducedMotion } = useResponsive();
  
  const configs = {
    before: {
      imageName: 'caixa-dagua-suja',
      buttonBg: 'bg-white border-green-300 text-green-700',
      buttonText: 'ANTES'
    },
    after: {
      imageName: 'caixadagualimpa',
      buttonBg: 'bg-white border-green-300 text-green-700',
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
      {/* Mini-card com imagem real */}
      <motion.div
        className={cn(
          tankSize,
          'mx-auto mb-4 md:mb-6 rounded-xl border-4 md:border-8 border-green-300 bg-white flex items-center justify-center overflow-hidden shadow-xl'
        )}
        whileHover={{ scale: prefersReducedMotion ? 1 : 1.03 }}
        transition={{ duration: 0.2 }}
      >
        <ServiceIcon name={config.imageName} size="full" className="object-cover" alt={type === 'before' ? 'Caixa d’água antes da limpeza' : 'Caixa d’água após a limpeza'} />
      </motion.div>

      {/* Label ANTES/DEPOIS */}
      <motion.h3
        className={cn(
          'font-black px-4 md:px-8 py-2 md:py-3 rounded-full inline-block border-2 md:border-4',
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
          className={cn('text-2xl md:text-4xl lg:text-5xl font-bold text-green-700 text-center mb-2')}
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
