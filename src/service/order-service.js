/*
* @Author: yangmei
* @Date:   2018-01-01 15:19:51
* @Last Modified by:   yangmei
* @Last Modified time: 2018-01-01 17:25:35
*/
var _em=require('util/em.js');
var _order = {
    // 获取商品列表
    getProductList : function(resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/order/get_order_cart_product.do'),
            success : resolve,
            error   : reject
        });
    },
    // 提交订单
    createOrder : function(orderInfo, resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/order/create.do'),
            data    : orderInfo,
            success : resolve,
            error   : reject
        });
    },
    // 获取订单列表
    getOrderList : function(listParam, resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/order/list.do'),
            data    : listParam,
            success : resolve,
            error   : reject
        });
    },
    // 获取订单详情
    getOrderDetail : function(orderNumber, resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/order/detail.do'),
            data    : {
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    },
    // 取消订单
    cancelOrder : function(orderNumber, resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/order/cancel.do'),
            data    : {
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    }
};
module.exports = _order;