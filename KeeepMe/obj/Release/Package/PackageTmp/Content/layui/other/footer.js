$(function () {
  autoLeftNav();
  changeIframeHeight();
  $(window).resize(function () {
    $(window).width();
    autoLeftNav();
    changeIframeHeight();
    //console.log($(window).width())
  })
});

// 侧边菜单开关
$(".tpl-header-switch-button").on("click", function () {
  var myswitch = $(".alone-side").hasClass("switch");
  //alert(myswitch);
  if (myswitch == true) {
    $(".alone-body").removeClass("switch");
    $(".alone-footer").removeClass("switch");
    $(".alone-side").removeClass("switch");
  } else {
    $(".alone-body").addClass("switch");
    $(".alone-footer").addClass("switch");
    $(".alone-side").addClass("switch");
  }
});

function autoLeftNav() {
  if ($(window).width() < 1024) {
    $(".alone-body").addClass("switch");
    $(".alone-footer").addClass("switch");
    $(".alone-side").addClass("switch");

  } else {
    $(".alone-body").removeClass("switch");
    $(".alone-footer").removeClass("switch");
    $(".alone-side").removeClass("switch");
  }
}

function changeIframeHeight() {
  var iframe = document.getElementsByClassName('tab-main');
  if (iframe.length >= 1) {
    for (var i = 0; i <= iframe.length; i++) {
      //console.log(iframe[i]);
      $(iframe[i]).css("height", document.documentElement.clientHeight - 149);
    }
  }
}
function aloneTips(obj) {
  var msg = $(obj).data('msg');
  layer.tips(msg, obj, {
    tips: [1, '#0FA6D8'] //还可配置颜色
  });
}