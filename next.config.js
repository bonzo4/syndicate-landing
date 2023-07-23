/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.discordapp.com", "media.discordapp.net"]
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
