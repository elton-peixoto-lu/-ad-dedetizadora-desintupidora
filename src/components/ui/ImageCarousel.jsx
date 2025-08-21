import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/classNames';

export const ImageCarousel = ({ images = [], intervalMs = 3500, className = '', fit = 'cover' }) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const validImages = useMemo(() => images.filter(Boolean), [images]);
  const total = validImages.length;

  useEffect(() => {
    if (total <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, intervalMs);
    return () => clearInterval(timerRef.current);
  }, [intervalMs, total]);

  if (total === 0) return null;

  const go = (dir) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIndex((i) => (i + dir + total) % total);
  };

  return (
    <div className={cn('relative overflow-hidden rounded-xl border border-white/10 bg-black/20', className)}>
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={validImages[index]}
          src={validImages[index]}
          alt={`slide-${index + 1}`}
          className={cn('w-full h-full', fit === 'contain' ? 'object-contain' : 'object-cover')}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4 }}
        />
      </AnimatePresence>

      {/* Arrows */}
      {total > 1 && (
        <>
          <button
            type="button"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center"
            onClick={() => go(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center"
            onClick={() => go(1)}
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      {total > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2">
          {validImages.map((_, i) => (
            <button
              key={i}
              className={cn('w-2.5 h-2.5 rounded-full', i === index ? 'bg-white' : 'bg-white/40')}
              onClick={() => setIndex(i)}
              aria-label={`slide-${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
