
const path = require("path")
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
    entry: "./src/main.js",
    output: {  //出力先（デフォルトと同じ設定）
    filename: './src/main.js',
    path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',  //モード
    plugins: [
        new GoogleFontsPlugin({
            fonts: [
                {family: "Source Sans Pro"},
                {family: "Roboto", variants: [ "400", "700italic" ]},
                {family: "Kosugi Maru"},
            ],
            /* ...options */
        })
    ]
}
