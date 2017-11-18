const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const resolve = file => require('path').resolve(__dirname, file)

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.json', '.vue'],
    alias: {
      '~components': resolve('../src/components'),
      '~locale': resolve('../src/locale'),
      '~renderers': resolve('../src/renderers'),
      '~validators': resolve('../src/validators'),
    }
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true
    })
  ]
};
