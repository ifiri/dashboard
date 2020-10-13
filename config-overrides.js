const { override, addWebpackAlias, addWebpackModuleRule, addWebpackPlugin } = require('customize-cra');
const path = require('path');
const webpack = require('webpack');

const resourcesPlugin = new webpack.LoaderOptionsPlugin({
  options: {
    resources: [
      './src/assets/scss/_variables.scss',
    ],
    // context: path.resolve(__dirname, './')
  }
});

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
  }),
  // addWebpackModuleRule({
  //   test: /\.scss$/, use: {
  //     loader: 'sass-resources-loader',
  //     options: {
  //       resources: [
  //         './src/assets/scss/_variables.scss',
  //       ],
  //       // context: path.resolve(__dirname, './')
  //     },
  //   },
  // }),
  addWebpackPlugin(resourcesPlugin),
);
