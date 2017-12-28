/*
* @Author: yangmei
* @Date:   2017-12-27 16:26:20
* @Last Modified by:   yangmei
* @Last Modified time: 2017-12-28 14:36:06
*/
require('./index.css');
var _em           =require('util/em.js');
var templateIndex =require('./index.string');
// 侧边导航
var navSide = {
	option:{
		name:'',
		navList:[
			{name:'user-center',desc:'个人中心',href:'./user-center.html'},
			{name:'order-list',desc:'我的订单',href:'./order-list.html'},
			{name:'user-pass-update',desc:'修改密码',href:'./user-pass-update.html'},
			{name:'about',desc:'关于EMALL',href:'./about.html'}
        ]
	},
	init:function(option){
		//合并选项,将option都合并this.option中，并返回this.option
		$.extend(this.option,option);
		this.renderNav();
		// return this;
	},
	 // 渲染导航菜单
	renderNav:function(){
		//计算active数据
		for(var i=0,iLength=this.option.navList.length;i<iLength;i++){
			if(this.option.navList[i].name===this.option.name){
				this.option.navList[i].isActive=true;
			}
		}
		// 渲染list数据
		var navHtml=_em.renderHtml(templateIndex,{
			navList:this.option.navList
		});
		//把HTML放入容器
		$('.nav-side').html(navHtml);
		
	}
};
module.exports = navSide;
