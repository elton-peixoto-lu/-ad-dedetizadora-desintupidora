import { cn, companyClasses } from '../../utils/classNames';

export const AboutMe = () => {
  return (
    <section id="sobre-mim" className={cn('py-10 md:py-14', companyClasses.section.pestControl)}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-black/30 rounded-2xl border border-white/10 p-6 md:p-8 backdrop-blur-md">
          <h2 className="text-white font-black text-2xl md:text-3xl mb-3">Sobre mim</h2>
          <p className="text-white/80 leading-relaxed">
            Somos a AD Dedetizadora e Desentupidora. Atuamos com controle de pragas, descupinização,
            desratização e desentupimento com atendimento rápido, seguro e eficiente. Nosso compromisso
            é proteger sua família e seu negócio com soluções modernas, produtos aprovados e equipe experiente.
          </p>
        </div>
      </div>
    </section>
  );
};
