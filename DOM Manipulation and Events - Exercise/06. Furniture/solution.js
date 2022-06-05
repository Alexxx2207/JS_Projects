function solve() {

    let buttonGenerate = document.getElementsByTagName("button")[0];
    
    buttonGenerate.addEventListener("click", function () {
        let textAreaJSON = document.querySelector('textarea[rows="5"]').value;
        let furnitures = JSON.parse(textAreaJSON);

        let tableBodyElement = document.getElementsByTagName("tbody")[0];

        furnitures.forEach(furniture => {
            let rowElement = document.createElement("tr");

            let imageCell = document.createElement("td");
            let imgElement = document.createElement("img");
            imgElement.src = furniture.img;
            imageCell.appendChild(imgElement);
            rowElement.appendChild(imageCell);

            let nameCell = document.createElement("td");
            let nameElement = document.createElement("p");
            nameElement.textContent = furniture.name;
            nameCell.appendChild(nameElement);
            rowElement.appendChild(nameCell);

            let priceCell = document.createElement("td");
            let priceElement = document.createElement("p");
            priceElement.textContent = furniture.price;
            priceCell.appendChild(priceElement);
            rowElement.appendChild(priceCell);

            let dfCell = document.createElement("td");
            let dfElement = document.createElement("p");
            dfElement.textContent = furniture.decFactor;
            dfCell.appendChild(dfElement);
            rowElement.appendChild(dfCell);

            let checkBoxCell = document.createElement("td");
            let checkBox = document.createElement("input");
            checkBox.checked = false;
            checkBox.type = "checkbox";
            checkBoxCell.appendChild(checkBox)
            rowElement.appendChild(checkBoxCell);


            tableBodyElement.appendChild(rowElement);
        });
    });

    let buttonBuy = document.getElementsByTagName("button")[1];
    
    buttonBuy.addEventListener("click", function () {
        
        let textAreaResult = document.getElementsByTagName("textarea")[1];

        let productsNames = [];
        let productsPrices = [];
        let productsDecFactors = [];

        let checkBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

        checkBoxes.forEach(checkBox => {
            if (checkBox.checked) {
                let infoForCurrentCheckedFurniture = Array.from(checkBox.parentElement.parentElement
                    .querySelectorAll('td p'));

                productsNames.push(infoForCurrentCheckedFurniture[0].textContent);
                productsPrices.push(Number(infoForCurrentCheckedFurniture[1].textContent));
                productsDecFactors.push(Number(infoForCurrentCheckedFurniture[2].textContent));
            }
        });

        let totalPrice = productsPrices.reduce((acc, current) => {
            return acc + current;
        }, 0);
    
        let averageDF = productsDecFactors.reduce((acc, current, index, arr) => {
            if (index == arr.length - 1) {
                acc += current;
                return acc / arr.length
            } else {
                return acc + current;
            }
        }, 0);
        textAreaResult.textContent += `Bought furniture: ${productsNames.join(", ")}\n`;
        textAreaResult.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
        textAreaResult.textContent += `Average decoration factor: ${averageDF}`;
    });
}