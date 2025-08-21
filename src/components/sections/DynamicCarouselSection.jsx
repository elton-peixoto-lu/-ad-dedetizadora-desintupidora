import { ImageCarousel } from '../ui/ImageCarousel';
import { cn, companyClasses } from '../../utils/classNames';

// Vite: importa todas as imagens de forma dinâmica
// eslint-disable-next-line no-undef
const modules = import.meta.glob('../../assets/images/**/*.{png,jpg,jpeg,webp,avif,svg}', { eager: true, as: 'url' });
const allImages = Object.values(modules);

export const DynamicCarouselSection = () => {
  // Filtro simples para garantir urls válidas
  const images = allImages.filter(Boolean);
  if (images.length === 0) return null;

  return (
    <section className={cn('py-6 md:py-10 relative', companyClasses.section.pestControl)}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ImageCarousel images={images} intervalMs={3500} className="aspect-[16/9]" fit="contain" />
        </div>
      </div>
    </section>
  );
};
