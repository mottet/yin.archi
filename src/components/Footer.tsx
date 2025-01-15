import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default function Footer({ locale }: { locale: string }) {
  setRequestLocale(locale);
  const t = useTranslations('footer');

  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-3xl mx-auto px-6 text-center text-gray-500 text-sm">
        <p>{t('copyright')}</p>
      </div>
    </footer>
  );
} 