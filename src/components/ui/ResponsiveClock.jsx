import { motion } from 'framer-motion';
import { cn } from '../../utils/classNames';
import { useResponsive } from '../../hooks/useResponsive';

/**
 * Componente de relógio responsivo e animado
 * Versão simplificada com animações suaves
 */
export const ResponsiveClock = ({ 
  size = 'medium',
  staticHour = 10,
  staticMinute = 30,
  className = '',
  showTitle = true 
}) => {
  const { isMobile, prefersReducedMotion } = useResponsive();

  // Cálculo dos ângulos dos ponteiros (hora fixa para consistência visual)
  const hourAngle = (staticHour * 30) + (staticMinute * 0.5);
  const minuteAngle = staticMinute * 6;

  const sizeClasses = {
    small: {
      container: 'w-32 h-32 md:w-40 md:h-40',
      face: 'w-24 h-24 md:w-32 md:h-32',
      numbers: 'text-xs md:text-sm',
      hourHand: 'w-0.5 h-8 md:h-10',
      minuteHand: 'w-px h-10 md:h-12',
      center: 'w-1 h-1 md:w-1.5 md:h-1.5'
    },
    medium: {
      container: 'w-40 h-40 md:w-48 md:h-48',
      face: 'w-32 h-32 md:w-40 md:h-40',
      numbers: 'text-sm md:text-base',
      hourHand: 'w-0.5 h-10 md:h-12',
      minuteHand: 'w-px h-12 md:h-16',
      center: 'w-1.5 h-1.5 md:w-2 md:h-2'
    }
  };

  const currentSize = sizeClasses[size] || sizeClasses.medium;

  return (
    <div className={cn('relative flex flex-col items-center', className)}>
      {/* Título */}
      {showTitle && (
        <motion.div 
          className={cn(
            'font-black text-white mb-3 md:mb-4 text-center',
            isMobile ? 'text-lg' : 'text-xl md:text-2xl'
          )}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
        >
          QUALQUER HORA
        </motion.div>
      )}

      {/* Container do Relógio */}
      <motion.div
        className="relative"
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          duration: 1,
          type: "spring",
          stiffness: 80,
          delay: 0.3
        }}
        whileHover={{ 
          scale: prefersReducedMotion ? 1 : 1.05,
          transition: { duration: 0.3 }
        }}
      >
        {/* Aro externo do relógio - visual premium */}
        <div className={cn(
          currentSize.container,
          'rounded-full shadow-[0_12px_30px_rgba(0,0,0,0.45)] flex items-center justify-center relative',
          'bg-[conic-gradient(from_210deg,rgba(239,68,68,1)_0%,rgba(185,28,28,1)_55%,rgba(127,29,29,1)_100%)]'
        )}>
          
          {/* Face com gradiente radial e gloss, trocando números por "ticks" */}
          <div className={cn(
            currentSize.face,
            'rounded-full flex items-center justify-center relative',
            'bg-[radial-gradient(circle_at_50%_45%,#ffffff_0%,#f5f5f5_55%,#e7e7e7_100%)] border border-white/40'
          )}>
            {/* Reflexo sutil */}
            <div className="absolute inset-0 rounded-full pointer-events-none overflow-hidden">
              <div className="absolute -top-1/3 left-0 right-0 h-2/3 rounded-b-[100%] bg-white/25 blur-md" />
            </div>

            {/* Ticks de horas */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-black/80 rounded"
                style={{
                  width: i % 3 === 0 ? 3 : 2,
                  height: i % 3 === 0 ? 12 : 8,
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 30}deg) translateY(-48%)`,
                  transformOrigin: 'center bottom'
                }}
              />
            ))}
            
            {/* Ponteiro das horas */}
            <motion.div
              className={cn(
                currentSize.hourHand,
                'bg-black absolute rounded-full origin-bottom'
              )}
              style={{
                bottom: '50%',
                left: '50%',
                marginLeft: '-1px'
              }}
              initial={{ rotate: 0 }}
              animate={{ rotate: hourAngle }}
              transition={{ 
                duration: 1.5,
                type: "spring",
                stiffness: 100,
                delay: 0.8
              }}
            />
            
            {/* Ponteiro dos minutos */}
            <motion.div
              className={cn(
                currentSize.minuteHand,
                'bg-black absolute rounded-full origin-bottom'
              )}
              style={{
                bottom: '50%',
                left: '50%',
                marginLeft: '-0.5px'
              }}
              initial={{ rotate: 0 }}
              animate={{ rotate: minuteAngle }}
              transition={{ 
                duration: 2,
                type: "spring",
                stiffness: 120,
                delay: 1
              }}
            />
            
            {/* Centro do relógio */}
            <motion.div 
              className={cn(
                currentSize.center,
                'bg-red-600 shadow-inner shadow-black/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 border border-white/50'
              )}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, duration: 0.3 }}
            />
          </div>

          {/* Suporte superior minimalista */}
          <motion.div
            className="absolute -top-1 md:-top-2 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-red-300/70 rounded"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.4 }}
          />
        </div>

        {/* Animação de pulso sutil */}
        <motion.div
          className={cn(
            currentSize.container,
            'absolute inset-0 bg-red-500/20 rounded-full -z-10'
          )}
          animate={{
            scale: prefersReducedMotion ? 1 : [1, 1.1, 1],
            opacity: prefersReducedMotion ? 0.2 : [0.2, 0.1, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
};
