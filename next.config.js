const withMarkdoc = require("@markdoc/next.js")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md"],
  experimental: {
    scrollRestoration: true,
  },
  // @docsearch/react imports @algolia/autocomplete-core as ESM, which only exposes ESM via "module"; bundle it instead.
  transpilePackages: ["@docsearch/react"],
  images: {
    loader: "akamai",
    path: "/",
  },
  output: "export",
}

module.exports = withMarkdoc()(nextConfig)
