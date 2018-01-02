/*
* @Author: yangmei
* @Date:   2018-01-01 15:03:32
* @Last Modified by:   yangmei
* @Last Modified time: 2018-01-02 17:52:10
*/
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide         = require('page/common/nav-side/index.js');
var _em            = require('util/em.js');
var _order          = require('service/order-service.js');
var templateIndex   = require('./index.string');
var page={
	data: {
        orderNumber : _em.getUrlParam('orderNumber')
    },
	init:function(){
		this.onLoad();
        this.bindEvent();
	},
	onLoad:function(){
		// 初始化左侧菜单
		navSide.init({
			name:'order-list'
		});
		this.loadDetail();
	},
	bindEvent:function(){
		var _this=this;
		$(document).on('click', '.order-cancel', function(){
			if(window.confirm('确定要取消该订单吗？')){
				_order.cancelOrder(_this.data.orderNumber, function(res){
                    _em.successTips('该订单取消成功');
                    _this.loadDetail();
                }, function(errMsg){
                    _em.errorTips(errMsg);
                });
			}
		});
	},
	// 加载商品清单
	loadDetail:function(){
		var _this           = this,
            orderDetailHtml = '',
            $content        = $('.content');
         $content.html('<div class="loading"></div>');
         _order.getOrderDetail(this.data.orderNumber, function(res){
            _this.dataFilter(res);
            // 渲染html
            orderDetailHtml = _em.renderHtml(templateIndex, res);
            $content.html(orderDetailHtml);
        }, function(errMsg){
            $content.html('<p class="err-tip">' + errMsg + '</p>');
        });
	},
	 // 数据的适配
    dataFilter : function(data){
        data.needPay        = data.status == 10;
        data.isCancelable   = data.status == 10;
    }
};
$(function(){
	page.init();
});