$(function () {
    var $MiniPhotoproduct = [
        { title: "미니 4x6", image: "./product/product_mini.png", oriPrice: "100", price: "40", size: 50, url: "./product.php?v=1" },
        { title: "폴라로이드", image: "./product/product_mini.png", oriPrice: "2,000", price: "1,090", size: 60, url: "./product.php?v=2" },
        { title: "정사각형 폴라로이드", image: "./product/product_mini.png", oriPrice: "3000", price: "2,090", size: 70, url: "./product.php?v=3" },
        { title: "미니 5x7", image: "./product/product_mini.png", oriPrice: "150", price: "55", size: 80, url: "./product.php?v=4" },
        { title: "미니 5x8", image: "./product/product_mini.png", oriPrice: "150", price: "75", size: 90, url: "./product.php?v=5" },
        { title: "3x4", image: "./product/product_mini.png", oriPrice: "200", price: "70", size: 100, url: "./product.php?v=6" }
    ];
    var $Photoproduct = [
        { title: "3x5", image: "./product/product_photo.png", oriPrice: "200", price: "75", size: 50, url: "./product.php?v=7" },
        { title: "D3", image: "./product/product_photo.png", oriPrice: "220", price: "79", size: 60, url: "./product.php?v=8" },
        { title: "D4", image: "./product/product_photo.png", oriPrice: "250", price: "97", size: 70, url: "./product.php?v=9" },
        { title: "4x6", image: "./product/product_photo.png", oriPrice: "300", price: "97", size: 80, url: "./product.php?v=10" },
        { title: "D5", image: "./product/product_photo.png", oriPrice: "450", price: "180", size: 90, url: "./product.php?v=11" },
        { title: "5x7", image: "./product/product_photo.png", oriPrice: "500", price: "195", size: 100, url: "./product.php?v=12" },
        { title: "15.2x20.3", image: "./product/product_photo.png", oriPrice: "1,500", price: "350", size: 110, url: "./product.php?v=13" },
        { title: "15.2x22.9", image: "./product/product_photo.png", oriPrice: "2,000", price: "400", size: 120, url: "./product.php?v=14" }
    ];
    var $MiddlePhotoproduct = [
        { title: "8x10", image: "./product/product_middlephoto.png", oriPrice: "2,000", price: "790", size: 50, url: "./product.php?v=15" },
        { title: "8x12", image: "./product/product_middlephoto.png", oriPrice: "2,500", price: "900", size: 60, url: "./product.php?v=16" },
        { title: "10x12", image: "./product/product_middlephoto.png", oriPrice: "3,500", price: "1,800", size: 70, url: "./product.php?v=17" },
        { title: "10x14", image: "./product/product_middlephoto.png", oriPrice: "4,000", price: "2,000", size: 80, url: "./product.php?v=18" },
        { title: "11x14", image: "./product/product_middlephoto.png", oriPrice: "5,000", price: "2,500", size: 90, url: "./product.php?v=19" },
        { title: "12x17", image: "./product/product_middlephoto.png", oriPrice: "7,000", price: "3,000", size: 100, url: "./product.php?v=20" }
    ]

    var $productCategory = ["미니사진", "일반사진", "중형사진"];

    // 상품카테고리
    $.each($productCategory, function ($index, $no) {
        $("#productCategory").append("<li></li>");
        $("#productCategory>li").eq($index).text($no);
    });

    $("#productCategory>li").eq(0).css("color", "#515151");
    $("#productCategory>li").eq(0).css("background-color", "#fff668");

    $.fn.productCategoryInit = function () {
        $("#productCategory>li").css("color", "");
        $("#productCategory>li").css("background-color", "");
    }

    // 미니사진 상품출력
    $("#productPrintMiniPhoto>li").append("<ol></ol>");
    for (var $i = 0; $i < $MiniPhotoproduct.length / 2; $i++) {
        $("#productPrintMiniPhoto>li>ol").append("<li></li>");
    }
    $("#productPrintMiniPhoto>li>ol>li").append("<div class='product-img'></div>");
    $("#productPrintMiniPhoto>li>ol>li").append("<div class='product-content'></div>");
    $(".product-content").append("<ul></ul>");
    $(".product-content>ul").append("<li class='product-title'></li><li class='product-price'></li>");
    $.each($MiniPhotoproduct, function ($index, $no) {
        var $id = "productImg" + $index;
        var $jqueryId = "#productImg" + $index;
        var $jqueryIdCss = "#productImg" + $index + ">img";
        $("#productPrintMiniPhoto>li>ol>li>.product-img").eq($index).attr("id", $id);
        $($jqueryId).append("<img src='" + $no.image + "'>");
        $($jqueryIdCss).css("width", $no.size);
        $($jqueryIdCss).css("height", $no.size);
        $($jqueryIdCss).css("margin-left", -(Number($no.size / 2)));
        $($jqueryIdCss).css("margin-top", -(Number($no.size / 2)));

        $(".product-title").eq($index).text($no.title);
        $(".product-price").eq($index).html("<s>" + $no.oriPrice + "원</s> -> " + $no.price + "원");
    });

    // 일반사진 상품출력
    $("#productPrintPhoto>li").append("<ol></ol>");
    for (var $i = 0; $i < $Photoproduct.length / 2; $i++) {
        $("#productPrintPhoto>li>ol").append("<li></li>");
    }
    $("#productPrintPhoto>li>ol>li").append("<div class='product-img'></div>");
    $("#productPrintPhoto>li>ol>li").append("<div class='product-photo-content'></div>");
    $(".product-photo-content").append("<ul></ul>");
    $(".product-photo-content>ul").append("<li class='product-photo-title'></li><li class='product-photo-price'></li>");
    $.each($Photoproduct, function ($index, $no) {
        var $id = "productPhotoImg" + $index;
        var $jqueryId = "#productPhotoImg" + $index;
        var $jqueryIdCss = "#productPhotoImg" + $index + ">img";
        $("#productPrintPhoto>li>ol>li>.product-img").eq($index).attr("id", $id);
        $($jqueryId).append("<img src='" + $no.image + "'>");
        $($jqueryIdCss).css("width", $no.size);
        $($jqueryIdCss).css("height", $no.size);
        $($jqueryIdCss).css("margin-left", -(Number($no.size / 2)));
        $($jqueryIdCss).css("margin-top", -(Number($no.size / 2)));

        $(".product-photo-title").eq($index).text($no.title);
        $(".product-photo-price").eq($index).html("<s>" + $no.oriPrice + "원</s> -> " + $no.price + "원");
    });

    // 중형사진 상품출력
    $("#productPrintMiddlePhoto>li").append("<ol></ol>");
    for (var $i = 0; $i < $MiddlePhotoproduct.length / 2; $i++) {
        $("#productPrintMiddlePhoto>li>ol").append("<li></li>");
    }
    $("#productPrintMiddlePhoto>li>ol>li").append("<div class='product-img'></div>");
    $("#productPrintMiddlePhoto>li>ol>li").append("<div class='product-middle-content'></div>");
    $(".product-middle-content").append("<ul></ul>");
    $(".product-middle-content>ul").append("<li class='product-middle-title'></li><li class='product-middle-price'></li>");
    $.each($MiddlePhotoproduct, function ($index, $no) {
        var $id = "productMiddleImg" + $index;
        var $jqueryId = "#productMiddleImg" + $index;
        var $jqueryIdCss = "#productMiddleImg" + $index + ">img";
        $("#productPrintMiddlePhoto>li>ol>li>.product-img").eq($index).attr("id", $id);
        $($jqueryId).append("<img src='" + $no.image + "'>");
        $($jqueryIdCss).css("width", $no.size);
        $($jqueryIdCss).css("height", $no.size);
        $($jqueryIdCss).css("margin-left", -(Number($no.size / 2)));
        $($jqueryIdCss).css("margin-top", -(Number($no.size / 2)));

        $(".product-middle-title").eq($index).text($no.title);
        $(".product-middle-price").eq($index).html("<s>" + $no.oriPrice + "원</s> -> " + $no.price + "원");
    });

    // 카테고리 클릭
    $("#productCategory>li").click(function () {
        var $index = $(this).index();
        $(".product-print>ul").hide();
        switch ($index) {
            case 0:
                $("#productPrintMiniPhoto").fadeIn(1000);
                $("#productCategoryTitle").text("Mini Photo");
                $(this).productCategoryInit();
                $("#productCategory>li").eq($index).css("color", "#515151");
                $("#productCategory>li").eq($index).css("background-color", "#fff668");
                break;
            case 1:
                $("#productPrintPhoto").fadeIn(1000);
                $("#productCategoryTitle").text("Photo");
                $(this).productCategoryInit();
                $("#productCategory>li").eq($index).css("color", "#515151");
                $("#productCategory>li").eq($index).css("background-color", "#fff668");
                break;
            case 2:
                $("#productPrintMiddlePhoto").fadeIn(1000);
                $("#productCategoryTitle").text("Middle Size Photo");
                $(this).productCategoryInit();
                $("#productCategory>li").eq($index).css("color", "#515151");
                $("#productCategory>li").eq($index).css("background-color", "#fff668");
                break;
            default:
                break;
        }
    });

    $(".product-detail-category>li").click(function () {
        var $index = $(this).index();
        var $idName = "#productDetailPhoto" + ($index + 1);
        var $offset = $($idName).offset();
        $('html, body').animate({
            scrollTop: $offset.top
        }, 400);
    });
});

function orderProduct(char){
   window.open("./orderProduct.html?data="+char,"","width=400px, height=600px");
}