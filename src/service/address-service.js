/*
* @Author: yangmei
* @Date:   2018-01-01 15:20:05
* @Last Modified by:   yangmei
* @Last Modified time: 2018-01-01 17:26:14
*/
var _em=require('util/em.js');
var _address = {
    // 获取地址列表
    getAddressList : function(resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/shipping/list.do'),
            data    : {
                pageSize : 50
            },
            success : resolve,
            error   : reject
        });
    },
    // 新建收件人
    save : function(addressInfo, resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/shipping/add.do'),
            data    : addressInfo,
            success : resolve,
            error   : reject
        });
    },
    // 更新收件人
    update : function(addressInfo, resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/shipping/update.do'),
            data    : addressInfo,
            success : resolve,
            error   : reject
        });
    },
    // 删除收件人
    deleteAddress : function(shippingId, resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/shipping/del.do'),
            data    : {
                shippingId : shippingId
            },
            success : resolve,
            error   : reject
        });
    },
    // 获取单条收件人信息
    getAddress : function(shippingId, resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/shipping/select.do'),
            data    : {
                shippingId : shippingId
            },
            success : resolve,
            error   : reject
        });
    },
};
module.exports = _address;