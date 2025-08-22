import { cn, companyClasses } from '../utils/classNames';
import { Header } from '../components/shared/Header';
import { Footer } from '../components/shared/Footer';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      <Header />
      
      <section id="sobre-mim" className={cn('py-16 md:py-20', companyClasses.section.pestControl)}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white/95 rounded-2xl border border-green-200 p-8 md:p-12 backdrop-blur-md shadow-lg">
            <h1 className="text-gray-800 font-black text-3xl md:text-4xl mb-6 text-center">
              Sobre a AD Dedetizadora e Desentupidora
            </h1>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Somos a <strong>AD Dedetizadora e Desentupidora</strong>, uma empresa especializada em 
                controle de pragas, descupinização, desratização e desentupimento com atendimento 
                rápido, seguro e eficiente.
              </p>
              
              <p>
                Nosso compromisso é proteger sua família e seu negócio com soluções modernas, 
                produtos aprovados pela ANVISA e equipe experiente e capacitada. Atuamos com 
                responsabilidade ambiental e técnicas atualizadas para garantir os melhores resultados.
              </p>
              
              <h2 className="text-2xl font-bold text-green-700 mt-8 mb-4">
                Nossos Serviços
              </h2>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Dedetização:</strong> Controle eficaz de baratas, formigas, cupins e outros insetos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Desratização:</strong> Eliminação segura de roedores</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Descupinização:</strong> Tratamento especializado contra cupins</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Desentupimento:</strong> Limpeza de ralos, pias, vasos sanitários e tubulações</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Limpeza de Caixa d'Água:</strong> Higienização completa para sua segurança</span>
                </li>
              </ul>
              
              <h2 className="text-2xl font-bold text-green-700 mt-8 mb-4">
                Por que escolher a AD?
              </h2>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Atendimento 24 horas, incluindo fins de semana</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Produtos certificados e ambientalmente responsáveis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Equipe técnica qualificada e experiente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Garantia de satisfação em todos os serviços</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Preços justos e transparentes</span>
                </li>
              </ul>
              
              <div className="bg-green-50 p-6 rounded-lg mt-8 border-l-4 border-green-500">
                <p className="text-green-800 font-semibold">
                  Entre em contato conosco e proteja seu ambiente com quem entende do assunto!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};
