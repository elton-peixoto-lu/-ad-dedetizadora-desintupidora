import { motion } from 'framer-motion';
import { cn, companyClasses, responsiveClasses } from '../../utils/classNames';
import { useResponsive } from '../../hooks/useResponsive';
import { WhatsAppButton } from '../shared/WhatsAppButton';
import { CompanyLogo } from '../shared/CompanyLogo';
import { GlassmorphismSection } from '../ui/GlassmorphismContainer';

/**
 * Seção Problemas com Baratas
 * Foca no problema específico de baratas com call-to-action direto
 */
export const CockroachSection = () => {
  const { isMobile, prefersReducedMotion } = useResponsive();

  const phoneNumbers = {
    primary: '11988919225',
    secondary: '1913238991'
  };

  return (
    <section id="servicos" className={companyClasses.section.cockroach}>
      <GlassmorphismSection 
        variant="colored"
        intensity="strong"
        containerClassName="py-4 md:py-8"
      >
        <div className={cn(
          'grid gap-8 md:gap-12 items-center',
          isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'
        )}>
          {/* Lado esquerdo - Pragas animadas */}
          <motion.div
            className={cn(
              'relative text-center',
              !isMobile ? 'lg:order-1' : 'order-2'
            )}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative flex items-center justify-center gap-6 md:gap-8">
              {['🪳','🦟','🕷️','🐜','🦂'].map((emoji, idx) => (
                <motion.span
                  key={idx}
                  className={cn(isMobile ? 'text-5xl' : 'text-6xl md:text-7xl','relative')}
                  animate={{ y: prefersReducedMotion ? 0 : [0, -10, 0], rotate: prefersReducedMotion ? 0 : [-5, 5, -5] }}
                  transition={{ duration: 2 + idx * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.35))' }}
                >
                  {emoji}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Lado direito - Texto e contato */}
          <motion.div
            className={cn(
              'text-white text-center',
              !isMobile ? 'lg:text-left lg:order-2' : 'order-1'
            )}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className={cn(
                'font-black mb-6',
                isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'
              )}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ 
                textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
              }}
            >
              Somos especialistas em controle de pragas,<br />
              limpeza de caixa d’água e dedetização de qualidade!
            </motion.h2>
            <motion.ul
              className="text-left mx-auto md:mx-0 max-w-xl mb-6 md:mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ staggerChildren: 0.15 }}
            >
              {[
                { emoji: '🐜', text: 'Controle de pragas completo' },
                { emoji: '💧', text: 'Limpeza e higienização de caixa d’água' },
                { emoji: '🧪', text: 'Dedetização profissional e segura' },
                { emoji: '🚽', text: 'Desentupidora – emergências e manutenção' }
              ].map((s, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-white/90 text-lg md:text-xl mb-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-2xl md:text-3xl leading-none">{s.emoji}</span>
                  <span className="leading-snug">{s.text}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            {/* Botões WhatsApp */}
            <motion.div
              className="space-y-4 mb-6 md:mb-8"
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
                  className={cn(
                    isMobile ? 'w-full max-w-xs' : '',
                    'shadow-xl shadow-green-500/20'
                  )}
                />
                <WhatsAppButton
                  phoneNumber={phoneNumbers.secondary}
                  displayNumber="11 9 1323-8991"
                  size="small"
                  className={cn(
                    isMobile ? 'w-full max-w-xs' : '',
                    'shadow-xl shadow-green-500/20'
                  )}
                />
              </div>
            </motion.div>

            {/* Logo AD */}
            <motion.div
              className={cn(
                'flex justify-center',
                !isMobile ? 'lg:justify-start' : ''
              )}
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
