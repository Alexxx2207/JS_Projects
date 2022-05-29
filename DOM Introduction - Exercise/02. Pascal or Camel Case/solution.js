function solve() {
    let textToConvert = document.getElementById("text").value;
    let textCase = document.getElementById("naming-convention").value;

    let result = '';

    if (textCase == 'Pascal Case') {
        result = textToConvert
            .split(' ')
            .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join('');

    } else if (textCase == 'Camel Case') {
        let words = textToConvert.split(' ');

        let firstWord = words.shift();
        firstWord = firstWord[0].toLowerCase() + firstWord.slice(1).toLowerCase();

        words = words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());

        words.unshift(firstWord);

        result = words.join('');

    } else {
        result = "Error!";
    }

    let resultContainer = document.querySelector("div.result-container span#result");

    resultContainer.textContent = result;
}