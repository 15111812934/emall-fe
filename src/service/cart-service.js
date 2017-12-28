/*
* @Author: yangmei
* @Date:   2017-12-27 22:20:10
* @Last Modified by:   yangmei
* @Last Modified time: 2017-12-27 22:34:47
*/
var _em=require('util/em.js');
var _cart={
	// 获取购物车数量
	getCartCount:function(resolve,reject){
		_em.request({
			url    :_em.getServerUrl('/cart/get_cart_product_count.do'),
			method :'POST',
			success:resolve,
			error  :reject
		})
	}
};
module.exports=_cart;