let text = document.getElementById('text');
let zpDiv = document.getElementById('zp');
let sum;
let historyLine = document.querySelector('.history__line');
let history = document.querySelector('.history');
let now = new Date().toLocaleTimeString();
let bool = true;
text.innerHTML = 0;



function btnFiftyMinus() {
    let number = Number(text.innerHTML) - 50;
    text.innerHTML = number;
    console.log( number)
    console.log( text.innerHTML);
    console.log('-50');
    zp();
    history.innerHTML = '<div class="history__list"><div class="red-text">' + now + '</div><div class="history__line red-text">-50</div></div>' + history.innerHTML;
    // console.log(now);
}

function btnFifty() {
    let number = Number(text.innerHTML) + 50;
    text.innerHTML = number;
    zp();
    console.log('+50');
    history.innerHTML = '<div class="history__list"><div class="green-text">' + now + '</div><div class="history__line">+50</div></div>' + history.innerHTML;
    console.log(now);


}


function btnHundred() {
    let number = Number(text.innerHTML) + 100;
    text.innerHTML = number;
    zp();
    console.log('+100');
    history.innerHTML = '<div class="history__list"><div class="green-text">' + now + '</div><div class="history__line">+100</div></div>' + history.innerHTML;
    console.log(now);
}

function zp() {
    sum = text.innerText * 0.3;
    zpDiv.innerText = sum;
    localStorage.setItem('zpDiv', zpDiv.innerText);
    localStorage.setItem('text', text.innerText);
    return zpDiv;
}