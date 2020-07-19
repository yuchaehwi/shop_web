$(function(){
    var faqArray = ["결제관련","배송관련","사진주문","사진품질","슬림북","압축앨범","포토북","회원정보"];
    var faqCategory1 = [
        {title:"세금계산서나 현금영수증은 발행해 주나요?",content:"세금계산서 : 주문 시 사업자관련 정보를 적어주시면 세금계산서를 발행 해 드립니다.\n현금영수증 : 실시간 계좌이체를 이용해 결제를 하시는 경우에는 결제 시 플러그인 창에서 현금영수증을 신청할 수 있습니다."},
        {title:"주문 취소는 어떻게 하나요?",content:"결제가 완료되지 않은 경우에는 고객센터(070-7687-1111)로 연락주시면 주문취소 가능합니다.\n무통장 입금의 경우 주문 후 일주일 이내 입금하지 않으시면 주문이 자동으로 취소됩니다."},
        {title:"결제방법엔 어떤 것들이 있나요?",content:"결제방법에는 신용카드, 무통장입금, 실시간 계좌이체가 있습니다."}
    ]
    var faqCategory2 = [
        {title:"포토북 배송기간은 어떻게되나요?",content:"배송소요시간은 주문일로부터 1~2일(휴일제외)소요됩니다."},
        {title:"배송비는 얼마인가요?",content:"사진인화의 경우 40,000원 미만은 배송비 3,000원이고 40,000원 이상은 무료배송됩니다."}
    ]
    var faqCategory3 = [
        {title:"사진밝기 조정할 수 있나요?",content:"치클포토프로그램을 통해 고객님들이 직접 조정할 수 있지만 수정이 번거로우신 분들을 위해 배송문구를 남겨주시면 직접 보정해드립니다."},
        {title:"사진에 날짜를 넣을 수 있나요?",content:"치클포토프로그램의 사진편집메뉴에서 날짜는 물론, 사진을 보정하시거나 다른 문구를 삽입하실 수 있습니다."},
        {title:"결제방법엔 어떤 것들이 있나요?",content:"결제방법에는 신용카드, 무통장입금, 실시간 계좌이체가 있습니다."}
    ]
    var faqCategory4 = [
        {title:"세금계산서나 현금영수증은 발행해 주나요?",content:"세금계산서 : 주문 시 사업자관련 정보를 적어주시면 세금계산서를 발행 해 드립니다.\n현금영수증 : 실시간 계좌이체를 이용해 결제를 하시는 경우에는 결제 시 플러그인 창에서 현금영수증을 신청할 수 있습니다."},
        {title:"주문 취소는 어떻게 하나요?",content:"결제가 완료되지 않은 경우에는 고객센터(070-7687-1111)로 연락주시면 주문취소 가능합니다.\n무통장 입금의 경우 주문 후 일주일 이내 입금하지 않으시면 주문이 자동으로 취소됩니다."},
        {title:"인화사이즈의 D는 무엇인가요?",content:"일반적으로 필름 카메라로 찍은 사진의 가로x세로 비율은 3:2이나,\n디지털카메라로 찍은 사진은 가로x세로 4:3입니다."},
        {title:"사진을 올렸는데 인화부적합이라 나와요",content:"저품질 사진의 인화는 미니 사진을 통해서만 출력 가능합니다"}
    ]
    var faqCategory5 = [
        {title:"슬림북 커버가 궁금해요",content:"슬림북 커버는 오리지날, 하드커버, 캔버스커버 3가지 종류가 있습니다."},
        {title:"사진은 어떻게 추가하나요?",content:"편집기에서 직접 사진을 추가하거나 탐색기를 통해 사진을 직접 바로 추가할 수 있습니다."}
    ]
    var faqCategory6 = [
        {title:"앨범 커버가 궁금해요",content:"모서리르 각지게 또는 둥그렇게 하는 2가지 종류가 있습니다."},
        {title:"앨범 내지가 어떻게 다른가요?",content:"일반내지 : 앨범 1장의 두께가 약 1.6mm입니다. 두께가 있어 중후한 느낌이 듭니다.\n슬림내지 : 앨범 1장의 두께가 약 1mm입니다. 많은 페이지를 삽입하기에 좋습니다."}
    ]
    var faqCategory7 = [
        {title:"앨범 커버가 궁금해요",content:"모서리르 각지게 또는 둥그렇게 하는 2가지 종류가 있습니다."},
        {title:"앨범 내지가 어떻게 다른가요?",content:"일반내지 : 앨범 1장의 두께가 약 1.6mm입니다. 두께가 있어 중후한 느낌이 듭니다.\n슬림내지 : 앨범 1장의 두께가 약 1mm입니다. 많은 페이지를 삽입하기에 좋습니다."}
    ]
    var faqCategory8 = [
        {title:"회원가입/정보수정은 어디에서 하나요?",content:"최상단 메뉴를 통해 회원가입, 정보수정을 할 수 있습니다."},
    ]
    $.each(faqArray,function(index,no){
        $(".faq-nav>ul").append("<li id='faqCategory" + index + "'></li>");
        $(".faq-nav>ul>li").eq(index).text(no);
    })
    $(".faq-select-nav").text("Cheecle Photo " + faqArray[0] + " FAQ");
    $.each(faqCategory1,function(index,no){
        $(".faq-select-content>ul").append("<li></li>");
        $(".faq-select-content>ul>li").eq(index).append("<span>0"+(index+1)+"</span>");
        $(".faq-select-content>ul>li").eq(index).append("<span><ol class='faq-section' id='faqSection0" + index + "'></ol></span>");
        $(".faq-section").eq(index).append("<li id='faqSectionLi" + index + "'><b></b></li>");
        $(".faq-section").eq(index).append("<li id='faqSectionContent" + index + "'></li>");
        $("#faqSectionLi"+index+">b").text(faqCategory1[index].title);
        var faqContent = faqCategory1[index].content.replace(/(?:\r\n|\r|\n)/g, "<br />");
        $("#faqSectionContent"+index).html(faqContent);
    })

    $(".faq-nav>ul>li").click(function(){
        var num = $(this).index();
        var faqSelectName = eval("faqCategory"+(num+1));
        $(".faq-select-content>ul>li").remove();
        $.each(faqSelectName,function(index,no){
            $(".faq-select-content>ul").append("<li></li>");
            $(".faq-select-content>ul>li").eq(index).append("<span>0"+(index+1)+"</span>");
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

        $(".faq-select-nav").text("Cheecle Photo " + faqArray[num] + " FAQ");
    });
});


function contactRegister(){
    alert("1:1문의가 등록되었습니다.\n문의답변은 메일을 통해 받아보실 수 있습니다.");
}