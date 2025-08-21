import { motion } from 'framer-motion';
import { cn } from '../../utils/classNames';
import { trackInstagramInteraction } from '../../utils/analytics';
import { FaInstagram } from 'react-icons/fa';

/**
 * Componente de botão para o Instagram
 * Redireciona para o perfil da empresa no Instagram
 */
export const InstagramButton = ({ 
  instagramUrl = 'https://www.instagram.com/ad_dedetiza/profilecard/?igsh=MXVmZ2wzb3gybWV5bw==',
  size = 'medium',
  className = '',
  showIcon = true 
}) => {
  const sizeClasses = {
    small: 'py-3 px-4 md:py-4 md:px-6 text-base md:text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-2 border-pink-400 hover:border-pink-300 shadow-lg hover:shadow-xl',
    medium: 'py-4 px-6 md:py-5 md:px-8 text-lg md:text-xl font-black bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-2 border-pink-400 hover:border-pink-300 shadow-xl hover:shadow-2xl',
    large: 'py-5 px-8 md:py-6 md:px-10 text-xl md:text-2xl font-black bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-2 border-pink-400 hover:border-pink-300 shadow-xl hover:shadow-2xl',
  };

  const iconSizes = {
    small: 'w-5 h-5 md:w-6 md:h-6',
    medium: 'w-6 h-6 md:w-7 md:h-7',
    large: 'w-7 h-7 md:w-8 md:h-8',
  };

  const handleClick = () => {
    // Rastrear clique no Instagram se analytics estiver ativo
    trackInstagramInteraction(instagramUrl, 'button');
  };

  return (
    <motion.a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(
        'text-white rounded-xl transition-all transform flex items-center justify-center space-x-3 hover:scale-105',
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
        <FaInstagram className={iconSizes[size]} aria-label="Instagram" />
      )}
      <span className="font-black tracking-wide">
        INSTAGRAM
      </span>
    </motion.a>
  );
};
