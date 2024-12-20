/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
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
            {
                protocol: 'https',
                hostname: 'onedrive.live.com',
                port: '',
                pathname: '/bible project images/**',
            }
        ],
    }
}

module.exports = nextConfig
