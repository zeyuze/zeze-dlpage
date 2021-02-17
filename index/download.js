var qrcode = new QRCode(document.getElementById("qrcode"), {
	text: "http://www.zeyuze.com/autodownload",
	width: 128,
	height: 128,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.L
});

let mail = window.atob('emV5dXplMjAyMUAxNjMuY29t');
document.getElementById("sevmail").innerHTML = '<a href="mailto:'+mail+'">'+mail+'</a>';

function copymd5() {
    const md5 = document.getElementById("md5").innerText;
    const input = document.getElementById("copyinput");
    input.value = md5;
    input.select();
    document.execCommand("copy");
    alert("MD5 值已复制到剪贴板，可以使用 MD5 校验软件检查下载的 apk 文件。");
}