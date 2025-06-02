/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'images.isbndb.com',
      'm.media-amazon.com',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
