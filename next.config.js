/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["github-automated-repos"],
  pageExtensions: ["page.tsx", "api.ts", "api.tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ],
  },
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "pt",
  },
};

module.exports = nextConfig;
