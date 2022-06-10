window.onload = () => {
    let rawText = localStorage.getItem('text');
    let rawZpDiv = localStorage.getItem('zpDiv');
    text.innerText = rawText;
    zpDiv.innerText = rawZpDiv;

}


