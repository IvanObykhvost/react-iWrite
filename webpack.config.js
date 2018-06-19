const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var SRC_DIR = path.resolve(__dirname, "src");
var PUBLIC_DIR = path.resolve(__dirname, "public");

module.exports = {
    mode: "development",
    entry: {
        app: SRC_DIR + "index.js", // входная точка - исходный файл
        vendor: ['react', 'react-dom']
    },
    output: {
        path: PUBLIC_DIR,  // путь к каталогу выходных файлов - папка public
        filename: "bundle.js" // название создаваемого файла
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            _components: path.resolve(__dirname, 'src/components/'),
            src: SRC_DIR
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'app', 'index.html') }),
        new webpack.HotModuleReplacementPlugin()
    ],
    context: SRC_DIR
}