// JavaScript Document
// 
$(function(){
    function chgClass(parm){
        $(parm).click(function(event) {
           $(this).addClass('cur').siblings().removeClass('cur');
        });  
    }

    //筛选 规格
     chgClass('#photo .phoCom .screen .items ul li');
     
    //默认 :人气 价格 销量
    chgClass('#photo .phoCom .picCon .hd .hdL a');

    //经过每个商品
    $('#photo .phoCom .picCon .show ul li').hover(function() {
        $(this).addClass('cur').siblings().removeClass('cur');  
    },function(){
        $('#photo .phoCom .picCon .show ul li').removeClass('cur');  
    });


});