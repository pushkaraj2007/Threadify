/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.twimg.com',
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com'
      }
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
 }
module.exports = nextConfig
