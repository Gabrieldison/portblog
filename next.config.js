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
    locales: ["pt", "en"],
    defaultLocale: "pt",
  },
};

module.exports = nextConfig;
