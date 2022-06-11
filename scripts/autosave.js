window.onload = () => {
    let rawText = localStorage.getItem('text');
    let rawZpDiv = localStorage.getItem('zpDiv');
    let rawNumber = localStorage.getItem('number');
    text.innerText = rawText;
    zpDiv.innerText = rawZpDiv;
    number = Number(rawNumber);
}


