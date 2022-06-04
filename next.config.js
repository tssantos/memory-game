const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "/memory-game/" : "",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};

module.exports = nextConfig
