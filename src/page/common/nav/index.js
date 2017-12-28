/*
* @Author: yangmei
* @Date:   2017-12-27 21:29:14
* @Last Modified by:   yangmei
* @Last Modified time: 2017-12-27 22:27:12
*/
require('./index.css');
var _em   =require('util/em.js');
var _user =require('service/user-service.js')
var _cart =require('service/cart-service.js')

//导航
var nav={
	init:function(){
		this.bindEvent();
		this.loadUserInfo();
		this.loadCartCount();
		return this;
	},
	bindEvent:function(){
		// 登录点击事件
		$('.js-login').click(function(){
			_em.doLogin();
		});
		//注册点击事件
		$('.js-register').click(function(){
			window.location.href='./user-register.html';
		});
		//退出点击事件
		$('.js-logout').click(function(){
			_user.logout(function(res){
				window.location.reload();
			},function(errMsg){
				_em.errorTips(errMsg);
			});
		});
	},
	//检查用户信息
	loadUserInfo:function(){
		_user.checkLogin(function(res){
			$('.user.not-login').hide().siblings('.user.login')
			.show().find('.username').text(res.username);
		},function(errMsg){
			// _em.errorTips(errMsg);
		})
	},
	//检查购物车数量
	loadCartCount:function(){
		_cart.getCartCount(function(res){
			$('.nav .cart-count').text(res || 0);
		},function(errMsg){
			$('.nav .cart-count').text(0);
		})
	}
};
module.exports = nav.init();