const path=require("path"); const HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={entry:"./src/main.ts",output:{path:path.resolve(__dirname,"dist"),filename:"bundle.[contenthash].js",clean:true},resolve:{extensions:[".ts",".js",".vue"]},module:{rules:[
{test:/\.ts$/,loader:"ts-loader",exclude:/node_modules/},
{test:/\.css$/,use:["style-loader","css-loader"]},
{test:/\.vue$/,loader:"vue-loader"}
]},plugins:[new HtmlWebpackPlugin({template:"./public/index.html"})],devServer:{static:"./dist",port:55001}};
