const path = require('path');
const { resolve } = path;
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: 8081,
    inline: true,  //缺少该配置，会出现上面的错误
    historyApiFallback: true  //缺少该配置，会出现上面的错误
  },
  resolve: {
    //配置别名，在项目中可缩减引用路径
    alias: {
      '@': resolve('src'),
      'framework': resolve('src/framework'),
      'fragments': resolve('src/views/fragments'),
      'business': resolve('src/views/business'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: '/node_modules'
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.less$/,
        //include: paths.appSrc,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader",// compiles Less to CSS
          options: {
            sourceMap: true,
            lessOptions: {
              modifyVars: {
                'primary-color': '#1DA57A',
                'link-color': '#1DA57A',
                'border-radius-base': '2px',
              },
              javascriptEnabled: true
            }
          }
        }]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|ttf|woff2?|eot|swf|xml)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },],
      },
    ],
  },
  plugins: [
    new htmlPlugin({
      template: './index.html',
      filename: 'index.html'
    }),
  ]
}