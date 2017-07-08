// JavaScript Document
// 
$(function(){
   
    $('.parItem .item h3 a').click(function(event) {
        $(this).parent().parent().toggleClass('open').siblings('item').removeClass('open');
    });

});