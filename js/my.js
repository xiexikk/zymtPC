// JavaScript Document

$(function(){
    //左侧分类栏
    $('#myCom .comIn .inL .lcon ul li').click(function(event) {
        $('#myCom .comIn .inL .lcon ul li').removeClass('cur');
       $(this).addClass('cur').siblings('li');
    });

/*my-order.html,my-works.html,my-coupon.html 的tab栏*/
    function tabSwitch(hd,bd){
        $(hd).click(function(event) {
              $(this).addClass('cur').siblings().removeClass('cur');
              var index = $(this).index();
             $(bd).eq(index).show().siblings().hide();
        });
    }
    tabSwitch('.ordR .tabHd ol li','.listCon ul li');
    tabSwitch('.ordR .tabHd ol li','.picCon ul li');
    tabSwitch('.ordR .tabHd ol li','.infCon ul li');

/*my-order.html*/
    $('.listCon ul li:eq(0)').show().siblings('li').hide();

/*my-works.html*/
    $('.picCon ul li:eq(0)').show().siblings('li').hide();
    //删除
    $('.operate .del').click(function(event) {
      $(this).closest('.listItem').children('.delTip').show();
      $(this).closest('.listItem').removeClass('cur');
    });
    $('.delTip span.no').click(function(event) {
      $(this).closest('.listItem').children('.delTip').hide();
    });
    //查看原图
    function chatPic(small,big,bigWrap){
        $(bigWrap).hide();
        var speed  = 300;
        var _index = 0;
        var bigImgSrc = '';
        var tpLiNum  = $(small+' .listItem').length;
        $(small+' .listItem').hover(function() {
            $(this).addClass('cur').siblings('li').removeClass('cur');
        }, function() {
            $(small+' .listItem').removeClass('cur');
        });
        $(small+' img').click(function(event){
            $(bigWrap).fadeIn(speed);
            var index = $(this).parents('.listItem').index();
            bigImgSrc = $(this).attr("src");
            $(big+' img').attr("src",bigImgSrc);
            _index = index;
        });
        $(bigWrap+' .next').click(function(event) {
            _index++;
            if(_index > tpLiNum-1){
                _index = 0;
            }
            //console.log(_index);
            bigImgSrc = $(small+' img').parents('.listItem').eq(_index).find('img').attr("src");
            $(big+' img').attr("src",bigImgSrc);
        });
        $(bigWrap+' .prev').click(function(event) {
            _index--;
            if(_index < 0){
                _index = tpLiNum-1;
            }
            bigImgSrc = $(small+' img').parents('.listItem').eq(_index).find('img').attr("src");
            $(big+' img').attr("src",bigImgSrc);
        });
        $(bigWrap+' .close').click(function(event){
            $(bigWrap).fadeOut(speed);
        });
    };
    chatPic('.picCon ul li.li01','.bigTp','.bigWrap');

    function chatPic2(small,big,bigWrap){
        $(bigWrap).hide();
        var speed  = 300;
        var _index = 0;
        var bigImgSrc = '';
        var tpLiNum2  = $(small+' .listItem').length;
        $(small+' .listItem').hover(function() {
            $(this).addClass('cur').siblings('li').removeClass('cur');
        }, function() {
            $(small+' .listItem').removeClass('cur');
        });
        $(small+' img').click(function(event){
            $(bigWrap).fadeIn(speed);
            var index = $(this).parents('.listItem').index();
            bigImgSrc = $(this).attr("src");
            $(big+' img').attr("src",bigImgSrc);
            _index = index;
        });
        $(bigWrap+' .next').click(function(event) {
            _index++;
            if(_index > tpLiNum2-1){
                _index = 0;
            }
            //console.log(_index);
            bigImgSrc = $(small+' img').parents('.listItem').eq(_index).find('img').attr("src");
            $(big+' img').attr("src",bigImgSrc);
        });
        $(bigWrap+' .prev').click(function(event) {
            _index--;
            if(_index < 0){
                _index = tpLiNum2-1;
            }
            bigImgSrc = $(small+' img').parents('.listItem').eq(_index).find('img').attr("src");
            $(big+' img').attr("src",bigImgSrc);
        });
        $(bigWrap+' .close').click(function(event){
            $(bigWrap).fadeOut(speed);
        });
    };
    chatPic2('.picCon ul li.li02','.bigTp','.bigWrap');

/*my-coupon.html*/
  $('.infCon ul li:eq(0)').show().siblings('li').hide();
 
/*my-message.html*/
  //全选-单选
    function selCheck(allCheck,check){
        $(allCheck).click(function(event) {
            if($(check).attr('checked') != 'checked'){
                $(check).attr('checked', 'checked');
                $(allCheck).attr('checked', 'checked');
            }else{
                $(check).removeAttr('checked');
                $(allCheck).removeAttr('checked');
            }
        });
        var chkNum = $(check).size();
        $(check).click(function(event) {
            var chk = 0;
            for( var i = 0; i < chkNum; i++){
                if($(check).eq(i).attr('checked')){
                    chk++;
                }
            }
            if(chkNum == chk){
                $(allCheck).attr('checked','checked')
            }else{
                $(allCheck).removeAttr('checked');
            }
        });
    }
    selCheck('.allCheck input','.singleCheck input');

/*my-address.html*/
  function setDefAddress(param){
    $(param+'.default').hover(function() {
      $(this).removeClass('hover');
    });
    $(param).hover(function() {
      $(this).addClass('hover');
    }, function() {
      $(param).removeClass('hover');
    });
    $(param+' .status').click(function(event) {
        $(this).parents().addClass('default').siblings().removeClass('default');  
        $(this).children().html('默认地址');
        $(this).parents().siblings().children('.status').children().html('设为默认');
    });
  }
  setDefAddress('.tabMain .tabCent');

/*my-evaluation.html*/
  //星星打分
  var inNum =1;
  var myEva =['失望','不满','一般','满意','惊喜'];
  $('.stars ul li').click(function(e) {
      var index = $(this).index();
      inNum = index;   
      var onNum = index+1;
      $('.stars p span').html(myEva[inNum]);
      $('.stars ul li').removeClass();
      $('.stars ul li:lt('+onNum+')').addClass('cur'); 
  });
  $('.stars ul li').hover(function(e) {
      var index = $(this).index()
      inNum = index;   
      var onNum = index+1;
      $('.stars p span').html(myEva[inNum]);
      $('.stars ul li').removeClass();
      $('.stars ul li:lt('+onNum+')').addClass('cur'); 
  });

});


