'use client'

import { Link, usePathname } from '@/i18n/routing'
import { useLocale } from 'next-intl'

const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <ul className="flex gap-2 p-3 pl-5">
        <li>
        <Link href={pathname} locale="fr" className={locale === "fr" ? 'font-bold font-playfair' : 'font-playfair'}>
            fr
        </Link>
        </li>
        <span>|</span>
        <li>
        <Link href={pathname} locale="en" className={locale === "en" ? 'font-bold font-playfair' : 'font-playfair'}>
            en
        </Link>
        </li>
    </ul>
  )
}

export default LanguageSwitcher 