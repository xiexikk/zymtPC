// JavaScript Document

// banner.js
$(function(){
//海报
    var banLiNum = $('.banner ul li').length;
    for(var i =0;i<banLiNum;i++){
        $('.banner ol').append('<li></li>');
    }
    $('.banner ol li:first').addClass('current');
    var num = 0;
    var timer = null;
    var speed = 3000;
    $('.banner ul li:first').show();
    $('.banner ol li').mouseenter(function(){
        $(this).addClass('current').siblings().removeClass();    
        var index  =$(this).index(); 
        $('.banner ul li').eq(num).stop().fadeOut(500);
        $('.banner ul li').eq(index).stop().fadeIn(500);
        num = index;
    })
    //自动滚动
    function timeFn(){
        $('.banner ul li').eq(num).stop().fadeOut(500);
        num++
        if( num >banLiNum-1 ){
            num = 0;
        }
        $('.banner ol li').eq(num).addClass('current').siblings().removeClass();
        $('.banner ul li').eq(num).stop().fadeIn(500);  
    }
    timer = setInterval( timeFn , speed)
     $('.banner').hover(function(){
        clearInterval(timer);
    },function(){
        clearInterval(timer);
        timer = setInterval( timeFn , speed );
    });


//鼠标经过商品
    function hoverClass(parm){
        $(parm).hover(function(event) {
           $(this).addClass('cur').siblings().removeClass('cur');
        },function(){
            $(parm).removeClass('cur');
        }) 
    }
    hoverClass('.proShow .proList ul li');



})


