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
                dlg.addClass('min');

            } else {
                console.log("Restore Window");
                $min.data("isMin", false);
                dlg.find(".ui-dialog-content").show();
                $('body').find(".ui-widget-overlay").show();
                dlg.animate({
                    height: $min.data("original-size").height + "px",
                    top: $min.data("original-pos").top + "px"
                }, 200);
                dlg.removeClass('min');
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
                dlg.addClass('max');
            } else {
                console.log("Restore Window");
                $max.data("isMax", false);
                dlg.animate({
                    height: $max.data("original-size").height + "px",
                    width: $max.data("original-size").width + "px",
                    top: $max.data("original-pos").top + "px",
                    left: $max.data("original-pos").top + "px"
                }, 200);
                dlg.removeClass('max');
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

    $(".close_modalpop").click(function () {
        $(".modal_popUp").hide();
        $(".shadow").hide();
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
    document.querySelector(".preview");
    const para = document.querySelector(".no-pic");
    const image = document.querySelector(".profile-img");

    $fileBox.each(function () {
        var $fileUpload = $(this).find('.input-file'),
            $fileText = $(this).find('.file-text')
        $fileUpload.on('change', function () {
            var fileName = $(this).val();
            $fileText.attr('disabled', 'disabled').val(fileName);
        })
    });


    var $fileBox02 = $('.filetype02');

    $fileBox02.each(function () {
        var $fileUpload02 = $(this).find('.input-file'),
            $fileText02 = $(this).find('.file-text')
        $fileUpload02.on('change', function () {
            var fileName02 = $(this).val();
            $fileText02.attr('disabled', 'disabled').val(fileName02);
        })
    });

    //date
    $(".datep").datepicker({

        showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다.
        buttonImage: "./images/calendar_ico.png",

        changeMonth: true, // 월을 바꿀수 있는 셀렉트 박스를 표시한다.

        changeYear: true, // 년을 바꿀 수 있는 셀렉트 박스를 표시한다.

        minDate: '-100y', // 현재날짜로부터 100년이전까지 년을 표시한다.

        nextText: '다음 달', // next 아이콘의 툴팁.

        prevText: '이전 달', // prev 아이콘의 툴팁.

        numberOfMonths: [1, 1], // 한번에 얼마나 많은 월을 표시할것인가. [2,3] 일 경우, 2(행) x 3(열) = 6개의 월을 표시한다.

        stepMonths: 3, // next, prev 버튼을 클릭했을때 얼마나 많은 월을 이동하여 표시하는가. 

        yearRange: 'c-100:c+10', // 년도 선택 셀렉트박스를 현재 년도에서 이전, 이후로 얼마의 범위를 표시할것인가.

        showButtonPanel: true, // 캘린더 하단에 버튼 패널을 표시한다. 

        currentText: '오늘 날짜', // 오늘 날짜로 이동하는 버튼 패널

        closeText: '닫기', // 닫기 버튼 패널

        dateFormat: "yy.mm.dd", // 텍스트 필드에 입력되는 날짜 형식.

        showMonthAfterYear: true, // 월, 년순의 셀렉트 박스를 년,월 순으로 바꿔준다. 

        dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'], // 요일의 한글 형식.

        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], // 월의 한글 형식.


    });


    //tree

    var options = {
        placeholderCss: {
            'background-color': '#eee'
        },
        hintCss: {
            'background-color': '#ddd'
        },
        onChange: function (cEl) {
            console.log('onChange');
        },
        complete: function (cEl) {
            console.log('complete');
        },
        isAllowed: function (cEl, hint, target) {
            if (target.data('module') === 'c' && cEl.data('module') !== 'c') {
                hint.css('background-color', '#ddd');
                return false;
            } else {
                hint.css('background-color', '#ddd');
                return true;
            }
        },
        ignoreClass: 'clickable',
        isAllowed: function (cEl, hint, target) {
            // Be carefull if you test some ul/ol elements here.
            // Sometimes ul/ols are dynamically generated and so they have not some attributes as natural ul/ols.
            // Be careful also if the hint is not visible. It has only display none so it is at the previous place where it was before(excluding first moves before showing).
            if (target.data('module') === 'view' && cEl.data('module') !== 'view' || target.data('module') === 'view02' && cEl.data('module') !== 'view02' || target.data('module') === 'view03' && cEl.data('module') !== 'view03' || target.data('module') === 'view04' && cEl.data('module') !== 'view04' || target.data('module') === 'view05' && cEl.data('module') !== 'view05' || target.data('module') === 'view06' && cEl.data('module') !== 'view06') {
                hint.css('background-color', '#ff9999');
                return false;
            } else {
                hint.css('background-color', '#ddd');
                return true;
            }
        },


    };
    $('#sTree2').sortableLists(options);





    $('.sTree .menu').click(function () {
        var activeItem = $(this).parent().find('.menu_open');
        activeItem.toggle();
        $('.menu_open').not(activeItem).hide();
        $('.bt_fixed').css('z-index', '0')
    });


    var menuBtn = $(".sTree .menu"),
        menuContainer = $(".menu_open"),
        menuChildren = $(".menu").find("*");
    $(window).mouseup(function (e) {
        if (!menuContainer.is(e.target) && !menuChildren.is(e.target) && !menuBtn.is(e.target)) {
            menuContainer.hide();
        }
    });




    $('.sTree .arrow').click(function () {
        $(this).parent().parent().parent().toggleClass('s-l-open');
        if ($(this).parent().parent().parent().hasClass("s-l-open")) {
            $(this).parent().parent().parent().children('ul').show();
        } else if (!$(this).parent().parent().parent().hasClass("s-l-open")) {
            $(this).parent().parent().parent().children('ul').hide();
        }
    });

    $('.allview').click(function () {
        $('.sTree > li  ul:not(.menu_open)').show();
        $('.sTree  li').addClass('s-l-open');
    });
    $('.allfold').click(function () {
        $('.sTree > li  ul').hide();
        $('.sTree  li').removeClass('s-l-open');
    });


    $('.ul_select > li > a').click(function () {
        $(this).next().toggle();
        $('.bt_fixed').css('z-index', '5')
    });

    $('.ul_select > li > ul a').click(function () {
        $(this).parent().parent().hide();
    });


    $('html').each(function () {
        if ($('.sTree').hasClass("survey_tree") === true) {
            $('#s-l-base').addClass('survey_tree')
        }
    });

    $('.code_show').click(function () {
        $('.code_table').toggleClass('active');
    });

    $('.code_hide').click(function () {
        $('.code_table').removeClass('active')
    });

    $('.readonly_cs').chosen().chosenReadonly(true);


    //drag 파일
    $('.drop-zone input').change(function () {
        var files = $(this)[0].files;
        var fileName03 = $(this).val();
        var _fileLen = fileName03.length;
        var _lastDot = fileName03.lastIndexOf('.');
        var _fileExt = fileName03.substring(_lastDot, _fileLen).toLowerCase();
        var _fileExtt = _fileExt.replace('.', '')
        var nrOrder = 1;
        for (var i = 0; i < files.length; i++) {
            $('.file_list').append('<tr><td>' + nrOrder + '</td>' + '<td>' + files[i].name + '</td><td>' + _fileExtt + '</td><td><a href="javascript:;" class="btn_style03 btn_black file_del ">취소</a></td></tr>');
            nrOrder++;
        }

    });

    $(document).on('click', '.file_del', function () {
        if (confirm('삭제 하시겠습니까?')) {
            $(this).parent().parent().remove();
            $('.file_list tr').each(function () {
                var idx = $(this).index();
                $(this).find('td:first-child').html(idx + 1);
            });
        } else {}
    });

    
    $('.chart p').each(function() {
        var widthPercent = $(this).width() / $(this).parent().width() * 100;

        if (widthPercent < 11) {
          $(this).addClass('blue');
        } else if (widthPercent >= 11 && widthPercent < 16) {
          $(this).addClass('green');
        } else {
          $(this).addClass('red');
        }
        
        if (widthPercent > 89) {
            $(this).addClass('inner');
        }
      });
    
    $('.short_aq .btn_black').click(function(){
        $(this).parent().parent().find('.result').slideToggle();
        $(this).text( $(this).text() == '결과 펼쳐보기' ? '결과 닫기' : '결과 펼쳐보기');
    });
    
    
    $('#prt_btn').on("click", function () {
		$('.certi').printThis({
			importCSS: true,
			base: "https://mark2.job-cloud.kr/html/%EC%88%98%EB%A3%8C%EC%B2%98%EB%A6%AC.html", //출력안되면 주소변경,
			importStyle: true,
			printContainer: true,
			debug: false,
		});
	});
    
    $('.print_contract').on("click", function () {
		$('.contract').printThis({
			importCSS: true,
			base: "https://mark2.job-cloud.kr/html/%EC%9C%84%ED%83%81%ED%9B%88%EB%A0%A8%EA%B3%84%EC%95%BD%EC%84%9C.html", //출력안되면 주소변경,
			importStyle: true,
			printContainer: true,
			debug: false,
           
		});
	});

     $(".timep").timepicker();
    
     $("tbody.question td").each(function() {
        // 현재 td 엘리먼트의 텍스트 값을 가져와서 숫자로 변환
        var cellValue = parseFloat($(this).text());

        // 숫자가 0이 아닌 경우 "orange" 클래스 추가
        if (cellValue !== 0) {
            $(this).addClass("orange");
        }
    });
});



// 팝업 열기
function openModal(modalname) {
    document.get
    $("." + modalname).dialog("open");
}

function openModalPop(modalname) {
    document.get
    $("." + modalname).show();
    $('.shadow').show();
}

function openModalPop02(modalname) {
    document.get
    $("." + modalname).show();
}


function closeModal() {
    $('.layv').hide();
}


function onLoading() {
    $('.loading').show();
}


function offLoading() {
    $('.loading').hide();
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('preview').src = e.target.result;
            document.querySelector('.preview_wrap').style.display = 'block';
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        document.getElementById('preview').src = "";
    }
}

