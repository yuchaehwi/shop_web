$(function(){
    var selectReview = location.href.replace("http://whi1022.dothome.co.kr/portfolio/shop/reviewShow.html?category=","");

    var reviewArray = ["사진인화","포토북","달력"];
    var reviewCategory1 = [
        {title:"너무 만족해요!",content:"좋아요. 저렴하고 화질도 좋아요."},
        {title:"인화 화질이 좋아요",content:"3~4번 대량구매했는데 화질도 좋고 너무 마음에 들어요!"},
        {title:"다음에 또 이용할게요~",content:"11장 구매했는데 전부 마음에 들어요~"}
    ]
    var reviewCategory2 = [
        {title:"너무 만족해요!",content:"좋아요. 저렴하고 화질도 좋아요."},
        {title:"인화 화질이 좋아요",content:"3~4번 대량구매했는데 화질도 좋고 너무 마음에 들어요!"},
        {title:"다음에 또 이용할게요~",content:"11장 구매했는데 전부 마음에 들어요~"},
        {title:"너무 만족해요!",content:"좋아요. 저렴하고 화질도 좋아요."}
    ]
    var reviewCategory3 = [
        {title:"너무 만족해요!",content:"좋아요. 저렴하고 화질도 좋아요."},
        {title:"인화 화질이 좋아요",content:"3~4번 대량구매했는데 화질도 좋고 너무 마음에 들어요!"},
        {title:"다음에 또 이용할게요~",content:"11장 구매했는데 전부 마음에 들어요~"},
        {title:"너무 만족해요!",content:"좋아요. 저렴하고 화질도 좋아요."},
        {title:"너무 만족해요!",content:"좋아요. 저렴하고 화질도 좋아요."}
    ]

    reviewArray.map((v,i)=>{
        $(".faq-nav>ul").append("<li id='reviewCategory" + i + "'></li>");
        $(".faq-nav>ul>li").eq(i).text(v);
    })

    $(".faq-select-nav").text("Cheecle Photo " + reviewArray[0] + " Review");
    $.each(reviewCategory1,function(index,no){
        $(".faq-select-content>ul").append("<li></li>");
        $(".faq-select-content>ul>li").eq(index).append("<span><img src='./review/photoReview"+(index+1)+".jpg'></span>");
        $(".faq-select-content>ul>li").eq(index).append("<span><ol class='faq-section' id='faqSection0" + index + "'></ol></span>");
        $(".faq-section").eq(index).append("<li id='faqSectionLi" + index + "'><b></b></li>");
        $(".faq-section").eq(index).append("<li id='faqSectionContent" + index + "'></li>");
        $("#faqSectionLi"+index+">b").text(reviewCategory1[index].title);
        var faqContent = reviewCategory1[index].content.replace(/(?:\r\n|\r|\n)/g, "<br />");
        $("#faqSectionContent"+index).html(faqContent);
    })

    $(".faq-nav>ul>li").click(function(){
        var num = $(this).index();
        var faqSelectName = eval("reviewCategory"+(num+1));
        $(".faq-select-content>ul>li").remove();
        $.each(faqSelectName,function(index,no){
            $(".faq-select-content>ul").append("<li></li>");
            $(".faq-select-content>ul>li").eq(index).append("<span><img src='./review/photoReview"+(index+1)+".jpg'></span>");
            $(".faq-select-content>ul>li").eq(index).append("<span><ol class='faq-section' id='faqSection0" + index + "'></ol></span>");
            $(".faq-section").eq(index).append("<li id='faqSectionLi" + index + "'><b></b></li>");
            $(".faq-section").eq(index).append("<li id='faqSectionContent" + index + "'></li>");
            $("#faqSectionLi"+index+">b").text(faqSelectName[index].title);
            var faqContent = faqSelectName[index].content.replace(/(?:\r\n|\r|\n)/g, "<br />");
            $("#faqSectionContent"+index).html(faqContent);
        })
        $(".faq-nav > ul > li").css("border","1px solid #f1f1f1");
        $(".faq-nav > ul > li").css("border-bottom","0px");
        $(".faq-nav > ul > li").eq(num).css("border","1px solid #000");
        $(".faq-nav > ul > li").eq(num).css("border-bottom","0px");

        $(".faq-select-nav").text("Cheecle Photo " + reviewArray[num] + " Review");
    });

    if(selectReview=="photobook"){
        $(".faq-select-content>ul>li").remove();
        $.each(reviewCategory2,function(index,no){
            $(".faq-select-content>ul").append("<li></li>");
            $(".faq-select-content>ul>li").eq(index).append("<span><img src='./review/photoReview"+(index+1)+".jpg'></span>");
            $(".faq-select-content>ul>li").eq(index).append("<span><ol class='faq-section' id='faqSection0" + index + "'></ol></span>");
            $(".faq-section").eq(index).append("<li id='faqSectionLi" + index + "'><b></b></li>");
            $(".faq-section").eq(index).append("<li id='faqSectionContent" + index + "'></li>");
            $("#faqSectionLi"+index+">b").text(reviewCategory2[index].title);
            var faqContent = reviewCategory2[index].content.replace(/(?:\r\n|\r|\n)/g, "<br />");
            $("#faqSectionContent"+index).html(faqContent);
        })
        $(".faq-nav > ul > li").css("border","1px solid #f1f1f1");
        $(".faq-nav > ul > li").css("border-bottom","0px");
        $(".faq-nav > ul > li").eq(1).css("border","1px solid #000");
        $(".faq-nav > ul > li").eq(1).css("border-bottom","0px");

        $(".faq-select-nav").text("Cheecle Photo " + reviewArray[1] + " Review");
    } else if(selectReview=="calendar") {
        $(".faq-select-content>ul>li").remove();
        $.each(reviewCategory3,function(index,no){
            $(".faq-select-content>ul").append("<li></li>");
            $(".faq-select-content>ul>li").eq(index).append("<span><img src='./review/photoReview"+(index+1)+".jpg'></span>");
            $(".faq-select-content>ul>li").eq(index).append("<span><ol class='faq-section' id='faqSection0" + index + "'></ol></span>");
            $(".faq-section").eq(index).append("<li id='faqSectionLi" + index + "'><b></b></li>");
            $(".faq-section").eq(index).append("<li id='faqSectionContent" + index + "'></li>");
            $("#faqSectionLi"+index+">b").text(reviewCategory3[index].title);
            var faqContent = reviewCategory3[index].content.replace(/(?:\r\n|\r|\n)/g, "<br />");
            $("#faqSectionContent"+index).html(faqContent);
        })
        $(".faq-nav > ul > li").css("border","1px solid #f1f1f1");
        $(".faq-nav > ul > li").css("border-bottom","0px");
        $(".faq-nav > ul > li").eq(2).css("border","1px solid #000");
        $(".faq-nav > ul > li").eq(2).css("border-bottom","0px");

        $(".faq-select-nav").text("Cheecle Photo " + reviewArray[2] + " Review");
    }
});