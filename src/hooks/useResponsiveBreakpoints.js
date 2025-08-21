import { useState, useEffect } from 'react';

/**
 * Hook para detectar breakpoints responsivos de forma robusta
 * Funciona sem dependências externas problemáticas
 */
export const useResponsiveBreakpoints = () => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Throttle para performance
    let timeoutId = null;
    const throttledResize = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', throttledResize);
    
    // Detectar mudanças de orientação
    window.addEventListener('orientationchange', () => {
      setTimeout(handleResize, 100);
    });

    return () => {
      window.removeEventListener('resize', throttledResize);
      window.removeEventListener('orientationchange', handleResize);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Breakpoints baseados no Tailwind CSS
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  };

  const responsive = {
    // Estados básicos
    isMobile: dimensions.width < breakpoints.md,
    isTablet: dimensions.width >= breakpoints.md && dimensions.width < breakpoints.lg,
    isDesktop: dimensions.width >= breakpoints.lg,
    
    // Estados específicos
    isSmallMobile: dimensions.width < breakpoints.sm,
    isLargeMobile: dimensions.width >= breakpoints.sm && dimensions.width < breakpoints.md,
    isLargeDesktop: dimensions.width >= breakpoints.xl,
    isExtraLargeDesktop: dimensions.width >= breakpoints['2xl'],
    
    // Dimensões
    width: dimensions.width,
    height: dimensions.height,
    
    // Helpers
    isLandscape: dimensions.width > dimensions.height,
    isPortrait: dimensions.width <= dimensions.height,
    
    // Acessibilidade
    prefersReducedMotion: typeof window !== 'undefined' && 
      window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    
    // Classes Tailwind dinâmicas
    getClasses: {
      container: dimensions.width < breakpoints.sm 
        ? 'px-4' 
        : dimensions.width < breakpoints.md 
        ? 'px-6' 
        : 'px-8',
      
      textSize: {
        hero: dimensions.width < breakpoints.sm
          ? 'text-3xl'
          : dimensions.width < breakpoints.md
          ? 'text-4xl'
          : dimensions.width < breakpoints.lg
          ? 'text-5xl'
          : 'text-6xl lg:text-7xl',
          
        title: dimensions.width < breakpoints.sm
          ? 'text-xl'
          : dimensions.width < breakpoints.md
          ? 'text-2xl'
          : 'text-3xl lg:text-4xl',
          
        body: dimensions.width < breakpoints.sm
          ? 'text-sm'
          : dimensions.width < breakpoints.md
          ? 'text-base'
          : 'text-lg'
      },
      
      spacing: {
        section: dimensions.width < breakpoints.sm
          ? 'py-6'
          : dimensions.width < breakpoints.md
          ? 'py-8'
          : 'py-12 lg:py-16',
          
        component: dimensions.width < breakpoints.sm
          ? 'p-3'
          : dimensions.width < breakpoints.md
          ? 'p-4'
          : 'p-6 lg:p-8'
      }
    }
  };

  return responsive;
};
