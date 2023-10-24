/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '*giphy.com'
      }
    ]
  }
}

module.exports = nextConfig
