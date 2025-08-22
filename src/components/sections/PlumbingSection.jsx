import { motion } from 'framer-motion';
import { cn, companyClasses, responsiveClasses } from '../../utils/classNames';
import { useResponsive } from '../../hooks/useResponsive';
import { WhatsAppButton } from '../shared/WhatsAppButton';
import { CompanyLogo } from '../shared/CompanyLogo';
import { GlassmorphismSection } from '../ui/GlassmorphismContainer';

/**
 * Seção Desentupimento
 * Foca no serviço de desentupimento com urgência
 */
export const PlumbingSection = () => {
  const { isMobile, prefersReducedMotion } = useResponsive();

  const phoneNumbers = {
    primary: '11988919225',
    secondary: '1913238991'
  };

  return (
    <section className={companyClasses.section.plumbing}>
      <GlassmorphismSection 
        variant="light"
        intensity="medium"
        containerClassName="py-6 md:py-10"
      >
        <div className={cn(
          'grid gap-8 md:gap-12 items-center',
          isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'
        )}>
          {/* Lado esquerdo - Texto */}
          <motion.div
            className={cn(
              'text-white text-center',
              !isMobile ? 'lg:text-left lg:order-1' : 'order-2'
            )}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className={cn(
                'font-black mb-4',
                isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'
              )}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Soluções profissionais de <span className="text-white">desentupimento</span>
            </motion.h2>
            
            <p className="text-white/80 mb-6">Atendimento rápido, sem sujeira e com garantia.</p>

            <motion.div
              className="mt-6 mb-6"
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

          {/* Lado direito - Vaso sanitário */}
          <motion.div
            className={cn(
              'text-center',
              !isMobile ? 'lg:order-2' : 'order-1'
            )}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className={cn(
                  isMobile ? companyClasses.pest.medium : companyClasses.pest.large,
                  'inline-block relative z-10'
                )}
                animate={{
                  y: prefersReducedMotion ? 0 : [-5, 5, -5],
                  rotate: prefersReducedMotion ? 0 : [0, 2, -2, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.4)) saturate(1.2)',
                  textShadow: '0 0 20px rgba(255,255,255,0.6)'
                }}
              >
                🚽
              </motion.div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-blue-500/8 rounded-full blur-2xl scale-125 -z-10"></div>
            </div>
            
            {/* Logo AD */}
            <motion.div
              className="flex items-center justify-center mt-4 md:mt-6"
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
          </motion.div>
        </div>
      </GlassmorphismSection>
    </section>
  );
};
