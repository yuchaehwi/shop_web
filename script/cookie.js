function getCookie(cookieName) {
   var value = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)');
   return value ? value[2] : "";
}
function popCheck() {
   if (getCookie("TopAdsCloseBtn") == "Y") {
      $(".top-ads").css("display", "none");
   }
}

function popupShowCheck(){
   if (getCookie("popup") == "Y") {
      $("#popup").css("display", "none");
   }
}

popCheck();
popupShowCheck();