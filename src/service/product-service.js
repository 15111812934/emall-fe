/*
* @Author: yangmei
* @Date:   2017-12-30 14:22:06
* @Last Modified by:   yangmei
* @Last Modified time: 2017-12-30 14:59:02
*/
var _em=require('util/em.js');
var _product={
	// 获取商品列表
    getProductList : function(listParam,resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/product/list.do'),
            data    : listParam,
            success : resolve,
            error   : reject
        });
    },
    // 获取商品详细信息
    getProductDetail : function(productId, resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/product/detail.do'),
            data    : {
                productId : productId
            },
            success : resolve,
            error   : reject
        });
    }
};
module.exports=_product;