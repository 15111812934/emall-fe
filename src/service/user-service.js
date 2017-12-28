/*
* @Author: yangmei
* @Date:   2017-12-27 22:01:24
* @Last Modified by:   yangmei
* @Last Modified time: 2017-12-27 22:12:13
*/
var _em=require('util/em.js');
var _user={
	// 检查登录状态
	checkLogin:function(resolve,reject){
		_em.request({
			url    :_em.getServerUrl('/user/get_user_info.do'),
			method :'POST',
			success:resolve,
			error  :reject
		})
	},
	// 登出
	logout:function(resolve,reject){
		_em.request({
			url    :_em.getServerUrl('/user/logout.do'),
			method :'POST',
			success:resolve,
			error  :reject
		})
	}

};
module.exports=_user;