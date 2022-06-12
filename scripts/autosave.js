window.onload = () => {
    let rawText = localStorage.getItem('text');
    let rawZpDiv = localStorage.getItem('zpDiv');
    let rawNumber = localStorage.getItem('number');
    let rawHistory = localStorage.getItem('history');
    text.innerText = rawText;
    zpDiv.innerText = rawZpDiv;
    history.innerHTML = rawHistory;
    number = Number(rawNumber);
}


