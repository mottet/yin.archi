import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale;
  return (
    <main className="flex-grow">
      <Hero locale={locale} />
      <About locale={locale} />
      <Footer locale={locale} />
    </main>
  );
} 