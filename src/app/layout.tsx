import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./sidebar-menu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const playfairDisplayFont = localFont({
  src: "./fonts/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-playfair-display",
  weight: "400",
});

export const metadata: Metadata = {
  title: "jocelyn yin | Architecte d'intérieur",
  description: "Architecte d'intérieur",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplayFont.variable} antialiased`}
      >
        <div className="min-h-screen bg-gray-50 flex">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
