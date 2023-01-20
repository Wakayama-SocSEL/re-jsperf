const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles')],
  },
  assetPrefix: '/'
}

module.exports = nextConfig
