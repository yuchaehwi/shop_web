$(function(){
   var $review = [
      {title:"미니사진 폴라로이드",image:"./review/photoReview1.jpg",text:"생각했던 것 과 같이 인화되서 너무 좋아요!"},
      {title:"일반사진 D4",image:"./review/photoReview2.jpg",text:"일단 제작 기간이 상당히 짧아서 놀랐고 화질도 너무 좋습니다~!"},
      {title:"일반사진 5x7",image:"./review/photoReview3.jpg",text:"3-4번 대량구매로 했었는데 진짜 색감도 너무 예뻐여ㅠㅠ"},
      {title:"중형사진10x14",image:"./review/photoReview4.jpg",text:"11장 구매했는데 모두 맘에 들어요. 폴라특유의 감성이 잘 나왔어요"},
      {title:"포토북",image:"./review/photoReview5.jpg",text:"좋아요. 저렴하고 화질도 좋아요"},
      {title:"중형사진 12x17",image:"./review/photoReview6.jpg",text:"너무 너무 만족합니다. 사진관에서 뽑은 것처럼 잘 나왔어요~~"}
   ];

   var $reviewContentWidth = 280;
   var $reviewContentMargin = 30;
   var $timer;
   $("#reviewContent").css("width",($reviewContentWidth*$review.length) + ($reviewContentMargin*($review.length-1))+"px");

   $.each($review,function($index,$no){
      $("#reviewContent").append("<li></li>");
      $("#reviewContent>li").eq($index).append("<div class='review-img'></div><div class='review-text'></div>");
      $(".review-text").eq($index).append("<ol></ol>");
      $(".review-text>ol").append("<li></li><li></li>");
      $(".review-img").eq($index).css("background-image","url('" + $no.image + "')");
      $(".review-text>ol>li:nth-child(1)").eq($index).text($no.title);
      $(".review-text>ol>li:nth-child(2)").eq($index).text($no.text);
   });

   $.fn.reviewAnimate = function(){
      $timer = setInterval(function(){
         $("#reviewContent").stop().animate({
            "margin-left":-($reviewContentWidth+$reviewContentMargin)+"px"
         },500,function(){
            var $reviewFirst = $("#reviewContent>li").eq(0).clone();
            $("#reviewContent").append($reviewFirst);
            $("#reviewContent>li").eq(0).remove();
            $("#reviewContent").css("margin-left","0px");
         });
      },3000);
   }

   $(".review-content").bind({
      mouseenter : function(){
         $(".review-content > span").fadeIn();
         clearInterval($timer);
      },
      mouseleave : function(){
         $(".review-content > span").fadeOut();
         $(this).reviewAnimate();
      }
   })

   $(".right").click(function(){
      $("#reviewContent").animate({
         "margin-left":-($reviewContentWidth+$reviewContentMargin)+"px"
      },500,function(){
         var $reviewFirst = $("#reviewContent>li").eq(0).clone();
         $("#reviewContent").append($reviewFirst);
         $("#reviewContent>li").eq(0).remove();
         $("#reviewContent").css("margin-left","0px");
      });
      $(this).imageFlip();
   });

   $(".left").click(function(){
      var $reviewLast = $("#reviewContent>li:last").clone();
      $("#reviewContent").prepend($reviewLast);
      $("#reviewContent").css("margin-left",-($reviewContentWidth+$reviewContentMargin)+"px");
      $("#reviewContent").stop().animate({
         "margin-left":"0px"
      },500,function(){
         $("#reviewContent>li:last").remove();
      });
      $(this).imageFlip();
   });

   $.fn.imageFlip = function(){
      $("#reviewContent>li").bind({
         mouseenter : function(){
            var $index = $(this).index();
            $("#reviewContent>li").eq($index).prepend("<div class='turn front'></div>");
            $(".review-img").eq($index).removeClass("back");
            $(".review-img").eq($index).css("opacity","0");
         },
         mouseleave : function(){
            var $index = $(this).index();
            $(".review-img").eq($index).css("opacity","1");
            $(".review-img").eq($index).addClass("back");
            $(".turn").eq($index).css("opacity","0");
            $(".turn").remove();
         }
      });
   }

   $(".review-con>li").click(function(){
       location.href="./reviewShow.html"
   })
   
   $(this).imageFlip();
   $(this).reviewAnimate();
});

