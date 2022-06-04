function encodeAndDecodeMessages() {
    let buttonElements = document.getElementsByTagName("button");

    let textAreaElements = document.getElementsByTagName("textarea");

    buttonElements[0].addEventListener("click", function() {
        let inputText = textAreaElements[0].value;
        textAreaElements[0].value = "";

        let encodedText = [];
        for (let index = 0; index < inputText.length; index++) {
            encodedText.push(String.fromCharCode(inputText.charCodeAt(index) + 1));
        }

        textAreaElements[1].value = encodedText.join("");
    });

    buttonElements[1].addEventListener("click", function() {
        let encodedText = textAreaElements[1].value;

        let decodedText = [];
        for (let index = 0; index < encodedText.length; index++) {
            decodedText.push(String.fromCharCode(encodedText.charCodeAt(index) - 1));
        }

        textAreaElements[1].value = decodedText.join("");
    })
}