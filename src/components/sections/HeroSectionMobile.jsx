import { motion } from 'framer-motion';
import { cn } from '../../utils/classNames';
import { useResponsive } from '../../hooks/useResponsive';
import { GlassmorphismSection } from '../ui/GlassmorphismContainer';
import { ContactQRCodes } from '../shared/ContactQRCodes';
import { CompanyLogo } from '../shared/CompanyLogo';
import { ContactIcons } from '../shared/ContactIcons';

export const HeroSectionMobile = () => {
  const { prefersReducedMotion } = useResponsive();

  const pestDecorations = [];

  const phoneNumbers = { primary: '11988919225', secondary: '1913238991' };

  return (
    <section id="hero" className={cn('min-h-screen relative bg-transparent')}>

      <div className="relative z-10 min-h-screen flex flex-col justify-between py-4 px-4">
        <GlassmorphismSection variant="colored" intensity="strong" containerClassName="my-4">
          <div className="grid gap-6 items-center grid-cols-1">
            <div className="text-white text-center max-w-[720px] mx-auto">
              <motion.h1 className="font-black leading-snug mb-3 text-2xl text-green-700" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
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


