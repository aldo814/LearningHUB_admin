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

    $('.content_wrapper').each(function () {
        if ($('.bt_fixed').length) {
            $('.content_wrapper').addClass('in_bt')
        }
    });

    // select 검색
    $('.chosen-select').chosen({
        no_results_text: "검색 결과가 없습니다"

    });

    // popup
    function addButtons(dlg) {
        // Define Buttons
        var $close = dlg.find(".ui-dialog-titlebar-close");
        var $min = $("<button>", {
            class: "ui-button ui-corner-all ui-widget ui-button-icon-only ui-window-minimize",
            type: "button",
            title: "Minimize"
        }).insertBefore($close);
        $min.data("isMin", false);
        $("<span>", {
            class: "ui-button-icon ui-icon ui-icon-minusthick"
        }).appendTo($min);
        $("<span>", {
            class: "ui-button-icon-space"
        }).html(" ").appendTo($min);
        var $max = $("<button>", {
            class: "ui-button ui-corner-all ui-widget ui-button-icon-only ui-window-maximize",
            type: "button",
            title: "Maximize"
        }).insertBefore($close);
        $max.data("isMax", false);
        $("<span>", {
            class: "ui-button-icon ui-icon ui-icon-plusthick"
        }).appendTo($max);
        $("<span>", {
            class: "ui-button-icon-space"
        }).html(" ").appendTo($max);
        // Define Function
        $min.click(function (e) {
            if ($min.data("isMin") === false) {
                console.log("Minimize Window");
                $min.data("original-pos", dlg.position());
                $min.data("original-size", {
                    width: dlg.width(),
                    height: dlg.height()
                });
                $min.data("isMin", true);
                dlg.animate({
                    height: '40px',
                    top: $(window).height() - 50
                }, 200);
                dlg.find(".ui-dialog-content").hide();
                $('body').find(".ui-widget-overlay").hide();
            } else {
                console.log("Restore Window");
                $min.data("isMin", false);
                dlg.find(".ui-dialog-content").show();
                $('body').find(".ui-widget-overlay").show();
                dlg.animate({
                    height: $min.data("original-size").height + "px",
                    top: $min.data("original-pos").top + "px"
                }, 200);
            }
        });
        $max.click(function (e) {
            if ($max.data("isMax") === false) {
                console.log("Maximize Window");
                $max.data("original-pos", dlg.position());
                $max.data("original-size", {
                    width: dlg.width(),
                    height: dlg.height()
                });
                $max.data("isMax", true);
                dlg.animate({
                    height: $(window).height() + "px",
                    width: $(window).width() - 20 + "px",
                    top: 0,
                    left: 0
                }, 200);
                $('body').find(".ui-widget-overlay").show();
            } else {
                console.log("Restore Window");
                $max.data("isMax", false);
                dlg.animate({
                    height: $max.data("original-size").height + "px",
                    width: $max.data("original-size").width + "px",
                    top: $max.data("original-pos").top + "px",
                    left: $max.data("original-pos").top + "px"
                }, 200);
            }
        });
    }

    setTimeout(function () {
        $('.popUp').dialog({
            draggable: false,
            autoOpen: false,
            classes: {
                "ui-dialog": "ui-window-options",
                "ui-dialog-titlebar": "ui-window-bar"
            },
           
            modal: true,
            responsive: true,
            resizable: false,

        });
        addButtons($(".ui-window-options"));

    }, 50);
    
    $(".close_pop").click(function () {
        $(".popUp").dialog("close");
     });

    

    // 탭메뉴
    // 탭 컨텐츠 숨기기
    $(".tab_content").hide();

    // 첫번째 탭콘텐츠 보이기
    $(".tab_container").each(function () {
        $(this).children(".tabs li:first").addClass("active"); //Activate first tab
        $(this).children(".tab_content").first().show();
    });
    //탭메뉴 클릭 이벤트
    $(".tabs li a").click(function () {

        $(this).parent().siblings("li").removeClass("active");
        $(this).parent().addClass("active");
        $(this).parent().parent().parent().parent().find(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });

    var $fileBox = $('.filetype');

    $fileBox.each(function () {
        var $fileUpload = $(this).find('.input-file'),
            $fileText = $(this).find('.file-text')
        $fileUpload.on('change', function () {
            var fileName = $(this).val();
            $fileText.attr('disabled', 'disabled').val(fileName);
        })
    });

});


// 팝업 열기
function openModal(modalname) {
    document.get
    $("." + modalname).dialog("open");
}
