/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/e-commerce',
  reactStrictMode: true,
  images: {
    domains: [
      'i.dummyjson.com',
      'cdn.dummyjson.com',    // thêm dòng này
      'robohash.org',
      'graph.facebook.com',
      'lh3.googleusercontent.com',
    ],
  },
};

module.exports = nextConfig;
