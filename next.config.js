const withImages = require('next-images')

module.exports = withImages({
  reactStrictMode: true,
  esModule: true,
  images: {
    domains: ['www.petlove.com.br']
  }
})
