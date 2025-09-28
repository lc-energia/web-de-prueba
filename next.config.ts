import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com;
  child-src *.youtube.com *.google.com *.twitter.com;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src *.googleapis.com *.gstatic.com;
`;

const nextConfig: NextConfig = {
  i18n: {
    locales: ['it'],
    defaultLocale: 'it',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
