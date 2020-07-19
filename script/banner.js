$(function () {
    var $timer;
    var $num = 0;
    var $bannerWidth = "1000px";

    $.ajax({
        method: "get",
        url: "../json/banner.json",
        datatype: "json",
        success: function (data) {
            $.each(data, function ($index, $no) {
                var $imgLink = $no.mbimg.substr(7);
                $("#discList").append("<li></li>");
                $("#bannerSlide").append("<li></li>");
                $("#bannerSlide>li").eq($no.mbnum).append("<img src='" + $imgLink + "'>");
            });
            $(this).bannerAnimate();
        },
        error: function () {
            alert("실패");
        }
    });

    // 배너 이미지 슬라이드
    $.fn.bannerImageSlide = function () {
        $("#bannerSlide").stop().animate({
            "margin-left": "-" + $bannerWidth
        }, 1000, function () {
            var $bannerFirst = $("#bannerSlide>li").eq(0).clone();
            $("#bannerSlide").append($bannerFirst);
            $("#bannerSlide>li").eq(0).remove();
            $("#bannerSlide").css("margin-left", "0px");
        });
    }

    $.fn.bannerDiscInit = function () {
        $("#discList>li").css("background-color", "");
        $("#discList>li").animate({
            "width": "10px"
        }, 300);
    }

    // 배너 디스크 슬라이드
    $.fn.bannerDiscSlide = function ($discNum) {
        $(this).bannerDiscInit();
        if ($num < $discNum - 1) {
            $("#discList>li").eq($num + 1).css("background-color", "red").animate({
                "width": "20px"
            }, 300);
            $num++;
        } else {
            $("#discList>li").eq(0).css("background-color", "red").animate({
                "width": "20px"
            }, 300);
            $num = 0;
        }
    }

    // 배너 이미지, 디스크 슬라이드
    $.fn.bannerAnimate = function () {
        var $discNum = $("#discList>li").length;
        if ($num == "0") {
            $("#discList>li").eq(0).css("background-color", "red");
            $("#discList>li").eq(0).css("width", "20px");
        }
        $timer = setInterval(function () {
            $(this).bannerDiscSlide($discNum);
            $(this).bannerImageSlide();
        }, 3000);
    }

    // 배너 마우스 인, 아웃
    $("#mainBanner").bind({
        mouseenter: function () {
            $(".main-banner > span").stop().fadeIn();
            clearInterval($timer);
        },
        mouseleave: function () {
            $(".main-banner > span").stop().fadeOut();
            $(this).bannerAnimate();
        }
    });

    // 좌 버튼
    $("#leftBtn").click(function () {
        var $discNum = $("#discList>li").length;
        var $bannerLast = $("#bannerSlide>li:last").clone();
        $("#bannerSlide").prepend($bannerLast);
        $("#bannerSlide").css("margin-left", "-1000px");
        $(this).bannerDiscInit();
        $("#bannerSlide").stop().animate({
            "margin-left": "0px"
        }, 1000);
        $("#bannerSlide>li:last").remove();
        $("#discList>li").eq($num - 1).css("background-color", "red").animate({
            "width": "20px"
        }, 300);
        $num--;
        if ($num < 0) {
            $num = $discNum - 1;
        }
    });

    // 우 버튼
    $("#rightBtn").click(function () {
        var $discNum = $("#discList>li").length;
        $(this).bannerDiscSlide($discNum);
        $(this).bannerImageSlide();
    });
});