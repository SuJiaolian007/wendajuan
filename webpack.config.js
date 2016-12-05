var webpack=require("webpack");
module.exports={
    entry:{
       index: "./js/index.js",
        sex:"./js/sex.js",
        bingshi:"./js/bingshi.js",
        guomin:"./js/guomin.js",
        buchi:"./js/buchi.js",
        dati:"./js/dati.js",
        jg:"./js/jg.js"
    },
    output:{
        path:"dist/",
        filename:"js/[name].js",
        publicPath:'../dist/'
    },
    module:{
        loaders:[
            {test:/\.(css|scss)$/,loader:"style-loader!css-loader!sass-loader"},
            {test:/\.(png|jpg|gif)$/,loader:"file-loader?name=img/[name].[ext]"}
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
    ]/*,
    devServer:{
        contentBase:"./public",  //本地服务器所加载的页面所在的目录
        colors:true,   //终端中输出结果为彩色
        inline:true,    //实时刷新
        historyApiFallback:true, //不跳转
        port:8081		//设置默认监听端口,默认8080
    }*/

}