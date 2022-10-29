/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.iconify.design', "avatars.githubusercontent.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = nextConfig
