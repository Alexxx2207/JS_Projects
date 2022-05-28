function extractText() {
    let lisItems = Array.from(document.querySelectorAll("#items>li"));

    let textAreaElement = document.getElementById("result");

    lisItems.forEach(item => {
        textAreaElement.textContent += item.textContent + "\n";
    });
}