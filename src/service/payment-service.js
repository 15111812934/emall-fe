/*
* @Author: yangmei
* @Date:   2018-01-02 18:22:56
* @Last Modified by:   yangmei
* @Last Modified time: 2018-01-02 18:23:50
*/
var _em = require('util/em.js');

var _payment = {
    // 获取支付信息
    getPaymentInfo : function(orderNumber, resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/order/pay.do'),
            data    : {
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    },
    // 获取订单状态
    getPaymentStatus : function(orderNumber, resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/order/query_order_pay_status.do'),
            data    : {
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    }
};
module.exports = _payment;