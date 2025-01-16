'use client'

import React, { useState } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/language-switcher';
import { Link } from '@/i18n/routing';

const PROJECT_SLUGS = [
  'centre-culturel-ceramistes',
  'fablab-info-elec',
  'ecole-archi-st-lazard',
  'retail-invivo-synbio',
  'meuble-vitrine-tama',
  'desserte-vi-vant',
  'chaise-gagette'
] as const;

function ProjectList({ onLinkClick }: { onLinkClick?: () => void }) {
  const t = useTranslations('projects');
  const pathname = usePathname();

  return (
    <ScrollArea className="flex-grow">
      <nav className="px-4 pb-8">
        {PROJECT_SLUGS.map((slug) => (
          <Link
            key={slug}
            href={`/project/${slug}`}
            className={clsx("block px-2 py-4 border-b border-gray-100 last:border-b-0 transition-colors group",
              {
                'bg-gray-200': pathname === `/project/${slug}`,
                'hover:bg-gray-50': pathname !== `/project/${slug}`,
              }
            )}
            onClick={onLinkClick}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-playfair font-light text-gray-700 group-hover:text-gray-900 transition-colors text-base tracking-wide">
                  {t(`${slug}.name`)}
                </h3>
                <p className="text-xs text-gray-500 group-hover:text-gray-700 font-light tracking-wider">
                  {t(`${slug}.type`)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </nav>
    </ScrollArea>
  );
}


export const DesktopSidebar = () => {
  const t = useTranslations('home');
  return (
    <div className="hidden md:block">
      <aside className="w-80 bg-gray-50 border-r border-gray-200 h-screen sticky top-0 overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-8 pb-0">
          <Link href="/">
            <div>
              <h2 className="font-playfair text-3xl font-light text-gray-800 mb-2 tracking-wide">
                {t('title')}
              </h2>
              <p className="text-sm text-gray-600 mb-6 font-light tracking-wider">
                {t('subtitle')}
              </p>
            </div>
          </Link>
        </div>
        <ProjectList />
        <LanguageSwitcher />
      </aside>
    </div>
  );
};

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('home');
  return (
    <div className="md:hidden fixed top-4 left-4 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="left" 
          className="p-0 w-lvw bg-gray-50 border-r border-gray-200 flex flex-col overflow-hidden"
        >
          <Link href="/" onClick={() => setIsOpen(false)} className="flex-shrink-0">
            <SheetHeader className="p-8 pb-0">
              <SheetTitle className="font-playfair text-left text-3xl font-light text-gray-800 mb-2 pr-8 tracking-wide">{t('title')}</SheetTitle>
              <SheetDescription className="text-left text-sm text-gray-600 mb-6 font-light tracking-wider">{t('subtitle')}</SheetDescription>
            </SheetHeader>
          </Link>
          <div className="flex-grow overflow-y-auto">
            <ProjectList onLinkClick={() => setIsOpen(false)} />
          </div>
          <LanguageSwitcher />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default function Sidebar() {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
}
