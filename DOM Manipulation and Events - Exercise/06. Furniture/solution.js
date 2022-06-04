function solve() {
    let furnitures = JSON.parse(require('./furniture.json'));

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

        let checkBox = document.createElement("input");
        checkBox.disabled = true;
        checkBox.type = "checkbox";
        rowElement.appendChild(checkBox);
    });

    let button = document.getElementsByTagName("button");
}