let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
      publicPath: '/',
      historyApiFallback: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'index.css',
        }),
      ],

    module: {
        rules: [
           /* {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },*/
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            "@babel/plugin-transform-react-jsx",
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            },{
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        hmr: process.env.NODE_ENV === 'development',
                      },
                    },
                    'css-loader',
                  ]
            },
            /*{
            test: /\.(ttf|png|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            include: SRC,
            use: [{
                loader: 'file-loader'
            }]
            }*/

        ]
    }
};

module.exports = conf;

