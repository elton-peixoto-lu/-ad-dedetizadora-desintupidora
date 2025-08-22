import { motion } from 'framer-motion';
import { cn, companyClasses, responsiveClasses } from '../../utils/classNames';
import { useResponsive } from '../../hooks/useResponsive';
import { WhatsAppButton } from '../shared/WhatsAppButton';
import { FaShieldAlt, FaBug, FaTint, FaFlask, FaToilet } from 'react-icons/fa';
import { ServiceIcon } from '../shared/ServiceIcon';
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
        variant="light"
        intensity="medium"
        containerClassName="py-4 md:py-8"
      >
        <div className={cn(
          'grid gap-8 md:gap-12 items-center',
          isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'
        )}>
          {/* Lado esquerdo - Ícone profissional */}
          <motion.div
            className={cn('relative flex justify-center', !isMobile ? 'lg:order-1' : 'order-2')}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-40 h-40 md:w-48 md:h-48 bg-white border border-gray-200 rounded-2xl flex items-center justify-center shadow-md overflow-hidden p-2">
              <ServiceIcon name="pragas" size="full" alt="Controle de pragas" />
            </div>
          </motion.div>

          {/* Lado direito - Texto e contato */}
          <motion.div
            className={cn(
              'text-red-700 text-center',
              !isMobile ? 'lg:text-left lg:order-2' : 'order-1'
            )}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className={cn(
                'font-bold mb-2 text-green-700',
                isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'
              )}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Serviços de dedetização e desentupidora com responsabilidade ambiental
            </motion.h2>
            <p className="text-gray-700 mb-4">Equipe técnica, produtos autorizados e compromisso com a saúde da sua família.</p>
            <motion.ul
              className="text-left mx-auto md:mx-0 max-w-xl mb-6 md:mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ staggerChildren: 0.15 }}
            >
              {[
                { icon: 'pragas', text: 'Controle de pragas com métodos seguros' },
                { icon: 'caixa-dagua', text: 'Limpeza e higienização de caixa d’água' },
                { icon: 'dedetizacao', text: 'Dedetização responsável' },
                { icon: 'desentupimento', text: 'Desentupidora emergencial' }
              ].map((s, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-gray-800 text-lg md:text-xl mb-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4 }}
                >
                  <ServiceIcon name={s.icon} size="lg" className="mt-0.5" />
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
