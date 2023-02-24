/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.dummyjson.com',
      'robohash.org',
      'graph.facebook.com',
      'lh3.googleusercontent.com',
    ],
  },
};

module.exports = nextConfig;
