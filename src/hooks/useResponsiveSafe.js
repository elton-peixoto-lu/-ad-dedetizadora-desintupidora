import { useState, useEffect } from 'react';

/**
 * Hook responsivo alternativo que não depende de bibliotecas externas
 * Versão segura e robusta para fallback
 */
export const useResponsiveSafe = () => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  });

  useEffect(() => {
    // Só executa no lado do cliente
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set inicial
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Breakpoints baseados no Tailwind CSS
  const { width } = dimensions;
  const isMobile = width <= 767;
  const isTablet = width >= 768 && width <= 1023;
  const isDesktop = width >= 1024;
  const isLargeDesktop = width >= 1280;
  const isXLDesktop = width >= 1536;

  // Detecção de orientação
  const isLandscape = dimensions.width > dimensions.height;
  const isPortrait = dimensions.height >= dimensions.width;

  // Detecção de preferências do sistema (com fallback)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [prefersDarkMode, setPrefersDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detecção de reduced motion
    const mediaQueryReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQueryReducedMotion.matches);

    const handleReducedMotionChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQueryReducedMotion.addEventListener('change', handleReducedMotionChange);

    // Detecção de dark mode
    const mediaQueryDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    setPrefersDarkMode(mediaQueryDarkMode.matches);

    const handleDarkModeChange = (e) => setPrefersDarkMode(e.matches);
    mediaQueryDarkMode.addEventListener('change', handleDarkModeChange);

    return () => {
      mediaQueryReducedMotion.removeEventListener('change', handleReducedMotionChange);
      mediaQueryDarkMode.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  return {
    // Dimensões
    width: dimensions.width,
    height: dimensions.height,
    
    // Breakpoints
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    isXLDesktop,
    
    // Orientação
    isLandscape,
    isPortrait,
    
    // Preferências
    prefersReducedMotion,
    prefersDarkMode,
    
    // Utilitários
    isTouchDevice: isMobile || isTablet,
    isSmallScreen: isMobile,
    isMediumScreen: isTablet,
    isLargeScreen: isDesktop || isLargeDesktop || isXLDesktop,
    
    // Função helper para obter classes condicionais
    getResponsiveClass: (mobileClass, tabletClass, desktopClass) => {
      if (isMobile) return mobileClass;
      if (isTablet) return tabletClass || mobileClass;
      return desktopClass || tabletClass || mobileClass;
    }
  };
};
