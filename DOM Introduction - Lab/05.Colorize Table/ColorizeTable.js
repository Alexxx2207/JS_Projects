function colorize() {
    let elements = Array.from(document.querySelectorAll("table tr:nth-of-type(2n)"));

    for (const el of elements) {
        el.style.backgroundColor = 'teal';

    }
}