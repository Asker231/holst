const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports  = {
    //Указываем в каком режиме делать сборку есть два режима dev и production 
    mode:"development",
    //далее указываем с какого файла начать сборку 
    entry:path.resolve(__dirname,'src','main.tsx'),
    //указываем в какой итоговый файл нужно все сбилдить 
    output:{
        filename:"[name].[contenthash].js",
        path:path.resolve(__dirname,'dist'),
        clean:true
    },
    //важный плагин для связки html и js 
    plugins:[new HtmlWebpackPlugin({template:path.resolve(__dirname,'public','index.html')})],

    //далее идет важная тема плагинов они у нас отвечают за ту или иную обработку файлов
    // будь то стили или типизация
    module:{
        rules:[
            {
                test:/\.css?$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.tsx?$/,
                use:["ts-loader"]
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)/,
                use:['file-loader']
                 
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
              },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    //ну это часть я думаю понятно что делает 
    devServer:{
        port:3003,
        open:true,
        hot:true
    },
    devtool:"source-map"

}