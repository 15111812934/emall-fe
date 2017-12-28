/*
* @Author: yangmei
* @Date:   2017-12-27 22:28:36
* @Last Modified by:   yangmei
* @Last Modified time: 2017-12-27 23:07:16
*/
require('./index.css');
var _em   =require('util/em.js');
// 通用页面头部
var header = {
	init:function(){
		this.onLoad();
		this.bindEvent();
	},
	onLoad:function(){
		var keyword=_em.getUrlParam('keyword');
		// 如果keyword存在。则回填搜索框
		if(keyword){
			$('.search-input').val(keyword);
		}
	},
	bindEvent:function(){
		var _this=this;
		$('.search-bth').click(function(){
			_this.searchSubmit();
		});
		$('.search-input').keyup(function(e){
			if(e.keyCode===13){
				_this.searchSubmit();
			}
		})
	},
	searchSubmit:function(){
		var keyword=$.trim($('.search-input').val());
		if(keyword){
			window.location.href='./list.html?keyword'+keyword;
		}
		// 如果keyword不存在，直接返回首页
		else{
			_em.goHome();
		}
	}
};
header.init();