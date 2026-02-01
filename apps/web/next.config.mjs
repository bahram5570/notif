// import { withSentryConfig } from '@sentry/nextjs';

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
        protocol: 'https',
        hostname: 'media.impo.app',
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

  output: 'standalone',
};

export default nextConfig;

// export default withSentryConfig(nextConfig, {
//   org: 'sentry',
//   project: 'web',
//   disableLogger: true,
//   silent: !process.env.CI,
//   tunnelRoute: '/monitoring',
//   widenClientFileUpload: true,
//   automaticVercelMonitors: true,
//   sentryUrl: 'https://sentry.weareimpo.ir/',
// });
