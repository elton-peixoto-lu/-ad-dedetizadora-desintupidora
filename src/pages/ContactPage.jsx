import { useState } from 'react';
import { cn, companyClasses } from '../utils/classNames';
import { ContactIcons } from '../components/shared/ContactIcons';

export const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder Typeform logic – aqui você integraria com a API do Typeform
    // ou redirecionaria para um form hospedado
    console.log('Enviar para Typeform:', form);
    setSubmitted(true);
  };

  return (
    <section className={cn('min-h-screen py-10 md:py-16', companyClasses.section.pestControl)}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
        {/* Voltar */}
        <div className="mb-4">
          <a href="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white">
            ← Voltar
          </a>
        </div>
        {/* Social icons (reutilizável) */}
        <ContactIcons className="mb-6" size="md" showLabels={false} />

        <div className="bg-black/30 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
          <h1 className="text-white font-black text-2xl md:text-3xl mb-2 text-center">Fale comigo</h1>
          <p className="text-white/80 text-center mb-6">Preencha seus dados e retornaremos em breve.</p>

          {submitted ? (
            <div className="text-center text-white font-semibold">Obrigado! Sua mensagem foi enviada.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white/80 text-sm mb-1" htmlFor="name">Nome</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className="w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 text-white placeholder-white/40" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-1" htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 text-white placeholder-white/40" placeholder="seu@email.com" />
              </div>

              <div className="text-sm text-white/70">
                Ao continuar você concorda com nossa <a href="/lgpd" className="underline hover:text-white">Política de Privacidade (LGPD)</a>. Dúvidas: <a href="mailto:addedetizadoraedesentupidora@gmail.com" className="underline hover:text-white">addedetizadoraedesentupidora@gmail.com</a>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-2 rounded-lg border border-red-400/60">Enviar</button>
              </div>

              {/* Placeholder para Typeform embed */}
              {/* <TypeformEmbed formId="SEU_FORM_ID" onSubmit={...}/> */}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
