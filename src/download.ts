import YQ from './yq/yq';
const qrCode = require('../node_modules/qrcode-generator/qrcode.js');

window.onload = () => {
    const qr = qrCode(0, 'L');
    qr.addData('http://www.zeyuze.com/autodownload', 'Byte');
    qr.make();
    const qrbox:HTMLDivElement = YQ.divById('qrcode');
    qrbox.innerHTML = qr.createSvgTag();
    const mail = window.atob('emV5dXplMjAyMUAxNjMuY29t');
    const mailLink: HTMLElement = YQ.divById('sevmail');
    mailLink.innerHTML = '<a href="mailto:' + mail + '">' + mail + '</a>';
    const md5link: HTMLElement = YQ.divById('md5');
    md5link.addEventListener('click', () => {
        const md5: string = md5link.innerText;
        const input: HTMLInputElement = YQ.divById('copyinput') as HTMLInputElement;
        input.value = md5;
        input.select();
        document.execCommand('copy');
        alert('MD5 值已复制到剪贴板，可以使用 MD5 校验软件检查下载的 apk 文件。');
    });
};
