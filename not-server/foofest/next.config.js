/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'https://YOURAPP.heroku.com/logos/'
    ]
  }
}

module.exports = nextConfig
