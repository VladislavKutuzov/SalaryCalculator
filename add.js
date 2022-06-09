let text = document.getElementById('text');
let zpDiv = document.getElementById('zp');
let numberSum = 0;
let sum;



function btnFifty() {
    numberSum += 50;
    text.innerText = numberSum;
    zp();
    console.log(text);
}

function btnHundred() {
    numberSum += 100;
    text.innerText = numberSum;
    zp();
    console.log(text);
}

function zp() {
    sum = text.innerText * 0.3;
    zpDiv.innerText = sum;
}
