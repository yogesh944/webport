/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { dev, isServer }) => {
    // Use memory cache in development to avoid file system issues
    if (dev && !isServer) {
      config.cache = {
        type: 'memory'
      };
    }
    return config;
  },
};

module.exports = nextConfig;