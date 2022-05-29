function solve() {
    let inputText = document.getElementById("input").value;
    let outputElement = document.getElementById("output");

    outputElement.textContent = '';

    let parapraphLength = 3;

    let sentences = inputText.split('.').filter(element => element.length > 0);

    for (let i = 0; i < sentences.length; i += parapraphLength) {
        let text = '';

        for (let sentence = i; sentence < sentences.length && sentence < i + parapraphLength; sentence++) {
            text += sentences[sentence] + '. ';
        }

        outputElement.innerHTML += `<p>${text.trim()}</p>`;
    }
}