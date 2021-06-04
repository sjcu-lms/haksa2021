$(document).ready(function () {
    $(document).mouseup(function (e){
        var container = $('#layer_pop');
        if(container.has(e.target).length === 0)
        container.fadeOut();
    }
)
    
    $(document).on('keyup', function(evt){
        if(evt.keyCode == 27){
            $('#layer_pop').fadeOut();
        }
      });

    $(".close").on('click', function () {
        $('#layer_pop').fadeOut();
    });


    //PC 마우스 오버 활성화
    $('#layer_pop .pop_cont .layer_cont .ch_contents .ch_04 .detail > div').on('mouseenter', function () {
        $('#layer_pop .pop_cont .layer_cont .ch_contents .ch_04 .detail').addClass('on_1');
        $(this).prevAll('.text_img').css("display", "none");
        $(this).nextAll('.text_img').css("display", "none");
        $(this).next('.text_img').css("display", "block");
    });

    $('#layer_pop .pop_cont .layer_cont .ch_contents .ch_04 .detail > div').on('mouseleave', function () {
        $('#layer_pop .pop_cont .layer_cont .ch_contents .ch_04 .detail').removeClass('on_1');
        $(this).prevAll('.text_img').css("display", "block");
        $(this).nextAll('.text_img').css("display", "block");
        
    });

    $('#layer_pop .pop_cont .layer_cont .ch_contents .ch_04 .detail > .text_img').on('mouseenter', function () {
        $(this).prev().addClass('hover');
        $(this).prevAll('.text_img').css("display", "none");
        $(this).nextAll('.text_img').css("display", "none");
    });

    $('#layer_pop .pop_cont .layer_cont .ch_contents .ch_04 .detail > .text_img').on('mouseleave', function () {
        $('#layer_pop .pop_cont .layer_cont .ch_contents .ch_04 .detail > div').removeClass('hover');
        $(this).prevAll('.text_img').css("display", "block");
        $(this).nextAll('.text_img').css("display", "block");
    });

    /*2번째*/
    $('#layer_pop .pop_cont .layer_cont .ch_contents .ch_05 .detail > .text_img').on('mouseenter', function () {
        $('#layer_pop .pop_cont .layer_cont .ch_contents .ch_05 .detail').addClass('on');
        $(this).prevAll('.text_img_sub').addClass('none');
        $(this).nextAll('.text_img_sub').addClass('none');
        $(this).prevAll('.text_img').addClass('none');
        $(this).nextAll('.text_img').addClass('none');
        $(this).next().removeClass('none');
    });

    $('#layer_pop .pop_cont .layer_cont .ch_contents .ch_05 .detail > .text_img').on('mouseleave', function () {
        $('#layer_pop .pop_cont .layer_cont .ch_contents .ch_05 .detail').removeClass('on');
        $(this).prevAll('.text_img_sub').removeClass('none');
        $(this).nextAll('.text_img_sub').removeClass('none');
        $(this).prevAll('.text_img').removeClass('none');
        $(this).nextAll('.text_img').removeClass('none');
    });

    $('#layer_pop .pop_cont .layer_cont .ch_contents .ch_05 .detail > .text_img_sub').on('mouseenter', function () {
        $('#layer_pop .pop_cont .layer_cont .ch_contents .ch_05 .detail').addClass('on');
        $(this).prevAll('.text_img').addClass('none');
        $(this).nextAll('.text_img').addClass('none');
        $(this).prevAll('.text_img_sub').addClass('none');
        $(this).nextAll('.text_img_sub').addClass('none');
        $(this).prev().removeClass('none').css("border", "1px solid #b71544");
    });

    $('#layer_pop .pop_cont .layer_cont .ch_contents .ch_05 .detail > .text_img_sub').on('mouseleave', function () {
        $('#layer_pop .pop_cont .layer_cont .ch_contents .ch_05 .detail').removeClass('on');
        $(this).prevAll('.text_img').removeClass('none');
        $(this).nextAll('.text_img').removeClass('none');
        $(this).prevAll('.text_img_sub').removeClass('none');
        $(this).nextAll('.text_img_sub').removeClass('none');
        $(this).prev().removeClass('none').css("border", "");
    });

 //스크롤 이벤트
$('.ch_01 .img').addClass('fadeInLeft');

var topBar = $(".ch_01").offset();
var topBar_02 = $(".ch_02").offset();
var topBar_03 = $(".ch_03").offset();
var topBar_04 = $(".pop_cont").offset();

$('.layer_cont').scroll(function () {
    var docScrollY = $('.layer_cont').scrollTop()

    var barThis = $(".ch_02 .img")
    var barThis_02 = $(".ch_02 > ul")

    var barThis_03_01 = $(".ch_03 .img")
    var barThis_03_02 = $(".ch_03 .img .m")
    
    var barThis_04_01 = $(".ch_04 .detail")

    var barThis_05_01 = $(".ch_05 .detail")
    var barThis_05_02 = $(".ch_05 .detail_m")

    if (docScrollY > topBar.top) {
        barThis.addClass("fadeInLeft").css("opacity","1");
        barThis_02.addClass("fadeInRight").css("opacity","1");
        
    } else {
        barThis.removeClass("fadeInLeft").css("opacity","");
        barThis_02.removeClass("fadeInRight").css("opacity","");
    }

    if (docScrollY > topBar_02.top) {
        barThis_03_01.addClass("fadeInLeft").css("opacity","1");
        
    } else {
        barThis_03_02.removeClass("fadeInLeft").css("opacity","");
    }

    if (docScrollY > topBar_03.top - 1000) {
        barThis_04_01.addClass("fadeInLeft").css("opacity","1");
        
    } else {
        barThis_04_01.removeClass("fadeInLeft").css("opacity","");
    }

    if (docScrollY > topBar_04.top + 2000) {
        barThis_05_01.addClass("fadeInLeft").css("opacity","1");
        barThis_05_02.addClass("fadeInLeft").css("opacity","1");
        
    } else {
        barThis_05_01.removeClass("fadeInLeft").css("opacity","");
        barThis_05_02.removeClass("fadeInLeft").css("opacity","");
    }
    
    var topBar_06 = $("#layer_pop .pop_cont .layer_cont .ch_contents .ch_03 .img").offset();
    var test = $('#layer_pop .pop_cont .layer_cont .ch_contents .ch_03 .img');

    var topBar_07 = $("#layer_pop .pop_cont .layer_cont .ch_contents .ch_05").offset();
    var test_02 = $('#layer_pop .pop_cont .layer_cont .ch_contents .ch_04 .detail_m');
    var test_03 = $('#layer_pop .pop_cont .layer_cont .ch_contents .ch_04 .detail');

    if (docScrollY > topBar_06.top) {
        test.addClass("fadeInLeft").css("opacity","1");
        
    } else {
        test.removeClass("fadeInLeft").css("opacity","");
    }

    if (docScrollY > topBar_07.top) {
        test_02.addClass("fadeInLeft").css("opacity","1");
        
    } else {
        test_02.removeClass("fadeInLeft").css("opacity","0");
    }

    if (docScrollY > topBar_07.top) {
        test_03.addClass("fadeInLeft").css("opacity","1");
        
    } else {
        test_03.removeClass("fadeInLeft").css("opacity","0");
    }
});
})