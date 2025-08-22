import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes, FaGift } from 'react-icons/fa';
import { cn } from '../../utils/classNames';
import { useResponsive } from '../../hooks/useResponsive';

export const FloatingPromotion = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { isMobile } = useResponsive();

  useEffect(() => {
    // Mostrar após 3 segundos
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    console.log('Banner dismissed'); // Debug
    setIsVisible(false);
    setIsDismissed(true);
    // Removido sessionStorage - banner aparecerá novamente na próxima visita
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Vim pelo site e gostaria de pedir meu desconto especial! 🎉');
    const phoneNumber = '5511988919225';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    handleDismiss();
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cn(
            'fixed z-[9998] pointer-events-none',
            isMobile 
              ? 'bottom-20 left-4 right-4' 
              : 'bottom-6 right-6'
          )}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25 
          }}
        >
          <div className={cn(
            'relative pointer-events-auto',
            'bg-gradient-to-r from-green-500 via-green-600 to-green-500',
            'text-white rounded-2xl shadow-2xl border border-green-400/30',
            'backdrop-blur-md overflow-hidden',
            isMobile ? 'p-4' : 'p-5 max-w-sm'
          )}>
            {/* Padrão de fundo sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none" />
            
            {/* Botão de fechar */}
            <button
              onClick={handleDismiss}
              onTouchEnd={handleDismiss}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110 z-50 cursor-pointer border border-gray-200"
              aria-label="Fechar promoção"
              type="button"
            >
              <span className="text-gray-800 font-bold text-lg leading-none pointer-events-none select-none">×</span>
            </button>

            {/* Conteúdo */}
            <div className="relative z-10">
              {/* Ícone e título */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <FaGift size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">
                    Desconto Especial
                  </h3>
                  <p className="text-green-100 text-sm opacity-90">
                    Para visitantes do site
                  </p>
                </div>
              </div>

              {/* Socorro a toda hora */}
              <div className="text-center mb-3">
                <p className="text-red-500 font-bold text-xs tracking-wide uppercase animate-pulse" style={{ color: '#ef4444' }}>
                  🚨 SOCORRO A TODA HORA 🚨
                </p>
              </div>

              {/* Descrição */}
              <p className={cn(
                'text-white/90 mb-4 leading-relaxed',
                isMobile ? 'text-sm' : 'text-base'
              )}>
                🎉 Ganhe desconto especial nos nossos serviços de dedetização e desentupimento!
              </p>

              {/* Botão WhatsApp */}
              <button
                onClick={handleWhatsAppClick}
                className={cn(
                  'w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm',
                  'border border-white/30 rounded-xl transition-all duration-200',
                  'flex items-center justify-center gap-3',
                  'font-semibold text-white hover:scale-105 transform',
                  'shadow-lg hover:shadow-xl',
                  isMobile ? 'py-3 text-sm' : 'py-3.5 text-base'
                )}
              >
                <FaWhatsapp size={20} />
                <span>Pedir Desconto no WhatsApp</span>
              </button>

              {/* Disclaimer */}
              <p className="text-green-100/70 text-xs mt-2 text-center">
                Promoção por tempo limitado
              </p>
            </div>

            {/* Animação de brilho */}
            <motion.div
              className="absolute -top-2 -left-2 w-4 h-4 bg-white/30 rounded-full blur-sm"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
