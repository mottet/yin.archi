import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

interface HeroProps {
  locale: string;
}

export default function Hero({ locale }: HeroProps) {
  setRequestLocale(locale);
  const t = useTranslations('home');
  return (
    <section className="relative h-screen">
      <Image
        src="/4_CShading_LightMix.webp"
        alt="Common space in ceramist center"
        className="w-full h-full object-cover"
        quality={100}
        fill
      />
      <div className="md:hidden absolute inset-0">
        <div className="px-10 py-24 text-right">
          <h2 className="font-playfair text-3xl font-light text-gray-100 mb-2 tracking-wide">
            {t('title')}
          </h2>
          <p className="text-sm text-gray-200 mb-6 font-light tracking-wider">
            {t('subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
} 