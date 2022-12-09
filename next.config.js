const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
      "medusa-public-images.s3.eu-west-1.amazonaws.com",
      "http://127.0.0.1:9001",
      "localhost"
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
