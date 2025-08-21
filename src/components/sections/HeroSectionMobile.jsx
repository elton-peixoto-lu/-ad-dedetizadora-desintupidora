import { motion } from 'framer-motion';
import { cn } from '../../utils/classNames';
import { useResponsive } from '../../hooks/useResponsive';
import { GlassmorphismSection } from '../ui/GlassmorphismContainer';
import { ContactQRCodes } from '../shared/ContactQRCodes';
import { CompanyLogo } from '../shared/CompanyLogo';
import { ContactIcons } from '../shared/ContactIcons';

export const HeroSectionMobile = () => {
  const { prefersReducedMotion } = useResponsive();

  const pestDecorations = [
    { emoji: '🦂', position: 'top-4 right-4', size: 'text-3xl' },
    { emoji: '🐛', position: 'top-24 left-4', size: 'text-3xl' },
    { emoji: '🐜', position: 'bottom-16 right-6', size: 'text-2xl' }
  ];

  const phoneNumbers = { primary: '11988919225', secondary: '1913238991' };

  return (
    <section id="hero" className={cn('min-h-screen relative bg-gradient-to-br from-red-600 via-red-700 to-red-800')}>
      {/* Deco */}
      <div className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-30">
        {pestDecorations.map((p, i) => (
          <motion.div key={i} className={cn('absolute', p.position, p.size)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: prefersReducedMotion ? 0.7 : [0.35, 0.9, 0.35], scale: 1, y: prefersReducedMotion ? 0 : [0, -10, 0] }}
            transition={{ duration: 1, delay: i * 0.3, y: { duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' } }}>
            <span className="absolute -inset-2 rounded-full bg-red-500/30 blur-xl -z-10" />
            <span className="block">{p.emoji}</span>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-between py-4 px-4">
        <GlassmorphismSection variant="colored" intensity="strong" containerClassName="my-4">
          <div className="grid gap-6 items-center grid-cols-1">
            <div className="text-white text-center max-w-[720px] mx-auto">
              <motion.h1 className="font-black leading-snug mb-3 text-2xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
                Invista na saúde<br />da sua família com
              </motion.h1>
              <motion.div className="text-yellow-300 font-black mb-6 text-3xl" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                CONTROLE<br />DE PRAGAS
              </motion.div>
            </div>
            <motion.div className="relative z-40 flex flex-col items-center justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <ContactQRCodes size={'small'} whatsappMain={phoneNumbers.primary} className="mx-auto" />
              <ContactIcons className="mt-4" size="sm" />
              <div className="mt-4 flex justify-center">
                <CompanyLogo size="small" theme="default" animated />
              </div>
            </motion.div>
          </div>
        </GlassmorphismSection>
      </div>
    </section>
  );
};


