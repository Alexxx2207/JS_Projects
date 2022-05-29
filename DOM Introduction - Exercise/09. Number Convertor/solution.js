function solve() {
    document.querySelector("div button").addEventListener('click', onClick);

    let binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';

    let hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.textContent = 'Hexadecimal';

    let select = document.querySelector("div#container select#selectMenuTo");
    select.appendChild(binaryOption);
    select.appendChild(hexadecimalOption);

    function onClick() {
        let decimal = Number(document.querySelector("div#container input#input").value);
        let toType = document.querySelector("div#container select#selectMenuTo").value;

        let result = '';

        if (toType == 'binary') {
            result = convertDecimalToBinary(decimal);
        } else if (toType == 'hexadecimal') {
            result = convertDecimalToHexadecimal(decimal);
        }

        let resultContainer = document.getElementById("result");
        resultContainer.value = result;

        function convertDecimalToBinary(decimal) {
            let result = [];

            while (decimal > 0) {
                let remainder = decimal % 2;
                decimal = (decimal - remainder) / 2;

                result.unshift(remainder);
            }

            return result.join('');
        }

        function convertDecimalToHexadecimal(decimal) {
            let result = [];

            while (decimal > 0) {
                let remainder = decimal % 16;
                decimal = (decimal - remainder) / 16;

                if (remainder > 9) {
                    result.unshift(String.fromCharCode(65 + remainder - 10));
                } else {
                    result.unshift(remainder);
                }
            }

            return result.join('');
        }
    }
}