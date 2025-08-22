import { motion } from 'framer-motion';
import { cn, companyClasses, responsiveClasses } from '../../utils/classNames';
import { useResponsive } from '../../hooks/useResponsive';
import { WhatsAppButton } from '../shared/WhatsAppButton';
import { InstagramButton } from '../shared/InstagramButton';
import { SiGmail } from 'react-icons/si';
import { CompanyLogo } from '../shared/CompanyLogo';
import { ResponsiveClock } from '../ui/ResponsiveClock';
import { GlassmorphismSection } from '../ui/GlassmorphismContainer';
import { ContactQRCodes } from '../shared/ContactQRCodes';
import { ContactIcons } from '../shared/ContactIcons';
import { useDevice } from '../../providers/DeviceProvider';
import { HeroSectionMobile } from './HeroSectionMobile';

/**
 * Seção principal (Hero) - Família e Controle de Pragas
 * Primeira seção da página com CTA principal
 */
export const HeroSection = () => {
  const { isMobile, isTablet, prefersReducedMotion } = useResponsive();
  const device = useDevice();

  if (device.isMobile) {
    return <HeroSectionMobile />;
  }

  const phoneNumbers = {
    primary: '11988919225',
    secondary: '1913238991'
  };

  const pestDecorations = [
    { 
      emoji: '🦂', 
      position: 'top-4 md:top-8 right-4 md:right-12', 
      size: 'text-3xl md:text-4xl', 
      rotation: 'rotate-12',
      zIndex: 'z-5'
    },
    { 
      emoji: '🐛', 
      position: 'top-32 md:top-48 left-4 md:left-12', 
      size: 'text-3xl md:text-4xl', 
      rotation: '-rotate-12',
      zIndex: 'z-5'
    },
    { 
      emoji: '🐜', 
      position: 'bottom-20 md:bottom-28 right-8 md:right-16', 
      size: 'text-2xl md:text-3xl', 
      rotation: 'rotate-45',
      zIndex: 'z-5'
    }
  ];

  return (
    <section id="hero" className={cn(companyClasses.section.hero, "w-full relative")}> 
      {/* Removido overlay escuro fixo para base clara */}

      {/* Elementos decorativos de pragas - posicionamento responsivo (acima do glass) */}
      <div className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-30">
        {pestDecorations.map((pest, index) => (
          <motion.div
            key={index}
            className={cn(
              'absolute',
              pest.position,
              pest.size,
              pest.zIndex
            )}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: prefersReducedMotion ? 0.7 : [0.35, 0.9, 0.35],
              scale: 1,
              y: prefersReducedMotion ? 0 : [0, -10, 0],
              rotate: prefersReducedMotion ? 0 : [0, 6, -6, 0]
            }}
            transition={{ 
              duration: 1,
              delay: index * 0.3,
              y: {
                duration: 3.2 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut"
              },
              opacity: {
                duration: 5 + index * 0.6,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotate: {
                duration: 4.2 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            style={{
              filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.45))',
            }}
          >
            {/* Halo vermelho desfocado para dar contraste */}
            <span className="absolute -inset-3 rounded-full bg-red-500/30 blur-xl -z-10" />
            
            <span className="block">
              {pest.emoji}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Conteúdo principal com glassmorphism (abaixo dos insetos) */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between py-4 md:py-8 lg:py-12 px-4 md:px-6 lg:px-8">
        <GlassmorphismSection 
          variant="light"
          intensity="medium"
          containerClassName="my-4 md:my-8"
          className="border border-gray-200"
        >
          {/* Conteúdo Principal */}
          <div className={cn(
            'grid gap-8 md:gap-12 lg:gap-16 items-center',
            isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'
          )}>
            {/* Lado esquerdo - Texto principal */}
            <motion.div
              className={cn(
                'text-red-700 text-center break-words',
                !isMobile ? 'lg:text-left' : '',
                'max-w-[780px]'
              )}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h1
                className={cn(
                  'font-black leading-snug mb-3 md:mb-6',
                  isMobile ? 'text-2xl' : 'text-4xl md:text-5xl lg:text-6xl'
                )}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Invista na saúde<br />
                da sua família com
              </motion.h1>
              
              <motion.div
                className={cn(
                  'text-yellow-300 font-black mb-6 md:mb-8 break-words',
                  isMobile ? 'text-3xl' : 'text-5xl md:text-6xl lg:text-7xl'
                )}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
              >
                CONTROLE<br />
                DE PRAGAS
              </motion.div>
            </motion.div>

            {/* Lado direito - Relógio */}
            <motion.div
              className="relative z-40 flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {/* (Removida a frase duplicada no topo para evitar redundância) */}

              {/* QRCodes centralizados */}
              <ContactQRCodes
                size={isMobile ? 'small' : 'medium'}
                whatsappMain={phoneNumbers.primary}
                className={cn('mx-auto', isMobile ? 'scale-95' : 'scale-100')}
              />

              {/* Logo abaixo dos QR Codes */}
              <motion.div
                className="mt-4 md:mt-6 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <CompanyLogo size={isMobile ? 'small' : 'medium'} theme="default" animated={true} />
              </motion.div>
            </motion.div>
          </div>
        </GlassmorphismSection>

        {/* Contatos e Redes Sociais com glassmorphism */}
        <motion.div id="contato"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <GlassmorphismSection 
            variant="colored"
            intensity="strong"
            containerClassName="mb-4"
          >
            <div className="text-center space-y-4">
              {/* Títulos */}
              <motion.h3
                className="text-red-700 font-bold text-lg md:text-xl mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                📞 Entre em Contato
              </motion.h3>

              {/* Botões WhatsApp */}
              <div className={cn(
                'flex gap-3 md:gap-4 justify-center',
                isMobile ? 'flex-col px-2' : 'flex-col sm:flex-row'
              )}>
                <WhatsAppButton
                  phoneNumber={phoneNumbers.primary}
                  displayNumber="11 9 8891-9225"
                  size={isMobile ? 'small' : 'medium'}
                  className={cn(
                    isMobile ? 'w-full' : '',
                    'shadow-2xl shadow-green-500/20'
                  )}
                />
                <WhatsAppButton
                  phoneNumber={phoneNumbers.secondary}
                  displayNumber="11 9 1323-8991"
                  size={isMobile ? 'small' : 'medium'}
                  className={cn(
                    isMobile ? 'w-full' : '',
                    'shadow-2xl shadow-green-500/20'
                  )}
                />
              </div>

              {/* Separador */}
              <div className="flex items-center justify-center my-4">
                <div className="h-px bg-gray-200 flex-1"></div>
                <span className="px-4 text-red-500 text-sm font-medium">OU</span>
                <div className="h-px bg-gray-200 flex-1"></div>
              </div>

              {/* Título Redes Sociais */}
              <motion.h4
                className="text-red-700 font-bold text-base md:text-lg mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                📱 Redes Sociais
              </motion.h4>

              {/* Ícones de contato reutilizáveis */}
              <ContactIcons className="mt-4" size="sm" />
            </div>
          </GlassmorphismSection>
        </motion.div>
      </div>
    </section>
  );
};
