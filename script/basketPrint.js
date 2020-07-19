$(function(){
    var $totalPrice=0;
    var $basketTotalPrice = 0;
    var $parsedBasket = JSON.parse(getCookie("moveBasket").substr(0));
    console.log($parsedBasket.length);
    if($parsedBasket!=null){
        for(var i=0;i<$parsedBasket.length;i++){
            $("#basketContent").append("<ul class='basket-contents'></ul>");
            $("#basketContent>ul").eq(i+1).append("<li style='width:50px'><input type='checkbox' class='basketCheck' checked></li><li class='basketTitle'></li><li class='basketOption'></li><li class='basketNum'></li><li class='basketPrice'></li>")
            $(".basketTitle").eq(i).text($parsedBasket[i].title);
            $(".basketOption").eq(i).text($parsedBasket[i].option);
            $(".basketNum").eq(i).text($parsedBasket[i].num);
            $(".basketPrice").eq(i).text($parsedBasket[i].price+"원");

            var inputCheck = $(".basketCheck").eq(i).is(":checked");
            if(inputCheck == true){
                $totalPrice += Number($parsedBasket[i].price);
            }
            $(".basket-total>ul>li").eq(1).text("장바구니 소계 : " + $totalPrice.toLocaleString() + "원");
            $(".basket-total>ul>li").eq(2).text("주문 총합 : " + $totalPrice.toLocaleString() + "원");
        }
    }

    // 장바구니 체크
    $(".basketCheck").change(function(){
        var $index = $(".basketCheck").index(this);
        if($(".basketCheck").eq($index).is(":checked")==false){
            $basketTotalPrice = $totalPrice - $parsedBasket[$index].price;
            $(".basket-total>ul>li").eq(2).text("주문 총합 : " + $basketTotalPrice.toLocaleString() + "원");
        } else {
            $basketTotalPrice = $basketTotalPrice + Number($parsedBasket[$index].price);
            $(".basket-total>ul>li").eq(2).text("주문 총합 : " + $basketTotalPrice.toLocaleString() + "원");
        }
    });

    //결제자정보와 동일
    $("#payerSame").change(function(){
        if($("#payerSame").is(":checked")==true){
            $("#orderName").val($("#payerName").val());
            $("#orderTel").val($("#payerTel").val());
            $("#orderEmail").val($("#payerEmail").val());
        } else {
            $("#orderName").val("");
            $("#orderTel").val("");
            $("#orderEmail").val("");
        }
    });

    //주소
    $("#btnAddress").postcodifyPopUp();

    $("#payBtn").click(function(){
        var $payerName = $("#payerName").val();
        var $payerTel = $("#payerTel").val();
        var $orderName = $("#orderName").val();
        var $orderTel = $("#orderTel").val();
        var $joinZipcode = $("#orderTel").val();
        var $joinAddr1 = $("#orderTel").val();
        var $joinAddr2 = $("#orderTel").val();
        var $payerEmail = $("#payerEmail").val();
        var $orderEmail = $("#orderEmail").val();
        var $emailCheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if($payerName=="" || $payerTel=="" || $orderName=="" || $orderTel=="" || $joinZipcode=="" || $joinAddr1=="" || $joinAddr2=="" || $payerEmail=="" || $orderEmail==""){
            alert("모든 항목을 입력해주세요");
        } else if($emailCheck.test($payerEmail)==false || $emailCheck.test($orderEmail)==false){
            alert("이메일 형식을 맞추어 입력해주세요");
            return false;
        } else {
            alert("결제");
            location.href="./index.html";
        }
    })

    $("#bank").click(function(){
        if($("#bank").is(":checked")==true){
            $("#bankInfo").slideDown(300);
        }
    });

    $("#card").click(function(){
        $("#bankInfo").slideUp(300);
    });

    $("#account").click(function(){
        $("#bankInfo").slideUp(300);
    })

    $("#payReset").click(function(){
        alert("결제를 취소합니다.");
        location.href="./index.html";
    });
})