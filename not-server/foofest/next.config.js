/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'http://localhost:8080/bands'
    ]
  }
}

module.exports = nextConfig
