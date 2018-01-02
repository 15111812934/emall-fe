/*
* @Author: yangmei
* @Date:   2018-01-01 15:03:52
* @Last Modified by:   yangmei
* @Last Modified time: 2018-01-02 17:02:33
*/
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide         = require('page/common/nav-side/index.js');
var Pagination      = require('util/pagination/index.js');
var _em             = require('util/em.js');
var _order          = require('service/order-service.js');
var templateIndex   = require('./index.string');
var page={
	data:{
		listParam:{
			pageSize :10,
			pageNum  :1
		}
	},
	init:function(){
		this.onLoad();
	},
	onLoad:function(){
		this.loadListOrder();
		navSide.init({
			name:'order-list'
		});
	},
	// 加载订单列表
	loadListOrder:function(){
		var _this           = this,
            orderListHtml   = '',
            $listCon        = $('.order-list-con');
        $listCon.html('<div class="loading"></div>');
        _order.getOrderList(this.data.listParam,function(res){
        	orderListHtml=_em.renderHtml(templateIndex,res);
        	$listCon.html(orderListHtml);
        	_this.loadPagination({
        		hasPreviousPage : res.hasPreviousPage,
                prePage         : res.prePage,
                hasNextPage     : res.hasNextPage,
                nextPage        : res.nextPage,
                pageNum         : res.pageNum,
                pages           : res.pages
        	});
        },function(errMsg){
        	$listCon.html('<p class="err-tip">加载订单失败，请刷新后重试</p>');
        });
	},
	loadPagination:function(pageInfo){
		var _this=this;
		    this.pagination?'':(this.pagination=new Pagination());
		    this.pagination.render($.extent({},pageInfo,{
		    	contanier:$('.pagination'),
		    	onSelectPage:function(pageNum){
		    		_this.data.listParam.pageNum=pageNum;
		    		_this.loadOrderList();
		    	}
		    }));
	}
};
$(function(){
	page.init();
});