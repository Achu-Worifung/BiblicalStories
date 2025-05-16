import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
};

export default nextConfig;
