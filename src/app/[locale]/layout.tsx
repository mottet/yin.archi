import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Sidebar from "../../components/sidebar-menu";
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const playfairDisplayFont = localFont({
    src: "../fonts/PlayfairDisplay-VariableFont_wght.ttf",
    variable: "--font-playfair-display",
    weight: "400",
});

export const metadata: Metadata = {
    title: "jocelyn yin | Architecte d'intérieur",
    description: "Architecte d'intérieur",
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    let messages;
    const locale = (await params).locale;
    try {
        messages = await getMessages({locale});
    } catch {
        notFound();
    }
    setRequestLocale(locale);
    return (
        <html lang={locale}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplayFont.variable} antialiased`}
            >
                <div className="min-h-screen bg-gray-50 flex">
                    <NextIntlClientProvider locale={locale} messages={messages}>
                        <Sidebar />
                        {children}
                    </NextIntlClientProvider>
                </div>
            </body>
        </html>
    );
} 