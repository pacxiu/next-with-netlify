const path = require('path');

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    });

    return config;
  },
};
