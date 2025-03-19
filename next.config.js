module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.worker\.js$/,
      loader: "worker-loader",
      options: { inline: "fallback" }, // also works
      //   options: {
      //     name: "static/[hash].worker.js",
      //     publicPath: "/_next/",
      //   },
    });
    return config;
  },
};
