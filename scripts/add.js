const text = document.getElementById('text');
const zpDiv = document.getElementById('zp');
let sum;
let historyLine = document.querySelector('.history__line');
const history = document.querySelector('.history');
let bool = true;
let number = 0;




function btnFiftyMinus() {
    number -= 50;
    text.innerHTML = number;
    console.log('-50');
    zp();

    history.innerHTML = '<div class="history__list"><div class="red-text">' + new Date().toLocaleTimeString() + '</div><div class="history__line red-text">-50</div></div>' + history.innerHTML;

}

function btnFifty() {
    number += 50;
    text.innerHTML = number;
    zp();
    console.log('+50');

    history.innerHTML = '<div class="history__list"><div class="green-text">' + new Date().toLocaleTimeString() + '</div><div class="history__line">+50</div></div>' + history.innerHTML;



}


function btnHundred() {
    number += 100;
    text.innerHTML = number;
    zp();
    console.log('+100');

    history.innerHTML = '<div class="history__list"><div class="green-text">' + new Date().toLocaleTimeString() + '</div><div class="history__line">+100</div></div>' + history.innerHTML;

}

function zp() {
    sum = text.innerText * 0.3;
    zpDiv.innerText = sum;
    localStorage.setItem('zpDiv', zpDiv.innerText);
    localStorage.setItem('text', text.innerText);
    localStorage.setItem('number', number);
    localStorage.setItem('history', history.innerHTML);
    return number;
}









/* // Сброс значения если уже новый день
let data = new Date().setHours(18,47);
// const newData =  new Date().setHours(18,47)
console.log(data);
if (data = newData ) {
    localStorage.clear();
} */