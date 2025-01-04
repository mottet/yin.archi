import Image from 'next/image'
import React from 'react'

export default function HomePage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
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
            <h2 className="text-3xl font-light text-gray-100 mb-2 tracking-wide">Jocelyn Yin</h2>
            <p className="text-sm text-gray-200 mb-6 font-light tracking-wider">Architecte d&apos;intérieur</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">À propos de moi</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            Diplômé en 2024 d&apos;un Master en Architecture d&apos;Intérieur, avec 2 ans d&apos;expérience chez alfred studio,
            je participe à toutes les phases des projets, de la conception initiale au suivi des travaux.
            Mon rôle inclut la réalisation de plans, coupes et visuels 3D pour les présentations,
            ainsi que la collaboration avec les clients, fournisseurs et entreprises pour concrétiser les projets.
          </p>
          <p>
            Après avoir étudié aux États-Unis et à Taïwan, j&apos;ai développé une grande ouverture aux différentes cultures
            et je parle couramment l&apos;anglais, le mandarin et le français. Ma passion réside dans la création de relations
            spatiales qui enrichissent les expériences de vie, et je crois fermement en une conception axée sur l&apos;économie
            circulaire, visant à réduire les déchets et à améliorer la qualité de vie à long terme.
          </p>
        </div>
        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Expertises</h3>
        <ul className="grid grid-cols-2 gap-2 text-gray-600">
          <li>• Aménagement de l'espace</li>
          <li>• Modélisation et rendu 3D</li>
          <li>• Théorie des couleurs</li>
          <li>• Conception durable</li>
          <li>• Gestion de projet</li>
          <li>• Conception de mobilier sur mesure</li>
        </ul>
        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Logiciels</h3>
        <ul className="grid grid-cols-2 gap-2 text-gray-600">
          <li>• AutoCAD</li>
          <li>• 3DS Max</li>
          <li>• SketchUp</li>
          <li>• Adobe Ps</li>
          <li>• Adobe Ai</li>
          <li>• Adobe Id</li>
          <li>• Suites Office</li>
          <li>• Revit</li>
        </ul>
        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Langues</h3>
        <ul className="grid grid-cols-2 gap-2 text-gray-600">
          <li>• Français courant</li>
          <li>• Chinois maternelle</li>
          <li>• Anglais bilingue</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-3xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>&copy; 2024 Jocelyn Yin architecte d&apos;intérieur. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  )
}