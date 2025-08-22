import { cn, companyClasses } from '../utils/classNames';
import { Header } from '../components/shared/Header';
import { Footer } from '../components/shared/Footer';
import { FloatingPromotion } from '../components/shared/FloatingPromotion';

export const PromotionsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10 md:py-14 bg-gray-50">
        <section id="promocoes" className={cn('py-10 md:py-14', companyClasses.section.pestControl)}>
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Título da página */}
              <div className="text-center mb-8">
                <h1 className="text-white font-black text-3xl md:text-4xl mb-4">
                  🎉 Promoções Especiais
                </h1>
                <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                  Aproveite nossas ofertas exclusivas em serviços de dedetização e desentupimento. 
                  Descontos especiais para visitantes do nosso site!
                </p>
              </div>

              {/* Banner de promoção centralizado */}
              <div className="flex justify-center items-center min-h-[400px]">
                <div className="relative">
                  {/* Container para o banner fixo */}
                  <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-500 text-white rounded-2xl shadow-2xl border border-green-400/30 backdrop-blur-md overflow-hidden p-6 max-w-sm">
                    {/* Padrão de fundo sutil */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none" />
                    
                    {/* Conteúdo */}
                    <div className="relative z-10">
                      {/* Ícone e título */}
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-2xl">🎁</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg leading-tight">
                            Desconto Especial
                          </h3>
                          <p className="text-green-100 text-sm opacity-90">
                            Para visitantes do site
                          </p>
                        </div>
                      </div>

                      {/* Socorro a toda hora */}
                      <div className="text-center mb-3">
                        <p className="text-red-500 font-bold text-xs tracking-wide uppercase animate-pulse" style={{ color: '#ef4444' }}>
                          🚨 SOCORRO A TODA HORA 🚨
                        </p>
                      </div>

                      {/* Descrição */}
                      <p className="text-white/90 mb-4 leading-relaxed text-sm">
                        🎉 Ganhe desconto especial nos nossos serviços de dedetização e desentupimento!
                      </p>

                      {/* Botão WhatsApp */}
                      <button
                        onClick={() => {
                          const message = encodeURIComponent('Olá! Vim pelo site e gostaria de pedir meu desconto especial! 🎉');
                          const phoneNumber = '5511988919225';
                          window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                        }}
                        className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 font-semibold text-white hover:scale-105 transform shadow-lg hover:shadow-xl py-3 text-sm"
                      >
                        <span className="text-xl">📱</span>
                        <span>Pedir Desconto no WhatsApp</span>
                      </button>

                      {/* Disclaimer */}
                      <p className="text-green-100/70 text-xs mt-2 text-center">
                        Promoção por tempo limitado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informações adicionais */}
              <div className="mt-12 grid md:grid-cols-2 gap-6">
                <div className="bg-black/30 rounded-2xl border border-white/10 p-6 backdrop-blur-md">
                  <h3 className="text-white font-bold text-xl mb-3">🏠 Residencial</h3>
                  <p className="text-white/80 leading-relaxed">
                    Proteção completa para sua casa e família. Serviços de dedetização, 
                    desratização e desentupimento com garantia e produtos seguros.
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-2xl border border-white/10 p-6 backdrop-blur-md">
                  <h3 className="text-white font-bold text-xl mb-3">🏢 Comercial</h3>
                  <p className="text-white/80 leading-relaxed">
                    Soluções profissionais para empresas, restaurantes e comércios. 
                    Atendimento rápido e discreto para manter seu negócio funcionando.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
