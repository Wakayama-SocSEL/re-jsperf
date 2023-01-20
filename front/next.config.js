const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles')],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://wakayama-socsel.github.io/re-jsperf/' : '/'
}

module.exports = nextConfig
