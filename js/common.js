
$(function(){
/*#nav主导航*/
    var navTop = $('#nav').offset().top;
    $(window).scroll(function(e) {
        var scrTop = $(window).scrollTop();
        if( scrTop > navTop ){
        $('#nav').css({'position':'fixed',top:0,zIndex:88,});
        }else{
        $('#nav').css({'position':'static'})
        }
    });

/*#stiteNav*/
    // 登录
    $('#siteNav .navIn .inR ul li a.log').click(function(event) {
        $('#loginPop').stop().fadeToggle(300);
    });
    $('#loginPop .close').click(function(event) {
        $('#loginPop').fadeOut(300);
    });
    //个人中心,我的印制
    $('.pcBot').hide();
    $('.priBot').hide();
    function siteNavLiFade(parameter){
        $(parameter).hover(function() {
            $(this).addClass('cur');
            $(this).children('ol').stop().fadeIn(100);
        }, function() {
           $(this).removeClass('cur');
           $(this).children('ol').stop().fadeOut(100);
        });
    }
    siteNavLiFade('.myPc');
    siteNavLiFade('.myPrinted');

/*#onLine客服*/
    var bl = true;
    $('#online .in i.arr').click(function(){
       if(bl==true){
           $(this).removeClass('cur');
           $(this).parent().animate({right:'-150px'},250);
           bl=false;
       }else{
           $(this).addClass('cur');
           $(this).parent().animate({right:'0px'},250);
           bl=true;
       }
    });

});














