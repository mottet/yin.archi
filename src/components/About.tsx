import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default function About({ locale }: { locale: string }) {
  setRequestLocale(locale);
  const t = useTranslations('home');

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{t('about.title')}</h2>
      <div className="space-y-4 text-gray-600">
        <p>{t('about.description1')}</p>
        <p>{t('about.description2')}</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
        {t('about.expertise.title')}
      </h3>
      <ul className="grid grid-cols-2 gap-2 text-gray-600">
        {generateKeys(6).map((key) => (
          <li key={key}>• {t(`about.expertise.items.${key}`)}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
        {t('about.software.title')}
      </h3>
      <ul className="grid grid-cols-2 gap-2 text-gray-600">
        {generateKeys(8).map((key) => (
          <li key={key}>• {t(`about.software.items.${key}`)}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
        {t('about.languages.title')}
      </h3>
      <ul className="grid grid-cols-2 gap-2 text-gray-600">
        {generateKeys(3).map((key) => (
          <li key={key}>• {t(`about.languages.items.${key}`)}</li>
        ))}
      </ul>
    </section>
  );
} 

function generateKeys(count: number): string[] {
  return Array.from({ length: count }, (_, i) => (i + 1).toString());
}
