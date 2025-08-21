import { QRCodeCanvas } from 'qrcode.react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/classNames';

export const ContactQRCodes = ({
  instagramUrl = 'https://www.instagram.com/ad_dedetiza/profilecard/?igsh=MXVmZ2wzb3gybWV5bw==',
  whatsappMain = '11988919225',
  size = 'medium',
  className = ''
}) => {
  const sizes = {
    small: 120,
    medium: 160,
    large: 200
  };

  const qrSize = sizes[size] || sizes.medium;
  const whatsappUrl = `https://wa.me/55${whatsappMain.replace(/\D/g,'')}`;

  return (
    <div className={cn('flex items-center justify-center gap-6 md:gap-10', className)}>
      {/* Instagram */}
      <motion.div
        className="flex flex-col items-center gap-2 bg-black/30 p-3 rounded-xl border border-white/10 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <QRCodeCanvas value={instagramUrl} size={qrSize} bgColor="#00000000" fgColor="#ffffff" level="M" includeMargin={false} />
        <span className="text-white/80 text-sm md:text-base font-semibold">Instagram</span>
      </motion.div>

      {/* WhatsApp */}
      <motion.div
        className="flex flex-col items-center gap-2 bg-black/30 p-3 rounded-xl border border-white/10 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <QRCodeCanvas value={whatsappUrl} size={qrSize} bgColor="#00000000" fgColor="#22c55e" level="M" includeMargin={false} />
        <span className="text-white/80 text-sm md:text-base font-semibold">WhatsApp</span>
      </motion.div>
    </div>
  );
};
