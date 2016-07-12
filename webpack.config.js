const {resolve} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = env => {
  const addPlugin = (add, plugin) => add ? plugin : undefined
  const ifProd = plugin => addPlugin(env.prod, plugin)
  const ifTest = plugin => addPlugin(env.test, plugin)

  const removeEmpty = array => array.filter(i => !!i)

  return {
    entry: {
      app: './main.js',
      vendor: ['lodash', 'jquery']
    },
    output: {
      filename: 'bundle.[name].[chunkhash].js',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.prod
    },
    context: resolve(__dirname, 'app'),
    devtool: env.prod ? 'source-map' : 'eval',
    bail: env.prod,
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel!eslint',
        exclude: /node_modules/
      }, {
        test: /\.(less|css)$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'less'
        ]
      }
      ]
    },
    plugins: removeEmpty([
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      ifProd(new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      })),
      ifTest(new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('test')
        }
      }))
    ]),
    externals: {
      cheerio: 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    }
  }
}