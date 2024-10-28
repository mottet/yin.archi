import React from "react"
// import { ChevronLeft } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"

interface ProjectPageProps {
    title: string
    type: string
    descriptions: string[]
    images?: string[]
}

const projects: Record<string, ProjectPageProps> = {
    "centre-culturel-ceramistes": {
        title: "CENTRE CULTUREL et RESIDENCE de céramistes",
        type: "Interior",
        descriptions: [
            "En immersion dans la nature, situé à la frontière franco-allemande à Sarreguemines, ce centre culturel et résidence de céramistes vise à répondre à la question suivante : Comment aider les artisans céramistes à mettre en valeur leurs créations tout en sensibilisant le public à l&apos;importance du savoir-faire dans leur quotidien ?",
            "Pour cela, le centre favorise la collaboration entre artisans céramistes afin d&apos;enrichir leurs pratiques et de partager leurs expériences. Il offre un espace inspirant aux artisans céramistes, leur permettant de se ressourcer créativement et d&apos;expérimenter de nouvelles techniques. De plus, le centre promeut auprès du public local les arts de la céramique. Enfin, des cérémonies du thé sont organisées pour montrer l&apos;impact culturel que peut avoir l&apos;artisanat, tout en faisant voyager les visiteurs.",
            "Résidence et Atelier de Céramique\nL&apos;objectif est de réunir les artisans et le public. Je propose donc d&apos;installer la résidence et l&apos;atelier de céramique dans le bâtiment long, permettant aux artisans de se rendre facilement à leur travail, de rencontrer des gens et de partager leurs créations. La résidence devient un lieu de vie et d&apos;échange entre artisans, tandis que l&apos;atelier, ouvert au public, offre un espace pour apprendre et créer de la poterie. Impliquer les gens dans l&apos;artisanat leur fait découvrir la valeur du fait main. De plus, l&apos;atelier permet de réduire la consommation d&apos;énergie en regroupant les cuissons.",
            "Pavillon de thé\nEn Asie, la céramique et le thé sont indissociables, formant un pont culturel qui invite les gens à découvrir l&apos;art du thé. Ce lieu met en valeur l&apos;impact culturel des artisans tout en offrant une pause sereine aux visiteurs et aux artisans lors de la dégustation du thé."
        ]
    },
    "fablab-info-elec": {
        title: "FABLAB d&apos;informatique et d&apos;électronique",
        type: "Interior",
        descriptions: [
            "Le site se trouve dans le 19e arrondissement de Paris, à l&apos;angle de la Villette, un quartier dynamique et culturel. Nous proposons d&apos;y créer un FabLab, un lieu de rencontre où le public peut venir échanger, apprendre et fabriquer. Situé au bord d&apos;une darse, ce lieu sera à la fois accessible et attractif.",
            "La transparence est choisie comme thème central pour attirer les visiteurs et encourager les interactions. Ce FabLab, dédié à l&apos;informatique et à l&apos;électronique, mettra en valeur le travail des participants tout en favorisant les échanges. L&apos;espace architectural sera conçu pour éveiller la curiosité des visiteurs et les inciter à découvrir et expérimenter dans un cadre ouvert et accueillant.",
            "J&apos;ai opté pour un FabLab spécialisé en informatique et électronique afin d&apos;offrir un environnement où les gens peuvent explorer, apprendre et créer dans des domaines essentiels à notre époque numérique. Mon intention est de stimuler l&apos;innovation et la collaboration en fournissant des outils et des ressources qui permettent de concrétiser des idées, d&apos;expérimenter de nouvelles technologies et de contribuer à une communauté de créateurs et d&apos;innovateurs. Je souhaite que cet espace devienne un lieu où chacun se sente libre de circuler, d&apos;explorer et de s&apos;immerger pleinement dans l&apos;univers technologique.",
            "LES MATERIAUX\nLe sol est principalement en béton brut. Les cubes sont constitués de structures en bois avec des côtés en verre, tandis que le liège est utilisé pour le revêtement de sol à l&apos;intérieur des cubes afin de réduire le bruit."
        ]
    },
    "ecole-archi-st-lazard": {
        title: "ECOLE d&apos;architecture à Paris Saint-Lazare",
        type: "Interior",
        descriptions: [
            "Le Site\nLe site est situé dans une halle ferroviaire construite en 1886, au 1, rue de Saint-Pétersbourg, Paris 8, au cœur du quartier central des affaires. Vestige de l&apos;architecture industrielle parisienne, cette halle bénéficie d&apos;un accès facile, se trouvant entre la gare Saint-Lazare et les stations de métro Europe et Rome, dans un quartier animé.",
            "Problématique\nComment transformer un tiers de cette halle, actuellement dédiée à la messagerie et aux bureaux, en un espace d&apos;apprentissage dynamique et stimulant pour une école d&apos;architecture ? Le projet doit relever des défis tels que la pollution sonore, le manque de lumière naturelle et l&apos;inconfort thermique, tout en préservant les éléments structurels pour valoriser le bâtiment existant.",
            "Projet\nIl s&apos;agit de créer une école d&apos;architecture de 3 250 m², destinée à accueillir  une totale de 250 à 300 étudiants et personnels. Cette école doit incarner l&apos;idée de l&apos;institution d&apos;apprentissage de demain, un lieu où l&apos;on partage des idées, s&apos;implique activement, participe, observe, et s&apos;enrichit des autres."
        ]
    },
    "retail-invivo-synbio": {
        title: "RETAIL Invivo Synbio",
        type: "Interior",
        descriptions: [
            "Ceci est un projet de groupe. Nous avons créé ce concept store selon les besoins de notre client, InVivo Retail, qui est le premier groupe coopératif agricole en France. La recherche d&apos;Invivo Retail consiste à trouver une idée de nouveau concept store responsable, simple, authentique et audacieux afin de rendre le groupe incontournable sur le marché comme jardinerie de demain."
        ]
    },
    "meuble-vitrine-tama": {
        title: "MEUBLE VITRINE Tama",
        type: "Design",
        descriptions: [
            "Tama vise à mettre en valeur la créativité des artisans céramistes dans l&apos;art de la table. Avec des dimensions de L1300 x P390 x H1300 mm, ce meuble est fabriqué en chêne massif, avec un placage de chêne, et du papier de Procédés Chénel (600g) collé sur des profils métalliques. Ce meuble vitrine est conçu pour être à la fois esthétique et fonctionnel, offrant un espace élégant et raffiné pour exposer les œuvres des céramistes, tout en soulignant la beauté et la finesse de leur artisanat.",
            "Process de Fabrication\nLe meuble est d&apos;abord assemblé en deux parties: une partie haute et une partie basse. Les pieds sont en forme de U en chêne massif. Les montants ont des trous réalisés par découpe numérique permettant d&apos;y glisser les plateaux une fois les montants assemblés. Pour finir, il suffit de placer la partie haute sur les pieds ; le poids du meuble suffit à le stabiliser.\nRéalisé par ZAKA Design Meubles Agencements, échelle 1"
        ]
    },
    "desserte-vi-vant": {
        title: "DESSERTE de coworking Vi-Vant",
        type: "Design",
        descriptions: [
            "Après la COVID, de plus en plus de personnes ont la possibilité de travailler depuis chez elles. Les bureaux flexibles sont devenus essentiels pour accompagner cette transition, où les employés ne viennent au bureau que trois fois par semaine. Cependant, dans ces espaces ouverts, il n&apos;est pas pratique de stocker ses affaires personnelles lorsqu&apos;on n&apos;a pas de bureau attitré. C&apos;est pourquoi j&apos;ai voulu concevoir une desserte mobile qui améliore l&apos;expérience de travail pour ceux qui n&apos;ont pas de bureau personnel, en leur offrant confort et organisation.",
            "J&apos;ai donc proposé un concept : le \"bureau étendu.\" Cette desserte mobile permet de ranger votre lunch box, sac, manteau, dossiers de travail ou ordinateur portable, et de l&apos;emporter facilement avec vous, où que vous travailliez dans le bureau.",
            "J&apos;ai choisi des matériaux comme la porcelaine, le bois et le feutre parce que je souhaite que les gens puissent immédiatement associer ce qu&apos;ils peuvent y ranger, en se basant sur les qualités naturelles de chaque matériau."
        ]
    },
    "chaise-gagette": {
        title: "CHAISE empilable Gagette",
        type: "Design",
        descriptions: [
            "Le but de ce projet est de créer une chaise qui pourrait être empilée tout en étant convenable pour son environnement, un musée parisien. J&apos;ai choisi le Musée d&apos;Orsay comme client. Je vise à créer une élégante et pratique chaise qui peut relier son design à l&apos;architecture conçue par Gae Aulenti. On peut voir clairement les éléments architecturaux de l&apos;art nouveau et du modernisme dans le design d&apos;Aulenti. Par conséquent, je veux aussi que ma chaise montre ces caractéristiques à travers la forme, les couleurs et les matières."
        ]
    }
};

export function generateStaticParams() {
    return Object.keys(projects).map((projectName) => ({
        slug: projectName,
    }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { title, type, descriptions } = projects[slug];
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="md:hidden h-6"></div>
                {/* <Link href="/" passHref>
                    <Button variant="ghost" className="mb-8 text-gray-600 hover:text-gray-900">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Back
                    </Button>
                </Link> */}

                <h1 className="text-4xl font-light text-gray-900 mb-2 tracking-wide">{title}</h1>
                <p className="text-xl text-gray-600 mb-8 font-light">{type}</p>

                <div className="prose prose-lg text-gray-600 font-light leading-relaxed mb-12">
                    {descriptions.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${title} - Image ${index + 1}`}
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                    ))}
                </div> */}
            </div>
        </div>
    )
}