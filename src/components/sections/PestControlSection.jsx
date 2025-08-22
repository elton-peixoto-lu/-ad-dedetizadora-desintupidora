import { motion } from 'framer-motion';
import { cn, companyClasses, responsiveClasses } from '../../utils/classNames';
import { useResponsive } from '../../hooks/useResponsive';
import { WhatsAppButton } from '../shared/WhatsAppButton';
import { CompanyLogo } from '../shared/CompanyLogo';
import { ResponsiveClock } from '../ui/ResponsiveClock';
import { GlassmorphismSection } from '../ui/GlassmorphismContainer';
import { UrgentBadge } from '../ui/UrgentBadge';
import { DigitalClock } from '../ui/DigitalClock';
 

/**
 * Seção Dedetização com Relógio
 * Última seção focada em dedetização de escorpiões e cupins
 */
export const PestControlSection = () => {
  const { isMobile, isTablet, prefersReducedMotion } = useResponsive();

  const phoneNumbers = {
    primary: '11988919225',
    secondary: '1913238991'
  };

  const pests = [];

  return (
    <section className={companyClasses.section.pestControl}>
      <GlassmorphismSection 
        variant="light"
        intensity="medium"
        containerClassName="py-4 md:py-8"
        className="border border-gray-200"
      >
        <div className={cn(
          'grid gap-8 md:gap-12 items-center',
          isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'
        )}>
          {/* Lado esquerdo - Texto */}
          <motion.div
            className={cn(
              'text-gray-900 text-center',
              !isMobile ? 'lg:text-left lg:order-1' : 'order-2'
            )}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className={cn(
                'font-black mb-2 text-green-700',
                isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'
              )}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Serviços de dedetização e desentupidora com responsabilidade ambiental
            </motion.h2>
            
            <motion.h3
              className={cn(
                'font-semibold mb-6 md:mb-8 text-gray-800',
                isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'
              )}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Equipe técnica, produtos autorizados e compromisso com a saúde da sua família.
            </motion.h3>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className={cn(
                'flex gap-4 justify-center',
                isMobile ? 'flex-col items-center' : 'lg:justify-start flex-col sm:flex-row'
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
          </motion.div>

          {/* Lado direito - Relógio e pragas */}
          <motion.div
            className={cn(
              'relative text-center',
              !isMobile ? 'lg:order-2' : 'order-1'
            )}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Relógio central */}
            <div className="mb-6 flex justify-center">
              <DigitalClock size="small" />
            </div>

            {/* Logo AD */}
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <CompanyLogo 
                size="small"
                theme="light"
                animated={true}
              />
            </motion.div>

            {/* Carrossel removido conforme solicitação */}

            {/* Pragas decorativas */}
            <motion.div
              className="flex justify-center space-x-6 md:space-x-8 text-3xl md:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              {pests.map((pest, index) => (
                <motion.span
                  key={index}
                  animate={{
                    y: prefersReducedMotion ? 0 : [0, -5, 0],
                    scale: prefersReducedMotion ? 1 : [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                >
                  {pest.emoji}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </GlassmorphismSection>
    </section>
  );
};
