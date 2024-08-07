/** @type {import('next').NextConfig} */
const nextConfig = {
    images:
    {
        remotePatterns:
        [
            {
                protocol: 'https',
                hostname: 'amcwebsitestorage.blob.core.windows.net',
                port: '',
                pathname: '/biblicalstoriesimg/**',
            },
        ],
    }
}

module.exports = nextConfig
