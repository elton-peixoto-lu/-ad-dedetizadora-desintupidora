import { useState } from 'react';
import { cn, companyClasses } from '../utils/classNames';
import { ContactIcons } from '../components/shared/ContactIcons';

export const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', captcha: '' });
  const [submitted, setSubmitted] = useState(false);
  const [captchaError, setCaptchaError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    
    // Limpar erro do captcha quando o usuário digita
    if (name === 'captcha' && captchaError) {
      setCaptchaError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verificar captcha
    if (form.captcha !== '15') {
      setCaptchaError('Resposta incorreta. Tente novamente.');
      return;
    }
    
    // Placeholder Typeform logic – aqui você integraria com a API do Typeform
    // ou redirecionaria para um form hospedado
    console.log('Enviar para Typeform:', form);
    setSubmitted(true);
  };

  return (
    <section className={cn('min-h-screen py-10 md:py-16')}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
        {/* Voltar */}
        <div className="mb-4">
          <a href="/" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
            ← Voltar
          </a>
        </div>
        {/* Social icons (reutilizável) */}
        <ContactIcons className="mb-6" size="md" showLabels={false} />

        <div className="rounded-2xl p-6 md:p-8 bg-white border border-green-200 shadow-lg">
          <h1 className="text-green-700 font-bold text-2xl md:text-3xl mb-2 text-center">Fale comigo</h1>
          <p className="text-gray-700 text-center mb-6">Preencha seus dados e retornaremos em breve.</p>

          {submitted ? (
            <div className="text-center text-green-700 font-semibold">Obrigado! Sua mensagem foi enviada.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm mb-1" htmlFor="name">Nome</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className="w-full rounded-md bg-white border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1" htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full rounded-md bg-white border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400" placeholder="seu@email.com" />
              </div>

              {/* Captcha */}
              <div>
                <label className="block text-gray-700 text-sm mb-1" htmlFor="captcha">
                  Verificação de segurança: <span className="font-semibold">Quanto é 10 + 5?</span>
                </label>
                <input 
                  id="captcha" 
                  name="captcha" 
                  type="text" 
                  required 
                  value={form.captcha} 
                  onChange={handleChange} 
                  className={cn(
                    "w-full rounded-md bg-white border px-3 py-2 text-gray-800 placeholder-gray-400",
                    captchaError ? "border-red-500" : "border-gray-300"
                  )}
                  placeholder="Digite sua resposta" 
                />
                {captchaError && (
                  <p className="text-red-500 text-sm mt-1">{captchaError}</p>
                )}
              </div>

              <div className="text-sm text-gray-600">
                Ao continuar você concorda com nossa <a href="/lgpd" className="underline text-green-700 hover:text-green-800">Política de Privacidade (LGPD)</a>. Dúvidas: <a href="mailto:addedetizadoraedesentupidora@gmail.com" className="underline text-green-700 hover:text-green-800">addedetizadoraedesentupidora@gmail.com</a>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow-md">Enviar</button>
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
