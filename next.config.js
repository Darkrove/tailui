/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ['bit.ly','images.unsplash.com','plus.unsplash.com'],
  },
}

module.exports = nextConfig
