/*
* @Author: yangmei
* @Date:   2017-12-26 16:47:13
* @Last Modified by:   yangmei
* @Last Modified time: 2017-12-29 21:05:47
*/
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var templateBanner  = require('./banner.string');
var _em             = require('util/em.js');
$(function() {
    // 渲染banner的html
    var bannerHtml  = _em.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);
    // 初始化banner
    var $slider     = $('.banner').unslider({
        dots: true
    });
    // 前一张和后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function(){
        var forward = $(this).hasClass('prev') ? 'prev' : 'next';
        $slider.data('unslider')[forward]();
    });
});

