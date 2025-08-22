import { motion } from 'framer-motion';
import { cn } from '../../utils/classNames';
import { useResponsive } from '../../hooks/useResponsive';
import { GlassmorphismSection } from '../ui/GlassmorphismContainer';
import { ContactQRCodes } from '../shared/ContactQRCodes';
import { CompanyLogo } from '../shared/CompanyLogo';
import { ContactIcons } from '../shared/ContactIcons';
import { PaymentIcons } from '../shared/PaymentIcons';

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
              <motion.div className="text-black font-black mb-6 text-3xl" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                CONTROLE<br />DE PRAGAS
              </motion.div>
            </div>
            <motion.div className="relative z-40 flex flex-col items-center justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <ContactQRCodes size={'small'} whatsappMain={phoneNumbers.primary} className="mx-auto" />
              <ContactIcons className="mt-4" size="sm" />
              
              {/* Separador */}
              <div className="flex items-center justify-center my-4 w-full max-w-xs">
                <div className="h-px bg-gray-300 flex-1"></div>
                <span className="px-3 text-gray-500 text-xs font-medium">PAGAMENTO</span>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>
              
              {/* Ícones de Pagamento */}
              <PaymentIcons className="mt-2" />
              
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


