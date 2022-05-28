function extract(content) {
    let text = document.getElementById("content").textContent;

    let words = Array.from(text.match(/\([\w\s]+\)/g))
    .map(element => {
         return element.slice(1, -1);
    });

    return words.join("; ")
}