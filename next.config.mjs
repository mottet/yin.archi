/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default nextConfig;
