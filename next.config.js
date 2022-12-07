/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ['www.iconbunny.com','images.unsplash.com','plus.unsplash.com','play-lh.googleusercontent.com'],
  },
}

module.exports = nextConfig
