const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './js/app.js',
  output: {
    filename: '../../assets/js/bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            // exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        },
        {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?url=false', 'sass-loader']
        })
        }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../../assets/css/style.css'),
    new BrowserSyncPlugin({
      host: 'test-shop.loc',
      port: 8080,
      proxy: 'test-shop.loc',
      open: false,
      files: ["./*.*"],
    })
    // new BrowserSyncPlugin({
    //   host: 'localhost',
    //   port: 777,
    //   server: {
    //     baseDir: ['../prod'],
    //     files: ["../prod/*.*", "../prod/index.html"],
    //     index: "index.html",
    //     serveStaticOptions: {
    //         extensions: ["html"]
    //     }
    //   }
    // })
  ]
};