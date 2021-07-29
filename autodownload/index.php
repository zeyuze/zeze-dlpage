<?php
$ua = $_SERVER['HTTP_USER_AGENT'];
$iua = strtolower($ua);
$dl = "/";
if (strpos($iua, 'android')) {
    $dl = "../apk/zeze_beta_0.0.1+81.apk"; //android
} else if (strpos($iua, 'iphone') || strpos($iua, 'ipad') || strpos($iua, 'ipod')) {
    $dl = "https://testflight.apple.com/join/fnFWitYw"; //ios
}
?>
<html>

<head>
    <title>正在下载择择</title>
    <meta http-equiv="Content-Language" content="zh-CN">
    <meta HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=gb2312">
    <meta http-equiv="refresh" content="1;url=<?php echo $dl; ?>">
</head>

<body>
    正在准备下载...
</body>

</html>