/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MEDIUM_RSS_URL: process.env.MEDIUM_RSS_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-images-1.medium.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        pathname: '**',
      }
    ],
  },
}

module.exports = nextConfig 