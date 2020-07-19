<meta charset='utf-8'>
<?php
    session_start();
    session_destroy();
    echo ("<script>alert('로그아웃 하셨습니다.'); location.href='./index.html';</script>");
?>