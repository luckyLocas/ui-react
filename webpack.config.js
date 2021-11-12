const path = require('path');
const { resolve } = path;
const htmlPlugin = require('html-webpack-plugin');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist'),
    chunkFilename: '[name].bundle.js?v=[hash]',
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
    extensions: ['.tsx', '.ts', '.js', '.html'],
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
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },],
        exclude: /node_modules/,
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
                'new-bg': '#1DA57A',
                'border-radius-base': '2px',
              },
              javascriptEnabled: true,
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
    new AntDesignThemePlugin({
      antDir: path.join(__dirname, './node_modules/antd'),//antd包位置
      stylesDir: path.join(__dirname, './src/styles/theme'),//指定皮肤文件夹
      varFile: path.join(__dirname, './src/styles/theme/variables.less'),//自己设置默认的主题色
      indexFileName: './index.html',
      mainLessFile: path.join(__dirname, './src/styles/theme/index.less'),
      outputFilePath: path.join(__dirname, './dist/color.less'),//输出到什么地方
      themeVariables: [//这里写要改变的主题变量
        '@primary-color',
        '@btn-primary-bg',
      ],
      generateOnce: false
    })
  ]
}