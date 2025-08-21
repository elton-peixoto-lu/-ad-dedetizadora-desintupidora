import { motion } from 'framer-motion';
import { cn, responsiveClasses } from '../../utils/classNames';
import { useResponsive } from '../../hooks/useResponsive';
import { trackWhatsAppInteraction } from '../../utils/analytics';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * Componente de botão do WhatsApp reutilizável
 * Otimizado para desktop e mobile com tracking de analytics
 */
export const WhatsAppButton = ({ 
  phoneNumber, 
  displayNumber, 
  className = '', 
  size = 'medium',
  showIcon = true 
}) => {
  const { isMobile } = useResponsive();
  
  const formatWhatsAppUrl = (number) => {
    // Remove caracteres não numéricos
    const cleanNumber = number.replace(/\D/g, '');
    return `https://wa.me/55${cleanNumber}`;
  };

  const sizeClasses = {
    small: 'py-3 px-4 md:py-4 md:px-6 text-base md:text-lg font-bold bg-green-600 hover:bg-green-700 border-2 border-green-500 hover:border-green-400 shadow-lg hover:shadow-xl',
    medium: 'py-4 px-6 md:py-5 md:px-8 text-lg md:text-xl font-black bg-green-600 hover:bg-green-700 border-2 border-green-500 hover:border-green-400 shadow-xl hover:shadow-2xl',
    large: 'py-5 px-8 md:py-6 md:px-10 text-xl md:text-2xl font-black bg-green-600 hover:bg-green-700 border-2 border-green-500 hover:border-green-400 shadow-xl hover:shadow-2xl',
  };

  const iconSizes = {
    small: 'w-5 h-5 md:w-6 md:h-6',
    medium: 'w-6 h-6 md:w-7 md:h-7',
    large: 'w-7 h-7 md:w-8 md:h-8',
  };

  const handleClick = () => {
    // Rastrear clique no WhatsApp se analytics estiver ativo
    trackWhatsAppInteraction(phoneNumber, 'button');
  };

  return (
    <motion.a
      href={formatWhatsAppUrl(phoneNumber)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(
        'text-white rounded-xl transition-all transform flex items-center justify-center space-x-3',
        sizeClasses[size],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {showIcon && (
        <FaWhatsapp className={iconSizes[size]} aria-label="WhatsApp" />
      )}
      <span className="font-bold tracking-wide">
        {displayNumber}
      </span>
    </motion.a>
  );
};
