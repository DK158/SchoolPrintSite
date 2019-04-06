;$(function () {
    'use strict';

    
    //printpage页面
    var concludebutten = $('#conclude_butten'),
        showdiv = $('#showprintmoney')
    var submitpool = $('#submitpool');
    showdiv.css('display', 'inline-block');
    /*计算费用*/
    function concludemoney() {
       
    }

    //celan
    var sidebar = $('#sidebar'),
      mask = $('.mask'),
      sidebar_trigger = $('#sidebar_trigger');
    //打开侧栏
    function showsidebar() {
        mask.fadeIn();
        sidebar.css('right', 0);
    }

    function closesidebar() {
        mask.fadeOut();
        sidebar.css('right', -sidebar.width());
    }
    sidebar_trigger.on('click', showsidebar);
    mask.on('click', closesidebar);


    //二维码显示
    var payforzfb = $('#payforzfb'),
        payforwx = $('#payforwx'),
        wxzf = $('#wxzf'),
        zfbzf = $('#zfbzf');
    payforwx.on('click',function(){
        wxzf.css('width', '200px');
        zfbzf.css('width', '0');
    })
    payforzfb.on('click', function () {
        zfbzf.css('width', '200px');
        wxzf.css('width', '0');
    })

    //$('#Inputthefile').on('click', function () {
    //    document.getElementById("pgCount").value = SOAOfficeCtrl.Document.BuiltInDocumentProperties(14).Value;
    //})
})




