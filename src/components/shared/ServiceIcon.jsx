import { cn } from '../../utils/classNames';

// Pré-carrega todos os arquivos de /src/assets/services
// Suporta svg, png, webp e avif
const iconModules = import.meta.glob('../../assets/services/*.{svg,png,webp,avif,jpg,jpeg}', {
  eager: true,
  import: 'default',
});

// Mapeia pelo nome do arquivo sem extensão (com tolerância a variações)
const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
const nameToUrl = Object.entries(iconModules).reduce((acc, [path, url]) => {
  const match = path.match(/services\/(.+)\.(svg|png|webp|avif|jpg|jpeg)$/);
  if (match) {
    const raw = match[1];
    acc[raw] = url;
    acc[normalize(raw)] = url;
  }
  return acc;
}, {});

/**
 * Ícone de serviço baseado em imagem dos assets
 * name: corresponde ao nome do arquivo dentro de src/assets/services (sem extensão)
 * size: sm | md | lg
 */
export const ServiceIcon = ({ name, size = 'md', className = '', alt = '' }) => {
  const sizes = {
    sm: 'w-6 h-6 md:w-7 md:h-7',
    md: 'w-7 h-7 md:w-8 md:h-8',
    lg: 'w-9 h-9 md:w-10 md:h-10',
    full: 'w-full h-full',
  };

  const src = nameToUrl[name] || nameToUrl[normalize(name)];

  if (!src) {
    // Fallback: pequeno bloco neutro para evitar layout shift caso a imagem ainda não exista
    return <span className={cn('inline-block rounded bg-gray-200', sizes[size], className)} aria-hidden="true" />;
  }

  return (
    <img
      src={src}
      alt={alt || name}
      className={cn('inline-block object-contain', sizes[size], className)}
      loading="lazy"
      decoding="async"
    />
  );
};


