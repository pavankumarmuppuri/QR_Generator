function generateQR() {
    var text = document.getElementById('text').value;

    if (text.trim() === '') {
        alert('Please enter text to generate QR code.');
        return;
    }

    var qr = new QRCode(document.getElementById('qrcode'), {
        text: text,
        width: 128,
        height: 128
    });
}
