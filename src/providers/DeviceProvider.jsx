import { createContext, useContext } from 'react';
import { useResponsiveBreakpoints } from '../hooks/useResponsiveBreakpoints';

const DeviceContext = createContext({
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  width: 1024,
  height: 768,
});

export const DeviceProvider = ({ children }) => {
  const device = useResponsiveBreakpoints();
  return (
    <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>
  );
};

export const useDevice = () => useContext(DeviceContext);


