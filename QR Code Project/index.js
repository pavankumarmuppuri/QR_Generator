let qrCode;

function generateQR() {
    var text = document.getElementById('text').value;

    if (text.trim() === '') {
        alert('Please enter text to generate QR code.');
        return;
    }

    qrCode = new QRCode(document.getElementById('qrcode'), {
        text: text,
        width: 128,
        height: 128
    });

    document.getElementById('downloadButton').style.display = 'block';
}

function downloadQR() {
    if (!qrCode) {
        alert('Please generate a QR code first.');
        return;
    }

    var canvas = document.querySelector('canvas');
    var url = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');

    var link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'qrcode.png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
