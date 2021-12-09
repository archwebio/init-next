/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ["en-US", "fr", "pt-BR"],
    defaultLocale: "fr",
    localeDetection: false,
  },
};

module.exports = nextConfig;
