// @ts-check

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// eslint-disable-next-line import/no-anonymous-default-export
module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return defaultConfig
    }

    /** @type {import('next').NextConfig} */
    const productionConfig = {
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
    return productionConfig;
}
