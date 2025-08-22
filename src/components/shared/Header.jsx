import { useState } from 'react';
import { cn } from '../../utils/classNames';
import { CompanyLogo } from './CompanyLogo';

export const Header = () => {
  const [open, setOpen] = useState(false);

  const navItem = (href, label) => (
    <a
      href={href}
      className="px-3 py-2 text-sm md:text-base font-semibold text-gray-700 hover:text-gray-900"
      onClick={() => setOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <CompanyLogo size="small" theme="default" />
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItem('#hero', 'Início')}
            {navItem('#servicos', 'Serviços')}
            {navItem('#contato', 'Contato')}
            <a href="/fale-comigo" className="px-3 py-2 text-sm md:text-base font-semibold text-gray-700 hover:text-gray-900">Fale comigo</a>
            <a
              href="#sobre-mim"
              className="ml-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm border border-emerald-500/50"
            >
              Sobre mim
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center gap-2 h-9 rounded-md border border-gray-300 text-gray-700 px-3 bg-white"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            <span className="text-lg">☰</span>
            <span className="text-xs font-semibold">{open ? 'Fechar' : 'Menu'}</span>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-3 flex flex-col gap-2">
            {navItem('#hero', 'Início')}
            {navItem('#servicos', 'Serviços')}
            {navItem('#contato', 'Contato')}
            <a href="/fale-comigo" className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900">Fale comigo</a>
            <a
              href="#sobre-mim"
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm border border-emerald-500/50 text-center"
              onClick={() => setOpen(false)}
            >
              Sobre mim
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
