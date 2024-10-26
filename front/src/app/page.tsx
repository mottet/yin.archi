import React from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const projects = [
  { slug: 'centre-culturel-ceramistes', name: "CENTRE CULTUREL et RESIDENCE de céramistes", type: "Interior" },
  { slug: 'fablab-info-elec', name: "FABLAB d’informatique et d’électronique", type: "Interior" },
  { slug: 'ecole-archi-st-lazard', name: "ECOLE d’architecture à Paris Saint-Lazare", type: "Interior" },
  { slug: 'retail-invivo-synbio', name: "RETAIL Invivo Synbio", type: "Interior" },
  { slug: 'meuble-vitrine-tama', name: "MEUBLE VITRINE Tama", type: "Design" },
  { slug: 'desserte-vi-vant', name: "DESSERTE de coworking Vi-Vant", type: "Design" },
  { slug: 'chaise-gagette', name: "CHAISE empilable Gagette", type: "Design" }
];

const ProjectList = () => (
  <ScrollArea className="flex-grow">
    <nav className="px-6">
      {projects.map((project) => (
        <a
          key={project.slug}
          href={`/project/${project.slug}`}
          className="block py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors group"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-light text-gray-700 group-hover:text-gray-900 transition-colors text-lg tracking-wide">{project.name}</h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-700 font-light tracking-wider">{project.type}</p>
            </div>
            {/* <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" /> */}
          </div>
        </a>
      ))}
    </nav>
  </ScrollArea>
)

const DesktopSidebar = () => (
  <aside className="w-80 bg-gray-50 border-r border-gray-200 h-screen sticky top-0 overflow-hidden flex flex-col">
    <div className="p-8">
      <h2 className="text-3xl font-light text-gray-800 mb-2 tracking-wide">Jocelyn Pei-Hua YIN</h2>
      <p className="text-sm text-gray-600 mb-6 font-light tracking-wider">Interior Designer</p>
    </div>
    <ProjectList />
  </aside>
)

const MobileSidebar = () => (
  <SheetContent side="left" className="p-0 w-lvw bg-gray-50 border-r border-gray-200">
    <SheetHeader className="p-8">
      <SheetTitle className="text-left text-3xl font-light text-gray-800 mb-2 tracking-wide">Jocelyn Pei-Hua YIN</SheetTitle>
      <SheetDescription className="text-left text-sm text-gray-600 mb-6 font-light tracking-wider">Interior Designer</SheetDescription>
    </SheetHeader>
    <ProjectList />
  </SheetContent>
)

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 flex">

      <div className="hidden md:block">
        <DesktopSidebar />
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Mobile Menu */}
        <div className="md:hidden fixed top-4 left-4 z-50">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <MobileSidebar />
          </Sheet>
        </div>

        {/* Hero Section */}
        <section className="relative h-screen">
          <img
            src="/image 4_CShading_LightMix.jpg?height=1080&width=1920"
            alt="Common space in ceramist center"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-6xl font-bold mb-4">Creating Beautiful Spaces</h1>
              <p className="text-xl mb-8">Transforming interiors with elegance and functionality</p>
              <Button variant="outline" size="lg" className="text-gray-700 border-white bg-slate-50 hover:bg-slate-100">
                Explore Projects
              </Button>
            </div>
          </div> */}
        </section>

        {/* About Section */}
        <section className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Diplômé en 2024 d'un Master en Architecture d'Intérieur, avec 2 ans d'expérience chez alfred studio,
              je participe à toutes les phases des projets, de la conception initiale au suivi des travaux.
              Mon rôle inclut la réalisation de plans, coupes et visuels 3D pour les présentations,
              ainsi que la collaboration avec les clients, fournisseurs et entreprises pour concrétiser les projets.
            </p>
            <p>
              Après avoir étudié aux États-Unis et à Taïwan, j'ai développé une grande ouverture aux différentes cultures
              et je parle couramment l'anglais, le mandarin et le français. Ma passion réside dans la création de relations
              spatiales qui enrichissent les expériences de vie, et je crois fermement en une conception axée sur l'économie
              circulaire, visant à réduire les déchets et à améliorer la qualité de vie à long terme.
            </p>
          </div>
          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Expertise</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-600">
            <li>• Space Planning</li>
            <li>• 3D Modeling and Rendering</li>
            <li>• Color Theory</li>
            <li>• Sustainable Design</li>
            <li>• Project Management</li>
            <li>• Custom Furniture Design</li>
          </ul>
          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Software</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-600">
            <li>• AutoCAD</li>
            <li>• 3DS Max</li>
            <li>• SketchUp</li>
            <li>• Adobe Ps</li>
            <li>• Adobe Ai</li>
            <li>• Adobe Id</li>
            <li>• Suites Office</li>
          </ul>
          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Languages</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-600">
            <li>• Français courant</li>
            <li>• Chinois maternelle</li>
            <li>• Anglais bilingue</li>
          </ul>
          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Hobbies</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-600">
            <li>• Randonnée</li>
            <li>• Trompette</li>
            <li>• Cinéma</li>
            <li>• Lecture</li>
            <li>• Dessin</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-6">
          <div className="max-w-3xl mx-auto px-6 text-center text-gray-500 text-sm">
            <p>&copy; 2024 Jocelyn Pei-Hua YIN Interior Design. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}