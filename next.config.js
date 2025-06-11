/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'images.isbndb.com',
      'm.media-amazon.com',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
    ],
  },
  webpack: (config, { dev, isServer }) => {
    // Optimize hot reloading
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
