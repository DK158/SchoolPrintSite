; $(function () {
    'use strict';

    var sidebar = $('#sidebar'),
        mask = $('.mask'),
        sidebar_trigger = $('#sidebar_trigger');
    var backtop = $('.backto-top');
    //打开侧栏
    function showsidebar() {
        mask.fadeIn();
        sidebar.css('right', 0);
    }

    function closesidebar() {
        mask.fadeOut();
        sidebar.css('right', -sidebar.width());
    }
    //返回顶部
    function backto_top() {
        $('html,body').animate({
            scrollTop: 0
        }, 800)
    }
    sidebar_trigger.on('click', showsidebar);
    mask.on('click', closesidebar);
    backtop.on('click', backto_top);

    //在顶部时影藏按钮
    $(window).on('scroll',function(){
        if ($(window).scrollTop()>$(window).height())
            backtop.fadeIn();
        else
            backtop.fadeOut();
    })
    //一启动就出发滚动事件
    $(window).trigger('scroll');


})