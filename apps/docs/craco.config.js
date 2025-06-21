const path = require('path');

const { getLoader, loaderByName } = require('@craco/craco');

const packages = [];
packages.push(path.join(__dirname, '../common')); //you can add as many as you need, but this gets slightly annoying

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName('babel-loader'),
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = include.concat(packages);
      }
      return webpackConfig;
    },
    // Add your custom webpack configuration here
    // For example, you can add custom loaders or plugin
    alias: {
      '@data': path.resolve(__dirname, './src/data'),
      '@data/*': path.resolve(__dirname, './src/data/*'),
      '@providers': path.resolve(__dirname, './src/providers'),
      '@localization': path.resolve(__dirname, './src/localization'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@uiStore': path.resolve(__dirname, './src/store/ui'),
      '@screens': path.resolve(__dirname, './src/screens'),
      '@screens/*': path.resolve(__dirname, './src/screens/*'),
      '@appStore': path.resolve(__dirname, './src/store/app'),
      '@services': path.resolve(__dirname, './src/services'),
      '@testUtils': path.resolve(__dirname, './src/testUtils'),
    },
  },
};
