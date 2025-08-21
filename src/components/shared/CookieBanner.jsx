import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';
import { cn } from '../../utils/classNames';
import { useResponsive } from '../../hooks/useResponsive';

/**
 * Banner de cookies customizado para AD Dedetizadora
 * Compliant com LGPD/GDPR
 */
export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const { isMobile } = useResponsive();

  const COOKIE_NAME = 'ad-dedetizadora-cookie-consent';
  const COOKIE_EXPIRY = 365; // dias

  useEffect(() => {
    // Verifica se o usuário já deu consentimento
    const consent = Cookies.get(COOKIE_NAME);
    // Forçar abertura via query param (?cookies=show)
    const params = new URLSearchParams(window.location.search);
    const forceOpen = params.get('cookies') === 'show';
    if (!consent || forceOpen) {
      // Delay para mostrar o banner após o carregamento da página
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set(COOKIE_NAME, 'accepted', { expires: COOKIE_EXPIRY });
    setShowBanner(false);
    
    // Aqui você pode adicionar código para ativar analytics, etc.
    console.log('Cookies aceitos - Analytics e outras funcionalidades podem ser ativadas');
  };

  const declineCookies = () => {
    Cookies.set(COOKIE_NAME, 'declined', { expires: COOKIE_EXPIRY });
    setShowBanner(false);
    
    console.log('Cookies recusados - Apenas cookies essenciais serão utilizados');
  };

  const cookieTypes = [
    {
      name: 'Cookies Essenciais',
      description: 'Necessários para o funcionamento básico do site.',
      required: true
    },
    {
      name: 'Cookies de Performance',
      description: 'Coletam informações sobre como você usa nosso site para melhorar a experiência.',
      required: false
    },
    {
      name: 'Cookies de Marketing',
      description: 'Utilizados para personalizar anúncios e medir a eficácia das campanhas.',
      required: false
    }
  ];

  // Botão flutuante "Gerenciar cookies" (aparece quando o banner não está visível)
  if (!showBanner) {
    const consent = Cookies.get(COOKIE_NAME);
    if (consent) {
      return (
        <button
          onClick={() => setShowBanner(true)}
          className="fixed bottom-4 right-4 z-[9999] bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-full px-3 py-2 text-xs md:text-sm"
        >
          🍪 Gerenciar cookies
        </button>
      );
    }
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-[9999] bg-gradient-to-r from-red-700 via-red-700/95 to-red-800 shadow-2xl border-t-4 border-red-600 with-safe-area"
      >
        <div className="container mx-auto px-4 py-4 md:py-6">
          {!showDetails ? (
            // Banner básico
            <div className={cn(
              'flex items-center justify-between gap-4',
              isMobile ? 'flex-col' : 'flex-row'
            )}>
              <div className="flex items-center gap-3 text-white">
                <span className="text-2xl md:text-3xl">🍪</span>
                <div>
                  <p className="font-bold text-sm md:text-base">
                    Este site utiliza cookies para melhorar sua experiência.
                  </p>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs md:text-sm px-3 py-1.5 rounded-md border border-white/20 transition-colors"
                  >
                    🔎 Saiba mais sobre nossos cookies
                  </button>
                </div>
              </div>

              <div className={cn(
                'flex gap-3',
                isMobile ? 'w-full flex-col' : 'flex-row'
              )}>
                <motion.button
                  onClick={acceptCookies}
                  className={cn(
                    'bg-red-600 hover:bg-red-700 text-white font-black py-2 px-4 md:py-3 md:px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg',
                    isMobile ? 'w-full' : ''
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ✅ Aceitar
                </motion.button>
                
                <motion.button
                  onClick={declineCookies}
                  className={cn(
                    'bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg transition-all',
                    isMobile ? 'w-full' : ''
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ❌ Recusar
                </motion.button>
              </div>
            </div>
          ) : (
            // Detalhes expandidos
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="text-white"
            >
              <div className="mb-4">
                <h3 className="text-lg md:text-xl font-black mb-2">
                  🍪 Política de Cookies - AD Dedetizadora
                </h3>
                <p className="text-sm md:text-base mb-4">
                  Utilizamos cookies para garantir que você tenha a melhor experiência em nosso site. 
                  Você pode escolher quais cookies aceitar:
                </p>
              </div>

              <div className="grid gap-3 mb-4 max-h-40 overflow-y-auto">
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className="bg-red-900/30 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-sm">{cookie.name}</h4>
                        <p className="text-xs text-red-100">{cookie.description}</p>
                      </div>
                      <div className="ml-3">
                        {cookie.required ? (
                          <span className="text-xs bg-red-600 px-2 py-1 rounded">Obrigatório</span>
                        ) : (
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-red-600 rounded"
                            defaultChecked
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={cn(
                'flex gap-3',
                isMobile ? 'flex-col' : 'flex-row justify-between'
              )}>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-yellow-200 hover:text-yellow-100 underline text-sm"
                >
                  ← Voltar
                </button>

                <div className={cn(
                  'flex gap-3',
                  isMobile ? 'flex-col' : 'flex-row'
                )}>
                  <motion.button
                    onClick={acceptCookies}
                    className={cn(
                      'bg-red-600 hover:bg-red-700 text-white font-black py-2 px-6 rounded-lg transition-all transform hover:scale-105',
                      isMobile ? 'w-full' : ''
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ✅ Aceitar Selecionados
                  </motion.button>
                  
                  <motion.button
                    onClick={declineCookies}
                    className={cn(
                      'bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition-all',
                      isMobile ? 'w-full' : ''
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ❌ Recusar Todos
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Logo AD pequeno no canto */}
        <div className="absolute top-2 right-2 text-white font-black text-xs opacity-75">
          <span className="text-white">A</span><span className="text-red-300">D</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

/**
 * Hook para verificar consentimento de cookies
 */
export const useCookieConsent = () => {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const cookieConsent = Cookies.get('ad-dedetizadora-cookie-consent');
    setConsent(cookieConsent);
  }, []);

  const hasConsent = consent === 'accepted';
  const hasDeclined = consent === 'declined';
  const isUndecided = consent === null || consent === undefined;

  return {
    hasConsent,
    hasDeclined,
    isUndecided,
    consent
  };
};
