import Image from "next/image"
import React from "react"

interface ProjectPageProps {
    title: string
    type: string
    descriptions: string[]
    imagesFolder?: string
    images?: string[]
}

const projects: Record<string, ProjectPageProps> = {
    "centre-culturel-ceramistes": {
        title: "CENTRE CULTUREL et RESIDENCE de céramistes",
        type: "Interior",
        descriptions: [
            "En immersion dans la nature, situé à la frontière franco-allemande à Sarreguemines, ce centre culturel et résidence de céramistes vise à répondre à la question suivante : Comment aider les artisans céramistes à mettre en valeur leurs créations tout en sensibilisant le public à l'importance du savoir-faire dans leur quotidien ?",
            "Pour cela, le centre favorise la collaboration entre artisans céramistes afin d'enrichir leurs pratiques et de partager leurs expériences. Il offre un espace inspirant aux artisans céramistes, leur permettant de se ressourcer créativement et d'expérimenter de nouvelles techniques. De plus, le centre promeut auprès du public local les arts de la céramique. Enfin, des cérémonies du thé sont organisées pour montrer l'impact culturel que peut avoir l'artisanat, tout en faisant voyager les visiteurs.",
            "Résidence et Atelier de Céramique\nL'objectif est de réunir les artisans et le public. Je propose donc d'installer la résidence et l'atelier de céramique dans le bâtiment long, permettant aux artisans de se rendre facilement à leur travail, de rencontrer des gens et de partager leurs créations. La résidence devient un lieu de vie et d'échange entre artisans, tandis que l'atelier, ouvert au public, offre un espace pour apprendre et créer de la poterie. Impliquer les gens dans l'artisanat leur fait découvrir la valeur du fait main. De plus, l'atelier permet de réduire la consommation d'énergie en regroupant les cuissons.",
            "Pavillon de thé\nEn Asie, la céramique et le thé sont indissociables, formant un pont culturel qui invite les gens à découvrir l'art du thé. Ce lieu met en valeur l'impact culturel des artisans tout en offrant une pause sereine aux visiteurs et aux artisans lors de la dégustation du thé."
        ],
        imagesFolder: "/DAI 5",
        images: [
            "image 1_CShading_LightMix",
            "image 2_CShading_LightMix",
            "image 3_CShading_LightMix",
            "image 4_CShading_LightMix",
            "image 6 _with lighting _CShading_LightMix",
            "image SDT escalier_CShading_LightMix",
            "Salon de thé à étage_CShading_LightMix",
            "PLAN _atelier et residence RDC_50e",
            "PLAN _atelier et residence R+1_50e",
            "Résidence Atelier Coupe AA 50e",
            "Résidence Atelier Coupe AA 50e bis",
            "Résidence Coupe BB 50e_frist try",
            "Résidence Coupe CC 50e",
            "PLANS _salon de thé+COUPE AA_50e",
            "salon de thé COUPE BB_50e",
            "CONCEPT entre les deux espace_rapprocher la nature_parte 1",
            "CONCEPT entre les deux espace_rapprocher la nature_parte 2",
        ]
    },
    "fablab-info-elec": {
        title: "FABLAB d'informatique et d'électronique",
        type: "Interior",
        descriptions: [
            "Le site se trouve dans le 19e arrondissement de Paris, à l'angle de la Villette, un quartier dynamique et culturel. Nous proposons d'y créer un FabLab, un lieu de rencontre où le public peut venir échanger, apprendre et fabriquer. Situé au bord d'une darse, ce lieu sera à la fois accessible et attractif.",
            "La transparence est choisie comme thème central pour attirer les visiteurs et encourager les interactions. Ce FabLab, dédié à l'informatique et à l'électronique, mettra en valeur le travail des participants tout en favorisant les échanges. L'espace architectural sera conçu pour éveiller la curiosité des visiteurs et les inciter à découvrir et expérimenter dans un cadre ouvert et accueillant.",
            "J'ai opté pour un FabLab spécialisé en informatique et électronique afin d'offrir un environnement où les gens peuvent explorer, apprendre et créer dans des domaines essentiels à notre époque numérique. Mon intention est de stimuler l'innovation et la collaboration en fournissant des outils et des ressources qui permettent de concrétiser des idées, d'expérimenter de nouvelles technologies et de contribuer à une communauté de créateurs et d'innovateurs. Je souhaite que cet espace devienne un lieu où chacun se sente libre de circuler, d'explorer et de s'immerger pleinement dans l'univers technologique.",
            "LES MATERIAUX\nLe sol est principalement en béton brut. Les cubes sont constitués de structures en bois avec des côtés en verre, tandis que le liège est utilisé pour le revêtement de sol à l'intérieur des cubes afin de réduire le bruit."
        ],
        imagesFolder: "/DAI 3",
        images: [
            "Extérior_vue de bâtiment du pont",
            "Extérior_vue sous le passage courbe de l_auvent",
            "Extérior_vue sur la quai de la Marne",
            "Interior 1_co-working space",
            "Interior 2_espace d_entrée",
            "Interior 4_cube 2",
            "Interior 5_connect to the gym",
            "Interior 7_R+1 going through",
            "plan de situation_meter-A2_",
            "Rough_on the bridge",
            "Rough_reception",
            "Rough_under the bridge",
            "ZOOM plan_A1-R+1_50e_couleur",
        ]
    },
    "ecole-archi-st-lazard": {
        title: "ECOLE d'architecture à Paris Saint-Lazare",
        type: "Interior",
        descriptions: [
            "Le Site\nLe site est situé dans une halle ferroviaire construite en 1886, au 1, rue de Saint-Pétersbourg, Paris 8, au cœur du quartier central des affaires. Vestige de l'architecture industrielle parisienne, cette halle bénéficie d'un accès facile, se trouvant entre la gare Saint-Lazare et les stations de métro Europe et Rome, dans un quartier animé.",
            "Problématique\nComment transformer un tiers de cette halle, actuellement dédiée à la messagerie et aux bureaux, en un espace d'apprentissage dynamique et stimulant pour une école d'architecture ? Le projet doit relever des défis tels que la pollution sonore, le manque de lumière naturelle et l'inconfort thermique, tout en préservant les éléments structurels pour valoriser le bâtiment existant.",
            "Projet\nIl s'agit de créer une école d'architecture de 3 250 m², destinée à accueillir  une totale de 250 à 300 étudiants et personnels. Cette école doit incarner l'idée de l'institution d'apprentissage de demain, un lieu où l'on partage des idées, s'implique activement, participe, observe, et s'enrichit des autres."
        ],
        imagesFolder: "/DAI 4",
        images: [
            "01_Entrée_vue de micro d_architecture",
            "02_center point where connect different volumes",
            "03_RDC_vue vers le grand panneau",
            "04_R+1_vue vers la salles de cours",
            "05_R+1_from one end to the other toward the tympan",
            "06_vue vers le tympan",
            "1200px-Genie_civil_1886_A6_T9_N13_P194_messageries_saint_lazare",
            "1280px-Genie_civil_1886_A6_T9_N13_P193_messageries_saint_lazare",
            "Quai8-bw",
        ]
    },
    "retail-invivo-synbio": {
        title: "RETAIL Invivo Synbio",
        type: "Interior",
        descriptions: [
            "Ceci est un projet de groupe. Nous avons créé ce concept store selon les besoins de notre client, InVivo Retail, qui est le premier groupe coopératif agricole en France. La recherche d'Invivo Retail consiste à trouver une idée de nouveau concept store responsable, simple, authentique et audacieux afin de rendre le groupe incontournable sur le marché comme jardinerie de demain."
        ]
    },
    "meuble-vitrine-tama": {
        title: "MEUBLE VITRINE Tama",
        type: "Design",
        descriptions: [
            "Tama vise à mettre en valeur la créativité des artisans céramistes dans l'art de la table. Avec des dimensions de L1300 x P390 x H1300 mm, ce meuble est fabriqué en chêne massif, avec un placage de chêne, et du papier de Procédés Chénel (600g) collé sur des profils métalliques. Ce meuble vitrine est conçu pour être à la fois esthétique et fonctionnel, offrant un espace élégant et raffiné pour exposer les œuvres des céramistes, tout en soulignant la beauté et la finesse de leur artisanat.",
            "Process de Fabrication\nLe meuble est d'abord assemblé en deux parties: une partie haute et une partie basse. Les pieds sont en forme de U en chêne massif. Les montants ont des trous réalisés par découpe numérique permettant d'y glisser les plateaux une fois les montants assemblés. Pour finir, il suffit de placer la partie haute sur les pieds ; le poids du meuble suffit à le stabiliser.\nRéalisé par ZAKA Design Meubles Agencements, échelle 1"
        ]
    },
    "desserte-vi-vant": {
        title: "DESSERTE de coworking Vi-Vant",
        type: "Design",
        descriptions: [
            "Après la COVID, de plus en plus de personnes ont la possibilité de travailler depuis chez elles. Les bureaux flexibles sont devenus essentiels pour accompagner cette transition, où les employés ne viennent au bureau que trois fois par semaine. Cependant, dans ces espaces ouverts, il n'est pas pratique de stocker ses affaires personnelles lorsqu'on n'a pas de bureau attitré. C'est pourquoi j'ai voulu concevoir une desserte mobile qui améliore l'expérience de travail pour ceux qui n'ont pas de bureau personnel, en leur offrant confort et organisation.",
            "J'ai donc proposé un concept : le \"bureau étendu.\" Cette desserte mobile permet de ranger votre lunch box, sac, manteau, dossiers de travail ou ordinateur portable, et de l'emporter facilement avec vous, où que vous travailliez dans le bureau.",
            "J'ai choisi des matériaux comme la porcelaine, le bois et le feutre parce que je souhaite que les gens puissent immédiatement associer ce qu'ils peuvent y ranger, en se basant sur les qualités naturelles de chaque matériau."
        ]
    },
    "chaise-gagette": {
        title: "CHAISE empilable Gagette",
        type: "Design",
        descriptions: [
            "Le but de ce projet est de créer une chaise qui pourrait être empilée tout en étant convenable pour son environnement, un musée parisien. J'ai choisi le Musée d'Orsay comme client. Je vise à créer une élégante et pratique chaise qui peut relier son design à l'architecture conçue par Gae Aulenti. On peut voir clairement les éléments architecturaux de l'art nouveau et du modernisme dans le design d'Aulenti. Par conséquent, je veux aussi que ma chaise montre ces caractéristiques à travers la forme, les couleurs et les matières."
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
    const { title, type, descriptions, imagesFolder, images } = projects[slug];
    const isDev = process.env.NODE_ENV === "development";
    const imagePrefix = isDev ? "/images" : "";
    return (
        <div className="min-h-screen w-full mx-auto bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-light text-gray-900 mb-2 tracking-wide">{title}</h1>
                <p className="text-xl text-gray-600 mb-8 font-light">{type}</p>

                <div className="prose prose-lg text-gray-600 font-light leading-relaxed mb-12">
                    {descriptions.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>

            {Array.isArray(images) && images.length > 0 && (
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 gap-4 w-full">
                        {images.map(image => (
                            <Image
                                key={image}
                                src={`${imagePrefix}${imagesFolder}/${image}.webp`}
                                alt={image}
                                width="1152"
                                height="600"

                                className="w-full object-cover rounded-lg shadow-md"
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}