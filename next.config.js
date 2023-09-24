/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.discordapp.com", "media.discordapp.net", "beehiiv-images-production.s3.amazonaws.com"]
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
