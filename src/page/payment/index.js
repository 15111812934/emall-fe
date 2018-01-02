/*
* @Author: yangmei
* @Date:   2018-01-02 18:13:49
* @Last Modified by:   yangmei
* @Last Modified time: 2018-01-02 18:44:55
*/
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var _em             = require('util/em.js');
var _payment        = require('service/payment-service.js');
var templateIndex   = require('./index.string');
var page={
	data:{
		orderNumber:_em.getUrlParam('orderNumber')
	},
	init:function(){
		this.onLoad();
	},
	onLoad:function(){
		//加载支付信息
		this.loadPaymentInfo();
	},
	loadPaymentInfo:function(){
		var _this=this,
		    paymentHtml='',
		    $pageWrap=$('.page-wrap');
		    $pageWrap.html('<div class="loading"></div>');
		_payment.getPaymentInfo(this.data.orderNumber,function(res){
			paymentHtml=_em.renderHtml(templateIndex,res);
			$pageWrap.html(paymentHtml);
			_this.listenOrderStatus();
		},function(errMsg){
			$pageWrap.html('<div class="err-tip">'+errMsg+'</div>');
		});
	},
	listenOrderStatus:function(){
		var _this=this;
		this.paymentTimer=window.setInterval(function(){
			_payment.getPaymentStatus(_this.data.orderNumber,function(res){
				if(res===true){
					window.location.href=
						'./result.html?type=payment&orderNumber='+_this.data.orderNumber;
				}
			},function(errMsg){
				_em.errorTips(errMsg);
			});
		},5e3);
	}
};
$(function(){
	page.init();
});