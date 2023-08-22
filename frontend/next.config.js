/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: 'anonymous',
  images: { domains: ['liquipedia.net'], formats: ['image/avif', 'image/webp'], },
}

module.exports = nextConfig
