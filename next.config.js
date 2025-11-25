/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/e-commerce',
  assetPrefix: '/e-commerce/',
  reactStrictMode: true,
  images: {
    domains: [
      'i.dummyjson.com',
      'cdn.dummyjson.com',
      'robohash.org',
      'graph.facebook.com',
      'lh3.googleusercontent.com',
    ],
  },
};

module.exports = nextConfig;
