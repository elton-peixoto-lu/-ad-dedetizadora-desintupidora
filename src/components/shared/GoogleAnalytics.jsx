import { useEffect } from 'react';
import { useCookieConsent } from './CookieBanner';

/**
 * Componente para Google Analytics que só ativa com consentimento
 * Compliant com LGPD/GDPR
 */
export const GoogleAnalytics = ({ measurementId = 'G-XXXXXXXXXX' }) => {
  const { hasConsent } = useCookieConsent();

  useEffect(() => {
    if (!hasConsent || !measurementId || measurementId === 'G-XXXXXXXXXX') {
      return;
    }

    // Carrega o Google Analytics apenas se houver consentimento
    const loadGoogleAnalytics = () => {
      // Verifica se já foi carregado
      if (window.gtag) return;

      // Cria o script do Google Analytics
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script1);

      // Cria o script de inicialização
      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}', {
          page_title: 'AD Dedetizadora - Controle de Pragas',
          page_location: window.location.href,
          custom_map: {
            'custom_parameter_1': 'dedetizadora_service'
          }
        });
      `;
      document.head.appendChild(script2);

      // Define gtag globalmente
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };

      console.log('🔹 Google Analytics ativado com consentimento do usuário');
    };

    loadGoogleAnalytics();
  }, [hasConsent, measurementId]);

  // Função para rastrear eventos customizados
  useEffect(() => {
    if (hasConsent && window.gtag) {
      // Eventos específicos da dedetizadora
      const trackCustomEvents = () => {
        // Evento: Visualização da página
        window.gtag('event', 'page_view', {
          event_category: 'dedetizadora',
          event_label: 'site_visit',
          custom_parameter_1: 'pest_control_site'
        });
      };

      trackCustomEvents();
    }
  }, [hasConsent]);

  return null; // Este componente não renderiza nada
};

/**
 * Hook para rastreamento de eventos no Google Analytics
 */
export const useAnalytics = () => {
  const { hasConsent } = useCookieConsent();

  const trackEvent = (eventName, parameters = {}) => {
    if (hasConsent && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'dedetizadora',
        ...parameters
      });
      console.log(`📊 Evento rastreado: ${eventName}`, parameters);
    }
  };

  const trackWhatsAppClick = (phoneNumber) => {
    trackEvent('whatsapp_click', {
      event_label: `phone_${phoneNumber}`,
      value: 1
    });
  };

  const trackServiceInterest = (serviceType) => {
    trackEvent('service_interest', {
      event_label: serviceType,
      custom_parameter_1: 'service_inquiry'
    });
  };

  const trackPageSection = (sectionName) => {
    trackEvent('section_view', {
      event_label: sectionName,
      custom_parameter_1: 'page_section'
    });
  };

  return {
    trackEvent,
    trackWhatsAppClick,
    trackServiceInterest,
    trackPageSection,
    isTrackingEnabled: hasConsent
  };
};
