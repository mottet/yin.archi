import { useTranslations } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import Image from "next/image"
import React from "react"

interface ProjectPageProps {
    imagesFolder?: string
    images?: {
        name: string
        width: number
        height: number
    }[]
}

const projects: Record<string, ProjectPageProps> = {
    "centre-culturel-ceramistes": {
        imagesFolder: "/DAI 5",
        images: [
            { name: "image 1_CShading_LightMix", width: 1750, height: 1000 },
            { name: "image 2_CShading_LightMix", width: 1750, height: 1000 },
            { name: "image 3_CShading_LightMix", width: 1750, height: 1000 },
            { name: "image 4_CShading_LightMix", width: 1750, height: 1000 },
            { name: "image 6 _with lighting _CShading_LightMix", width: 1750, height: 1313 },
            { name: "image SDT escalier_CShading_LightMix", width: 1000, height: 1000 },
            { name: "Salon de thé à étage_CShading_LightMix", width: 1000, height: 1000 },
            { name: "Terrain", width: 2000, height: 1000 },
            { name: "01 PLAN _atelier et residence RDC", width: 2000, height: 810 },
            { name: "02 PLAN _atelier et residence R+1", width: 2000, height: 430 },
            { name: "Résidence Atelier Coupe AA 50e", width: 2000, height: 621 },
            { name: "Résidence Coupe BB 50e_frist try", width: 1414, height: 1000 },
            { name: "Résidence Coupe CC 50e", width: 1414, height: 1000 },
            { name: "PLANS _salon de thé+COUPE AA_50e", width: 1414, height: 2000 },
            { name: "salon de thé COUPE BB_50e", width: 2000, height: 832 },
            { name: "CONCEPT entre les deux espace_rapprocher la nature_parte 1", width: 1600, height: 667 },
            { name: "CONCEPT entre les deux espace_rapprocher la nature_parte 2", width: 1600, height: 667 }
        ]
    },
    "fablab-info-elec": {
        imagesFolder: "/DAI 3",
        images: [
            { name: "Extérior_vue de bâtiment du pont", width: 1333, height: 1000 },
            { name: "Extérior_vue sous le passage courbe de l_auvent", width: 1333, height: 1000 },
            { name: "Extérior_vue sur la quai de la Marne", width: 1333, height: 1000 },
            { name: "Interior 1_co-working space", width: 1333, height: 1000 },
            { name: "Interior 2_espace d_entrée", width: 1333, height: 1000 },
            { name: "Interior 4_cube 2", width: 1333, height: 1000 },
            { name: "Interior 5_connect to the gym", width: 1333, height: 1000 },
            { name: "Interior 7_R+1 going through", width: 1333, height: 1000 },
            { name: "plan de situation_meter-A2_", width: 1379, height: 1000 },
            { name: "Rough_reception", width: 1389, height: 1000 },
            { name: "Rough_on the bridge", width: 1400, height: 1000 },
            { name: "Rough_under the bridge", width: 1187, height: 1000 },
            { name: "04_PLAN rdc-01", width: 1389, height: 1000 },
            { name: "05_PLAN R+1", width: 1389, height: 1000 },
            { name: "06_COUPE longitudinal-01", width: 1389, height: 1000 },
            { name: "07_COUPE transversale-01", width: 1389, height: 1000 },
            { name: "ZOOM plan_A1-R+1_50e_couleur", width: 1782, height: 1000 }
        ]
    },
    "ecole-archi-st-lazard": {
        imagesFolder: "/DAI 4",
        images: [
            { name: "01_Entrée_vue de micro d_architecture", width: 1556, height: 1000 },
            { name: "02_center point where connect different volumes", width: 1556, height: 1000 },
            { name: "03_RDC_vue vers le grand panneau", width: 1556, height: 1000 },
            { name: "04_R+1_vue vers la salles de cours", width: 1556, height: 1000 },
            { name: "05_R+1_from one end to the other toward the tympan", width: 1556, height: 1000 },
            { name: "06_vue vers le tympan", width: 1556, height: 1000 },
            { name: "01_PLAN rdc", width: 1556, height: 1000 },
            { name: "02_PLAN r+1", width: 1556, height: 1000 },
            { name: "03_COUPE longitudinal-01", width: 1556, height: 1000 },
            { name: "04_COUPE transversale", width: 1556, height: 1000 },
            { name: "05_CONCPET_diagram_colored", width: 1556, height: 1000 },
            { name: "1200px-Genie_civil_1886_A6_T9_N13_P194_messageries_saint_lazare", width: 1200, height: 604 },
            { name: "1280px-Genie_civil_1886_A6_T9_N13_P193_messageries_saint_lazare", width: 1280, height: 964 },
            { name: "Quai8-bw", width: 950, height: 631 }
        ]
    },
    "retail-invivo-synbio": {
        imagesFolder: "/Invivo",
        images: [
            { name: "01 Entrace", width: 2560, height: 1440 },
            { name: "02 left global view", width: 2560, height: 1440 },
            { name: "03 night parking", width: 2560, height: 1440 },
            { name: "04 en haut", width: 2560, height: 886 },
            { name: "05 night view de potager", width: 2560, height: 1440 },
            { name: "06 page10", width: 2560, height: 1747 }
        ]
    },
    "meuble-vitrine-tama": {
        imagesFolder: "/Tama",
        images: [
            { name: "01 Book 2024 p201", width: 2560, height: 1811 },
            { name: "02 Book 2024 p202", width: 2560, height: 1811 }
        ]
    },
    "desserte-vi-vant": {
        imagesFolder: "/Vi-Vant",
        images: [
            { name: "01 Book 2024 p203", width: 2560, height: 1811 },
            { name: "02 Book 2024 p204", width: 2560, height: 1811 }
        ]
    },
    "chaise-gagette": {
        imagesFolder: "/Gagette",
        images: [
            { name: "01 page23", width: 2560, height: 1811 },
            { name: "02 page24", width: 2560, height: 1811 }
        ]
    }
};

export function generateStaticParams() {
    return Object.keys(projects).map((projectName) => ({
        slug: projectName,
    }))
}

function ProjectContent({ slug, locale, imagesFolder, images, imagePrefix }: { 
    slug: string, 
    locale: string,
    imagesFolder?: string, 
    images?: { name: string, width: number, height: number }[],
    imagePrefix: string
}) {
    setRequestLocale(locale);
    const t = useTranslations('projects');

    return (
        <div className="min-h-screen w-full mx-auto bg-gray-50 pt-16 pb-12 md:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-playfair text-4xl font-light text-gray-900 mb-2 tracking-wide">{t(`${slug}.name`)}</h1>
                <p className="text-xl text-gray-600 mb-8 font-light">{t(`${slug}.type`)}</p>

                <div className="prose prose-lg text-gray-600 font-light leading-relaxed mb-12">
                    {t.rich(`${slug}.descriptions`, {
                        p: (chunks) => <p>{chunks}</p>,
                        h2: (chunks) => <h2>{chunks}</h2>,
                        br: () => <br />
                    })}
                </div>
            </div>

            {Array.isArray(images) && images.length > 0 && (
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 gap-4 w-full">
                        {images.map(image => (
                            <Image
                                key={image.name}
                                src={`${imagePrefix}${imagesFolder}/${image.name}.webp`}
                                alt={image.name}
                                width={image.width}
                                height={image.height}
                                sizes="(max-width: 1152px) 100vw, 1152px"
                                className="w-full object-cover rounded-lg shadow-md"
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
    const { slug, locale } = await params;
    const { imagesFolder, images } = projects[slug];
    const isDev = process.env.NODE_ENV === "development";
    const imagePrefix = isDev ? "/images" : "";

    return (
        <ProjectContent 
            slug={slug}
            locale={locale}
            imagesFolder={imagesFolder}
            images={images}
            imagePrefix={imagePrefix}
        />
    )
}