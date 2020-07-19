$(function () {
    var $navIndex;
    var $navMouseOverTitle = ["Category", "PhotoBook", "Photo Print", "Calendar", "Event"];
    var $navMouseOutTitle = [
        { category: "전체카테고리", categoryItem: [], link: [""] },
        { category: "포토북", categoryItem: ["정사각형", "와이드형", "세로형"], link: [""] },
        { category: "사진인화", categoryItem: ["소량명함", "증명사진", "미니사진", "일반사진", "중형사진", "대형사진", "파노라마사진"], link: [""] },
        { category: "달력", categoryItem: ["탁상용 단면 달력", "탁상용 양면 달력", "벽걸이 달력"], link: [""] },
        { category: "고객센터", categoryItem: ["공지사항", "FAQ", "1:1문의", "원격지원 요청하기"], link: [""] }
    ];

    /* ----------------- 상단 광고 ----------------- */
    $("#TopAdsCloseBtn").click(function () {
        $(".top-ads").slideUp();
    });

    /* ----------------- 메뉴 출력 ----------------- */
    $.fn.navPrint = function () {
        $.each($navMouseOutTitle, function ($index, $no) {
            $(".nav-section>ul").append("<li class='category-item' data='./product.php?nm=" + $navMouseOutTitle[$index].category + "'>" + $navMouseOutTitle[$index].category + "</li>");
        });
        $(this).wholeCatagoryPrint();
        $(this).wholeMenuPrint();
    }

    $.fn.wholeCatagoryPrint = function () {
        $(".nav-section>ul>li").eq(0).append("<div class='whole-category'></div>");
        for (var $j = 1; $j < 5; $j++) {
            var $wholeCategoryName = "#wholeCatagory" + $j;
            $(".whole-category").eq(0).append("<ol id='wholeCatagory" + $j + "'></ol>");
            $($wholeCategoryName).append("<li class='category-item' data='./product.php?nm=" + $navMouseOutTitle[$j].category + "'>" + $navMouseOutTitle[$j].category + "</li>");
            for (var $i = 0; $i < $navMouseOutTitle[$j].categoryItem.length; $i++) {
                $($wholeCategoryName).append("<li class='category-item' data='./product.php?nm=" + $navMouseOutTitle[$j].categoryItem[$i] + "'>" + $navMouseOutTitle[$j].categoryItem[$i] + "</li>");
            }
        }
    }

    $.fn.wholeMenuPrint = function () {
        $(".nav-section>ul>li").bind({
            mouseenter: function () {
                $navIndex = $(this).index();
                $(".nav-section>ul>li").eq($navIndex).contents()[0].textContent = $navMouseOverTitle[$navIndex];
                if ($navIndex == 0) {
                    $(".whole-category").slideDown(500);
                }
            },
            mouseleave: function () {
                $navIndex = $(this).index();
                $(".nav-section>ul>li").eq($navIndex).contents()[0].textContent = $navMouseOutTitle[$navIndex].category;
                if ($navIndex == 0) {
                    $(".whole-category").slideUp(500);
                }
            }
        });
    }

    $(this).navPrint();

    // 이동
    $("#wholeCatagory1").click(function () {
        location.href = "./productDetails2.html";
    });
    $("#wholeCatagory2").click(function () {
        location.href = "./productDetails.html";
    });
    $("#wholeCatagory3").click(function () {
        location.href = "./productDetails3.html";
    });
    $(".nav-section>ul>li").eq(1).click(function () {
        location.href = "./productDetails2.html";
    });
    $(".nav-section>ul>li").eq(2).click(function () {
        location.href = "./productDetails.html";
    });
    $(".nav-section>ul>li").eq(3).click(function () {
        location.href = "./productDetails3.html";
    });
    $("#wholeCatagory4").click(function () {
        location.href = "./faq.html";
    });
    $(".nav-section>ul>li").eq(4).click(function () {
        location.href = "./faq.html";
    });
    $(".top-nav-order").click(function () {
        location.href = "./basket.html";
    })
});

/* ----------------- 즐겨찾기 ----------------- */
function bookMark() {
    var myPageUrl = "http://whi1022.dothome.co.kr/portfolio/shop/index.html";
    var myPageTitle = "Cheecle Photo";
    if (window.external && ('AddFavorite' in window.external)) {
        window.external.AddFavorite(myPageUrl, myPageTitle);
    } else if (window.chrome) {
        alert("Ctrl+D키를 누르시면 즐겨찾기에 추가할 수 있습니다.");
    }
}

/* ----------------- 검색 ----------------- */
function searchWord(word) {
    if (event.keyCode == 13) {
        if (word == "") {
            alert("상품명을 입력해야만 검색이 가능합니다");
            return false;
        } else {
            location.href = encodeURI("./index.html?searchwd=" + word);
            return false;
        }
    }
}

function searchBtnClick() {
    var searchWord = searchForm.search.value;
    if (searchWord == "") {
        alert("상품명을 입력해야만 검색이 가능합니다");
        return false;
    } else {
        location.href = encodeURI("./index.html?searchwd=" + searchWord);
        return false;
    }
}

// 상단 이벤트창 쿠키
function setcookie(idName, check, no) {
    var today = new Date();
    today.setDate(today.getDate() + no);
    var cookies = idName + "=" + check + ";path=/";
    if (typeof (no) == "1") {
        cookies += ";expries=" + today.toGMTString() + ";domain=nancy1022.dothome.co.kr";
    }
    document.cookie = cookies;
}

function openstop(idName) {
    setcookie(idName, "Y", 1);
}

function openPopupStop(idName) {
    setcookie(idName, "Y", 1);
    popup.style.display = "none";
}

// 이동
function move(char) {
    location.href = "./" + char + ".html";
}

function moveReview(char,select) {
    location.href = "./" + char + ".html?category="+select;
}

function moveOrderPage() {
    self.close();
    opener.location.href = "./basket.html";
}

// 로그인
function loginShop() {
    loginForm.submit();
}

