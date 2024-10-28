'use client'

import React, { useState } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import "./globals.css";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import clsx from 'clsx';

const projects = [
  { slug: 'centre-culturel-ceramistes', name: "CENTRE CULTUREL et RESIDENCE de céramistes", type: "Interior" },
  { slug: 'fablab-info-elec', name: "FABLAB d’informatique et d’électronique", type: "Interior" },
  { slug: 'ecole-archi-st-lazard', name: "ECOLE d’architecture à Paris Saint-Lazare", type: "Interior" },
  { slug: 'retail-invivo-synbio', name: "RETAIL Invivo Synbio", type: "Interior" },
  { slug: 'meuble-vitrine-tama', name: "MEUBLE VITRINE Tama", type: "Design" },
  { slug: 'desserte-vi-vant', name: "DESSERTE de coworking Vi-Vant", type: "Design" },
  { slug: 'chaise-gagette', name: "CHAISE empilable Gagette", type: "Design" }
];

function ProjectList({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname();

  return (
    <ScrollArea className="flex-grow">
      <nav className="px-4">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/project/${project.slug}`}
            className={clsx("block px-2 py-4 border-b border-gray-100 last:border-b-0 transition-colors group",
              {
                'bg-gray-200': pathname === `/project/${project.slug}`,
                'hover:bg-gray-50': pathname !== `/project/${project.slug}`,
              }
            )}
            onClick={onLinkClick}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-light text-gray-700 group-hover:text-gray-900 transition-colors text-lg tracking-wide">{project.name}</h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-700 font-light tracking-wider">{project.type}</p>
              </div>
            </div>
          </Link>
        ))}
      </nav>
    </ScrollArea>
  );
}


export const DesktopSidebar = () => (
  <div className="hidden md:block">
    <aside className="w-80 bg-gray-50 border-r border-gray-200 h-screen sticky top-0 overflow-hidden flex flex-col">
      <Link href="/">
        <div className="p-8">
          <h2 className="text-3xl font-light text-gray-800 mb-2 tracking-wide">Jocelyn Pei-Hua YIN</h2>
          <p className="text-sm text-gray-600 mb-6 font-light tracking-wider">Interior Designer</p>
        </div>
      </Link>
      <ProjectList />
    </aside>
  </div>
)

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden fixed top-4 left-4 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-lvw bg-gray-50 border-r border-gray-200">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <SheetHeader className="p-8">
              <SheetTitle className="text-left text-3xl font-light text-gray-800 mb-2 tracking-wide">Jocelyn Pei-Hua YIN</SheetTitle>
              <SheetDescription className="text-left text-sm text-gray-600 mb-6 font-light tracking-wider">Interior Designer</SheetDescription>
            </SheetHeader>
          </Link>
          <ProjectList onLinkClick={() => setIsOpen(false)} />
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
