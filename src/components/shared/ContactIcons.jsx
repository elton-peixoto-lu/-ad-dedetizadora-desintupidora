import { SiGmail, SiInstagram, SiWhatsapp } from 'react-icons/si';
import { cn } from '../../utils/classNames';

/**
 * Conjunto reutilizável de ícones/atalhos de contato
 */
export const ContactIcons = ({
  instagramUrl = 'https://www.instagram.com/ad_dedetiza/profilecard/?igsh=MXVmZ2wzb3gybWV5bw==',
  whatsappNumber = '11988919225',
  email = 'addedetizadoraedesentupidora@gmail.com',
  size = 'md',
  className = '',
  showLabels = false,
}) => {
  const formatWa = (number) => `https://wa.me/55${String(number).replace(/\D/g, '')}`;

  const sizes = {
    sm: { icon: 18, pad: 'p-1.5', gap: 'gap-3', text: 'text-xs' },
    md: { icon: 22, pad: 'p-2', gap: 'gap-4', text: 'text-sm' },
    lg: { icon: 26, pad: 'p-2.5', gap: 'gap-5', text: 'text-base' },
  }[size] || { icon: 22, pad: 'p-2', gap: 'gap-4', text: 'text-sm' };

  const Item = ({ href, children, label, color }) => (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className={cn(
        'inline-flex items-center rounded-md bg-white/10 border border-white/20 hover:bg-white/15 transition-colors',
        sizes.pad
      )}
      aria-label={label}
      title={label}
    >
      <span className={cn(color)}>{children}</span>
      {showLabels && <span className={cn('ml-2 text-white/90', sizes.text)}>{label}</span>}
    </a>
  );

  return (
    <div className={cn('flex items-center justify-center', sizes.gap, className)}>
      <Item href={`mailto:${email}`} label="E-mail" color="text-red-500">
        <SiGmail size={sizes.icon} />
      </Item>
      <Item href={instagramUrl} label="Instagram" color="text-pink-500">
        <SiInstagram size={sizes.icon} />
      </Item>
      <Item href={formatWa(whatsappNumber)} label="WhatsApp" color="text-green-500">
        <SiWhatsapp size={sizes.icon} />
      </Item>
    </div>
  );
};


