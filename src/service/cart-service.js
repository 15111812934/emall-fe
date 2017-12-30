/*
* @Author: yangmei
* @Date:   2017-12-27 22:20:10
* @Last Modified by:   yangmei
* @Last Modified time: 2017-12-30 21:39:05
*/
var _em=require('util/em.js');
var _cart={
	// 获取购物车数量
    getCartCount : function(resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/cart/get_cart_product_count.do'),
            success : resolve,
            error   : reject
        });
    },
    // 获取购物车数量
    addToCart : function(productInfo,resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/cart/add.do'),
            data    :productInfo,
            success : resolve,
            error   : reject
        });
    }
};
module.exports=_cart;