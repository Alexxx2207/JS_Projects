function toggle() {
    let button = document.querySelector("div#accordion>div.head>span.button");

    let textToShow = document.querySelector("div#accordion>div#extra");

    if(button.textContent == 'More') {
        textToShow.style.display = "block";
        button.textContent = 'Less';
    } else if(button.textContent == 'Less') {
        textToShow.style.display = "none";
        button.textContent = 'More';
    }
}