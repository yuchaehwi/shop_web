$(function () {
   var $number = "";
   var $idCheck = 0;

   // 보안문자
   $.fn.secureNumberInit = function(){
      for (var i = 0; i < 4; i++) {
         var $idName = "#securityNumber" + i;
         var $num = Math.ceil(Math.random() * 9);
         $number = $number + "" + $num;
         $($idName).prepend("<img src='./images/number" + $num + ".png'>");
      }
   }

   $("#btnSecurity").click(function () {
      $number = "";
      $(this).secureNumberInit();
   });

   // 주소찾기
   $("#btnAddress").postcodifyPopUp();

   // 입력데이텨형식체크/변경
   $.fn.inputDataCheck = function(){
      $("#joinTel1").on("keyup", function() {
         $(this).val($(this).val().replace(/[^0-9]/g,""));
      });
      $("#joinTel2").on("keyup", function() {
         $(this).val($(this).val().replace(/[^0-9]/g,""));
      });
      $("#joinTel3").on("keyup", function() {
         $(this).val($(this).val().replace(/[^0-9]/g,""));
      });
      $("#joinBirth").on("keyup", function() {
         $(this).val($(this).val().replace(/[^0-9]/g,""));
      });
   }

   // 아이디 중복
   $("#idCheck").click(function(){
      var $memberCurrentId = $("#joinId").val();
      window.open("./searchid.html?ids="+$memberCurrentId,"pop","width=400px,height=400px,toolbar=no,resizable=no,fullscreen=no,scrollbars=no,menubar=no,location=no,status=no");
      $idCheck++;
      return false;
   });

   

   // 입력값 확인
   $("#btnMemberjoin").click(function () {
      var $id = $("#joinId").val();
      var $pass = $("#joinPass").val();
      var $passCheck = $("#joinPassCheck").val();
      var $name = $("#joinName").val();
      var $email = $("#joinEmail").val();
      var $tel1 = $("#joinTel1").val();
      var $tel2 = $("#joinTel2").val();
      var $tel3 = $("#joinTel3").val();
      var $zipcode = $("#joinZipcode").val();
      var $addr1 = $("#joinAddr1").val();
      var $addr2 = $("#joinAddr2").val();
      var $sex1 = $("#female").is(":checked");
      var $sex2 = $("#male").is(":checked");
      var $birth = $("#joinBirth").val();
      var $secureChar = $("#joinSecureChar").val();
      var $securityPolicyCheck1 = $("#securityPolicyCheck1").is(":checked");
      var $securityPolicyCheck2 = $("#securityPolicyCheck2").is(":checked");

      var $emailCheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
   
      if ($id == "" || $id.length < 5 || $id.length > 20) {
         alert("아이디를 5자 이상 20자 이하로 입력해주세요");
         $("#joinId").focus();
         return false;
      } else if ($pass == "" || $pass.length < 5) {
         alert("비밀번호를 입력해주세요");
         $("#joinPass").focus();
         return false;
      } else if ($passCheck == "" || $pass != $passCheck) {
         alert("알맞은 비밀번호를 입력해주세요");
         $("#joinPassCheck").focus();
         return false;
      } else if ($name == "") {
         alert("이름을 입력해주세요");
         $("#joinName").focus();
         return false;
      } else if ($email == "" || $emailCheck.test($email)==false) {
         alert("올바른 이메일을 입력해주세요");
         $("#joinEmail").focus();
         return false;
      } else if ($tel1 == "" || $tel2 == "" || $tel3 == "" || $tel1.length<3 || $tel2.length<4 || $tel3.length<4) {
         alert("올바른 휴대폰번호를 입력해주세요");
         $("#joinTel1").focus();
         return false;
      } else if ($zipcode == "" || $addr1 == "") {
         alert("주소찾기 버튼을 이용해 주소를 입력해주세요");
         return false;
      } else if ($addr2 == "") {
         alert("상세주소를 입력해주세요");
         $("#joinAddr2").focus();
         return false;
      } else if ($sex1 == false && $sex2 == false) {
         alert("성별을 선택해주세요");
         return false;
      } else if ($birth == "" || $birth.length<6) {
         alert("생년월일을 입력해주세요");
         $("#joinBirth").focus();
         return false;
      } else if ($secureChar == "" || $secureChar!=$number) {
         alert("올바른 보안문자를 입력해주세요");
         $("#joinSecureChar").focus();
         return false;
      } else if($securityPolicyCheck1==false){
         alert("이용약관동의에 체크해주세요");
         return false;
      } else if($securityPolicyCheck2==false){
         alert("개인정보 수집 및 이용에 대한 안내에 체크해주세요");
         return false;
      } else if($idCheck == 0){
         alert("아이디 중복 체크를 해주세요");
         return false;
      } else if($idCheck != 0){
         var $idCheckChar = $("#idCheckHidden").val();
         if($idCheckChar == "idCheckUseOk" ){
            MemberjoinF.submit();
         } else {
            alert("아이디 중복 체크를 해주세요");
            return false;
         }
      }else {
         MemberjoinF.submit();
      }
   });

   $(this).secureNumberInit();
   $(this).inputDataCheck();
});

   // 이용약관
   function txtRead1() {
      var files = new XMLHttpRequest();
      files.open("GET", "./text/security_public1.txt", true);
      files.onreadystatechange = function () {
         if (files.readyState == XMLHttpRequest.DONE && files.status == 200) {
            securityPolicyContent1.innerHTML = files.responseText;
         }
      }
      files.send();
   }

   function txtRead2() {
      var files = new XMLHttpRequest();
      files.open("GET", "./text/security_public2.txt", true);
      files.onreadystatechange = function () {
         if (files.readyState == XMLHttpRequest.DONE && files.status == 200) {
            securityPolicyContent2.innerHTML = files.responseText;
         }
      }
      files.send();
   }



txtRead1();
txtRead2();