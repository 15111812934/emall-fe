/*
* @Author: yangmei
* @Date:   2017-12-26 15:35:35
* @Last Modified by:   yangmei
* @Last Modified time: 2017-12-31 16:08:27
*/
// "use strict";
var   webpack           = require('webpack');
var   ExtractTextPlugin = require("extract-text-webpack-plugin");
var   HtmlWebpackPlugin = require('html-webpack-plugin');

//环境变量配置,dev(开发)/online（线上）
var   WEBPACK_ENV       =process.env.WEBPACK_ENV || 'dev';
//获取html-webpack-plugin参数的方法
var getHtmlConfig=function(name,title){
	return{
		template:'./src/view/'+name+'.html',
		filename:'view/'+name+'.html',
		title:title,
		inject:true,//script标签位于html文件的 body 底部
		hash:true,//给生成的 js 文件独特的 hash 值,是该次 webpack 编译的 hash 值
		chunks:['common',name]
	};
};
var config={
	  	//页面入口文件配置
	entry: {
		'common'            : ['./src/page/common/index.js'],
		'index'             : ['./src/page/index/index.js'],
		'user-login'        : ['./src/page/user-login/index.js'],
        'user-register'     : ['./src/page/user-register/index.js'],
        'user-pass-reset'   : ['./src/page/user-pass-reset/index.js'],
        'user-center'       : ['./src/page/user-center/index.js'],
        'user-center-update': ['./src/page/user-center-update/index.js'],
        'user-pass-update'  : ['./src/page/user-pass-update/index.js'],
        'list'              : ['./src/page/list/index.js'],
        'detail'            : ['./src/page/detail/index.js'],
        'result'            : ['./src/page/result/index.js'],
        'cart'            : ['./src/page/cart/index.js']
	},
		//入口文件输出配置
    output: {
        path        : __dirname + '/dist/',//存放文件（生成文件）
        // publicPath  :'/dist/',
        // 如果是开发环境，就取/dist/,否则，
        publicPath :'dev'===WEBPACK_ENV? '/dist/':'//s.happymmall.com/emall-fe/dist/',
        filename    : 'js/[name].js'
    },
    externals:{ //模块化方式引入jquery
        'jquery':'window.jQuery'
    },
    module: {
         //加载器配置
        loaders:[
            // {test: /\.css$/, loader:  ExtractTextPlugin.extract("style-loader","css-loader")},
            {test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [ 'css-loader' ] }) },
            {test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader:"url-loader?limit=100&name=resource/[name].[ext]"},
            {test: /\.string$/,
             loader:'html-loader',
             query : {
                    minimize : true,// 加载时，做最小化的压缩
                    removeAttributeQuotes : false //指定是否删除属性上的引号
                }
            }
        ]
    },
    //其它解决方案配置
    resolve : {
        alias : {
            node_modules    : __dirname + '/node_modules',
            util            : __dirname + '/src/util',
            page            : __dirname + '/src/page',
            service         : __dirname + '/src/service',
            image           : __dirname + '/src/image'
        }
    },
    //插件项
    plugins:[
    	 //独立通用模块到js/base.js
    	new webpack.optimize.CommonsChunkPlugin({
    		name:'common',
    		filename:'js/base.js'
        }),
         //把css单独打包到文件里
        new ExtractTextPlugin("css/[name].css"),
        //html模块的处理
        new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
        new HtmlWebpackPlugin(getHtmlConfig('user-login', '用户登录')),
        new HtmlWebpackPlugin(getHtmlConfig('user-register', '用户注册')),
        new HtmlWebpackPlugin(getHtmlConfig('user-pass-reset', '找回密码')),
        new HtmlWebpackPlugin(getHtmlConfig('user-center', '个人中心')),
        new HtmlWebpackPlugin(getHtmlConfig('user-center-update', '修改个人信息')),
        new HtmlWebpackPlugin(getHtmlConfig('user-pass-update', '修改密码')),
        new HtmlWebpackPlugin(getHtmlConfig('list', '商品列表')),
        new HtmlWebpackPlugin(getHtmlConfig('detail', '商品详情')),
        new HtmlWebpackPlugin(getHtmlConfig('result', '操作结果')),
        new HtmlWebpackPlugin(getHtmlConfig('cart', '购物车'))
    ]
};
if('dev' === WEBPACK_ENV){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8089/');
}
module.exports=config;