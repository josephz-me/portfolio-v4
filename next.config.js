/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.isbndb.com", "m.media-amazon.com"],
  },
};

module.exports = nextConfig;
