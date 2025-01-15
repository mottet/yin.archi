import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';
import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

export default (phase: string, { defaultConfig }: NextConfig) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return withNextIntl(defaultConfig)
    }
    const productionConfig: NextConfig = {
        output: 'export',
        distDir: 'dist',
        images: {
            remotePatterns: [
                {
                    protocol: "https",
                    hostname: "yin-archi.imgix.net",
                },
            ],
            loader: 'custom',
            loaderFile: './imgix-loader.ts',
        },
    };
    return withNextIntl(productionConfig);
}
