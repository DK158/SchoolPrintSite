var quotecontents = [

]
layui.config({
	//base: '../js/web/' //静态资源所在路径
}).extend({
	common: 'common', //公共模块
	superSlide: 'superSlide/superSlide'
}).use(['common', 'superSlide'], function() {
	var common = layui.common,
		$ = common.$;
	var index = {
		init: function() {
			index.bindEvent();
			index.initQuotecontent();
			index.initTitle();
			$(".txtScroll-top").slide({
				mainCell: ".bd ul",
				autoPage: true,
				effect: "top",
				autoPlay: true,
				delayTime: 500
			});
		},
		bindEvent: function() {
			//showmusic
			$('#music163').click(function() {
				if($(this).hasClass('show')) {
					$(this).css({
						left: '-320px'
					})
					$(this).removeClass('show')
				} else {
					$(this).css({
						left: '-5px'
					})
					$(this).addClass('show')
				}
			})
		},
		initQuotecontent: function() {
			$("#quotecontent").html(quotecontents[common.getNowstrDate()])
		},
		initTitle: function() {
			try {
				var classifyName = ($('#classifyName').html()).trim();
				var classifyList = $('.classify .content a');
				var labels = $('.flag .content a');
				$.each(classifyList, function(idx, obj) {
					if($(this).attr('href') == "/classify/" + classifyName) {
						$('#classifyName').html($(this).attr('title'))
					}
				});
				$.each(labels, function(idx, obj) {
					if($(this).attr('href') == "/label/" + classifyName) {
						$('#classifyName').html($(this).attr('title'))
					}
				});
			} catch(e) {}
		}
	};
	$(function() {
		index.init();
	});
});