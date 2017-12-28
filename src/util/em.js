/*
* @Author: yangmei
* @Date:   2017-12-27 19:21:21
* @Last Modified by:   yangmei
* @Last Modified time: 2017-12-27 22:19:01
*/
var Hogan=require('hogan.js');
var conf={
	serverHost:''
};
var _em={
	//网络请求
	request:function(param){
		var _this=this;
		$.ajax({
			type     : param.method || 'get',
			url      : param.url    || '',
			dataType : param.type   || 'json',
			data     : param.data   || '',//发送到服务器的数据
			// 请求成功后调用的回调函数
			success  :function(res){
				//请求成功
				if(0===res.status){
					typeof param.success==='function' && param.success(res.data,res.msg);
				}
				// 没有登录状态，需要强制登录
				else if(10===res.status){
					_this.doLogin();
				}else if(1===res.status){
					typeof param.error==='function' && param.error(res.msg);
				}
			},
			// 请求失败时被调用的函数，有三个参数
			error:  function(err){
					typeof param.error==='function' && param.error(err.textStatus);
            }
  		});
	},
	// 统一登录处理
	doLogin:function(){
		window.location.href='./user-login.html?redirect='+encodeURIComponent(window.location.href);
	},
	goHome:function(){
		window.location.href='./index.html';
	},
	//获取服务器地址
	getServerUrl:function(path){
		return conf.serverHost+path;
	},
	//获取url参数
	getUrlParam:function(name){
		var reg=new RegExp('(^|&)'+ name + '=([^&]*)(&|$)');
		var result=window.location.search.substr(1).match(reg);
		return result?decodeURIComponent(result[2]):null;
	},
	//hogan渲染html模板
	renderHtml:function(htmlTemplate,data){
		var template=Hogan.compile(htmlTemplate);
		var result=template.render(data);
		return result;
    },
    successTips:function(msg){
    	alert(msg||'操作成功了！');
    },
    errorTips:function(msg){
    	alert(msg||'好像哪里出错了！');
    },
    // 字段的验证，支持非空、手机、邮箱的判断
    validate:function(value,type){
    	//去除字符串两端的空白字符
    	var value=$.trim(value);
    	// 非空验证
    	if('require'===type){
    		return !!value;
    	}
    	//手机号验证
    	if('phone'===type){
    		return /^1\d{10}$/.test(value);
    	}
    	//邮箱验证
    	if('email'===type){
    		return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
        }
    }
};
module.exports=_em;