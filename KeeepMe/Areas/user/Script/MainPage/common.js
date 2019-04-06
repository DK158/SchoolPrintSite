layui.define(['element', 'layer'], function(exports) {
	var $ = layui.$,
		layer = layui.layer;
	var common = {
		IP: "http://127.0.0.1",
		p: 0,
		t: 0,
		layer: layer,
		$: $,
		init: function() {
			//ajax默认设置
			common.ajaxSteup();
			//绑定事件
			common.bindEvent();
			//用户信息
			common.initUserData();
			//window上下滑动
			common.windowScroll();
			//顶部的导航栏
			common.navs();
			//屏幕点击出现文字
			common.txtshow();
		},
		bindEvent: function() {
			//QQ登录
			//onclick="return parent.location.href='/api/blog-web/oauth2/qqLogin'"
			$("a[action='qq_login']").on("click", function() {
				layer.open({
					type: 2,
					content: ['http://www.baidu.com','no']
				});
			});
			//退出登录
			$('#login_out').click(function() {
				common.login_out();
			});
			//绑定邮箱
			$('#bind-account').click(function() {
				layer.msg("亲，适配中...");
			});
			//返回顶部
			$('.layui-fixbar .layui-fixbar-top').click(function() {
				$("html,body").animate({
					scrollTop: 0
				}, 300, function() {
					$(".layui-fixbar").hide()
				});
			});
			//tips提示
			$('#grid .content span a').hover(function() {
				layer.tips($(this).attr('atitle'), this, {
					tips: [1, '#F75733'],
					time: 100000
				});
			}, function() {
				layer.closeAll('tips')
			});
			//ajax出现错误
			$(document).ajaxError(function() {
				setTimeout(function() {
					layer.closeAll('loading');
				}, 2000);
				$(".layui-submit").attr('disabled', false);
			});
		},
		windowScroll: function() {
			$(window).scroll(function() {
				common.utilshowhide();
				common.p = $(document).scrollTop();
				if(common.t < common.p) {
					console.log("下滑")
					$('.myheader').addClass('slideUp')
				} else if(common.t > common.p) {
					console.log("上滑")
					$('.myheader').removeClass('slideUp')
				}
				common.t = common.p;
			});
			$(window).scroll();
		},
		utilshowhide: function() {
			if($(document).scrollTop() > 260) {
				$('.layui-fixbar').removeClass("layui-hide").addClass("layui-show");
				$('.myheader').removeClass('is_top_true');
				$('.myheader').addClass('is_top_false');
			} else {
				$('.layui-fixbar').removeClass("layui-show").addClass("layui-hide");
				$('.myheader').removeClass('is_top_false');
				$('.myheader').addClass('is_top_true');
			}
		},
		navs: function() {
			common.windowResize();
			$('#navs').click(function() {
				var that = this;
				var nav = $(that).parent('.layui-nav').parent('.right').siblings('.left');
				if($(that).hasClass('show')) {
					nav.slideUp(300, function() {
						$(that).removeClass('show');
					})
				} else {
					nav.slideDown(300, function() {
						$(that).addClass('show');
					})
				}
			});
		},
		windowResize: function() {
			//防止小屏关闭nav后大屏无法显示
			$(window).resize(function() {
				if($(window).width() >= 751) {
					$('.left').css({
						display: 'block'
					})
				} else {
					$('.left').css({
						display: 'none'
					})
				}
			});
			$(window).resize();
		},
		txtshow: function() {
			var a_idx = 0,
				b_idx = 0;
			c_idx = 0;
			$(document).ready(function($) {
				$("body").click(function(e) {
					var a = new Array("美丽", "善良", "大方", "优雅", "文静", "脱俗", "纯洁", "开朗", "贤淑", "活泼", "率直", "可爱", "天真", "端庄", "温柔", "贤惠", "多才", "俊俏", "温柔", "体贴", "撒娇", "任性", "独立", "爱美", "温柔", "善良", "贤惠", "善良", "纯洁", "活泼", "开朗", "天真", "率直", "含羞", "腼腆", "善于交际", "另类", "有耐力", "有见识", "有仪态", "天生丽质", "慧质兰心", "秀外慧中", "暗香盈袖", "闭月羞花", "沉鱼落雁", "倾国倾城", "温婉娴淑", "千娇百媚", "仪态万千", "美艳绝世", "国色天香", "花容月貌", "明目皓齿", "淡扫峨眉", "清艳脱俗", "香肌玉肤", "清丽绝俗", "仪态万端", "婉风流转", "美撼凡尘", "聘婷秀雅"),
						b = new Array("#09ebfc", "#ff6651", "#ffb351", "#51ff65", "#5197ff", "#a551ff", "#ff51f7", "#ff518e", "#ff5163", "#efff51");
					var $i = $("<span class='layui-unselect'><span/>").text(a[a_idx]);
					a_idx = (a_idx + 1) % a.length;
					b_idx = (b_idx + 1) % b.length;
					var x = e.pageX,
						y = e.pageY;
					$i.css({
						"z-index": 999999,
						"top": y - 20,
						"left": x,
						"position": "absolute",
						"font-weight": "bold",
						"font-size": "14px",
						"color": b[b_idx]
					});
					$("body").append($i);
					$i.animate({
						"top": y - 150,
						"opacity": 0
					}, 1500, "linear", function() {
						$i.remove();
					});
				});
			});
			var _hmt = _hmt || [];
		},
		ajaxSteup: function() {
			$.ajaxSetup({
				cache: false,
				timeout: 10000,
				type: "POST",
				contentType: "application/json; charset=utf-8",
				dataType: 'json',
				headers: {
					"token": localStorage.getItem("token")
				},
				beforeSend: function(xhr) {
					layer.load();
				},
				error: function(xhr, textStatus, errorThrown) {
					//按钮禁用
					$(".layui-submit").attr('disabled', false);
					var msg = "链接超时";
					if(xhr.responseText == null || xhr.responseText == "") {
						msg = "链接超时";
					} else {
						var response = JSON.parse(xhr.responseText);
						msg = response.message;
						if(response.code == 401) {
							localStorage.removeItem("token");
						}
					}
					layer.msg(msg, {
						icon: 2,
						time: 2000
					});
				}
			});
		},
		ajaxForm: function(url, data, successFun, errorFun, async, contentType) {
			common.ajaxJson(url, data, successFun, errorFun, async, 'application/x-www-form-urlencoded');
		},
		ajaxJson: function(url, data, successFun, errorFun, async, contentType) {
			if(async == undefined || async == null) {
				async = true;
			}
			if(contentType == undefined || contentType == null || contentType.indexOf('application/json') == 0) {
				contentType = 'application/json;charset=utf-8';
				data = JSON.stringify(data);
			}
			url = common.IP + url;
			$.ajax({
				url: url,
				async: async,
				contentType: contentType,
				data: data,
				success: function(result, status, xhr) {
					if(successFun != undefined && $.isFunction(successFun)) {
						successFun(result, status, xhr);
					}
				},
				error: function(xhr, textStatus, errorThrown) {
					//按钮禁用
					$(".layui-submit").attr('disabled', false);
					var msg = "链接超时";
					if(xhr.responseText == null || xhr.responseText == "") {
						msg = "链接超时";
					} else {
						var response = JSON.parse(xhr.responseText);
						msg = response.message;
						if(response.code == 401) {
							localStorage.removeItem("token");
						}
					}
					layer.msg(msg, {
						icon: 2,
						time: 2000
					});
					if(errorFun != undefined && $.isFunction(errorFun)) {
						errorFun(xhr, textStatus, errorThrown);
					}
				}
			});
		},
		initUserData: function() {
			var nickname = decodeURI(common.getCookie("nickname"));
			var figureurlQq1 = common.getCookie("figureurlQq1")
			if(nickname && nickname.length > 0) {
				$('#figureurlQq1').prop('src', figureurlQq1)
				$('#nickname').html(nickname)
				$('#login_no').hide()
				$('#login_yes').show()
			} else {
				$('#login_no').show()
				$('#login_yes').hide()
			}
		},
		login_out: function() {
			//询问框
			var index = layer.confirm('<p  style="line-height:18px"><b class="layui-icon layui-icon-face-smile" style="font-size: 20px; color: red;"></b><span style="font-size: 18px;"> 帅气美丽的你？</span></p>', {
				btn: ['确定退出', '再想想'],
				title: "别退呀"
			}, function() {
				//确定退出
				$.ajax({
					url: "/api/blog-web/oauth2/qqLogOut",
					type: 'POST',
					contentType: "application/x-www-form-urlencoded",
					success: function(result, status, xhr) {
						layer.closeAll();
						clearCookie("accessToken");
						clearCookie("nickname");
						clearCookie("figureurlQq1");
						layer.msg("退出成功", {
							icon: 1,
							time: 2000
						});
						initUserData()
					}
				});
			});
		},
		checkLogin: function() {
			//true:登录，false:未登录
			if(!common.getCookie("accessToken") || common.getCookie("accessToken").length < 1) {
				return false;
			} else {
				return true;
			}
		},
		getCookie: function(cname) {
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for(var i = 0; i < ca.length; i++) {
				var c = ca[i].trim();
				if(c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		},
		setCookie: function(cname, cvalue, exdays) {
			var d = new Date();
			d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
			var expires = "expires=" + d.toGMTString();
			document.cookie = cname + "=" + cvalue + "; " + expires;
		},
		clearCookie: function(name) {
			common.setCookie(name, "", -1);
		},
		diaplayTime: function(data) {
			//计算时间为刚刚、几分钟前、几小时前、几天前
			var str = data;
			//将字符串转换成时间格式
			var timePublish = new Date(str);
			var timeNow = new Date();
			var minute = 1000 * 60;
			var hour = minute * 60;
			var day = hour * 24;
			var month = day * 30;
			var diffValue = timeNow - timePublish;
			var diffMonth = diffValue / month;
			var diffWeek = diffValue / (7 * day);
			var diffDay = diffValue / day;
			var diffHour = diffValue / hour;
			var diffMinute = diffValue / minute;

			if(diffValue < 0) {
				console.log("错误时间");
			} else if(diffMonth > 3) {
				result = timePublish.getFullYear() + "-";
				result += timePublish.getMonth() + 1 + "-";
				result += timePublish.getDate();
			} else if(diffMonth > 1) {
				result = parseInt(diffMonth) + "月前";
			} else if(diffWeek > 1) {
				result = parseInt(diffWeek) + "周前";
			} else if(diffDay > 1) {
				result = parseInt(diffDay) + "天前";
			} else if(diffHour > 1) {
				result = parseInt(diffHour) + "小时前";
			} else if(diffMinute > 1) {
				result = parseInt(diffMinute) + "分钟前";
			} else {
				result = "刚刚发表";
			}
			return result;
		},
		getNowstrDate: function() {
			var date = new Date();
			var strDate = date.getDate();
			return strDate;
		}
	};
	$(function() {
		common.init();
	});
	exports('common', common);
});