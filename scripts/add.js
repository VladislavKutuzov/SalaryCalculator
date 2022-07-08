const text = document.getElementById('text');
const zpDiv = document.getElementById('zp');
let sum;
let historyLine = document.querySelector('.history__line');
const history = document.querySelector('.history');
let bool = true;
let number = 0;
let cloneText = text;

function btnFiftyMinus() {  // Расчет -50
    number -= 50;
    text.innerHTML = number;
    console.log('-50');

    // добавление истории расчета
    history.innerHTML =
    `
    <div class="history__list">
        <div class="red-text">` + new Date().toLocaleTimeString() + `</div>
        <div class="history__line red-text">-50</div>
        <div class="history__sum red-text">` + cloneText.innerText + `</div>
    </div>
    `
     + history.innerHTML;
    zp();
}


function btnFifty() {  // Расчет +50
    number += 50;
    text.innerHTML = number;
    console.log('+50');

    // добавление истории расчета
    history.innerHTML =
    `
    <div class="history__list">
        <div class="green-text">` + new Date().toLocaleTimeString() + `</div>
        <div class="history__line">+50</div>
        <div class="history__sum green-text">` + cloneText.innerText + `</div>
    </div>
    `
     + history.innerHTML;
    zp();
}


function btnHundred() {  // Расчет +100
    number += 100;
    text.innerHTML = number;
    console.log('+100');

    // добавление истории расчета
    history.innerHTML =
    `
    <div class="history__list">
        <div class="green-text">` + new Date().toLocaleTimeString() + `</div>
        <div class="history__line">+100</div>
        <div class="history__sum green-text">` + cloneText.innerText + `</div>
    </div>
    `
     + history.innerHTML;
    zp();
}


function zp() { // Расчет зп от 30% дохода
    sum = text.innerText * 0.3;
    zpDiv.innerText = sum;

    // создаем объекы для автосхранения
    localStorage.setItem('zpDiv', zpDiv.innerText);
    localStorage.setItem('text', text.innerText);
    localStorage.setItem('number', number);
    localStorage.setItem('history', history.innerHTML);
    localStorage.setItem('historySum', cloneText.innerText);
    return number;
}


window.onload = () => { // Используем значения для автосохранения элементов страницы
    let rawText = localStorage.getItem('text');
    let rawZpDiv = localStorage.getItem('zpDiv');
    let rawNumber = localStorage.getItem('number');
    let rawHistory = localStorage.getItem('history');
    let rawHistorySum = localStorage.getItem('historySum');
    text.innerText = rawText;
    zpDiv.innerText = rawZpDiv;
    history.innerHTML = rawHistory;
    number = Number(rawNumber);
    cloneText.innerText = rawHistorySum;
}