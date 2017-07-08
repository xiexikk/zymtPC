
$(function() {
    function tabSwitch(hd, bd) {
        $(hd).hover(function (event) {
            $(this).addClass('cur').siblings().removeClass('cur');
            var index = $(this).index();
            $(bd).eq(index).show().siblings().hide();
        });
    }
    function tabSwitchClick(hd, bd) {
        $(hd).click(function (event) {
            $(this).addClass('cur').siblings().removeClass('cur');
            var index = $(this).index();
            $(bd).eq(index).show().siblings().hide();
        });
    }
    /*wash.html*/
    //经过每个规格
    tabSwitch('.gridSize .txt ol li', '.gridSize .pic ul li');

    /*washOperate.html*/
    // 左侧（光面和绒面切换）
    tabSwitchClick('.operateIn .main .in .inL .tabHd ol li', '.operateIn .main .in .inL .tabBd ul li');

//静态时候的图片处理 -star
/*
    //点击单张
    $('.picList ul li .item .pic a.tp').click(function () {
        $('.popBg01').fadeIn(300);
    })
    // 删除对应图片提示
    $('.inC .picList ul li .item .han .del').click(function (event) {
        $(this).parents('.item').siblings('.itemWrap').fadeIn(200);
    });
    $('.inC .picList ul li .itemWrap .wrapIn .judge .no').click(function (event) {
        $(this).parents('.itemWrap').fadeOut(200);
    });
    //选择：全选-单选
    function selCheck(allCheck, check) {
        $(allCheck).click(function (event) {
            if ($(check).parents('li').hasClass('checked')) {
                $(check).parents('li').removeClass('checked');
                $(allCheck).removeClass('checked');
            } else {
                $(check).parents('li').addClass('checked');
                $(allCheck).addClass('checked');
            }
        });
        var chkNum = $(check).parents('li').size();
        $(check).click(function (event) {
            $(this).parents('li').toggleClass('checked');
            var chk = 0;
            for (var i = 0; i < chkNum; i++) {
                if ($(check).parents('li').eq(i).hasClass('checked')) {
                    chk++;
                }
            }
            if (chkNum == chk) {
                $(allCheck).addClass('checked');
            } else {
                $(allCheck).removeClass('checked');
            }
        });
    }
    selCheck('.opHd .sel', '.picList ul li .item .han i');
*/
//静态时候的图片处理 -end

});



