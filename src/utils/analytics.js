/**
 * Configurações e utilitários para analytics
 * Suporte para Google Analytics, Facebook Pixel, Google Tag Manager, etc.
 */

export const analyticsConfig = {
  // Google Analytics
  googleAnalytics: {
    measurementId: 'G-XXXXXXXXXX', // Substitua pelo ID real do GA4
    enabled: true
  },
  
  // Facebook Pixel (para campanhas de marketing)
  facebookPixel: {
    pixelId: 'XXXXXXXXXXXXXXX', // Substitua pelo ID real do Facebook Pixel
    enabled: false
  },
  
  // Google Tag Manager
  googleTagManager: {
    containerId: 'GTM-XXXXXXX', // Substitua pelo ID real do GTM
    enabled: false
  }
};

/**
 * Eventos pré-definidos para a dedetizadora
 */
export const trackingEvents = {
  // Contatos WhatsApp
  whatsapp: {
    primary_click: 'whatsapp_primary_clicked',
    secondary_click: 'whatsapp_secondary_clicked'
  },
  
  // Redes sociais
  social: {
    instagram_click: 'instagram_profile_clicked',
    facebook_click: 'facebook_profile_clicked'
  },
  
  // Interesse por serviços
  services: {
    pest_control: 'interesse_controle_pragas',
    cockroach_control: 'interesse_controle_baratas',
    plumbing: 'interesse_desentupimento',
    water_tank_cleaning: 'interesse_limpeza_caixa_agua',
    general_pest_control: 'interesse_dedetizacao'
  },
  
  // Seções da página
  sections: {
    hero_view: 'visualizou_hero',
    cockroach_view: 'visualizou_secao_baratas',
    plumbing_view: 'visualizou_secao_desentupimento',
    water_tank_view: 'visualizou_secao_caixa_agua',
    pest_control_view: 'visualizou_secao_dedetizacao'
  },
  
  // Cookies e LGPD
  privacy: {
    cookies_accepted: 'cookies_aceitos',
    cookies_declined: 'cookies_recusados',
    privacy_details_viewed: 'detalhes_privacidade_visualizados'
  }
};

/**
 * Função para rastrear eventos no Facebook Pixel (se habilitado)
 */
export const trackFacebookPixel = (eventName, parameters = {}) => {
  if (!analyticsConfig.facebookPixel.enabled || !window.fbq) {
    return;
  }

  try {
    window.fbq('track', eventName, parameters);
    console.log(`📱 Facebook Pixel: ${eventName}`, parameters);
  } catch (error) {
    console.warn('Erro ao rastrear evento no Facebook Pixel:', error);
  }
};

/**
 * Função para carregar Facebook Pixel
 */
export const loadFacebookPixel = (pixelId) => {
  if (!pixelId || typeof window === 'undefined') return;

  window.fbq = window.fbq || function() {
    (window.fbq.q = window.fbq.q || []).push(arguments);
  };
  
  if (!window._fbq) window._fbq = window.fbq;
  
  window.fbq.push = window.fbq;
  window.fbq.loaded = true;
  window.fbq.version = '2.0';
  window.fbq.queue = [];

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);

  window.fbq('init', pixelId);
  window.fbq('track', 'PageView');

  console.log('📱 Facebook Pixel carregado');
};

/**
 * Função para carregar Google Tag Manager
 */
export const loadGoogleTagManager = (containerId) => {
  if (!containerId || typeof window === 'undefined') return;

  // DataLayer
  window.dataLayer = window.dataLayer || [];

  // GTM Script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
  document.head.appendChild(script);

  // GTM Init
  const initScript = document.createElement('script');
  initScript.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${containerId}');
  `;
  document.head.appendChild(initScript);

  console.log('📊 Google Tag Manager carregado');
};

/**
 * Função universal para rastrear eventos
 */
export const trackEvent = (eventType, eventName, parameters = {}) => {
  const eventData = {
    event_category: 'dedetizadora',
    event_label: eventName,
    timestamp: new Date().toISOString(),
    ...parameters
  };

  // Google Analytics (via gtag)
  if (window.gtag && analyticsConfig.googleAnalytics.enabled) {
    window.gtag('event', eventType, eventData);
  }

  // Facebook Pixel
  if (analyticsConfig.facebookPixel.enabled) {
    trackFacebookPixel('CustomEvent', { event_name: eventName, ...eventData });
  }

  // Google Tag Manager
  if (window.dataLayer && analyticsConfig.googleTagManager.enabled) {
    window.dataLayer.push({
      event: eventType,
      event_name: eventName,
      ...eventData
    });
  }

  console.log(`📊 Evento rastreado: ${eventType} - ${eventName}`, eventData);
};

/**
 * Configuração de eventos específicos para WhatsApp
 */
export const trackWhatsAppInteraction = (phoneNumber, source = 'unknown') => {
  const eventName = phoneNumber === '11988919225' 
    ? trackingEvents.whatsapp.primary_click 
    : trackingEvents.whatsapp.secondary_click;

  trackEvent('contact', eventName, {
    phone_number: phoneNumber,
    contact_method: 'whatsapp',
    source_section: source,
    value: 1
  });

  // Facebook Pixel - Lead event
  if (analyticsConfig.facebookPixel.enabled) {
    trackFacebookPixel('Lead', {
      content_name: 'WhatsApp Contact',
      content_category: 'contact',
      value: 1,
      currency: 'BRL'
    });
  }
};

/**
 * Configuração de eventos específicos para Instagram
 */
export const trackInstagramInteraction = (instagramUrl, source = 'unknown') => {
  trackEvent('social_media', trackingEvents.social.instagram_click, {
    instagram_url: instagramUrl,
    social_platform: 'instagram',
    source_section: source,
    value: 1
  });

  // Facebook Pixel - ViewContent event
  if (analyticsConfig.facebookPixel.enabled) {
    trackFacebookPixel('ViewContent', {
      content_name: 'Instagram Profile',
      content_category: 'social_media',
      value: 1,
      currency: 'BRL'
    });
  }
};
