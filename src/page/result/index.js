/*
* @Author: yangmei
* @Date:   2017-12-28 14:48:09
* @Last Modified by:   yangmei
* @Last Modified time: 2017-12-28 15:23:11
*/
require('./index.css');
require('page/common/nav-simple/index.js');
var _em=require('util/em.js');
$(function(){
	var type=_em.getUrlParam('type') ||'default',
	    $element=$('.'+type+'-success');
	if(type==='payment'){
		var orderNumber=_em.getUrlParam('orderNumber'),
		    $orderNumber=$element.find('.order-number');
		$orderNumber.attr('href', $orderNumber.attr('href')+orderNumber);

	}
	// 显示对应的提示元素
	$element.show();
});
