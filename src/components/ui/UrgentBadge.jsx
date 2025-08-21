import { motion } from 'framer-motion';
import { MdEmergency } from 'react-icons/md';
import { cn } from '../../utils/classNames';
import { useResponsive } from '../../hooks/useResponsive';

export const UrgentBadge = ({ size = 'medium', className = '' }) => {
  const { isMobile, prefersReducedMotion } = useResponsive();

  const sizes = {
    small: { container: 'w-28 h-28', icon: 34, title: 'text-sm' },
    medium: { container: 'w-36 h-36', icon: 40, title: 'text-base' },
    large: { container: 'w-44 h-44', icon: 48, title: 'text-lg' },
  };
  const s = sizes[size] || sizes.medium;

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <motion.div
        className={cn(
          'relative rounded-full flex items-center justify-center',
          'shadow-[0_12px_30px_rgba(0,0,0,0.45)] border border-red-300/30',
          s.container,
          'bg-[conic-gradient(from_200deg,#ef4444_0%,#dc2626_55%,#991b1b_100%)]'
        )}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 15 }}
      >
        {/* brilho/pulso ao redor */}
        <motion.div
          className="absolute inset-0 rounded-full bg-red-500/25 blur-xl"
          animate={{
            scale: prefersReducedMotion ? 1 : [1, 1.08, 1],
            opacity: prefersReducedMotion ? 0.25 : [0.25, 0.15, 0.25],
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Sirene */}
        <motion.div
          animate={{ rotate: prefersReducedMotion ? 0 : [-8, 8, -8] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <MdEmergency size={s.icon} className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)]" />
        </motion.div>
      </motion.div>

      {/* Título */}
      <motion.div
        className={cn('mt-3 font-extrabold tracking-wide text-white text-center', s.title)}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        SOCORRO A TODA HORA
      </motion.div>
    </div>
  );
};
