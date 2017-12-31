/*
* @Author: yangmei
* @Date:   2017-12-27 22:20:10
* @Last Modified by:   yangmei
* @Last Modified time: 2017-12-31 15:49:44
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
            data    : productInfo,
            success : resolve,
            error   : reject
        });
    },
     // 选中某个商品
    selectProduct : function(productId,resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/cart/select.do'),
             data    : {
                productId : productId
            },
            success : resolve,
            error   : reject
        });
    },
     // 取消选中某个商品
    unselectProduct : function(productId,resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/cart/un_select.do'),
             data    : {
                productId : productId
            },
            success : resolve,
            error   : reject
        });
    },
       // 选中全部商品
    selectAllProduct : function(resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/cart/select_all.do'),
            success : resolve,
            error   : reject
        });
    },
       // 取消选中全部商品
    unselectAllProduct : function(resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/cart/un_select_all.do'),
            success : resolve,
            error   : reject
        });
    },
     // 更新购物车商品数量
    updateProduct : function(productInfo, resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/cart/update.do'),
            data    : productInfo,
            success : resolve,
            error   : reject
        });
    },
    // 删除指定商品
    deleteProduct : function(productIds, resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/cart/delete_product.do'),
            data    : {
                productIds : productIds
            },
            success : resolve,
            error   : reject
        });
    },
    // 获取购物车列表
    getCartList : function(resolve, reject){
        _em.request({
            url     : _em.getServerUrl('/cart/list.do'),
            success : resolve,
            error   : reject
        });
    }
};
module.exports=_cart;