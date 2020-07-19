// 장바구니 물건 cookie 넣기
var basketArray = [];

function getCookie(cookieName) {
    var value = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)');
    return value ? value[2] : "";
}

var aaa = (getCookie("moveBasket").substr(0)).replace("[","");
aaa = aaa.replace("]","");
basketArray.push(JSON.parse(aaa));

function openBasket(idName) {
    var basketPrice = orderPrice.innerText.replace("가격 : ", "");
    basketPrice = basketPrice.replace("원", "");
    basketTitle = orderTitle.innerText;
    basketOption = orderOptionSelect.options[orderOptionSelect.selectedIndex].innerText;
    basketNum = orderOptionNum.options[orderOptionNum.selectedIndex].innerText;
    var basketObj = {
        title: basketTitle,
        option: basketOption,
        num: basketNum,
        price: basketPrice
    };
    basketArray.push(basketObj);
    console.log(basketArray);
    setcookie(idName, JSON.stringify(basketArray), 1);
    self.close();
    opener.location.href ="./basket.html";
}

