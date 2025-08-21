import { useResponsiveBreakpoints } from './useResponsiveBreakpoints';

/**
 * Hook personalizado para detectar diferentes breakpoints de tela
 * Versão simplificada que usa detecção manual robusta
 */
export const useResponsive = () => {
  // Usa a versão mais robusta com breakpoints completos
  return useResponsiveBreakpoints();
};
