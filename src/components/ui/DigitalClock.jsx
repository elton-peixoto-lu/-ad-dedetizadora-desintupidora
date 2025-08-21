import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/classNames';
import { useResponsive } from '../../hooks/useResponsive';

export const DigitalClock = ({ size = 'medium', className = '', showCaption = true }) => {
  const { prefersReducedMotion } = useResponsive();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const sizes = {
    small: { box: 'px-4 py-2', digits: 'text-3xl md:text-4xl', caption: 'text-xs md:text-sm' },
    medium: { box: 'px-5 py-3', digits: 'text-4xl md:text-5xl', caption: 'text-sm md:text-base' },
    large: { box: 'px-6 py-4', digits: 'text-5xl md:text-6xl', caption: 'text-base md:text-lg' },
  };
  const s = sizes[size] || sizes.medium;

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div className={cn(
        'relative rounded-xl border border-white/20 bg-black/50 shadow-[0_12px_30px_rgba(0,0,0,0.45)]',
        'backdrop-blur-md',
        s.box
      )}>
        {/* brilho sutil */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          animate={{ opacity: prefersReducedMotion ? 0.2 : [0.2, 0.35, 0.2] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ boxShadow: '0 0 25px rgba(16,185,129,0.25) inset' }}
        />
        <div className={cn('font-mono font-extrabold tracking-widest text-emerald-300', s.digits)}
             style={{ textShadow: '0 0 12px rgba(16,185,129,0.55)' }}>
          {hours}
          <motion.span
            animate={{ opacity: prefersReducedMotion ? 1 : [1, 0.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="px-1"
          >
            :
          </motion.span>
          {minutes}
        </div>
      </div>
      {showCaption && (
        <motion.div
          className={cn('mt-3 text-white font-extrabold tracking-wide text-center', s.caption)}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          SOCORRO A TODA HORA
        </motion.div>
      )}
    </div>
  );
};
