$(document).ready(function () {
    /*header*/
    $('#header .gnb_wrap').mouseenter(function () {
        $(this).addClass('open');
        $('.gnbBg').stop().slideDown(300)
    });
    $('#header .gnb_wrap').mouseleave(function () {
        $(this).removeClass('open');
        $('.gnbBg').stop().slideUp(300)
    });

    $('#header .gnb > li').mouseenter(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active')
    });
    $('#header .gnb > li').mouseleave(function () {
        $(this).removeClass('active');
    });

    $('#header .hide_btn').click(function () {
        $(this).toggleClass('active');
        $('#header .sidebar_menu').toggleClass('hide');
        $('.content_wrapper').toggleClass('full');
    });

    /* side menu*/
    $('.side_menu > li > a').click(function () {
        $(this).parent().toggleClass('active');
        $(this).parent().siblings().removeClass('active');
    });
    
    /* 툴팁 */
    $(".css-tooltip").hover(
      function () {
        $(this).find(".tooltiptext").addClass("active");
      },
      function () {
        $(this).find(".tooltiptext").removeClass("active");
      }
    );
    
    $('.content_wrapper').each(function(){
        if($('.bt_fixed').length){ 
            $('.content_wrapper').addClass('in_bt')
        }
    });
    
    // select 검색
    $('.chosen-select').chosen({
  no_results_text: "검색 결과가 없습니다"

});
});
