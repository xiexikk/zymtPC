// JavaScript Document
// 
$(function(){

    function chgClass(parm){
        $(parm).click(function(event) {
           $(this).addClass('cur').siblings().removeClass('cur');
        });  
    }

/*confirmOrder.htm*/
    //选择已有地址
    chgClass('#orderCom .comIn .addInf .ccd .addList ul li');

    //选择快递方式
     $('#orderCom .comIn .courier .item i').click(function(event) {
        $(this).parent().addClass('cur').siblings().removeClass('cur');
     });

    // 增加和减少数量
    var maxNum = 99;
    function redAdd(red,add){
        $(red).click(function(event) {
            var num = parseInt($(this).siblings().children('input').val());
            num--;
            if(num < 0){
                num = 0;   
            } 
            $(this).siblings().children('input').val(num);    
        });
        $(add).click(function(event) {
            var num = parseInt($(this).siblings().children('input').val());
            num++;
            if(num > maxNum){
                num = maxNum;   
            } 
            $(this).siblings().children('input').val(num);  
        });
     }
     redAdd('.reduceBtn','.addBtn');

/*payOrder.html*/
    //选择支付方式
    chgClass('.payType .payList .item');

/*proDet.html*/
    function tabSwitch(hd,bd){
        $(hd).click(function(event) {
                  $(this).addClass('cur').siblings().removeClass('cur');
                  var index = $(this).index();
                 $(bd).eq(index).show().siblings().hide();
            });
        }
    tabSwitch('.tbHd ol li','.tbCen .item');

})