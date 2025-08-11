/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'weareimpo.ir',
      },
      {
        protocol: 'https',
        hostname: 'media.weareimpo.ir',
      },
      {
        protocol: 'https',
        hostname: 'stage.weareimpo.ir',
      },
      {
        protocol: 'https',
        hostname: 's3.ir-tbz-sh1.arvanstorage.ir',
      },
      {
        hostname: '195.88.208.143',
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
