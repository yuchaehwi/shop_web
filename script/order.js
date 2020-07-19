$(function () {
    var urlName = window.location.href;
    urlName = urlName.replace("http://whi1022.dothome.co.kr/shopingMall/shop/orderProduct.html?data=", "");

    var photoOrder1 = [
        "미니사진",
        { title: "미니4x6", price: "40" },
        { title: "미니5x7", price: "55" },
        { title: "폴라로이드", price: "1090" },
        { title: "미니5x8", price: "75" },
        { title: "정사각형 폴라로이드", price: "2090" },
        { title: "3x4", price: "70" }
    ];
    var photoOrder2 = [
        "일반사진",
        { title: "3x5", price: "75" },
        { title: "D3", price: "79" },
        { title: "D4", price: "97" },
        { title: "4x6", price: "97" },
        { title: "D5", price: "180" },
        { title: "5x7", price: "195" },
        { title: "6x8", price: "350" },
        { title: "6x9", price: "400" }
    ];
    var photoOrder3 = [
        "중형사진",
        { title: "8x10", price: "790" },
        { title: "9x12", price: "900" },
        { title: "10x12", price: "1800" },
        { title: "10x14", price: "2000" },
        { title: "11x14", price: "2500" },
        { title: "12x17", price: "3000" }
    ];
    var photoOrder4 = [
        "정사각형 포토북",
        { title: "6x6", price: "8770" },
        { title: "8x8", price: "14370" },
        { title: "10x10", price: "25970" },
        { title: "12x12", price: "30570" }
    ];
    var photoOrder5 = [
        "와이드형 포토북",
        { title: "A5와이드", price: "9770" },
        { title: "B5와이드", price: "16770" }
    ];
    var photoOrder6 = [
        "세로형 포토북",
        { title: "A5", price: "9370" },
        { title: "A4", price: "15570" }
    ];
    var photoOrder7 = [
        "달력",
        { title: "탁상용 미니 단면 캘린더", price: "3500" },
        { title: "벽걸이달력", price: "12900" },
        { title: "탁상용 단면 캘린더", price: "8300" },
        { title: "탁상용 양면 캘린더(laser)", price: "9900" },
        { title: "탁상용 양면 캘린더(indigo)", price: "12600" }
    ];

    for (var i = 1; i < 100; i++) {
        $("#orderNum>select").append("<option value='" + i + "'>" + i + "</option>");
    }

    if (urlName == "photo1") {
        $("#orderTitle").text(photoOrder1[0]);
        for (var i = 0; i < photoOrder1.length - 1; i++) {
            $("#orderSelect>select").append("<option value='" + photoOrder1[i + 1].price + "'></option>");
            $("#orderSelect>select>option").eq(i).text(photoOrder1[i + 1].title);
        }
        $("#orderPrice").text("가격 : " + photoOrder1[1].price.toLocaleString() + "원");
    } else if (urlName == "photo2") {
        $("#orderTitle").text(photoOrder2[0]);
        for (var i = 0; i < photoOrder2.length - 1; i++) {
            $("#orderSelect>select").append("<option value='" + photoOrder2[i + 1].price + "'></option>");
            $("#orderSelect>select>option").eq(i).text(photoOrder2[i + 1].title);
        }
        $("#orderPrice").text("가격 : " + photoOrder2[1].price.toLocaleString() + "원");
    } else if (urlName == "photo3") {
        $("#orderTitle").text(photoOrder3[0]);
        for (var i = 0; i < photoOrder3.length - 1; i++) {
            $("#orderSelect>select").append("<option value='" + photoOrder3[i + 1].price + "'></option>");
            $("#orderSelect>select>option").eq(i).text(photoOrder3[i + 1].title);
        }
        $("#orderPrice").text("가격 : " + photoOrder3[1].price.toLocaleString() + "원");
    } else if (urlName == "photo4") {
        $("#orderTitle").text(photoOrder4[0]);
        for (var i = 0; i < photoOrder4.length - 1; i++) {
            $("#orderSelect>select").append("<option value='" + photoOrder4[i + 1].price + "'></option>");
            $("#orderSelect>select>option").eq(i).text(photoOrder4[i + 1].title);
        }
        $("#orderPrice").text("가격 : " + photoOrder4[1].price.toLocaleString() + "원");
    } else if (urlName == "photo5") {
        $("#orderTitle").text(photoOrder5[0]);
        for (var i = 0; i < photoOrder5.length - 1; i++) {
            $("#orderSelect>select").append("<option value='" + photoOrder5[i + 1].price + "'></option>");
            $("#orderSelect>select>option").eq(i).text(photoOrder5[i + 1].title);
        }
        $("#orderPrice").text("가격 : " + photoOrder5[1].price.toLocaleString() + "원");
    } else if (urlName == "photo6") {
        $("#orderTitle").text(photoOrder6[0]);
        for (var i = 0; i < photoOrder6.length - 1; i++) {
            $("#orderSelect>select").append("<option value='" + photoOrder6[i + 1].price + "'></option>");
            $("#orderSelect>select>option").eq(i).text(photoOrder6[i + 1].title);
        }
        $("#orderPrice").text("가격 : " + photoOrder6[1].price.toLocaleString() + "원");
    } else if (urlName == "photo7") {
        $("#orderTitle").text(photoOrder7[0]);
        for (var i = 0; i < photoOrder7.length - 1; i++) {
            $("#orderSelect>select").append("<option value='" + photoOrder7[i + 1].price + "'></option>");
            $("#orderSelect>select>option").eq(i).text(photoOrder7[i + 1].title);
        }
        $("#orderPrice").text("가격 : " + photoOrder7[1].price.toLocaleString() + "원");
    }
})

function changeOption(option) {
    orderPrice.innerText = "가격 : " + option + "원";
    changeNum(orderOptionNum.options[orderOptionNum.selectedIndex].value);
}

function changeNum(num) {
    var selectOptionPrice = orderOptionSelect.options[orderOptionSelect.selectedIndex].value;
    orderPrice.innerText = "가격 : " + (selectOptionPrice * num).toLocaleString() + "원";
}