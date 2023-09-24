/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_URL_STRAPI: process.env.API_URL_STRAPI,
  },
};

module.exports = nextConfig;
