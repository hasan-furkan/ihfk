/** @type {import('next').NextConfig} */
const nextConfig = {
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
      },
      {
        protocol: 'https',
        hostname: '*.medium.com',
        pathname: '**',
      }
    ],
  },
}

module.exports = nextConfig 