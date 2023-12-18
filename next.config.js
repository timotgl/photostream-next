/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // Configure Next.js Image Optimization API to access source images. Example:
        // https://timotaglieber.de/photos/albums/highlights/3840/south-tufa.jpg
        protocol: 'https',
        hostname: 'timotaglieber.de',
        port: '',
        pathname: '/photos/albums/**',
      },
    ],
  },
}

module.exports = nextConfig
