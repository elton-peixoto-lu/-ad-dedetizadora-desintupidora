import clsx from 'clsx';

/**
 * Utility function para combinar classes CSS de forma condicional
 * Wrapper para a biblioteca clsx com funcionalidades específicas do projeto
 */
export const cn = (...classes) => {
  return clsx(...classes);
};

/**
 * Classes pré-definidas para componentes responsivos
 */
export const responsiveClasses = {
  container: 'container mx-auto px-4 sm:px-6 lg:px-8',
  
  // Grid responsivo
  gridCols: {
    1: 'grid grid-cols-1',
    2: 'grid grid-cols-1 md:grid-cols-2',
    3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  },
  
  // Gaps responsivos
  gaps: {
    sm: 'gap-4 md:gap-6',
    md: 'gap-6 md:gap-8 lg:gap-12',
    lg: 'gap-8 md:gap-12 lg:gap-16',
    xl: 'gap-12 md:gap-16 lg:gap-24',
  },
  
  // Padding responsivo
  padding: {
    section: 'py-8 md:py-12 lg:py-16',
    card: 'p-4 md:p-6 lg:p-8',
  },
  
  // Texto responsivo
  text: {
    hero: 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
    title: 'text-2xl md:text-3xl lg:text-4xl',
    subtitle: 'text-xl md:text-2xl lg:text-3xl',
    body: 'text-base md:text-lg',
    small: 'text-sm md:text-base',
  },
  
  // Botões responsivos
  button: {
    primary: 'px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-sm md:text-base lg:text-lg',
    secondary: 'px-3 py-2 md:px-4 md:py-2 text-sm md:text-base',
    whatsapp: 'flex items-center space-x-2 md:space-x-4 bg-green-600 hover:bg-green-700 text-white py-3 px-4 md:py-4 md:px-6 lg:py-6 lg:px-8 rounded-xl text-lg md:text-xl lg:text-2xl font-black transition-all transform hover:scale-105 shadow-2xl',
  },
};

/**
 * Gera classes CSS baseadas no dispositivo
 */
export const getDeviceClasses = (isMobile, isTablet, isDesktop) => ({
  container: isMobile 
    ? 'px-4' 
    : isTablet 
    ? 'px-6' 
    : 'px-8',
    
  spacing: isMobile 
    ? 'gap-6' 
    : isTablet 
    ? 'gap-8' 
    : 'gap-12',
    
  text: {
    hero: isMobile 
      ? 'text-4xl' 
      : isTablet 
      ? 'text-5xl' 
      : 'text-6xl xl:text-7xl',
      
    title: isMobile 
      ? 'text-2xl' 
      : isTablet 
      ? 'text-3xl' 
      : 'text-4xl',
  },
});

/**
 * Classes para elementos específicos da dedetizadora
 */
export const companyClasses = {
  logo: {
    small: 'text-3xl md:text-4xl lg:text-5xl font-black',
    medium: 'text-5xl md:text-6xl lg:text-7xl font-black',
    large: 'text-6xl md:text-7xl lg:text-8xl font-black',
  },
  
  pest: {
    small: 'text-4xl md:text-5xl',
    medium: 'text-6xl md:text-7xl lg:text-8xl',
    large: 'text-7xl md:text-8xl lg:text-9xl',
  },
  
  clock: {
    small: 'w-40 h-40 md:w-48 md:h-48',
    medium: 'w-48 h-48 md:w-56 md:h-56 lg:w-60 lg:h-60',
    large: 'w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72',
  },
  
  section: {
    hero: 'min-h-screen relative bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,0.06),rgba(255,255,255,0)_60%)]',
    cockroach: 'py-8 md:py-12 relative bg-[linear-gradient(135deg,#7f1d1d_0%,#b91c1c_35%,#dc2626_65%,#991b1b_100%)]',
    plumbing: 'py-8 md:py-12 relative bg-[linear-gradient(135deg,#641e16_0%,#7f1d1d_30%,#991b1b_70%,#3b0d0d_100%)]',
    waterTank: 'py-8 md:py-12 relative bg-[linear-gradient(135deg,#111111_0%,#1f2937_30%,#0b0b0b_100%)]',
    pestControl: 'py-8 md:py-12 relative bg-[linear-gradient(135deg,#7f1d1d_0%,#b91c1c_35%,#dc2626_65%,#991b1b_100%)]',
  },
};
