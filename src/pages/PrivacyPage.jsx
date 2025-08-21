import { cn, companyClasses } from '../utils/classNames';

export const PrivacyPage = () => {
  return (
    <section className={cn('min-h-screen py-10 md:py-16', companyClasses.section.pestControl)}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <div className="bg-black/30 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md text-white/90">
          <h1 className="text-white font-black text-2xl md:text-3xl mb-4">Política de Privacidade (LGPD)</h1>
          <p className="mb-3">Respeitamos a sua privacidade. Esta página descreve como coletamos, usamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Coletamos apenas dados necessários para contato e atendimento.</li>
            <li>Armazenamos dados de forma segura e por tempo limitado.</li>
            <li>Você pode solicitar a exclusão dos seus dados a qualquer momento.</li>
            <li>Utilizamos cookies apenas com seu consentimento para melhorar sua experiência.</li>
          </ul>
          <p className="mt-4">Dúvidas: <a href="mailto:addedetizadoraedesentupidora@gmail.com" className="underline hover:text-white">addedetizadoraedesentupidora@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
};
