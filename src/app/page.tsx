import React from 'react'

export default function HomePage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="/image 4_CShading_LightMix.jpg"
          alt="Common space in ceramist center"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0">
          <div className="px-10 py-24 text-right">
            <h2 className="text-3xl font-light text-gray-100 mb-2 tracking-wide">Jocelyn Pei-Hua YIN</h2>
            <p className="text-sm text-gray-200 mb-6 font-light tracking-wider">Interior Designer</p>
          </div>
        </div>
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
  )
}